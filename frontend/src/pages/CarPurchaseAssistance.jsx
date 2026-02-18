import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Star, 
  UserCheck,
  FileCheck,
  Shield,
  Users,
  TrendingUp,
  Award,
  Zap,
  Search,
  DollarSign,
  FileText,
  Phone,
  Calendar
} from 'lucide-react';
import { mockData } from '../mockData';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export const CarPurchaseAssistance = () => {
  const navigate = useNavigate();
  
  const handleConsultationClick = () => {
    navigate('/kontakt');
  };

  const handlePackageClick = (packageName) => {
    navigate('/kontakt');
  };

  const processSteps = [
    {
      number: "01",
      title: "Kontakt telefoniczny",
      description: "Pierwsza rozmowa, w której poznajemy Twoje potrzeby i oczekiwania dotyczące zakupu pojazdu.",
      deliverables: ["Ustalenie wymagań", "Określenie budżetu", "Wybór pakietu"]
    },
    {
      number: "02", 
      title: "Umówienie na oględziny ze sprzedającym",
      description: "Koordynujemy spotkanie z obecnym właścicielem pojazdu w dogodnym dla obu stron terminie.",
      deliverables: ["Ustalony termin", "Lokalizacja oględzin", "Kontakt ze sprzedającym"]
    },
    {
      number: "03",
      title: "Oględziny pojazdu w zależności od wybranego planu", 
      description: "Szczegółowa inspekcja pojazdu dostosowana do wybranego przez Ciebie pakietu usług.",
      deliverables: ["Weryfikacja VIN", "Inspekcja techniczna", "Dokumentacja fotograficzna"]
    },
    {
      number: "04",
      title: "Raport z oględzin",
      description: "Przygotowujemy szczegółowy raport ze stanem technicznym pojazdu wraz z rekomendacją.",
      deliverables: ["Raport PDF", "Ocena stanu", "Rekomendacja kup/negocjuj/odrzuć"]
    },
    {
      number: "05",
      title: "Możliwość negocjacji ceny za klienta",
      description: "Nasz doświadczony sprzedawca może wynegocjować dla Ciebie najlepszą cenę na podstawie stanu pojazdu.",
      deliverables: ["Analiza rynkowa", "Negocjacje cenowe", "Wynegocjowana cena"]
    },
    {
      number: "06",
      title: "Możliwość transportu pojazdu",
      description: "Opcjonalnie organizujemy profesjonalny transport pojazdu do wskazanej lokalizacji.",
      deliverables: ["Transport krajowy", "Ubezpieczenie podczas transportu", "Dostawa pod wskazany adres"]
    }
  ];

  const targetAudience = [
    "Zapracowani kupujący",
    "Osoby bez wiedzy technicznej", 
    "Klienci premium",
    "Rodziny z dziećmi",
    "Mikroprzedsiębiorcy (1–5 aut)"
  ];

  const deliverables = [
    {
      title: "Raport PDF",
      description: "Szczegółowy raport ze stanem technicznym, zdjęciami, kosztami i rekomendacją kup/negocjuj/odrzuć",
      icon: FileText
    },
    {
      title: "Checklista powykupowa", 
      description: "Lista serwisów startowych, wymiana opon, płynów i innych działań do wykonania po zakupie",
      icon: CheckCircle
    },
    {
      title: "Wsparcie posprzedażowe",
      description: "7-dniowe wsparcie telefoniczne i mailowe po finalizacji zakupu pojazdu",
      icon: Phone
    }
  ];

  const comparisonData = [
    {
      aspect: "Ryzyko ukrytych wad",
      withUs: "Minimalizujemy przez profesjonalną inspekcję",
      alone: "Wysokie - brak specjalistycznej wiedzy"
    },
    {
      aspect: "Czas poszukiwań", 
      withUs: "3-7 dni - dedykowany zespół",
      alone: "Tygodnie lub miesiące samodzielnych poszukiwań"
    },
    {
      aspect: "Pozycja negocjacyjna",
      withUs: "Silna - oparta na faktach i ekspertyzie", 
      alone: "Słaba - brak argumentów merytorycznych"
    },
    {
      aspect: "Koszt błędów",
      withUs: "Zabezpieczony przez ubezpieczenie OC",
      alone: "Pełne ryzyko własne - potencjalnie dziesiątki tysięcy"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Główna usługa</Badge>
              <h1 className="display-lg text-text mb-6">
                Kompleksowa pomoc w zakupie pojazdu
              </h1>
              <p className="body-lg max-w-3xl mx-auto mb-8">
                Wybierzemy, sprawdzimy i wynegocjujemy najlepsze warunki. Od pierwszej rozmowy do odbioru kluczyków - zajmiemy się wszystkim.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={handleConsultationClick} className="btn-primary text-lg px-8 py-4">
                  Umów konsultację
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <Link to="/cennik" className="btn-secondary text-lg px-8 py-4">
                  Zobacz pakiety i cennik
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Dla kogo?
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Nasza usługa jest idealna dla różnych grup klientów
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {targetAudience.map((audience, index) => (
                <div key={index} className="badge text-lg px-6 py-3">
                  <Users className="w-5 h-5 mr-2" />
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Proces w 6 krokach
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Sprawdzony proces, który gwarantuje bezpieczny zakup
              </p>
            </div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="glass p-8">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary text-bg rounded-full flex items-center justify-center font-bold text-xl">
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="h3 text-text mb-4">{step.title}</h3>
                      <p className="body-md mb-6">{step.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-muted uppercase tracking-wide">
                          Deliverables:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-center text-sm text-text">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Co otrzymujesz?
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Komplet dokumentów i wsparcia potrzebnego do bezpiecznego zakupu
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {deliverables.map((item, index) => (
                <div key={index} className="feature-card text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="h4 text-text mb-4">{item.title}</h3>
                  <p className="body-md">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Comparison */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Pakiety usług
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Wybierz poziom wsparcia dopasowany do Twoich potrzeb
              </p>
            </div>

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
                    <p className="body-md">{pkg.description}</p>
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
                    onClick={() => handlePackageClick(pkg.name)}
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

      {/* Sam vs z nami comparison */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Sam vs. z autotest
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Porównanie ryzyk i korzyści samodzielnego zakupu z naszym wsparciem
              </p>
            </div>

            <div className="glass overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-glass-border">
                      <th className="text-left p-6 text-text font-medium">Aspekt</th>
                      <th className="text-left p-6 text-primary font-medium">Z autotest</th>
                      <th className="text-left p-6 text-muted font-medium">Samodzielnie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b border-glass-border/50 last:border-b-0">
                        <td className="p-6 text-text font-medium">{row.aspect}</td>
                        <td className="p-6 text-text">
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            {row.withUs}
                          </div>
                        </td>
                        <td className="p-6 text-muted">{row.alone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Najczęściej zadawane pytania
              </h2>
              <p className="body-lg">
                Odpowiedzi na pytania dotyczące głównej usługi
              </p>
            </div>

            <div className="glass p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {mockData.faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-glass-border">
                    <AccordionTrigger className="text-text hover:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="display-md text-text mb-6">
              Gwarancja transparentności
            </h2>
            <div className="glass p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="h4 text-text mb-2">Niezależność</h3>
                  <p className="body-sm">Nie przyjmujemy prowizji od sprzedających ani dealerów</p>
                </div>
                <div className="text-center">
                  <FileCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="h4 text-text mb-2">Dokumentacja</h3>
                  <p className="body-sm">Kompletna dokumentacja każdego kroku procesu</p>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="h4 text-text mb-2">Wsparcie</h3>
                  <p className="body-sm">Dostępni przez 7 dni po finalizacji zakupu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass p-12">
              <h2 className="display-md text-text mb-6">
                Gotowy na bezpieczny zakup?
              </h2>
              <p className="body-lg mb-8 max-w-2xl mx-auto">
                Umów bezpłatną 15-minutową konsultację i dowiedz się, jak możemy Ci pomóc
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={handleConsultationClick} className="btn-primary text-lg px-8 py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  Umów konsultację
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