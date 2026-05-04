import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  DollarSign, 
  Car,
  CreditCard,
  Shield,
  TrendingUp,
  CheckCircle,
  FileCheck,
  Clock
} from 'lucide-react';
import { Badge } from '../components/ui/badge';

export const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (link) => {
    if(link) {
      navigate(link);
    } else {
      navigate('/kontakt');
    }
  };

  const serviceCategories = [
    {
      title: "Weryfikacja i Zakup",
      description: "Pozwól ekspertom przejąć ryzyko. Ty wybierasz model, my dbamy o to, byś nie przepłacił i nie kupił wady ukrytej.",
      services: [
        {
          id: 1,
          title: "Kompleksowa pomoc w zakupie",
          description: "Prowadzimy Cię za rękę od wyszukania idealnego egzemplarza, przez rygorystyczną weryfikację, aż po finalizację transakcji.",
          savings: "Średnio 12% zniżki wynegocjowanej u sprzedawcy. Oszczędzasz dziesiątki godzin na poszukiwaniach i dojazdach w ciemno.",
          icon: Car,
          price: "od 799 PLN",
          featured: true,
          link: "/pomoc-w-zakupie"
        },
        {
          id: 2,
          title: "Inspekcja mobilna pojazdu",
          description: "Profesjonalne sprawdzenie auta w dowolnym miejscu w Polsce. Diagnoza komputerowa, pomiar lakieru i test drogowy.",
          savings: "Chronisz się przed utopieniem nawet kilkunastu tysięcy złotych w ukryte wady powypadkowe i drogie awarie silnika.",
          icon: Search,
          price: "od 300 PLN"
        },
        {
          id: 3,
          title: "Wycena i twarde negocjacje",
          description: "Znalazłeś auto? My ocenimy jego realną wartość i profesjonalnie zbijemy cenę wykorzystując twarde argumenty i usterki.",
          savings: "Koszt naszej usługi zwraca się w 100% z wynegocjowanej zniżki. Reszta zaoszczędzonej kwoty zostaje w Twojej kieszeni.",
          icon: DollarSign,
          price: "od 400 PLN"
        }
      ]
    },
    {
      title: "Usługi dodatkowe",
      description: "Wsparcie przy sprzedaży i bezpiecznym obrocie autami.",
      services: [
        {
          id: 4,
          title: "Wsparcie w sprzedaży auta",
          description: "Przygotowanie auta, profesjonalna wycena, zdjęcia oraz bezstresowa weryfikacja i rozmowy z potencjalnymi kupującymi.",
          savings: "Sprzedajesz auto średnio 10-15% drożej i o wiele szybciej dzięki rzetelnej wycenie i profesjonalnemu przygotowaniu oferty.",
          icon: CreditCard,
          price: "od 800 PLN"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen text-text bg-[#050505]">
      
      
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FFD200]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        
        <section className="py-20 lg:py-28 border-b border-white/5">
          <div className="container max-w-[1200px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest">
              <span>Oferta Autotest</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white">
              Nasze usługi. <span className="text-[#FFD200]">Twój zysk.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Nie wydajesz pieniędzy na nasze usługi – inwestujesz w bezpieczeństwo i spokój. Zobacz, w jaki sposób każda nasza usługa realnie chroni Twój portfel.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/5 border-white/10 text-white hover:bg-white/10 text-sm py-2 px-4">Dojazd w całej Polsce</Badge>
              <Badge className="bg-[#FFD200]/10 border-[#FFD200]/20 text-[#FFD200] hover:bg-[#FFD200]/20 text-sm py-2 px-4">Raporty PDF w cenie</Badge>
              <Badge className="bg-white/5 border-white/10 text-white hover:bg-white/10 text-sm py-2 px-4">Szybka realizacja</Badge>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        {serviceCategories.map((category, index) => (
          <section key={index} className="py-20 border-b border-white/5">
            <div className="container max-w-[1200px] mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <div 
                    key={service.id} 
                    className={`bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 relative group hover:border-[#FFD200]/40 transition-all duration-500 cursor-pointer flex flex-col ${
                      service.featured ? 'md:col-span-2 lg:col-span-3 lg:flex-row gap-10 items-center' : ''
                    }`}
                    onClick={() => handleServiceClick(service.link)}
                  >
                    {service.featured && (
                      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD200]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#FFD200]/10 transition-colors duration-500"></div>
                    )}
                    
                    <div className={service.featured ? "lg:w-1/2 relative z-10" : "relative z-10 flex-1"}>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#FFD200]/30 transition-colors">
                          <service.icon className="w-7 h-7 text-[#FFD200]" />
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="border-white/10 text-gray-300">
                            {service.price}
                          </Badge>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFD200] transition-colors">{service.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className={service.featured ? "lg:w-1/2 w-full relative z-10" : "w-full relative z-10 mt-auto"}>
                      
                      <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5 mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-green-400"/>
                          <span className="font-bold text-green-400 text-sm uppercase tracking-wider">Twoja oszczędność:</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.savings}
                        </p>
                      </div>

                      <button className="w-full py-4 px-6 bg-white/5 hover:bg-[#FFD200] hover:text-black text-white font-semibold rounded-xl border border-white/10 hover:border-[#FFD200] transition-all flex items-center justify-center gap-2 group/btn">
                        Wybieram tę usługę
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"/>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        
        <section className="py-24 border-b border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
          <div className="container max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prosty proces. Konkretne efekty.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Darmowa analiza", desc: "Podsyłasz link, a my za darmo oceniamy czy warto w ogóle jechać." },
                { step: "02", title: "Inspekcja w terenie", desc: "Nasz rzeczoznawca jedzie na miejsce i prześwietla auto w 100+ punktach." },
                { step: "03", title: "Raport i twarde fakty", desc: "Otrzymujesz szczegółowy raport PDF ze zdjęciami i listą wykrytych wad." },
                { step: "04", title: "Negocjacje i zysk", desc: "Używamy wad jako argumentów i ścinamy cenę zakupu do minimum." }
              ].map((item, index) => (
                <div key={index} className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                  <div className="text-5xl font-black text-white/5 absolute -top-2 -right-2">{item.step}</div>
                  <div className="w-10 h-10 bg-[#FFD200]/10 rounded-full flex items-center justify-center text-[#FFD200] font-bold mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        
        <section className="py-24">
          <div className="container max-w-[800px] mx-auto text-center">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,210,0,0.1)_0%,transparent_70%)] pointer-events-none"></div>
              
              <Shield className="w-16 h-16 text-[#FFD200] mx-auto mb-6"/>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nie jesteś pewien, która usługa będzie najlepsza?
              </h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto">
                Zadzwoń do nas. Opowiemy Ci o procesie, doradzimy i dobierzemy rozwiązanie, które najlepiej ochroni Twój portfel.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <Link to="/kontakt" className="w-full sm:w-auto px-8 py-4 bg-[#FFD200] text-black font-bold text-lg rounded-xl hover:shadow-[0_0_30px_rgba(255,210,0,0.3)] transition-all">
                  Darmowa konsultacja
                </Link>
                <Link to="/cennik" className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-semibold text-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  Zobacz pełny cennik
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};