"use client";
import { useI18n } from "@/lib/i18n/context";

export default function SpecialtyStrip() {
  const { t } = useI18n();
  const combined = t.marquee.concat(t.marquee);

  return (
    <div className="bg-[#0f1923] py-4 overflow-hidden border-t border-b border-white/10">
      <div className="marquee-container">
        {combined.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-8 text-sm font-medium text-white/90 tracking-wide">
              {item}
            </span>
            <span className="text-[#0d736d] text-base font-bold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
