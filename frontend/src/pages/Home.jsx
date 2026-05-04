import { HomeSEOSections } from '../components/HomeSEOSections';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Shield, Search, FileText, Gauge, FileCheck, MapPin, Download, Star, AlertTriangle, Link2, Activity, Fingerprint, Car, Cpu } from "lucide-react";

export const Home = () => {
  const navigate = useNavigate();
  const handleConsultationClick = () => navigate("/kontakt");

  // Premium Audit Dashboard
  const PremiumAuditDashboard = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 50);
      return () => clearInterval(timer);
    }, []);

    return (
      <div className="w-full relative mt-8 lg:mt-0 z-20">
        {/* Dekoracyjny glow w tle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFD200]/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        
        <div className="glass rounded-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-6 md:p-8 overflow-hidden relative">
          
          {/* Górna belka statusowa */}
          <div className="flex justify-between items-center pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD200] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFD200]"></span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-gray-400">System Weryfikacji Aktywny</span>
            </div>
            <div className="font-mono text-[11px] text-gray-500">ID: #4920-PL</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lewa strona - Główny wynik */}
            <div className="flex flex-col items-center justify-center bg-black/40 rounded-2xl border border-white/5 p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,210,0,0.1)_0%,transparent_70%)] pointer-events-none"></div>
              
              <div className="relative w-40 h-40 flex items-center justify-center mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#FFD200" strokeWidth="6" 
                          strokeDasharray="283" strokeDashoffset={283 - (283 * 82) / 100} 
                          className="transition-all duration-1000 ease-out" />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-white leading-none">82<span className="text-xl text-gray-500">/100</span></span>
                  <span className="text-[10px] uppercase tracking-widest text-[#FFD200] font-bold mt-1">Trust Score</span>
                </div>
              </div>
              
              <div className="text-center w-full z-10">
                <h3 className="text-white font-bold text-lg">BMW Seria 5 G30</h3>
                <p className="text-gray-400 text-xs mt-1">Status: Pojazd warunkowo polecany</p>
                <div className="mt-4 pt-4 border-t border-white/10 w-full flex justify-between items-center">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Potencjał negocjacji:</span>
                  <span className="text-sm font-bold text-green-400">Wysoki</span>
                </div>
              </div>
            </div>

            {/* Prawa strona - Moduły weryfikacji */}
            <div className="flex flex-col gap-3">
              {/* Moduł 1 */}
              <div className="bg-[#0C0D10]/80 border border-white/10 rounded-xl p-4 flex items-center justify-between group hover:border-[#FFD200]/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <Fingerprint className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">Weryfikacja Prawna</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">VIN & Bazy kradzieżowe</div>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>

              {/* Moduł 2 */}
              <div className="bg-[#0C0D10]/80 border border-white/10 rounded-xl p-4 flex items-center justify-between group hover:border-[#FFD200]/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD200]/10 flex items-center justify-center border border-[#FFD200]/20">
                    <Car className="w-5 h-5 text-[#FFD200]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">Powłoka Lakiernicza</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Wykryto 2 elementy malowane</div>
                  </div>
                </div>
                <AlertTriangle className="w-5 h-5 text-[#FFD200]" />
              </div>

              {/* Moduł 3 */}
              <div className="bg-[#0C0D10]/80 border border-white/10 rounded-xl p-4 flex items-center justify-between group hover:border-[#FFD200]/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <Activity className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">Test Drogowy & Mechanika</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Silnik / Skrzynia / Zawieszenie</div>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>

              {/* Moduł 4 */}
              <div className="bg-[#0C0D10]/80 border border-white/10 rounded-xl p-4 flex items-center justify-between group hover:border-[#FFD200]/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <Cpu className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">Diagnostyka OBD-II</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Skanowanie 42 sterowników</div>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            </div>
          </div>

          {/* Dolny pasek postępu */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-400 mb-2">
              <span>Generowanie pełnego raportu PDF</span>
              <span className="text-[#FFD200]">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-1.5 bg-black rounded-full overflow-hidden border border-white/10">
              <div className="h-full bg-gradient-to-r from-[#FFD200]/50 to-[#FFD200] relative" style={{ width: `${progress}%` }}>
                <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/50 blur-[2px]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen text-text relative bg-[#050505] overflow-x-hidden">
      
      {/* Tło i gradienty */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#FFD200] opacity-[0.08] rounded-full blur-[120px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FFD200] opacity-[0.05] rounded-full blur-[120px] translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="relative z-10">
        
        {/* SEKCJA HERO */}
        <section className="pt-20 pb-16 lg:pt-24 lg:pb-24 border-b border-white/5">
          <div className="container max-w-[1500px] mx-auto px-4 sm:px-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-16 items-center">
              
              <div className="text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD200]/10 border border-[#FFD200]/20 text-[#FFD200] text-xs font-bold uppercase tracking-widest">
                  <Zap className="w-3 h-3 fill-current" />
                  <span>Pomoc w zakupie auta</span>
                </div>
                
                <h1 className="text-5xl xl:text-[64px] font-extrabold leading-[1.05] tracking-tighter text-white">
                  Sprawdzimy auto przed zakupem.<br />
                  <span className="text-[#FFD200]">Kupuj bez ryzyka.</span>
                </h1>
                
                <p className="text-lg text-gray-400 max-w-lg font-light leading-relaxed">
                  Nie kupuj kota w worku. Pojedziemy na miejsce, dokładnie zbadamy samochód i powiemy Ci, czy warto go kupić. Chronimy przed oszustami i kosztownymi naprawami.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { t: "Sprawdzenie silnika i błędów", i: Cpu },
                    { t: "Badanie bezwypadkowości", i: Gauge },
                    { t: "Prawdziwy przebieg i historia", i: Shield },
                    { t: "Pomoc w obniżeniu ceny", i: FileCheck }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                      <item.i className="w-5 h-5 text-[#FFD200] shrink-0" />
                      <span className="text-sm font-medium text-gray-300">{item.t}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button onClick={handleConsultationClick} className="group px-8 py-4 bg-[#FFD200] text-black font-black text-lg rounded-xl hover:shadow-[0_0_40px_rgba(255,210,0,0.3)] transition-all flex items-center justify-center gap-3">
                    Darmowa konsultacja
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-white/5 text-white font-semibold text-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" /> Wzór raportu
                  </button>
                </div>
              </div>
              
              <div className="w-full animate-in fade-in slide-in-from-right-8 duration-1000 delay-150">
                <PremiumAuditDashboard />
              </div>

            </div>
          </div>
        </section>

        {/* DLACZEGO MY */}
        <section className="py-24 relative overflow-hidden bg-surface/30 border-y border-glass-border">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="container relative z-10 max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 rounded-full backdrop-blur-md">
                Przewaga konkurencyjna
              </div>
              <h2 className="display-md text-text mb-6">
                Dlaczego <span className="text-primary">Autotest</span>?
              </h2>
              <p className="body-lg max-w-2xl mx-auto text-muted">
                Nie jesteśmy zwykłym rzeczoznawcą. Jesteśmy Twoim osobistym doradcą, negocjatorem i tarczą przed oszustami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 glass p-8 md:p-10 relative overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-20 -mt-20 transition-opacity group-hover:bg-primary/20"></div>
                <Shield className="w-12 h-12 text-primary mb-6 relative z-10" />
                <h3 className="h2 text-text mb-4 relative z-10">100% Niezależni. Gramy do Twojej bramki.</h3>
                <p className="body-lg text-muted mb-6 relative z-10 max-w-xl">
                  Wielu "ekspertów" współpracuje z komisami za prowizję od sprzedaży. My działamy <strong className="text-gray-200">wyłącznie na Twoje zlecenie</strong>. Naszym celem nie jest to, żebyś po prostu kupił auto – naszym celem jest to, żebyś nie kupił skarbonki bez dna.
                </p>
              </div>

              <div className="glass p-8 relative overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 flex flex-col">
                <FileCheck className="w-12 h-12 text-primary mb-6" />
                <h3 className="h3 text-text mb-4">Fakty, nie gdybanie</h3>
                <p className="body-md text-muted mb-6 flex-grow">
                  Otrzymujesz rygorystyczny raport PDF. Konkretne usterki, pomiary i zdjęcia.
                </p>
              </div>

              <div className="glass p-8 relative overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1">
                <div className="text-3xl font-black text-primary mb-2">~12%</div>
                <h3 className="h3 text-text mb-4">Usługa, która się zwraca</h3>
                <p className="body-md text-muted mb-0">
                  Wykryte wady to Twoje twarde argumenty. Średnio negocjujemy od 7% do 15% zniżki dla naszych klientów.
                </p>
              </div>

              <div className="md:col-span-2 glass p-8 relative overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-center">
                <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                  <div className="flex-1">
                    <MapPin className="w-12 h-12 text-primary mb-6" />
                    <h3 className="h3 text-text mb-4">Dojedziemy w każde miejsce</h3>
                    <p className="body-md text-muted">
                      Znalazłeś wymarzone auto na drugim końcu Polski? Nasi inspektorzy pojawią się na miejscu, oszczędzając Twój czas i pieniądze na paliwo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEAD MAGNET */}
        <section className="py-24 relative overflow-hidden bg-surface/20 border-y border-glass-border">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px]"></div>
          </div>

          <div className="container relative z-10 max-w-[1000px] mx-auto">
            <div className="glass p-8 md:p-14 rounded-3xl border border-primary/20 bg-gradient-to-br from-surface/90 to-bg shadow-[0_0_40px_rgba(255,210,0,0.1)] text-center relative overflow-hidden group hover:border-primary/40 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 border border-primary/20 shadow-[0_0_20px_rgba(255,210,0,0.1)] group-hover:scale-110 transition-transform duration-500">
                <Search className="w-8 h-8 text-primary" />
              </div>

              <h2 className="display-md text-text mb-4">
                Znalazłeś <span className="text-primary">ciekawe ogłoszenie</span>?
              </h2>
              
              <p className="body-lg text-muted mb-10 max-w-2xl mx-auto">
                Nie ryzykuj wycieczki na drugi koniec Polski po "igłę". Wklej link z OLX, Otomoto lub Facebooka, a my <strong className="text-gray-200">całkowicie za darmo</strong> ocenimy, czy auto jest warte zachodu.
              </p>

              <form className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4" onSubmit={(e) => { e.preventDefault(); alert('Dziękujemy! Ocenimy to ogłoszenie i wrócimy z odpowiedzią.'); }}>
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Link2 className="h-5 w-5 text-muted" />
                  </div>
                  <input 
                    type="url" 
                    required
                    placeholder="Wklej link do ogłoszenia (Otomoto, OLX...)" 
                    className="w-full h-full min-h-[60px] bg-black/50 border-2 border-white/10 text-text rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-500 text-base md:text-lg"
                  />
                </div>
                <button type="submit" className="btn-primary py-4 px-8 rounded-xl whitespace-nowrap text-lg shadow-[0_0_20px_rgba(255,210,0,0.2)] hover:shadow-[0_0_30px_rgba(255,210,0,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center">
                  Sprawdź za darmo
                </button>
              </form>

              <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-400 font-medium">
                <div className="flex items-center bg-white/5 px-4 py-2 rounded-full border border-white/5"><CheckCircle className="w-4 h-4 text-primary mr-2" /> Wstępna ocena w 15 min</div>
                <div className="flex items-center bg-white/5 px-4 py-2 rounded-full border border-white/5"><CheckCircle className="w-4 h-4 text-primary mr-2" /> Oszczędność czasu i paliwa</div>
                <div className="flex items-center bg-white/5 px-4 py-2 rounded-full border border-white/5"><CheckCircle className="w-4 h-4 text-primary mr-2" /> 100% niezobowiązująco</div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <HomeSEOSections />
    </div>
  );
};
