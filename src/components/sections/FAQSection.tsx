import React from 'react';
import { ChevronDown } from 'lucide-react';
import { faqsData } from '@/content/faqs';

export const FAQSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-bold tracking-wider uppercase mb-2">
            GOT QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Find answers to common questions about our programmes, learning experience and enrolment.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqsData.map((faq, index) => (
            <details
              key={index}
              className="group border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs transition-colors"
            >
              <summary className="flex items-center justify-between p-4 sm:p-5 font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none select-none">
                <span>{faq.question}</span>
                <span className="w-6 h-6 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center text-xs group-open:rotate-180 transition-transform shrink-0 ml-4">
                  <ChevronDown className="w-3.5 h-3.5" />
                </span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
