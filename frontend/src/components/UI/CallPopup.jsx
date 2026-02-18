import React, { useState, useEffect } from 'react';
import { X, Phone, ExternalLink, Shield, CheckCircle, Sparkles } from 'lucide-react';

export const CallPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Sprawdź czy popup był już wyświetlony w tej sesji
    const popupShown = sessionStorage.getItem('callPopupShown');
    
    if (!popupShown) {
      // Pokaż popup po 5 sekundach
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('callPopupShown', 'true');
        
        // Pokaż tło z opóźnieniem dla płynnej animacji
        setTimeout(() => setShowOverlay(true), 50);
        
        // Pokaż zawartość po animacji wejścia
        setTimeout(() => setShowContent(true), 400);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setShowOverlay(false);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      setShowContent(false);
    }, 300);
  };

  const handleCall = () => {
    window.location.href = 'tel:+48690976790';
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-700 ease-out ${
        showOverlay && !isClosing ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      {/* Sparkle animation */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Sparkles className="absolute top-1/4 left-1/4 w-8 h-8 text-primary animate-pulse" />
        <Sparkles className="absolute top-1/3 right-1/4 w-6 h-6 text-yellow-400 animate-pulse delay-100" />
        <Sparkles className="absolute bottom-1/3 left-1/3 w-7 h-7 text-primary animate-pulse delay-200" />
      </div>

      <div 
        className={`relative max-w-md w-full mx-4 bg-gradient-to-br from-surface via-bg to-surface rounded-2xl shadow-2xl border-4 border-primary overflow-hidden transform transition-all duration-500 ${
          isClosing ? 'scale-95 opacity-0 rotate-3' : showContent ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 -rotate-12'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-primary/30 hover:bg-primary hover:rotate-90 text-white transition-all duration-300"
          aria-label="Zamknij"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Animated accent bar */}
        <div className="h-3 md:h-4 bg-gradient-to-r from-primary via-yellow-400 to-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>

        <div className="p-4 md:p-6">
          {/* Icon with animation */}
          <div className="flex justify-center mb-4 md:mb-5">
            <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary via-yellow-400 to-primary rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-700 ${
              showContent ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
            }`}>
              <Phone className="w-8 h-8 md:w-10 md:h-10 text-white animate-bounce" />
            </div>
          </div>

          {/* Headline */}
          <h3 className={`text-lg md:text-xl font-bold text-center text-white mb-2 md:mb-3 transition-all duration-500 delay-100 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            Znalazłeś auto na <span className="text-primary">OLX, Otomoto</span> lub <span className="text-primary">Facebook</span>?
          </h3>
          
          <div className={`text-center text-sm md:text-base text-white mb-4 md:mb-5 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 py-2 md:py-3 px-3 md:px-4 rounded-xl border-2 border-primary transition-all duration-500 delay-200 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="text-lg md:text-xl font-extrabold text-primary mb-1">🎁 Bezpłatna wstępna ocena</div>
            <div className="text-xs md:text-sm text-white">wystarczy jeden telefon!</div>
          </div>

          {/* Benefits */}
          <div className={`space-y-2 md:space-y-3 mb-4 md:mb-5 bg-black/30 p-3 md:p-4 rounded-xl transition-all duration-500 delay-300 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="flex items-start space-x-2 md:space-x-3">
              <div className="w-6 h-6 md:w-7 md:h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-black" />
              </div>
              <p className="text-xs md:text-sm text-white">
                <strong className="text-primary">Prześlij nam link</strong> do ogłoszenia
              </p>
            </div>
            <div className="flex items-start space-x-2 md:space-x-3">
              <div className="w-6 h-6 md:w-7 md:h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-black" />
              </div>
              <p className="text-xs md:text-sm text-white">
                <strong className="text-primary">Otrzymasz wstępną ocenę</strong> – czy warto kontynuować
              </p>
            </div>
            <div className="flex items-start space-x-2 md:space-x-3">
              <div className="w-6 h-6 md:w-7 md:h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Shield className="w-3 h-3 md:w-4 md:h-4 text-black" />
              </div>
              <p className="text-xs md:text-sm text-white">
                <strong className="text-primary">100% za darmo</strong> – bez zobowiązań
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className={`bg-black/50 border-4 border-primary rounded-2xl p-4 md:p-5 mb-4 md:mb-5 shadow-2xl transition-all duration-500 delay-400 ${
            showContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
          }`}>
            <p className="text-center text-xs md:text-sm text-white mb-2 md:mb-3 font-bold">📞 Zadzwoń teraz:</p>
            <a
              href="tel:+48690976790"
              style={{ background: 'linear-gradient(to right, #FFD200, #FFEB3B, #FFD200)' }}
              className="block w-full hover:brightness-110 text-black font-black text-xl md:text-2xl py-3 md:py-4 px-3 md:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1 shadow-2xl hover:shadow-primary/50 text-center border-4 border-yellow-300"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6 inline-block mr-2 mb-1 animate-pulse" />
              +48 690 976 790
            </a>
            <p className="text-center text-[10px] md:text-xs text-white mt-2 md:mt-3 font-semibold bg-primary/20 py-1.5 md:py-2 px-2 md:px-3 rounded-lg">
              ⏰ Pon-Pt: 8:00-18:00, Sob: 9:00-15:00
            </p>
          </div>

          {/* Alternative action */}
          <button
            onClick={handleClose}
            className={`w-full text-sm md:text-base text-gray-400 hover:text-primary transition-all duration-300 font-medium hover:scale-105 ${
              showContent ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Może później
          </button>
        </div>
      </div>
    </div>
  );
};
