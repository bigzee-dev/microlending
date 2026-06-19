import { FaRegIdCard, FaClipboardCheck } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";

const steps = [
  // {
  //   n: "I",
  //   title: "Apply online",
  //   body: "Fill in a short form using your Omang and proof of income. Takes about five minutes — entirely from your phone.",
  //   duration: "≈ 5 min",
  // },
  {
    n: "I",
    title: "Proof of Identity / Omang",
    body: "Just your Omang or Passport. We will verify your identity and assess your eligibility in seconds.",
    duration: "≈ 5 min",
    icon: <FaRegIdCard />,
  },
  // {
  //   n: "II",
  //   title: "Instant decision",
  //   body: "Our system runs an affordability check on the spot. If you qualify, you'll see your offer and repayment date straight away.",
  //   duration: "≈ 30 sec",
  // },
  {
    n: "II",
    title: "3 months Bank statement",
    body: "Provide your latest 3 months bank statement. We will analyze your financial behaviour to make a lending decision.",
    duration: "≈ 30 sec",
    icon: <FaListAlt />,
  },
  // {
  //   n: "III",
  //   title: "Cash in your account",
  //   body: "Once approved, your money lands in your Botswana bank account — usually within an hour, on business days.",
  //   duration: "≈ 60 min",
  // },
  {
    n: "III",
    title: "Proof of employment",
    body: "Provide a letter from your employer confirming your employment and salary details.",
    duration: "≈ 60 min",
    icon: <FaClipboardCheck />,
  },
  // {
  //   n: "IV",
  //   title: "Repay on the day",
  //   body: "We remind you by SMS before the due date. Repay in one lump sum and you're free to borrow again whenever.",
  //   duration: "as agreed",
  // },
  {
    n: "IV",
    title: "Latest Payslip",
    body: "Provide your latest payslip to confirm your income and repayment capacity.",
    duration: "as agreed",
    icon: <BsBank2 />,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1] tracking-editorial text-ink-900 sm:text-5xl lg:text-6xl text-balance dark:text-cream-100">
              What you'll need
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink-600 lg:col-span-5 dark:text-ink-300">
            Our KYC is straightforward, simple and secure — designed for the
            Botswana lifestyle.
          </p>
        </div>

        {/* Editorial step grid */}
        <ol className="mt-16 grid gap-0 border-t border-ink-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-ink-800">
          {steps.map((s, idx) => (
            <li
              key={s.n}
              className={`group relative border-ink-100 p-7 transition hover:bg-cream-100/40 dark:border-ink-800 dark:hover:bg-ink-900/40 border`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-7xl font-medium leading-none tracking-editorial text-clay-600 transition group-hover:text-clay-600 dark:text-clay-300/90 dark:group-hover:text-clay-300">
                  {s.icon || s.n}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-ink-900 dark:text-cream-100">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 asterism" />
      </div>
    </section>
  );
}
