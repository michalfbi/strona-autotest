import React, { useState } from 'react';
import { Shield, CheckCircle, FileText, AlertTriangle, ArrowRight, Phone, Search, Car, BadgePercent, TrendingUp, Clock } from 'lucide-react';

export const VinReport = () => {
  const [vin, setVin] = useState('');
  const [vinTouched, setVinTouched] = useState(false);
  const [vinValid, setVinValid] = useState(false);
  const VIN_REGEX = /^[A-HJ-NPR-Z0-9]{17}$/i;

  const [link, setLink] = useState('');
  const [linkTouched, setLinkTouched] = useState(false);
  const [linkValid, setLinkValid] = useState(false);
  const LINK_REGEX = /^https?:\/\/.+/i;

  const [phone, setPhone] = useState('');
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const PHONE_REGEX = /^[0-9+ ]{9,}$/;

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#050505] text-white">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Główna sekcja */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Kolumna lewa: Korzyści */}
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Pełna weryfikacja pojazdu <span className="text-[#FFD200]">z Autotest</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10">Zobacz jak możesz uniknąć dodatkowych kosztów dzięki raportowi Autotest</p>
            
            <div className="space-y-6">
              {[
                { icon: FileText, title: "Szczegółowy raport VIN", desc: "Kompletna historia serwisowa, szkody komunikacyjne i weryfikacja przebiegu." },
                { icon: Search, title: "Analiza ogłoszenia", desc: "Nasz ekspert oceni, czy oferta jest rzetelna i czy w ogóle warto tracić czas na oględziny." },
                { icon: BadgePercent, title: "Zniżka 20% na inspekcję", desc: "Jeśli zdecydujesz się na inspekcję na miejscu, otrzymasz od nas 20% zniżki na tę usługę." },
                { icon: Phone, title: "Zadzwonimy do Ciebie", desc: "Zostaw numer – sami zadzwonimy, aby omówić wyniki raportu i odpowiedzieć na Twoje pytania." },
                { icon: Car, title: "Pomoc w dalszych poszukiwaniach", desc: "Jeśli auto okaże się nietrafione, pomożemy Ci w znalezieniu alternatywnych ofert." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#FFD200]/30 transition-colors">
                  <item.icon className="w-8 h-8 text-[#FFD200] shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolumna prawa: Formularz */}
          <div className="bg-[#0A0A0A] p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl h-fit">
            <h2 className="text-2xl font-bold mb-6">Zamów analizę – 150 PLN</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Numer VIN</label>
                <input type="text" maxLength={17} onChange={(e) => {setVin(e.target.value.toUpperCase()); setVinValid(VIN_REGEX.test(e.target.value.toUpperCase()))}} onBlur={() => setVinTouched(true)} className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:border-[#FFD200] outline-none" placeholder="Wpisz 17 znaków VIN" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Link do ogłoszenia</label>
                <input type="url" onChange={(e) => {setLink(e.target.value); setLinkValid(LINK_REGEX.test(e.target.value))}} onBlur={() => setLinkTouched(true)} className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:border-[#FFD200] outline-none" placeholder="Wklej link (np. Otomoto, OLX)" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Twój numer telefonu</label>
                <input type="tel" onChange={(e) => {setPhone(e.target.value); setPhoneValid(PHONE_REGEX.test(e.target.value))}} onBlur={() => setPhoneTouched(true)} className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:border-[#FFD200] outline-none" placeholder="Wpisz numer telefonu" />
              </div>

              <div className="space-y-4 py-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" onChange={(e) => setAcceptTerms(e.target.checked)} className="mt-1 w-5 h-5 accent-[#FFD200]" />
                  <span className="text-[11px] text-gray-400 leading-tight">Rozumiem i akceptuję regulamin. Wyrażam zgodę na natychmiastowe rozpoczęcie prac nad analizą (przed upływem 14 dni) i przyjmuję do wiadomości, że z tego tytułu tracę prawo do odstąpienia od umowy, ponieważ usługa ma charakter indywidualny.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" onChange={(e) => setAcceptPrivacy(e.target.checked)} className="mt-1 w-5 h-5 accent-[#FFD200]" />
                  <span className="text-[11px] text-gray-400 leading-tight">Akceptuję politykę prywatności. Wyrażam zgodę na przetwarzanie moich danych (VIN, e-mail, telefon) w celu realizacji indywidualnej analizy pojazdu.</span>
                </label>
              </div>

              <button 
                disabled={!vinValid || !linkValid || !phoneValid || !acceptTerms || !acceptPrivacy}
                className="w-full py-5 bg-[#FFD200] text-black font-black rounded-xl hover:bg-yellow-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                Wykup analizę ekspercką - 150 PLN <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Sekcja "Dlaczego warto" */}
        <div className="pt-16 border-t border-white/10">
          <h2 className="text-3xl font-bold text-center mb-12">Dlaczego to najlepsza inwestycja przed zakupem auta?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5">
              <AlertTriangle className="w-10 h-10 text-[#FFD200] mb-4" />
              <h3 className="text-xl font-bold mb-3">Unikasz miny za tysiące</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Zakup auta z ukrytymi wadami to często wydatki rzędu 5 000 – 15 000 PLN na "dzień dobry". Nasza analiza wykrywa ryzykowne egzemplarze, zanim stracisz na nie swoje oszczędności.</p>
            </div>
            <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5">
              <TrendingUp className="w-10 h-10 text-[#FFD200] mb-4" />
              <h3 className="text-xl font-bold mb-3">Argumenty do negocjacji</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Wiedza o faktycznym stanie technicznym to najsilniejsza karta przetargowa. Gdy znasz realne usterki, cena auta przestaje być sztywna – często zwracamy sobie koszt usługi w negocjacjach.</p>
            </div>
            <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5">
              <Clock className="w-10 h-10 text-[#FFD200] mb-4" />
              <h3 className="text-xl font-bold mb-3">Oszczędność czasu i nerwów</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Ile warta jest Twoja sobota? Zamiast jeździć w ciemno przez pół Polski, sprawdzasz auto z domu. Oszczędzasz czas, paliwo i unikasz rozczarowań.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
