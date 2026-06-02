# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (also runs type-check via Next.js)
npm run lint     # ESLint via Next.js
npm run start    # Serve production build
```

There are no tests. Type-checking runs implicitly via `next build`; to check types without building, use `npx tsc --noEmit`.

## Architecture

Single-page marketing site for a Botswana microlending company (P500–P15,000 loans). Built with **Next.js App Router**, **React 19**, **TypeScript**, and **Tailwind CSS v3**.

**Page composition** (`app/page.tsx`): one root page assembles all sections in order — `Navbar → Hero → LoanCalculator → HowItWorks → WhyUs → UseCases → Testimonials → FAQ → Contact → Footer` — plus a sticky `WhatsAppFloat`. Each section is a named export from `components/`.

**Client vs. server components**: sections with interactivity use `"use client"` at the top (`navbar.tsx`, `loan-calculator.tsx`, `contact-form.tsx`). All others are server components by default.

**Design system** (`tailwind.config.ts` + `app/globals.css`):
- Custom color palette: `cream` (backgrounds), `ink` (text/dark surfaces), `clay` (primary terracotta accent), `forest` (secondary green), `marigold` (emphasis).
- CSS variables (`--bg`, `--ink`, `--clay`, etc.) handle dark mode via `prefers-color-scheme: dark`. Dark mode is OS-driven, not class-based.
- Custom utility classes defined in `globals.css` `@layer utilities`: `.eyebrow`, `.grain`, `.pattern-weave`, `.rule`, `.asterism`, `.link-underline`, `.mask-fade-x/b`.
- Fonts: `Montserrat` → `--font-display`, `DM Sans` → `--font-sans`, `JetBrains Mono` → `--font-mono`, all loaded via `next/font/google` in `app/layout.tsx`.
- Custom slider styling in `globals.css` targets `input[type="range"].slider` with the `--progress` CSS variable set inline for the fill track.
- Form field base styles use the `.field` class defined in `globals.css`.

**Path alias**: `@/` maps to the repo root (e.g. `@/components/navbar`).

**Loan calculator logic** (`components/loan-calculator.tsx`): fee constants are defined at the top of the file — `DAILY_INTEREST`, `INITIATION_FEE_PCT`, `INITIATION_FEE_CAP`, `SERVICE_FEE_PER_MONTH`. The `calc()` function is pure and drives all displayed figures.

**Contact form** (`components/contact-form.tsx`): submit handler is a placeholder (`setTimeout` mock). Wire to a real backend or form service before going live.

**Social/WhatsApp links**: hardcoded in `components/navbar.tsx` as `WHATSAPP_LINK` and `FACEBOOK_LINK` constants.
