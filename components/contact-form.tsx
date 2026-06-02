"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [amount, setAmount] = useState<string>("3500");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Placeholder submit handler — wire to your backend / form service.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
    setAmount("3500");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative grid gap-0 overflow-hidden border border-ink-200 bg-cream-50 lg:grid-cols-12 dark:border-ink-800 dark:bg-ink-950"
    >
      {/* Left rail — editorial intro */}
      <aside className="relative overflow-hidden bg-ink-950 p-8 text-cream-50 sm:p-10 lg:col-span-5 dark:bg-clay-900">
        <div className="absolute inset-0 pattern-weave opacity-25" />
        <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-clay-500/30 blur-3xl" />

        <div className="relative">
          <h3 className="mt-4 font-display text-3xl font-medium leading-[1.05] tracking-editorial sm:text-4xl">
            Prefer to write? We're listening.
          </h3>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-200/85">
            Tell us a little about yourself and we'll reach out within one
            business day — by your preferred channel.
          </p>

          <ul className="mt-10 space-y-4 border-t border-cream-50/15 pt-7 text-sm">
            <li className="flex items-start gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-clay-300">
                01
              </span>
              <span className="text-cream-100">Fill in the form →</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-clay-300">
                02
              </span>
              <span className="text-cream-100">
                We respond within one business day
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-clay-300">
                03
              </span>
              <span className="text-cream-100">You decide if it's a yes</span>
            </li>
          </ul>
        </div>
      </aside>

      {/* Right — the form */}
      <div className="grid gap-5 p-8 sm:p-10 lg:col-span-7">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Full name" required>
            <input
              type="text"
              name="name"
              required
              placeholder="Kgomotso Dintwa"
              className="field"
              autoComplete="name"
            />
          </Field>
          <Field label="Phone" required>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+267 71 234 567"
              className="field"
              autoComplete="tel"
            />
          </Field>
        </div>

        <Field label="Email" hint="optional">
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="field"
            autoComplete="email"
          />
        </Field>

        <Field label="Loan amount needed" hint="in Pula · optional">
          <div className="relative">
            {/* <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm text-ink-400 dark:text-ink-500">
              P
            </span> */}
            <input
              type="text"
              inputMode="numeric"
              name="amount"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value.replace(/[^\d]/g, "").slice(0, 7))
              }
              placeholder="3500"
              className="field pl-8 font-mono"
            />
          </div>
        </Field>

        <Field label="How can we help?" required>
          <textarea
            name="message"
            required
            placeholder="A short note about what you need or any questions you have…"
            className="field"
            rows={5}
          />
        </Field>

        {/* Preferred channel */}
        <fieldset>
          <legend className="block font-mono text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-300">
            Preferred channel
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {["WhatsApp", "Phone call", "Email"].map((opt, i) => (
              <label
                key={opt}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm text-ink-700 transition hover:border-clay-500 hover:text-clay-700 has-[:checked]:border-clay-600 has-[:checked]:bg-clay-600 has-[:checked]:text-cream-50 dark:border-ink-700 dark:text-ink-200 dark:has-[:checked]:bg-clay-400 dark:has-[:checked]:text-ink-950"
              >
                <input
                  type="radio"
                  name="channel"
                  value={opt}
                  defaultChecked={i === 0}
                  className="sr-only"
                />
                <span className="font-mono text-[10px] tracking-widest text-ink-400 group-has-[:checked]:text-cream-50/70 dark:text-ink-500 dark:group-has-[:checked]:text-ink-950/70">
                  0{i + 1}
                </span>
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Consent */}
        <label className="flex items-start gap-3 text-xs leading-relaxed text-ink-600 dark:text-ink-300">
          <input
            type="checkbox"
            required
            name="consent"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-ink-300 text-clay-600 focus:ring-clay-500 dark:border-ink-700 dark:bg-ink-900"
          />
          <span>
            I agree to be contacted by MicroLending and have read the{" "}
            <a
              href="#"
              className="link-underline font-medium text-ink-900 dark:text-cream-100"
            >
              privacy policy
            </a>
            .
          </span>
        </label>

        {/* Submit row */}
        <div className="mt-2 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p
            aria-live="polite"
            className={`font-mono text-[11px] uppercase tracking-widest ${
              status === "success"
                ? "text-forest-600 dark:text-forest-300"
                : status === "error"
                  ? "text-clay-600 dark:text-clay-300"
                  : "text-ink-400 dark:text-ink-500"
            }`}
          >
            {status === "success"
              ? "✓ Sent — we'll be in touch shortly."
              : status === "error"
                ? "✕ Something went wrong. Try again?"
                : ""}
          </p>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-medium text-cream-50 transition hover:bg-clay-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-cream-100 dark:text-ink-950 dark:hover:bg-clay-400"
          >
            {status === "submitting" ? (
              <>
                <svg
                  className="h-3.5 w-3.5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="3"
                  />
                  <path
                    d="M22 12a10 10 0 0 1-10 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                Sending…
              </>
            ) : (
              <>
                Send message
                <span className="grid h-6 w-6 place-items-center rounded-full bg-cream-50/15 transition group-hover:translate-x-0.5 dark:bg-ink-950/20">
                  <svg
                    className="h-3 w-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-700 dark:text-ink-200">
          {label}
          {required ? (
            <span className="ml-1 text-clay-600 dark:text-clay-300">*</span>
          ) : null}
        </span>
        {hint ? (
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-500">
            {hint}
          </span>
        ) : null}
      </div>
      {children}
    </label>
  );
}
