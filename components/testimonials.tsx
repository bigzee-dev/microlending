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
          </div>
        </div>

        <div className="mt-16 border border-ink-200 dark:border-ink-800">
          <figure className="group relative flex flex-col bg-cream-50 p-8 transition hover:bg-cream-100/60 sm:p-10 lg:p-14 dark:bg-ink-950 dark:hover:bg-ink-900">
            <span className="font-display text-8xl italic leading-none text-clay-500 sm:text-9xl dark:text-clay-300">
              &ldquo;
            </span>

            <blockquote className="-mt-8 font-display text-xl font-normal leading-snug text-ink-800 sm:text-2xl lg:text-3xl lg:leading-snug text-balance dark:text-cream-100">
              I needed money urgently to cover my child&apos;s school
              registration. MicroLending paid me out within 40 minutes.
              Honestly, I was shocked. I&apos;ll use them again.
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-4 border-t border-ink-200 pt-6 dark:border-ink-800">
              <img
                src="https://randomuser.me/api/portraits/women/36.jpg"
                alt="Kgomotso D."
                className="h-14 w-14 rounded-full object-cover ring-2 ring-clay-500/30 sm:h-16 sm:w-16"
              />
              <div className="leading-tight">
                <div className="font-display text-base font-medium text-ink-900 sm:text-lg dark:text-cream-100">
                  Kgomotso D.
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-ink-500 dark:text-ink-300">
                  Teacher · Gaborone West
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
