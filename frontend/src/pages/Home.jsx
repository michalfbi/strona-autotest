import React, { Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { ArrowRight, Shield, Search, FileText, CheckCircle, Car, AlertTriangle, TrendingDown } from 'lucide-react';
import { mockData } from '../mockData';
import { Badge } from '../components/ui/badge';
import { CarModel } from '../components/Car3D/CarModel';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section z Modelem 3D */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                Profesjonalne inspekcje pojazdów
              </Badge>
              <h1 className="display-lg text-text mb-6 leading-tight">
                Nie kupuj <span className="text-primary">kota w worku</span>. Sprawdzimy auto za Ciebie.
              </h1>
              <p className="body-lg mb-8 text-muted max-w-xl">
                Znalazłeś wymarzone auto, ale boisz się ukrytych wad i kosztownych napraw? 
                Nasi niezależni eksperci przeprowadzą rygorystyczną inspekcję, zdiagnozują elektronikę i wynegocjują dla Ciebie najlepszą cenę.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate('/kontakt')} className="btn-primary">
                  Zamów inspekcję
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button onClick={() => navigate('/cennik')} className="btn-secondary">
                  Zobacz cennik
                </button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted font-medium">
                <div className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> 1200+ zadowolonych klientów</div>
                <div className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Raport w 24h</div>
              </div>
            </div>

            {/* Nowoczesny Reactowy Canvas dla Modelu 3D */}
            <div className="h-[400px] lg:h-[500px] w-full relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>
              <Suspense fallback={<div className="flex items-center justify-center h-full text-muted">Ładowanie modelu 3D...</div>}>
                <Canvas camera={{ position: [4, 2, 5], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                  <CarModel />
                  <Environment preset="city" />
                  <ContactShadows position={[0, -0.8, 0]} opacity={0.5} scale={10} blur={2} far={4} />
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
                </Canvas>
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Edukacja - Przed czym chronimy (SEO TEXT) */}
      <section className="py-20 bg-surface/50 border-y border-glass-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="display-md text-text mb-6">Dlaczego samodzielny zakup to ryzyko?</h2>
            <p className="body-lg text-muted">
              Rynek samochodów używanych w Polsce jest pełen pułapek. Sprzedawcy stosują coraz bardziej zaawansowane metody maskowania usterek. Dowiedz się, co najczęściej odkrywamy podczas naszych inspekcji i przed jakimi kosztami chronimy naszych klientów.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <AlertTriangle className="w-10 h-10 text-primary mb-4" />
              <h3 className="h4 text-text mb-3">Ukryte szkody powypadkowe</h3>
              <p className="body-md text-muted">
                Prawie 40% aut reklamowanych jako "bezwypadkowe" posiada poważne naprawy blacharsko-lakiernicze. Wykrywamy niefachowo wspawane ćwiartki, szpachlę na elementach konstrukcyjnych i wystrzelone poduszki powietrzne zastąpione opornikami.
              </p>
            </div>
            <div className="feature-card">
              <TrendingDown className="w-10 h-10 text-primary mb-4" />
              <h3 className="h4 text-text mb-3">Cofnięte liczniki</h3>
              <p className="body-md text-muted">
                Mimo zaostrzonych kar, manipulacja przebiegiem to wciąż plaga. Za pomocą specjalistycznych komputerów diagnostycznych weryfikujemy rzeczywisty przebieg zapisany w ukrytych modułach (skrzynia biegów, sterownik ABS, sterownik silnika).
              </p>
            </div>
            <div className="feature-card">
              <Car className="w-10 h-10 text-primary mb-4" />
              <h3 className="h4 text-text mb-3">Pudrowanie wad silnika</h3>
              <p className="body-md text-muted">
                Zalewanie silnika "motodoktorem", wycinanie filtrów DPF, wyłączanie kontrolki Check Engine. Zwykła jazda próbna tego nie wykryje. My analizujemy parametry na żywo (live data) i weryfikujemy korekty wtryskiwaczy oraz ciśnienie turbo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jak wygląda proces (SEO TEXT) */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="display-md text-text mb-6">Co dokładnie sprawdzamy podczas inspekcji?</h2>
              <p className="body-lg text-muted mb-8">
                Nasza usługa to nie tylko sprawdzenie grubości lakieru. To wieloetapowy audyt techniczny, prawny i wizualny, który kończy się wydaniem obszernego raportu PDF.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                  <div>
                    <h4 className="h4 text-text mb-2">Weryfikacja historii i dokumentów</h4>
                    <p className="body-sm text-muted">Sprawdzamy legalność pochodzenia, weryfikujemy wpisy w zagranicznych bazach (Carfax, AutoDNA) oraz kontrolujemy historię serwisową z bazy ASO.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                  <div>
                    <h4 className="h4 text-text mb-2">Badanie powłoki i konstrukcji</h4>
                    <p className="body-sm text-muted">Zaawansowany pomiar lakieru (w tym na elementach aluminiowych), weryfikacja oryginalności szyb, sprawdzenie punktów zgrzewu i szczelin konstrukcyjnych.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                  <div>
                    <h4 className="h4 text-text mb-2">Zaawansowana diagnostyka OBD</h4>
                    <p className="body-sm text-muted">Odczyt kodów błędów ze wszystkich modułów (nie tylko silnika), analiza parametrów DPF, EGR, korekt wtrysków i stanu skrzyni biegów.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">4</div>
                  <div>
                    <h4 className="h4 text-text mb-2">Test drogowy i negocjacje</h4>
                    <p className="body-sm text-muted">Weryfikacja układu jezdnego pod obciążeniem, ocena pracy zawieszenia i sprzęgła. Na podstawie znalezionych usterek agresywnie negocjujemy cenę w Twoim imieniu.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass p-8 relative">
              <div className="absolute top-0 right-0 p-4">
                <Badge className="bg-success text-bg">Oszczędzasz średnio 15%</Badge>
              </div>
              <h3 className="h3 text-text mb-6">Prześlij link do oceny - Za darmo!</h3>
              <p className="body-sm text-muted mb-6">
                Nie jesteś pewien czy w ogóle warto jechać po dane auto? Wklej link z OLX/Otomoto. Zrobimy darmową wstępną ocenę w 15 minut!
              </p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Link wysłany! Skontaktujemy się z Tobą.'); }}>
                <input type="url" placeholder="https://www.otomoto.pl/oferta/..." required className="input-field w-full bg-surface" />
                <input type="tel" placeholder="Twój numer telefonu" required className="input-field w-full bg-surface" />
                <button type="submit" className="btn-primary w-full shadow-lg shadow-primary/20 hover:shadow-primary/40">
                  Poproś o darmową wycenę
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Nasze Usługi - Karty */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-md text-text mb-6">Jak możemy Ci pomóc?</h2>
            <p className="body-lg text-muted max-w-2xl mx-auto">Niezależnie od tego czy kupujesz pierwsze auto do miasta, czy flotę dla swojej firmy - mamy odpowiednie rozwiązanie.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.services.map((service) => {
              const Icon = service.icon === 'Search' ? Search : service.icon === 'DollarSign' ? Shield : FileText;
              return (
                <div key={service.id} className="feature-card flex flex-col">
                  <Icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="h3 text-text mb-4">{service.title}</h3>
                  <p className="body-md text-muted mb-6 flex-grow">{service.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-glass-border">
                    <span className="text-text font-bold">{service.price}</span>
                    <Link to="/uslugi" className="text-primary hover:text-primary-hover font-semibold flex items-center transition-colors">
                      Szczegóły <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
