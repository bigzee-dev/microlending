import Link from "next/link";
import { FooterLogo } from "./footer-logo";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

const WHATSAPP_LINK =
  "https://wa.me/26775376888?text=" +
  encodeURIComponent("Hi QuickLittleLoans! I'd like to apply for a loan.");
const FACEBOOK_LINK = "https://web.facebook.com/profile.php?id=61586555699940";

const linkGroups = [
  {
    title: "Product",
    links: [
      { href: "#calculator", label: "Loan calculator" },
      { href: "#how-it-works", label: "What You'll need" },
      { href: "#why-us", label: "Why us" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#why-us", label: "About us" },
      { href: "#contact", label: "Contact us" },
    ],
  },
  {
    title: "Legal",
    links: [{ href: "#contact", label: "Responsible lending" }],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ink-200 bg-cream-50 dark:border-ink-800 dark:bg-ink-950">
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FooterLogo />
            <p className="mt-6 max-w-sm font-display text-2xl leading-tight tracking-editorial text-ink-900 dark:text-cream-100">
              Fast, fair micro loans made in Botswana.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              Headquartered in Gaborone, lending across Botswana Mon–Sat.
            </p>

            {/* Row 1: Social links */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-flex items-center gap-2 rounded-full border border-ink-200/70 bg-cream-50/90 px-4 py-2 text-sm font-medium text-[#1FAE54] transition hover:-translate-y-0.5 hover:border-[#25D366] hover:shadow-sm dark:border-ink-600 dark:bg-white/10 dark:text-[#5BD389] dark:hover:border-[#25D366]"
              >
                <IoLogoWhatsapp className="h-5 w-5 shrink-0" />
                <span>WhatsApp</span>
              </Link>
              <Link
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="inline-flex items-center gap-2 rounded-full border border-ink-200/70 bg-cream-50/90 px-4 py-2 text-sm font-medium text-[#1465D8] transition hover:-translate-y-0.5 hover:border-[#1877F2] hover:shadow-sm dark:border-ink-600 dark:bg-white/10 dark:text-[#5BA0F7] dark:hover:border-[#1877F2]"
              >
                <IoLogoFacebook className="h-5 w-5 shrink-0" />
                <span>@QuickLittleLoans</span>
              </Link>
            </div>
            {/* Row 2: Contact links */}
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="tel:+26774555564"
                className="inline-flex items-center gap-2 rounded-full border border-ink-200/70 bg-cream-50/90 px-4 py-2 text-sm font-medium text-ink-700 transition hover:-translate-y-0.5 hover:border-clay-600 hover:text-clay-600 hover:shadow-sm dark:border-ink-600 dark:bg-white/10 dark:text-ink-200 dark:hover:border-clay-400 dark:hover:text-clay-400"
              >
                <IoCallOutline className="h-5 w-5 shrink-0" />
                <span>74555564 / 75376888</span>
              </Link>
              <Link
                href="mailto:loansbytmb@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-ink-200/70 bg-cream-50/90 px-4 py-2 text-sm font-medium text-ink-700 transition hover:-translate-y-0.5 hover:border-clay-600 hover:text-clay-600 hover:shadow-sm dark:border-ink-600 dark:bg-white/10 dark:text-ink-200 dark:hover:border-clay-400 dark:hover:text-clay-400"
              >
                <IoMailOutline className="h-5 w-5 shrink-0" />
                <span>loansbytmb@gmail.com</span>
              </Link>
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
              © {new Date().getFullYear()} The Money Bakery (Pty) Ltd · Reg.
              BW00009022318
            </p>
            <p className="max-w-md font-mono text-[10px] leading-relaxed text-ink-500 dark:text-ink-300">
              Operating in accordance with the NBFIRA framework for non-bank
              lenders. Borrow responsibly.
            </p>
          </div>
          <p className="mt-5 max-w-3xl text-[11px] leading-relaxed text-ink-500 dark:text-ink-400">
            <span className="font-display italic">Important —</span> Loan
            approval is subject to a credit and affordability assessment. Late
            repayments hurt your credit score. If you're struggling to repay,
            contact us before your due date.
          </p>
        </div>
      </div>
    </footer>
  );
}
