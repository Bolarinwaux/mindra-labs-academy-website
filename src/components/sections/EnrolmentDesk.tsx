'use client';

import React, { useState } from 'react';
import { Check, Mail, Send, MessageSquareText, ShieldAlert } from 'lucide-react';
import { siteConfig } from '@/content/siteConfig';

export const EnrolmentDesk: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    country: 'NG',
    ageGroup: '7-9',
    programme: 'coding',
    format: 'weekend',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const generateWhatsAppLink = () => {
    const text = `Hello Mindra Labs Academy! I would like to enquire about the ${formData.programme.toUpperCase()} programme for my child (Age Group: ${formData.ageGroup}). My name is ${formData.parentName || 'Parent'}.`;
    return `https://wa.me/${siteConfig.defaultWhatsApp}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatusMessage({
          type: 'success',
          text: data.message || 'Thank you! We have received your enquiry.',
        });
        // Optionally reset form
        setFormData({
          parentName: '',
          email: '',
          phone: '',
          country: 'NG',
          ageGroup: '7-9',
          programme: 'coding',
          format: 'weekend',
          message: '',
          consent: false,
        });
      } else {
        setStatusMessage({
          type: 'error',
          text: data.message || 'Something went wrong. Please reach out via WhatsApp.',
        });
      }
    } catch {
      setStatusMessage({
        type: 'error',
        text: 'Network error. Please try submitting again or contact us directly on WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-brand-dark text-white pt-24 pb-20" id="enrol">
      {/* Top Wave Divider */}
      <div className="w-full absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none transform rotate-180">
        <svg
          className="relative block w-full h-10 text-white fill-current"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M0,0 C150,90 400,110 600,60 C800,10 1050,40 1200,90 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Info */}
          <div className="lg:col-span-6">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4">
              Direct Enrolment Desk
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Ready to Ignite Your Child&apos;s Tech Potential?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              We don&apos;t believe in high-pressure sales or automated subscriptions. Share your goals, and an academic mentor will personally recommend the right cohort.
            </p>

            <div className="space-y-4 mb-10 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </span>
                <span>No payment details required to enquire</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </span>
                <span>Prompt human reply via WhatsApp or Email</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </span>
                <span>Strict UK &amp; Nigerian safeguarding standards</span>
              </div>
            </div>

            {/* Email Banner Card */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-emerald-300 mb-1">
                <Mail className="w-4 h-4" />
                <p className="text-[10px] font-bold uppercase tracking-wider">
                  Official Admissions Email
                </p>
              </div>
              <a
                className="text-sm font-semibold text-white underline hover:text-emerald-300 transition-colors"
                href={`mailto:${siteConfig.admissionsEmail}`}
              >
                {siteConfig.admissionsEmail}
              </a>
              <p className="text-[10px] text-slate-400 mt-1">
                Available for school partnerships and cohort placement queries.
              </p>
            </div>
          </div>

          {/* Right Column Submission Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl">
              <h3 className="text-xl font-black text-slate-900 mb-1">Submit an Enquiry</h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out this quick form and our admissions team will get in touch directly.
              </p>

              {statusMessage && (
                <div
                  className={`p-3.5 mb-5 rounded-xl text-xs flex items-start gap-2.5 ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {statusMessage.type === 'success' ? (
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full text-xs rounded-xl border border-slate-200 px-3.5 py-2.5 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-slate-800 placeholder-slate-400"
                      placeholder="e.g. Dr. K. Adeyemi"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-xs rounded-xl border border-slate-200 px-3.5 py-2.5 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-slate-800 placeholder-slate-400"
                      placeholder="parent@example.com"
                      required
                      type="email"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full text-xs rounded-xl border border-slate-200 px-3.5 py-2.5 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-slate-800 placeholder-slate-400"
                      placeholder="+234 or +44..."
                      required
                      type="tel"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full text-xs rounded-xl border border-slate-200 px-3.5 py-2.5 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-slate-800 bg-white"
                    >
                      <option value="NG">Nigeria</option>
                      <option value="UK">United Kingdom</option>
                      <option value="US">United States / Canada</option>
                      <option value="Other">Other Global</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Child&apos;s Age Group *
                    </label>
                    <select
                      name="ageGroup"
                      value={formData.ageGroup}
                      onChange={handleChange}
                      className="w-full text-xs rounded-xl border border-slate-200 px-2.5 py-2.5 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-slate-800 bg-white"
                    >
                      <option value="7-9">Ages 7 - 9</option>
                      <option value="10-12">Ages 10 - 12</option>
                      <option value="13-15">Ages 13 - 15</option>
                      <option value="16-17">Ages 16 - 17</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Programme *
                    </label>
                    <select
                      name="programme"
                      value={formData.programme}
                      onChange={handleChange}
                      className="w-full text-xs rounded-xl border border-slate-200 px-2.5 py-2.5 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-slate-800 bg-white"
                    >
                      <option value="coding">Coding (8 Wks)</option>
                      <option value="ai">AI Exploration (8 Wks)</option>
                      <option value="both">Both Tracks</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Format *
                    </label>
                    <select
                      name="format"
                      value={formData.format}
                      onChange={handleChange}
                      className="w-full text-xs rounded-xl border border-slate-200 px-2.5 py-2.5 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-slate-800 bg-white"
                    >
                      <option value="weekend">Weekend Online</option>
                      <option value="weekday">Weekday Online</option>
                      <option value="school">School Partner</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message / Specific Questions (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full text-xs rounded-xl border border-slate-200 px-3.5 py-2 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-slate-800 placeholder-slate-400"
                    placeholder="Share any questions or goals for your child..."
                    rows={3}
                  />
                </div>

                {/* Consent checkbox */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    required
                    type="checkbox"
                  />
                  <label htmlFor="consent" className="text-[10px] text-slate-500 leading-snug">
                    I agree to be contacted by Mindra Labs regarding programme details and admissions guidance.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover disabled:opacity-70 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Enquiry...' : 'Submit Enquiry'}</span>
                </button>

                {/* Direct WhatsApp Quick Chat Alternative */}
                <div className="pt-2 text-center">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <MessageSquareText className="w-4 h-4" />
                    <span>Prefer WhatsApp? Chat directly with Admissions</span>
                  </a>
                </div>

                <p className="text-[10px] text-center text-slate-400">
                  Direct email:{' '}
                  <a className="underline text-slate-600" href={`mailto:${siteConfig.admissionsEmail}`}>
                    {siteConfig.admissionsEmail}
                  </a>
                  . No payment details required to enquire.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

