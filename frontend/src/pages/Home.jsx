import { HomeSEOSections } from '../components/HomeSEOSections';
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
      {
        id: "hood", pct: 28, hotId: "hot-hood",
        title: "ODPRYSKI / MASKA", desc: "Liczne odpryski lakieru na masce. Uszkodzenia warstwy bezbarwnej (clear coat).", cost: 1500, icon: "fa-solid fa-virus",
      },
      {
        id: "door", pct: 49, hotId: "hot-door",
        title: "WGNIECENIE / DRZWI", desc: "Wgniecenie parkingowe na przetłoczeniu drzwi kierowcy. Bez pęknięcia lakieru (PDR).", cost: 450, icon: "fa-solid fa-compress",
      },
      {
        id: "fender", pct: 78, hotId: "hot-fender",
        title: "RYSA / BŁOTNIK TYŁ", desc: "Głęboka rysa nad nadkolem. Uszkodzenie do podkładu. Wymagane lakierowanie.", cost: 1200, icon: "fa-solid fa-marker",
      },
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
    const onMouseLeave = () => {
      widget.style.setProperty('--tiltX', '0deg');
      widget.style.setProperty('--tiltY', '0deg');
    };

    widget.addEventListener('mousemove', onMouseMove, { passive: true });
    widget.addEventListener('mouseleave', onMouseLeave, { passive: true });
    setTilt(0.5, 0.4);

    function resetCycle() {
      progress = 0; totalLoss = 0; hitSet = new Set(); cycle += 1;
      cycleEl.textContent = pad(cycle, 2);
      total.textContent = "0 PLN";
      total.classList.remove("text-[#FF4D4D]");
      defects.forEach(d => document.getElementById(d.hotId)?.classList.remove("active"));
      alertBox.classList.remove("visible");
      connector.classList.remove("visible");
    }

    function setLaser(xPct) {
      if(!laserLine) return;
      laserLine.style.left = `${xPct}%`;
      laserBand.style.left = `${xPct}%`;
      sparks.style.left = `${xPct}%`;
      coordHud.style.left = `${xPct}%`;
      coord.textContent = pad(Math.floor(xPct * 42), 4);
      progressBar.style.width = `${xPct}%`;
    }

    function showConnectorToHotspot(hotId) {
      const hot = document.getElementById(hotId);
      if (!hot || !alertBox || !connector) return;
      const hotBox = hot.getBoundingClientRect();
      const aBox = alertBox.getBoundingClientRect();
      const x1 = aBox.left + aBox.width * 0.52;
      const y1 = aBox.top + aBox.height;
      const x2 = hotBox.left + hotBox.width * 0.5;
      const y2 = hotBox.top + hotBox.height * 0.5;
      const dx = x2 - x1, dy = y2 - y1;
      const len = Math.sqrt(dx * dx + dy * dy);
      const ang = Math.atan2(dy, dx) * (180 / Math.PI);
      
      connector.style.left = `${x1}px`;
      connector.style.top = `${y1}px`;
      connector.style.width = `${len}px`;
      connector.style.transform = `rotate(${ang}deg)`;
      connector.classList.add("visible");
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
      alertBox.style.transform = `translateX(-50%) scale(1)`;
      
      const from = totalLoss;
      totalLoss += defect.cost;
      total.classList.add("text-[#FF4D4D]");
      animateNumber(total, from, totalLoss, 420);
      setTimeout(() => { total.textContent = `-${totalLoss.toLocaleString("pl-PL")} PLN`; }, 430);
      
      status.textContent = "ANOMALY DETECTED // ANALYZING";
      status.style.color = "#FF4D4D";
      alertBox.classList.add("visible");
      
      requestAnimationFrame(() => showConnectorToHotspot(defect.hotId));
      
      setTimeout(() => {
        alertBox.classList.remove("visible");
        connector.classList.remove("visible");
        widget.classList.remove("is-paused");
        isPaused = false;
        progress += 1.2;
        setLaser(progress);
      }, 2350);
    }

    function tick() {
      envRot += 0.005;
      const mv = document.getElementById('car3d');
      if (mv) {
        mv.setAttribute('environment-rotation', `0 ${envRot}rad 0`);
      }

      const t = progress / 100;
      const speed = baseSpeed * (0.78 + 0.22 * Math.sin(t * Math.PI));
      if (!isPaused) {
        progress += speed;
        if (progress >= 100) {
          isPaused = true;
          status.textContent = "CYCLE COMPLETE // RESET";
          status.style.color = "#F5C400";
          setTimeout(() => { resetCycle(); isPaused = false; }, 850);
        }
        setLaser(progress);
        status.textContent = "SCANNING SURFACES // LIVE";
        status.style.color = "#F5C400";
        speedLabel.textContent = "AUTO";

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

    setLaser(progress);
    animFrame = requestAnimationFrame(tick);

    const onResize = () => {
      if (connector.classList.contains("visible")) {
        const active = defects.find(d => document.getElementById(d.hotId)?.classList.contains("active"));
        if (active) showConnectorToHotspot(active.hotId);
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animFrame);
      widget.removeEventListener('mousemove', onMouseMove);
      widget.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="w-full flex flex-col">
      <style>{`
        .scanner-widget {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: radial-gradient(900px 500px at 25% 20%, rgba(245,196,0,.14), transparent 55%),
                      radial-gradient(800px 500px at 75% 80%, rgba(255,221,87,.06), transparent 60%),
                      linear-gradient(180deg, rgba(255,255,255,.03), transparent 20%),
                      #07070A;
          border: 1px solid rgba(255,255,255,.10);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,.78);
          isolation: isolate;
          perspective: 1200px;
          --tiltX: 0deg;
          --tiltY: 0deg;
        }
        .scanner-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(to right, rgba(255,255,255,.045) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,.045) 1px, transparent 1px);
          background-size: 54px 54px; opacity: .35;
          mask-image: radial-gradient(circle at 40% 55%, black 58%, transparent 100%); z-index: 0;
        }
        .scanlines {
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(to bottom, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 2px, transparent 6px);
          opacity: .12; z-index: 1; pointer-events: none; mix-blend-mode: overlay;
        }
        .noise {
          position: absolute; inset: -40px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
          opacity: .08; z-index: 2; pointer-events: none; mix-blend-mode: soft-light; transform: rotate(3deg);
        }
        .car-stage {
          position: absolute; left: 50%; top: 50%;
          transform: translate(-50%, -50%) rotateX(var(--tiltX)) rotateY(var(--tiltY));
          transform-style: preserve-3d; 
          width: 98%; 
          height: 85%; 
          z-index: 10;
          transition: transform .35s ease; will-change: transform;
        }
        .scanner-widget.is-paused .car-stage { transform: translate(-50%, -50%) rotateX(var(--tiltX)) rotateY(var(--tiltY)) scale(1.02); }
        .laser { position: absolute; inset: 0; z-index: 25; pointer-events: none; }
        .laser-line {
          position: absolute; top: 6.5%; bottom: 10%; width: 2px;
          background: linear-gradient(180deg, transparent, rgba(245,196,0,.95), transparent);
          filter: drop-shadow(0 0 10px rgba(245,196,0,.55)); transform: translateX(-1px);
        }
        .laser-band {
          position: absolute; top: 6.5%; bottom: 10%; width: 170px; transform: translateX(-85px);
          background: linear-gradient(90deg, transparent, rgba(245,196,0,.12), rgba(245,196,0,.06), transparent);
          filter: blur(.2px); opacity: .9; mix-blend-mode: screen;
        }
        .laser-sparks {
          position: absolute; top: 8%; bottom: 12%; width: 180px; transform: translateX(-90px);
          opacity: .65; mix-blend-mode: screen; mask-image: linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }
        .spark {
          position: absolute; width: 3px; height: 3px; border-radius: 999px; background: rgba(245,196,0,.9);
          filter: blur(.2px) drop-shadow(0 0 8px rgba(245,196,0,.55)); animation: float 1.6s linear infinite;
        }
        @keyframes float { 0% { transform: translateY(0px); opacity: 0; } 10% { opacity: .9; } 100% { transform: translateY(140px); opacity: 0; } }
        .alert {
          position: absolute; top: 14%; left: 50%; width: 290px; transform: translateX(-50%) scale(.96);
          opacity: 0; z-index: 60; pointer-events: none; background: linear-gradient(180deg, rgba(12,13,16,.92), rgba(12,13,16,.78));
          border: 1px solid rgba(255,255,255,.12); border-radius: 14px; box-shadow: 0 18px 50px rgba(0,0,0,.75);
          backdrop-filter: blur(10px); transition: opacity .22s ease, transform .22s ease;
        }
        .alert.visible { opacity: 1; transform: translateX(-50%) scale(1); }
        .alert-head { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border-bottom: 1px solid rgba(255,255,255,.10); font-family: "JetBrains Mono", monospace; font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
        .alert-tag { display: inline-flex; align-items: center; gap: 8px; color: #0B0B0D; background: #F5C400; border-radius: 999px; padding: 4px 10px; font-weight: 800; letter-spacing: .08em; }
        .alert-body { padding: 12px; display: grid; gap: 10px; }
        .alert-desc { color: rgba(237,239,244,.82); font-size: 12px; line-height: 1.45; }
        .alert-cost { display: flex; align-items: baseline; justify-content: space-between; padding-top: 10px; border-top: 1px solid rgba(255,255,255,.08); font-family: "JetBrains Mono", monospace; }
        .cost-val { color: #FF4D4D; font-weight: 800; font-size: 18px; }
        .connector {
          position: absolute; height: 2px; background: linear-gradient(90deg, rgba(255,77,77,.0), rgba(255,77,77,.95));
          filter: drop-shadow(0 0 10px rgba(255,77,77,.35)); transform-origin: 0 50%; opacity: 0; z-index: 59; pointer-events: none;
        }
        .connector.visible { opacity: 1; }
        .defect { opacity: 0; transition: opacity .15s ease; }
        .defect.active { opacity: 1; animation: defectPulse 1s ease-in-out infinite; filter: drop-shadow(0 0 8px rgba(255,77,77,.4)); }
        @keyframes defectPulse { 0% { transform: scale(1); opacity: .9; } 50% { transform: scale(1.06); opacity: .55; } 100% { transform: scale(1); opacity: .9; } }
        .hud-chip { display: inline-flex; align-items: center; gap: 8px; padding: 8px 10px; border-radius: 12px; background: rgba(12,13,16,.75); border: 1px solid rgba(255,255,255,.10); box-shadow: inset 0 1px 0 rgba(255,255,255,.06); }
        .mono { font-family: "JetBrains Mono", monospace; }
        .progress-wrap { position: absolute; left: 18px; right: 18px; bottom: 14px; z-index: 30; }
        .progress { height: 8px; border-radius: 999px; overflow: hidden; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.10); }
        .progress > div { height: 100%; width: 0%; background: linear-gradient(90deg, rgba(245,196,0,.2), rgba(245,196,0,.95), rgba(245,196,0,.35)); box-shadow: 0 0 18px rgba(245,196,0,.25); border-radius: 999px; }
      `}</style>

      {/* PANELE INFORMACYJNE WYCIĄGNIĘTE NAD SKANER - UŁOŻONE KASKADOWO */}
      <div className="flex flex-col gap-4 w-full mb-4 z-20">
        
        {/* GÓRNY RZĄD: Szeroka wizytówka audytora */}
        <div className="flex items-center gap-5 px-6 py-5 rounded-2xl bg-[#0C0D10]/80 border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.02)] backdrop-blur-2xl relative overflow-hidden group w-full hover:bg-white/5 transition-all duration-300">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#FFD200]/10 rounded-full blur-3xl group-hover:bg-[#FFD200]/20 transition-colors duration-500"></div>
          
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#FFD200]/60 shrink-0 shadow-[0_0_15px_rgba(245,196,0,0.3)]">
            <img src="https://ui-avatars.com/api/?name=Adam+Pakuła&background=111&color=FFD200&size=150" alt="Adam Pakuła" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex flex-col relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white font-bold text-lg md:text-xl tracking-wide">Adam Pakuła</span>
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#FFD200]" />
            </div>
            <span className="text-[#FFD200] font-semibold text-xs md:text-sm uppercase tracking-wider mb-2">Główny Audytor & Ekspert</span>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed italic pr-4">
              "Zweryfikowałem ponad 1200 aut na rynku. Chronię moich klientów przed ukrytymi wadami i zakupem skarbonki bez dna. Twoje bezpieczeństwo to mój priorytet."
            </p>
          </div>
        </div>

        {/* DOLNY RZĄD: Model po lewej, Wycena po prawej */}
        <div className="flex flex-col md:flex-row items-stretch justify-between w-full gap-4">
          
          {/* Lewa strona: Model i Badge */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-[#0C0D10]/70 border border-white/10 shadow-[0_0_38px_rgba(245,196,0,.10)] backdrop-blur-md">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#F5C400] text-black font-extrabold">⚡</span>
              <span className="mono text-[10px] tracking-[.22em] uppercase text-[#F5C400]">Diagnostyka lakiernicza</span>
            </div>
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#0C0D10]/80 border border-white/10 shadow-lg backdrop-blur-xl h-full">
              <div>
                <div className="mono text-[10px] tracking-[.22em] uppercase text-[#9AA3B2] mb-1">Vehicle model</div>
                <div className="text-[#EDEFF4] font-semibold text-base tracking-tight">
                  AUDI R8 COUPE <span className="text-white/25">//</span> V10 PERFORMANCE
                </div>
              </div>
            </div>
          </div>

          {/* Prawa strona: Wycena */}
          <div className="flex items-center justify-between md:justify-end gap-5 px-8 py-4 rounded-2xl bg-[#0C0D10]/90 border border-[#FFD200]/20 shadow-[0_15px_40px_-10px_rgba(245,196,0,0.2)] backdrop-blur-xl w-full md:w-auto md:min-w-[360px] h-full">
            <div className="hidden xl:flex w-10 h-10 rounded-full bg-[#FFD200]/10 items-center justify-center border border-[#FFD200]/20 shrink-0">
              <DollarSign className="w-5 h-5 text-[#FFD200]" />
            </div>
            <div className="text-right flex flex-col items-end justify-center w-full md:w-auto">
              <div className="mono text-[10px] tracking-[.2em] uppercase text-[#9AA3B2] mb-1">Wycena uszkodzeń</div>
              <div className="mono text-2xl xl:text-3xl font-black text-[#FFD200] leading-none transition-colors duration-300" id="total">0 PLN</div>
              <div className="mono text-[9px] tracking-[.15em] uppercase text-white/40 mt-1.5 transition-colors duration-300 w-full text-right" id="status">INITIALIZING...</div>
            </div>
          </div>
          
        </div>
      </div>

      {/* GŁÓWNY WIDŻET SKANERA */}
      <div className="scanner-widget" id="widget">
        <div className="scanner-grid"></div>
        <div className="scanlines"></div>
        <div className="noise"></div>

        {/* CAR STAGE */}
        <div className="car-stage" aria-hidden="true">
          <model-viewer
            id="car3d"
            src="/r8.glb"
            style={{ 
              width: '100%', 
              height: '100%', 
              background: 'transparent',
              filter: 'contrast(1.15) saturate(1.2) brightness(1.1) drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
            }}
            exposure="1.4"
            tone-mapping="aces"
            shadow-intensity="3"
            shadow-softness="0.5"
            environment-image="https://modelviewer.dev/shared-assets/environments/aircraft_workshop_01_1k.hdr"
            interaction-prompt="none"
            camera-orbit="90deg 75deg 5.5m"
            field-of-view="30deg"
          ></model-viewer>
          
          <div id="hot-hood" className="defect absolute pointer-events-none" style={{ left: '35%', top: '52%', transform: 'translate(-50%, -50%)' }}>
            <div className="w-8 h-8 rounded-full border-2 border-[rgba(255,77,77,.85)] bg-[rgba(255,77,77,.08)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[rgba(255,77,77,.95)]"></div>
            </div>
          </div>
          <div id="hot-door" className="defect absolute pointer-events-none" style={{ left: '51%', top: '64%', transform: 'translate(-50%, -50%)' }}>
            <div className="w-9 h-9 rounded-full border-2 border-[rgba(255,77,77,.85)] bg-[rgba(255,77,77,.08)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[rgba(255,77,77,.95)]"></div>
            </div>
          </div>
          <div id="hot-fender" className="defect absolute pointer-events-none" style={{ left: '75%', top: '57%', transform: 'translate(-50%, -50%)' }}>
            <div className="w-8 h-8 rounded-full border-2 border-[rgba(255,77,77,.85)] bg-[rgba(255,77,77,.08)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[rgba(255,77,77,.95)]"></div>
            </div>
          </div>
        </div>

        <div className="laser" id="laserLayer">
          <div className="laser-band" id="laserBand"></div>
          <div className="laser-line" id="laserLine"></div>
          <div className="laser-sparks" id="sparks"></div>
          <div className="absolute top-[62%] left-0 translate-x-0 -translate-y-1/2 z-40" id="coordHud" style={{ transform: 'translate(-50%, -50%)' }}>
            <div className="mono text-[10px] px-2 py-1 rounded-md border border-white/10 bg-black/70 text-[#F5C400] shadow-[0_0_24px_rgba(245,196,0,.18)]">
              X:<span id="coord">0000</span>
            </div>
          </div>
        </div>

        <div className="alert" id="alert">
          <div className="alert-head">
            <div className="alert-tag"><span id="alertIcon" className="fa-solid fa-triangle-exclamation"></span> <span id="alertTitle">USTERKA</span></div>
            <div className="text-white/40">LOG#<span id="alertLog">000</span></div>
          </div>
          <div className="alert-body">
            <div className="alert-desc" id="alertDesc">Opis techniczny wykrytej wady.</div>
            <div className="alert-cost">
              <span className="text-white/50 text-[11px]">Szacowany koszt</span>
              <span className="cost-val">-<span id="alertCost">0</span> PLN</span>
            </div>
          </div>
        </div>

        <div className="connector" id="connector"></div>

        <div className="absolute left-0 right-0 bottom-0 z-35 p-4 md:p-6">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="hud-chip hidden sm:inline-flex">
              <div className="flex items-center gap-2 mono text-[10px] tracking-[.16em] uppercase text-white/60">
                <span className="inline-flex w-2.5 h-2.5 rounded-full bg-[#22C55E] shadow-[0_0_12px_rgba(34,197,94,.35)]"></span>
                SYSTEM ONLINE
              </div>
            </div>
            <div className="hud-chip">
              <div className="mono text-[10px] tracking-[.16em] uppercase text-white/60">Scanning: <span className="text-white" id="speedLabel">AUTO</span></div>
            </div>
            <div className="hud-chip hidden sm:inline-flex">
              <div className="mono text-[10px] tracking-[.16em] uppercase text-white/60">Cycle: <span className="text-white" id="cycle">01</span></div>
            </div>
          </div>
          <div className="progress-wrap absolute left-[18px] right-[18px] bottom-[14px]">
            <div className="progress">
              <div id="progressBar"></div>
            </div>
          </div>
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
              
              <div className="text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 flex flex-col justify-center pt-4 lg:pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD200]/10 border border-[#FFD200]/20 text-[#FFD200] text-xs font-bold uppercase tracking-widest">
                  <Zap className="w-3 h-3 fill-current" />
                  <span>Diagnostyka pojazdów przed zakupem</span>
                </div>
                
                <h1 className="text-5xl xl:text-[72px] font-extrabold leading-[1] tracking-tighter text-white">
              <span className="text-primary">Kupujesz auto?</span><br />
              Sprawdzimy je przed zakupem.
            </h1>
                
                <p className="text-lg text-gray-400 max-w-lg font-light leading-relaxed">
                  Bądź pewny swojego zakupu. Wykrywamy to, co handlarz próbuje ukryć przed zakupem.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { t: "Diagnostyka OBD", i: Search },
                    { t: "Pomiar lakieru", i: Gauge },
                    { t: "Weryfikacja VIN", i: FileText },
                    { t: "Ocena mechaniczna", i: Shield }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                      <item.i className="w-5 h-5 text-[#FFD200] shrink-0" />
                      <span className="text-sm font-medium text-gray-300">{item.t}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button onClick={handleConsultationClick} className="group px-8 py-4 bg-[#FFD200] text-black font-black text-lg rounded-xl hover:shadow-[0_0_40px_rgba(255,210,0,0.3)] transition-all flex items-center justify-center gap-3">
                    Rezerwuj termin
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              {/* DODANO lg:-mt-6 ABY PODCIĄGNĄĆ CAŁY PRAWY BLOK POD HEADER */}
              <div className="w-full flex flex-col justify-center items-center mt-8 lg:-mt-6">
                <ScannerWidget />
                
                <div className="mt-8 flex items-center justify-center">
                  <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFD200] animate-pulse shadow-[0_0_12px_#FFD200]"></span>
                    <span className="text-xs md:text-sm font-mono text-gray-300 tracking-[0.15em] uppercase">Zaufaj najlepszym diagnostom w regionie</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden bg-surface/30 border-y border-glass-border">
  {/* Subtelny glow w tle */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

  <div className="container relative z-10 max-w-[1200px] mx-auto">
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 rounded-full backdrop-blur-md">
        Przewaga konkurencyjna
      </div>
      <h2 className="display-md text-text mb-6">
        Dlaczego <span className="text-primary">Autotest</span>?
      </h2>
      <p className="body-lg max-w-2xl mx-auto text-muted">
        Nie jesteśmy zwykłym rzeczoznawcą. Jesteśmy Twoim osobistym doradcą, negocjatorem i tarczą przed oszustami. Zobacz, co zyskujesz wybierając ekspertów.
      </p>
    </div>

    {/* Bento Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* BOX 1: Niezależność (Szeroki) */}
      <div className="md:col-span-2 glass p-8 md:p-10 relative overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-20 -mt-20 transition-opacity group-hover:bg-primary/20"></div>
        <UserCheck className="w-12 h-12 text-primary mb-6 relative z-10" />
        <h3 className="h2 text-text mb-4 relative z-10">100% Niezależni. Gramy do Twojej bramki.</h3>
        <p className="body-lg text-muted mb-6 relative z-10 max-w-xl">
          Wielu "ekspertów" współpracuje z komisami za prowizję od sprzedaży. My działamy <strong className="text-gray-200">wyłącznie na Twoje zlecenie</strong>. Naszym celem nie jest to, żebyś po prostu kupił auto – naszym celem jest to, żebyś nie kupił skarbonki bez dna.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <div className="flex items-center text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
            <CheckCircle className="w-4 h-4 text-primary mr-2" /> Zero ukrytych prowizji
          </div>
          <div className="flex items-center text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
            <CheckCircle className="w-4 h-4 text-primary mr-2" /> Surowa i obiektywna ocena
          </div>
        </div>
      </div>

      {/* BOX 2: Raport (Wąski, wysoki) */}
      <div className="glass p-8 relative overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 flex flex-col">
        <FileCheck className="w-12 h-12 text-primary mb-6" />
        <h3 className="h3 text-text mb-4">Eksperckie raporty</h3>
        <p className="body-md text-muted mb-6 flex-grow">
          Otrzymujesz raport PDF z dziesiątkami zdjęć, wynikami z komputera diagnostycznego i pomiarami lakieru. Konkretne fakty, zero gdybania.
        </p>
        <div className="pt-6 border-t border-white/10 mt-auto">
          <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-3">Weryfikujemy m.in:</div>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-black/50 border border-white/10 rounded text-xs text-gray-300">Korekty wtrysków</span>
            <span className="px-2 py-1 bg-black/50 border border-white/10 rounded text-xs text-gray-300">Stan DPF/EGR</span>
            <span className="px-2 py-1 bg-black/50 border border-white/10 rounded text-xs text-gray-300">Bezwypadkowość</span>
          </div>
        </div>
      </div>

      {/* BOX 3: Oszczędność (Wąski) */}
      <div className="glass p-8 relative overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1">
        <DollarSign className="w-12 h-12 text-primary mb-6" />
        <h3 className="h3 text-text mb-4">Usługa, która się zwraca</h3>
        <p className="body-md text-muted mb-0">
          Dzięki wykrytym usterkom zyskujesz twarde argumenty. Średnio negocjujemy dla klientów <strong className="text-primary font-bold">od 7% do 15% zniżki</strong>. Koszt inspekcji nierzadko zwraca się w całości przy negocjacjach.
        </p>
      </div>

      {/* BOX 4: Zasięg (Szeroki) */}
      <div className="md:col-span-2 glass p-8 relative overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-center">
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
        <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
          <div className="flex-1">
            <MapPin className="w-12 h-12 text-primary mb-6" />
            <h3 className="h3 text-text mb-4">Cała Polska. Bez wymówek.</h3>
            <p className="body-md text-muted">
              Nie trać czasu wolnego i pieniędzy na paliwo, by jechać na drugi koniec kraju po "igłę", która okazuje się powypadkowym ulepem. Nasi inspektorzy dojadą za Ciebie na miejsce oględzin w dowolnym województwie.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-row md:flex-col gap-3 justify-center shrink-0">
            <div className="bg-black/40 px-6 py-4 rounded-xl border border-white/5 text-center flex-1 shadow-inner">
              <div className="text-3xl font-black text-primary mb-1">24h</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Czas reakcji</div>
            </div>
            <div className="bg-black/40 px-6 py-4 rounded-xl border border-white/5 text-center flex-1 shadow-inner">
              <div className="text-3xl font-black text-primary mb-1">16</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Województw</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

        <section className="py-24 border-t border-white/5 relative">
          <div className="absolute inset-0 bg-[#FFD200]/5"></div>
          <div className="container relative z-10 max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Znalazłeś ogłoszenie?</h2>
            <p className="text-xl text-gray-400 mb-10">Nie ryzykuj. Prześlij nam link, a my całkowicie za darmo ocenimy, czy warto w ogóle jechać na miejsce.</p>
            <button onClick={handleConsultationClick} className="px-10 py-5 bg-[#FFD200] text-black font-black text-xl rounded-2xl hover:scale-105 hover:shadow-[0_0_50px_rgba(255,210,0,0.3)] transition-all">
              Skontaktuj się z ekspertem
            </button>
          </div>
        </section>

      </div>
      <HomeSEOSections />
    </div>
  );
};
