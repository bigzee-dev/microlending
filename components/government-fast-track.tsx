import Link from "next/link";

const perks = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Approved same day",
    note: "Submit before 14:00",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    label: "Payslip is all you need",
    note: "No extra documents",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    label: "No salary cession",
    note: "Keep control of your account",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
    label: "Repeat with one message",
    note: "Skip the forms next time",
  },
];

// Botswana flag colours
const BW_BLUE = "#75AADB";
const BW_BLACK = "#000000";

function BotswanaFlag({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        overflow: "hidden",
        borderRadius: 6,
        boxShadow: "0 4px 18px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ height: "35%", background: BW_BLUE }} />
      <div style={{ height: "5%", background: "#fff" }} />
      <div style={{ height: "20%", background: BW_BLACK }} />
      <div style={{ height: "5%", background: "#fff" }} />
      <div style={{ height: "35%", background: BW_BLUE }} />
    </div>
  );
}

export function GovernmentFastTrack() {
  return (
    <div className="relative isolate overflow-hidden bg-clay-900">
      {/* Texture & depth layers */}
      <div className="absolute inset-0 pattern-weave opacity-20 pointer-events-none" />
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-clay-400/30 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 h-[380px] w-[380px] rounded-full bg-clay-800/40 blur-[70px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── LEFT ── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 flex-wrap">
              <BotswanaFlag className="h-7 w-11" />
              <span className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 bg-cream-50/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cream-200 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream-200 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cream-200" />
                </span>
                Government fast-track
              </span>
            </div>

            {/* Headline */}
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1] tracking-editorial text-cream-50 text-balance sm:text-5xl lg:text-6xl">
              Civil Servants —{" "}
              <span className="font-normal text-cream-200">
                approved in 24 hours.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-cream-100/80">
              Your government employment is your strongest credential. Show us
              your latest payslip and we'll take care of the rest — same day, no
              queues, no paperwork chase.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-cream-50 px-6 py-3.5 text-sm font-semibold text-clay-700 transition hover:bg-cream-100 hover:scale-[1.02] active:scale-100"
              >
                Apply as a civil servant
                <span className="grid h-6 w-6 place-items-center rounded-full bg-clay-600/15 transition group-hover:translate-x-0.5">
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
              </Link>
              <Link
                href="#calculator"
                className="link-underline text-sm font-medium text-cream-200 hover:text-cream-50 py-2"
              >
                Calculate first →
              </Link>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div>
            {/* Perks grid */}
            <ul className="grid grid-cols-1 gap-px bg-cream-50/10 border border-cream-50/15 sm:grid-cols-2">
              {perks.map((p) => (
                <li
                  key={p.label}
                  className="group flex items-start gap-4 bg-clay-600/60 p-5 transition hover:bg-clay-500/60 sm:p-6"
                >
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream-50/15 text-cream-100 transition group-hover:bg-cream-50/25">
                    <span className="h-5 w-5">{p.icon}</span>
                  </span>
                  <div>
                    <p className="font-display text-base font-medium text-cream-50">
                      {p.label}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-cream-200/60">
                      {p.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Bottom callout strip */}
            <div className="mt-px flex items-center justify-between gap-4 border border-cream-50/15 bg-clay-800/50 px-5 py-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-cream-200/70">
                ✻ Eligible — all Botswana government departments ✻
              </p>
              <BotswanaFlag className="h-5 w-8 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
