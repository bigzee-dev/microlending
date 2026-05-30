const testimonials = [
  {
    name: "Kgomotso D.",
    role: "Teacher · Gaborone West",
    quote:
      "I needed money urgently to cover my child's school registration. MicroLending paid me out within 40 minutes. Honestly, I was shocked. I'll use them again.",
    accent: "from-clay-500 to-clay-700",
    initial: "K",
  },
  {
    name: "Tumelo R.",
    role: "Mechanic · Tlokweng",
    quote:
      "The website is so simple. I applied from my phone on a Saturday afternoon and bought the parts I needed before the workshop closed. Top service.",
    accent: "from-forest-600 to-forest-800",
    initial: "T",
  },
  {
    name: "Boipelo S.",
    role: "Nurse · Princess Marina",
    quote:
      "What sold me was the calculator. I knew exactly what I was going to pay back before signing anything. No tricks. Will recommend to my friends.",
    accent: "from-marigold-500 to-marigold-700",
    initial: "B",
  },
  {
    name: "Mpho L.",
    role: "Hair stylist · Mogoditshane",
    quote:
      "I was nervous because of bad experiences with other lenders, but these guys are different. Friendly call centre, fair price. Lekker.",
    accent: "from-ink-700 to-ink-900",
    initial: "M",
  },
];

export function Testimonials() {
  return (
    <section className="relative border-y border-ink-200/60 bg-cream-100/40 py-24 sm:py-28 dark:border-ink-800/70 dark:bg-ink-900/30">
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-clay-600 dark:text-clay-300">
              ✦ 06 — Voices
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1] tracking-editorial text-ink-900 sm:text-5xl lg:text-6xl text-balance dark:text-cream-100">
              Loved by Batswana from{" "}
              <span className="italic font-normal text-clay-600 dark:text-clay-300">
                Lobatse to Francistown.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <div className="flex items-baseline justify-end gap-2 text-clay-600 dark:text-clay-300">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="font-display text-2xl leading-none">
                  ★
                </span>
              ))}
            </div>
            <p className="mt-3 font-display text-3xl font-medium tracking-editorial text-ink-900 dark:text-cream-100">
              <span className="font-mono">4.9</span>
              <span className="text-ink-400 dark:text-ink-500"> / 5</span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500 dark:text-ink-300">
              n = 2,184 reviews
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-0 border border-ink-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-ink-800">
          {testimonials.map((t, idx) => (
            <figure
              key={t.name}
              className={`group relative flex h-full flex-col bg-cream-50 p-7 transition hover:bg-cream-100/60 dark:bg-ink-950 dark:hover:bg-ink-900 ${
                idx > 0 ? "sm:border-l lg:border-l" : ""
              } ${idx === 2 ? "sm:border-l-0 lg:border-l" : ""} ${
                idx >= 2 ? "border-t sm:border-t lg:border-t-0" : ""
              } border-ink-200 dark:border-ink-800`}
            >
              <span className="font-display text-7xl italic leading-none text-clay-500 dark:text-clay-300">
                &ldquo;
              </span>

              <blockquote className="-mt-6 flex-1 font-display text-base font-normal leading-snug text-ink-800 dark:text-cream-100">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-200 pt-4 dark:border-ink-800">
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${t.accent} font-display text-sm font-medium text-cream-50`}
                >
                  {t.initial}
                </span>
                <div className="leading-tight">
                  <div className="font-display text-sm font-medium text-ink-900 dark:text-cream-100">
                    {t.name}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-300">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
