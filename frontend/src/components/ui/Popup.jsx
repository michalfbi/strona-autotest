import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export const Popup = ({ isOpen, onClose, title, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Aktywacja z minimalnym opóźnieniem, żeby animacja wejścia miała szansę zadziałać
      setTimeout(() => setShow(true), 10);
      
      // Blokada skakania strony przy otwieraniu popupa
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      
      const header = document.querySelector('header');
      if (header) header.style.paddingRight = `${scrollbarWidth}px`;

    } else {
      // Rozpoczęcie animacji zamykania
      setShow(false);
      
      // Zdejmujemy blokadę dopiero jak popup fizycznie zniknie
      const timer = setTimeout(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        const header = document.querySelector('header');
        if (header) header.style.paddingRight = '';
      }, 400); // Czas trwania animacji zamykania

      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      const header = document.querySelector('header');
      if (header) header.style.paddingRight = '';
    };
  }, [isOpen]);

  // Nie renderujemy nic, dopóki popup jest całkowicie zamknięty
  if (!isOpen && !show) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
      
      {/* Ciemne tło z rozmyciem (Glassmorphism) */}
      <div 
        className={`absolute inset-0 bg-[#050505]/80 backdrop-blur-md transition-opacity duration-400 ease-out pointer-events-auto ${
          show ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>

      {/* Główny panel Popupa */}
      <div 
        className={`relative w-full max-w-lg bg-[#0a0a0a] border border-[#FFD200]/20 rounded-2xl shadow-[0_0_50px_rgba(255,210,0,0.1)] overflow-hidden pointer-events-auto transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          show ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-95 opacity-0'
        }`}
      >
        {/* Złoty gradient Premium na górze */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFD200] to-transparent opacity-80"></div>

        {/* Nagłówek okna */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <h2 className="text-xl font-black tracking-[0.1em] text-white uppercase">
            {title || 'Powiadomienie'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-[#FFD200] hover:bg-[#FFD200]/10 transition-colors duration-300 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sekcja zawartości */}
        <div className="p-6 text-gray-300 font-light leading-relaxed">
          {children || (
            <p>Tutaj znajdzie się zawartość okna. Idealne miejsce na krótki formularz kontaktowy, detale usługi lub informację potwierdzającą.</p>
          )}
        </div>
        
        {/* Dolny pasek (np. na przyciski formularza) */}
        <div className="p-6 pt-0 flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-[#FFD200] text-black font-black uppercase tracking-[0.1em] text-sm rounded-lg hover:bg-white hover:shadow-[0_0_20px_rgba(255,210,0,0.4)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
};
