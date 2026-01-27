import React from 'react';
import { MessageCircle } from 'lucide-react'; // Using icon since we can't load whatsapp img easily without assets
// Alternatively, standard SVG for WA.

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491157084231"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce-slow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
