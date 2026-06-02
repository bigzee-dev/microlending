"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who can apply for a MicroLending loan?",
    a: "Any Motswana citizen aged 18 or older with a valid Omang, a Botswana bank account, and a regular source of income can apply. You don't need a perfect credit history — we look at your overall affordability.",
  },
  {
    q: "How much can I borrow?",
    a: "First-time customers can borrow between P500 and P5,000. As you build a repayment track record with us, your limit can grow up to P15,000.",
  },
  {
    q: "How fast will I get my money?",
    a: "Most approved loans are paid out within 60 minutes during business hours (Mon–Sat, 08:00–17:00 CAT). Applications outside business hours are processed first thing the next working day.",
  },
  {
    q: "What documents do I need?",
    a: "Just your Omang and your three most recent payslips or bank statements. You can upload photos directly during the online application — no scanning required.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on how much you borrow and for how long. Every fee — interest, initiation fee, service fee — is shown clearly in the calculator above before you commit. There are no hidden charges.",
  },
  {
    q: "What happens if I can't repay on time?",
    a: "Talk to us before your due date. We'll always try to find a workable solution rather than penalising you. Avoiding the conversation is what hurts your credit score.",
  },
  {
    q: "Is my information safe?",
    a: "Yes. We use bank-grade encryption, store data on secured servers, and never sell your information. We comply with Botswana's Data Protection Act.",
  },
  {
    q: "Are you a registered lender?",
    a: "MicroLending operates in line with NBFIRA guidelines and Botswana's consumer credit regulations. Our license details are visible at our Gaborone office and in the footer of this site.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-clay-600 dark:text-clay-300">
              ✦ 07 — Questions
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1] tracking-editorial text-ink-900 sm:text-5xl lg:text-6xl text-balance dark:text-cream-100">
              Everything you need to know.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink-600 lg:col-span-5 dark:text-ink-300">
            Still curious? Drop us a WhatsApp or give us a call. We genuinely
            love helping.
          </p>
        </div>

        <div className="mt-14 border-t border-ink-200 dark:border-ink-800">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="border-b border-ink-200 dark:border-ink-800"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start justify-between gap-6 py-6 text-left transition"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-clay-600 dark:text-clay-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl font-medium tracking-tight text-ink-900 transition group-hover:text-clay-600 sm:text-2xl dark:text-cream-100 dark:group-hover:text-clay-300">
                      {f.q}
                    </span>
                  </div>
                  <span
                    className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition ${
                      isOpen
                        ? "border-clay-600 bg-clay-600 text-cream-50 dark:border-clay-400 dark:bg-clay-400 dark:text-ink-950"
                        : "border-ink-300 text-ink-500 dark:border-ink-700 dark:text-ink-300"
                    }`}
                  >
                    <svg
                      className={`h-3 w-3 transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 pb-6">
                    <p className="ml-12 max-w-3xl text-base leading-relaxed text-ink-700 dark:text-ink-200">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
