import React, { useState, useEffect } from 'react';
import { ShieldCheck, Search, Car } from 'lucide-react';

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const duration = 1500;
    const interval = 30;
    const steps = duration / interval;
    
    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + (100 / steps), 100));
    }, interval);

    const stage1 = setTimeout(() => setStage(1), 500);
    const stage2 = setTimeout(() => setStage(2), 1000);

    const finishTimer = setTimeout(() => {
      setIsFading(true);
      document.body.style.overflow = 'auto';
      setTimeout(() => setIsVisible(false), 500);
    }, duration);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(stage1);
      clearTimeout(stage2);
      clearTimeout(finishTimer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Tło z poświatą */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFD200]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Obracające się eleganckie ringi */}
        <div className="relative w-32 h-32 flex items-center justify-center mb-8">
          <div className="absolute inset-0 border-t-2 border-r-2 border-[#FFD200]/30 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-2 border-b-2 border-l-2 border-[#FFD200]/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          
          <div className="absolute inset-4 bg-[#FFD200]/10 rounded-full blur-md animate-pulse"></div>
          
          <div className="relative text-[#FFD200]">
            {stage === 0 && <Search className="w-10 h-10 animate-pulse" />}
            {stage === 1 && <Car className="w-10 h-10 animate-pulse" />}
            {stage === 2 && <ShieldCheck className="w-10 h-10 animate-pulse" />}
          </div>
        </div>

        {/* Logo */}
        <h1 className="text-3xl font-black tracking-[0.2em] text-white uppercase mb-8">
          Auto<span className="text-[#FFD200]">test</span>
        </h1>

        {/* Pasek postępu */}
        <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden mb-6 relative shadow-[0_0_10px_rgba(255,210,0,0.1)]">
          <div 
            className="h-full bg-gradient-to-r from-[#FFD200]/50 to-[#FFD200] transition-all duration-75 ease-linear relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
          </div>
        </div>

        {/* Eleganckie hasła marketingowe */}
        <div className="h-6 flex items-center justify-center">
          <p className="text-xs md:text-sm text-gray-400 tracking-widest uppercase font-medium transition-all duration-300">
            {stage === 0 && "Ładowanie..."}
            {stage === 1 && "Niezależne inspekcje pojazdów"}
            {stage === 2 && "Twój bezpieczny zakup"}
          </p>
        </div>
      </div>
    </div>
  );
};
