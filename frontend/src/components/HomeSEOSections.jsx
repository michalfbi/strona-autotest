import React from 'react';

export const HomeSEOSections = () => {
  return (
    <form action="https://formsubmit.co/michalpakula12345@gmail.com" method="POST" className="p-8 border border-white/10 rounded-xl">
      <input type="hidden" name="_subject" value="Szybka wycena z sekcji SEO" />
      <input type="url" name="link" placeholder="Wklej link do ogłoszenia" required className="input-field w-full mb-4" />
      <input type="tel" name="phone" placeholder="Twój telefon" required className="input-field w-full mb-4" />
      <button type="submit" className="btn-primary w-full">Poproś o wycenę</button>
    </form>
  );
};
