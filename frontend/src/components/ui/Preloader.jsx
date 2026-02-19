import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Zapobiegaj przewijaniu w trakcie ładowania
    document.body.style.overflow = 'hidden';

    const duration = 500; // 0.5 sekundy czasu trwania

    const finishTimer = setTimeout(() => {
      setIsFading(true);
      document.body.style.overflow = 'auto'; // Przywróć przewijanie
      // Wydłużamy czas na zamknięcie, aby animacja (800ms) mogła w pełni wybrzmieć
      setTimeout(() => setIsVisible(false), 800); 
    }, duration);

    return () => {
      clearTimeout(finishTimer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.7,0,0.3,1)] origin-center ${
        isFading ? 'opacity-0 scale-[1.15] -translate-y-12 blur-md pointer-events-none' : 'opacity-100 scale-100 translate-y-0 blur-0'
      }`}
    >
      {/* Tło z poświatą - maleje i znika */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFD200]/10 rounded-full blur-[100px] pointer-events-none transition-transform duration-[800ms] ${isFading ? 'scale-50 opacity-0' : 'scale-100 opacity-100'}`}></div>

      {/* Główny kontener zawartości - efekt "odlatywania" do przodu w kierunku użytkownika */}
      <div className={`relative z-10 flex flex-col items-center transition-all duration-[600ms] ease-in ${isFading ? 'scale-150 opacity-0 translate-y-10' : 'scale-100 opacity-100 translate-y-0'}`}>
        
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
