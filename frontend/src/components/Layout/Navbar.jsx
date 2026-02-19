import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Info, Briefcase, FileText, ArrowRight } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detekcja scrolla dla zmiany stylu nawigacji
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Zamknij menu mobilne przy zmianie podstrony
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const mainNavigation = [
    { name: 'Usługi', href: '/uslugi' },
    { name: 'Cennik', href: '/cennik' },
    { name: 'Kontakt', href: '/kontakt' }
  ];

  const companyItems = [
    { name: 'O nas', href: '/o-nas', description: 'Poznaj nasz zespół ekspertów', icon: Info },
    { name: 'Case studies', href: '/case-studies', description: 'Zobacz nasze udane realizacje', icon: Briefcase },
    { name: 'Blog', href: '/blog', description: 'Wiedza, poradniki i nowości', icon: FileText }
  ];

  const handleConsultationClick = () => {
    navigate('/kontakt');
  };

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-[#050505]/90 backdrop-blur-xl py-3 shadow-[0_15px_40px_rgba(0,0,0,0.8)]' 
          : 'bg-gradient-to-b from-black/80 to-transparent py-5 lg:py-6'
      }`}
    >
      <div className="container max-w-[1500px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link 
            to="/" 
            className="group flex items-center gap-3 relative z-10"
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#FFD200]/50 transition-colors duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-[#FFD200]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="https://customer-assets.emergentagent.com/job_carbuying-pro/artifacts/m135911j_autotest.png" 
                alt="Autotest logo" 
                className="w-7 h-7 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="text-xl font-black tracking-tight text-white group-hover:text-[#FFD200] transition-colors duration-300">
              Autotest
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {mainNavigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-2 ${
                      isActive ? 'text-[#FFD200]' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {/* Animated Underline */}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#FFD200] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 hover:w-full'
                    }`}></span>
                  </Link>
                );
              })}
              
              {/* DROPDOWN (Firma) */}
              <div className="relative group">
                <button className={`flex items-center gap-1 text-sm font-semibold tracking-wide py-2 transition-colors duration-300 ${
                  companyItems.some(item => location.pathname === item.href) ? 'text-[#FFD200]' : 'text-gray-300 group-hover:text-white'
                }`}>
                  Firma
                  <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" />
                  
                  {/* Animated Underline for Dropdown Trigger */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#FFD200] transition-all duration-300 ${
                    companyItems.some(item => location.pathname === item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>

                {/* Dropdown Panel */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="w-[320px] bg-[#0C0D10]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-[0_20px_40px_rgba(0,0,0,0.7)] relative overflow-hidden">
                    {/* Subtle glow inside dropdown */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD200]/5 rounded-full blur-3xl"></div>
                    
                    {companyItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group/item relative z-10"
                      >
                        <div className="w-10 h-10 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center shrink-0 group-hover/item:border-[#FFD200]/30 group-hover/item:bg-[#FFD200]/10 transition-colors duration-200">
                          <item.icon className="w-5 h-5 text-gray-400 group-hover/item:text-[#FFD200] transition-colors" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white group-hover/item:text-[#FFD200] transition-colors mb-0.5">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-400 leading-snug">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            <div className="w-px h-6 bg-white/10"></div>

            {/* CTA SEKCJA (Prawa strona) */}
            <div className="flex items-center gap-6">
              <a 
                href="tel:+48690976790" 
                className="group flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:border-[#FFD200]/30 group-hover:bg-[#FFD200]/10 transition-all">
                  <Phone className="w-4 h-4 text-gray-400 group-hover:text-[#FFD200]" />
                  <div className="absolute inset-0 rounded-full border border-[#FFD200]/0 group-hover:animate-ping group-hover:border-[#FFD200]/50"></div>
                </div>
                <span>+48 690 976 790</span>
              </a>
              
              <button 
                onClick={handleConsultationClick}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#FFD200] text-black text-sm font-bold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(245,196,0,0.15)] hover:shadow-[0_0_30px_rgba(245,196,0,0.3)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Umów wizytę</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div className={`fixed inset-0 bg-[#050505]/95 backdrop-blur-2xl z-40 transition-all duration-500 lg:hidden ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col h-full pt-24 px-6 pb-10 overflow-y-auto">
          
          <nav className="flex flex-col gap-2">
            {[...mainNavigation, ...companyItems].map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={`text-2xl font-bold py-4 border-b border-white/5 transition-all duration-500 transform ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  } ${isActive ? 'text-[#FFD200]' : 'text-gray-300'}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className={`mt-auto pt-8 transition-all duration-500 delay-300 transform ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <a 
              href="tel:+48690976790" 
              className="flex items-center justify-center gap-3 w-full py-4 mb-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold"
            >
              <Phone className="w-5 h-5 text-[#FFD200]" />
              +48 690 976 790
            </a>
            <button 
              onClick={handleConsultationClick}
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#FFD200] text-black font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(245,196,0,0.2)]"
            >
              Umów konsultację
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
};
