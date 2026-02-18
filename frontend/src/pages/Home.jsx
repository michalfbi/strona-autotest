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
  DollarSign,
  Users,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';
import { mockData } from '../mockData';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export const Home = () => {
  const navigate = useNavigate();
  
  const handleConsultationClick = () => {
    navigate('/kontakt');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form data:', data);
    alert('Formularz wysłany! Skontaktujemy się w ciągu 24 godzin.');
    e.target.reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-[#050505] border-b border-white/5">
        {/* Techniczne tło - siatka */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
        
        {/* Rozmyte światła (Glow) */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 z-0"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 z-0"></div>

        <div className="container relative z-10 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Lewa kolumna: Tekst z kaskadowymi animacjami */}
            <div className="text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide animate-in fade-in slide-in-from-bottom-8 duration-700">
                <Zap className="w-4 h-4 fill-current" />
                <span>Kompleksowa Diagnostyka Przedzakupowa</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
                Kupujesz auto?<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-100 drop-shadow-lg">
                  Sprawdź je zanim
                </span><br />
                stracisz pieniądze.
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-400 max-w-lg font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                Wykorzystujemy sprzęt klasy dealerskiej i wiedzę ekspercką, aby wykryć ukryte wady, zanim staną się Twoim problemem. Nie kupuj "skarbonki bez dna" – postaw na twarde fakty i transparentność.
              </p>

              {/* Gęsta lista korzyści (Checklista) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 pb-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400 fill-mode-both">
                <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3.5 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">Diagnostyka komputerowa OBD</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3.5 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">Pomiary grubości lakieru</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3.5 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">Weryfikacja historii (VIN)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3.5 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">Ocena stanu mechanicznego</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
                <button onClick={handleConsultationClick} className="group relative px-8 py-4 bg-primary text-black font-extrabold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,210,0,0.3)] w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Sprawdź to auto
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <Link to="/pomoc-w-zakupie" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-lg rounded-lg transition-all text-center backdrop-blur-sm hover:border-primary/50 w-full sm:w-auto">
                  Przykładowy raport
                </Link>
              </div>
              
              {/* Element budujący zaufanie (Social Proof) */}
              <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 border-t border-white/10 animate-in fade-in duration-1000 delay-700 fill-mode-both">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[#050505] flex items-center justify-center z-20"><UserCheck className="w-5 h-5 text-gray-400"/></div>
                  <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-[#050505] flex items-center justify-center z-10"><Shield className="w-5 h-5 text-gray-300"/></div>
                  <div className="w-10 h-10 rounded-full bg-primary border-2 border-[#050505] flex items-center justify-center text-black font-bold text-xs z-0">+1k</div>
                </div>
                <div className="text-sm text-gray-400">
                  <div className="flex items-center gap-1 text-primary mb-1">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                  Zaufali nam klienci w całej Polsce
                </div>
              </div>

            </div>
            
            {/* Prawa kolumna: Prestiżowy wygląd zdjęcia */}
            <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both">
              <div className="relative w-full max-w-[480px] group">
                
                {/* Ostre techniczne ramki ("Celowniki") */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-primary z-20 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-primary z-20 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>

                {/* Główny kontener zdjęcia z Glassmorphismem */}
                <div className="relative z-10 rounded-xl overflow-hidden bg-[#111] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                  
                  {/* Efekt Skanera CRT na zdjęciu (Scanlines) */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] z-20 pointer-events-none"></div>
                  
                  <img 
                    src="https://placehold.co/600x800/1a1a1a/FFD200.png?text=Twoje+Zdjecie+Tutaj" 
                    alt="Ekspert AutoTest" 
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
                
                {/* Tło Glass za zdjęciem dla głębi */}
                <div className="absolute inset-0 border border-primary/30 rounded-xl translate-x-4 translate-y-4 backdrop-blur-sm z-0"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* New Service Highlight */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/10 via-surface to-primary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="glass p-8 lg:p-12 rounded-2xl border-4 border-primary text-center">
              <Badge className="mb-6 text-lg px-6 py-2 animate-pulse">🚗 Nowa Usługa!</Badge>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
                Przygotowanie Auta do Sprzedaży
              </h2>
              
              <p className="text-xl text-primary font-bold mb-4">
                Sprzedaj szybciej i drożej!
              </p>
              
              <p className="body-lg text-text mb-6">
                Kompleksowe przygotowanie samochodu lub motocykla do sprzedaży: 
                <strong> diagnostyka, detailing, zdjęcia i pomoc w negocjacjach.</strong>
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center bg-primary/20 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm font-semibold">Od 300 zł</span>
                </div>
                <div className="flex items-center bg-primary/20 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm font-semibold">Kielce i okolice (30 km)</span>
                </div>
                <div className="flex items-center bg-primary/20 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm font-semibold">Dojazd do klienta</span>
                </div>
              </div>

              <Link 
                to="/przygotowanie-do-sprzedazy" 
                className="btn-primary text-lg px-8 py-4 inline-flex items-center"
              >
                Zobacz szczegóły usługi
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Section - Stepper */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Główna usługa</Badge>
              <h2 className="display-md text-text mb-6">
                Pomoc w zakupie pojazdów
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Najważniejsza usługa – pełne prowadzenie procesu zakupu samochodu od pierwszej rozmowy do odbioru kluczyków.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  number: "01",
                  title: "Brief i budżet",
                  description: "Doprecyzowujemy potrzeby i priorytety"
                },
                {
                  number: "02",
                  title: "Wyszukiwanie i selekcja",
                  description: "Tworzymy shortlistę dopasowanych ofert"
                },
                {
                  number: "03",
                  title: "Weryfikacja i inspekcja",
                  description: "Historia, OBD, zdjęcia, lista usterek"
                },
                {
                  number: "04",
                  title: "Negocjacje i formalności",
                  description: "Finalizujemy zakup i zabezpieczamy interes klienta"
                }
              ].map((step, index) => (
                <div key={index} className="feature-card text-center">
                  <div className="w-12 h-12 bg-primary text-bg rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                    {step.number}
                  </div>
                  <h3 className="h4 text-text mb-3">{step.title}</h3>
                  <p className="body-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/pomoc-w-zakupie" className="btn-primary">
                Sprawdź pełen proces
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USP Features */}
      <section className="py-12 lg:py-16 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Dlaczego autotest?
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Działamy niezależnie, profesjonalnie i zawsze w interesie klienta
              </p>
            </div>

            <div className="card-grid">
              {mockData.features.map((feature, index) => {
                const IconComponent = {
                  UserCheck,
                  FileCheck,
                  Clock,
                  MapPin
                }[feature.icon];

                return (
                  <div key={index} className="feature-card">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="h4 text-text mb-4">{feature.title}</h3>
                    <p className="body-md">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
              <div>
                <h2 className="display-md text-text mb-6">
                  Przykłady realizacji
                </h2>
                <p className="body-lg max-w-2xl">
                  Zobacz, jak pomagamy klientom w bezpiecznym zakupie samochodów
                </p>
              </div>
              <Link to="/case-studies" className="btn-secondary mt-8 lg:mt-0">
                Zobacz wszystkie
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {mockData.caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="feature-card">
                  <div className="flex items-center justify-between mb-4">
                    <div className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-semibold">
                      📍 {caseStudy.location}
                    </div>
                    <div className="px-3 py-1 bg-success/20 text-success border border-success/30 rounded-full text-xs font-semibold">
                      💰 {caseStudy.budget}
                    </div>
                  </div>
                  
                  <h3 className="h3 text-text mb-4 font-semibold">{caseStudy.model}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-surface/50 p-3 rounded-lg">
                      <span className="text-sm font-semibold text-text uppercase tracking-wide">Problem:</span>
                      <p className="text-sm text-text mt-1 leading-relaxed">{caseStudy.problem}</p>
                    </div>
                    <div className="bg-surface/50 p-3 rounded-lg">
                      <span className="text-sm font-semibold text-text uppercase tracking-wide">Działanie:</span>
                      <p className="text-sm text-text mt-1 leading-relaxed">{caseStudy.action}</p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                      <span className="text-sm font-semibold text-primary uppercase tracking-wide">Wynik:</span>
                      <p className="text-sm text-primary font-semibold mt-1 leading-relaxed">{caseStudy.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-16 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Opinie klientów
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Zaufało nam już ponad 1200 klientów w całej Polsce
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {mockData.testimonials.map((testimonial, index) => (
                <div key={index} className="feature-card border-l-4 border-primary/50">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-current" />
                      ))}
                    </div>
                    <div className="px-2 py-1 bg-success/20 text-success border border-success/30 rounded-full text-xs font-bold">
                      5/5 ⭐
                    </div>
                  </div>
                  
                  <blockquote className="text-base text-text mb-6 font-medium leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center bg-surface/50 p-3 rounded-lg">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <UserCheck className="w-6 h-6 text-bg" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-text">{testimonial.name}</div>
                      <div className="text-sm text-primary font-medium">📍 {testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Komplementarne usługi
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Kompleksowe wsparcie na każdym etapie użytkowania pojazdu
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {mockData.services.slice(0, 6).map((service) => {
                const IconComponent = {
                  Truck: Shield,
                  Shield,
                  CheckCircle,
                  Search: Zap,
                  DollarSign,
                  FileText: FileCheck
                }[service.icon] || Shield;

                return (
                  <div key={service.id} className="feature-card text-center hover:border-primary/30 transition-all duration-300">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6 mx-auto">
                      <IconComponent className="w-8 h-8 text-bg" />
                    </div>
                    <h3 className="h3 text-text mb-4 font-semibold">{service.title}</h3>
                    <p className="body-md mb-6 text-text leading-relaxed">{service.description}</p>
                    <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full inline-block">
                      <span className="text-primary font-bold text-base">{service.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Link to="/uslugi" className="btn-secondary">
                Zobacz wszystkie usługi
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-12 lg:py-16 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Transparentny cennik
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Wybierz pakiet dopasowany do Twoich potrzeb
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {mockData.packages.map((pkg, index) => (
                <div key={index} className={`feature-card relative ${pkg.popular ? 'border-primary scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="flex justify-center mb-4 pt-2">
                      <div className="px-4 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-full text-sm font-extrabold shadow-lg border-2 border-yellow-300">
                        Najczęściej wybierane
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-text mb-3">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-4">{pkg.price}</div>
                    <p className="text-sm text-text leading-relaxed px-2">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-sm text-text leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={handleConsultationClick}
                    className={pkg.popular ? "btn-primary w-full text-sm py-3" : "btn-secondary w-full text-sm py-3"}
                  >
                    Zamów pakiet
                  </button>
                </div>
              ))}
            </div>

            {/* ROI Information */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="glass p-8 rounded-2xl border-l-4 border-success">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-2xl font-bold text-success mb-4">💰 Zwrot inwestycji gwarantowany!</h3>
                    <p className="text-lg text-text mb-6 font-semibold">
                      Wydane pieniądze zwracają się wielokrotnie – chronimy Cię przed kosztownymi problemami
                    </p>
                    
                    <div className="space-y-4 text-text">
                      <div className="bg-success/10 p-5 rounded-lg border border-success/30">
                        <p className="leading-relaxed mb-2">
                          <strong className="text-success text-lg">🛡️ Ochrona przed usterkami:</strong>
                        </p>
                        <p className="leading-relaxed">
                          Gdybyś kupił auto z ukrytą usterką, naprawa mogłaby kosztować <span className="text-success font-bold">5,000-20,000 PLN</span>. 
                          Nasza inspekcja wykrywa te problemy <strong>przed zakupem</strong>, oszczędzając Ci dziesiątki tysięcy złotych.
                        </p>
                      </div>

                      <div className="bg-success/10 p-5 rounded-lg border border-success/30">
                        <p className="leading-relaxed mb-2">
                          <strong className="text-success text-lg">💪 Profesjonalne negocjacje:</strong>
                        </p>
                        <p className="leading-relaxed">
                          Nasze negocjacje średnio obniżają cenę pojazdu o 
                          <span className="text-success font-bold"> 3,000-15,000 PLN</span>, co wielokrotnie przewyższa koszt naszych usług.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-success/20 to-success/10 p-6 rounded-lg border-2 border-success/40 mt-4">
                        <p className="text-base mb-3">
                          <strong className="text-success text-lg">📊 Przykład rzeczywistych oszczędności:</strong>
                        </p>
                        <div className="space-y-2 text-sm">
                          <p>✅ Koszt pakietu Standard: <strong>600 PLN</strong></p>
                          <p>✅ Wykryte ukryte usterki (uniknięte koszty napraw): <strong className="text-success">12,000 PLN</strong></p>
                          <p>✅ Wynegocjowana obniżka ceny: <strong className="text-success">8,000 PLN</strong></p>
                          <div className="border-t border-success/30 pt-2 mt-3">
                            <p className="text-lg">
                              <strong>Twoja rzeczywista korzyść:</strong> 
                              <span className="text-success font-bold text-xl"> 19,400 PLN</span> 🎯
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/cennik" className="btn-secondary text-lg px-8 py-4">
                Zobacz szczegółowy cennik
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Najczęściej zadawane pytania
              </h2>
              <p className="body-lg">
                Odpowiedzi na najważniejsze pytania o nasze usługi
              </p>
            </div>

            <div className="glass p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {mockData.faq.slice(0, 6).map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-glass-border bg-surface/30 rounded-lg px-4">
                    <AccordionTrigger className="text-text hover:text-primary font-semibold text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-text leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 lg:py-16 bg-surface/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="glass p-12 text-center">
              <h2 className="display-md text-text mb-6">
                Gotowy na bezpieczny zakup?
              </h2>
              <p className="body-lg mb-8 max-w-2xl mx-auto">
                Umów bezpłatną konsultację i poznaj możliwości współpracy
              </p>

              {/* Quick contact form */}
              <form onSubmit={handleFormSubmit} className="max-w-md mx-auto space-y-4 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Imię i nazwisko"
                    required
                    className="input-field"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon"
                    required
                    className="input-field"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  className="input-field"
                />
                <select name="budget" className="input-field">
                  <option value="">Budżet (opcjonalnie)</option>
                  <option value="do-40k">do 40 000 PLN</option>
                  <option value="40-70k">40 000 - 70 000 PLN</option>
                  <option value="70-120k">70 000 - 120 000 PLN</option>
                  <option value="120k+">powyżej 120 000 PLN</option>
                </select>
                <button type="submit" className="btn-primary w-full">
                  Umów konsultację
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>

              <p className="text-xs text-muted">
                Skontaktujemy się w ciągu 24 godzin
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};