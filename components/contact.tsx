import Link from "next/link";
import { ContactForm } from "./contact-form";

const PHONE = "+267 71 234 567";
const PHONE_LINK = "tel:+26771234567";
const EMAIL = "hello@microlending.co.bw";
const EMAIL_LINK = "mailto:hello@microlending.co.bw";
const WHATSAPP_NUMBER = "26771234567";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi MicroLending! I'd like to apply for a loan.",
)}`;
const FACEBOOK_LINK = "https://facebook.com/microlendingbw";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-24 pb-16 sm:py-28"
    >
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-clay-600 dark:text-clay-300">
              ✦ 07 — Talk to us
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1] tracking-editorial text-ink-900 sm:text-5xl lg:text-6xl text-balance dark:text-cream-100">
              However you like to chat — we're here.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink-600 lg:col-span-5 dark:text-ink-300">
            Pick the channel that suits you. Our Gaborone team typically replies
            in under 5 minutes during working hours.
          </p>
        </div>

        {/* WhatsApp + Facebook editorial cards */}
        <div className="mt-14 grid gap-0 border border-ink-200 lg:grid-cols-2 dark:border-ink-800">
          {/* WhatsApp */}
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative isolate overflow-hidden bg-gradient-to-br from-[#25D366] via-[#1FAE54] to-[#0E6234] p-8 text-white transition sm:p-10"
          >
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-12 h-60 w-60 rounded-full bg-emerald-200/20 blur-3xl" />

            {/* Faux chat bubble */}
            <div className="pointer-events-none absolute right-5 top-8 hidden w-44 rotate-2 sm:block">
              <div className="rounded-2xl rounded-br-sm bg-white/95 px-3.5 py-2.5 text-xs font-medium text-emerald-800 shadow-lg">
                Hi! I'd like to apply 👋
              </div>
              <div className="ml-4 mt-2 rounded-2xl rounded-tr-sm bg-emerald-800/85 px-3.5 py-2.5 text-xs font-medium text-white shadow-lg">
                Of course — let's go ✨
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#25D366] shadow-lg">
                  <svg
                    viewBox="0 0 32 32"
                    className="h-8 w-8"
                    fill="currentColor"
                  >
                    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39-.078 0-.16-.04-.24-.085-.6-.337-1.94-.998-2.965-1.927-.27-.247-.51-.521-.71-.81-.74-1.07-.74-1.07-.31-1.85.18-.33.45-.79.6-1.13.15-.34.05-.66-.04-.83-.09-.18-.84-2.04-1.16-2.78-.32-.74-.66-.65-.9-.65-.23 0-.5-.03-.77-.03s-.7.09-1.06.5c-.36.41-1.38 1.35-1.38 3.28 0 1.93 1.4 3.8 1.6 4.06.2.27 2.76 4.2 6.69 5.89.93.4 1.66.64 2.22.82 1.93.61 3.69.52 5.08.31.74-.11 2.28-.93 2.6-1.84.32-.91.32-1.69.23-1.84-.1-.16-.36-.27-.75-.45-.39-.18-2.32-1.15-2.68-1.28-.36-.13-.62-.19-.88.19zM16.013 0C7.17 0 0 7.17 0 16.013c0 2.766.713 5.366 1.966 7.626L0 32l8.626-1.92C10.732 31.28 13.28 32 16.013 32 24.83 32 32 24.83 32 16.013 32 7.17 24.83 0 16.013 0zm.013 29.027c-2.452 0-4.733-.706-6.66-1.92L4 28.467l1.426-5.226c-1.4-2.04-2.226-4.467-2.226-7.094 0-6.967 5.66-12.627 12.626-12.627 6.967 0 12.627 5.66 12.627 12.627 0 6.966-5.66 12.88-12.4 12.88z" />
                  </svg>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-200" />
                  </span>
                  Online
                </span>
              </div>

              <h3 className="mt-12 font-display text-4xl font-semibold tracking-editorial sm:text-5xl">
                Chat on <span className="italic font-normal">WhatsApp</span>
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-emerald-50/85">
                The fastest way to reach us. Send a message and our team will
                guide you through the application step-by-step.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-emerald-700 transition group-hover:scale-[1.02] group-hover:bg-emerald-50">
                +267 71 234 567
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Facebook */}
          <Link
            href={FACEBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative isolate overflow-hidden border-t border-ink-200 bg-gradient-to-br from-[#1877F2] via-[#1465D8] to-[#0B3D8A] p-8 text-white transition lg:border-l lg:border-t-0 sm:p-10 dark:border-ink-800"
          >
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-12 h-60 w-60 rounded-full bg-sky-200/20 blur-3xl" />

            {/* Faux post card */}
            <div className="pointer-events-none absolute right-5 top-6 hidden w-48 -rotate-3 rounded-2xl bg-white/95 p-3 text-slate-800 shadow-xl sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-clay-500 text-[10px] font-bold text-cream-50">
                  ML
                </div>
                <div className="text-[10px] leading-tight">
                  <div className="font-semibold">MicroLending</div>
                  <div className="text-slate-500">Sponsored · 🌍</div>
                </div>
              </div>
              <p className="mt-2 text-[10px] leading-snug text-slate-700">
                Apply in 5 minutes. Paid in 60. ✨
              </p>
              <div className="mt-2 flex items-center gap-3 border-t pt-1.5 text-[9px] font-semibold text-slate-500">
                <span>👍 1.2k</span>
                <span>💬 84</span>
                <span>↗ Share</span>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#1877F2] shadow-lg">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur">
                  ★ 10k+ followers
                </span>
              </div>

              <h3 className="mt-12 font-display text-4xl font-semibold tracking-editorial sm:text-5xl">
                Follow on <span className="italic font-normal">Facebook</span>
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-sky-50/85">
                Money tips, customer stories, exclusive offers from our Gaborone
                community.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#1877F2] transition group-hover:scale-[1.02] group-hover:bg-sky-50">
                @microlendingbw
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Phone + Email */}
        <div className="mt-8 grid gap-0 border border-ink-200 lg:grid-cols-2 dark:border-ink-800">
          <Link
            href={PHONE_LINK}
            className="group relative flex items-center gap-5 bg-cream-50 p-6 transition hover:bg-cream-100/60 sm:p-7 dark:bg-ink-950 dark:hover:bg-ink-900/60"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink-200  transition group-hover:border-clay-500 bg-clay-500 text-cream-50 dark:border-ink-700 dark:text-clay-200">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <div className="flex-1">
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-300">
                Call us
              </div>
              <div className="mt-1 font-display text-xl font-medium tracking-tight text-ink-900 dark:text-cream-100">
                {PHONE}
              </div>
            </div>
            <svg
              className="h-4 w-4 text-ink-400 transition group-hover:translate-x-1 group-hover:text-clay-600 dark:text-ink-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href={EMAIL_LINK}
            className="group relative flex items-center gap-5 border-t border-ink-200 bg-cream-50 p-6 transition hover:bg-cream-100/60 sm:p-7 lg:border-l lg:border-t-0 dark:border-ink-800 dark:bg-ink-950 dark:hover:bg-ink-900/60"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink-200 bg-clay-500 text-cream-50 transition  dark:border-ink-700 dark:text-forest-200 dark:group-hover:border-forest-400 dark:group-hover:bg-forest-400 dark:group-hover:text-ink-950">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
            </span>
            <div className="flex-1">
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-300">
                Email us
              </div>
              <div className="mt-1 font-display text-xl font-medium tracking-tight text-ink-900 dark:text-cream-100">
                {EMAIL}
              </div>
            </div>
            <svg
              className="h-4 w-4 text-ink-400 transition group-hover:translate-x-1 group-hover:text-forest-700 dark:text-ink-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Office strip */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border border-dashed border-ink-300 bg-cream-50/60 px-6 py-5 text-center sm:flex-row sm:text-left dark:border-ink-700 dark:bg-ink-900/40">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-ink-700 bg-clay-50 text-clay-700 dark:bg-clay-900/60 dark:text-clay-300">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-8 8-13a8 8 0 1 0-16 0c0 5 8 13 8 13z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </span>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-300">
                Visit our office
              </div>
              <div className="font-display text-base font-medium text-ink-900 dark:text-cream-100">
                Plot 1234, Main Mall · Gaborone, Botswana
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="mt-28">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-clay-600 dark:text-clay-300">
              ✦ 08 — Send a message
            </span>
            <span className="h-px flex-1 bg-ink-200 dark:bg-ink-800" />
          </div>

          <h3 className="mt-6 max-w-3xl font-display text-3xl font-semibold leading-[1] tracking-editorial text-ink-900 sm:text-4xl lg:text-5xl text-balance dark:text-cream-100">
            Drop us a note and we'll get back to you.
          </h3>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
