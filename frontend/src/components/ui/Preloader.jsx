import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [stage, setStage] = useState('loading'); 

  useEffect(() => {
    // Zablokuj scrollowanie
    document.body.style.overflow = 'hidden';

    // JESZCZE SZYBSZY START: Logo zaczyna znikać po 500ms
    const timer1 = setTimeout(() => {
      setStage('fading-content');
    }, 500); 

    // KURTYNA W GÓRĘ: Dokładnie 0.2s szybciej niż poprzednio (rusza po 650ms)
    const timer2 = setTimeout(() => {
      setStage('lifting-curtain');
    }, 650);

    // Całość kończy się po 2350ms (650ms startu + 1600ms animacji + 100ms buforu)
    const timer3 = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }, 2350); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
      style={{
        // Kinowa krzywa przyspieszenia pozostaje bez zmian, tempo kurtyny: 1600ms
        transition: 'transform 1600ms cubic-bezier(0.76, 0, 0.24, 1)',
        transform: stage === 'lifting-curtain' ? 'translateY(-100%)' : 'translateY(0)'
      }}
    >
      {/* Tło z poświatą */}
      <div 
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FFD200]/10 rounded-full blur-[100px] pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>

      {/* Kontener z zawartością - płynne, łagodne zanikanie trwające 400ms */}
      <div 
        className={`relative z-10 flex flex-col items-center transition-all duration-400 ease-out ${
          stage !== 'loading' ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
        }`}
      >
        
        {/* Obracające się eleganckie ringi i tarcza */}
        <div className="relative w-32 h-32 flex items-center justify-center mb-8">
          <div className="absolute inset-0 border-t-2 border-r-2 border-[#FFD200]/30 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-2 border-b-2 border-l-2 border-[#FFD200]/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          
          <div className="absolute inset-4 bg-[#FFD200]/10 rounded-full blur-md animate-pulse"></div>
          
          <div className="relative text-[#FFD200]">
            <ShieldCheck className="w-10 h-10 animate-pulse" />
          </div>
        </div>

        {/* Logo */}
        <h1 className="text-3xl font-black tracking-[0.2em] text-white uppercase">
          Auto<span className="text-[#FFD200]">test</span>
        </h1>
      </div>
    </div>
  );
};
