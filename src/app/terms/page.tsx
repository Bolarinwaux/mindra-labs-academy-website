import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import { TopNavigation } from '@/components/layout/TopNavigation';
import { SiteFooter } from '@/components/layout/SiteFooter';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopNavigation />
      <main className="flex-1 py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-orange-100 text-brand-orange">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Mindra Labs Academy
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Terms of Service
            </h1>
          </div>
        </div>

        <div className="prose prose-slate text-sm leading-relaxed space-y-6 text-slate-600">
          <p>
            Welcome to Mindra Labs Academy. By enquiring or enrolling in our programmes, you agree to these terms.
          </p>

          <h3 className="text-lg font-bold text-slate-900">1. Programme Structure &amp; Progression</h3>
          <p>
            Each level is an 8-week structured learning programme. Progression from one level to the next is evaluated based on demonstrated understanding, weekly practical work, and completion of the final project, rather than automatic promotion based solely on attendance.
          </p>

          <h3 className="text-lg font-bold text-slate-900">2. Placement &amp; Enrolment</h3>
          <p>
            Enquiry submissions indicate interest and do not constitute an automatic confirmed enrolment. An academic mentor will evaluate the learner&apos;s background and placement readiness before final cohort assignment.
          </p>

          <h3 className="text-lg font-bold text-slate-900">3. Code of Conduct</h3>
          <p>
            We maintain an encouraging, collaborative, and respectful virtual classroom environment. Learners and mentors are expected to uphold mutual respect and constructive participation.
          </p>

          <h3 className="text-lg font-bold text-slate-900">4. Contact</h3>
          <p>
            Questions regarding terms and policies can be directed to{' '}
            <a
              href="mailto:mindralabsacademy@gmail.com"
              className="text-emerald-700 font-semibold underline"
            >
              mindralabsacademy@gmail.com
            </a>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

