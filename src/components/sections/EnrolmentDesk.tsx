'use client';

import React from 'react';
import Script from 'next/script';
import { Check, Mail, MessageSquareText } from 'lucide-react';
import { siteConfig } from '@/content/siteConfig';

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const tallyEmbedUrl =
  'https://tally.so/embed/RWMW1p?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';

export const EnrolmentDesk: React.FC = () => {
  return (
    <section className="relative bg-brand-dark text-white pt-24 pb-20" id="enrol">
      {/* Top Wave Divider */}
      <div className="w-full absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none transform rotate-180">
        <svg
          className="relative block w-full h-10 text-white fill-current"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M0,0 C150,90 400,110 600,60 C800,10 1050,40 1200,90 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Info */}
          <div className="lg:col-span-6">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4">
              Direct Enrolment Desk
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Ready to Ignite Your Child&apos;s Tech Potential?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              We don&apos;t believe in high-pressure sales or automated subscriptions. Share your goals, and an academic mentor will personally recommend the right cohort.
            </p>

            <div className="space-y-4 mb-10 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </span>
                <span>No payment details required to enquire</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </span>
                <span>Prompt human reply via WhatsApp or Email</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </span>
                <span>Strict UK &amp; Nigerian safeguarding standards</span>
              </div>
            </div>

            {/* Email Banner Card */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-emerald-300 mb-1">
                <Mail className="w-4 h-4" />
                <p className="text-[10px] font-bold uppercase tracking-wider">
                  Official Admissions Email
                </p>
              </div>
              <a
                className="text-sm font-semibold text-white underline hover:text-emerald-300 transition-colors"
                href={`mailto:${siteConfig.admissionsEmail}`}
              >
                {siteConfig.admissionsEmail}
              </a>
              <p className="text-[10px] text-slate-400 mt-1">
                Available for school partnerships and cohort placement queries.
              </p>
            </div>
          </div>

          {/* Right Column Placement Questionnaire */}
          <div className="lg:col-span-6">
            <div
              id="placement-questionnaire"
              className="scroll-mt-24 bg-white rounded-3xl p-5 sm:p-8 text-slate-900 shadow-2xl"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-3">
                Placement Questionnaire
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                Find the Right Learning Level for Your Child
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-500 mb-5">
                <p>
                  Tell us about your child&apos;s experience with Programming and/or AI. Your answers
                  will help us recommend a suitable starting level.
                </p>
                <p>
                  This is not a test. Just answer based on what your child already knows or has
                  explored.
                </p>
                <p>Our team will review the responses and confirm the final placement.</p>
              </div>

              <div className="min-w-0 overflow-hidden rounded-2xl">
                <iframe
                  data-tally-src={tallyEmbedUrl}
                  loading="lazy"
                  width="100%"
                  height="216"
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  title="Mindra Labs Programme Experience and Placement Questionnaire"
                  className="block w-full max-w-full border-0"
                />
              </div>

              <Script
                src="https://tally.so/widgets/embed.js"
                strategy="afterInteractive"
                onReady={() => window.Tally?.loadEmbeds()}
              />

              <div className="mt-5 border-t border-slate-100 pt-4 text-center">
                <a
                  href={`https://wa.me/${siteConfig.defaultWhatsApp}?text=${encodeURIComponent(
                    'Hello Mindra Labs Academy! I have a general question about placement for my child.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Prefer WhatsApp? Chat with Admissions</span>
                </a>
                <p className="text-[10px] text-center text-slate-400 mt-3">
                  Direct email:{' '}
                  <a
                    className="underline text-slate-600"
                    href={`mailto:${siteConfig.admissionsEmail}`}
                  >
                    {siteConfig.admissionsEmail}
                  </a>
                  . No payment details required to enquire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
