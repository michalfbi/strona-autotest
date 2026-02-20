import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export const Popup = ({ isOpen, onClose, title, children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      // Mikro-opóźnienie pozwala przeglądarce przygotować klatki animacji
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });

      // Pancerne blokowanie scrolla
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        const header = document.querySelector('header');
        if (header) header.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      setIsAnimating(false);
      // Czekamy aż animacja wyjścia się zakończy (500ms)
      const timer = setTimeout(() => {
        setIsMounted(false);
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        const header = document.querySelector('header');
        if (header) header.style.paddingRight = '';
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
      
      {/* Tło klasy VisionOS: Głęboki blur + Promieniowy gradient */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-xl transition-all duration-500 pointer-events-auto ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,210,0,0.03)_0%,transparent_70%)]"></div>
      </div>

      {/* Kontener Popupa z animacją Skali i Podnoszenia */}
      <div 
        className={`relative w-full max-w-xl pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isAnimating ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-90 opacity-0'
        }`}
      >
        {/* Zewnętrzna poświata (Glow) za oknem */}
        <div className="absolute -inset-4 bg-[#FFD200]/10 blur-3xl rounded-full opacity-50 mix-blend-screen pointer-events-none transition-opacity duration-1000"></div>

        {/* 1-pikselowa ramka gradientowa */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#FFD200]/30 to-white/5 p-[1px] shadow-2xl shadow-black/90">
          
          {/* Główne ciemne tło Popupa */}
          <div className="relative bg-[#050505]/95 backdrop-blur-3xl rounded-2xl overflow-hidden flex flex-col">
            
            {/* Odbicie światła na górnej krawędzi */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            {/* Nagłówek */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-white/5 relative z-10">
              <h2 className="text-xl font-black tracking-[0.15em] text-white uppercase flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FFD200] shadow-[0_0_10px_#FFD200] animate-pulse"></span>
                {title || 'Powiadomienie'}
              </h2>
              <button 
                onClick={onClose}
                className="group relative p-2 text-gray-500 hover:text-white transition-colors duration-300 rounded-full bg-white/5 hover:bg-white/10"
              >
                <X className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-300 ease-out" />
              </button>
            </div>

            {/* Zawartość */}
            <div className="p-6 text-gray-300 font-light leading-relaxed relative z-10">
              {children || (
                <div className="space-y-4">
                  <p className="text-sm opacity-80">
                    Ten komponent reprezentuje absolutny szczyt UI/UX. Każdy element, od wejścia, przez tło, aż po animacje przycisków, został zaprojektowany z myślą o efekcie luksusu.
                  </p>
                </div>
              )}
            </div>
            
            {/* Stopka z interaktywnym przyciskiem */}
            <div className="p-6 pt-2 flex justify-end relative z-10">
              <button 
                onClick={onClose}
                className="relative group overflow-hidden px-8 py-3 bg-transparent border border-[#FFD200]/30 text-[#FFD200] font-black uppercase tracking-[0.1em] text-xs rounded-lg transition-all duration-300 hover:border-[#FFD200] hover:shadow-[0_0_20px_rgba(255,210,0,0.2)]"
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">Zrozumiałem</span>
                {/* Wypełnienie przycisku animujące się od lewej do prawej */}
                <div className="absolute inset-0 bg-[#FFD200] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
