import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Shield, Search, FileText, Gauge, UserCheck, FileCheck, Clock, MapPin, DollarSign } from "lucide-react";
import { mockData } from "../mockData";

const iconMap = {
  UserCheck: UserCheck,
  FileCheck: FileCheck,
  Clock: Clock,
  MapPin: MapPin,
};

const ScannerWidget = () => {
  useEffect(() => {
    // Ładowanie skryptów
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

    const widget = document.getElementById("widget");
    const laserLine = document.getElementById("laserLine");
    const laserBand = document.getElementById("laserBand");
    const coordHud = document.getElementById("coordHud");
    const coord = document.getElementById("coord");
    const status = document.getElementById("status");
    const total = document.getElementById("total");
    const progressBar = document.getElementById("progressBar");
    const alertBox = document.getElementById("alert");
    const connector = document.getElementById("connector");
    const modelViewer = document.getElementById("car3d");
    
    const alertTitle = document.getElementById("alertTitle");
    const alertDesc = document.getElementById("alertDesc");
    const alertCost = document.getElementById("alertCost");
    const alertIcon = document.getElementById("alertIcon");
    const alertLog = document.getElementById("alertLog");
    const speedLabel = document.getElementById("speedLabel");
    const cycleEl = document.getElementById("cycle");
    const sparks = document.getElementById("sparks");

    if (!widget) return;

    let progress = 0;
    let totalLoss = 0;
    let isPaused = false;
    let cycle = 1;
    let hitSet = new Set();
    const baseSpeed = 0.34;
    let animFrame;
    let envRot = 0;

    // FUNKCJA ZMIANY KOLORU MODELU NA ŻÓŁTY
    const applyYellowColor = () => {
      if (!modelViewer.model) return;
      // Kolor żółty w formacie RGB (0-1)
      const yellow = [1, 0.82, 0, 1]; 
      
      modelViewer.model.materials.forEach(material => {
        // Celujemy w materiały, które zazwyczaj odpowiadają za lakier (body, car_paint, shell itp.)
        // Jeśli nie znamy nazw, sprawdzamy czy materiał jest metaliczny (lakier zazwyczaj jest)
        if (material.name.toLowerCase().includes('body') || 
            material.name.toLowerCase().includes('paint') || 
            material.name.toLowerCase().includes('car') ||
            material.pbrMetallicRoughness.metallicFactor > 0.5) {
          material.pbrMetallicRoughness.setBaseColorFactor(yellow);
        }
      });
    };

    modelViewer.addEventListener('load', applyYellowColor);

    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const pad = (n, len = 3) => { const s = String(n); return s.length >= len ? s : "0".repeat(len - s.length) + s; };
    const lerp = (a, b, t) => a + (b - a) * t;
    const easeInOut = (t) => t * t * (3 - 2 * t);

    function animateNumber(el, from, to, duration = 450) {
      const start = performance.now();
      const step = (now) => {
        const t = clamp((now - start) / duration, 0, 1);
        const v = Math.round(lerp(from, to, easeInOut(t)));
        el.textContent = v.toLocaleString("pl-PL");
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }

    function makeSparks() {
      if(!sparks) return;
      sparks.innerHTML = "";
      for (let i = 0; i < 12; i++) {
        const d = document.createElement("div");
        d.className = "spark";
        d.style.left = `${Math.random() * 170}px`;
        d.style.top = `${Math.random() * 80}px`;
        d.style.animationDelay = `${Math.random() * 1.2}s`;
        d.style.animationDuration = `${1.1 + Math.random() * 1.1}s`;
        sparks.appendChild(d);
      }
    }
    makeSparks();

    const setTilt = (x, y) => {
      const ry = (x - 0.5) * 10;
      const rx = (0.5 - y) * 6;
      widget.style.setProperty('--tiltX', `${rx.toFixed(2)}deg`);
      widget.style.setProperty('--tiltY', `${ry.toFixed(2)}deg`);
    };

    const onMouseMove = (e) => {
      const r = widget.getBoundingClientRect();
      setTilt((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
    };
    widget.addEventListener('mousemove', onMouseMove, { passive: true });

    function setLaser(xPct) {
      if(!laserLine) return;
      laserLine.style.left = `${xPct}%`;
      laserBand.style.left = `${xPct}%`;
      sparks.style.left = `${xPct}%`;
      coordHud.style.left = `${xPct}%`;
      coord.textContent = pad(Math.floor(xPct * 42), 4);
      progressBar.style.width = `${xPct}%`;
    }

    function trigger(defect) {
      isPaused = true;
      widget.classList.add("is-paused");
      document.getElementById(defect.hotId)?.classList.add("active");
      alertTitle.textContent = defect.title;
      alertDesc.textContent = defect.desc;
      alertCost.textContent = defect.cost.toLocaleString("pl-PL");
      alertIcon.className = defect.icon;
      alertLog.textContent = pad(hitSet.size + 1, 3);
      alertBox.style.left = `${clamp(defect.pct, 22, 78)}%`;
      const from = totalLoss;
      totalLoss += defect.cost;
      total.classList.add("text-[#FF4D4D]");
      animateNumber(total, from, totalLoss, 420);
      status.textContent = "ANOMALY DETECTED // ANALYZING";
      status.style.color = "#FF4D4D";
      alertBox.classList.add("visible");
      setTimeout(() => {
        alertBox.classList.remove("visible");
        widget.classList.remove("is-paused");
        isPaused = false;
        progress += 1.2;
        setLaser(progress);
      }, 2350);
    }

    function tick() {
      envRot += 0.005;
      if (modelViewer) modelViewer.setAttribute('environment-rotation', `0 ${envRot}rad 0`);
      const t = progress / 100;
      const speed = baseSpeed * (0.78 + 0.22 * Math.sin(t * Math.PI));
      if (!isPaused) {
        progress += speed;
        if (progress >= 100) {
          isPaused = true;
          setTimeout(() => { 
            progress = 0; totalLoss = 0; hitSet = new Set(); cycle += 1;
            cycleEl.textContent = pad(cycle, 2);
            total.textContent = "0 PLN";
            defects.forEach(d => document.getElementById(d.hotId)?.classList.remove("active"));
            isPaused = false; 
          }, 850);
        }
        setLaser(progress);
        status.textContent = "SCANNING SURFACES // LIVE";
        status.style.color = "#F5C400";
        for (const d of defects) {
          if (!hitSet.has(d.id) && Math.abs(d.pct - progress) < 0.5) {
            hitSet.add(d.id);
            trigger(d);
            break;
          }
        }
      }
      animFrame = requestAnimationFrame(tick);
    }
    animFrame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrame);
      widget.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="w-full flex flex-col">
      <style>{`
        .scanner-widget {
          position: relative; width: 100%; aspect-ratio: 16 / 9;
          background: radial-gradient(900px 500px at 25% 20%, rgba(245,196,0,.14), transparent 55%), #07070A;
          border: 1px solid rgba(255,255,255,.10); border-radius: 24px; overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,.78); isolation: isolate; perspective: 1200px;
        }
        .scanner-grid { position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.045) 1px, transparent 1px); background-size: 54px 54px; opacity: .35; mask-image: radial-gradient(circle at 40% 55%, black 58%, transparent 100%); }
        .car-stage { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) rotateX(var(--tiltX)) rotateY(var(--tiltY)); transform-style: preserve-3d; width: 98%; height: 85%; z-index: 10; transition: transform .35s ease; }
        .laser { position: absolute; inset: 0; z-index: 25; pointer-events: none; }
        .laser-line { position: absolute; top: 6.5%; bottom: 10%; width: 2px; background: linear-gradient(180deg, transparent, rgba(245,196,0,.95), transparent); filter: drop-shadow(0 0 10px rgba(245,196,0,.55)); }
        .laser-band { position: absolute; top: 6.5%; bottom: 10%; width: 170px; transform: translateX(-85px); background: linear-gradient(90deg, transparent, rgba(245,196,0,.12), rgba(245,196,0,.06), transparent); mix-blend-mode: screen; }
        .spark { position: absolute; width: 3px; height: 3px; border-radius: 999px; background: rgba(245,196,0,.9); animation: float 1.6s linear infinite; }
        @keyframes float { 0% { transform: translateY(0px); opacity: 0; } 10% { opacity: .9; } 100% { transform: translateY(140px); opacity: 0; } }
        .alert { position: absolute; top: 14%; left: 50%; width: 290px; transform: translateX(-50%) scale(.96); opacity: 0; z-index: 60; background: rgba(12,13,16,.92); border: 1px solid rgba(255,255,255,.12); border-radius: 14px; backdrop-filter: blur(10px); transition: 0.22s ease; }
        .alert.visible { opacity: 1; transform: translateX(-50%) scale(1); }
        .defect { opacity: 0; transition: 0.15s ease; }
        .defect.active { opacity: 1; animation: defectPulse 1s ease-in-out infinite; }
        @keyframes defectPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        .mono { font-family: "JetBrains Mono", monospace; }
      `}</style>

      {/* PANELE KASKADOWE */}
      <div className="flex flex-col gap-4 w-full mb-4 z-20">
        <div className="flex items-center gap-5 px-6 py-5 rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-2xl relative overflow-hidden group w-full hover:bg-white/10 transition-all">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#FFD200]/10 rounded-full blur-3xl"></div>
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#FFD200]/60 shrink-0 shadow-lg">
            <img src="https://ui-avatars.com/api/?name=Adam+Pakuła&background=111&color=FFD200&size=150" alt="Adam Pakuła" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white font-bold text-lg md:text-xl">Adam Pakuła</span>
              <CheckCircle className="w-5 h-5 text-[#FFD200]" />
            </div>
            <span className="text-[#FFD200] font-semibold text-xs md:text-sm uppercase tracking-wider mb-2">Główny Audytor & Ekspert</span>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed italic pr-4">
              "Zweryfikowałem ponad 1200 aut. Chronię moich klientów przed ukrytymi wadami i zakupem skarbonki bez dna."
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-between w-full gap-4">
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-[#0C0D10]/70 border border-white/10 backdrop-blur-md">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#F5C400] text-black font-extrabold text-[10px]">⚡</span>
              <span className="mono text-[10px] uppercase text-[#F5C400]">Diagnostyka lakiernicza</span>
            </div>
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#0C0D10]/80 border border-white/10 shadow-lg backdrop-blur-xl h-full">
              <div className="mono text-[10px] text-[#9AA3B2]">Vehicle model: <span className="text-white font-bold text-base">AUDI R8 COUPE</span></div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-5 px-8 py-4 rounded-2xl bg-[#0C0D10]/90 border border-[#FFD200]/20 shadow-xl backdrop-blur-xl md:min-w-[360px]">
            <DollarSign className="w-6 h-6 text-[#FFD200]" />
            <div className="text-right flex flex-col items-end">
              <div className="mono text-[11px] text-[#9AA3B2] uppercase">Wycena uszkodzeń</div>
              <div className="mono text-3xl md:text-4xl font-black text-[#FFD200]" id="total">0 PLN</div>
              <div className="mono text-[10px] text-white/40 mt-2 w-[240px]" id="status">INITIALIZING...</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scanner-widget" id="widget">
        <div className="scanner-grid"></div>
        <div className="car-stage" aria-hidden="true">
          <model-viewer id="car3d" src="/r8.glb" style={{ width: '100%', height: '100%', background: 'transparent', filter: 'contrast(1.15) saturate(1.2) brightness(1.1)' }} exposure="1.4" tone-mapping="aces" shadow-intensity="3" shadow-softness="0.5" environment-image="https://modelviewer.dev/shared-assets/environments/aircraft_workshop_01_1k.hdr" interaction-prompt="none" camera-orbit="90deg 75deg 5.5m" field-of-view="30deg"></model-viewer>
          <div id="hot-hood" className="defect absolute" style={{ left: '35%', top: '52%', transform: 'translate(-50%, -50%)' }}><div className="w-8 h-8 rounded-full border-2 border-red-500 bg-red-500/20"></div></div>
          <div id="hot-door" className="defect absolute" style={{ left: '51%', top: '64%', transform: 'translate(-50%, -50%)' }}><div className="w-8 h-8 rounded-full border-2 border-red-500 bg-red-500/20"></div></div>
          <div id="hot-fender" className="defect absolute" style={{ left: '75%', top: '57%', transform: 'translate(-50%, -50%)' }}><div className="w-8 h-8 rounded-full border-2 border-red-500 bg-red-500/20"></div></div>
        </div>
        <div className="laser" id="laserLayer">
          <div className="laser-band" id="laserBand"></div>
          <div className="laser-line" id="laserLine" style={{ left: '0%' }}></div>
          <div className="laser-sparks" id="sparks"></div>
          <div className="absolute top-[62%] left-0 z-40" id="coordHud" style={{ transform: 'translate(-50%, -50%)' }}><div className="mono text-[10px] px-2 py-1 rounded bg-black/70 text-[#F5C400]">X:<span id="coord">0000</span></div></div>
        </div>
        <div className="alert" id="alert"><div className="p-4"><div className="flex justify-between border-b border-white/10 pb-2 mb-2"><span id="alertTitle" className="text-[#FFD200] font-bold text-xs uppercase">USTERKA</span><span className="text-white/40 text-[10px]">LOG#<span id="alertLog">000</span></span></div><div id="alertDesc" className="text-white/80 text-xs mb-3">...</div><div className="flex justify-between items-baseline pt-2 border-t border-white/5"><span className="text-white/40 text-[10px]">Koszt:</span><span className="text-red-500 font-bold">-<span id="alertCost">0</span> PLN</span></div></div></div>
        <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
          <div className="flex justify-between items-center mb-2">
            <div className="mono text-[10px] text-white/60 uppercase">Scanning: <span className="text-white" id="speedLabel">AUTO</span></div>
            <div className="mono text-[10px] text-white/60 uppercase">Cycle: <span className="text-white" id="cycle">01</span></div>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden"><div id="progressBar" className="h-full bg-[#FFD200] shadow-[0_0_10px_#FFD200]" style={{ width: '0%' }}></div></div>
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  const navigate = useNavigate();
  const handleConsultationClick = () => navigate("/kontakt");

  return (
    <div className="min-h-screen text-text relative bg-[#050505] overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#FFD200] opacity-15 rounded-full blur-[150px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FFD200] opacity-10 rounded-full blur-[150px] translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="relative z-10">
        <section className="pt-20 pb-16 lg:pt-24 lg:pb-24 border-b border-white/5">
          <div className="container max-w-[1500px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12 items-start">
              <div className="text-left space-y-8 animate-in fade-in duration-1000 lg:pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD200]/10 border border-[#FFD200]/20 text-[#FFD200] text-xs font-bold uppercase tracking-widest">
                  <Zap className="w-3 h-3 fill-current" /><span>Modernistyczna Diagnostyka Premium</span>
                </div>
                <h1 className="text-5xl xl:text-[72px] font-extrabold leading-[1] text-white">Kupujesz auto?<br /><span className="text-[#FFD200]">Sprawdź je zanim</span><br />stracisz pieniądze.</h1>
                <p className="text-lg text-gray-400 max-w-lg font-light leading-relaxed">Zintegrowany system wirtualnej inspekcji technicznej. Wykrywamy to, co handlarz próbuje ukryć przed zakupem.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[{ t: "Diagnostyka OBD", i: Search }, { t: "Pomiar lakieru", i: Gauge }, { t: "Weryfikacja VIN", i: FileText }, { t: "Ocena mechaniczna", i: Shield }].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                      <item.i className="w-5 h-5 text-[#FFD200] shrink-0" />
                      <span className="text-sm font-medium text-gray-300">{item.t}</span>
                    </div>
                  ))}
                </div>
                <button onClick={handleConsultationClick} className="group px-8 py-4 bg-[#FFD200] text-black font-black text-lg rounded-xl hover:shadow-[0_0_40px_rgba(255,210,0,0.3)] transition-all flex items-center justify-center gap-3">
                  Rezerwuj termin<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="w-full flex flex-col justify-center items-center lg:-mt-6">
                <ScannerWidget />
                <div className="mt-8 flex items-center justify-center">
                  <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFD200] animate-pulse shadow-[0_0_12px_#FFD200]"></span>
                    <span className="text-xs md:text-sm font-mono text-gray-300 tracking-[0.15em] uppercase">Interaktywny podgląd inspekcji technicznej</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="container max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">Dlaczego <span className="text-[#FFD200]">Autotest?</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {mockData.features.map((feature, idx) => {
                const Icon = iconMap[feature.icon] || CheckCircle;
                return (
                  <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-[#FFD200]/50 transition-colors group shadow-xl">
                    <div className="w-14 h-14 bg-[#FFD200]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Icon className="w-7 h-7 text-[#FFD200]" /></div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
