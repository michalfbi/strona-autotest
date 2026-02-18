import React, { Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, UserCheck, Shield, Star, Loader2 } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Float, Stage } from "@react-three/drei";
import { CarModel } from "../components/Car3D/CarModel";

export const Home = () => {
  const navigate = useNavigate();
  const handleConsultationClick = () => navigate("/kontakt");

  return (
    <div className="min-h-screen bg-[#050505]">
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="container relative z-10 max-w-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                <Zap className="w-4 h-4 fill-current" />
                <span>Modernistyczna Diagnostyka Premium</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tighter">
                Kupujesz auto?<br /><span className="text-primary">Sprawdź je zanim</span><br />stracisz pieniądze.
              </h1>
              <p className="text-lg text-gray-400 max-w-md font-light">
                Zintegrowany system skanowania 3D i inspekcji technicznej. Wykrywamy to, co sprzedawca próbuje ukryć.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["System skanowania lakieru", "Diagnostyka pokładowa", "Weryfikacja bazy VIN", "Testy drogowe dynamiczne"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300 bg-white/5 p-3.5 rounded-lg border border-white/5">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button onClick={handleConsultationClick} className="px-8 py-4 bg-primary text-black font-extrabold text-lg rounded-lg hover:shadow-[0_0_30px_rgba(255,210,0,0.3)] transition-all">Rezerwuj termin</button>
                <Link to="/pomoc-w-zakupie" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium text-lg rounded-lg text-center">Standard raportu</Link>
              </div>
            </div>
            <div className="relative h-[500px] bg-gradient-to-b from-white/5 to-transparent rounded-3xl border border-white/10 shadow-2xl overflow-hidden cursor-move">
               <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
                <Suspense fallback={null}>
                  <Stage environment="city" intensity={0.6} contactShadow={false}>
                    <CarModel />
                  </Stage>
                  <ContactShadows position={[0, -0.62, 0]} opacity={0.6} scale={10} blur={2} far={1} />
                </Suspense>
              </Canvas>
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary animate-pulse rounded-full"></div>
                <span className="text-[10px] font-mono text-primary/70 uppercase">Live 3D Rendering active</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
