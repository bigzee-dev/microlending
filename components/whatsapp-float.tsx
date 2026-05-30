import Link from "next/link";

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/26771234567?text=Hi%20MicroLending!%20I'd%20like%20to%20apply%20for%20a%20loan."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-[#1FAE54] py-2.5 pl-2.5 pr-4 text-sm font-medium text-white shadow-[0_18px_45px_-15px_rgba(31,174,84,0.6)] transition hover:-translate-y-0.5 hover:bg-[#168D43] sm:bottom-8 sm:right-8"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white/15">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/25" />
        <svg viewBox="0 0 32 32" className="relative h-5 w-5" fill="currentColor">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39-.078 0-.16-.04-.24-.085-.6-.337-1.94-.998-2.965-1.927-.27-.247-.51-.521-.71-.81-.74-1.07-.74-1.07-.31-1.85.18-.33.45-.79.6-1.13.15-.34.05-.66-.04-.83-.09-.18-.84-2.04-1.16-2.78-.32-.74-.66-.65-.9-.65-.23 0-.5-.03-.77-.03s-.7.09-1.06.5c-.36.41-1.38 1.35-1.38 3.28 0 1.93 1.4 3.8 1.6 4.06.2.27 2.76 4.2 6.69 5.89.93.4 1.66.64 2.22.82 1.93.61 3.69.52 5.08.31.74-.11 2.28-.93 2.6-1.84.32-.91.32-1.69.23-1.84-.1-.16-.36-.27-.75-.45-.39-.18-2.32-1.15-2.68-1.28-.36-.13-.62-.19-.88.19zM16.013 0C7.17 0 0 7.17 0 16.013c0 2.766.713 5.366 1.966 7.626L0 32l8.626-1.92C10.732 31.28 13.28 32 16.013 32 24.83 32 32 24.83 32 16.013 32 7.17 24.83 0 16.013 0zm.013 29.027c-2.452 0-4.733-.706-6.66-1.92L4 28.467l1.426-5.226c-1.4-2.04-2.226-4.467-2.226-7.094 0-6.967 5.66-12.627 12.626-12.627 6.967 0 12.627 5.66 12.627 12.627 0 6.966-5.66 12.88-12.4 12.88z" />
        </svg>
      </span>
      <span className="hidden pr-1 sm:inline">Chat with us</span>
    </Link>
  );
}
