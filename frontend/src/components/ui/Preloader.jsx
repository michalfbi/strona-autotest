import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Zapobiegaj przewijaniu w trakcie ładowania
    document.body.style.overflow = 'hidden';

    // Czas stania w miejscu zanim ZACZNIE się animacja odlotu (1.2s)
    const duration = 1200; 

    const finishTimer = setTimeout(() => {
      setIsFading(true);
      document.body.style.overflow = 'auto'; // Przywróć przewijanie
      
      // WYDŁUŻAMY CZAS SAMEJ ANIMACJI - teraz "odlot" trwa pełne 1.5 sekundy (1500ms)
      setTimeout(() => setIsVisible(false), 1500); 
    }, duration);

    return () => {
      clearTimeout(finishTimer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center transition-all duration-[1500ms] ease-in-out origin-center ${
        isFading ? 'opacity-0 scale-110 blur-xl pointer-events-none' : 'opacity-100 scale-100 blur-0'
      }`}
    >
      {/* Tło z poświatą - znika wolniej */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFD200]/10 rounded-full blur-[100px] pointer-events-none transition-transform duration-[1500ms] ${isFading ? 'scale-[0.2] opacity-0' : 'scale-100 opacity-100'}`}></div>

      {/* Główny kontener zawartości - dużo większe przybliżenie (scale-[4.0]) i dłuższy czas trwania (1500ms) */}
      <div className={`relative z-10 flex flex-col items-center transition-all duration-[1500ms] ease-in-out ${isFading ? 'scale-[4.0] opacity-0' : 'scale-100 opacity-100'}`}>
        
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
