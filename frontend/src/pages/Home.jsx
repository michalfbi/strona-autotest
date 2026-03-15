import { HomeSEOSections } from '../components/HomeSEOSections';
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Shield, Search, FileText, Gauge, AlertTriangle, FileCheck, DollarSign, Download, Star, MapPin, Link2 } from "lucide-react";

export const Home = () => {
  const navigate = useNavigate();
  const handleConsultationClick = () => navigate("/kontakt");

  const ExpertReportPreview = () => {
    return (
      <div className="w-full flex flex-col gap-5 z-20 relative mt-8 lg:mt-0">
        
        {/* Wizytówka Audytora */}
        <div className="flex items-center gap-5 px-6 py-5 rounded-2xl bg-[#0C0D10]/90 border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.02)] backdrop-blur-2xl relative overflow-hidden w-full">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#FFD200]/5 rounded-full blur-3xl"></div>
          
          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#FFD200]/30 shrink-0">
            <img src="https://ui-avatars.com/api/?name=Adam+Pakuła&background=111&color=FFD200&size=150" alt="Adam Pakuła" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex flex-col relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white font-bold text-lg tracking-wide">Adam Pakuła</span>
              <CheckCircle className="w-4 h-4 text-[#FFD200]" />
            </div>
            <span className="text-[#FFD200] font-semibold text-xs uppercase tracking-wider mb-2">Główny Audytor & Ekspert</span>
            <p className="text-gray-400 text-sm leading-relaxed italic pr-4">
              "Opieramy się na faktach, nie na obietnicach sprzedawcy. Zobacz, jak wygląda fragment naszego rzeczywistego raportu z inspekcji."
            </p>
          </div>
        </div>

        {/* Panel Raportu - Twarde dane */}
        <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl relative overflow-hidden">
          
          {/* Header Raportu */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-[#FFD200]" />
                <span className="text-[#FFD200] text-xs font-bold tracking-widest uppercase">Raport Przedzakupowy #4892</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">BMW Seria 5 G30 520d</h3>
              <p className="text-gray-500 font-mono text-xs mt-1">VIN: WBAJF51080G******</p>
            </div>
            <div className="bg-black/50 border border-white/10 px-4 py-3 rounded-xl text-center min-w-[120px]">
              <div className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Ocena końcowa</div>
              <div className="flex items-center justify-center gap-1">
                <span className="text-2xl font-black text-white">8.5</span>
                <span className="text-gray-500 font-bold">/10</span>
              </div>
            </div>
          </div>

          {/* Siatka parametrów */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-start gap-3">
              <Gauge className="w-5 h-5 text-[#FFD200] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-white mb-1">Powłoka lakiernicza</div>
                <div className="text-xs text-gray-400 font-mono">110-140 μm (Oryginał)</div>
                <div className="text-[11px] text-green-400 mt-1">Brak śladów napraw blacharskich</div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-start gap-3">
              <Search className="w-5 h-5 text-[#FFD200] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-white mb-1">Diagnostyka komputerowa</div>
                <div className="text-xs text-gray-400 font-mono">Odczyt: 1 błąd w pamięci (Historyczny)</div>
                <div className="text-[11px] text-[#FFD200] mt-1">Korekty wtryskiwaczy w normie</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-start gap-3">
              <FileCheck className="w-5 h-5 text-[#FFD200] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-white mb-1">Historia serwisowa</div>
                <div className="text-xs text-gray-400 font-mono">ASO BMW do 120tys. km</div>
                <div className="text-[11px] text-green-400 mt-1">Przebieg potwierdzony w bazie</div>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-white mb-1">Znalezione usterki</div>
                <div className="text-xs text-red-300/80 mb-1">• Wyciek z okolic pokrywy zaworów</div>
                <div className="text-xs text-red-300/80">• Klocki hamulcowe tył (kwalifikacja)</div>
              </div>
            </div>
          </div>

          {/* Konkluzja i Negocjacje */}
          <div className="bg-black/40 border border-[#FFD200]/20 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Rekomendacja</div>
              <div className="text-white font-semibold text-sm">Pojazd warunkowo polecany do zakupu.</div>
              <div className="text-gray-400 text-xs mt-1">Wymagany pakiet startowy: ~2500 PLN.</div>
            </div>
            <div className="w-full md:w-auto text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <div className="text-[10px] text-[#FFD200] uppercase tracking-widest mb-1">Nasz argument do negocjacji</div>
              <div className="text-2xl font-black text-white">-3 500 PLN</div>
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
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center">
              
              <div className="text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD200]/10 border border-[#FFD200]/20 text-[#FFD200] text-xs font-bold uppercase tracking-widest">
                  <Zap className="w-3 h-3 fill-current" />
                  <span>Certyfikowani rzeczoznawcy</span>
                </div>
                
                <h1 className="text-5xl xl:text-[72px] font-extrabold leading-[1.05] tracking-tighter text-white">
                  Kupujesz auto?<br />
                  <span className="text-[#FFD200]">My je prześwietlimy.</span>
                </h1>
                
                <p className="text-lg text-gray-400 max-w-lg font-light leading-relaxed">
                  Podejmuj decyzje na podstawie twardych danych, a nie obietnic sprzedawcy. Wykonujemy najbardziej rygorystyczne inspekcje przedzakupowe na rynku.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { t: "Diagnostyka komputerowa", i: Search },
                    { t: "Pomiary lakieru", i: Gauge },
                    { t: "Weryfikacja historii", i: FileText },
                    { t: "Ocena mechaniczna", i: Shield }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                      <item.i className="w-5 h-5 text-[#FFD200] shrink-0" />
                      <span className="text-sm font-medium text-gray-300">{item.t}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button onClick={handleConsultationClick} className="group px-8 py-4 bg-[#FFD200] text-black font-black text-lg rounded-xl hover:shadow-[0_0_40px_rgba(255,210,0,0.3)] transition-all flex items-center justify-center gap-3">
                    Rezerwuj termin
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-white/5 text-white font-semibold text-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" /> Zobacz wzór raportu
                  </button>
                </div>
              </div>
              
              <div className="w-full animate-in fade-in slide-in-from-right-8 duration-1000 delay-150">
                <ExpertReportPreview />
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
                <h3 className="h3 text-text mb-4">Pełna transparentność</h3>
                <p className="body-md text-muted mb-6 flex-grow">
                  Dostarczamy obiektywne fakty. Każda znaleziona rysa i każdy błąd w sterowniku zostaną szczegółowo udokumentowane.
                </p>
              </div>

              <div className="glass p-8 relative overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1">
                <div className="text-3xl font-black text-primary mb-2">~12%</div>
                <h3 className="h3 text-text mb-4">Usługa, która się zwraca</h3>
                <p className="body-md text-muted mb-0">
                  Wykryte wady to twarde argumenty. Średnio negocjujemy od 7% do 15% zniżki dla naszych klientów.
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
