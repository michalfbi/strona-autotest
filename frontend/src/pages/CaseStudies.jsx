import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  DollarSign, 
  Calendar, 
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Car,
  Filter
} from 'lucide-react';
import { mockData } from '../mockData';
import { Badge } from '../components/ui/badge';

export const CaseStudies = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  // Extended case studies data
  const extendedCaseStudies = [
    ...mockData.caseStudies,
    {
      id: 4,
      model: "Audi A4 2.0 TFSI 2018",
      problem: "Podejrzanie niska cena na rynku",
      action: "Weryfikacja historii + inspekcja lakiernicza",
      result: "Wykryto kolizję - uniknięto zakupu wadliwego auta",
      location: "Poznań",
      budget: "80-100k PLN",
      clientType: "Prywatny",
      brand: "Audi",
      savings: 0,
      status: "avoided"
    },
    {
      id: 5,
      model: "Mercedes C-Class 2.2 CDI 2017",
      problem: "Skomplikowana historia importu",
      action: "Weryfikacja dokumentów + inspekcja techniczna",
      result: "Oszczędność 14 200 PLN + legalizacja importu",
      location: "Wrocław",
      budget: "90-120k PLN", 
      clientType: "Prywatny",
      brand: "Mercedes",
      savings: 14200,
      status: "success"
    },
    {
      id: 6,
      model: "Volkswagen Passat 1.6 TDI 2019",
      problem: "Zakup dla floty - 5 identycznych aut",
      action: "Negocjacje grupowe + inspekcje seryjne",
      result: "Oszczędność łączna 38 000 PLN dla całej floty",
      location: "Łódź",
      budget: "200-250k PLN",
      clientType: "Firma",
      brand: "Volkswagen", 
      savings: 38000,
      status: "success"
    }
  ];

  const filters = [
    { id: 'all', label: 'Wszystkie', count: extendedCaseStudies.length },
    { id: 'Prywatny', label: 'Klienci prywatni', count: extendedCaseStudies.filter(cs => cs.clientType === 'Prywatny').length },
    { id: 'Firma', label: 'Firmy', count: extendedCaseStudies.filter(cs => cs.clientType === 'Firma').length },
    { id: 'success', label: 'Udane zakupy', count: extendedCaseStudies.filter(cs => cs.status === 'success').length },
    { id: 'avoided', label: 'Uniknięte problemy', count: extendedCaseStudies.filter(cs => cs.status === 'avoided').length }
  ];

  const budgetRanges = [
    'do 50k PLN',
    '50-70k PLN', 
    '70-100k PLN',
    '100-150k PLN',
    '150k+ PLN'
  ];

  const filteredCaseStudies = selectedFilter === 'all' 
    ? extendedCaseStudies
    : extendedCaseStudies.filter(cs => cs.clientType === selectedFilter || cs.status === selectedFilter);

  const handleCaseStudyClick = (caseStudy) => {
    alert(`Szczegóły case study: ${caseStudy.model} - funkcja w przygotowaniu`);
  };

  const totalSavings = extendedCaseStudies.reduce((sum, cs) => sum + (cs.savings || 0), 0);
  const averageSavings = Math.round(totalSavings / extendedCaseStudies.filter(cs => cs.savings > 0).length);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="display-lg text-text mb-6">
              Case Studies
            </h1>
            <p className="body-lg max-w-3xl mx-auto mb-8">
              Poznaj przykłady naszych realizacji i zobacz, jak pomagamy klientom w bezpiecznym zakupie samochodów
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge>{extendedCaseStudies.length}+ zrealizowanych projektów</Badge>
              <Badge>Średnia oszczędność: {(averageSavings / 1000).toFixed(0)}k PLN</Badge>
              <Badge>Działamy w całej Polsce</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <div className="h2 text-primary">{extendedCaseStudies.length}</div>
                <div className="text-sm text-muted">Zrealizowanych projektów</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="h2 text-primary">{(totalSavings / 1000).toFixed(0)}k</div>
                <div className="text-sm text-muted">PLN łącznych oszczędności</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <div className="h2 text-primary">{(averageSavings / 1000).toFixed(0)}k</div>
                <div className="text-sm text-muted">PLN średniej oszczędności</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <div className="h2 text-primary">100%</div>
                <div className="text-sm text-muted">Zadowolonych klientów</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Filter className="w-5 h-5 text-muted mr-2" />
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedFilter === filter.id
                      ? 'bg-primary text-bg border-primary'
                      : 'bg-transparent text-muted border-glass-border hover:border-primary hover:text-primary'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((caseStudy) => (
                <div 
                  key={caseStudy.id} 
                  className="feature-card hover:scale-105 cursor-pointer transition-all duration-300"
                  onClick={() => handleCaseStudyClick(caseStudy)}
                >
                  {/* Header with badges */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">
                        <MapPin className="w-3 h-3 mr-1" />
                        {caseStudy.location}
                      </Badge>
                      <Badge variant="outline">{caseStudy.budget}</Badge>
                    </div>
                    <div className="flex items-center">
                      {caseStudy.status === 'success' && (
                        <CheckCircle className="w-5 h-5 text-success" />
                      )}
                      {caseStudy.status === 'avoided' && (
                        <AlertTriangle className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Car model */}
                  <h3 className="h3 text-text mb-4">{caseStudy.model}</h3>

                  {/* Problem, Action, Result */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-sm font-medium text-muted uppercase tracking-wide">Wyzwanie:</span>
                      <p className="text-sm text-text mt-1">{caseStudy.problem}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-muted uppercase tracking-wide">Nasze działania:</span>
                      <p className="text-sm text-text mt-1">{caseStudy.action}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-muted uppercase tracking-wide">Rezultat:</span>
                      <p className={`text-sm font-medium mt-1 ${
                        caseStudy.status === 'success' ? 'text-success' : 'text-primary'
                      }`}>
                        {caseStudy.result}
                      </p>
                    </div>
                  </div>

                  {/* Client type and savings */}
                  <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                    <div className="flex items-center">
                      <div className="text-xs text-muted">
                        Klient: <span className="text-text font-medium">{caseStudy.clientType}</span>
                      </div>
                    </div>
                    
                    {caseStudy.savings > 0 && (
                      <div className="flex items-center text-success">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">
                          {(caseStudy.savings / 1000).toFixed(1)}k PLN
                        </span>
                      </div>
                    )}
                  </div>

                  {/* View details button */}
                  <div className="mt-6">
                    <button className="btn-ghost text-sm w-full">
                      Zobacz szczegóły
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-12 lg:py-16 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Jak osiągamy te rezultaty?
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Każdy sukces to efekt sprawdzonej metodologii i doświadczenia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h4 text-text mb-4">Szczegółowa analiza</h3>
                <p className="body-md text-muted">
                  Kompleksowa weryfikacja historii, stanu technicznego i dokumentów każdego pojazdu
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h4 text-text mb-4">Skuteczne negocjacje</h3>
                <p className="body-md text-muted">
                  Wykorzystujemy znajomość rynku i wykryte usterki do wynegocjowania najlepszej ceny
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h4 text-text mb-4">Pełne zabezpieczenie</h3>
                <p className="body-md text-muted">
                  Dokumentujemy każdy krok i zabezpieczamy interes klienta na wszystkich etapach
                </p>
              </div>
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
                Chcesz być kolejnym sukcesem?
              </h2>
              <p className="body-lg mb-8 max-w-2xl mx-auto">
                Dołącz do grona zadowolonych klientów i pozwól nam pomóc Ci w bezpiecznym zakupie samochodu
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/kontakt" className="btn-primary text-lg px-8 py-4">
                  Umów konsultację
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/cennik" className="btn-secondary text-lg px-8 py-4">
                  Zobacz nasze pakiety
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};