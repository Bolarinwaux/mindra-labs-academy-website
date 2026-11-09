import React from 'react';
import { CheckCircle, ArrowRight, Info } from 'lucide-react';

export const PlacementGuidance: React.FC = () => {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-emerald-50/40 border border-slate-200/90 p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
            <CheckCircle className="w-3.5 h-3.5" />
            Placement Guidance
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Every Student Starts at the Right Level
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Our placement process helps us understand each student&apos;s existing knowledge and experience so we can recommend a suitable starting level.
          </p>
        </div>
        <a
          href="#enrol"
          className="shrink-0 px-6 py-3 rounded-full bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
        >
          <span>Enquire About Placement</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* 3 Simple Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 border border-slate-200/70 shadow-xs">
          <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mb-2.5">
            1
          </div>
          <h4 className="text-xs font-bold text-slate-900 mb-1">
            Share your learning experience
          </h4>
          <p className="text-[11px] text-slate-500 leading-snug">
            Tell us about what your child has already explored, whether visual coding, written languages or tech tools.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/70 shadow-xs">
          <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mb-2.5">
            2
          </div>
          <h4 className="text-xs font-bold text-slate-900 mb-1">
            Complete a placement assessment
          </h4>
          <p className="text-[11px] text-slate-500 leading-snug">
            A friendly, informal review of computational concepts to gauge confidence and problem-solving readiness.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/70 shadow-xs">
          <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mb-2.5">
            3
          </div>
          <h4 className="text-xs font-bold text-slate-900 mb-1">
            Receive guidance on starting level
          </h4>
          <p className="text-[11px] text-slate-500 leading-snug">
            Our mentors recommend the exact right cohort so your child feels neither overwhelmed nor held back.
          </p>
        </div>
      </div>

      {/* Clarification Note */}
      <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 text-[11px] text-slate-600 leading-relaxed flex items-start gap-2.5">
        <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <span>
          <strong className="text-slate-800">Clarification note:</strong> Age helps us choose appropriate learning materials and teaching approaches, but it does not automatically determine a student&apos;s programming level. Programming and AI are separate learning pathways, and placement considers the student&apos;s relevant experience and ability.
        </span>
      </div>
    </div>
  );
};

