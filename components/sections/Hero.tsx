"use client";
import { useReveal } from "@/hooks/useReveal";
import { ArrowUpRight, ArrowRight, Star, Plus } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import HeroShader from "@/components/sections/HeroShader";

export default function Hero() {
  const ref = useReveal();
  const { t, isAr } = useI18n();

  return (
    <section ref={ref} id="home" className="relative overflow-hidden bg-white pt-[118px]">
      <HeroShader />
      <div className="relative z-20 mx-auto max-w-7xl px-6 pb-12 pt-12 md:pb-16 md:pt-16 lg:px-12">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-8">
            <div className="dot-badge mb-6">{t.hero.badge}</div>

            <h1 className="mb-8 text-4xl font-bold leading-[1.03] tracking-tight text-[#0f1923] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              {t.hero.titleLine1}<br />
              {t.hero.titleLine2}{" "}
              <span className="font-serif italic text-[#003C72]">
                {t.hero.titleAccent}
              </span>
            </h1>

            <p className="mb-10 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg md:text-xl">
              {t.hero.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#solutions"
                className="arrow-btn group bg-[#003C72] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#003C72]/80 sm:text-sm"
              >
                <span>{t.hero.exploreBtn}</span>
                <span className="arrow-icon bg-white text-[#0f1923] transition-colors duration-200 group-hover:bg-[#003C72] group-hover:text-white">
                  <ArrowUpRight className={`h-3.5 w-3.5 transition-transform duration-200 ${isAr ? "rtl-mirror" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
                </span>
              </a>
              <a
                href="#about"
                className="group flex items-center gap-1.5 px-2 py-2 text-xs font-semibold text-neutral-600 transition-colors hover:text-[#0d736d] sm:text-sm"
              >
                <span>{t.hero.aboutBtn}</span>
                <ArrowRight className={`h-3.5 w-3.5 text-neutral-400 transition-transform duration-200 group-hover:text-[#0d736d] ${isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
              </a>
            </div>
          </div>

          <div className="reveal delay-1 flex flex-col items-start gap-5 lg:col-span-4 lg:items-end">
            <div className="flex items-center">
              <img
                src="/images/doctor-1.jpg"
                alt="Clinical Specialist"
                className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <img
                src="/images/doctor-2.jpg"
                alt="Surgeon Specialist"
                className="-ml-4 h-14 w-14 rounded-full border-2 border-white object-cover shadow-sm rtl:ml-0 rtl:-mr-4"
              />
              <img
                src="/images/doctor-3.jpg"
                alt="Healthcare Professional"
                className="-ml-4 h-14 w-14 rounded-full border-2 border-white object-cover shadow-sm rtl:ml-0 rtl:-mr-4"
              />
              <div className="-ml-4 flex h-14 w-14 items-center justify-center gap-0.5 rounded-full border-2 border-white bg-[#003C72] px-1 text-xs font-bold text-white shadow-sm rtl:ml-0 rtl:-mr-4">
                <span>4.9</span>
                <Star className="h-3 w-3 fill-current" />
              </div>
            </div>

            <div className={`text-left ${isAr ? "lg:text-left" : "lg:text-right"}`}>
              <span className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                {t.hero.trustedPartners}
              </span>
              <span className="text-xl font-bold text-[#0f1923]">
                {t.hero.trustedRegion}
              </span>
            </div>

            <div className="flex w-full items-center gap-3 rounded-xl border border-neutral-200/60 bg-[#f7f5f0] p-4 sm:w-auto">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#003C72] text-white">
                <Plus className="h-4 w-4 stroke-[2.5]" />
              </div>
              <div className="text-xs leading-tight text-neutral-600">
                {t.hero.expertiseTitle}<br />
                <strong className="text-[#0f1923]">{t.hero.expertiseSubtitle}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-panorama relative mx-4 h-[380px] overflow-hidden rounded-t-3xl shadow-2xl sm:mx-8 sm:h-[480px] md:mx-12 md:h-[580px] lg:h-[640px]">
        <img
          src="/images/hero-panorama.jpg"
          alt="High-tech surgical suite"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/90 via-[#0f1923]/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col justify-between gap-6 p-6 sm:flex-row sm:items-end sm:p-10 md:p-14">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-white/60">
              {t.hero.bannerSub}
            </span>
            <p className="text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">
              {t.hero.bannerTitleLine1}<br />{t.hero.bannerTitleLine2}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {t.hero.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md"
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
