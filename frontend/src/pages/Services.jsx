import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Truck, 
  Shield, 
  CheckCircle, 
  Search, 
  DollarSign, 
  FileText,
  Car,
  CreditCard,
  Users,
  BookOpen,
  Zap
} from 'lucide-react';
import { mockData } from '../mockData';
import { Badge } from '../components/ui/badge';

export const Services = () => {
  const handleServiceClick = (serviceName) => {
    alert(`Przejście do ${serviceName} - funkcja w przygotowaniu`);
  };

  const serviceCategories = [
    {
      title: "Zakup i weryfikacja",
      description: "Kompleksowe wsparcie w procesie zakupu pojazdu",
      services: [
        {
          id: 1,
          title: "Pomoc w zakupie pojazdów",
          description: "Kompleksowe prowadzenie całego procesu zakupu od A do Z",
          icon: Car,
          price: "799 - 2,299 PLN",
          featured: true,
          link: "/pomoc-w-zakupie"
        },
        {
          id: 2,
          title: "Inspekcja mobilna",
          description: "Profesjonalna inspekcja techniczna z wyjazdem do pojazdu",
          icon: Search,
          price: "od 300 PLN"
        },
        {
          id: 3,
          title: "Wycena i negocjacja",
          description: "Profesjonalna wycena rynkowa i negocjacja najlepszej ceny",
          icon: DollarSign,
          price: "od 400 PLN"
        },
        {
          id: 4,
          title: "Raporty online",
          description: "Dostęp do panelu klienta z raportami i dokumentacją",
          icon: FileText,
          price: "w cenie pakietu"
        }
      ]
    },
    {
      title: "Formalności i usługi",
      description: "Załatwianie formalności i usługi dodatkowe",
      services: [
        {
          id: 8,
          title: "Wyceny / sprzedaż auta dla klienta",
          description: "Profesjonalna wycena i sprzedaż Twojego obecnego pojazdu",
          icon: CreditCard,
          price: "od 800 PLN"
        }
      ]
    }
  ];

  const processSteps = [
    "Kontakt telefoniczny",
    "Umówienie na oględziny ze sprzedającym", 
    "Oględziny pojazdu w zależności od wybranego planu",
    "Raport z oględzin",
    "Możliwość negocjacji ceny za klienta przez doświadczonego sprzedawcę",
    "Możliwość transportu pojazdu"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="display-lg text-text mb-6">
              Katalog usług
            </h1>
            <p className="body-lg max-w-3xl mx-auto mb-8">
              Komplementarne usługi wokół zakupu i użytkowania auta. Od weryfikacji przez formalności, aż po wsparcie biznesowe.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge>5 specjalistycznych usług</Badge>
              <Badge>Dostępne w całej Polsce</Badge>
              <Badge>Wsparcie 7 dni w tygodniu</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 1 ? 'bg-surface/30' : ''}`}>
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="display-md text-text mb-4">
                  {category.title}
                </h2>
                <p className="body-lg max-w-2xl mx-auto text-muted">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service) => (
                  <div 
                    key={service.id} 
                    className={`feature-card hover:scale-105 transition-all duration-300 cursor-pointer ${
                      service.featured ? 'border-primary' : ''
                    }`}
                    onClick={() => service.link ? window.location.href = service.link : handleServiceClick(service.title)}
                  >
                    {service.featured && (
                      <div className="absolute -top-3 -right-3">
                        <Badge className="popular">Główna usługa</Badge>
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 ${service.featured ? 'bg-primary' : 'bg-primary/10'} rounded-lg flex items-center justify-center`}>
                        <service.icon className={`w-6 h-6 ${service.featured ? 'text-bg' : 'text-primary'}`} />
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary">{service.price}</div>
                      </div>
                    </div>

                    <h3 className="h3 text-text mb-4">{service.title}</h3>
                    <p className="body-md text-muted mb-6">{service.description}</p>

                    <div className="flex items-center justify-between">
                      <button className="btn-ghost text-sm">
                        Dowiedz się więcej
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                      
                      <button className="btn-secondary text-sm px-4 py-2">
                        Zapytaj o wycenę
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Overview */}
      <section className="py-12 lg:py-16 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Usługi – eliminująca agencja
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Opis procesu realizacji usług
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-bg rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="h4 text-text mb-2">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="glass p-12 text-center">
              <h2 className="display-md text-text mb-6">
                Unikalna oferta gwarancji
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="h4 text-text mb-2">Rozszerzona ochrona</h3>
                  <p className="body-sm text-muted">Dodatkowy czas gwarancji dla wyższych planów usługowych</p>
                </div>
                <div>
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="h4 text-text mb-2">Lepszy plan = więcej czasu</h3>
                  <p className="body-sm text-muted">Im wyższy plan, tym dłuższy okres gwarancji na auto</p>
                </div>
                <div>
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="h4 text-text mb-2">Pełna dokumentacja</h3>
                  <p className="body-sm text-muted">Kompletna dokumentacja gwarancyjna dla każdego pojazdu</p>
                </div>
              </div>

              <div className="text-center">
                <Link to="/kontakt" className="btn-primary">
                  Skontaktuj się z nami
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="display-md text-text mb-6">
              Potrzebujesz spersonalizowanej oferty?
            </h2>
            <p className="body-lg mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby omówić Twoje potrzeby i otrzymać dedykowaną wycenę
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/kontakt" className="btn-primary text-lg px-8 py-4">
                Umów konsultację
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/cennik" className="btn-secondary text-lg px-8 py-4">
                Zobacz cennik
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};