import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Award, 
  Users, 
  Target,
  Heart,
  CheckCircle,
  Star,
  Calendar,
  TrendingUp,
  FileCheck,
  Phone
} from 'lucide-react';
import { Badge } from '../components/ui/badge';

export const About = () => {
  const navigate = useNavigate();
  
  const handleConsultationClick = () => {
    navigate('/kontakt');
  };

  const values = [
    {
      icon: Shield,
      title: "Niezależność",
      description: "Działamy wyłącznie w interesie klienta. Nie przyjmujemy prowizji od dealerów ani sprzedawców, co gwarantuje obiektywność naszych ocen."
    },
    {
      icon: FileCheck,
      title: "Rzetelność",
      description: "Każda inspekcja przeprowadzana jest zgodnie z rygorystycznymi standardami. Dokumentujemy wszystko i nie ukrywamy żadnych informacji."
    },
    {
      icon: Heart,
      title: "Odpowiedzialność",
      description: "Każde zlecenie traktujemy jak zakup dla własnej rodziny. Nasze rekomendacje są zawsze szczere i przemyślane."
    }
  ];

  const teamMembers = [
    {
      name: "Michał Kowalski",
      role: "Założyciel i główny inspektor",
      experience: "12 lat doświadczenia",
      specialization: "Inspekcje techniczne, diagnostyka",
      certifications: ["Certyfikat ASE", "Szkolenie BMW", "Kurs diagnostyki OBD"],
      description: "Pasjonat motoryzacji z wieloletnim doświadczeniem w branży automotive. Specjalizuje się w diagnostyce nowoczesnych systemów pokładowych."
    },
    {
      name: "Anna Nowak",
      role: "Ekspert ds. negocjacji",
      experience: "8 lat w sprzedaży aut",
      specialization: "Negocjacje, wyceny rynkowe",
      certifications: ["Certyfikat rzeczoznawcy", "Kurs negocjacji Harvard"],
      description: "Były dealer samochodowy, który przeszedł na stronę klientów. Zna wszystkie sztuczki branży i skutecznie broni interesów kupujących."
    },
    {
      name: "Tomasz Wiśniewski",
      role: "Specjalista ds. prawnych",
      experience: "10 lat w prawie gospodarczym",
      specialization: "Formalności, umowy, import",
      certifications: ["Aplikacja radcowska", "Prawo transportowe"],
      description: "Prawnik specjalizujący się w prawie transportowym i obrocie pojazdami. Pomaga klientom w skomplikowanych sprawach formalnych."
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Standaryzowane protokoły",
      description: "Każda inspekcja przeprowadzana według jednolitych, sprawdzonych procedur"
    },
    {
      step: "02", 
      title: "Profesjonalne narzędzia",
      description: "Używamy certyfikowanego sprzętu diagnostycznego i mierników lakierniczych"
    },
    {
      step: "03",
      title: "Kompleksowa dokumentacja", 
      description: "Szczegółowe raporty PDF z zdjęciami i rekomendacjami"
    },
    {
      step: "04",
      title: "Ciągłe szkolenia",
      description: "Regularnie podnosimy kwalifikacje i śledzimy nowości technologiczne"
    }
  ];

  const achievements = [
    { number: "1200+", label: "Zadowolonych klientów" },
    { number: "95%", label: "Skuteczność negocjacji" },
    { number: "12", label: "Lat doświadczenia" },
    { number: "100%", label: "Rekomendacji" }
  ];

  const mediaFeatures = [
    {
      outlet: "Gazeta Wyborcza",
      title: "Eksperci od bezpiecznego zakupu aut",
      date: "2023-11-15",
      type: "Wywiad"
    },
    {
      outlet: "Radio RMF FM",
      title: "Jak uniknąć pułapek przy zakupie używanego auta",
      date: "2023-10-22",
      type: "Audycja"
    },
    {
      outlet: "Portal Motofocus",
      title: "Ranking firm inspekcyjnych 2023",
      date: "2023-09-10",
      type: "Ranking"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="display-lg text-text mb-6">
              O nas
            </h1>
            <p className="body-lg max-w-3xl mx-auto mb-8">
              Jesteśmy zespołem ekspertów, których misją jest bezpieczny i uczciwy zakup samochodu dla każdego klienta. 
              Działamy niezależnie, rzetelnie i zawsze w Twoim interesie.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge>12 lat na rynku</Badge>
              <Badge>1200+ zadowolonych klientów</Badge>
              <Badge>Działamy w całej Polsce</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass p-12">
              <Target className="w-16 h-16 text-primary mx-auto mb-8" />
              <h2 className="display-md text-text mb-6">
                Nasza misja
              </h2>
              <p className="body-lg text-muted mb-8">
                "Bezpieczny i uczciwy zakup auta dla każdego klienta"
              </p>
              <p className="body-md text-text max-w-2xl mx-auto">
                Wierzymy, że każdy zasługuje na profesjonalne wsparcie przy zakupie samochodu. 
                Naszym celem jest eliminacja ryzyka i stressu związanego z tym procesem, 
                oferując niezależną ekspertyzę i kompleksowe wsparcie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Nasze wartości
              </h2>
              <p className="body-lg max-w-2xl mx-auto text-muted">
                Wartości, które przyświecają nam w codziennej pracy z klientami
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="feature-card text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="h3 text-text mb-4">{value.title}</h3>
                  <p className="body-md text-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Nasz zespół
              </h2>
              <p className="body-lg max-w-2xl mx-auto text-muted">
                Poznaj ekspertów, którzy dbają o Twoje bezpieczeństwo na drodze
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="feature-card">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Users className="w-10 h-10 text-primary" />
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="h3 text-text mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-muted">{member.experience}</p>
                  </div>

                  <p className="body-sm text-muted mb-6 text-center">{member.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-text mb-2">Specjalizacja:</h4>
                      <p className="text-sm text-muted">{member.specialization}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-text mb-2">Certyfikaty:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.certifications.map((cert, certIndex) => (
                          <Badge key={certIndex} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Nasza metodologia
              </h2>
              <p className="body-lg max-w-2xl mx-auto text-muted">
                Sprawdzone procedury i narzędzia gwarantujące najwyższą jakość usług
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {methodology.map((item, index) => (
                <div key={index} className="feature-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary text-bg rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="h4 text-text mb-3">{item.title}</h3>
                      <p className="body-md text-muted">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Nasze osiągnięcia
              </h2>
              <p className="body-lg max-w-2xl mx-auto text-muted">
                Liczby, które mówią same za siebie
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="glass p-6">
                    <div className="display-md text-primary mb-2">{achievement.number}</div>
                    <div className="text-sm text-muted uppercase tracking-wide">{achievement.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Wzmianki w mediach
              </h2>
              <p className="body-lg max-w-2xl mx-auto text-muted">
                Media o naszej pracy i ekspertyzie
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mediaFeatures.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{feature.type}</Badge>
                    <div className="flex items-center text-muted text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(feature.date).toLocaleDateString('pl-PL')}
                    </div>
                  </div>
                  
                  <h3 className="h4 text-text mb-3">{feature.title}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{feature.outlet}</p>
                  
                  <button className="btn-ghost text-sm w-full">
                    Czytaj więcej
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Dlaczego autotest?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="h4 text-text mb-2">Niezależność gwarantowana</h3>
                    <p className="body-md text-muted">Nie przyjmujemy prowizji od sprzedawców, co oznacza, że zawsze działamy w Twoim interesie.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="h4 text-text mb-2">Doświadczenie i wiedza</h3>
                    <p className="body-md text-muted">12 lat na rynku, setki zadowolonych klientów i ciągłe podnoszenie kwalifikacji.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="h4 text-text mb-2">Kompleksowe wsparcie</h3>
                    <p className="body-md text-muted">Od wyszukiwania przez inspekcję aż po finalizację - zajmujemy się wszystkim.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="h4 text-text mb-2">Gwarancja satysfakcji</h3>
                    <p className="body-md text-muted">Jeśli nie jesteś zadowolony z naszej pracy, zwracamy 100% kosztów.</p>
                  </div>
                </div>
              </div>

              <div className="glass p-8">
                <h3 className="h3 text-text mb-6 text-center">Co o nas mówią klienci</h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-current" />
                      ))}
                    </div>
                    <p className="body-sm text-muted mb-2">
                      "Profesjonalne podejście i uczciwa opinia. Uratowali mnie przed zakupem auta po wypadku."
                    </p>
                    <p className="text-xs text-muted">— Paweł K., Warszawa</p>
                  </div>

                  <div className="border-l-2 border-primary pl-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-current" />
                      ))}
                    </div>
                    <p className="body-sm text-muted mb-2">
                      "Świetne wsparcie w negocjacjach. Wynegocjowali 8000 zł mniej niż początkowa cena."
                    </p>
                    <p className="text-xs text-muted">— Maria S., Kraków</p>
                  </div>

                  <div className="border-l-2 border-primary pl-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-current" />
                      ))}
                    </div>
                    <p className="body-sm text-muted mb-2">
                      "Kompletna obsługa od A do Z. Mogłem się skupić na pracy, a oni załatwili wszystko."
                    </p>
                    <p className="text-xs text-muted">— Tomasz L., Gdańsk</p>
                  </div>
                </div>
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
                Poznajmy się osobiście
              </h2>
              <p className="body-lg mb-8 max-w-2xl mx-auto text-muted">
                Umów bezpłatną 15-minutową konsultację i poznaj nasz zespół. 
                Opowiemy o naszym podejściu i odpowiemy na wszystkie pytania.
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