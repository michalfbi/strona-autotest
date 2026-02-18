import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  X,
  Phone,
  MapPin,
  Clock,
  Shield,
  FileText,
  Star
} from 'lucide-react';
import { mockData } from '../mockData';
import { Badge } from '../components/ui/badge';

export const Pricing = () => {
  const navigate = useNavigate();
  
  const handlePackageOrder = (packageName) => {
    navigate('/kontakt');
  };

  const handleConsultationClick = () => {
    navigate('/kontakt');
  };

  // Detailed comparison features
  const comparisonFeatures = [
    {
      category: "Wyszukiwanie i selekcja",
      features: [
        { name: "Analiza potrzeb i budżetu", basic: true, standard: true, premium: true },
        { name: "Shortlista dopasowanych ofert", basic: false, standard: true, premium: true },
        { name: "Rekomendacje modeli", basic: false, standard: true, premium: true },
        { name: "Analiza TCO i kosztów", basic: false, standard: true, premium: true }
      ]
    },
    {
      category: "Weryfikacja i inspekcja", 
      features: [
        { name: "Weryfikacja VIN i historii", basic: true, standard: true, premium: true },
        { name: "Podstawowa inspekcja wizualna", basic: true, standard: false, premium: false },
        { name: "Pełna inspekcja techniczna z OBD", basic: false, standard: true, premium: true },
        { name: "Pomiary grubości lakieru", basic: false, standard: true, premium: true },
        { name: "Dokumentacja fotograficzna", basic: true, standard: true, premium: true }
      ]
    },
    {
      category: "Negocjacje i formalności",
      features: [
        { name: "Negocjacje ceny", basic: false, standard: true, premium: true },
        { name: "Obsługa formalności", basic: false, standard: true, premium: true },
        { name: "Umowy i dokumenty", basic: false, standard: true, premium: true },
        { name: "Zabezpieczenie transakcji", basic: false, standard: true, premium: true }
      ]
    },
    {
      category: "Usługi dodatkowe",
      features: [
        { name: "Transport pojazdu", basic: false, standard: false, premium: true },
        { name: "Rejestracja pojazdu", basic: false, standard: false, premium: true }
      ]
    },
    {
      category: "Raportowanie i wsparcie",
      features: [
        { name: "Raport PDF z zdjęciami", basic: true, standard: true, premium: true },
        { name: "Rekomendacja kup/negocjuj/odrzuć", basic: true, standard: true, premium: true },
        { name: "Wsparcie telefoniczne", basic: true, standard: true, premium: true },
        { name: "Wsparcie posprzedażowe 7 dni", basic: false, standard: true, premium: false },
        { name: "Wsparcie posprzedażowe 30 dni", basic: false, standard: false, premium: true },
        { name: "Dedykowany asystent", basic: false, standard: false, premium: true }
      ]
    }
  ];

  const additionalServices = [
    {
      name: "Inspekcja dodatkowego pojazdu",
      price: "299 PLN",
      description: "Każdy kolejny pojazd w ramach tego samego zlecenia"
    },
    {
      name: "Ekspresowa realizacja (24h)",
      price: "+50%",
      description: "Przyspieszenie realizacji do 24 godzin"
    },
    {
      name: "Transport krajowy",
      price: "2 PLN/km",
      description: "Profesjonalny transport pojazdu w Polsce"
    },
    {
      name: "Rejestracja pojazdu",
      price: "300 PLN",
      description: "Kompletna obsługa rejestracji w urzędzie"
    }
  ];

  const locationPricing = [
    { region: "Warszawa i okolice", multiplier: "×1.0", note: "Cena bazowa" },
    { region: "Kraków, Wrocław, Gdańsk", multiplier: "×1.1", note: "+10%" },
    { region: "Pozostałe miasta wojewódzkie", multiplier: "×1.2", note: "+20%" },
    { region: "Pozostałe lokalizacje", multiplier: "×1.3", note: "+30%" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="display-lg text-text mb-6">
              Transparentny cennik
            </h1>
            <p className="body-lg max-w-3xl mx-auto mb-8">
              Wybierz pakiet dopasowany do Twoich potrzeb. Bez ukrytych kosztów, z gwarancją jakości.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge>Bez ukrytych kosztów</Badge>
              <Badge>Gwarancja satysfakcji</Badge>
              <Badge>Płatność po realizacji</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Packages */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {mockData.packages.map((pkg, index) => (
                <div key={index} className={`feature-card relative ${pkg.popular ? 'border-primary scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="flex justify-center mb-4 pt-2">
                      <div className="px-4 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-full text-sm font-extrabold shadow-lg border-2 border-yellow-300">
                        Najczęściej wybierane
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="h2 text-text mb-2">{pkg.name}</h3>
                    <div className="display-sm text-primary mb-4">{pkg.price}</div>
                    <p className="body-md text-muted">{pkg.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="body-sm text-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handlePackageOrder(pkg.name)}
                    className={pkg.popular ? "btn-primary w-full" : "btn-secondary w-full"}
                  >
                    Zamów pakiet
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Szczegółowe porównanie
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Zobacz dokładnie, co zawiera każdy pakiet
              </p>
            </div>

            <div className="glass overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-glass-border">
                      <th className="text-left p-6 text-text font-medium">Funkcjonalność</th>
                      <th className="text-center p-6 text-text font-medium">Basic</th>
                      <th className="text-center p-6 text-primary font-medium">
                        Standard
                        <Badge className="ml-2">Popularne</Badge>
                      </th>
                      <th className="text-center p-6 text-text font-medium">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((category, categoryIndex) => (
                      <React.Fragment key={categoryIndex}>
                        <tr className="bg-surface/50">
                          <td colSpan="4" className="p-4 text-text font-medium text-sm uppercase tracking-wide">
                            {category.category}
                          </td>
                        </tr>
                        {category.features.map((feature, featureIndex) => (
                          <tr key={featureIndex} className="border-b border-glass-border/50">
                            <td className="p-4 text-text">{feature.name}</td>
                            <td className="p-4 text-center">
                              {feature.basic ? (
                                <CheckCircle className="w-5 h-5 text-success mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-muted mx-auto" />
                              )}
                            </td>
                            <td className="p-4 text-center">
                              {feature.standard ? (
                                <CheckCircle className="w-5 h-5 text-success mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-muted mx-auto" />
                              )}
                            </td>
                            <td className="p-4 text-center">
                              {feature.premium ? (
                                <CheckCircle className="w-5 h-5 text-success mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-muted mx-auto" />
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Usługi dodatkowe
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Rozszerz swój pakiet o dodatkowe usługi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="feature-card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="h4 text-text">{service.name}</h3>
                    <div className="text-primary font-bold">{service.price}</div>
                  </div>
                  <p className="body-sm text-muted">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location-based Pricing */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Ceny w zależności od lokalizacji
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Ceny mogą się różnić w zależności od lokalizacji pojazdu
              </p>
            </div>

            <div className="glass p-8">
              <div className="space-y-4">
                {locationPricing.map((location, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-glass-border/50 last:border-b-0">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-primary mr-3" />
                      <span className="text-text font-medium">{location.region}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-muted text-sm">{location.note}</span>
                      <span className="text-primary font-bold">{location.multiplier}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-text">
                  <strong>Uwaga:</strong> Ceny podane są orientacyjne i mogą się różnić w zależności od złożoności zlecenia. 
                  Dokładną wycenę otrzymasz po konsultacji.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Warunki płatności
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h4 text-text mb-4">50% zaliczki</h3>
                <p className="body-md text-muted">Przy podpisaniu umowy i rozpoczęciu prac</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h4 text-text mb-4">50% po realizacji</h3>
                <p className="body-md text-muted">Po dostarczeniu raportu i dokumentacji</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h4 text-text mb-4">Gwarancja zwrotu</h3>
                <p className="body-md text-muted">100% zwrot jeśli nie jesteś zadowolony</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Najczęściej zadawane pytania o cennik
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Czy ceny są ostateczne?",
                  answer: "Ceny mogą się różnić w zależności od lokalizacji i złożoności zlecenia. Dokładną wycenę otrzymasz po bezpłatnej konsultacji."
                },
                {
                  question: "Kiedy płacę za usługę?",
                  answer: "50% zaliczki przy podpisaniu umowy, pozostałe 50% po dostarczeniu raportu i finalizacji zlecenia."
                },
                {
                  question: "Co jeśli nie będę zadowolony?", 
                  answer: "Oferujemy gwarancję satysfakcji - jeśli nie jesteś zadowolony z naszej usługi, zwracamy 100% kosztów."
                },
                {
                  question: "Czy są dodatkowe koszty?",
                  answer: "Wszystkie koszty są transparentne i ustalane przed rozpoczęciem prac. Nie ma ukrytych opłat."
                }
              ].map((faq, index) => (
                <div key={index} className="glass p-6">
                  <h3 className="h4 text-text mb-3">{faq.question}</h3>
                  <p className="body-md text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass p-12">
              <h2 className="display-md text-text mb-6">
                Gotowy na rozpoczęcie?
              </h2>
              <p className="body-lg mb-8 max-w-2xl mx-auto">
                Umów bezpłatną konsultację i otrzymaj spersonalizowaną wycenę
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={handleConsultationClick} className="btn-primary text-lg px-8 py-4">
                  Umów konsultację
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <a href="tel:+48690976790" className="btn-secondary text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń teraz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};