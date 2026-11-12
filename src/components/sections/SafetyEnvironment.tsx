import React from 'react';
import { ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';

export const SafetyEnvironment: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50/40 via-white to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block text-[11px] font-extrabold text-emerald-800 uppercase tracking-widest mb-2">
          Our Commitment to Every Learner
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-12">
          A Safe, Supportive<br />Environment to Learn and Grow
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Safe &amp; Welcoming Space</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                We prioritize child safeguarding, positive online interactions, and age-appropriate learning environments where every student feels valued.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-[11px] font-bold text-slate-800">Child-First Safeguarding</p>
              <p className="text-[10px] text-slate-500">Positive, respectful atmosphere</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Ethical Digital Thinking</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Children learn to use coding and AI thoughtfully, ethically and responsibly, developing critical thinking rather than passive dependency.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-[11px] font-bold text-slate-800">Responsible AI &amp; Code</p>
              <p className="text-[10px] text-slate-500">Critical digital literacy</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-brand-softOrange text-brand-orange flex items-center justify-center mb-5">
<svg
  viewBox="0 0 24 24"
  className="w-5 h-5"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.48 0 .13 5.34.13 11.91c0 2.1.55 4.16 1.6 5.97L0 24l6.28-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.56 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.73.98.99-3.64-.24-.37a9.85 9.85 0 0 1-1.51-5.27c0-5.47 4.45-9.92 9.92-9.92a9.84 9.84 0 0 1 7.02 2.91 9.84 9.84 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.07-.81.38-.28.3-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.15 3.28 5.2 4.6.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
</svg>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Direct Parent Communication</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Regular progress updates, approachable academic coordinators, and transparent guidance every step of your child&apos;s tech journey.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-[11px] font-bold text-slate-800">Personalised Guidance</p>
              <p className="text-[10px] text-slate-500">Transparent support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

