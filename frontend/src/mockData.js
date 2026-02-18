// Mock data for autotest website

export const mockData = {
  // Hero section data
  hero: {
    title: "Kup samochód bez ryzyka i przepłacania.",
    subtitle: "Kompleksowo prowadzimy Cię przez cały proces: od wyboru, przez inspekcję i negocjacje, aż po formalności.",
    badges: [
      "1200+ zrealizowanych zleceń",
      "Średnia oszczędność: 7–15%",
      "Start od 3 dni"
    ]
  },

  // Services data
  services: [
    {
      id: 4,
      title: "Inspekcja mobilna",
      description: "Wyjazd inspektora bezpośrednio do pojazdu",
      icon: "Search",
      price: "od 300 PLN"
    },
    {
      id: 5,
      title: "Wycena i negocjacja",
      description: "Profesjonalna wycena i negocjacja najlepszej ceny",
      icon: "DollarSign",
      price: "od 400 PLN"
    },
    {
      id: 6,
      title: "Raporty online",
      description: "Dostęp do panelu klienta z raportami i dokumentacją",
      icon: "FileText",
      price: "w cenie pakietu"
    }
  ],

  // USP features
  features: [
    {
      title: "Niezależni od komisów i sprzedawców",
      description: "Działamy wyłącznie w interesie klienta, bez ukrytych prowizji",
      icon: "UserCheck"
    },
    {
      title: "Eksperckie checklisty i raport PDF",
      description: "Szczegółowa dokumentacja każdego etapu procesu",
      icon: "FileCheck"
    },
    {
      title: "Realna oszczędność czasu i pieniędzy",
      description: "Średnio 7-15% oszczędności przy znacznej oszczędności czasu",
      icon: "Clock"
    },
    {
      title: "Mobilne inspekcje w całej Polsce",
      description: "Dojedziemy wszędzie, gdzie jest oferowany pojazd",
      icon: "MapPin"
    }
  ],

  // Case studies
  caseStudies: [
    {
      id: 1,
      model: "Skoda Octavia 1.5 TSI 2021",
      problem: "Niepewna historia serwisowa",
      action: "Weryfikacja VIN + inspekcja",
      result: "Oszczędność 9 800 PLN, bezwypadkowy egzemplarz",
      location: "Warszawa",
      budget: "70-85k PLN"
    },
    {
      id: 2,
      model: "Toyota Corolla 1.2T 2020",
      problem: "Podejrzane niskie przebieg",
      action: "Szczegółowa weryfikacja + ekspertyza",
      result: "Wykryto manipulację licznika, uniknięto zakupu",
      location: "Kraków",
      budget: "45-60k PLN"
    },
    {
      id: 3,
      model: "BMW X3 2.0d 2019",
      problem: "Flota firmowa, 3 pojazdy",
      action: "Kompleksowy audyt + negocjacje grupowe",
      result: "Redukcja TCO o 11% w 12 miesięcy",
      location: "Gdańsk",
      budget: "120-150k PLN"
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Anna Kowalska",
      location: "Warszawa",
      text: "Profesjonalne wsparcie na każdym etapie. Dzięki negocjacjom cena spadła o 12%. Polecam każdemu, kto chce kupić auto bez stresu.",
      rating: 5
    },
    {
      name: "Tomasz Nowak",
      location: "Kraków",
      text: "Raport PDF pozwolił mi szybko podjąć świadomą decyzję. Inspektor wykrył ukryte wady, których sam bym nie zauważył.",
      rating: 5
    },
    {
      name: "Michał Wiśniewski",
      location: "Wrocław",
      text: "Kompleksowa obsługa od A do Z. Auto zostało dostarczone pod dom, wszystkie formalności załatwione. Oszczędziłem mnóstwo czasu.",
      rating: 5
    }
  ],

  // Pricing packages
  packages: [
    {
      name: "Basic",
      price: "400 PLN",
      description: "Weryfikacja oferty + podstawowa inspekcja + raport",
      features: [
        "Weryfikacja VIN i historii",
        "Podstawowa inspekcja wizualna",
        "Raport PDF z zdjęciami",
        "Rekomendacja kup/negocjuj/odrzuć",
        "Wsparcie telefoniczne"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "600 PLN",
      description: "Wyszukiwanie + pełna inspekcja + negocjacje + formalności",
      features: [
        "Wszystko z pakietu Basic",
        "Wyszukiwanie i shortlista ofert",
        "Pełna inspekcja techniczna z OBD",
        "Negocjacje ceny",
        "Obsługa formalności",
        "Wsparcie posprzedażowe 7 dni"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "1,100 PLN",
      description: "Dedykowany asystent + transport + rejestracja + ubezpieczenia",
      features: [
        "Wszystko z pakietu Standard",
        "Dedykowany asystent",
        "Do 3 inspekcji różnych pojazdów",
        "Transport pojazdu",
        "Rejestracja i ubezpieczenia",
        "Wsparcie posprzedażowe 30 dni"
      ],
      popular: false
    }
  ],

  // FAQ data
  faq: [
    {
      question: "Czy działacie w całej Polsce?",
      answer: "Tak, realizujemy mobilne inspekcje na terenie całego kraju. Nasi inspektorzy docierają wszędzie, gdzie oferowany jest pojazd."
    },
    {
      question: "Co jeśli oferta nie przejdzie inspekcji?",
      answer: "Przedstawiamy szczegółowy raport z rekomendacją i szukamy kolejnych, lepszych opcji dopasowanych do Twoich kryteriów."
    },
    {
      question: "Ile trwa cały proces?",
      answer: "Standardowo 3-7 dni od pierwszej rozmowy do finalizacji zakupu, w zależności od dostępności pojazdów i złożoności formalności."
    },
    {
      question: "Jak wygląda płatność?",
      answer: "50% zaliczki przy zleceniu, pozostałe 50% po dostarczeniu raportu. Akceptujemy przelewy i płatności kartą."
    },
    {
      question: "Czy sprawdzacie auta sprowadzane z zagranicy?",
      answer: "Tak, mamy doświadczenie w weryfikacji aut z całej Europy. Sprawdzamy historię w europejskich bazach danych."
    },
    {
      question: "Co zawiera raport PDF?",
      answer: "Szczegółowe zdjęcia, wyniki badania OBD, pomiary grubości lakieru, listę usterek, ocenę stanu technicznego i rekomendację zakupu."
    }
  ],

  // Blog posts
  blogPosts: [
    {
      id: 1,
      title: "10 najczęstszych błędów przy zakupie używanego auta",
      excerpt: "Poznaj pułapki, które mogą kosztować Cię tysiące złotych przy zakupie używanego pojazdu.",
      category: "Zakup auta",
      readTime: "5 min",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Jak sprawdzić historię pojazdu przed zakupem?",
      excerpt: "Przewodnik po najważniejszych bazach danych i metodach weryfikacji historii samochodu.",
      category: "Inspekcje",
      readTime: "7 min",
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "Leasing czy kredyt? Przewodnik finansowania auta",
      excerpt: "Porównanie różnych form finansowania zakupu pojazdu z praktycznymi przykładami.",
      category: "Finanse",
      readTime: "6 min",
      date: "2024-01-05"
    }
  ],

  // Contact form mock submission
  contactFormSubmission: {
    success: true,
    message: "Dziękujemy! Skontaktujemy się w ciągu 24 godzin."
  },

  // Command palette shortcuts
  shortcuts: [
    { id: "consultation", label: "Umów konsultację", shortcut: "⌘K" },
    { id: "pricing", label: "Cennik", shortcut: "⌘P" },
    { id: "services", label: "Główna usługa", shortcut: "⌘S" },
    { id: "contact", label: "Kontakt", shortcut: "⌘C" }
  ]
};