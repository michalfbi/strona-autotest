import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    message: '', 
    consent: false 
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch("/.netlify/functions/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ ...formData, _subject: "Nowe zgłoszenie kontaktowe - Auto Test" })
      });

      if (!response.ok) {
        throw new Error('FormSubmit response not ok');
      }

      setFormData({ name: '', phone: '', email: '', message: '', consent: false });
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#FFD200] opacity-[0.08] rounded-full blur-[120px] -translate-y-1/2"></div>
        </div>
        <div className="relative z-10 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">Dziękujemy!</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.
          </p>
          <button 
            onClick={() => setStatus('idle')} 
            className="px-8 py-3 bg-[#FFD200] text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(255,210,0,0.3)] transition-all hover:-translate-y-1"
          >
            Wróć do formularza
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden pt-24 pb-12">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-[#FFD200] opacity-[0.08] rounded-full blur-[120px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FFD200] opacity-[0.05] rounded-full blur-[120px] translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container max-w-[1500px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD200]/10 border border-[#FFD200]/20 text-[#FFD200] text-xs font-bold uppercase tracking-widest mb-6">
            Porozmawiajmy
          </div>
          <h1 className="text-5xl xl:text-[64px] font-extrabold leading-[1.05] tracking-tighter mb-6">
            Skontaktuj się<br />
            <span className="text-[#FFD200]">z nami</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Masz pytania dotyczące naszych usług? Zostaw nam wiadomość, a my odezwiemy się do Ciebie w ciągu 24 godzin.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FFD200]/10 border border-[#FFD200]/20 flex items-center justify-center group-hover:border-[#FFD200]/50 group-hover:bg-[#FFD200]/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-[#FFD200]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                  <a 
                    href="mailto:dual1518@gmail.com" 
                    className="text-gray-400 hover:text-[#FFD200] transition-colors text-base"
                  >
                    dual1518@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FFD200]/10 border border-[#FFD200]/20 flex items-center justify-center group-hover:border-[#FFD200]/50 group-hover:bg-[#FFD200]/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-[#FFD200]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Telefon</h3>
                  <a 
                    href="tel:+48690976790" 
                    className="text-gray-400 hover:text-[#FFD200] transition-colors text-base"
                  >
                    +48 690 976 790
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FFD200]/10 border border-[#FFD200]/20 flex items-center justify-center group-hover:border-[#FFD200]/50 group-hover:bg-[#FFD200]/20 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-[#FFD200]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Lokalizacja</h3>
                  <p className="text-gray-400 text-base">Kielce, Polska</p>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-3">Dostępność</h3>
              <p className="text-gray-400 mb-4 text-base leading-relaxed">
                Jesteśmy dostępni 7 dni w tygodniu. Zwrócimy się do Ciebie w jak najkrótszym czasie.
              </p>
              <div className="flex items-center gap-2 text-[#FFD200] font-semibold">
                <div className="w-2 h-2 rounded-full bg-[#FFD200] animate-pulse"></div>
                Online i gotowi do pomocy
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                  Imię i nazwisko *
                </label>
                <input 
                  id="name"
                  name="name" 
                  type="text"
                  placeholder="Jan Kowalski" 
                  required 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  className="w-full px-4 py-3 bg-black/30 border-2 border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00FFD5] focus:shadow-[0_0_20px_rgba(0,255,213,0.2)] transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                  Email *
                </label>
                <input 
                  id="email"
                  name="email" 
                  type="email" 
                  placeholder="jan@example.com" 
                  required 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  className="w-full px-4 py-3 bg-black/30 border-2 border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00FFD5] focus:shadow-[0_0_20px_rgba(0,255,213,0.2)] transition-all duration-300"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3">
                  Telefon *
                </label>
                <input 
                  id="phone"
                  name="phone" 
                  type="tel" 
                  placeholder="+48 123 456 789" 
                  required 
                  value={formData.phone} 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  className="w-full px-4 py-3 bg-black/30 border-2 border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00FFD5] focus:shadow-[0_0_20px_rgba(0,255,213,0.2)] transition-all duration-300"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                  Wiadomość *
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  placeholder="Opisz Twoją sprawę..." 
                  required
                  rows="5"
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})} 
                  className="w-full px-4 py-3 bg-black/30 border-2 border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00FFD5] focus:shadow-[0_0_20px_rgba(0,255,213,0.2)] transition-all duration-300 resize-none"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input 
                  id="consent"
                  type="checkbox" 
                  name="consent"
                  required
                  checked={formData.consent} 
                  onChange={(e) => setFormData({...formData, consent: e.target.checked})} 
                  className="w-5 h-5 rounded border-2 border-white/10 bg-black/30 text-[#FFD200] cursor-pointer focus:outline-none focus:border-[#00FFD5] focus:ring-2 focus:ring-[#00FFD5]/30 transition-all mt-1 flex-shrink-0"
                />
                <label htmlFor="consent" className="text-sm text-gray-400 cursor-pointer">
                  Zgadzam się na przetwarzanie moich danych osobowych i otrzymywanie informacji od Autotest
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 px-6 bg-[#FFD200] text-black font-bold text-lg rounded-xl hover:shadow-[0_0_30px_rgba(255,210,0,0.3)] transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    Wyślij wiadomość
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  Błąd przy wysyłaniu. Spróbuj ponownie.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
