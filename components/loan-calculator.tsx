"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const MIN_AMOUNT = 500;
const MAX_AMOUNT = 6000;
const STEP_AMOUNT = 100;

const MIN_DAYS = 7;
const MAX_DAYS = 90;

// 1-month rates are tiered by loan amount
const INTEREST_TIERS_1M = [
  { min: 6000, rate: 0.165 },
  { min: 5000, rate: 0.175 },
  { min: 4000, rate: 0.185 },
  { min: 3000, rate: 0.195 },
  { min: 2000, rate: 0.205 },
  { min: 500,  rate: 0.25  },
];

// 2- and 3-month rates are flat regardless of loan amount
const RATE_2_MONTHS = 0.205;
const RATE_3_MONTHS = 0.195;

function getMonthlyRate(amount: number, months: number): number {
  if (months === 2) return RATE_2_MONTHS;
  if (months >= 3) return RATE_3_MONTHS;
  for (const tier of INTEREST_TIERS_1M) {
    if (amount >= tier.min) return tier.rate;
  }
  return 0.25;
}

const PULA = (n: number) =>
  new Intl.NumberFormat("en-BW", {
    style: "currency",
    currency: "BWP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);

function calc(amount: number, days: number) {
  const months = Math.max(1, Math.ceil(days / 30));
  const rate = getMonthlyRate(amount, months);
  const interest = amount * rate * months;
  const total = amount + interest;
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + days);
  return { interest, rate, total, dueDate };
}

export function LoanCalculator() {
  const [amount, setAmount] = useState(3500);
  const [days, setDays] = useState(30);

  const { interest, rate, total, dueDate } = useMemo(
    () => calc(amount, days),
    [amount, days],
  );

  const amountProgress =
    ((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100;
  const daysProgress = ((days - MIN_DAYS) / (MAX_DAYS - MIN_DAYS)) * 100;

  const formattedDue = new Intl.DateTimeFormat("en-BW", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(dueDate);

  return (
    <section
      id="calculator"
      className="relative scroll-mt-24 border-y border-ink-200/60 bg-cream-100/40 py-24 dark:border-ink-800/70 dark:bg-ink-900/30"
    >
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1] tracking-editorial text-ink-900 sm:text-5xl lg:text-6xl text-balance dark:text-cream-100">
              See what you'll repay,{" "}
              <span className="italic font-normal text-clay-600 dark:text-clay-300">
                before
              </span>{" "}
              you apply.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-ink-200 bg-ink-200 lg:grid-cols-5 dark:border-ink-700 dark:bg-ink-700">
          {/* Controls */}
          <div className="bg-cream-50 p-6 sm:p-10 lg:col-span-3 dark:bg-ink-950">
            {/* Amount */}
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-clay-600 dark:text-clay-300">
                Amount
              </span>
              <span className="h-px flex-1 bg-ink-200 dark:bg-ink-800" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-500">
                pula
              </span>
            </div>

            <div className="mt-3 flex items-end justify-between">
              <div className="font-display text-[56px] font-medium leading-none tracking-editorial text-ink-900 sm:text-[72px] dark:text-cream-100">
                <span className="text-ink-600 dark:text-ink-400">P</span>
                <span>{amount.toLocaleString()}</span>
              </div>
              <div className="flex gap-1.5">
                <CounterBtn
                  onClick={() =>
                    setAmount((a) => Math.max(MIN_AMOUNT, a - 500))
                  }
                  label="Decrease"
                >
                  −
                </CounterBtn>
                <CounterBtn
                  onClick={() =>
                    setAmount((a) => Math.min(MAX_AMOUNT, a + 500))
                  }
                  label="Increase"
                >
                  +
                </CounterBtn>
              </div>
            </div>

            <input
              type="range"
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              step={STEP_AMOUNT}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="slider mt-7"
              style={{ ["--progress" as string]: `${amountProgress}%` }}
              aria-label="Loan amount"
            />
            <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-500">
              <span>P{MIN_AMOUNT.toLocaleString()}</span>
              <span>P{MAX_AMOUNT.toLocaleString()}</span>
            </div>

            {/* Term */}
            <div className="mt-12 flex items-baseline gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-clay-600 dark:text-clay-300">
                Term
              </span>
              <span className="h-px flex-1 bg-ink-200 dark:bg-ink-800" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-500">
                calendar days
              </span>
            </div>

            <div className="mt-3 flex items-end justify-between gap-3">
              <div className="font-display text-[56px] font-medium leading-none tracking-editorial text-ink-900 sm:text-[72px] dark:text-cream-100">
                <span>{days}</span>
                <span className="ml-2 font-display italic text-xl font-normal text-ink-500 dark:text-ink-300">
                  days
                </span>
              </div>
              <div className="flex flex-wrap justify-end gap-1.5">
                {[
                  { days: 30, label: "1 month" },
                  { days: 60, label: "2 months" },
                  { days: 90, label: "3 months" },
                ].map(({ days: d, label }) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDays(d)}
                    className={`rounded-full border px-3 py-1 text-[11px] font-mono transition ${
                      days === d
                        ? "border-clay-600 bg-clay-600 text-cream-50 dark:border-clay-400 dark:bg-clay-400 dark:text-ink-950"
                        : "border-ink-300 text-ink-600 hover:border-clay-500 hover:text-clay-600 dark:border-ink-700 dark:text-ink-300 dark:hover:border-clay-400 dark:hover:text-clay-300"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <input
              type="range"
              min={MIN_DAYS}
              max={MAX_DAYS}
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="slider mt-7"
              style={{ ["--progress" as string]: `${daysProgress}%` }}
              aria-label="Loan term"
            />
            <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-500">
              <span>{MIN_DAYS} days</span>
              <span>{MAX_DAYS} days</span>
            </div>

          </div>

          {/* Summary panel */}
          <div className="relative overflow-hidden bg-ink-950 p-6 text-cream-50 sm:p-10 lg:col-span-2 dark:bg-clay-900">
            {/* decorative weave pattern */}
            <div className="absolute inset-0 pattern-weave opacity-40 pointer-events-none" />
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-clay-500/30 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2 text-clay-300">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                  ◆ Total to repay
                </span>
              </div>
              <div className="mt-5">
                <div className="font-display text-5xl font-medium leading-[0.95] tracking-editorial sm:text-6xl">
                  <span className="text-clay-300/70">P</span>
                  <span>
                    {new Intl.NumberFormat("en-BW", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(total)}
                  </span>
                </div>
                <p className="mt-3 text-sm text-cream-200/80">
                  Due in one lump sum on{" "}
                  <span className="font-display italic text-cream-50">
                    {formattedDue}
                  </span>
                  .
                </p>
              </div>

              <div className="mt-8 divide-y divide-cream-50/10 border-t border-cream-50/10">
                <SummaryRow
                  label="Monthly interest"
                  value={`${(rate * 100).toFixed(1)}%`}
                />
                <SummaryRow
                  label="Interest charged"
                  value={PULA(interest)}
                />
              </div>

              <Link
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-between gap-2 rounded-full bg-cream-50 px-5 py-3.5 text-sm font-medium text-ink-900 transition hover:bg-clay-400 hover:text-cream-50"
              >
                Apply for {PULA(amount).replace(/\.00$/, "")}
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>

              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-cream-200/50">
                ✻ subject to affordability check ✻
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CounterBtn({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-10 w-10 place-items-center rounded-full border border-ink-300 font-display text-lg text-ink-700 transition hover:border-clay-500 hover:bg-clay-50 hover:text-clay-700 dark:border-ink-700 dark:text-ink-200 dark:hover:border-clay-400 dark:hover:bg-clay-900/40 dark:hover:text-clay-200"
    >
      {children}
    </button>
  );
}


function SummaryRow({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="flex items-baseline justify-between py-2.5">
      <div>
        <div className="text-sm text-cream-200/80">{label}</div>
        {hint ? (
          <div className="font-mono text-[10px] uppercase tracking-widest text-cream-200/50">
            {hint}
          </div>
        ) : null}
      </div>
      <div className="font-mono text-base font-medium text-cream-50">
        {value}
      </div>
    </div>
  );
}
