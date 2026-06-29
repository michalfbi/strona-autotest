import React, { useState } from 'react';
import { Shield, CheckCircle, FileText, AlertTriangle, ArrowRight, Activity, Search } from 'lucide-react';

export const VinReport = () => {
  const [vin, setVin] = useState('');
  const [vinTouched, setVinTouched] = useState(false);
  const [vinValid, setVinValid] = useState(false);
  const VIN_REGEX = /^[A-HJ-NPR-Z0-9]{17}$/i;

  const [reportLink, setReportLink] = useState('');
  const [reportLinkTouched, setReportLinkTouched] = useState(false);
  const [reportLinkValid, setReportLinkValid] = useState(false);
  const LINK_REGEX = /^https?:\/\/.+/i;

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  const [status, setStatus] = useState('idle');

  const handleVinChange = (e) => {
    const value = e.target.value.toUpperCase();
    setVin(value);
    setVinValid(VIN_REGEX.test(value));
  };

  const handleVinBlur = () => setVinTouched(true);

  const handleReportLinkChange = (e) => {
    const v = e.target.value.trim();
    setReportLink(v);
    setReportLinkValid(LINK_REGEX.test(v));
  };

  const handleReportLinkBlur = () => setReportLinkTouched(true);

  const handleReportSubmit = (e) => {
    e.preventDefault();
    if (!vinValid || !reportLinkValid || !acceptTerms || !acceptPrivacy) return;
    setStatus('submitting');
    
    // Simulate API call to initiate payment / validation
    setTimeout(() => {
      console.log('Zamówienie Raportu VIN:', { vin, link: reportLink, price: 150 });
      alert("Przekierowanie do bramki płatności PayU/Przelewy24 (Wdrożenie w przygotowaniu).");
      setStatus('idle');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#050505] text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-1/4 left-1/2 w-[800px] h-[800px] bg-[#FFD200] opacity-[0.05] rounded-full blur-[120px] -translate-x-1/2"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD200]/10 border border-[#FFD200]/20 text-[#FFD200] text-xs font-bold uppercase tracking-widest mb-6">
            <Shield className="w-3 h-3" /> Zabezpiecz Swój Zakup
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Poznaj prawdę o swoim<br />
            <span className="text-[#FFD200]">przyszłym aucie.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Wielu sprzedawców ukrywa kosztowne wady i powypadkową przeszłość. Zamów pełny raport bazy danych połączony z ekspercką analizą ogłoszenia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-[#0A0A0A] border border-white/10 p-8 rounded-[2rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#FFD200]/5 rounded-full blur-[60px]"></div>
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <FileText className="text-[#FFD200] w-6 h-6" /> Co otrzymujesz za 150 PLN?
              </h3>
              
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-200">Pełny raport historii z carVertical</h4>
                    <p className="text-sm text-gray-500 mt-1">Szkody komunikacyjne, zjawiska kradzieży, autentyczność przebiegu, ukryte akcje serwisowe.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-200">Weryfikacja rzeczoznawcy samochodowego</h4>
                    <p className="text-sm text-gray-500 mt-1">Ekspert analizuje treść i zdjęcia z ogłoszenia, sprawdzając zgodność opisu ze stanem w bazie.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-200">Kosztorys pakietu startowego</h4>
                    <p className="text-sm text-gray-500 mt-1">Oszacujemy z góry, ile wkładu finansowego będzie wymagało to auto na sam początek użytkowania.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 p-6 rounded-2xl flex gap-4 items-center">
              <AlertTriangle className="text-red-400 w-10 h-10 shrink-0" />
              <p className="text-sm text-red-200 font-medium">
                Ponad 60% weryfikowanych przez nas samochodów z rynku wtórnego miało cofnięty licznik lub zatajoną historię szkodową. Nie bądź kolejną ofiarą oszustów.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative">
            <h3 className="text-2xl font-bold text-white mb-2">Zamów weryfikację ogłoszenia</h3>
            <p className="text-sm text-gray-400 mb-8">Wpisz dane poniżej, opłać usługę i otrzymaj pełny raport e-mail w kilka minut.</p>

            <form onSubmit={handleReportSubmit} className="flex flex-col gap-5">
              <div>
                <label className="text-xs font-semibold text-gray-300 mb-2 block uppercase tracking-wider">Numer VIN</label>
                <input
                  type="text"
                  maxLength={17}
                  value={vin}
                  onChange={handleVinChange}
                  onBlur={handleVinBlur}
                  placeholder="Wpisz 17-znakowy numer VIN"
                  className={`w-full min-h-[56px] px-4 py-3 rounded-xl bg-black border-2 ${vinTouched && !vinValid ? 'border-red-500' : vinValid ? 'border-[#FFD200]' : 'border-white/10'} text-white placeholder:text-gray-600 transition-all focus:outline-none focus:border-[#FFD200]`}
                />
                {vinTouched && !vinValid && <p className="text-red-500 text-xs mt-2">Wymagane dokładnie 17 znaków (bez I, O, Q)</p>}
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 mb-2 block uppercase tracking-wider">Link do ogłoszenia</label>
                <input
                  type="url"
                  value={reportLink}
                  onChange={handleReportLinkChange}
                  onBlur={handleReportLinkBlur}
                  placeholder="Wklej link (Otomoto, OLX, itp.)"
                  className={`w-full min-h-[56px] px-4 py-3 rounded-xl bg-black border-2 ${reportLinkTouched && !reportLinkValid ? 'border-red-500' : reportLinkValid ? 'border-[#FFD200]' : 'border-white/10'} text-white placeholder:text-gray-600 transition-all focus:outline-none focus:border-[#FFD200]`}
                />
                {reportLinkTouched && !reportLinkValid && <p className="text-red-500 text-xs mt-2">Wprowadź poprawny adres URL ogłoszenia</p>}
              </div>

              <div className="flex flex-col gap-3 mt-4 mb-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded bg-[#0A0A0A] border-white/10 text-[#FFD200] focus:ring-[#FFD200] focus:ring-offset-0 focus:ring-1 cursor-pointer transition-colors"
                  />
                  <span className="text-[11px] text-gray-400 leading-tight group-hover:text-gray-300 transition-colors">
                    Rozumiem i akceptuję Regulamin. Wyrażam zgodę na natychmiastowe wykonanie usługi cyfrowej (wygenerowanie raportu) i przyjmuję do wiadomości, że z tego tytułu tracę prawo do odstąpienia od umowy w ciągu 14 dni.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={acceptPrivacy}
                    onChange={(e) => setAcceptPrivacy(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded bg-[#0A0A0A] border-white/10 text-[#FFD200] focus:ring-[#FFD200] focus:ring-offset-0 focus:ring-1 cursor-pointer transition-colors"
                  />
                  <span className="text-[11px] text-gray-400 leading-tight group-hover:text-gray-300 transition-colors">
                    Akceptuję Politykę Prywatności (RODO). Wyrażam zgodę na przekazanie moich danych osobowych (numeru VIN, adresu email) podmiotom trzecim (operatorowi płatności oraz API carVertical) w celu poprawnej realizacji zamówienia.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={!vinValid || !reportLinkValid || !acceptTerms || !acceptPrivacy || status === 'submitting'}
                className={`w-full mt-2 py-4 rounded-xl font-bold text-black transition-all flex justify-center items-center gap-2 ${(vinValid && reportLinkValid && acceptTerms && acceptPrivacy) ? 'bg-[#FFD200] shadow-[0_10px_30px_rgba(255,210,0,0.2)] hover:shadow-[0_15px_40px_rgba(255,210,0,0.3)] hover:-translate-y-1' : 'bg-white/5 text-white opacity-50 pointer-events-none'}`}
              >
                {status === 'submitting' ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                ) : (
                  <>Przejdź do płatności - 150 PLN <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
