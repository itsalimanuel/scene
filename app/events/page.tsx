"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { eventsList } from "@/lib/eventsData";
import { useI18n } from "@/lib/i18n/context";
import { ArrowUpRight, Calendar, MapPin, Clock, Award, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function EventsPage() {
  const { isAr } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: isAr ? "جميع الفعاليات" : "All Events" },
    { id: "symposium", label: isAr ? "المؤتمرات العلمية" : "Symposiums" },
    { id: "workshop", label: isAr ? "ورش العمل" : "Workshops" },
    { id: "expo", label: isAr ? "المعارض الطبية" : "Exhibitions" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Top Header */}
        <section className="py-12 lg:py-16 bg-[#f9f9fb] border-b border-[#e8eaed]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0d736d] hover:text-[#0f1923] transition-colors mb-6 group"
            >
              <ArrowLeft className={`w-3.5 h-3.5 transition-transform ${isAr ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1"}`} />
              <span>{isAr ? "العودة إلى الصفحة الرئيسية" : "Back to Home"}</span>
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <div className="section-badge mb-3">
                  <span className="badge-dot" />
                  <span>{isAr ? "المؤتمرات والفعاليات الطبية" : "Medical Events & Conferences"}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1923] tracking-tight">
                  {isAr ? "فعاليات سين للتجهيزات الطبية" : "Scene Medical Events & Symposiums"}
                </h1>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed">
                {isAr
                  ? "استكشف أحدث المؤتمرات الطبية، ورش العمل الجراحية المعتمدة، وحلقات التدريب الإكلينيكي في دولة الإمارات."
                  : "Explore certified surgical masterclasses, scientific keynote symposiums, and healthcare technology showcases across the UAE."}
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-[#0d736d] border-[#0d736d] text-white shadow-xs"
                      : "bg-white border-[#e8eaed] text-[#0f1923] hover:border-[#0d736d]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventsList.map((event) => (
                <article
                  key={event.slug}
                  className="bg-white border border-[#e8eaed] rounded-2xl overflow-hidden hover:border-[#0d736d] hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Image with Floating Badges */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={event.image}
                      alt={isAr ? event.title.ar : event.title.en}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-[#0d736d]">
                      {isAr ? event.badge.ar : event.badge.en}
                    </div>

                    <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 flex items-center gap-2 text-white text-xs font-medium">
                      <Award className="w-3.5 h-3.5 text-[#0d736d]" />
                      <span>{event.cmeCredits}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta Pills */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#0d736d]" />
                          <span>{isAr ? event.date.ar : event.date.en}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#0d736d]" />
                          <span>{isAr ? event.city.ar : event.city.en}</span>
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#0f1923] mb-3 group-hover:text-[#0d736d] transition-colors leading-snug">
                        {isAr ? event.title.ar : event.title.en}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                        {isAr ? event.shortDesc.ar : event.shortDesc.en}
                      </p>
                    </div>

                    {/* Footer / CTA */}
                    <div className="pt-4 border-t border-[#e8eaed] flex items-center justify-between">
                      <span className="text-xs font-semibold text-neutral-500">
                        {isAr ? event.category.ar : event.category.en}
                      </span>

                      <Link
                        href={`/events/${event.slug}`}
                        className="btn-primary text-xs group/btn"
                      >
                        <span>{isAr ? "عرض التفاصيل والتسجيل" : "View Details & Register"}</span>
                        <span className="btn-icon">
                          <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isAr ? "rtl-mirror" : "group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"}`} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
