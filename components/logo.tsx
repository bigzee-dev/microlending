import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Monogram mark — overlapping P (pula) inside circle */}
      <div className="relative grid h-16 w-16 place-items-center ">
        <Image
          src="/logo/Full-Color.svg"
          alt={`${SITE_CONFIG.companyName} logo`}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col leading-none">
        <span className="font-display text-[20px] font-semibold tracking-editorial text-ink-900 dark:text-cream-100 capitalize">
          {SITE_CONFIG.companyName}
        </span>
      </div>
    </div>
  );
}
