'use client';

import React, { useState } from 'react';
import { Code2, Bot, ArrowRight, Check } from 'lucide-react';
import { pathwaysData } from '@/content/pathways';
import { PlacementGuidance } from './PlacementGuidance';

export const LearningPathways: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'programming' | 'ai'>('programming');
  const currentPathway = pathwaysData[activeTab];
  const isProgramming = activeTab === 'programming';

  return (
    <section className="py-20 bg-white" id="pathways">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-orange-50 text-brand-orange text-xs font-bold tracking-wider uppercase mb-3">
            Our Learning Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Explore What Your Child Will Learn
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
            Discover our progressive Programming and AI pathways, where students develop practical skills, grow their understanding, and create meaningful projects through guided learning.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Two independent learning pathways • Students do not have to enrol in both
          </div>
        </div>

        {/* Interactive Tabs Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('programming')}
              className={`px-6 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                isProgramming
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Programming Pathway</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ai')}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                !isProgramming
                  ? 'bg-brand-orange text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>Artificial Intelligence Pathway</span>
            </button>
          </div>
        </div>

        {/* Progression Banner */}
        <div
          className={`mb-8 p-4 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-3 ${
            isProgramming
              ? 'bg-emerald-50/60 border-emerald-100/80'
              : 'bg-orange-50/70 border-orange-100'
          }`}
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900">
            <span
              className={`px-2.5 py-1 rounded-md text-white text-[11px] font-mono font-bold tracking-wider ${
                isProgramming ? 'bg-emerald-800' : 'bg-brand-orange'
              }`}
            >
              {currentPathway.badge}
            </span>
            <span className={isProgramming ? 'text-emerald-950' : 'text-orange-950'}>
              {currentPathway.progression}
            </span>
          </div>
          <p
            className={`text-[11px] sm:text-xs leading-snug max-w-xl ${
              isProgramming ? 'text-emerald-800/90' : 'text-orange-900/90'
            }`}
          >
            {currentPathway.description}
          </p>
        </div>

        {/* 3 Level Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {currentPathway.levels.map((level) => (
            <div
              key={level.id}
              className="border border-slate-200 rounded-3xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide ${
                      isProgramming
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-orange-100 text-brand-orange'
                    }`}
                  >
                    {level.duration}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-black text-xs ${
                      isProgramming
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-orange-50 text-brand-orange'
                    }`}
                  >
                    {level.levelNumber}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 mb-2">{level.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {level.description}
                </p>

                <div className="mb-5">
                  <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Check
                      className={`w-3.5 h-3.5 ${
                        isProgramming ? 'text-emerald-600' : 'text-brand-orange'
                      }`}
                    />
                    Learning Highlights
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pl-1">
                    {level.learningHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span
                          className={`font-bold ${
                            isProgramming ? 'text-emerald-500' : 'text-brand-orange'
                          }`}
                        >
                          •
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Example Final Projects:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {level.exampleProjects.map((proj, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placement Guidance Box */}
        <PlacementGuidance />
      </div>
    </section>
  );
};

