import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { TopNavigation } from '@/components/layout/TopNavigation';
import { SiteFooter } from '@/components/layout/SiteFooter';

export default function PrivacyPage() {
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
          <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Mindra Labs Academy
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Privacy &amp; Child Safeguarding Policy
            </h1>
          </div>
        </div>

        <div className="prose prose-slate text-sm leading-relaxed space-y-6 text-slate-600">
          <p>
            Mindra Labs Academy is dedicated to safeguarding the privacy and online safety of every child and parent who interacts with our programmes. This policy outlines our data handling principles.
          </p>

          <h3 className="text-lg font-bold text-slate-900">1. Information We Collect</h3>
          <p>
            We collect only necessary information required to coordinate student placement and deliver education:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Parent or guardian full name, email address, and phone/WhatsApp number.</li>
            <li>Student age category (we do not collect full birthdates or sensitive IDs on enquiry).</li>
            <li>Previous programming and computing experience for placement evaluation.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900">2. Student Safeguarding &amp; Consent</h3>
          <p>
            All direct communications regarding admissions, assessments, and progress are routed through verified parents or guardians. We never sell or share learner contact information with external marketers.
          </p>

          <h3 className="text-lg font-bold text-slate-900">3. Student Work and Showcase</h3>
          <p>
            Student projects are only published or showcased with explicit, documented parental consent. Student projects on the public site are labelled as examples unless verified and approved.
          </p>

          <h3 className="text-lg font-bold text-slate-900">4. Responsible AI &amp; Safe Tools</h3>
          <p>
            AI tools used in our curriculum are selected based on strict age-appropriateness, privacy reviews, and child safety standards. Students are taught ethical AI usage, fact-checking, and data protection from day one.
          </p>

          <h3 className="text-lg font-bold text-slate-900">5. Contact Us</h3>
          <p>
            For privacy inquiries or safeguarding questions, reach us at{' '}
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
