import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { siteConfig } from '@/content/siteConfig';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-[#021f19] text-slate-300 pt-16 pb-8 border-t border-emerald-950 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
                <span className="text-brand-lime">M</span>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Mindra<span className="text-brand-orange">Labs</span> Academy
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Equipping children and teenagers across Nigeria and the UK with genuine coding, algorithms, and artificial intelligence skills through structured, project-driven mentoring.
            </p>
            <p className="text-emerald-400 font-semibold text-[11px] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{siteConfig.locations.join(' • ')}</span>
            </p>
          </div>

          {/* Programmes Column */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Programmes</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#programmes" className="hover:text-emerald-400 transition-colors">
                  Young Innovators (7-12)
                </a>
              </li>
              <li>
                <a href="#programmes" className="hover:text-emerald-400 transition-colors">
                  Future Creators (13-17)
                </a>
              </li>
              <li>
                <a href="#pathways" className="hover:text-emerald-400 transition-colors">
                  Programming Pathway
                </a>
              </li>
              <li>
                <a href="#pathways" className="hover:text-emerald-400 transition-colors">
                  AI Learning Pathway
                </a>
              </li>
            </ul>
          </div>

          {/* For Schools Column */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">For Schools</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#schools" className="hover:text-emerald-400 transition-colors">
                  Curriculum Partner
                </a>
              </li>
              <li>
                <a href="#schools" className="hover:text-emerald-400 transition-colors">
                  School Tech Clubs
                </a>
              </li>
              <li>
                <a href="#schools" className="hover:text-emerald-400 transition-colors">
                  Teacher Workshops
                </a>
              </li>
              <li>
                <a href="#schools" className="hover:text-emerald-400 transition-colors">
                  Safeguarding Standards
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support Column */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contact & Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  className="text-emerald-400 hover:underline"
                  href={`mailto:${siteConfig.admissionsEmail}`}
                >
                  {siteConfig.admissionsEmail}
                </a>
              </li>
              <li>
                <a href="#enrol" className="hover:text-emerald-400 transition-colors">
                  Admissions Desk
                </a>
              </li>
              <li>
                <a href="#pathways" className="hover:text-emerald-400 transition-colors">
                  Placement Guidance
                </a>
              </li>
              <li>
                <a href="#method" className="hover:text-emerald-400 transition-colors">
                  The Mindra Method
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {siteConfig.copyrightYear} Mindra Labs Academy. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <a href="#schools" className="hover:text-white transition-colors">
              Safeguarding Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

