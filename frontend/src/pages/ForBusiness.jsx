import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Shield, 
  FileText,
  CheckCircle,
  DollarSign,
  Clock,
  Award,
  BarChart3,
  Settings,
  Zap,
  Phone,
  Calendar
} from 'lucide-react';
import { Badge } from '../components/ui/badge';

export const ForBusiness = () => {
  const navigate = useNavigate();
  
  const handleConsultationClick = () => {
    navigate('/kontakt');
  };

  const handleAuditClick = () => {
    navigate('/kontakt');
  };

  const businessServices = [
    {
      icon: Users,
      title: "Zakupy i odświeżanie floty",
      description: "Kompleksowe wsparcie w procesie zakupu pojazdów dla floty firmowej",
      features: [
        "Analiza potrzeb i policy fit",
        "Wyszukiwanie i selekcja pojazdów",
        "Negocjacje grupowe",
        "Bezpieczeństwo i compliance",
        "Harmonogram dostaw"
      ],
      price: "od 500 PLN/pojazd"
    },
    {
      icon: DollarSign,
      title: "Leasing i finansowanie",
      description: "Optymalizacja kosztów finansowania i dobór najlepszych rozwiązań",
      features: [
        "Porównanie ofert leasingu",
        "Negocjacje warunków",
        "Analiza TCO (Total Cost of Ownership)",
        "Optymalizacja podatkowa",
        "Wsparcie w dokumentacji"
      ],
      price: "od 1500 PLN"
    },
    {
      icon: BarChart3,
      title: "Audyt kosztów floty",
      description: "Kompleksowa analiza kosztów i rekomendacje optymalizacyjne",
      features: [
        "Analiza kosztów paliwa",
        "Koszty serwisu i napraw",
        "Ubezpieczenia floty",
        "Amortyzacja i wartość rezydualna",
        "Plan optymalizacji"
      ],
      price: "od 2000 PLN"
    }
  ];

  const businessPackages = [
    {
      name: "Starter",
      subtitle: "Dla małych firm (1-5 pojazdów)",
      price: "2,500 PLN",
      description: "Podstawowe wsparcie w zakupie i zarządzaniu małą flotą",
      features: [
        "Zakup do 5 pojazdów rocznie",
        "Podstawowa inspekcja każdego pojazdu",
        "Negocjacje indywidualne",
        "Raport z rekomendacjami",
        "Wsparcie telefoniczne",
        "Obsługa podstawowych formalności"
      ],
      popular: false
    },
    {
      name: "Business",
      subtitle: "Dla średnich firm (6-20 pojazdów)",
      price: "7,500 PLN",
      description: "Kompleksowe zarządzanie flotą z dedykowanym opiekunem",
      features: [
        "Zakup do 20 pojazdów rocznie",
        "Pełna inspekcja + diagnostyka OBD",
        "Negocjacje grupowe",
        "Dedykowany opiekun floty",
        "Audyt kosztów podstawowy",
        "Optymalizacja ubezpieczeń",
        "Raport kwartalny TCO"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      subtitle: "Dla dużych firm (20+ pojazdów)",
      price: "Indywidualnie",
      description: "Zaawansowane zarządzanie flotą z pełną optymalizacją",
      features: [
        "Bez limitu pojazdów",
        "Kompleksowy audyt floty",
        "Strategia długoterminowa",
        "Dedykowany zespół ekspertów",
        "Negocjacje korporacyjne",
        "Reporting w czasie rzeczywistym",
        "SLA 24/7",
        "Optymalizacja podatkowa"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Redukcja kosztów o 15-25%",
      description: "Średnia oszczędność na kosztach zakupu i utrzymania floty"
    },
    {
      icon: Clock,
      title: "Oszczędność czasu kadry",
      description: "Pełna obsługa procesu - Twoi pracownicy mogą się skupić na biznesie"
    },
    {
      icon: Shield,
      title: "Minimalizacja ryzyka",
      description: "Profesjonalne inspekcje eliminują ryzyko zakupu wadliwych pojazdów"
    },
    {
      icon: Award,
      title: "Compliance i dokumentacja",
      description: "Pełna zgodność z przepisami i kompletna dokumentacja zakupów"
    }
  ];

  const references = [
    {
      company: "LogiTrans Sp. z o.o.",
      industry: "Transport i logistyka",
      fleetSize: "45 pojazdów",
      savings: "18%",
      testimonial: "Dzięki autotest zoptymalizowaliśmy koszty floty o 18% rocznie. Profesjonalne podejście i kompleksowa obsługa."
    },
    {
      company: "TechSolutions S.A.",
      industry: "IT i usługi",
      fleetSize: "12 pojazdów",
      savings: "22%", 
      testimonial: "Świetne wsparcie w zakupie samochodów służbowych. Negocjacje grupowe przyniosły znaczne oszczędności."
    },
    {
      company: "MedService Sp. z o.o.",
      industry: "Ochrona zdrowia",
      fleetSize: "8 pojazdów",
      savings: "15%",
      testimonial: "Kompleksowa obsługa zakupów dla naszej floty medycznej. Wszystko załatwione sprawnie i profesjonalnie."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Analiza potrzeb",
      description: "Szczegółowa analiza profilu floty, potrzeb operacyjnych i budżetu"
    },
    {
      number: "02",
      title: "Strategia zakupów",
      description: "Opracowanie długoterminowej strategii odświeżania i rozbudowy floty"
    },
    {
      number: "03",
      title: "Wdrożenie",
      description: "Realizacja zakupów, negocjacje, inspekcje i finalizacja transakcji"
    },
    {
      number: "04",
      title: "Monitoring i optymalizacja",
      description: "Ciągłe monitorowanie kosztów i optymalizacja procesów flotowych"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="display-lg text-text mb-6">
              Doradztwo dla flot i firm
            </h1>
            <p className="body-lg max-w-3xl mx-auto mb-8">
              Profesjonalne zarządzanie flotą firmową. Optymalizujemy koszty, minimalizujemy ryzyko 
              i dbamy o compliance. Średnia oszczędność: 15-25% rocznie.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge>50+ firm klientów</Badge>
              <Badge>500+ pojazdów w zarządzaniu</Badge>
              <Badge>Średnia oszczędność 20%</Badge>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={handleAuditClick} className="btn-primary text-lg px-8 py-4">
                Umów audyt floty
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button onClick={handleConsultationClick} className="btn-secondary text-lg px-8 py-4">
                Bezpłatna konsultacja
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Nasze usługi B2B
              </h2>
              <p className="body-lg max-w-2xl mx-auto text-muted">
                Kompleksowe rozwiązania dla zarządzania flotą firmową
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {businessServices.map((service, index) => (
                <div key={index} className="feature-card h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="h3 text-text mb-4">{service.title}</h3>
                  <p className="body-md text-muted mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="body-sm text-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="text-primary font-bold mb-4">{service.price}</div>
                    <button className="btn-secondary w-full">
                      Zapytaj o wycenę
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Packages */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Pakiety B2B
              </h2>
              <p className="body-lg max-w-2xl mx-auto text-muted">
                Wybierz pakiet dopasowany do wielkości Twojej floty
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {businessPackages.map((pkg, index) => (
                <div key={index} className={`feature-card relative ${pkg.popular ? 'border-primary scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="popular">Najpopularniejszy</Badge>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="h2 text-text mb-1">{pkg.name}</h3>
                    <p className="text-sm text-muted mb-4">{pkg.subtitle}</p>
                    <div className="display-sm text-primary mb-4">{pkg.price}</div>
                    <p className="body-sm text-muted">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="body-sm text-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={handleConsultationClick}
                    className={pkg.popular ? "btn-primary w-full" : "btn-secondary w-full"}
                  >
                    {pkg.price === "Indywidualnie" ? "Umów rozmowę" : "Wybierz pakiet"}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Korzyści dla Twojej firmy
              </h2>
              <p className="body-lg max-w-2xl mx-auto text-muted">
                Dlaczego warto powierzyć nam zarządzanie flotą
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="h4 text-text mb-4">{benefit.title}</h3>
                  <p className="body-sm text-muted">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Jak działamy?
              </h2>
              <p className="body-lg max-w-2xl mx-auto text-muted">
                Sprawdzony proces optymalizacji floty firmowej
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-bg rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto">
                    {step.number}
                  </div>
                  <h3 className="h4 text-text mb-4">{step.title}</h3>
                  <p className="body-md text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Referencje klientów
              </h2>
              <p className="body-lg max-w-2xl mx-auto text-muted">
                Zaufały nam firmy z różnych branż
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {references.map((reference, index) => (
                <div key={index} className="feature-card">
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="outline">{reference.industry}</Badge>
                    <div className="flex items-center text-success">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="font-bold">-{reference.savings}</span>
                    </div>
                  </div>
                  
                  <h3 className="h4 text-text mb-2">{reference.company}</h3>
                  <p className="text-sm text-muted mb-4">Flota: {reference.fleetSize}</p>
                  
                  <blockquote className="body-sm text-muted mb-6 italic">
                    "{reference.testimonial}"
                  </blockquote>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text">Klient biznesowy</div>
                      <div className="text-xs text-muted">{reference.fleetSize}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ B2B */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Najczęściej zadawane pytania
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Jak długo trwa optymalizacja floty?",
                  answer: "Pierwszy audyt i rekomendacje dostarczamy w ciągu 2-3 tygodni. Pełna optymalizacja to proces ciągły, ale pierwsze oszczędności widoczne są już po 1-2 miesiącach."
                },
                {
                  question: "Czy zajmujecie się także flotami hybrydowymi i elektrycznymi?",
                  answer: "Tak, mamy doświadczenie w zarządzaniu flotami z pojazdami konwencjonalnymi, hybrydowymi i elektrycznymi. Pomagamy także w transformacji floty w kierunku elektromobilności."
                },
                {
                  question: "Jakie są minimalne wymagania do współpracy?",
                  answer: "Współpracujemy z firmami posiadającymi minimum 5 pojazdów. Dla mniejszych flot oferujemy usługi konsultacyjne i wsparcie w pojedynczych zakupach."
                },
                {
                  question: "Czy oferujecie wsparcie w leasingu operacyjnym?",
                  answer: "Tak, pomagamy w negocjacjach warunków leasingu operacyjnego, pełnego serwisu oraz optymalizacji kosztów związanych z użytkowaniem pojazdów."
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
      <section className="py-12 lg:py-16 bg-surface/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass p-12">
              <h2 className="display-md text-text mb-6">
                Gotowy na optymalizację floty?
              </h2>
              <p className="body-lg mb-8 max-w-2xl mx-auto text-muted">
                Umów bezpłatny audyt floty i otrzymaj szczegółową analizę z potencjalnymi oszczędnościami
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={handleAuditClick} className="btn-primary text-lg px-8 py-4">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Umów audyt floty
                </button>
                <a href="tel:+48690976790" className="btn-secondary text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń teraz
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-glass-border">
                <p className="text-sm text-muted">
                  <strong>Bezpłatny audyt zawiera:</strong> analizę kosztów obecnej floty, 
                  identyfikację obszarów oszczędności, rekomendacje optymalizacyjne
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};