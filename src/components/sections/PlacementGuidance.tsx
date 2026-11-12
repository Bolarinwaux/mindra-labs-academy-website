
import React from 'react';
import { CheckCircle, ArrowRight, Info } from 'lucide-react';

export const PlacementGuidance: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Share your learning experience',
      description:
        'Tell us what your child has explored, the tools they have used and the skills they have developed.',
    },
    {
      number: '02',
      title: 'Complete a learning experience questionnaire',
      description:
        'Share the tools, skills and projects your child has explored before, so we can understand their existing experience.',
    },
    {
      number: '03',
      title: 'Receive guidance on starting level',
      description:
        'We review the responses and recommend a suitable starting level for your child.',
    },
  ];

  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-emerald-50/40 border border-slate-200/90 p-6 sm:p-8 shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-stretch">

        {/* LEFT: Placement information */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 mb-4">
              Placement Guidance
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Every Student Starts at the Right Level
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Every child comes with a different level of experience. Our
              placement process helps us understand what they already know
              and recommend the right learning starting point.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-5 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              Enquire About Placement
              <ArrowRight size={17} />
            </a>
          </div>

          {/* Three placement steps */}
          <div className="space-y-5">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  {step.number}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Clarification note */}
          <div className="mt-6 flex gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4">
            <Info
              size={20}
              className="flex-shrink-0 text-emerald-600 mt-0.5"
            />
            <p className="text-sm leading-relaxed text-slate-600">
              <strong className="text-slate-800">Clarification note:</strong>{' '}
              Age helps us identify suitable learning options, but previous
              experience guides placement. Our questionnaire explores tools
              used, skills learned and projects completed. The result is a
              recommendation, not an academic test. Programming and AI
              placement are considered separately.
            </p>
          </div>
        </div>

        {/* RIGHT: Standalone image */}
        <div className="min-h-[320px] lg:min-h-full overflow-hidden rounded-2xl">
          <img
            src="/Images/student-placement.webp"
            alt="Students receiving guided learning support at Mindra Labs"
            className="w-full h-full min-h-[320px] object-cover"
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
};
