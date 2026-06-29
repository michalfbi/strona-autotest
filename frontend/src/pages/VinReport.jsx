import React from 'react';

export const VinReport = () => {
  return (
    <div className="min-h-screen pt-40 pb-20 bg-[#050505] text-white">
      <div className="container max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-black mb-8 text-[#FFD200]">Raport VIN + Analiza Ekspercka</h1>
        <div className="prose prose-invert lg:prose-xl">
          <p className="text-xl text-gray-300 mb-12">
            Zabezpiecz się przed kupnem auta z ukrytymi wadami. Nasz system łączy oficjalne dane z bazy carVertical z ręczną analizą naszego eksperta.
          </p>
          
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Co zyskujesz?</h2>
            <ul className="space-y-4">
              <li>✅ Pełna historia serwisowa i szkodowa.</li>
              <li>✅ Weryfikacja przebiegu w bazach europejskich.</li>
              <li>✅ Ekspercka analiza zdjęć i opisu ogłoszenia.</li>
              <li>✅ Jasna informacja: "Brać czy nie brać?".</li>
            </ul>
          </div>
          
          {/* Tu będzie Twój formularz (skopiuj go z poprzedniego kroku) */}
        </div>
      </div>
    </div>
  );
};
