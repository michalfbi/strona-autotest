import React, { Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Shield, Search, FileText, Gauge, UserCheck, FileCheck, Clock, MapPin } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Center } from "@react-three/drei";
import { CarModel } from "../components/Car3D/CarModel";
import { mockData } from "../mockData";

const iconMap = {
  UserCheck: UserCheck,
  FileCheck: FileCheck,
  Clock: Clock,
  MapPin: MapPin,
};

export const Home = () => {
  const navigate = useNavigate();
  const handleConsultationClick = () => navigate("/kontakt");

  return (
    <div className="min-h-screen text-text relative">
      
      {/* TŁO DLA CAŁEJ STRONY (SIATKA I GLOW) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
        {/* Siatka */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Górny żółty gradient (Glow) */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#FFD200] opacity-15 rounded-full blur-[150px] -translate-y-1/2"></div>
        
        {/* Dolny żółty gradient (Glow) */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FFD200] opacity-10 rounded-full blur-[150px] translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* ZAWARTOŚĆ STRONY */}
      <div className="relative z-10">
        
        {/* 1. SEKCJA HERO */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-white/5">
          <div className="container max-w-[1100px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD200]/10 border border-[#FFD200]/20 text-[#FFD200] text-xs font-bold uppercase tracking-widest">
                  <Zap className="w-3 h-3 fill-current" />
                  <span>Modernistyczna Diagnostyka Premium</span>
                </div>
                
                <h1 className="text-5xl lg:text-[72px] font-extrabold leading-[1] tracking-tighter text-white">
                  Kupujesz auto?<br />
                  <span className="text-[#FFD200]">Sprawdź je zanim</span><br />
                  stracisz pieniądze.
                </h1>
                
                <p className="text-lg text-gray-400 max-w-lg font-light leading-relaxed">
                  Zintegrowany system skanowania 3D i inspekcji technicznej. Wykrywamy to, co sprzedawca próbuje ukryć.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { t: "Diagnostyka OBD", i: Search },
                    { t: "Pomiar lakieru", i: Gauge },
                    { t: "Weryfikacja VIN", i: FileText },
                    { t: "Ocena mechaniczna", i: Shield }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                      <item.i className="w-5 h-5 text-[#FFD200] shrink-0" />
                      <span className="text-sm font-medium text-gray-300">{item.t}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button onClick={handleConsultationClick} className="group px-8 py-4 bg-[#FFD200] text-black font-black text-lg rounded-xl hover:shadow-[0_0_40px_rgba(255,210,0,0.3)] transition-all flex items-center justify-center gap-3">
                    Rezerwuj termin
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              <div className="relative h-[500px] lg:h-[600px] bg-gradient-to-b from-white/5 to-transparent rounded-[40px] border border-white/10 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing">
                <Canvas shadows camera={{ position: [0, 2, 5], fov: 40 }}>
                  <Suspense fallback={null}>
                    <Environment preset="city" />
                    <Center>
                      <CarModel />
                    </Center>
                    <ContactShadows position={[0, -0.62, 0]} opacity={0.6} scale={10} blur={2.5} far={1} />
                  </Suspense>
                </Canvas>
                
                <div className="absolute top-8 left-8 flex items-center gap-3 pointer-events-none">
                  <div className="w-2 h-2 bg-[#FFD200] animate-ping rounded-full"></div>
                  <span className="text-[10px] font-mono text-[#FFD200]/80 uppercase tracking-widest">Live 3D Rendering active</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. SEKCJA DLACZEGO MY */}
        <section className="py-20 lg:py-32">
          <div className="container max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Dlaczego <span className="text-[#FFD200]">Autotest?</span></h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">Poznaj powody, dla których setki klientów zaufały nam przy zakupie wymarzonego pojazdu.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mockData.features.map((feature, idx) => {
                const Icon = iconMap[feature.icon] || CheckCircle;
                return (
                  <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-[#FFD200]/50 transition-colors group shadow-xl">
                    <div className="w-14 h-14 bg-[#FFD200]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#FFD200]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. SEKCJA CTA */}
        <section className="py-24 border-t border-white/5 relative">
          <div className="absolute inset-0 bg-[#FFD200]/5"></div>
          <div className="container relative z-10 max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Znalazłeś ogłoszenie?</h2>
            <p className="text-xl text-gray-400 mb-10">Nie ryzykuj. Prześlij nam link, a my całkowicie za darmo ocenimy, czy warto w ogóle jechać na miejsce.</p>
            <button onClick={handleConsultationClick} className="px-10 py-5 bg-[#FFD200] text-black font-black text-xl rounded-2xl hover:scale-105 hover:shadow-[0_0_50px_rgba(255,210,0,0.3)] transition-all">
              Skontaktuj się z ekspertem
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
