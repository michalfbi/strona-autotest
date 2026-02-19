import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [stage, setStage] = useState('loading'); 

  useEffect(() => {
    // 1. Obliczamy szerokość paska przewijania
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // 2. Szukamy nagłówka na stronie
    const fixedHeader = document.querySelector('header');
    
    // 3. Blokujemy scrollowanie i dodajemy marginesy dla body
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    
    // 4. Jeśli znaleźliśmy nagłówek, jemu też dodajemy margines, żeby zablokować skok!
    if (fixedHeader) {
      fixedHeader.style.paddingRight = `${scrollbarWidth}px`;
    }

    const timer1 = setTimeout(() => {
      setStage('fading-content');
    }, 400); 

    const timer2 = setTimeout(() => {
      setStage('lifting-curtain');
    }, 500);

    const timer3 = setTimeout(() => {
      setIsVisible(false);
      
      // 5. Przywracamy domyślne zachowanie po zakończeniu
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      if (fixedHeader) {
        fixedHeader.style.paddingRight = '';
      }
    }, 2200); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      
      // Zabezpieczenie czyszczące
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      if (fixedHeader) {
        fixedHeader.style.paddingRight = '';
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
      style={{
        transition: 'transform 1600ms cubic-bezier(0.76, 0, 0.24, 1)',
        transform: stage === 'lifting-curtain' ? 'translateY(-100%)' : 'translateY(0)'
      }}
    >
      <div 
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FFD200]/10 rounded-full blur-[100px] pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>

      <div 
        className={`relative z-10 flex flex-col items-center transition-all duration-300 ease-out ${
          stage !== 'loading' ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
        }`}
      >
        <div className="relative w-32 h-32 flex items-center justify-center mb-8">
          <div className="absolute inset-0 border-t-2 border-r-2 border-[#FFD200]/30 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-2 border-b-2 border-l-2 border-[#FFD200]/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          <div className="absolute inset-4 bg-[#FFD200]/10 rounded-full blur-md animate-pulse"></div>
          <div className="relative text-[#FFD200]">
            <ShieldCheck className="w-10 h-10 animate-pulse" />
          </div>
        </div>

        <h1 className="text-3xl font-black tracking-[0.2em] text-white uppercase">
          Auto<span className="text-[#FFD200]">test</span>
        </h1>
      </div>
    </div>
  );
};
