"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const MIN_AMOUNT = 500;
const MAX_AMOUNT = 6000;
const STEP_AMOUNT = 100;

const MIN_MONTHS = 1;
const MAX_MONTHS = 3;

// Rate depends only on loan term, not amount
// 1 month: 25% | 2 months: 20.5%/month (41% total) | 3 months: 19.5%/month (58.5% total)
function getMonthlyRate(months: number): number {
  if (months >= 3) return 0.195;
  if (months === 2) return 0.205;
  return 0.25;
}

const PULA = (n: number) =>
  new Intl.NumberFormat("en-BW", {
    style: "currency",
    currency: "BWP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);

function calc(amount: number, months: number) {
  const rate = getMonthlyRate(months);
  const rawTotal = amount + amount * rate * months;
  const total = Math.ceil(rawTotal);
  const interest = total - amount;
  const installmentAmount = Math.ceil(total / months);

  const installments = Array.from({ length: months }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + (i + 1) * 30);
    return date;
  });

  return { interest, rate, total, installmentAmount, installments };
}

export function LoanCalculator() {
  const [amount, setAmount] = useState(3500);
  const [months, setMonths] = useState(1);

  const { interest, rate, total, installmentAmount, installments } = useMemo(
    () => calc(amount, months),
    [amount, months],
  );

  const amountProgress =
    ((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100;
  const monthsProgress =
    ((months - MIN_MONTHS) / (MAX_MONTHS - MIN_MONTHS)) * 100;

  const formatDate = (d: Date) =>
    new Intl.DateTimeFormat("en-BW", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(d);

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
                months
              </span>
            </div>

            <div className="mt-3 flex items-end justify-between gap-3">
              <div className="font-display text-[56px] font-medium leading-none tracking-editorial text-ink-900 sm:text-[72px] dark:text-cream-100">
                <span>{months}</span>
                <span className="ml-2 font-display italic text-xl font-normal text-ink-500 dark:text-ink-300">
                  {months === 1 ? "month" : "months"}
                </span>
              </div>
              <div className="flex flex-wrap justify-end gap-1.5">
                {[
                  { value: 1, label: "1 month" },
                  { value: 2, label: "2 months" },
                  { value: 3, label: "3 months" },
                ].map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setMonths(value)}
                    className={`rounded-full border px-3 py-1 text-[11px] font-mono transition ${
                      months === value
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
              min={MIN_MONTHS}
              max={MAX_MONTHS}
              step={1}
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="slider mt-7"
              style={{ ["--progress" as string]: `${monthsProgress}%` }}
              aria-label="Loan term"
            />
            <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-500">
              <span>1 month</span>
              <span>3 months</span>
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

                {months === 1 ? (
                  <p className="mt-3 text-sm text-cream-200/80">
                    Due in one lump sum on{" "}
                    <span className="font-display italic text-cream-50">
                      {formatDate(installments[0])}
                    </span>
                    .
                  </p>
                ) : (
                  <div className="mt-3">
                    <p className="text-sm text-cream-200/80">
                      Paid in{" "}
                      <span className="font-display italic text-cream-50">
                        {months} equal instalments
                      </span>{" "}
                      of{" "}
                      <span className="font-display italic text-cream-50">
                        {PULA(installmentAmount).replace(/\.00$/, "")}
                      </span>{" "}
                      each.
                    </p>
                    <ol className="mt-3 space-y-1.5">
                      {installments.map((date, i) => (
                        <li
                          key={i}
                          className="flex items-baseline justify-between gap-3 text-[12px]"
                        >
                          <span className="font-mono text-cream-200/50 uppercase tracking-widest">
                            Month {i + 1}
                          </span>
                          <span className="flex-1 border-b border-dashed border-cream-50/10" />
                          <span className="text-cream-200/70">
                            {formatDate(date)}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              <div className="mt-8 divide-y divide-cream-50/10 border-t border-cream-50/10">
                <SummaryRow
                  label="Monthly interest"
                  value={`${(rate * 100).toFixed(1)}%`}
                />
                <SummaryRow label="Interest charged" value={PULA(interest)} />
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
