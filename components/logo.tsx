export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Monogram mark — overlapping P (pula) inside circle */}
      <div className="relative grid h-10 w-10 place-items-center rounded-full border border-ink-300/40 bg-clay-500 text-cream-50 dark:border-ink-700 dark:bg-clay-400 dark:text-ink-950">
        <span className="font-display text-base font-bold leading-none tracking-tight">
          M
        </span>
        <span className="absolute -right-0.5 -top-0.5 grid h-3.5 w-3.5 place-items-center rounded-full border border-cream-100 bg-forest-700 text-[7px] font-bold text-cream-50 dark:border-ink-900">
          L
        </span>
      </div>

      <div className="flex flex-col leading-none">
        <span className="font-display text-[20px] font-semibold tracking-editorial text-ink-900 dark:text-cream-100">
          MicroLending
        </span>
      </div>
    </div>
  );
}
