import React from 'react';
import { ArrowRight, BookOpen, Users, Globe2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-brand-dark pt-14 pb-28 text-white overflow-hidden">
      {/* Background Ambient Glow & Patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06332a]/95 via-[#03241d]/90 to-[#021f19] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center z-10">
        {/* Floating Batch Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-8 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Registration Opens For New Batch
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
          Learn to Code. Explore AI. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-emerald-300">
            Create the Future.
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-10">
          Give your child the opportunity to discover programming and artificial intelligence, develop problem-solving skills, and turn creative ideas into real-world projects.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#programmes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0a463a] hover:bg-[#0c5345] text-white font-semibold text-sm border border-emerald-500/30 shadow-md transition-all group"
          >
            <span>Explore Our Programmes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#enrol"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all"
          >
            Enrol your child
          </a>
        </div>

        {/* Mini Feature Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center sm:justify-start gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-left">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">Ages 7–18</p>
              <p className="text-[11px] text-slate-300 mt-1">Structured Paths</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-left">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">1:6 Ratio</p>
              <p className="text-[11px] text-slate-300 mt-1">Micro-Cohorts</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-left">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0">
              <Globe2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">Dual Curriculum</p>
              <p className="text-[11px] text-slate-300 mt-1">Nigeria &amp; UK</p>
            </div>
          </div>
        </div>
      </div>

      {/* Organic Wave Divider to white section */}
      <div className="w-full absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-12 text-white fill-current"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M0,0 C150,90 400,110 600,60 C800,10 1050,40 1200,90 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
