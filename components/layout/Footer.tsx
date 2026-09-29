"use client";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-[#0a1118] text-white pt-12 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10 items-start">
          {/* Brand Col with Official Logo */}
          <div className="md:col-span-5">
            <a href="#home" className="inline-block mb-4 group">
              <img
                src="/images/logo.png"
                alt="Scene Medical Supplies"
                className="h-7 sm:h-8 w-auto object-contain brightness-0 invert opacity-95 transition-opacity group-hover:opacity-100"
              />
            </a>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h5 className="text-xs font-semibold uppercase tracking-widest text-[#003C72] mb-3">
              {t.footer.navTitle}
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <li>
                <a href="#home" className="hover:text-[#003C72] transition-colors">{t.nav.about === "About Us" ? "Home" : "الرئيسية"}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#003C72] transition-colors">{t.nav.about}</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#003C72] transition-colors">{t.nav.solutions}</a>
              </li>
              <li>
                <a href="#focus" className="hover:text-[#003C72] transition-colors">{t.nav.focus}</a>
              </li>
              <li>
                <a href="#insights" className="hover:text-[#003C72] transition-colors">{t.nav.events}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#003C72] transition-colors">{t.nav.contact}</a>
              </li>
            </ul>
          </div>

          {/* Clinical Focus */}
          <div className="md:col-span-4">
            <h5 className="text-xs font-semibold uppercase tracking-widest text-[#003C72] mb-3">
              {t.footer.specializedTitle}
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              {t.footer.specializedItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:+97142548020"
              className="hover:text-white transition-colors"
              dir="ltr"
            >
              +971 4 254 8020
            </a>
            <a
              href="https://www.linkedin.com/company/scene-medical-supplies/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#home" className="hover:text-white transition-colors flex items-center gap-1 group">
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
