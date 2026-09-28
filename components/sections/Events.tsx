"use client";
import { ArrowUpRight, ArrowRight, Calendar, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import Link from "next/link";

const eventImages = [
  "/images/event-masterclass.jpg",
  "/images/event-arab-health.jpg",
  "/images/event-procurement-summit.jpg",
];

const eventSlugs = [
  "endoscopic-spine-masterclass",
  "arab-health-congress-expo",
  "healthcare-procurement-summit",
];

export default function Events() {
  const { t, isAr } = useI18n();

  return (
    <section id="insights" className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header with Link to /events */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="section-badge mb-3">
              <span className="badge-dot" />
              <span>{t.events.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1923] tracking-tight">
              {t.events.title}
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-2">
            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm">
              {t.events.desc}
            </p>
            <Link
              href="/events"
              className="text-xs font-semibold text-[#0d736d] hover:text-[#0f1923] transition-colors flex items-center gap-1 group"
            >
              <span>{isAr ? "استعراض جميع الفعاليات والمؤتمرات" : "Browse All Events & Conferences"}</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
            </Link>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Keynote Card (Links to annual-spine-pain-symposium) */}
          <Link
            href="/events/annual-spine-pain-symposium"
            className="lg:col-span-6 rounded-2xl overflow-hidden relative shadow-md group min-h-[320px] sm:min-h-[380px] flex flex-col justify-end bg-[#0f1923] cursor-pointer"
          >
            <img
              src="/images/event-spine-symposium.jpg"
              alt="Medical conference stage"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] via-[#0f1923]/40 to-transparent" />

            <div className="relative p-6 sm:p-8 z-10 text-white">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-[11px] uppercase font-bold tracking-widest text-[#0d736d] bg-white/95 px-2.5 py-1 rounded-lg inline-block">
                  {t.events.featuredBadge}
                </span>
                <span className="text-xs text-white/80 font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#0d736d]" />
                  <span>{isAr ? "١٤ - ١٦ نوفمبر ٢٠٢٦" : "Nov 14-16, 2026"}</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-2 group-hover:text-[#0d736d] transition-colors flex items-center justify-between gap-3">
                <span>{t.events.featuredTitle}</span>
                <ArrowUpRight className={`w-5 h-5 flex-shrink-0 transition-transform ${isAr ? "rtl-mirror" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
                {t.events.featuredDesc}
              </p>
            </div>
          </Link>

          {/* 3 Side Highlights with Direct Links */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {t.events.items.map((item, idx) => (
              <Link
                key={idx}
                href={`/events/${eventSlugs[idx]}`}
                className="bg-[#f9f9fb] border border-[#e8eaed] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 hover:border-[#0d736d] hover:bg-white hover:shadow-xs transition-all duration-300 group cursor-pointer"
              >
                <div className="w-full sm:w-32 h-24 rounded-xl overflow-hidden relative flex-shrink-0">
                  <img
                    src={eventImages[idx]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-1.5 left-1.5 rtl:left-auto rtl:right-1.5 bg-[#0f1923]/80 backdrop-blur-md text-white font-mono text-[9px] px-1.5 py-0.5 rounded">
                    {item.num}
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="text-[10px] font-semibold text-[#0d736d] uppercase tracking-wider block">
                      {item.tag}
                    </span>
                    <ArrowUpRight className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-[#0d736d] transition-colors ${isAr ? "rtl-mirror" : ""}`} />
                  </div>
                  <h4 className="text-base font-bold text-[#0f1923] mb-1 group-hover:text-[#0d736d] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* LinkedIn Outbound Strip */}
        <div className="mt-8 bg-[#f9f9fb] border border-[#e8eaed] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left rtl:sm:text-right">
            <div className="w-10 h-10 rounded-xl bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center font-bold text-lg flex-shrink-0">
              in
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0f1923]">
                {t.events.linkedinTitle}
              </h4>
              <p className="text-xs text-neutral-500">
                {t.events.linkedinDesc}
              </p>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/company/scene-medical-supplies/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs whitespace-nowrap py-2 px-4 group"
          >
            <span>{t.events.linkedinBtn}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 text-[#0d736d] transition-transform duration-300 ${isAr ? "rtl-mirror" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
          </a>
        </div>
      </div>
    </section>
  );
}
