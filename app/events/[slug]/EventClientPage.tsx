"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { EventItem } from "@/lib/eventsData";
import { useI18n } from "@/lib/i18n/context";
import {
  Calendar,
  Clock,
  MapPin,
  Award,
  ArrowLeft,
  CheckCircle2,
  Share2,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { submitLead, type LeadSubmission } from "@/app/actions";
import PhoneInput from "@/components/ui/PhoneInput";

export default function EventClientPage({ event }: { event: EventItem }) {
  const { isAr } = useI18n();
  const [registered, setRegistered] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hospital: "",
    specialty: "",
    website: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    const result = await submitLead({
      source: `Event registration: ${event.title.en}`,
      ...formData,
    } satisfies LeadSubmission);
    setSubmitting(false);

    if (result.error) {
      setSubmitError(result.error);
      return;
    }

    setRegistered(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Top Breadcrumb & Back Bar */}
        <div className="bg-[#f9f9fb] border-b border-[#e8eaed] py-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0d736d] hover:text-[#0f1923] transition-colors group"
            >
              <ArrowLeft
                className={`w-3.5 h-3.5 transition-transform ${
                  isAr ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1"
                }`}
              />
              <span>{isAr ? "العودة إلى جدول الفعاليات" : "Back to All Events"}</span>
            </Link>

            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest hidden sm:inline-block">
              {isAr ? event.category.ar : event.category.en}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-white border-b border-[#e8eaed]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Event Information */}
              <div className="lg:col-span-7">
                <div className="section-badge mb-4">
                  <span className="badge-dot" />
                  <span>{isAr ? event.badge.ar : event.badge.en}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1923] tracking-tight leading-tight mb-6">
                  {isAr ? event.title.ar : event.title.en}
                </h1>

                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
                  {isAr ? event.shortDesc.ar : event.shortDesc.en}
                </p>

                {/* Key Event Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#f9f9fb] border border-[#e8eaed] rounded-2xl p-5 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0d736d]/10 text-[#0d736d] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                        {isAr ? "التاريخ" : "Date"}
                      </span>
                      <span className="text-sm font-bold text-[#0f1923]">
                        {isAr ? event.date.ar : event.date.en}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0d736d]/10 text-[#0d736d] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                        {isAr ? "التوقيت" : "Time"}
                      </span>
                      <span className="text-sm font-bold text-[#0f1923]">
                        {isAr ? event.time.ar : event.time.en}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0d736d]/10 text-[#0d736d] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                        {isAr ? "الموقع والقاعة" : "Venue & Location"}
                      </span>
                      <span className="text-sm font-bold text-[#0f1923] block leading-tight">
                        {isAr ? event.location.ar : event.location.en}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {isAr ? event.city.ar : event.city.en}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0d736d]/10 text-[#0d736d] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                        {isAr ? "الاعتماد وساعات التعليم" : "Accreditation"}
                      </span>
                      <span className="text-sm font-bold text-[#0d736d]">
                        {event.cmeCredits}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#register"
                    className="btn-primary text-xs group"
                  >
                    <span>{isAr ? "حجز مقعد / تسجيل الحضور" : "Register / Reserve Seat"}</span>
                    <span className="btn-icon">
                      <ArrowUpRight className={`w-3.5 h-3.5 ${isAr ? "rtl-mirror" : ""}`} />
                    </span>
                  </a>

                  <a
                    href="#agenda"
                    className="btn-outline text-xs"
                  >
                    <span>{isAr ? "استعراض جدول الأعمال" : "View Full Agenda"}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Event Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 border border-[#e8eaed]">
                  <img
                    src={event.image}
                    alt={isAr ? event.title.ar : event.title.en}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-[#0f1923] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0d736d]" />
                    <span>{isAr ? "منظمة بواسطة سين للتجهيزات الطبية" : "Organized by Scene Medical"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview & Objectives */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1923] mb-4">
                  {isAr ? "نبذة عن الفعالية" : "Event Overview"}
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
                  {isAr ? event.fullDesc.ar : event.fullDesc.en}
                </p>

                <h3 className="text-lg font-bold text-[#0f1923] mb-4">
                  {isAr ? "الأهداف والمخرجات الإكلينيكية" : "Clinical Objectives"}
                </h3>
                <ul className="space-y-3">
                  {(isAr ? event.objectives.ar : event.objectives.en).map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                      <div className="w-5 h-5 rounded-full bg-[#0d736d]/10 text-[#0d736d] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Featured */}
              <div className="lg:col-span-5 bg-[#f9f9fb] border border-[#e8eaed] rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[#0f1923] mb-4">
                  {isAr ? "التقنيات والتجهيزات المعروضة" : "Technologies on Display"}
                </h3>
                <p className="text-xs text-neutral-500 mb-6">
                  {isAr
                    ? "يتضمن المؤتمر تدريباً وتجارب حية على أحدث أجهزة سين المعتمدة."
                    : "The symposium features live surgeon workstations and hands-on demonstrations."}
                </p>

                <div className="space-y-2.5">
                  {(isAr ? event.technologies.map((t) => t.ar) : event.technologies.map((t) => t.en)).map((tech, i) => (
                    <div
                      key={i}
                      className="bg-white border border-[#e8eaed] rounded-xl p-3.5 flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#0f1923]"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0d736d]" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agenda Section */}
        <section id="agenda" className="py-14 bg-[#f9f9fb] border-t border-b border-[#e8eaed]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto mb-10 text-center">
              <div className="section-badge mb-3">
                <span className="badge-dot" />
                <span>{isAr ? "جدول الأعمال" : "Scientific Agenda"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1923]">
                {isAr ? "برنامج الجلسات والمحاضرات" : "Sessions & Lecture Schedule"}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {event.agenda.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e8eaed] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#0d736d] transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="px-3 py-1.5 rounded-lg bg-[#f0f7f6] text-[#0d736d] font-mono text-xs font-bold whitespace-nowrap">
                      {item.time}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#0f1923] mb-1">
                        {isAr ? item.topic.ar : item.topic.en}
                      </h4>
                      <p className="text-xs text-neutral-500">
                        {isAr ? item.speaker.ar : item.speaker.en}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        {event.speakers.length > 0 && (
          <section className="py-14 bg-white border-b border-[#e8eaed]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="section-badge mb-3">
                  <span className="badge-dot" />
                  <span>{isAr ? "المتحدثون والخبراء" : "Featured Faculty"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1923]">
                  {isAr ? "نخبة الأطباء والاستشاريين" : "Distinguished Clinical Faculty"}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {event.speakers.map((speaker, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f9f9fb] border border-[#e8eaed] rounded-2xl p-5 text-center flex flex-col items-center hover:border-[#0d736d] transition-all"
                  >
                    <img
                      src={speaker.image}
                      alt={isAr ? speaker.name.ar : speaker.name.en}
                      className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm mb-4"
                    />
                    <h4 className="text-base font-bold text-[#0f1923] mb-1">
                      {isAr ? speaker.name.ar : speaker.name.en}
                    </h4>
                    <p className="text-xs text-[#0d736d] font-semibold mb-1">
                      {isAr ? speaker.title.ar : speaker.title.en}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {isAr ? speaker.hospital.ar : speaker.hospital.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Gallery Section */}
        {event.gallery && event.gallery.length > 0 && (
          <section className="py-14 bg-[#f9f9fb] border-t border-b border-[#e8eaed]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="section-badge mb-3">
                  <span className="badge-dot" />
                  <span>{isAr ? "معرض الصور" : "Event Gallery"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1923]">
                  {isAr ? "معرض صور الفعالية" : "Event Photo Gallery"}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-2">
                  {isAr ? "اضغط على أي صورة للعرض الكامل" : "Click any photo to view full size"}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {event.gallery.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className={`relative overflow-hidden rounded-xl border border-[#e8eaed] group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0d736d] ${
                      idx === 0 ? "col-span-2 md:col-span-2 aspect-[16/9]" : "aspect-square"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${isAr ? event.title.ar : event.title.en} — ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#0f1923]/0 group-hover:bg-[#0f1923]/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-md text-[#0f1923] text-xs font-bold px-3 py-1.5 rounded-lg">
                        {isAr ? "عرض" : "View"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Lightbox Overlay */}
        {lightboxIndex !== null && event.gallery && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xl font-light"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Prev */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
                className={`absolute ${isAr ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xl`}
                aria-label="Previous"
              >
                ‹
              </button>
            )}

            <img
              src={event.gallery[lightboxIndex]}
              alt={`Gallery ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            {lightboxIndex < event.gallery.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
                className={`absolute ${isAr ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xl`}
                aria-label="Next"
              >
                ›
              </button>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs font-mono">
              {lightboxIndex + 1} / {event.gallery.length}
            </div>
          </div>
        )}

        {/* Interactive Registration Section */}
        <section id="register" className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <div className="bg-[#0f1923] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#0d736d] bg-[#0d736d]/20 border border-[#0d736d]/30 px-3 py-1 rounded-lg inline-block mb-3">
                    {isAr ? "التسجيل وحجز المقاعد" : "Seat Reservation"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {isAr ? "سجل حضورك في الفعالية" : "Reserve Your Attendance"}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                    {isAr
                      ? "المقاعد محدودة لضمان الاستفادة الكاملة من ورش العمل التدريبية وساعات التعليم المستمر."
                      : "Seats are prioritized for UAE clinical personnel, spine surgeons, and hospital procurement officers."}
                  </p>
                </div>

                {registered ? (
                  <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center animate-fadeIn">
                    <CheckCircle2 className="w-12 h-12 text-[#0d736d] mx-auto mb-3" />
                    <h4 className="text-xl font-bold mb-2">
                      {isAr ? "تم استلام طلب التسجيل بنجاح!" : "Registration Confirmed!"}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto mb-4">
                      {isAr
                        ? "شكراً لتسجيلك. سيتواصل معك فريق المؤتمرات في سين لتأكيد تفاصيل الحضور وتصريح الدخول."
                        : "Thank you for registering. Our symposium coordination desk will send your pass details and session access shortly."}
                    </p>
                    <Link
                      href="/events"
                      className="btn-outline text-xs inline-flex"
                    >
                      <span>{isAr ? "الاطلاع على باقي الفعاليات" : "Browse Other Events"}</span>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="event-website">Website</label>
                      <input
                        id="event-website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                        {isAr ? "الاسم الكامل *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isAr ? "د. / اسم الطبيب أو المتخصص" : "Dr. / Clinician Full Name"}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-xs focus:outline-none focus:border-[#0d736d] placeholder:text-neutral-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                          {isAr ? "المستشفى / المنشأة الصحية *" : "Hospital / Healthcare Facility *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.hospital}
                          onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                          placeholder={isAr ? "اسم المستشفى" : "Hospital Name"}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-xs focus:outline-none focus:border-[#0d736d] placeholder:text-neutral-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                          {isAr ? "التخصص الإكلينيكي *" : "Clinical Specialty *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.specialty}
                          onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                          placeholder={isAr ? "جراحة عمود فقري / علاج ألم" : "Spine Surgery / Pain Management"}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-xs focus:outline-none focus:border-[#0d736d] placeholder:text-neutral-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                          {isAr ? "البريد الإلكتروني *" : "Official Email *"}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="doctor@hospital.ae"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-xs focus:outline-none focus:border-[#0d736d] placeholder:text-neutral-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                          {isAr ? "رقم الهاتف للتواصل *" : "Phone Number *"}
                        </label>
                        <PhoneInput
                          required
                          value={formData.phone}
                          onChange={(phone) => setFormData({ ...formData, phone })}
                          placeholder="+971 50 000 0000"
                          dark
                        />
                      </div>
                    </div>

                    {submitError && <p role="alert" className="text-xs text-red-300">{submitError}</p>}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#0d736d] hover:bg-[#0a5c57] text-white font-semibold py-3 px-4 rounded-lg text-xs transition-all duration-200 shadow-sm cursor-pointer flex items-center justify-center gap-2 mt-4"
                    >
                      <span>{submitting ? (isAr ? "جارٍ الإرسال..." : "Sending...") : (isAr ? "تأكيد طلب حجز المقعد" : "Confirm Seat Reservation")}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 ${isAr ? "rtl-mirror" : ""}`} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
