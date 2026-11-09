import React from 'react';
import { ArrowRight, Sparkles, Monitor } from 'lucide-react';
import { ageTracksData } from '@/content/tracks';

export const TechnologyTracks: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-100" id="programmes">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div>
            <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
              Tailored Learning Pathways
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Technology Programmes for<br className="hidden sm:inline" /> Every Stage of Growth
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            Our programmes introduce children and teenagers to coding and AI through practical, age-appropriate learning experiences that nurture creativity, problem-solving and innovation.
          </p>
        </div>

        {/* Programmes Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ageTracksData.map((track) => {
            const isLime = track.themeColor === 'lime';
            return (
              <div
                key={track.id}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                          isLime
                            ? 'bg-lime-100 text-brand-limeDark'
                            : 'bg-orange-100 text-brand-orange'
                        }`}
                      >
                        {isLime ? (
                          <Sparkles className="w-5 h-5" />
                        ) : (
                          <Monitor className="w-5 h-5" />
                        )}
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900">{track.title}</h3>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                        isLime ? 'bg-lime-100 text-lime-800' : 'bg-orange-100 text-brand-orange'
                      }`}
                    >
                      {track.ageRange}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {track.description}
                  </p>

                  {/* Sub Programme Options */}
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Available Programme Options:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {track.options.map((opt, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50"
                      >
                        <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-1">
                          <span
                            className={
                              isLime ? 'text-emerald-600 font-mono' : 'text-brand-orange font-mono'
                            }
                          >
                            {opt.icon}
                          </span>{' '}
                          {opt.title}
                        </p>
                        <p className="text-[11px] font-semibold text-slate-500 mb-1">
                          {opt.duration}
                        </p>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {opt.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs font-semibold text-slate-500 mb-6">
                    Each programme runs for 8 weeks • Separate options for Coding and AI
                  </p>
                </div>

                <a
                  href="#enrol"
                  className={`w-full py-3.5 rounded-xl font-extrabold text-sm text-center transition-all flex items-center justify-center gap-2 shadow-sm ${
                    isLime
                      ? 'bg-brand-lime hover:bg-[#b4d63a] text-slate-900'
                      : 'bg-brand-orange hover:bg-brand-orangeHover text-white shadow-orange-600/20'
                  }`}
                >
                  <span>{track.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

