import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Zap } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main navigation items
  const mainNavigation = [
    { name: 'Usługi', href: '/uslugi' },
    { name: 'Cennik', href: '/cennik' },
    { name: 'Kontakt', href: '/kontakt' }
  ];

  // Company dropdown items
  const companyItems = [
    { name: 'O nas', href: '/o-nas', description: 'Poznaj nasz zespół' },
    { name: 'Case studies', href: '/case-studies', description: 'Przykłady realizacji' },
    { name: 'Blog', href: '/blog', description: 'Poradniki i artykuły' }
  ];

  // All navigation for mobile
  const allNavigation = [
    ...mainNavigation,
    ...companyItems
  ];

  const handleConsultationClick = () => {
    navigate('/kontakt');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
      isScrolled || isOpen 
        ? 'glass shadow-2xl border-b border-glass-border' 
        : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex justify-between items-center py-3">
          {/* Logo with custom image */}
          <Link 
            to="/" 
            className="group flex items-center space-x-2 h-10"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img 
                src="https://customer-assets.emergentagent.com/job_carbuying-pro/artifacts/m135911j_autotest.png" 
                alt="Autotest logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-primary group-hover:text-primary-hover transition-colors duration-300">
              Autotest
            </span>
          </Link>

          {/* Clean Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-6">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-300 px-2 py-1 rounded-lg ${
                  location.pathname === item.href 
                    ? 'text-primary' 
                    : 'text-muted hover:text-text'
                }`}
              >
                <span className="text-sm">{item.name}</span>
              </Link>
            ))}
            
            {/* Company Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className={`group flex items-center space-x-1 font-medium transition-colors duration-300 px-2 py-1 rounded-lg ${
                  companyItems.some(item => location.pathname === item.href)
                    ? 'text-primary' 
                    : 'text-muted hover:text-text'
                }`}
              >
                <span className="text-sm">Firma</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-56 bg-black rounded-xl py-2 shadow-2xl border border-primary/30 z-50"
                >
                  {companyItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`group flex flex-col px-4 py-3 transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-primary bg-primary/10'
                          : 'text-text hover:bg-primary/5'
                      }`}
                    >
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-xs text-muted group-hover:text-text">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Clean Desktop CTA Section */}
          <div className="hidden xl:flex items-center space-x-4">
            <a 
              href="tel:+48690976790" 
              className="flex items-center text-muted hover:text-primary transition-colors duration-300"
              title="Zadzwoń do nas"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">+48 690 976 790</span>
            </a>
            
            <button 
              onClick={handleConsultationClick}
              className="btn-primary px-4 py-2 text-sm"
            >
              Umów konsultację
            </button>
          </div>

          {/* Compact Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-1 text-muted hover:text-primary transition-colors duration-300"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Clean Mobile Navigation */}
        {isOpen && (
          <div className="xl:hidden border-t border-glass-border bg-surface/95 backdrop-blur-xl">
            <div className="py-4 space-y-1">
              {allNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-3 font-medium transition-colors duration-300 ${
                    location.pathname === item.href 
                      ? 'text-primary bg-primary/10' 
                      : 'text-muted hover:text-text'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-glass-border space-y-3">
                <a 
                  href="tel:+48690976790" 
                  className="flex items-center px-6 py-3 text-muted hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 mr-3" />
                  <span className="font-medium">+48 690 976 790</span>
                </a>
                
                <div className="px-6">
                  <button 
                    onClick={handleConsultationClick}
                    className="btn-primary w-full"
                  >
                    Umów konsultację
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};