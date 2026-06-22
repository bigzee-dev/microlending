import Image from "next/image";
import Link from "next/link";
import { HashLink } from "@/components/hash-link";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Backdrop layers */}
      <div className="absolute inset-0 -z-20 bg-cream-50 dark:bg-ink-950" />
      <div className="absolute inset-0 -z-10 grain pointer-events-none" />
      <div className="absolute -top-32 right-[10%] -z-10 h-[420px] w-[420px] rounded-full bg-clay-200/40 blur-3xl dark:bg-clay-900/40" />
      <div className="absolute -bottom-32 left-[5%] -z-10 h-[360px] w-[360px] rounded-full bg-forest-200/30 blur-3xl dark:bg-forest-900/30" />

      {/* Editorial header strip */}
      {/* <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between border-b border-ink-200/60 pb-3 text-[10px] uppercase tracking-[0.25em] text-ink-500 dark:border-ink-800 dark:text-ink-300">
          <span className="font-mono">Vol. I · No. 01</span>
          <span className="hidden font-mono sm:inline">
            Personal Credit · Botswana
          </span>
          <span className="font-mono">P500 — P15,000</span>
        </div>
      </div> */}

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-24 lg:pt-16">
        {/* Editorial copy column */}
        <div className="lg:col-span-7 lg:pt-2">
          <h1 className="mt-7 font-display text-[44px] font-semibold leading-[0.95] tracking-editorial text-ink-900 text-balance sm:text-[64px] lg:text-[78px] xl:text-[92px] dark:text-cream-100">
            Flexible, short term loans for you
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-[1.55] text-ink-700 text-pretty dark:text-ink-200">
            Short-term loans from{" "}
            <span className="font-mono text-base font-medium text-ink-900 dark:text-cream-100">
              P500
            </span>{" "}
            up to{" "}
            <span className="font-mono text-base font-medium text-ink-900 dark:text-cream-100">
              P6,000
            </span>
            , paid straight out to your bank account. Low interest rates.
            Minimal paperwork. Fast Applications. Fast Approvals.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <HashLink
              hash="#calculator"
              className="group inline-flex items-center gap-3 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-medium text-cream-50 transition hover:bg-clay-600 dark:bg-cream-100 dark:text-ink-950 dark:hover:bg-clay-400"
            >
              Calculate your loan
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
            </HashLink>
            <HashLink
              hash="#how-it-works"
              className="link-underline inline-flex items-center gap-2 py-3 text-sm font-medium text-ink-900 dark:text-cream-100"
            >
              How it works
              <span className="font-mono text-[11px] text-clay-600 dark:text-clay-300">
                →
              </span>
            </HashLink>
          </div>

          {/* Editorial stat ledger */}
          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-x-6 border-t border-ink-200 pt-7 dark:border-ink-800">
            {[
              { k: "918", v: "Loans funded", note: "to date" },
              { k: "24 hrs", v: "Fast Approval", note: "business hrs" },
              { k: "4.9 / 5", v: "Customer rating", note: "n = 2,184" },
            ].map((s) => (
              <div key={s.v} className="relative">
                <dt className="font-display text-3xl font-medium tracking-editorial text-ink-900 sm:text-4xl dark:text-cream-100">
                  {/* <span className="font-mono text-[10px] align-top text-clay-600 mr-1 dark:text-clay-300">
                    +
                  </span> */}
                  {s.k}
                </dt>
                <dd className="mt-2 text-xs text-ink-600 dark:text-ink-300 leading-snug">
                  {s.v}
                  {/* <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-500">
                    {s.note}
                  </div> */}
                </dd>
              </div>
            ))}
          </dl>

          {/* Footnote-style trust badges */}
          {/* <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-600 dark:text-ink-300">
            {[
              { sym: "§", text: "NBFIRA-aligned" },
              { sym: "†", text: "Bank-grade encryption" },
              { sym: "‡", text: "24/7 application" },
              { sym: "¶", text: "Bots/Eng support" },
            ].map((b) => (
              <li key={b.text} className="inline-flex items-baseline gap-1.5">
                <span className="font-display italic text-clay-600 dark:text-clay-300">
                  {b.sym}
                </span>
                {b.text}
              </li>
            ))}
          </ul> */}
        </div>

        {/* Visual column — offset image with floating ticket */}
        <div className="relative lg:col-span-5 lg:pl-6">
          <div className="relative">
            {/* Decorative deckle */}
            <div className="absolute -left-3 -top-3 hidden h-24 w-24 border-l-2 border-t-2 border-clay-500 lg:block" />
            <div className="absolute -bottom-3 -right-3 hidden h-24 w-24 border-b-2 border-r-2 border-forest-700 lg:block dark:border-forest-300" />

            <div className="relative aspect-[4/5] overflow-hidden bg-ink-100 dark:bg-ink-800">
              <Image
                src="/111122.jpg"
                alt="Botswana entrepreneur looking at her phone"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
              {/* Duotone wash for editorial feel */}
              <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-br from-clay-600/30 via-transparent to-forest-800/30 dark:from-clay-400/20 dark:to-forest-200/10" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/70 via-ink-950/20 to-transparent" />

              {/* Editorial caption */}
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-cream-50">
                <p className="font-display italic text-sm leading-snug">
                  &ldquo;My application was processed fast and
                  efficiently.&rdquo;
                </p>
                <span className="font-mono text-[10px] uppercase tracking-widest text-cream-200/80">
                  Fig. 01
                </span>
              </figcaption>
            </div>

            {/* Receipt-style ticket */}
            <div
              className="absolute -right-2 top-6 hidden w-56 -rotate-2 border border-ink-200 bg-cream-50 p-4 shadow-editorial dark:border-ink-700 dark:bg-ink-900 sm:block"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
              }}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-300">
                  Loan receipt
                </span>
                <span className="font-mono text-[10px] text-clay-600 dark:text-clay-300">
                  No. 04821
                </span>
              </div>
              <div className="mt-3 border-t border-dashed border-ink-200 pt-3 dark:border-ink-700">
                <div className="flex items-baseline justify-between text-xs text-ink-600 dark:text-ink-300">
                  <span>Principal</span>
                  <span className="font-mono text-ink-900 dark:text-cream-100">
                    P3,500.00
                  </span>
                </div>
                <div className="mt-1 flex items-baseline justify-between text-xs text-ink-600 dark:text-ink-300">
                  <span>Term</span>
                  <span className="font-mono text-ink-900 dark:text-cream-100">
                    14 days
                  </span>
                </div>
                <div className="mt-3 flex items-baseline justify-between border-t border-dashed border-ink-200 pt-2 dark:border-ink-700">
                  <span className="font-display text-sm italic text-ink-900 dark:text-cream-100">
                    approved
                  </span>
                  <span className="font-mono text-[10px] text-forest-700 dark:text-forest-300">
                    ✓ 09:47 CAT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hand-set quote stack */}
          <div className="mt-8 flex items-center gap-4 sm:flex">
            <div className="flex -space-x-2">
              {["B85530", "264A36", "D99008"].map((c) => (
                <div
                  key={c}
                  className="h-8 w-8 rounded-full border-2 border-cream-50 dark:border-ink-950"
                  style={{
                    background: `linear-gradient(135deg, #${c}, #${c}88)`,
                  }}
                />
              ))}
            </div>
            <p className="font-display text-sm italic text-ink-700 dark:text-ink-200">
              Trusted by thousands across Botswana.
            </p>
          </div>
        </div>
      </div>

      {/* Newspaper-style banker strip */}
      <div className="border-y border-ink-200/60 bg-cream-100/50 py-5 dark:border-ink-800/70 dark:bg-ink-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-5 text-[12px] uppercase tracking-[0.3em] text-ink-500 dark:text-ink-300">
            <span className="block sm:hidden font-mono shrink-0">
              Services⟶
            </span>
            <span className="hidden sm:block font-mono shrink-0">
              our services ⟶
            </span>
            <div className="mask-fade-x overflow-hidden">
              <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
                {[...Array(2)].flatMap((_, dup) =>
                  [
                    "Quick Cash Loans",
                    "Personal Loans",
                    "Pay Day Loans",
                    "Business Loans",
                    "Purchase Orders Financing",
                    "Micro Loans",
                  ].map((name) => (
                    <span
                      key={`${dup}-${name}`}
                      className="font-display text-xl font-medium tracking-tight text-ink-500 dark:text-ink-300"
                    >
                      {name}
                    </span>
                  )),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
