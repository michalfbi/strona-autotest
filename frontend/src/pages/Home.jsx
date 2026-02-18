import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowRight, CheckCircle, Zap, UserCheck, Shield, Star 
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";

export const Home = () => {
  const navigate = useNavigate();
  const handleConsultationClick = () => navigate("/kontakt");

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2"></div>

        <div className="container relative z-10 max-w-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                <Zap className="w-4 h-4 fill-current" />
                <span>Profesjonalna Diagnostyka Przedzakupowa</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tighter">
                Kupujesz auto?<br />
                <span className="text-primary">Sprawdź je zanim</span><br />
                stracisz pieniądze.
              </h1>
              
              <p className="text-lg text-gray-400 max-w-md font-light leading-relaxed">
                Używamy sprzętu klasy dealerskiej, aby wykryć ukryte wady. Postaw na twarde fakty i modernistyczne podejście do technologii.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Diagnostyka komputerowa", "Pomiary lakieru", "Weryfikacja VIN", "Ocena mechaniczna"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300 bg-white/5 p-3.5 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button onClick={handleConsultationClick} className="px-8 py-4 bg-primary text-black font-extrabold text-lg rounded-lg hover:shadow-[0_0_30px_rgba(255,210,0,0.3)] transition-all">
                  Sprawdź to auto
                </button>
                <Link to="/pomoc-w-zakupie" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium text-lg rounded-lg text-center">
                  Przykładowy raport
                </Link>
              </div>

              <div className="pt-6 flex items-center gap-6 border-t border-white/10">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[#050505] flex items-center justify-center text-xs text-white">UC</div>
                  <div className="w-10 h-10 rounded-full bg-primary border-2 border-[#050505] flex items-center justify-center text-black font-bold text-xs">+1k</div>
                </div>
                <div className="text-sm text-gray-400">
                  <div className="flex text-primary mb-1"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
                  Zaufali nam klienci w całej Polsce
                </div>
              </div>
            </div>
            
            <div className="relative h-[450px] bg-white/5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden group">
               <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                  <mesh rotation={[0.5, 0.5, 0]}>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshStandardMaterial color="#FFD200" wireframe />
                  </mesh>
                </Float>
                <Environment preset="city" />
              </Canvas>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary/50 text-[10px] font-mono uppercase tracking-widest">
                Renderowanie Systemu 3D...
              </div>
              {/* Celowniki w rogach */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-primary/40"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-primary/40"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Kontynuacja reszty komponentu Home */}
      <div className="py-20 text-center text-gray-700 font-mono text-sm">
        [SEKCJA_DOLNA_W_PRZYGOTOWANIU]
      </div>
    </div>
  );
};
