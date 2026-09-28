"use client";
import { useReveal } from "@/hooks/useReveal";
import { ArrowUpRight, ArrowRight, Star, Plus } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function Hero() {
  const ref = useReveal();
  const { t, isAr } = useI18n();

  return (
    <section ref={ref} id="home" className="bg-white pt-20 md:pt-24">
      {/* Top Grid Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Left Column */}
          <div className="reveal lg:col-span-8">
            <div className="dot-badge mb-6">{t.hero.badge}</div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tight text-[#0f1923] leading-[1.03] mb-8">
              {t.hero.titleLine1}<br />
              {t.hero.titleLine2}{" "}
              <span className="text-[#0d736d] italic font-serif">
                {t.hero.titleAccent}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl mb-10">
              {t.hero.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#solutions"
                className="arrow-btn bg-[#0f1923] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0d736d] transition-all duration-200 shadow-sm group"
              >
                <span>{t.hero.exploreBtn}</span>
                <span className="arrow-icon bg-white text-[#0f1923] group-hover:bg-[#0d736d] group-hover:text-white transition-colors duration-200">
                  <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isAr ? "rtl-mirror" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
                </span>
              </a>
              <a
                href="#about"
                className="text-xs sm:text-sm font-semibold text-neutral-600 hover:text-[#0d736d] transition-colors flex items-center gap-1.5 group px-2 py-2"
              >
                <span>{t.hero.aboutBtn}</span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 text-neutral-400 group-hover:text-[#0d736d] ${isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
              </a>
            </div>
          </div>

          {/* Right Column: MediClinic Trust Box */}
          <div className="reveal delay-1 lg:col-span-4 flex flex-col items-start lg:items-end gap-5">
            {/* Real Doctor / Clinical Specialist Portrait Badges */}
            <div className="flex items-center">
              <img
                src="/images/doctor-1.jpg"
                alt="Clinical Specialist"
                className="w-14 h-14 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <img
                src="/images/doctor-2.jpg"
                alt="Surgeon Specialist"
                className="w-14 h-14 rounded-full border-2 border-white object-cover shadow-sm -ml-4 rtl:ml-0 rtl:-mr-4"
              />
              <img
                src="/images/doctor-3.jpg"
                alt="Healthcare Professional"
                className="w-14 h-14 rounded-full border-2 border-white object-cover shadow-sm -ml-4 rtl:ml-0 rtl:-mr-4"
              />
              <div className="w-14 h-14 rounded-full border-2 border-white bg-[#0d736d] text-white text-xs font-bold flex items-center justify-center -ml-4 rtl:ml-0 rtl:-mr-4 shadow-sm gap-0.5 px-1">
                <span>4.9</span>
                <Star className="w-3 h-3 fill-current" />
              </div>
            </div>

            <div className={`text-left ${isAr ? "lg:text-left" : "lg:text-right"}`}>
              <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase block">
                {t.hero.trustedPartners}
              </span>
              <span className="text-xl font-bold text-[#0f1923]">
                {t.hero.trustedRegion}
              </span>
            </div>

            <div className="bg-[#f7f5f0] border border-neutral-200/60 p-4 rounded-xl flex items-center gap-3 w-full sm:w-auto">
              <div className="w-8 h-8 rounded-lg bg-[#0d736d] text-white flex items-center justify-center flex-shrink-0">
                <Plus className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="text-xs text-neutral-600 leading-tight">
                {t.hero.expertiseTitle}<br />
                <strong className="text-[#0f1923]">{t.hero.expertiseSubtitle}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Full-Width Panorama Image (MediClinic pattern) */}
      <div className="mx-4 sm:mx-8 lg:mx-12 rounded-t-3xl overflow-hidden relative shadow-2xl h-[380px] sm:h-[480px] md:h-[580px] lg:h-[640px]">
        <img
          src="/images/hero-panorama.jpg"
          alt="High-tech surgical suite"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/90 via-[#0f1923]/30 to-transparent" />

        {/* Floating Tag Overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/60 block mb-2">
              {t.hero.bannerSub}
            </span>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              {t.hero.bannerTitleLine1}<br />{t.hero.bannerTitleLine2}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {t.hero.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-3.5 py-1.5 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
