"use client";
import { useState } from "react";
import { ArrowUpRight, Phone, Plus } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function Products() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, isAr } = useI18n();

  return (
    <section id="products" className="py-14 lg:py-20 bg-[#f9f9fb] border-t border-[#e8eaed]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="section-badge mb-3">
              <span className="badge-dot" />
              <span>{t.products.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#003C72] tracking-tight leading-tight mb-4">
              {t.products.title}
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
              {t.products.desc}
            </p>

            {/* Direct Assistance Box */}
            <div className="bg-white border border-[#e8eaed] rounded-2xl p-5 mb-6 shadow-xs">
              <span className="text-xs uppercase font-bold tracking-wider text-[#003C72] block mb-1">
                {t.products.deskTitle}
              </span>
              <p className="text-xs text-neutral-500 mb-3">
                {t.products.deskDesc}
              </p>
              <a
                href="tel:+97142548020"
                className="text-base sm:text-lg font-bold text-[#0f1923] hover:text-[#0d736d] transition-colors flex items-center gap-2 group"
                dir="ltr"
              >
                <div className="w-7 h-7 rounded-full bg-[#003C72]/10 text-[#0d736d] flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+971 4 254 8020</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#0d736d] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <a href="#contact" className="btn-primary group text-xs">
              <span>{t.products.enquireBtn}</span>
              <span className="btn-icon">
                <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isAr ? "rtl-mirror" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
              </span>
            </a>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#e8eaed] p-5 sm:p-8 shadow-xs divide-y divide-[#e8eaed]">
            {t.products.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-4 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left rtl:text-right flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0f1923] group-hover:text-[#003C72] transition-colors">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-[#e8eaed] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#003C72] border-[#0d736d] text-white rotate-45"
                          : "text-[#0f1923] group-hover:border-[#003C72]"
                      }`}
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </button>

                  {isOpen && (
                    <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed pr-6 rtl:pr-0 rtl:pl-6 animate-fadeIn">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
