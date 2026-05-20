import React from 'react';

export default function ContactForm() {
  return (
    <div className="w-full max-w-md mx-auto p-8 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
      <form 
        action="https://formsubmit.co/michalpakula12345@gmail.com" 
        method="POST" 
        className="flex flex-col gap-5"
      >
        <input type="hidden" name="_subject" value="Testowe zapytanie ze strony Auto Test!" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ""} />

        <div>
          <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="name">
            Imię i nazwisko
          </label>
          <input 
            id="name"
            type="text" 
            name="name" 
            required 
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFD200] transition-colors"
            placeholder="Wpisz swoje dane"
          />
        </div>

        <div>
          <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="phone">
            Numer telefonu
          </label>
          <input 
            id="phone"
            type="tel" 
            name="phone" 
            required 
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFD200] transition-colors"
            placeholder="+48 000 000 000"
          />
        </div>

        <div>
          <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="email">
            Adres e-mail
          </label>
          <input 
            id="email"
            type="email" 
            name="email" 
            required 
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFD200] transition-colors"
            placeholder="twoj@email.com"
          />
        </div>

        <div>
          <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="message">
            Wiadomość
          </label>
          <textarea 
            id="message"
            name="message" 
            required 
            rows="4"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFD200] transition-colors resize-none"
            placeholder="Jak możemy Ci pomóc?"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="w-full mt-2 px-8 py-4 bg-[#FFD200] text-black font-bold text-lg rounded-xl hover:shadow-[0_0_30px_rgba(255,210,0,0.3)] hover:scale-[1.02] active:scale-95 transition-all"
        >
          Wyślij wiadomość
        </button>
      </form>
    </div>
  );
}
