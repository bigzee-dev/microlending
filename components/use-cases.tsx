const cases = [
  {
    title: "Household emergencies",
    body:
      "Burst geyser? Broken fridge? Cover unexpected home costs without dipping into savings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "School fees & uniforms",
    body:
      "Make sure the kids are ready for the new term — repay comfortably once your salary lands.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 10-10-5L2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1 4 3 6 3s6-2 6-3v-5" />
      </svg>
    ),
  },
  {
    title: "Health & wellness",
    body:
      "Cover medical bills, prescriptions, or specialist consultations when you need them most.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    title: "Car repairs",
    body:
      "Get your wheels back on the road quickly. Pay the mechanic, drive to work, repay later.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6.5" cy="16.5" r="2.5" />
        <circle cx="17.5" cy="16.5" r="2.5" />
        <path d="M3 16.5V11l3-6h11l3 6v5.5" />
      </svg>
    ),
  },
  {
    title: "Small business cashflow",
    body:
      "Cover stock or a once-off opportunity. Get back to running your hustle, fast.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Family obligations",
    body:
      "Help with funerals, weddings, or family responsibilities — without the stress of waiting.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.5" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M2 21v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1M16 21v-1a4 4 0 0 1 4-4h2" />
      </svg>
    ),
  },
];

export function UseCases() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-clay-600 dark:text-clay-300">
              ✦ 05 — Uses
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1] tracking-editorial text-ink-900 sm:text-5xl lg:text-6xl text-balance dark:text-cream-100">
              Life happens.{" "}
              <span className="italic font-normal text-clay-600 dark:text-clay-300">
                We bridge the gap.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink-600 lg:col-span-5 dark:text-ink-300">
            A MicroLending loan is yours to spend however you need. No
            justification required — just the next chapter, financed.
          </p>
        </div>

        <ul className="mt-16 grid gap-0 border border-ink-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-ink-800">
          {cases.map((c, idx) => (
            <li
              key={c.title}
              className={`group relative flex flex-col bg-cream-50 p-7 transition hover:bg-clay-50/60 sm:p-8 dark:bg-ink-950 dark:hover:bg-clay-950/40 ${
                idx % 2 === 1 ? "sm:border-l" : ""
              } ${idx === 2 || idx === 5 ? "lg:border-l" : ""} ${
                idx >= 2 ? "border-t" : ""
              } ${idx >= 3 ? "lg:border-t" : ""} border-ink-200 dark:border-ink-800`}
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-ink-200 text-clay-600 transition group-hover:border-clay-500 group-hover:bg-clay-500 group-hover:text-cream-50 dark:border-ink-700 dark:text-clay-300 dark:group-hover:border-clay-400 dark:group-hover:bg-clay-400 dark:group-hover:text-ink-950">
                  <span className="h-5 w-5">{c.icon}</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-500">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-ink-900 dark:text-cream-100">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {c.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
