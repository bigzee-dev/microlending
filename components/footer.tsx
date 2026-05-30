import Link from "next/link";
import { Logo } from "./logo";

const linkGroups = [
  {
    title: "Product",
    links: [
      { href: "#calculator", label: "Loan calculator" },
      { href: "#how-it-works", label: "How it works" },
      { href: "#why-us", label: "Why us" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Press" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Terms of service" },
      { href: "#", label: "Privacy policy" },
      { href: "#", label: "Responsible lending" },
      { href: "#", label: "Complaints" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ink-200 bg-cream-50 dark:border-ink-800 dark:bg-ink-950">
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm font-display text-2xl leading-tight tracking-editorial text-ink-900 dark:text-cream-100">
              Fast, fair micro loans{" "}
              <span className="italic text-clay-600 dark:text-clay-300">
                made
              </span>{" "}
              in Botswana.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              Headquartered in Gaborone, lending across Botswana Mon–Sat.
            </p>

            <div className="mt-7 flex gap-3">
              <SocialIcon label="WhatsApp" href="https://wa.me/26771234567" colour="#25D366">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.5 5.9L0 24l6.3-1.7c1.7.9 3.7 1.5 5.7 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0zm6.9 17.1c-.3.9-1.7 1.7-2.4 1.8-.6.1-1.4.1-2.3-.1-1.5-.5-3-1.5-4.2-2.7-1.7-1.7-2.8-3.6-3-3.9-.2-.3-.8-1.1-.8-2.1 0-1 .5-1.5.8-1.8.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5.3.7 1 2.4 1.1 2.6.1.2.2.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.5.6-.2.2-.4.4-.2.7.2.4 1 1.7 2.1 2.7 1.4 1.3 2.6 1.7 3 1.9.4.2.6.1.8-.1l1-1.2c.2-.3.5-.2.8-.1.3.1 2 .9 2.3 1.1.3.2.5.2.6.4 0 .2 0 .9-.4 1.9z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Facebook" href="https://facebook.com/microlendingbw" colour="#1877F2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7c4.7-.7 8.4-4.9 8.4-9.9z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Instagram" href="#" colour="#E1306C">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Email" href="mailto:hello@microlending.co.bw" colour="#B85530">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {linkGroups.map((g) => (
              <div key={g.title}>
                <h4 className="font-mono text-[11px] uppercase tracking-widest text-clay-600 dark:text-clay-300">
                  {g.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="link-underline inline-block font-display text-base text-ink-800 transition hover:text-clay-600 dark:text-cream-100 dark:hover:text-clay-300"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative editorial rule */}
        <div className="mt-16 border-t border-ink-200 pt-8 dark:border-ink-800">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500 dark:text-ink-300">
              © {new Date().getFullYear()} MicroLending (Pty) Ltd · Reg. 2024/XXXXX/07
            </p>
            <p className="max-w-md font-mono text-[10px] leading-relaxed text-ink-500 dark:text-ink-300">
              Operating in accordance with the NBFIRA framework for non-bank
              lenders. Borrow responsibly.
            </p>
          </div>
          <p className="mt-5 max-w-3xl text-[11px] leading-relaxed text-ink-500 dark:text-ink-400">
            <span className="font-display italic">Important —</span> Figures
            shown on this site are illustrative. Loan approval is subject to a
            credit and affordability assessment. Late repayments hurt your
            credit score. If you're struggling to repay, contact us before your
            due date.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  colour,
  children,
}: {
  href: string;
  label: string;
  colour: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-ink-200 text-ink-700 transition hover:-translate-y-0.5 dark:border-ink-700 dark:text-ink-200"
      style={{ ["--c" as string]: colour }}
    >
      <span
        className="absolute inset-0 -z-10 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100 group-hover:bg-[var(--c)]"
      />
      <span className="transition group-hover:text-white">{children}</span>
    </Link>
  );
}
