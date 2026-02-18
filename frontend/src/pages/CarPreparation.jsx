import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Wrench,
  Sparkles,
  Camera,
  HandshakeIcon,
  Phone,
  MapPin,
  Star
} from 'lucide-react';
import { Badge } from '../components/ui/badge';

export const CarPreparation = () => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/kontakt');
  };

  const services = [
    {
      title: "Przygotowanie techniczne",
      icon: Wrench,
      items: [
        "Diagnostyka komputerowa – sprawdzenie błędów, parametrów silnika, układów",
        "Weryfikacja stanu technicznego (zawieszenie, hamulce, płyny, opony)",
        "Doradztwo – co warto poprawić, by zwiększyć wartość auta"
      ]
    },
    {
      title: "Przygotowanie wizualne",
      icon: Sparkles,
      items: [
        "Dokładne mycie zewnętrzne, czyszczenie felg i opon",
        "Odkurzanie i czyszczenie wnętrza, pranie tapicerki, pielęgnacja plastików",
        "Odświeżenie lakieru, korekta lub polerka, wosk/powłoka ochronna",
        "Czyszczenie komory silnika"
      ]
    },
    {
      title: "Profesjonalne ogłoszenie",
      icon: Camera,
      items: [
        "Wykonanie estetycznych zdjęć samochodu lub motocykla",
        "Pomoc w stworzeniu atrakcyjnego opisu ogłoszenia",
        "Doradztwo w ustaleniu realnej ceny sprzedaży"
      ]
    },
    {
      title: "Pomoc w sprzedaży",
      icon: HandshakeIcon,
      items: [
        "Wsparcie podczas rozmów z potencjalnymi kupującymi",
        "Możliwość obecności przy oględzinach – w roli niezależnego eksperta",
        "Pomoc w negocjacjach i bezpiecznej finalizacji transakcji"
      ]
    }
  ];

  const packages = [
    {
      name: "Standard",
      price: "300 zł",
      description: "Podstawowe przygotowanie pojazdu",
      features: [
        "Czyszczenie i odkurzanie",
        "Mycie zewnętrzne",
        "Profesjonalne zdjęcia",
        "Pomoc w ogłoszeniu"
      ],
      popular: false
    },
    {
      name: "Rozszerzony",
      price: "700 zł",
      description: "Kompleksowe przygotowanie",
      features: [
        "Wszystko z pakietu Standard",
        "Diagnostyka komputerowa",
        "Pranie tapicerki",
        "Korekta lakieru",
        "Doradztwo sprzedażowe"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "1500 zł",
      description: "Pełna obsługa sprzedaży",
      features: [
        "Wszystko z pakietu Rozszerzony",
        "Pełna diagnostyka techniczna",
        "Professional detailing",
        "Wsparcie przy sprzedaży",
        "Pomoc w negocjacjach"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Doświadczenie w diagnostyce i ocenie pojazdów",
    "Profesjonalne urządzenia i wiedza z branży motoryzacyjnej",
    "Rzetelność i pełna niezależność – działamy w interesie klienta",
    "Setki zadowolonych kierowców, którzy dzięki nam uniknęli kosztownych błędów i sprzedali auta szybciej"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-surface via-bg to-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-lg px-6 py-2">🚗 Nowa Usługa</Badge>
            
            <h1 className="display-lg text-text mb-6">
              AutoTest – Przygotowanie Auta do Sprzedaży
            </h1>
            
            <p className="text-2xl font-bold text-primary mb-4">
              Sprzedaj Szybciej i Drożej!
            </p>
            
            <p className="body-lg max-w-3xl mx-auto mb-8">
              Chcesz sprzedać swój samochód lub motocykl i zrobić to <strong>bez stresu, szybciej i za lepszą cenę?</strong>
            </p>

            <div className="bg-primary/10 border-2 border-primary rounded-2xl p-6 mb-8">
              <p className="text-xl text-text">
                <strong className="text-primary">Zaufaj specjalistom z AutoTest!</strong><br/>
                Oferujemy kompleksową pomoc w przygotowaniu pojazdu do sprzedaży, 
                tak aby zrobił jak najlepsze wrażenie na potencjalnym kupującym.
              </p>
            </div>

            <p className="body-lg text-muted mb-8">
              Nie jesteśmy zwykłą myjnią ani firmą detailingową – jesteśmy <strong className="text-text">diagnostami z doświadczeniem</strong>, 
              którzy wiedzą, jak pokazać auto z najlepszej strony i jednocześnie zadbać o jego wiarygodność.
            </p>

            <button 
              onClick={handleContactClick}
              className="btn-primary text-lg px-8 py-4"
            >
              Umów przygotowanie auta
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="display-md text-text mb-4">
              🧽 Nasze usługi obejmują
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="feature-card">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text">{service.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 lg:py-16 bg-surface/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="display-md text-text mb-4">
              💼 Dostępne pakiety usług
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {packages.map((pkg, index) => (
              <div key={index} className={`feature-card relative ${pkg.popular ? 'border-primary scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="flex justify-center mb-4 pt-2">
                    <div className="px-4 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-full text-sm font-extrabold shadow-lg border-2 border-yellow-300">
                      Najczęściej wybierane
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-text mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-black text-primary mb-2">{pkg.price}</div>
                  <p className="text-sm text-muted">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={handleContactClick}
                  className="btn-primary w-full"
                >
                  Zamów pakiet
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted italic">
              Idealny dla osób, które chcą sprzedać auto szybko, bez stresu i w najlepszej cenie.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-4">
                🔧 Dlaczego warto wybrać AutoTest?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start bg-surface/50 p-5 rounded-xl border border-primary/20">
                  <Star className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-text">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & CTA Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/10 via-surface to-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-surface/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              
              <h3 className="text-2xl font-bold text-text mb-4">
                Obsługujemy okolice Kielc
              </h3>
              
              <p className="text-text mb-6">
                📍 Działamy w promieniu <strong className="text-primary">30 km od Kielc</strong><br/>
                🚗 Możliwy dojazd do klienta po wcześniejszym ustaleniu
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+48690976790"
                  className="btn-primary text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: +48 690 976 790
                </a>
                
                <button
                  onClick={handleContactClick}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Formularz kontaktowy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
