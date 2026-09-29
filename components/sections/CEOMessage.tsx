"use client";

import { Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function CEOMessage() {
  const { isAr } = useI18n();

  return (
    <section id="leadership" className="bg-[#003C72] py-14 text-white lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-12 lg:gap-14 lg:px-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg sm:aspect-[16/9] lg:col-span-4 lg:aspect-[4/5]">
          <img
            src="/images/doctor-1.jpg"
            alt={isAr ? "صورة مؤقتة لماكس، الرئيس التنفيذي" : "Temporary portrait for Max, CEO"}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003C72]/70 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-widest text-white/80">
            {isAr ? "سين ميديكال" : "SCENE MEDICAL"}
          </span>
        </div>

        <div className="lg:col-span-8">
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-white/70">
            <span className="h-px w-8 bg-white/50" />
            <span>{isAr ? "رسالة من الرئيس التنفيذي" : "A MESSAGE FROM OUR CEO"}</span>
          </div>

          <Quote className="mb-4 h-8 w-8 text-white/65" strokeWidth={1.5} aria-hidden="true" />
          <blockquote className="max-w-3xl text-xl font-medium leading-relaxed sm:text-2xl lg:text-3xl">
            {isAr
              ? "في سين ميديكال، تتمثل رسالتنا في دعم الكوادر التي تقدم الرعاية. نجمع بين التقنيات الجراحية المتقدمة والتوريد الموثوق والدعم الإكلينيكي، ليتمكن فريق الرعاية من التركيز على ما يهم أكثر: مرضاهم."
              : "At Scene Medical, our mission is to support the people who deliver care. We bring advanced surgical technologies together with dependable supply and hands-on clinical support, so healthcare teams can focus on what matters most: their patients."}
          </blockquote>

          <div className="mt-8 border-t border-white/25 pt-5">
            <p className="text-lg font-bold">{isAr ? "ماكس" : "Max"}</p>
            <p className="mt-1 text-sm text-white/70">
              {isAr ? "الرئيس التنفيذي" : "CEO"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}