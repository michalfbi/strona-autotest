import React, { Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Star, Shield, Search, FileText, Gauge } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Center } from "@react-three/drei";
import { CarModel } from "../components/Car3D/CarModel";

export const Home = () => {
  const navigate = useNavigate();
  const handleConsultationClick = () => navigate("/kontakt");

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -translate-y-1/2"></div>

        <div className="container relative z-10 max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <Zap className="w-3 h-3 fill-current" />
                <span>Modernistyczna Diagnostyka Premium</span>
              </div>
              
              <h1 className="text-5xl lg:text-[72px] font-extrabold leading-[1] tracking-tighter">
                Kupujesz auto?<br />
                <span className="text-primary">Sprawdź je zanim</span><br />
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
                    <item.i className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-gray-300">{item.t}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={handleConsultationClick} className="group px-8 py-4 bg-primary text-black font-black text-lg rounded-xl hover:shadow-[0_0_40px_rgba(255,210,0,0.4)] transition-all flex items-center justify-center gap-3">
                  Rezerwuj termin
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            {/* Prawa kolumna - Canvas 3D (Bez ikon w srodku!) */}
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
              
              {/* Overlay HUD - POZA Canvasem */}
              <div className="absolute top-8 left-8 flex items-center gap-3 pointer-events-none">
                <div className="w-2 h-2 bg-primary animate-ping rounded-full"></div>
                <span className="text-[10px] font-mono text-primary/80 uppercase tracking-widest">Live 3D Rendering active</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
