import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter">Autotest</Link>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link to="/raport-vin" className="hover:text-[#FFD200] transition-colors">Raport VIN</Link>
          <Link to="/uslugi" className="hover:text-[#FFD200] transition-colors">Usługi</Link>
          <Link to="/cennik" className="hover:text-[#FFD200] transition-colors">Cennik</Link>
          <Link to="/kontakt" className="hover:text-[#FFD200] transition-colors">Kontakt</Link>
          <Link to="/o-nas" className="hover:text-[#FFD200] transition-colors">O nas</Link>
        </div>

        <Link to="/kontakt" className="bg-[#FFD200] text-black px-6 py-2 rounded-lg font-bold text-sm hover:bg-yellow-500 transition-colors">
          Umów wizytę
        </Link>
      </div>
    </nav>
  );
};
