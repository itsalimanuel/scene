"use client";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const serviceImages = [
  "/images/solutions-spine-implants.jpg",
  "/images/solutions-surgical-tools.jpg",
  "/images/solutions-rf-device.jpg",
  "/images/solutions-pain-management.jpg",
];

export default function Solutions() {
  const { t, isAr } = useI18n();

  return (
    <section id="solutions" className="py-14 lg:py-20 bg-[#f9f9fb] border-t border-b border-[#e8eaed]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header (MediClinic style) */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="section-badge mb-3">
            <span className="badge-dot" />
            <span>{t.solutions.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1923] tracking-tight">
            {t.solutions.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            {t.solutions.desc}
          </p>
        </div>

        {/* MediClinic Numbered Service List */}
        <div className="space-y-4">
          {t.solutions.items.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#e8eaed] p-6 sm:p-7 hover:border-[#0d736d] hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              {/* Number */}
              <div className="lg:col-span-1">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-[#0d736d]">
                  {service.num}
                </span>
              </div>

              {/* Title & Button */}
              <div className="lg:col-span-4 flex flex-col items-start gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f1923] leading-tight">
                  {service.title}
                </h3>
                <a
                  href="#contact"
                  className="btn-outline text-xs py-2 px-4 group"
                >
                  <span>{t.solutions.btn}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 text-[#0d736d] transition-transform duration-300 ${isAr ? "rtl-mirror" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
                </a>
              </div>

              {/* Description & Item Tags */}
              <div className="lg:col-span-4">
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-[#f0f7f6] text-[#0d736d] text-xs font-medium px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* High-Quality Rounded Medical Photo */}
              <div className="lg:col-span-3 rounded-xl overflow-hidden h-36 sm:h-40 w-full relative shadow-xs">
                <img
                  src={serviceImages[index]}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a href="#contact" className="btn-primary group text-xs">
            <span>{t.solutions.ctaBtn}</span>
            <span className="btn-icon">
              <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isAr ? "rtl-mirror" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
