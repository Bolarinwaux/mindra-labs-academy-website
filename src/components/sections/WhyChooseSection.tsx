import React from 'react';
import { Lightbulb, Code2, Users2, Zap, CheckCircle2 } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="method">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Tag */}
        <span className="inline-block px-3.5 py-1 rounded-full bg-orange-50 text-brand-orange text-xs font-bold tracking-wider uppercase mb-3">
          The Mindra Method
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Why Choose Mindra Labs?
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 mb-14">
          We help young people develop coding, AI, creativity and problem-solving skills through practical, guided learning that prepares them for the future.
        </p>

        {/* 4 Grid Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 mb-5">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Learning by Creating</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Students learn by doing, applying new concepts through hands-on activities and projects that turn ideas into real creations.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
              <span>Practical &amp; Active</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Coding and AI Together</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Learners explore coding and artificial intelligence, discovering how technology works and how to use it to create digital solutions.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Computing Foundations</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-5">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Guided, Personalised Learning</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Every learner receives guided attention and support, with room to ask questions, experiment and grow at their own pace.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
              <span>Supportive Mentoring</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Skills Beyond the Screen</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Learners build creativity, logical thinking, problem-solving and confidence as they turn their ideas into practical projects.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-violet-500" />
              <span>Critical Thinking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

