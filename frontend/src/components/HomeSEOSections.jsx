import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export const HomeSEOSections = () => {
  const [formData, setFormData] = useState({ link: '', phone: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/michalpakula12345@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ ...formData, _subject: "Szybka wycena z sekcji SEO" })
      });

      if (!response.ok) {
        throw new Error('FormSubmit response not ok');
      }

      setFormData({ link: '', phone: '' });
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 border border-white/10 rounded-xl text-center">
        <CheckCircle className="mx-auto mb-4 w-12 h-12 text-green-400" />
        <h3 className="text-lg font-semibold text-white">Dziękujemy za zgłoszenie!</h3>
        <p className="text-sm text-gray-400 mt-2">Wkrótce skontaktujemy się z Tobą w sprawie wyceny.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 btn-primary"
        >
          Wyślij kolejne
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} action="https://formsubmit.co/michalpakula12345@gmail.com" method="POST" className="p-8 border border-white/10 rounded-xl">
      <input type="hidden" name="_subject" value="Szybka wycena z sekcji SEO" />
      <input
        type="url"
        name="link"
        placeholder="Wklej link do ogłoszenia"
        required
        value={formData.link}
        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
        className="input-field w-full mb-4"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Twój telefon"
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="input-field w-full mb-4"
      />
      <button type="submit" className="btn-primary w-full">
        {status === 'submitting' ? 'Wysyłanie...' : 'Poproś o wycenę'}
      </button>
    </form>
  );
};
