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
                <MessageCircle className="w-5 h-5" />
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
