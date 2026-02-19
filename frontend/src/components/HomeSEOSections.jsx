import React from 'react';
import { AlertTriangle, TrendingDown, Car } from 'lucide-react';
import { Badge } from './ui/badge';

export const HomeSEOSections = () => {
  return (
    <>
      <section className="py-20 bg-surface/50 border-y border-glass-border relative z-10 mt-12">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="display-md text-text mb-6">Dlaczego samodzielny zakup to ryzyko?</h2>
            <p className="body-lg text-muted">
              Rynek samochodów używanych w Polsce jest pełen pułapek. Sprzedawcy stosują coraz bardziej zaawansowane metody maskowania usterek. Dowiedz się, przed jakimi kosztami chronimy naszych klientów.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <AlertTriangle className="w-10 h-10 text-primary mb-4" />
              <h3 className="h4 text-text mb-3">Ukryte szkody powypadkowe</h3>
              <p className="body-md text-muted">Wykrywamy niefachowo wspawane elementy, szpachlę na elementach konstrukcyjnych i brakujące poduszki powietrzne.</p>
            </div>
            <div className="feature-card">
              <TrendingDown className="w-10 h-10 text-primary mb-4" />
              <h3 className="h4 text-text mb-3">Cofnięte liczniki</h3>
              <p className="body-md text-muted">Za pomocą specjalistycznych komputerów weryfikujemy rzeczywisty przebieg zapisany w ukrytych modułach sterujących.</p>
            </div>
            <div className="feature-card">
              <Car className="w-10 h-10 text-primary mb-4" />
              <h3 className="h4 text-text mb-3">Pudrowanie wad silnika</h3>
              <p className="body-md text-muted">Zwykła jazda próbna tego nie wykryje. My analizujemy parametry na żywo (live data) diagnozując ukryte usterki.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="display-md text-text mb-6">Co dokładnie sprawdzamy?</h2>
              <p className="body-lg text-muted mb-8">
                Nasz wieloetapowy audyt techniczny, prawny i wizualny kończy się wydaniem obszernego raportu.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                  <div>
                    <h4 className="h4 text-text mb-2">Weryfikacja dokumentów i historii</h4>
                    <p className="body-sm text-muted">Legalność pochodzenia, weryfikacja wpisów w zagranicznych bazach oraz historia serwisowa.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                  <div>
                    <h4 className="h4 text-text mb-2">Badanie powłoki i konstrukcji</h4>
                    <p className="body-sm text-muted">Zaawansowany pomiar grubości lakieru, sprawdzenie punktów zgrzewu i szczelin konstrukcyjnych.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                  <div>
                    <h4 className="h4 text-text mb-2">Diagnostyka komputerowa OBD</h4>
                    <p className="body-sm text-muted">Odczyt kodów błędów ze wszystkich modułów elektronicznych i analiza parametrów DPF/EGR.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass p-8 relative">
              <div className="absolute top-0 right-0 p-4">
                <Badge className="bg-success text-bg border-success">Darmowa weryfikacja</Badge>
              </div>
              <h3 className="h3 text-text mb-6">Prześlij link do oceny</h3>
              <p className="body-sm text-muted mb-6">
                Znalazłeś ciekawe auto na OLX lub Otomoto? Prześlij link. Zrobimy darmową wstępną ocenę w 15 minut!
              </p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Link wysłany! Skontaktujemy się z Tobą.'); }}>
                <input type="url" placeholder="Link do ogłoszenia..." required className="input-field w-full bg-surface" />
                <input type="tel" placeholder="Twój numer telefonu" required className="input-field w-full bg-surface" />
                <button type="submit" className="btn-primary w-full">
                  Poproś o wycenę
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
