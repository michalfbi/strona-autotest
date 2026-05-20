import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { Badge } from '../components/ui/badge';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', budget: '', city: '', preferredContact: 'phone', message: '', consent: false });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch("https://formsubmit.co/ajax/michalpakula12345@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ ...formData, _subject: "Nowe zgłoszenie kontaktowe - Auto Test" })
      });

      if (!response.ok) {
        throw new Error('FormSubmit response not ok');
      }

      setFormData({ name: '', phone: '', email: '', budget: '', city: '', preferredContact: 'phone', message: '', consent: false });
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') return <div className="text-center py-20"><CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4"/><h2>Dziękujemy!</h2></div>;

  return (
    <div className="min-h-screen p-10">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input name="name" placeholder="Imię" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="input-field w-full" />
        <input name="phone" placeholder="Telefon" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="input-field w-full" />
        <input name="email" type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="input-field w-full" />
        <textarea name="message" placeholder="Wiadomość" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="input-field w-full" />
        <button type="submit" className="btn-primary w-full">{status === 'submitting' ? 'Wysyłanie...' : 'Wyślij'}</button>
      </form>
    </div>
  );
};
