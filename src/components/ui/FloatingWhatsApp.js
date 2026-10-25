'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

function WhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.29 3.78 2.52 1.09 2.52.73 2.98.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.17-.47-.29" />
    </svg>
  );
}

export default function FloatingWhatsApp({ 
  phoneNumber = "+15551234567",
  message = "Hello Alexander, I would like to inquire about a photography booking." 
}) {
  const [isOpen, setIsOpen] = useState(false);

  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end group">
      {/* Tooltip / Popup note */}
      <div 
        className={`mb-3 p-4 bg-[#F8F2EB] border border-[#CCBEB1] rounded-[2px] shadow-2xl max-w-[calc(100vw-2rem)] sm:max-w-xs transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-90 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#CCBEB1]/40 mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#997E67] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#997E67]">
              Studio Concierge
            </span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            aria-label="Close message"
            className="text-[#82705F] hover:text-[#2E2219] p-1 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-xs text-[#5E4D3E] leading-relaxed mb-3">
          Have questions about our wedding packages or date availability? Chat directly with us on WhatsApp.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold !bg-[#997E67] hover:!bg-[#664930] !border-[#997E67] !text-white text-xs py-2.5 px-4 w-full text-center flex items-center justify-center gap-2 font-medium tracking-wider"
        >
          <WhatsAppIcon className="w-4 h-4 text-white" />
          <span>Start WhatsApp Chat</span>
        </a>
      </div>

      {/* Floating Action Button */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Subtle pill badge visible on hover on larger screens */}
        <span className="hidden sm:inline-block bg-[#F8F2EB] text-[#2E2219] border border-[#CCBEB1] text-xs font-medium px-3 py-1.5 rounded-[2px] shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat on WhatsApp
        </span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle WhatsApp Chat"
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#997E67] hover:bg-[#664930] text-white border border-[#CCBEB1]/70 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#997E67]/25"
        >
          {/* Subtle pulse ring matching the warm theme */}
          <span className="absolute inset-0 rounded-full bg-[#997E67] opacity-25 animate-ping -z-10" />

          {/* Crisp, authentic WhatsApp Icon */}
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-300 group-hover:scale-110" />
        </button>
      </div>
    </div>
  );
}
