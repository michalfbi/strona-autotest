import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User,
  Tag,
  Search,
  TrendingUp,
  FileText,
  Car,
  DollarSign,
  Shield,
  Users
} from 'lucide-react';
import { mockData } from '../mockData';
import { Badge } from '../components/ui/badge';

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Extended blog posts
  const blogPosts = [
    ...mockData.blogPosts,
    {
      id: 4,
      title: "Jak negocjować cenę samochodu używanego?",
      excerpt: "Skuteczne techniki negocjacyjne, które pomogą Ci uzyskać najlepszą cenę przy zakupie używanego pojazdu.",
      category: "Zakup auta",
      readTime: "8 min",
      date: "2024-01-20",
      featured: true
    },
    {
      id: 5,
      title: "OBD - co pokazuje diagnostyka komputerowa?",
      excerpt: "Przewodnik po diagnostyce OBD, interpretacji kodów błędów i znaczeniu parametrów silnika.",
      category: "Technika i inspekcje",
      readTime: "6 min",
      date: "2024-01-18"
    },
    {
      id: 6,
      title: "Ubezpieczenie AC - czy warto dla starszego auta?",
      excerpt: "Analiza opłacalności ubezpieczenia AC w zależności od wieku i wartości pojazdu.",
      category: "Finanse i leasing",
      readTime: "5 min",
      date: "2024-01-15"
    },
    {
      id: 7,
      title: "Flota firmowa - jak optymalizować koszty?",
      excerpt: "Praktyczne porady dotyczące zarządzania flotą firmową i redukcji kosztów operacyjnych.",
      category: "B2B",
      readTime: "10 min",
      date: "2024-01-12"
    },
    {
      id: 8,
      title: "Import samochodu z Niemiec - procedura krok po kroku",
      excerpt: "Kompletny przewodnik po imporcie pojazdu z Niemiec, formalności i potencjalne pułapki.",
      category: "Formalności i prawo",
      readTime: "12 min",
      date: "2024-01-10"
    },
    {
      id: 9,
      title: "Samochód dla rodziny - na co zwrócić uwagę?",
      excerpt: "Kryteria wyboru idealnego auta rodzinnego, bezpieczeństwo, komfort i praktyczność.",
      category: "Poradniki rodzinne",
      readTime: "7 min",
      date: "2024-01-08"
    }
  ];

  const categories = [
    { id: 'all', name: 'Wszystkie', icon: FileText, count: blogPosts.length },
    { id: 'Zakup auta', name: 'Zakup auta', icon: Car, count: blogPosts.filter(p => p.category === 'Zakup auta').length },
    { id: 'Technika i inspekcje', name: 'Technika i inspekcje', icon: Search, count: blogPosts.filter(p => p.category === 'Technika i inspekcje').length },
    { id: 'Finanse i leasing', name: 'Finanse i leasing', icon: DollarSign, count: blogPosts.filter(p => p.category === 'Finanse i leasing').length },
    { id: 'Formalności i prawo', name: 'Formalności i prawo', icon: Shield, count: blogPosts.filter(p => p.category === 'Formalności i prawo').length },
    { id: 'Poradniki rodzinne', name: 'Poradniki rodzinne', icon: Users, count: blogPosts.filter(p => p.category === 'Poradniki rodzinne').length },
    { id: 'B2B', name: 'B2B', icon: TrendingUp, count: blogPosts.filter(p => p.category === 'B2B').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handlePostClick = (post) => {
    alert(`Przejście do artykułu: ${post.title} - funkcja w przygotowaniu`);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`Subskrypcja newslettera dla ${email} - funkcja w przygotowaniu`);
    e.target.reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="display-lg text-text mb-6">
              Blog & Poradniki
            </h1>
            <p className="body-lg max-w-3xl mx-auto mb-8">
              Praktyczne porady, ekspertka wiedza i aktualne informacje z branży automotive. 
              Dowiedz się, jak bezpiecznie kupować i użytkować samochody.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge>{blogPosts.length} artykułów</Badge>
              <Badge>Aktualizacje co tydzień</Badge>
              <Badge>Ekspercka wiedza</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                  type="text"
                  placeholder="Szukaj artykułów..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pl-10"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary text-bg border-primary'
                        : 'bg-transparent text-muted border-glass-border hover:border-primary hover:text-primary'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.name} ({category.count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'all' && !searchQuery && (
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">Wyróżniony artykuł</Badge>
                <h2 className="display-md text-text">
                  Najnowsze porady ekspertów
                </h2>
              </div>

              <div 
                className="glass p-8 cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => handlePostClick(featuredPost)}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-surface rounded-lg flex items-center justify-center mb-4">
                      <Car className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline">
                        <Tag className="w-3 h-3 mr-1" />
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center text-muted text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString('pl-PL')}
                      </div>
                      <div className="flex items-center text-muted text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <h3 className="h2 text-text mb-4">{featuredPost.title}</h3>
                    <p className="body-lg text-muted mb-6">{featuredPost.excerpt}</p>
                    
                    <button className="btn-primary">
                      Czytaj więcej
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-muted mx-auto mb-6" />
                <h3 className="h3 text-text mb-4">Nie znaleziono artykułów</h3>
                <p className="body-md text-muted mb-8">
                  Spróbuj zmienić kryteria wyszukiwania lub wybierz inną kategorię
                </p>
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="btn-secondary"
                >
                  Wyczyść filtry
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <div 
                    key={post.id}
                    className="feature-card cursor-pointer hover:scale-105 transition-all duration-300"
                    onClick={() => handlePostClick(post)}
                  >
                    {/* Post Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-surface rounded-lg flex items-center justify-center mb-6">
                      <FileText className="w-12 h-12 text-primary" />
                    </div>

                    {/* Post Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-muted text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Post Content */}
                    <h3 className="h4 text-text mb-3 line-clamp-2">{post.title}</h3>
                    <p className="body-sm text-muted mb-4 line-clamp-3">{post.excerpt}</p>

                    {/* Post Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                      <div className="flex items-center text-muted text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString('pl-PL')}
                      </div>
                      <button className="btn-ghost text-sm">
                        Czytaj więcej
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="glass p-12 text-center">
              <h2 className="display-md text-text mb-6">
                Bądź na bieżąco
              </h2>
              <p className="body-lg mb-8 max-w-2xl mx-auto text-muted">
                Zapisz się do newslettera i otrzymuj najnowsze artykuły, porady ekspertów i informacje o nowościach w branży automotive.
              </p>
              
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Twój e-mail"
                    required
                    className="input-field flex-1"
                  />
                  <button type="submit" className="btn-primary">
                    Zapisz się
                  </button>
                </div>
                <p className="text-xs text-muted mt-4">
                  Nie wysyłamy spamu. Możesz zrezygnować w dowolnym momencie.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Popularne tematy
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Najczęściej czytane kategorie artykułów
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="feature-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h4 text-text mb-4">Zakup samochodu</h3>
                <p className="body-md text-muted mb-6">
                  Praktyczne porady dotyczące wyboru, negocjacji i finalizacji zakupu używanego pojazdu
                </p>
                <button 
                  onClick={() => setSelectedCategory('Zakup auta')}
                  className="btn-ghost"
                >
                  Zobacz artykuły
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              <div className="feature-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h4 text-text mb-4">Inspekcje techniczne</h3>
                <p className="body-md text-muted mb-6">
                  Jak sprawdzać stan techniczny pojazdu, interpretować wyniki diagnostyki i rozpoznawać usterki
                </p>
                <button 
                  onClick={() => setSelectedCategory('Technika i inspekcje')}
                  className="btn-ghost"
                >
                  Zobacz artykuły
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              <div className="feature-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h4 text-text mb-4">Finanse i ubezpieczenia</h3>
                <p className="body-md text-muted mb-6">
                  Finansowanie zakupu, leasing, ubezpieczenia i optymalizacja kosztów użytkowania pojazdu
                </p>
                <button 
                  onClick={() => setSelectedCategory('Finanse i leasing')}
                  className="btn-ghost"
                >
                  Zobacz artykuły
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="display-md text-text mb-6">
              Potrzebujesz profesjonalnej pomocy?
            </h2>
            <p className="body-lg mb-8 max-w-2xl mx-auto">
              Jeśli artykuły nie odpowiedziały na wszystkie pytania, skontaktuj się z naszymi ekspertami
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/kontakt" className="btn-primary text-lg px-8 py-4">
                Umów konsultację
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/pomoc-w-zakupie" className="btn-secondary text-lg px-8 py-4">
                Zobacz nasze usługi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};