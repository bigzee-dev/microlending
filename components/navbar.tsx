"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";

const links = [
  { href: "#calculator", label: "Loan Calculator", n: "01" },
  { href: "#how-it-works", label: "How To Apply", n: "02" },
  { href: "#why-us", label: "Why us", n: "03" },
  { href: "#faq", label: "FAQs", n: "04" },
  { href: "#contact", label: "Contact us", n: "05" },
];

const WHATSAPP_LINK =
  "https://wa.me/26775376888?text=" +
  encodeURIComponent("Hi QuickLittleLoans! I'd like to apply for a loan.");
const FACEBOOK_LINK = "https://web.facebook.com/profile.php?id=61586555699940";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`top-0 z-50 transition-all duration-500 bg-clay-500/20{
        scrolled
          ? "border-b border-ink-200/60  dark:border-ink-800/70 dark:bg-ink-950/80"
          : "border-b  bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-10 py-2">
        <Link href="/" aria-label="MicroLending home" className="shrink-0">
          <Logo />
        </Link>

        {/* Editorial nav  */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group inline-flex items-baseline gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-ink-700 transition hover:text-clay-600 dark:text-ink-200 dark:hover:text-clay-300"
            >
              <span>{l.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* WhatsApp icon button */}
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden lg:grid group relative h-10 w-10 place-items-center overflow-hidden rounded-full border border-ink-200/70 bg-cream-50/90 text-[#1FAE54] backdrop-blur transition hover:border-[#25D366] hover:bg-[#25D366] hover:text-white dark:border-ink-600 dark:bg-white/10 dark:text-[#5BD389] dark:hover:bg-[#25D366] dark:hover:text-white"
          >
            <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-[#25D366] transition-transform duration-500 group-hover:scale-100" />
            <IoLogoWhatsapp className="h-6 w-6" />
            {/* <span className="absolute -bottom-0.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#25D366] ring-2 ring-cream-50 dark:ring-ink-950" /> */}
          </Link>

          {/* Facebook icon button */}
          <Link
            href={FACEBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="hidden lg:grid group relative h-10 w-10 place-items-center overflow-hidden rounded-full border border-ink-200/70 bg-cream-50/90 text-[#1465D8] backdrop-blur transition hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white dark:border-ink-600 dark:bg-white/10 dark:text-[#5BA0F7] dark:hover:bg-[#1877F2] dark:hover:text-white"
          >
            <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-[#1877F2] transition-transform duration-500 group-hover:scale-100" />
            <IoLogoFacebook className="h-6 w-6" />
          </Link>

          {/* Divider */}
          <span className="mx-1 hidden h-6 w-px bg-ink-200 sm:block dark:bg-ink-800" />

          {/* Primary CTA */}
          <Link
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-cream-50 transition hover:bg-clay-600 dark:bg-cream-100 dark:text-ink-950 dark:hover:bg-clay-400 sm:inline-flex"
          >
            Apply now
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-200/70 bg-cream-50/90 text-ink-700  dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200 lg:hidden"
          >
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${
                open ? "rotate-90" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 8h16" />
                  <path d="M4 16h10" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          open
            ? "max-h-[480px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden duration-500`}
      >
        <div className="border-t border-ink-200/60 bg-cream-50 px-4 pb-6 pt-3 dark:border-ink-800/70 dark:bg-ink-950">
          <nav className="flex flex-col divide-y divide-ink-100 dark:divide-ink-800">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-4"
              >
                <span className="font-display text-xl text-ink-900 dark:text-cream-100">
                  {l.label}
                </span>
                <span className="font-mono text-xs tracking-widest text-ink-400 dark:text-ink-500">
                  {l.n}
                </span>
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-4 py-3 text-sm font-medium text-cream-50 dark:bg-cream-100 dark:text-ink-950"
          >
            Apply now
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
