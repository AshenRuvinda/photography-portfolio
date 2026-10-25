'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

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
            className="text-[#82705F] hover:text-[#2E2219] p-1"
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
          className="btn-gold !bg-[#997E67] hover:!bg-[#664930] !border-[#997E67] !text-white text-xs py-2 px-4 w-full text-center flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#FFDBBB]" /> Start WhatsApp Chat
        </a>
      </div>

      {/* Floating Action Button */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Subtle pill badge visible on hover on larger screens */}
        <span className="hidden sm:inline-block bg-[#F8F2EB] text-[#2E2219] border border-[#CCBEB1] text-xs font-medium px-3 py-1.5 rounded-[2px] shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat with Studio
        </span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle WhatsApp Chat"
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#997E67] hover:bg-[#664930] text-[#FFDBBB] border border-[#FFDBBB]/40 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#997E67]/30"
        >
          {/* Subtle pulse ring matching the warm theme */}
          <span className="absolute inset-0 rounded-full bg-[#997E67] opacity-40 animate-ping -z-10" />
          
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.507 14.307l-.009.075c-.338-.169-1.999-.988-2.31-1.101-.31-.113-.535-.169-.76.169-.226.338-.874 1.101-1.071 1.326-.197.225-.395.253-.733.084-.338-.169-1.428-.527-2.72-1.68-1.006-.897-1.685-2.005-1.882-2.343-.197-.338-.021-.521.148-.689.153-.151.338-.394.507-.591.17-.197.226-.338.338-.563.113-.226.056-.423-.028-.592-.085-.169-.76-1.832-1.042-2.508-.275-.658-.554-.569-.76-.579l-.649-.011c-.226 0-.592.085-.902.423-.31.338-1.184 1.156-1.184 2.818 0 1.662 1.212 3.269 1.381 3.494.169.225 2.384 3.642 5.776 5.107 3.392 1.465 3.392.977 4.012.92.62-.056 1.999-.817 2.281-1.606.282-.789.282-1.465.197-1.606-.084-.141-.31-.225-.648-.394zm-5.469 7.643c-1.94 0-3.843-.518-5.508-1.503l-.395-.235-4.093 1.074 1.092-3.99-.257-.409c-1.076-1.713-1.644-3.708-1.644-5.753 0-5.938 4.832-10.77 10.773-10.77 2.876 0 5.58 1.12 7.615 3.155 2.034 2.034 3.153 4.739 3.153 7.616 0 5.939-4.832 10.815-10.736 10.815zm9.141-19.877c-2.441-2.441-5.688-3.785-9.141-3.785-7.126 0-12.923 5.798-12.923 12.924 0 2.277.595 4.5 1.724 6.463l-1.839 6.719 6.877-1.804c1.9 1.037 4.053 1.583 6.161 1.583h.005c7.124 0 12.922-5.798 12.922-12.924 0-3.454-1.344-6.702-3.786-9.176z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
