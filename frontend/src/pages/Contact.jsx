import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    message: '', 
    consent: false 
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  // Funkcja walidacji email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Funkcja walidacji formularza
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Imię i nazwisko jest wymagane';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Podaj poprawny adres email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon jest wymagany';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Wiadomość jest wymagana';
    }

    if (!formData.consent) {
      newErrors.consent = 'Musisz wyrazić zgodę na przetwarzanie danych';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Funkcja obsługi wysyłki formularza
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Walidacja
    if (!validateForm()) {
      setStatus('idle');
      return;
    }

    setStatus('submitting');

    // Helper to URL-encode payload for Netlify
    const encode = (data) => Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

    try {
      // Mapuj dokładnie na nazwy pól oczekiwane przez Netlify (atrybut name w formularzu)
      const payload = {
        'form-name': 'contact',
        'Imię i Nazwisko': formData.name.trim(),
        'Email': formData.email.trim(),
        'Telefon': formData.phone.trim(),
        'Wiadomość': formData.message.trim(),
        'consent': formData.consent ? 'Tak' : 'Nie',
        '_subject': 'Nowe zgłoszenie kontaktowe - Autotest',
        'bot-field': ''
      };

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Błąd przy wysyłaniu formularza');
      }

      // Sukces — zresetuj stan
      setFormData({ name: '', phone: '', email: '', message: '', consent: false });
      setErrors({});
      setStatus('success');

      // Resetuj status po 5 sekundach
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Błąd podczas wysyłania formularza. Spróbuj ponownie za chwilę.');
      setTimeout(() => { setStatus('idle'); setErrorMessage(''); }, 5000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Map visible form field names to internal state keys when necessary
    const nameMap = {
      'Imię i Nazwisko': 'name',
      'Email': 'email',
      'Telefon': 'phone',
      'Wiadomość': 'message',
      'consent': 'consent'
    };

    const stateKey = nameMap[name] || name;

    setFormData({
      ...formData,
      [stateKey]: type === 'checkbox' ? checked : value
    });
    // Wyczyść błąd dla tego pola gdy użytkownik zacznie pisać
    if (errors[stateKey]) {
      setErrors({ ...errors, [stateKey]: '' });
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
            Wiadomość została wysłana pomyślnie. Skontaktujemy się z Tobą wkrótce.
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
            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden" style={{ display: 'none' }}>
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>
              {/* Global Error Message */}
              {errorMessage && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-400 text-sm">{errorMessage}</p>
                </div>
              )}

              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                  Imię i nazwisko *
                </label>
                <div>
                  <input 
                    id="name"
                    name="Imię i Nazwisko" 
                    type="text"
                    placeholder="Jan Kowalski" 
                    value={formData.name} 
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black/30 border-2 rounded-xl text-white placeholder:text-gray-500 focus:outline-none transition-all duration-300 ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                        : 'border-white/10 focus:border-[#00FFD5] focus:shadow-[0_0_20px_rgba(0,255,213,0.2)]'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name}</p>}
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                  Email *
                </label>
                <div>
                  <input 
                    id="email"
                    name="Email" 
                    type="email" 
                    placeholder="jan@example.com" 
                    value={formData.email} 
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black/30 border-2 rounded-xl text-white placeholder:text-gray-500 focus:outline-none transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                        : 'border-white/10 focus:border-[#00FFD5] focus:shadow-[0_0_20px_rgba(0,255,213,0.2)]'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email}</p>}
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3">
                  Telefon *
                </label>
                <div>
                  <input 
                    id="phone"
                    name="Telefon" 
                    type="tel" 
                    placeholder="+48 123 456 789" 
                    value={formData.phone} 
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black/30 border-2 rounded-xl text-white placeholder:text-gray-500 focus:outline-none transition-all duration-300 ${
                      errors.phone 
                        ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                        : 'border-white/10 focus:border-[#00FFD5] focus:shadow-[0_0_20px_rgba(0,255,213,0.2)]'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-2">{errors.phone}</p>}
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                  Wiadomość *
                </label>
                <div>
                  <textarea 
                    id="message"
                    name="Wiadomość" 
                    placeholder="Opisz Twoją sprawę..." 
                    rows="5"
                    value={formData.message} 
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black/30 border-2 rounded-xl text-white placeholder:text-gray-500 focus:outline-none transition-all duration-300 resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                        : 'border-white/10 focus:border-[#00FFD5] focus:shadow-[0_0_20px_rgba(0,255,213,0.2)]'
                    }`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-2">{errors.message}</p>}
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input 
                  id="consent"
                  type="checkbox" 
                  name="consent"
                  checked={formData.consent} 
                  onChange={handleInputChange}
                  className={`w-5 h-5 rounded border-2 bg-black/30 text-[#FFD200] cursor-pointer focus:outline-none focus:ring-2 transition-all mt-1 flex-shrink-0 ${
                    errors.consent
                      ? 'border-red-500 focus:ring-red-500/30'
                      : 'border-white/10 focus:border-[#00FFD5] focus:ring-[#00FFD5]/30'
                  }`}
                />
                <label htmlFor="consent" className="text-sm text-gray-400 cursor-pointer">
                  Zgadzam się na przetwarzanie moich danych osobowych zgodnie z RODO i otrzymywanie informacji od Autotest *
                </label>
              </div>
              {errors.consent && <p className="text-red-400 text-xs">{errors.consent}</p>}

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 px-6 bg-[#FFD200] text-black font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(255,210,0,0.3)] hover:-translate-y-1 disabled:hover:shadow-none disabled:hover:translate-y-0"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    <span>Wysyłanie...</span>
                  </>
                ) : (
                  <>
                    <span>Wyślij wiadomość</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
