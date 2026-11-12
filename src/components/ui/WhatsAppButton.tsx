import React from 'react';
import { siteConfig } from '@/content/siteConfig';

export const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent(
    'Hello Mindra Labs Academy! I would like to enquire about your coding and AI programmes for young learners.'
  );

  return (
    <a
      href={`https://wa.me/${siteConfig.defaultWhatsApp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with Admissions on WhatsApp"
      className="fixed bottom-6 right-6 z-50 hidden h-12 w-12 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white items-center justify-center shadow-lg transition-transform hover:scale-105 sm:flex"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.48 0 .13 5.34.13 11.91c0 2.1.55 4.16 1.6 5.97L0 24l6.28-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.56 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.73.98.99-3.64-.24-.37a9.85 9.85 0 0 1-1.51-5.27c0-5.47 4.45-9.92 9.92-9.92a9.84 9.84 0 0 1 7.02 2.91 9.84 9.84 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.07-.81.38-.28.3-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.15 3.28 5.2 4.6.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    </a>
  );
};