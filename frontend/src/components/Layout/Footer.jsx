import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Youtube,
  Clock,
  Shield,
  Award
} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Pomoc w zakupie pojazdów', href: '/pomoc-w-zakupie' },
      { name: 'Inspekcja mobilna', href: '/uslugi/inspekcja-mobilna' },
      { name: 'Transport i rejestracja', href: '/uslugi/transport-rejestracja' },
      { name: 'Ubezpieczenia', href: '/uslugi/ubezpieczenia' }
    ],
    company: [
      { name: 'O nas', href: '/o-nas' },
      { name: 'Case studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Cennik', href: '/cennik' }
    ],
    business: [
      { name: 'Dla firm', href: '/dla-firm' },
      { name: 'Audyt floty', href: '/dla-firm/audyt-floty' },
      { name: 'Leasing i finansowanie', href: '/dla-firm/leasing' },
      { name: 'Program partnerski', href: '/partnerzy' }
    ],
    legal: [
      { name: 'Polityka prywatności', href: '/polityka-prywatnosci' },
      { name: 'Regulamin', href: '/regulamin' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'RODO', href: '/rodo' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/autotest', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/autotest', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/autotest', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/autotest', label: 'YouTube' }
  ];

  const trustBadges = [
    { icon: Shield, text: 'Certyfikowany ekspert' },
    { icon: Award, text: '1200+ zrealizowanych zleceń' },
    { icon: Clock, text: 'Dostępni 7 dni w tygodniu' }
  ];

  return (
    <footer className="bg-surface border-t border-glass-border mt-32">
      <div className="container">
        {/* Main footer content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company info */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <h3 className="h2 font-bold text-primary">autotest</h3>
              </Link>
              
              <p className="body-md mb-8 max-w-md">
                Kompleksowa pomoc w zakupie pojazdów. Niezależni eksperci, którzy działają wyłącznie w Twoim interesie.
              </p>

              {/* Contact info */}
              <div className="space-y-4 mb-8">
                <a 
                  href="tel:+48690976790" 
                  className="flex items-center text-muted hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  +48 690 976 790
                </a>
                
                <a 
                  href="mailto:kontakt@autotest.pl" 
                  className="flex items-center text-muted hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  kontakt@autotest.pl
                </a>
                
                <div className="flex items-start text-muted">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>ul. Przykładowa 123<br />00-001 Warszawa</span>
                </div>
              </div>

              {/* Trust badges */}
              <div className="space-y-3">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center text-sm text-muted">
                    <badge.icon className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="h4 text-text mb-6">Usługi</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="h4 text-text mb-6">Firma</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business */}
            <div>
              <h4 className="h4 text-text mb-6">Biznes</h4>
              <ul className="space-y-3">
                {footerLinks.business.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-glass-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Legal links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card hover:bg-primary/10 hover:border-primary/20 border border-glass-border flex items-center justify-center text-muted hover:text-primary transition-all duration-200 hover:transform hover:-translate-y-0.5"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-glass-border text-center">
            <p className="text-sm text-muted">
              © {currentYear} autotest. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};