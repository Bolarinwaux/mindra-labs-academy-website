'use client';

import React, { useState } from 'react';
import { Check, Copy, ExternalLink, ShieldCheck } from 'lucide-react';
import { paymentConfig } from '@/content/paymentConfig';
import { PlacementResult } from '@/types/placement';

const formatNgn = (amount: number) =>
  `₦${amount.toLocaleString('en-NG')}`;

const hasAccountNumber =
  /^\d{10,}$/.test(paymentConfig.accountNumber) &&
  !paymentConfig.accountNumber.startsWith('[');

const whatsappNumber = paymentConfig.whatsappBusinessNumber.replace(/\D/g, '');
const hasWhatsAppNumber = /^\d{8,15}$/.test(whatsappNumber);

interface PlacementPaymentProps {
  result: PlacementResult;
}

export const PlacementPayment: React.FC<PlacementPaymentProps> = ({ result }) => {
  const [copyMessage, setCopyMessage] = useState('');

  const copyAccountNumber = async () => {
    if (!hasAccountNumber) return;

    try {
      await navigator.clipboard.writeText(paymentConfig.accountNumber);
      setCopyMessage('Account number copied.');
    } catch {
      setCopyMessage('Unable to copy. Please copy the account number manually.');
    }
  };

  const whatsappMessage = [
    'Hello Mindra Labs Academy, I would like to confirm my payment.',
    `Child's name: ${result.childName}`,
    `Parent/guardian: ${result.parentName}`,
    `Programme(s): ${result.programmes.map((item) => item.programme).join(' and ')}`,
    `Recommended level(s): ${result.programmes
      .map((item) => `${item.programme}: ${item.levelRange}`)
      .join('; ')}`,
    `Amount payable: ${formatNgn(result.totalFeeNgn)}`,
    'Amount paid: [please enter the amount paid]',
    'Please confirm receipt of the payment evidence attached to this message. I will attach my bank transfer receipt or screenshot before sending.',
  ].join('\n');

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="mt-8 space-y-6" aria-live="polite">
      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
        <div className="mb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
            Preliminary placement result
          </span>
          <h3 className="mt-1 text-xl font-extrabold text-slate-900">
            {result.childName}
          </h3>
          <p className="mt-1 text-xs text-slate-600">
            Age eligibility: {result.ageRange}
          </p>
        </div>

        <div className="space-y-3">
          {result.programmes.map((item) => (
            <div
              key={item.programme}
              className="rounded-xl border border-emerald-100 bg-white p-4"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h4 className="font-bold text-slate-900">{item.programme}</h4>
                <span className="text-sm font-extrabold text-emerald-800">
                  {item.levelRange}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Preliminary age-eligible level range. Mindra Labs will review the
                submitted experience and confirm the appropriate level.
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-emerald-900">
          This is guidance, not a confirmed placement or enrolment. A Mindra Labs
          mentor will review the assessment and confirm the final level.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
          Payment summary
        </span>
        <h3 className="mt-1 text-xl font-extrabold text-slate-900">
          Bank Transfer Instructions
        </h3>
        <div className="mt-4 divide-y divide-slate-100">
          {result.programmes.map((item) => (
            <div
              key={item.programme}
              className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-bold text-slate-800">{item.programme}</p>
                <p className="text-xs text-slate-500">{item.levelRange}</p>
              </div>
              <p className="text-sm font-bold text-slate-800">
                {formatNgn(item.feeNgn)}
              </p>
            </div>
          ))}
          <div className="flex items-center justify-between pt-4">
            <p className="font-extrabold text-slate-900">Total amount payable</p>
            <p className="text-lg font-black text-emerald-800">
              {formatNgn(result.totalFeeNgn)}
            </p>
          </div>
        </div>

        <dl className="mt-5 space-y-3 rounded-xl bg-slate-50 p-4 text-sm">
          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
            <dt className="text-slate-500">Bank</dt>
            <dd className="font-bold text-slate-900">{paymentConfig.bankName}</dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
            <dt className="text-slate-500">Account name</dt>
            <dd className="font-bold text-slate-900">{paymentConfig.accountName}</dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <dt className="text-slate-500">Account number</dt>
            <dd className="flex items-center gap-2 font-bold text-slate-900">
              <span>{paymentConfig.accountNumber}</span>
              <button
                type="button"
                onClick={copyAccountNumber}
                disabled={!hasAccountNumber}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Copy account number"
              >
                <Copy className="h-3.5 w-3.5" />
                Copy
              </button>
            </dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
            <dt className="text-slate-500">Transfer reference</dt>
            <dd className="font-bold text-slate-900">
              {result.childName} - {result.programmes.map((item) => item.programme).join(' & ')}
            </dd>
          </div>
        </dl>
        {!hasAccountNumber && (
          <p className="mt-3 text-xs text-amber-800">
            Bank details are placeholders. Mindra Labs must enter and verify the
            account details before accepting transfers.
          </p>
        )}
        {copyMessage && (
          <p className="mt-2 text-xs text-slate-600" role="status">
            {copyMessage}
          </p>
        )}

        <div className="mt-5">
          {hasWhatsAppNumber ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3.5 text-center text-sm font-extrabold text-white shadow-md transition-colors hover:bg-emerald-800"
            >
              Confirm Payment via WhatsApp
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-5 py-3.5 text-center text-sm font-extrabold text-white opacity-50"
            >
              Confirm Payment via WhatsApp
            </button>
          )}
          <p className="mt-2 text-center text-xs text-slate-500">
            Manually attach your transfer receipt or screenshot in WhatsApp before
            sending. {hasWhatsAppNumber ? '' : 'The business WhatsApp number is not configured yet.'}
          </p>
        </div>
      </section>

      <aside className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-950">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          Sending payment evidence does not automatically confirm enrolment. Mindra
          Labs must verify the actual bank transaction. Enrolment is confirmed only
          after successful verification.
        </p>
      </aside>
    </div>
  );
};
