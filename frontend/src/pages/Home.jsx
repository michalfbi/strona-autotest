import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Search, FileText, Gauge, UserCheck, FileCheck, Clock, MapPin, DollarSign } from "lucide-react";
import { mockData } from "../mockData";

const iconMap = {
  UserCheck: UserCheck,
  FileCheck: FileCheck,
  Clock: Clock,
  MapPin: MapPin,
};

const ScannerWidget = () => {
  const widgetRef = useRef(null);
  const modelViewerRef = useRef(null);
  const laserLineRef = useRef(null);
  const laserBandRef = useRef(null);
  const coordHudRef = useRef(null);
  const coordTextRef = useRef(null);
  const statusRef = useRef(null);
  const totalRef = useRef(null);
  const progressBarRef = useRef(null);
  const alertBoxRef = useRef(null);
  const sparksRef = useRef(null);
  const cycleRef = useRef(null);

  useEffect(() => {
    if (!document.querySelector('script[src*="model-viewer"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
      document.head.appendChild(script);
    }
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
      document.head.appendChild(link);
    }

    const defects = [
      { id: "hood", pct: 28, hotId: "hot-hood", title: "ODPRYSKI / MASKA", desc: "Liczne odpryski lakieru na masce. Uszkodzenia warstwy bezbarwnej.", cost: 1500, icon: "fa-solid fa-virus" },
      { id: "door", pct: 49, hotId: "hot-door", title: "WGNIECENIE / DRZWI", desc: "Wgniecenie parkingowe na drzwiach. Bez pęknięcia lakieru (PDR).", cost: 450, icon: "fa-solid fa-compress" },
      { id: "fender", pct: 78, hotId: "hot-fender", title: "RYSA / BŁOTNIK TYŁ", desc: "Głęboka rysa nad nadkolem. Wymagane lakierowanie elementu.", cost: 1200, icon: "fa-solid fa-marker" },
    ];

    const state = { progress: 0, totalLoss: 0, isPaused: false, cycle: 1, hitSet: new Set(), envRot: 0 };
    const baseSpeed = 0.34;
    let animFrame;

    // --- ZAAWANSOWANE "MALOWANIE" I DETALOWANIE MODELU ---
    const applyProMaterials = () => {
      const mv = modelViewerRef.current;
      if (!mv || !mv.model) return;

      const yellowPaint = [1, 0.82, 0, 1]; // #FFD200
      
      mv.model.materials.forEach(material => {
        const name = material.name.toLowerCase();
        
        // Log nazw materiałów do konsoli - pomoże nam namierzyć konkretne części
        console.log("Material found:", material.name);

        // 1. Karoseria (Lakier)
        if (name.includes('body') || name.includes('paint') || name.includes('car_color') || name.includes('shell') || name.includes('exterior')) {
          material.pbrMetallicRoughness.setBaseColorFactor(yellowPaint);
          material.pbrMetallicRoughness.setMetallicFactor(1.0);
          material.pbrMetallicRoughness.setRoughnessFactor(0.04);
          
          // Dodanie efektu "Clearcoat" (lakieru bezbarwnego) dla blasku
          if (material.clearcoatFactor !== undefined) {
            material.setClearcoatFactor(1.0);
            material.setClearcoatRoughnessFactor(0.02);
          }
        }
        
        // 2. Szyby (jeśli są matowe)
        if (name.includes('glass') || name.includes('window')) {
          material.pbrMetallicRoughness.setRoughnessFactor(0);
          material.pbrMetallicRoughness.setMetallicFactor(0.1);
        }

        // 3. Felgi i Chromy
        if (name.includes('rim') || name.includes('chrome') || name.includes('metal')) {
          material.pbrMetallicRoughness.setMetallicFactor(1.0);
          material.pbrMetallicRoughness.setRoughnessFactor(0.1);
        }
      });
    };

    if (modelViewerRef.current) {
      modelViewerRef.current.addEventListener('load', applyProMaterials);
    }

    const setLaser = (x) => {
      if (laserLineRef.current) laserLineRef.current.style.left = `${x}%`;
      if (laserBandRef.current) laserBandRef.current.style.left = `${x}%`;
      if (sparksRef.current) sparksRef.current.style.left = `${x}%`;
      if (coordHudRef.current) coordHudRef.current.style.left = `${x}%`;
      if (coordTextRef.current) coordTextRef.current.textContent = String(Math.floor(x * 42)).padStart(4, '0');
      if (progressBarRef.current) progressBarRef.current.style.width = `${x}%`;
    };

    const triggerDefect = (defect) => {
      state.isPaused = true;
      widgetRef.current?.classList.add("is-paused");
      document.getElementById(defect.hotId)?.classList.add("active");
      const alert = alertBoxRef.current;
      if (alert) {
        alert.querySelector("#alertTitle").textContent = defect.title;
        alert.querySelector("#alertDesc").textContent = defect.desc;
        alert.querySelector("#alertCost").textContent = defect.cost.toLocaleString("pl-PL");
        alert.querySelector("#alertLog").textContent = String(state.hitSet.size).padStart(3, '0');
        alert.style.left = `${Math.max(22, Math.min(78, defect.pct))}%`;
        alert.classList.add("visible");
      }
      state.totalLoss += defect.cost;
      if (totalRef.current) {
        totalRef.current.classList.add("text-[#FF4D4D]");
        totalRef.current.textContent = `-${state.totalLoss.toLocaleString("pl-PL")} PLN`;
      }
      if (statusRef.current) {
        statusRef.current.textContent = "ANOMALY DETECTED // ANALYZING";
        statusRef.current.style.color = "#FF4D4D";
      }
      setTimeout(() => {
        if (alert) alert.classList.remove("visible");
        widgetRef.current?.classList.remove("is-paused");
        state.isPaused = false;
        state.progress += 1.5;
      }, 2400);
    };

    const tick = () => {
      state.envRot += 0.006;
      if (modelViewerRef.current) {
        modelViewerRef.current.setAttribute('environment-rotation', `0 ${state.envRot}rad 0`);
      }
      if (!state.isPaused) {
        state.progress += baseSpeed;
        if (state.progress >= 100) {
          state.progress = 0; state.totalLoss = 0; state.hitSet.clear(); state.cycle += 1;
          if (cycleRef.current) cycleRef.current.textContent = String(state.cycle).padStart(2, '0');
          if (totalRef.current) { totalRef.current.textContent = "0 PLN"; totalRef.current.classList.remove("text-[#FF4D4D]"); }
          defects.forEach(d => document.getElementById(d.hotId)?.classList.remove("active"));
        }
        setLaser(state.progress);
        if (statusRef.current) { statusRef.current.textContent = "SCANNING SURFACES // LIVE"; statusRef.current.style.color = "#F5C400"; }
        for (const d of defects) {
          if (!state.hitSet.has(d.id) && Math.abs(d.pct - state.progress) < 0.5) {
            state.hitSet.add(d.id); triggerDefect(d); break;
          }
        }
      }
      animFrame = requestAnimationFrame(tick);
    };
    animFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <style>{`
        .scanner-widget { position: relative; width: 100%; aspect-ratio: 16 / 9; background: #07070A; border: 1px solid rgba(255,255,255,.1); border-radius: 24px; overflow: hidden; box-shadow: 0 30px 80px rgba(0,0,0,.8); isolation: isolate; }
        .scanner-grid { position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.03) 1px, transparent 1px); background-size: 40px 40px; }
        .car-stage { position: absolute; inset: 0; z-index: 10; display: flex; align-items: center; justify-content: center; }
        .laser-line { position: absolute; top: 0; bottom: 0; width: 2px; background: #FFD200; box-shadow: 0 0 15px #FFD200; z-index: 20; }
        .laser-band { position: absolute; top: 0; bottom: 0; width: 100px; background: linear-gradient(90deg, transparent, rgba(255,210,0,0.1), transparent); transform: translateX(-50px); z-index: 19; }
        .alert { position: absolute; top: 15%; width: 260px; transform: translateX(-50%) scale(0.9); opacity: 0; z-index: 50; background: rgba(10,10,12,0.95); border: 1px solid rgba(255,210,0,0.3); border-radius: 14px; backdrop-filter: blur(12px); transition: all 0.3s ease; pointer-events: none; }
        .alert.visible { opacity: 1; transform: translateX(-50%) scale(1); }
        .defect { opacity: 0; position: absolute; width: 24px; height: 24px; border: 2px solid #FF4D4D; border-radius: 50%; background: rgba(255,77,77,0.2); pointer-events: none; z-index: 15; }
        .defect.active { opacity: 1; animation: pulse 1s infinite; }
        @keyframes pulse { 0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; } 50% { transform: translate(-50%, -50%) scale(1.4); opacity: 0.5; } }
        .mono { font-family: "JetBrains Mono", monospace; }
      `}</style>

      {/* DASHBOARD KASKADOWY */}
      <div className="flex flex-col gap-4 w-full mb-4 z-20">
        <div className="flex items-center gap-5 px-6 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#FFD200]/10 rounded-full blur-3xl group-hover:bg-[#FFD200]/20 transition-all duration-500"></div>
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#FFD200]/60 overflow-hidden shadow-lg shrink-0">
            <img src="https://ui-avatars.com/api/?name=Adam+Pakuła&background=111&color=FFD200&size=150" alt="Adam Pakuła" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white font-bold text-lg md:text-xl">Adam Pakuła</span>
              <CheckCircle className="w-5 h-5 text-[#FFD200]" />
            </div>
            <span className="text-[#FFD200] font-semibold text-xs md:text-sm uppercase tracking-wider mb-2">Główny Audytor & Ekspert</span>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed italic pr-4">"Zweryfikowałem ponad 1200 aut. Chronię moich klientów przed ukrytymi wadami i zakupem skarbonki bez dna."</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center px-6 py-4 rounded-2xl bg-[#0C0D10]/80 border border-white/10 backdrop-blur-xl">
             <div className="mono text-[10px] text-[#9AA3B2] uppercase tracking-widest mb-1">Vehicle model</div>
             <div className="text-white font-bold text-lg uppercase tracking-tight">Audi R8 <span className="text-[#FFD200]">Performance</span></div>
          </div>
          <div className="flex items-center justify-between px-8 py-4 rounded-2xl bg-[#0C0D10]/90 border border-[#FFD200]/20 shadow-xl backdrop-blur-xl">
            <div className="text-right w-full">
              <div className="mono text-[11px] text-[#9AA3B2] uppercase mb-1">Wycena uszkodzeń</div>
              <div ref={totalRef} className="mono text-3xl md:text-4xl font-black text-[#FFD200]">0 PLN</div>
              <div ref={statusRef} className="mono text-[10px] text-white/40 mt-1 uppercase transition-all duration-300">Initializing...</div>
            </div>
          </div>
        </div>
      </div>

      <div ref={widgetRef} className="scanner-widget">
        <div className="scanner-grid"></div>
        <div className="car-stage">
          <model-viewer
            ref={modelViewerRef}
            id="car3d"
            src="/r8.glb"
            style={{ width: '100%', height: '100%', background: 'transparent', filter: 'contrast(1.15) brightness(1.15) saturate(1.1)' }}
            exposure="1.6"
            tone-mapping="aces"
            shadow-intensity="3"
            shadow-softness="0.5"
            environment-image="https://modelviewer.dev/shared-assets/environments/aircraft_workshop_01_1k.hdr"
            interaction-prompt="none"
            camera-orbit="90deg 75deg 5.5m"
            field-of-view="30deg"
          ></model-viewer>
          <div id="hot-hood" className="defect" style={{ left: '35%', top: '52%' }}></div>
          <div id="hot-door" className="defect" style={{ left: '51%', top: '64%' }}></div>
          <div id="hot-fender" className="defect" style={{ left: '75%', top: '57%' }}></div>
        </div>
        <div ref={laserBandRef} className="laser-band"></div>
        <div ref={laserLineRef} className="laser-line"></div>
        <div ref={coordHudRef} className="absolute top-[62%] z-40 pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }}>
          <div className="mono text-[10px] px-2 py-1 rounded bg-black/80 text-[#FFD200] border border-white/10 shadow-lg">X:<span ref={coordTextRef}>0000</span></div>
        </div>
        <div ref={alertBoxRef} className="alert">
          <div className="p-4">
            <div className="flex justify-between border-b border-white/10 pb-2 mb-2"><span id="alertTitle" className="text-[#FFD200] font-bold text-xs uppercase">USTERKA</span><span className="text-white/40 text-[10px]">LOG#<span id="alertLog">000</span></span></div>
            <div id="alertDesc" className="text-white/80 text-xs mb-3 italic">Analizowanie powłoki...</div>
            <div className="flex justify-between items-baseline pt-2 border-t border-white/5"><span className="text-white/40 text-[10px]">Naprawa:</span><span className="text-red-500 font-bold text-lg">-<span id="alertCost">0</span> PLN</span></div>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent z-30">
          <div className="flex justify-between items-center mb-2 px-2">
            <div className="mono text-[9px] text-white/50 uppercase tracking-widest font-bold">Scanning: <span className="text-white">Active</span></div>
            <div className="mono text-[9px] text-white/50 uppercase tracking-widest font-bold">Cycle: <span ref={cycleRef} className="text-white">01</span></div>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden border border-white/5"><div ref={progressBarRef} className="h-full bg-[#FFD200] shadow-[0_0_15px_#FFD200]" style={{ width: '0%' }}></div></div>
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-text relative bg-[#050505] overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#FFD200] opacity-10 rounded-full blur-[120px] -translate-y-1/2"></div>
      </div>
      <div className="relative z-10 pt-24 lg:pt-32">
        <div className="container max-w-[1500px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-start">
            <div className="space-y-8 animate-in fade-in duration-1000 lg:pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD200]/10 border border-[#FFD200]/20 text-[#FFD200] text-xs font-bold uppercase tracking-widest">
                <Zap className="w-3 h-3 fill-current" /><span>Inspekcja Premium</span>
              </div>
              <h1 className="text-5xl xl:text-7xl font-extrabold text-white leading-tight">Sprawdź auto<br /><span className="text-[#FFD200]">zanim kupisz.</span></h1>
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">Wykrywamy to, co sprzedawca próbuje ukryć. Profesjonalna inspekcja techniczna i weryfikacja lakieru w Twoim zasięgu.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[{ t: "Skanowanie OBD", i: Search }, { t: "Grubość lakieru", i: Gauge }, { t: "Historia VIN", i: FileText }, { t: "Mechanika", i: Shield }].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                    <item.i className="w-5 h-5 text-[#FFD200]" /><span className="text-sm font-medium text-gray-300">{item.t}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => navigate("/kontakt")} className="group px-8 py-4 bg-[#FFD200] text-black font-black text-lg rounded-xl hover:shadow-[0_0_40px_rgba(255,210,0,0.3)] transition-all flex items-center justify-center gap-3">
                Rezerwuj termin <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="w-full lg:-mt-10">
              <ScannerWidget />
              <div className="mt-8 flex justify-center">
                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono text-gray-400 uppercase tracking-widest">
                   <span className="w-2.5 h-2.5 rounded-full bg-[#FFD200] animate-pulse"></span> Virtual Diagnostic active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
