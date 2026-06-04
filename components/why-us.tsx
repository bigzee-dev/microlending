import Image from "next/image";

const features = [
  {
    n: "i.",
    title: "Transparent pricing",
    body: "Every fee is on the page before you commit. No fine print, no surprise charges — what you see is what you repay.",
  },
  {
    n: "ii.",
    title: "Built for Botswana",
    body: "Designed locally for local needs. Use your Omang, get paid in Pula, get help in Setswana or English.",
  },
  {
    n: "iii.",
    title: "Cash in your account",
    body: "Once approved, your money lands in your Botswana bank account",
  },
  {
    n: "iv.",
    title: "Lightning-fast payout",
    body: "Approved loans land in your bank account within 60 minutes — Monday to Saturday.",
  },
  {
    n: "v.",
    title: "Responsible lending",
    body: "We never lend more than you can comfortably repay. Our affordability check protects your livelihood.",
  },
  {
    n: "vi.",
    title: "Customer service",
    body: "Call, WhatsApp or email — our team is ready six days a week. ",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative scroll-mt-24 overflow-hidden border-y border-ink-200/60 bg-cream-50 py-24 sm:py-28 dark:border-ink-800/70 dark:bg-ink-950"
    >
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1] tracking-editorial text-ink-900 sm:text-5xl lg:text-6xl text-balance dark:text-cream-100">
              Lending built on{" "}
              <span className="italic font-normal text-clay-600 dark:text-clay-300">
                trust,
              </span>{" "}
              not on tricks.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink-600 lg:col-span-5 dark:text-ink-300">
            We started MicroLending because Batswana deserve better than
            predatory lenders. Lend a fair amount, charge a fair price, treat
            every customer like a neighbour — because in Botswana, they probably
            are.
          </p>
        </div>

        {/* Editorial grid — varied treatments */}
        <div className="mt-16 grid gap-0 border border-ink-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-ink-800">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`group relative bg-cream-50 p-7 border transition hover:bg-cream-100/60 sm:p-9 dark:bg-ink-950 dark:hover:bg-ink-900/60  border-ink-100 dark:border-ink-800`}
            >
              <span className="font-display text-3xl italic text-clay-500 dark:text-clay-300">
                {f.n}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-ink-900 dark:text-cream-100">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {f.body}
              </p>
              <span className="absolute bottom-7 right-7 font-mono text-[10px] uppercase tracking-widest text-ink-300 transition group-hover:text-clay-500 dark:text-ink-600 dark:group-hover:text-clay-300">
                ›
              </span>
            </div>
          ))}
        </div>

        {/* Editorial spotlight */}
        <article className="relative mt-20 grid gap-0 border border-ink-200 dark:border-ink-800 lg:grid-cols-2">
          <div className="relative min-h-[300px] lg:min-h-[440px]">
            <Image
              src="/76136.jpg"
              alt="Gaborone skyline"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/50 via-ink-950/20 to-transparent" />
            <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-200">
              Fig. 02 · Gaborone, BW
            </span>
          </div>

          <div className="bg-cream-50 p-8 sm:p-12 dark:bg-ink-950 flex flex-col justify-center">
            <blockquote className="mt-5 font-display text-2xl font-medium leading-[1.15] tracking-editorial text-ink-900 sm:text-3xl dark:text-cream-100">
              &ldquo;The team understood what I needed and got me sorted before
              my next pay-cheque. Real lifesavers. &rdquo;
            </blockquote>
            <cite className="mt-5 block font-mono text-[11px] uppercase tracking-widest not-italic text-ink-500 dark:text-ink-300">
              — Lesego M., small business owner, Mogoditshane
            </cite>
          </div>
        </article>
      </div>
    </section>
  );
}
