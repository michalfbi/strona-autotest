import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CommandPalette } from '../UI/CommandPalette';
import { MobileDock } from '../UI/MobileDock';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <CommandPalette />
      <MobileDock />
    </div>
  );
};