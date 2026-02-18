const fs = require('fs');
const path = './frontend/src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

const heroStart = '{/* Hero Section */}';
const nextSection = '{/* New Service Highlight */}';

const newHero = `{/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#0d0d0d]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#000000] z-0"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Lewa kolumna: Tekst */}
            <div className="text-left space-y-6">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                Kupujesz auto?<br />
                <span className="text-[#FF6A00]">Sprawdź je zanim<br />stracisz pieniądze.</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 max-w-md font-light">
                Wykrywam ukryte wady, zanim staną się Twoim problemem.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button onClick={handleConsultationClick} className="bg-[#FF6A00] hover:bg-[#e65c00] text-white font-bold text-lg px-8 py-4 rounded transition-all shadow-[0_4px_15px_rgba(255,106,0,0.3)]">
                  Sprawdź to auto
                </button>
                <Link to="/pomoc-w-zakupie" className="bg-transparent border border-gray-600 hover:border-[#FF6A00] hover:text-[#FF6A00] text-gray-300 font-bold text-lg px-8 py-4 rounded transition-all text-center">
                  Zobacz przykładowy raport
                </Link>
              </div>
            </div>
            
            {/* Prawa kolumna: Placeholder */}
            <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
              <div className="relative w-full max-w-[450px]">
                {/* Pomarańczowa ramka z tyłu */}
                <div className="absolute inset-0 border-2 border-[#FF6A00] rounded-xl translate-x-6 translate-y-6 opacity-40 pointer-events-none"></div>
                <img 
                  src="https://placehold.co/600x800/1a1a1a/ff6a00?text=Miejsce+na+Zdjecie" 
                  alt="Ekspert AutoTest" 
                  className="relative z-10 w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      `;

const startIndex = content.indexOf(heroStart);
const endIndex = content.indexOf(nextSection);

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + newHero + content.substring(endIndex);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Sekcja zmieniona pomyślnie!');
} else {
  console.log('Błąd: Nie znaleziono znaczników sekcji w pliku Home.jsx');
}
