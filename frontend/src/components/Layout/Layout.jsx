import React from 'react';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
  return (
    <div className="bg-[#050505] text-white">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
