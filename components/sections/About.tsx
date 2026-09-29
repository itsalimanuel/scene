"use client";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function About() {
  const { t, isAr } = useI18n();

  return (
    <section id="about" className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-10">
          <div className="section-badge mb-4">
            <span className="badge-dot" />
            <span>{t.about.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#0f1923] leading-[1.3] tracking-tight">
            {t.about.headline}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
            {t.about.desc}
          </p>
        </div>

        <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden h-[300px] sm:h-[380px] lg:h-[440px] shadow-lg group mb-12">
          <img
            src="/images/about-surgical-lab.jpg"
            alt="Scene Medical clinical technologies in practice"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/75 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="text-white max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0d736d] bg-white/95 px-3 py-1 rounded-full inline-block mb-2">
                {t.about.locationBadge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                {t.about.bannerTitle}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-1.5">
                {t.about.bannerDesc}
              </p>
            </div>

            <a href="#contact" className="btn-primary self-start sm:self-auto group text-xs">
              <span>{t.about.ctaBtn}</span>
              <span className="btn-icon">
                <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isAr ? "rtl-mirror" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
              </span>
            </a>
          </div>
        </div>

        {/* The Scene Difference: 4 Clean MediClinic-style Cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="section-badge mb-3">
              <span className="badge-dot" />
              <span>{t.about.diffBadge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0f1923] tracking-tight">
              {t.about.diffTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.about.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#f9f9fb] border border-[#e8eaed] rounded-2xl p-6 hover:border-[#0d736d] hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#e8eaed] flex items-center justify-center font-bold text-xs text-[#0d736d] mb-4 font-mono">
                    {card.num}
                  </div>
                  <h4 className="text-base font-bold text-[#0f1923] mb-2">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
