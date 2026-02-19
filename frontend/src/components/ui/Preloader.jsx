import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Zablokuj scrollowanie w czasie loadingu
    document.body.style.overflow = 'hidden';

    // 1 sekunda statycznej, eleganckiej ekspozycji
    const delayBeforeFade = 1000; 
    
    // 1.2 sekundy (1200ms) na bardzo płynne i powolne przenikanie
    const animationDuration = 1200; 

    const timer = setTimeout(() => {
      setIsFading(true);
      document.body.style.overflow = 'auto'; // Przywróć przewijanie
      
      // Dopiero gdy animacja w pełni się zakończy, usuwamy komponent
      setTimeout(() => setIsVisible(false), animationDuration); 
    }, delayBeforeFade);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
      style={{
        // Główne tło znika niezwykle gładko
        transition: 'opacity 1200ms cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isFading ? 0 : 1,
        pointerEvents: isFading ? 'none' : 'auto'
      }}
    >
      {/* Subtelna poświata w tle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFD200]/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Główny kontener - delikatnie, z dużą gracją unosi się w górę podczas zanikania */}
      <div 
        className="relative z-10 flex flex-col items-center"
        style={{
          transition: 'all 1200ms cubic-bezier(0.33, 1, 0.68, 1)',
          transform: isFading ? 'translateY(-30px)' : 'translateY(0)',
          opacity: isFading ? 0 : 1
        }}
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
