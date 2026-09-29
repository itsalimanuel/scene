"use client";

import { useI18n } from "@/lib/i18n/context";

const logoPlaceholders = ["01", "02", "03", "04", "05", "06"];

export default function Partners() {
  const { isAr } = useI18n();

  return (
    <section id="partners" className="border-y border-[#e8eaed] bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-7">
          <div className="section-badge mb-3">
            <span className="badge-dot" />
            <span>{isAr ? "الشركاء" : "PARTNERS"}</span>
          </div>
          <h2 className="text-2xl font-bold text-[#0f1923] sm:text-3xl">
            {isAr ? "شركاؤنا" : "Our Partners"}
          </h2>
        </div>

        <div className="grid grid-cols-2 border-y border-[#e8eaed] sm:grid-cols-3 lg:grid-cols-6">
          {logoPlaceholders.map((placeholder) => (
            <div
              key={placeholder}
              className="flex min-h-28 flex-col items-center justify-center gap-2 border-b border-r border-[#e8eaed] text-center last:border-r-0 sm:min-h-32 sm:border-b-0 lg:border-r"
              aria-label={`${isAr ? "مساحة شعار شريك" : "Partner logo placeholder"} ${placeholder}`}
            >
              <span className="flex h-9 w-9 items-center justify-center border border-[#003C72]/25 text-sm font-semibold text-[#003C72]">
                {placeholder}
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-widest text-neutral-400">
                {isAr ? "مساحة شعار" : "Logo slot"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}