import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      // Bezpieczny endpoint niewymagający zewnętrznej konfiguracji backendu.
      // UWAGA: Przy pierwszej wysyłce na adres dual1518@gmail.com przyjdzie mail z linkiem aktywacyjnym od FormSubmit, który należy jednorazowo kliknąć.
      const response = await fetch("https://formsubmit.co/ajax/dual1518@gmail.com", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error("Serwer odrzucił zapytanie.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Nie udało się wysłać wiadomości. Sprawdź połączenie i spróbuj ponownie.");
      console.error("Szczegóły błędu:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Konfiguracja API wysyłkowego */}
        <input type="hidden" name="_subject" value="Nowe zapytanie ze strony Auto Test!" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        
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
          disabled={status === "submitting"}
          className="w-full mt-2 px-8 py-4 bg-[#FFD200] text-black font-bold text-lg rounded-xl hover:shadow-[0_0_30px_rgba(255,210,0,0.3)] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Przetwarzanie..." : "Wyślij wiadomość"}
        </button>
        
        {status === "success" && (
          <div className="p-4 mt-2 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center font-medium animate-pulse">
            Wiadomość została pomyślnie wysłana!
          </div>
        )}
        
        {status === "error" && (
          <div className="p-4 mt-2 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center font-medium">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
