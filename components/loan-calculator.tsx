"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const MIN_AMOUNT = 500;
const MAX_AMOUNT = 15000;
const STEP_AMOUNT = 100;

const MIN_DAYS = 7;
const MAX_DAYS = 90;

const DAILY_INTEREST = 0.0035;
const INITIATION_FEE_PCT = 0.05;
const INITIATION_FEE_CAP = 750;
const SERVICE_FEE_PER_MONTH = 60;

const PULA = (n: number) =>
  new Intl.NumberFormat("en-BW", {
    style: "currency",
    currency: "BWP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);

function calc(amount: number, days: number) {
  const interest = amount * DAILY_INTEREST * days;
  const initiation = Math.min(amount * INITIATION_FEE_PCT, INITIATION_FEE_CAP);
  const months = Math.max(1, Math.ceil(days / 30));
  const service = SERVICE_FEE_PER_MONTH * months;
  const total = amount + interest + initiation + service;
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + days);
  return {
    interest,
    initiation,
    service,
    total,
    dueDate,
    apr: ((interest + initiation + service) / amount) * (365 / days) * 100,
  };
}

export function LoanCalculator() {
  const [amount, setAmount] = useState(3500);
  const [days, setDays] = useState(30);

  const { interest, initiation, service, total, dueDate, apr } = useMemo(
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
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-clay-600 dark:text-clay-300">
              ✦ 02 — Calculate
            </span>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1] tracking-editorial text-ink-900 sm:text-5xl lg:text-6xl text-balance dark:text-cream-100">
              See what you'll repay,{" "}
              <span className="italic font-normal text-clay-600 dark:text-clay-300">
                before
              </span>{" "}
              you apply.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-ink-600 sm:block dark:text-ink-300">
            Move the dials. Every fee is on the table from the start — no
            surprises, no small print.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-ink-200 bg-ink-200 lg:grid-cols-5 dark:border-ink-700 dark:bg-ink-700">
          {/* Controls */}
          <div className="bg-cream-50 p-6 sm:p-10 lg:col-span-3 dark:bg-ink-950">
            {/* Amount */}
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-clay-600 dark:text-clay-300">
                ¶ principal
              </span>
              <span className="h-px flex-1 bg-ink-200 dark:bg-ink-800" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-500">
                pula
              </span>
            </div>

            <div className="mt-3 flex items-end justify-between">
              <div className="font-display text-[56px] font-medium leading-none tracking-editorial text-ink-900 sm:text-[72px] dark:text-cream-100">
                <span className="text-ink-400 dark:text-ink-500">P</span>
                <span className="font-mono">{amount.toLocaleString()}</span>
              </div>
              <div className="flex gap-1.5">
                <CounterBtn
                  onClick={() => setAmount((a) => Math.max(MIN_AMOUNT, a - 500))}
                  label="Decrease"
                >
                  −
                </CounterBtn>
                <CounterBtn
                  onClick={() => setAmount((a) => Math.min(MAX_AMOUNT, a + 500))}
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
                § term
              </span>
              <span className="h-px flex-1 bg-ink-200 dark:bg-ink-800" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-500">
                calendar days
              </span>
            </div>

            <div className="mt-3 flex items-end justify-between gap-3">
              <div className="font-display text-[56px] font-medium leading-none tracking-editorial text-ink-900 sm:text-[72px] dark:text-cream-100">
                <span className="font-mono">{days}</span>
                <span className="ml-2 font-display italic text-xl font-normal text-ink-500 dark:text-ink-300">
                  days
                </span>
              </div>
              <div className="flex flex-wrap justify-end gap-1.5">
                {[14, 30, 60, 90].map((d) => (
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
                    {d}d
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

            {/* Ledger */}
            <div className="mt-12 border-t border-ink-200 pt-6 dark:border-ink-800">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500 dark:text-ink-400">
                  † Ledger
                </span>
                <span className="font-mono text-[10px] text-ink-400 dark:text-ink-500">
                  All figures in BWP
                </span>
              </div>
              <dl className="mt-3 divide-y divide-ink-200 dark:divide-ink-800">
                <LedgerRow label="Principal" value={PULA(amount)} />
                <LedgerRow label="Interest" value={PULA(interest)} note={`${(DAILY_INTEREST*100).toFixed(2)}% / day`} />
                <LedgerRow label="Initiation fee" value={PULA(initiation)} note="5%, capped at P750" />
                <LedgerRow label="Service fee" value={PULA(service)} note={`P${SERVICE_FEE_PER_MONTH} per month`} />
              </dl>
            </div>
          </div>

          {/* Summary panel */}
          <div className="relative overflow-hidden bg-ink-950 p-6 text-cream-50 sm:p-10 lg:col-span-2 dark:bg-clay-900">
            {/* decorative weave pattern */}
            <div className="absolute inset-0 pattern-weave opacity-40" />
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
                  <span className="font-mono">
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
                  label="Effective APR"
                  value={`${apr.toFixed(1)}%`}
                  hint="illustrative"
                />
                <SummaryRow
                  label="Daily interest"
                  value={`${(DAILY_INTEREST * 100).toFixed(2)}%`}
                />
                <SummaryRow
                  label="Time to payout"
                  value="< 60 minutes"
                  hint="business hrs"
                />
              </div>

              <Link
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-between gap-2 rounded-full bg-cream-50 px-5 py-3.5 text-sm font-medium text-ink-900 transition hover:bg-clay-400 hover:text-cream-50"
              >
                Apply for {PULA(amount).replace(/\.00$/, "")}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
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

function LedgerRow({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="flex items-baseline justify-between py-2.5">
      <div>
        <span className="text-sm text-ink-700 dark:text-ink-200">{label}</span>
        {note ? (
          <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-500">
            {note}
          </span>
        ) : null}
      </div>
      <span className="font-mono text-sm font-medium text-ink-900 dark:text-cream-100">
        {value}
      </span>
    </div>
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
