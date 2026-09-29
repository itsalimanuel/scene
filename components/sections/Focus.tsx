"use client";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const focusImages = [
  "/images/about-surgical-lab.jpg",
  "/images/focus-endoscopy.jpg",
  "/images/solutions-surgical-tools.jpg",
  "/images/solutions-pain-management.jpg",
  "/images/solutions-rf-device.jpg",
  "/images/hero-panorama.jpg",
];

export default function Focus() {
  const { t, isAr } = useI18n();

  return (
    <section id="focus" className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="section-badge mb-3">
              <span className="badge-dot" />
              <span>{t.focus.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1923] tracking-tight leading-tight">
              {t.focus.titleLine1}<br />
              <span className="text-[#003C72]">{t.focus.titleLine2}</span>
            </h2>
          </div>

          <p className="text-neutral-600 text-xs sm:text-sm max-w-md leading-relaxed">
            {t.focus.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.focus.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f9f9fb] border border-[#e8eaed] rounded-2xl overflow-hidden hover:border-[#003C72] hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="h-40 w-full relative overflow-hidden">
                <img
                  src={focusImages[idx]}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-[#0f1923]">
                  {item.field}
                </div>
                <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 bg-[#0f1923]/80 backdrop-blur-md text-white font-mono text-[10px] px-2 py-0.5 rounded-full">
                  {item.num}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0f1923] mb-1.5 group-hover:text-[#003C72] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#e8eaed] flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs font-semibold uppercase tracking-wider text-[#003C72] flex items-center gap-1.5 group/link"
                  >
                    <span>{t.focus.brochureBtn}</span>
                    <ArrowRight className={`w-3 h-3 transition-transform duration-300 ${isAr ? "rotate-180 group-hover/link:-translate-x-1" : "group-hover/link:translate-x-1"}`} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
