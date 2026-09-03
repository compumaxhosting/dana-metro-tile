import { Phone, Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function MobileContactEasy() {
  const phoneNumber = "+15512067097"; // Replace with your number
  const whatsappNumber = "15512067097"; // Replace with your number (no +)
  const emailAddress = "info@metrotilesandstones.com"; // Replace with your email address

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
      {/* Phone Redirect */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Us"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-theme-cream bg-red-600 text-theme-cream shadow-lg transition-transform active:scale-95"
      >
        <Phone className="h-5 w-5 text-theme-cream" />
      </a>

      {/* WhatsApp Chat Redirect */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-theme-cream bg-green-600 text-theme-cream shadow-lg transition-transform active:scale-95"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="h-8 w-auto"/>
      </a>

      {/* Email Redirect */}
      <a
        href={`mailto:${emailAddress}?subject=Inquiry%20regarding%20your%20services`}
        aria-label="Send Email"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-800 border border-theme-cream text-theme-cream shadow-lg transition-transform active:scale-95"
      >
        <Mail className="h-5 w-5 text-theme-cream" />
      </a>
    </div>
  );
}