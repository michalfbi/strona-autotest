import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Calendar, Menu } from 'lucide-react';

export const MobileDock = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsultationClick = () => {
    alert('Przekierowanie do kalendarza konsultacji - funkcja w przygotowaniu');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+48690976790';
  };

  const handleChatClick = () => {
    alert('Chat online - funkcja w przygotowaniu');
  };

  const handleMenuClick = () => {
    alert('Menu szybkich akcji - funkcja w przygotowaniu');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
      <div className="glass px-6 py-3 animate-fade-in">
        <div className="flex items-center space-x-6">
          <button
            onClick={handleCallClick}
            className="flex flex-col items-center space-y-1 text-muted hover:text-primary transition-colors"
            aria-label="Zadzwoń"
          >
            <Phone className="w-5 h-5" />
            <span className="text-xs">Zadzwoń</span>
          </button>

          <button
            onClick={handleChatClick}
            className="flex flex-col items-center space-y-1 text-muted hover:text-primary transition-colors"
            aria-label="Chat"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">Chat</span>
          </button>

          <button
            onClick={handleConsultationClick}
            className="flex flex-col items-center space-y-2 px-4 py-2 bg-primary text-bg rounded-lg hover:bg-primary-hover transition-colors"
            aria-label="Umów konsultację"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-xs font-medium">Konsultacja</span>
          </button>

          <button
            onClick={handleMenuClick}
            className="flex flex-col items-center space-y-1 text-muted hover:text-primary transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
            <span className="text-xs">Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};