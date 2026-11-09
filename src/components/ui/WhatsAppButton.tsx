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
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.79.814 2.791.814 3.18 0 5.766-2.587 5.766-5.766 0-3.18-2.586-5.766-5.766-5.766zm9.969 5.828c0 5.522-4.478 10-10 10-1.77 0-3.43-.46-4.88-1.27l-5.12 1.34 1.37-5c-.92-1.51-1.45-3.28-1.45-5.07 0-5.522 4.478-10 10-10s10 4.478 10 10z" />
      </svg>
    </a>
  );
};

