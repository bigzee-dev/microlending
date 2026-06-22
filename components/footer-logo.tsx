import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";

export function FooterLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Monogram mark — overlapping P (pula) inside circle */}
      <div className="overflow-hidden relative grid h-[7rem] w-[7rem]  place-items-center">
        <Image
          src="/logo/qll-blue-bkground.jpg"
          alt={`${SITE_CONFIG.companyName} logo`}
          fill
          className="object-contain rounded-full"
        />
      </div>

      {/* <div className="flex flex-col leading-none">
        <span className="font-display text-[20px] font-semibold tracking-editorial text-ink-900 dark:text-cream-100 capitalize">
          {SITE_CONFIG.companyName}
        </span>
      </div> */}
    </div>
  );
}
