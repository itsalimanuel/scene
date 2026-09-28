"use client";
import { useState } from "react";
import { ArrowUpRight, Phone, MapPin, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { submitLead, type LeadSubmission } from "@/app/actions";
import Select from "@/components/ui/Select";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    hospital: "",
    phone: "",
    line: "",
    notes: "",
  });
  const { t, isAr } = useI18n();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!formData.line) {
      setError(isAr ? "يرجى اختيار خط المنتجات." : "Please select a product line.");
      return;
    }

    setSubmitting(true);

    const result = await submitLead({
      source: "Contact form",
      ...formData,
    } satisfies LeadSubmission);

    setSubmitting(false);
    if (result.error) {
      setError(result.error);
      return;
    }

    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Full-Width Dark Banner (MediClinic Iconic Bottom CTA Pattern) */}
        <div className="bg-[#0f1923] rounded-2xl md:rounded-3xl p-6 sm:p-10 lg:p-14 text-white relative overflow-hidden shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#0d736d]/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#0d736d] bg-[#0d736d]/20 border border-[#0d736d]/30 px-3 py-1 rounded-lg inline-block mb-4">
                {t.contact.badge}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-4">
                {t.contact.titleLine1}<br />
                <span className="text-[#0d736d]">{t.contact.titleLine2}</span>
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
                {t.contact.desc}
              </p>

              {/* Direct Touchpoints */}
              <div className="space-y-3 max-w-md">
                <a
                  href="tel:+97142548020"
                  className="flex items-center justify-between p-4 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-xl transition-all duration-300 group"
                  dir="ltr"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0d736d]/20 text-[#0d736d] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block mb-0.5">
                        {t.contact.callLabel}
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-white group-hover:text-[#0d736d] transition-colors">
                        +971 4 254 8020
                      </span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-[#0d736d] flex items-center justify-center text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/company/scene-medical-supplies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0077b5]/20 text-[#0077b5] flex items-center justify-center font-bold text-sm flex-shrink-0">
                      in
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block mb-0.5">
                        {t.contact.linkedinLabel}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#0d736d] transition-colors">
                        {t.contact.linkedinLink}
                      </span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-[#0d736d] flex items-center justify-center text-white transition-colors">
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isAr ? "rtl-mirror" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=79H2%2BJR3%20Abu%20Saif%20Business%20Centre%2C%20Main%20Entrance%20B%2C%20Hor%20Al%20Anz%20East%2C%20Deira%2C%20Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/[0.03] hover:bg-white/[0.1] border border-white/10 rounded-xl flex items-center gap-3.5 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 text-[#0d736d] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block mb-0.5">
                      {t.contact.basedLabel}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#0d736d] transition-colors block">
                      79H2+JR3 Abu Saif Business Centre, Main Entrance B - Hor Al Anz East - Deira - Dubai
                    </span>
                    <span className="text-[11px] text-neutral-400 mt-0.5 block">
                      {t.contact.companyName}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Interactive Form Box */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 text-[#0f1923] shadow-lg">
              <h3 className="text-xl font-bold text-[#0f1923] mb-1">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs text-neutral-500 mb-4">
                {t.contact.formDesc}
              </p>

              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-12 h-12 rounded-lg bg-[#0d736d]/15 text-[#0d736d] flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-lg font-bold mb-1.5">{t.contact.successTitle}</h4>
                  <p className="text-xs text-neutral-600 max-w-xs mx-auto">
                    {t.contact.successDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#e8eaed] text-xs focus:outline-none focus:border-[#0d736d]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                        {t.contact.hospitalLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.hospital}
                        onChange={(event) => setFormData({ ...formData, hospital: event.target.value })}
                        placeholder={t.contact.hospitalPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e8eaed] text-xs focus:outline-none focus:border-[#0d736d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={formData.phone}
                        onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e8eaed] text-xs focus:outline-none focus:border-[#0d736d]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                      {t.contact.lineLabel}
                    </label>
                    <Select
                      options={t.contact.lineOptions}
                      placeholder={isAr ? "اختر خط المنتجات" : "Select a product line"}
                      value={formData.line}
                      onChange={(line) => setFormData({ ...formData, line })}
                      ariaLabel={t.contact.lineLabel}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                      {t.contact.notesLabel}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(event) => setFormData({ ...formData, notes: event.target.value })}
                      placeholder={t.contact.notesPlaceholder}
                      className="w-full px-3.5 py-2 rounded-lg border border-[#e8eaed] text-xs focus:outline-none focus:border-[#0d736d] resize-none"
                    />
                  </div>

                  {error && <p role="alert" className="text-xs text-red-600">{error}</p>}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#0d736d] hover:bg-[#0a5c57] text-white font-semibold py-2.5 px-4 rounded-lg text-xs transition-all duration-200 shadow-sm cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>{submitting ? (isAr ? "جارٍ الإرسال..." : "Sending...") : t.contact.submitBtn}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isAr ? "rtl-mirror" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
