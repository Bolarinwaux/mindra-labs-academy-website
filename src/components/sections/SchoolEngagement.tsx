import React from 'react';
import Image from 'next/image';
import { School, ArrowUpRight } from 'lucide-react';

export const SchoolEngagement: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden" id="schools">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wide uppercase mb-4">
              <School className="w-3.5 h-3.5" />
              School Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Bring Practical Coding and AI Learning to Your School
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Bring technology learning beyond the traditional classroom. Mindra Labs helps schools introduce coding, AI and practical digital skills through engaging, hands-on experiences that inspire creativity and problem-solving.
            </p>

            {/* 2x2 Feature Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-xs font-bold text-white mb-1.5">Practical Coding Education</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Introduce students to programming through creative exercises and hands-on activities that help them understand how digital products are made.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-xs font-bold text-white mb-1.5">Artificial Intelligence Exploration</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Help students discover what AI is, how it works, how to use it responsibly and how it can support creativity and problem-solving.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-xs font-bold text-white mb-1.5">Creative Project Development</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Give learners opportunities to apply their knowledge by developing digital projects, experimenting with ideas and presenting what they create.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-xs font-bold text-white mb-1.5">Technology Learning Opportunities</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Explore opportunities to introduce structured coding and AI learning experiences to students in your school.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#enrol"
                className="px-6 py-3 rounded-full bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold tracking-wide transition-all shadow-md"
              >
                Discuss a School Programme
              </a>
              <a
                href="#enrol"
                className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-slate-200 text-xs font-semibold tracking-wide transition-all flex items-center gap-2"
              >
                <span>Enquire About School Engagement</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column Photo & Quote Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl text-slate-900">
              <div className="aspect-video w-full bg-slate-800 relative overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida/ALJJyrACMn-lxnmCh8ppRdqsxSXzwWVKgJEkDJPu4FVmqtUSn7Xo1PJI3x2Ru2R5I6GvxyzJHwMxNefWx-9odyz1sV7wfM0ni7yiKZAXzQJba-liNf-GqWRnM4mb4_5KGujPhPQ0fdTxEFjFNlRDOl3YCPbx_qqoVx0i-QZKnIEYB3brpD2wir8bI7RtfC_mPBOyRylgR0RWJ-BRgpfL2OrZ-D8GUnLljwW0USCjfZTWxkqhGQ"
                  alt="Diverse students in a modern tech workshop guided by an encouraging mentor"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold text-emerald-800 tracking-wider uppercase">
                    School Engagement
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">
                    Collaborative Learning
                  </span>
                </div>
                <p className="text-xs text-slate-600 italic leading-snug">
                  &ldquo;Engaging technology learning experiences designed to help young people understand coding and artificial intelligence through active participation.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
