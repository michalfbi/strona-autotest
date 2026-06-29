import React, { useState } from 'react';
import { Shield, CheckCircle, FileText, AlertTriangle, ArrowRight, Activity, Search } from 'lucide-react';

export const VinReport = () => {
  const [vin, setVin] = useState('');
  const [vinTouched, setVinTouched] = useState(false);
  const [vinValid, setVinValid] = useState(false);
  const VIN_REGEX = /^[A-HJ-NPR-Z0-9]{17}$/i;

  const [link, setLink] = useState('');
  const [linkTouched, setLinkTouched] = useState(false);
  const [linkValid, setLinkValid] = useState(false);
  const LINK_REGEX = /^https?:\/\/.+/i;

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  const handleVinChange = (e) => {
    const value = e.target.value.toUpperCase();
    setVin(value);
    setVinValid(VIN_REGEX.test(value));
  };

  const handleLinkChange = (e) => {
    const value = e.target.value;
    setLink(value);
    setLinkValid(LINK_REGEX.test(value));
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#050505] text-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Kolumna lewa: Argumenty sprzedażowe */}
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Twój własny rzeczoznawca online.</h1>
            <p className="text-lg text-gray-400 mb-10">Nie daj się nabrać na wyczyszczone zdjęcia. Nasz zespół prześwietla historię i kondycję pojazdu, dostarczając twardy werdykt: <strong>warto czy unikać.</strong></p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-[#FFD200] shrink-0" />
                <div>
                  <h3 className="font-bold text-xl">Weryfikacja historii</h3>
                  <p className="text-gray-500">Sprawdzamy dostępne bazy, abyś nie kupił auta z "przekręconym" licznikiem lub powypadkową przeszłością.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Search className="w-8 h-8 text-[#FFD200] shrink-0" />
                <div>
                  <h3 className="font-bold text-xl">Analiza ekspercka zdjęć</h3>
                  <p className="text-gray-500">Wyłapujemy handlarskie triki – od niedopasowanych elementów karoserii po podejrzane detale we wnętrzu.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Activity className="w-8 h-8 text-[#FFD200] shrink-0" />
                <div>
                  <h3 className="font-bold text-xl">Kosztorys startowy</h3>
                  <p className="text-gray-500">Oszacujemy, ile pieniędzy musisz przygotować na "pakiet startowy" zaraz po zakupie.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolumna prawa: Formularz */}
          <div className="bg-[#0A0A0A] p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">Zamów analizę – 150 PLN</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Numer VIN</label>
                <input type="text" maxLength={17} onChange={handleVinChange} onBlur={() => setVinTouched(true)} className="w-full bg-black border border-white/10 p-4 rounded-xl text-white" placeholder="Wpisz 17 znaków VIN" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Link do ogłoszenia</label>
                <input type="url" onChange={handleLinkChange} onBlur={() => setLinkTouched(true)} className="w-full bg-black border border-white/10 p-4 rounded-xl text-white" placeholder="https://otomoto.pl/..." />
              </div>

              {/* Checkboxy Prawne */}
              <div className="space-y-4 py-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" onChange={(e) => setAcceptTerms(e.target.checked)} className="mt-1 w-5 h-5 accent-[#FFD200]" />
                  <span className="text-xs text-gray-400">Rozumiem i akceptuję regulamin. Wyrażam zgodę na natychmiastowe rozpoczęcie prac nad analizą (przed upływem 14 dni) i przyjmuję do wiadomości, że z tego tytułu tracę prawo do odstąpienia od umowy, ponieważ usługa ma charakter indywidualny.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" onChange={(e) => setAcceptPrivacy(e.target.checked)} className="mt-1 w-5 h-5 accent-[#FFD200]" />
                  <span className="text-xs text-gray-400">Akceptuję politykę prywatności. Wyrażam zgodę na przetwarzanie moich danych (VIN, e-mail) w celu realizacji indywidualnej analizy pojazdu.</span>
                </label>
              </div>

              <button 
                disabled={!vinValid || !linkValid || !acceptTerms || !acceptPrivacy}
                className="w-full py-5 bg-[#FFD200] text-black font-black rounded-xl hover:bg-yellow-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Wykup analizę ekspercką - 150 PLN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
