"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";

const links = [
  { href: "#calculator", label: "Calculator", n: "01" },
  { href: "#how-it-works", label: "Process", n: "02" },
  { href: "#why-us", label: "Why us", n: "03" },
  { href: "#faq", label: "Questions", n: "04" },
  { href: "#contact", label: "Talk to us", n: "05" },
];

const WHATSAPP_LINK =
  "https://wa.me/26771234567?text=" +
  encodeURIComponent("Hi MicroLending! I'd like to apply for a loan.");
const FACEBOOK_LINK = "https://facebook.com/microlendingbw";

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
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink-200/60 bg-cream-50/85 backdrop-blur-xl dark:border-ink-800/70 dark:bg-ink-950/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-10">
        <Link href="/" aria-label="MicroLending home" className="shrink-0">
          <Logo />
        </Link>

        {/* Editorial nav with numerals */}
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
            <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
              <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39-.078 0-.16-.04-.24-.085-.6-.337-1.94-.998-2.965-1.927-.27-.247-.51-.521-.71-.81-.74-1.07-.74-1.07-.31-1.85.18-.33.45-.79.6-1.13.15-.34.05-.66-.04-.83-.09-.18-.84-2.04-1.16-2.78-.32-.74-.66-.65-.9-.65-.23 0-.5-.03-.77-.03s-.7.09-1.06.5c-.36.41-1.38 1.35-1.38 3.28 0 1.93 1.4 3.8 1.6 4.06.2.27 2.76 4.2 6.69 5.89.93.4 1.66.64 2.22.82 1.93.61 3.69.52 5.08.31.74-.11 2.28-.93 2.6-1.84.32-.91.32-1.69.23-1.84-.1-.16-.36-.27-.75-.45-.39-.18-2.32-1.15-2.68-1.28-.36-.13-.62-.19-.88.19zM16.013 0C7.17 0 0 7.17 0 16.013c0 2.766.713 5.366 1.966 7.626L0 32l8.626-1.92C10.732 31.28 13.28 32 16.013 32 24.83 32 32 24.83 32 16.013 32 7.17 24.83 0 16.013 0zm.013 29.027c-2.452 0-4.733-.706-6.66-1.92L4 28.467l1.426-5.226c-1.4-2.04-2.226-4.467-2.226-7.094 0-6.967 5.66-12.627 12.626-12.627 6.967 0 12.627 5.66 12.627 12.627 0 6.966-5.66 12.88-12.4 12.88z" />
            </svg>
            {/* <span className="absolute -bottom-0.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#25D366] ring-2 ring-cream-50 dark:ring-ink-950" /> */}
          </Link>

          {/* Facebook icon button */}
          <Link
            href={FACEBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="hidden group relative lg:grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-ink-200/70 bg-cream-50/90 text-[#1465D8] backdrop-blur transition hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white dark:border-ink-600 dark:bg-white/10 dark:text-[#5BA0F7] dark:hover:bg-[#1877F2] dark:hover:text-white"
          >
            <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-[#1877F2] transition-transform duration-500 group-hover:scale-100" />
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </Link>

          {/* Divider */}
          <span className="mx-1 hidden h-6 w-px bg-ink-200 sm:block dark:bg-ink-800" />

          {/* Primary CTA */}
          <Link
            href="#calculator"
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
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-200/70 bg-cream-50/90 text-ink-700 backdrop-blur dark:border-ink-600 dark:bg-white/10 dark:text-ink-200 lg:hidden"
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
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-500`}
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
            href="#calculator"
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
