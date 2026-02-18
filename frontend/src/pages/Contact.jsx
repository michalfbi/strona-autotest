import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  CheckCircle,
  Calendar
} from 'lucide-react';
import { Badge } from '../components/ui/badge';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    city: '',
    preferredContact: 'phone',
    message: '',
    consent: false,
    marketing: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Mock submission
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          budget: '',
          city: '',
          preferredContact: 'phone',
          message: '',
          consent: false,
          marketing: false
        });
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "+48 690 976 790",
      link: "tel:+48690976790",
      available: "Pon-Pt: 8:00-18:00, Sob: 9:00-15:00"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "kontakt@autotest.pl",
      link: "mailto:kontakt@autotest.pl",
      available: "Odpowiadamy w ciągu 24h"
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "ul. Przykładowa 123\n00-001 Warszawa",
      available: "Spotkania po umówieniu"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+48 690 976 790", 
      link: "https://wa.me/48690976790",
      available: "Szybki kontakt i konsultacje"
    }
  ];

  const officeHours = [
    { day: "Poniedziałek - Piątek", hours: "8:00 - 18:00" },
    { day: "Sobota", hours: "9:00 - 15:00" },
    { day: "Niedziela", hours: "Tylko pilne przypadki" }
  ];

  const serviceAreas = [
    "Warszawa i okolice",
    "Kraków i Małopolska", 
    "Wrocław i Dolny Śląsk",
    "Gdańsk i Pomorze",
    "Poznań i Wielkopolska",
    "Inne miasta - na życzenie"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass p-12">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <h2 className="display-md text-text mb-6">
                Dziękujemy za wiadomość!
              </h2>
              <p className="body-lg text-muted mb-8">
                Otrzymaliśmy Twoją wiadomość i skontaktujemy się w ciągu 24 godzin. 
                W pilnych sprawach dzwoń bezpośrednio.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+48690976790" className="btn-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń teraz
                </a>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn-ghost"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="display-lg text-text mb-6">
              Skontaktuj się z nami
            </h1>
            <p className="body-lg max-w-3xl mx-auto mb-8">
              Jesteśmy tutaj, aby pomóc Ci w bezpiecznym zakupie samochodu. 
              Umów bezpłatną konsultację lub zadaj pytanie.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge>Odpowiedź w 24h</Badge>
              <Badge>Bezpłatna konsultacja</Badge>
              <Badge>Dostępni 7 dni w tygodniu</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="feature-card text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="h4 text-text mb-4">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="body-md text-primary hover:text-primary-hover transition-colors mb-3 block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="body-md text-text mb-3 whitespace-pre-line">
                      {info.value}
                    </div>
                  )}
                  <p className="body-sm text-muted">{info.available}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-md text-text mb-6">
                Napisz do nas
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin
              </p>
            </div>

            <div className="glass p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="+48 690 976 790"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="jan.kowalski@example.com"
                  />
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-text mb-2">
                      Budżet (opcjonalnie)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="">Wybierz przedział</option>
                      <option value="do-40k">do 40 000 PLN</option>
                      <option value="40-70k">40 000 - 70 000 PLN</option>
                      <option value="70-120k">70 000 - 120 000 PLN</option>
                      <option value="120k+">powyżej 120 000 PLN</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-text mb-2">
                      Miasto/region
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Warszawa"
                    />
                  </div>
                </div>

                {/* Preferred Contact */}
                <div>
                  <label className="block text-sm font-medium text-text mb-3">
                    Preferowany sposób kontaktu
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 text-primary focus:ring-primary"
                      />
                      <span className="text-text">Telefon</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 text-primary focus:ring-primary"
                      />
                      <span className="text-text">E-mail</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === 'whatsapp'}
                        onChange={handleInputChange}
                        className="mr-2 text-primary focus:ring-primary"
                      />
                      <span className="text-text">WhatsApp</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Wiadomość (opcjonalnie)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="input-field resize-none"
                    placeholder="Opisz swoję potrzeby, pytania lub uwagi..."
                  ></textarea>
                </div>

                {/* Consents */}
                <div className="space-y-4">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mr-3 mt-1 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-text">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na zapytanie zgodnie z <a href="/polityka-prywatnosci" className="text-primary hover:underline">polityką prywatności</a> *
                    </span>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="marketing"
                      checked={formData.marketing}
                      onChange={handleInputChange}
                      className="mr-3 mt-1 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-text">
                      Wyrażam zgodę na otrzymywanie informacji marketingowych od autotest (możesz wycofać zgodę w dowolnym momencie)
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={!formData.consent}
                    className="btn-primary w-full"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Wyślij wiadomość
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Service Areas */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Office Hours */}
              <div>
                <h2 className="display-md text-text mb-8">
                  Godziny dostępności
                </h2>
                <div className="glass p-6">
                  <div className="flex items-center mb-6">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    <h3 className="h4 text-text">Kiedy jesteśmy dostępni</h3>
                  </div>
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-glass-border/50 last:border-b-0">
                        <span className="text-text font-medium">{schedule.day}</span>
                        <span className="text-primary">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-text">
                      <strong>Pilne przypadki:</strong> W przypadku pilnych spraw związanych z zakupem samochodu, 
                      jesteśmy dostępni również poza godzinami pracy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h2 className="display-md text-text mb-8">
                  Obszar działania
                </h2>
                <div className="glass p-6">
                  <div className="flex items-center mb-6">
                    <MapPin className="w-6 h-6 text-primary mr-3" />
                    <h3 className="h4 text-text">Gdzie realizujemy usługi</h3>
                  </div>
                  <div className="space-y-3">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-text">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-text">
                      <strong>Zasięg:</strong> Realizujemy inspekcje mobilne w całej Polsce. 
                      Koszty dojazdu wliczane są w cenę usługi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="display-md text-text mb-6">
              Potrzebujesz szybkiej pomocy?
            </h2>
            <p className="body-lg mb-8 max-w-2xl mx-auto">
              Skorzystaj z szybkich opcji kontaktu dla pilnych spraw
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+48690976790" className="btn-primary text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń teraz
              </a>
              <a href="https://wa.me/48690976790" className="btn-secondary text-lg px-8 py-4">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
              <button className="btn-ghost text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Umów spotkanie
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};