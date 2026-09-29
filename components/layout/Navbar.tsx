"use client";
import { useState, useEffect } from "react";
import { ArrowUpRight, Globe, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import Link from "next/link";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, toggleLocale, isAr } = useI18n();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.solutions, href: "/#solutions" },
    { label: t.nav.focus, href: "/#focus" },
    { label: t.nav.events, href: "/#insights" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid || open
          ? "bg-white/95 backdrop-blur-md border-b border-[#e8eaed] shadow-xs"
          : "bg-white/80 md:bg-transparent border-b border-transparent"
      }`}
    >
      <div className="border-b border-white/20 bg-[#003C72]">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 lg:px-12">
          <a
            href="tel:+97142548020"
            className="flex items-center gap-2 text-[11px] font-medium text-white/85 transition-colors hover:text-white"
            dir="ltr"
          >
            <Phone className="h-3.5 w-3.5 text-white" />
            <span>+971 4 254 8020</span>
          </a>
          <a
            href="https://www.linkedin.com/company/scene-medical-supplies/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={isAr ? "سين ميديكال على لينكدإن" : "Scene Medical on LinkedIn"}
            title="LinkedIn"
            className="flex h-7 w-7 items-center justify-center text-white/85 transition-colors hover:text-white"
          >
            <span aria-hidden="true" className="text-[13px] font-extrabold leading-none">in</span>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          <Link href="/#home" className="flex items-center no-underline group py-2">
            <img
              src="/images/logo.png"
              alt="Scene Medical Supplies"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85"
            />
          </Link>


          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 hover:border-[#0d736d] text-xs font-semibold text-[#0f1923] hover:text-[#0d736d] transition-colors cursor-pointer"
              title={isAr ? "Switch to English" : "التبديل إلى العربية"}
            >
              <Globe className="w-3.5 h-3.5 text-[#003C72]" />
              <span>{isAr ? "English" : "العربية"}</span>
            </button>

            <Link href="/#contact" className="btn-primary text-xs group">
              <span>{t.nav.connectBtn}</span>
              <span className="btn-icon">
                <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isAr ? "rtl-mirror" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
              </span>
            </Link>
          </div>

          {/* Hamburger + Mobile Lang Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLocale}
              className="px-2.5 py-1 rounded-lg border border-neutral-200 text-xs font-semibold text-[#0f1923]"
            >
              {isAr ? "EN" : "عربي"}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-[#0f1923] cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block w-6 h-0.5 bg-[#0f1923] transition-all duration-300 ${
                    open ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-[#0f1923] transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-[#0f1923] transition-all duration-300 ${
                    open ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[#e8eaed] bg-white px-6 py-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-[#0f1923] hover:text-[#0d736d] py-1 border-b border-neutral-100"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-neutral-500">اللغة / Language</span>
              <button
                onClick={() => {
                  toggleLocale();
                  setOpen(false);
                }}
                className="text-xs font-bold text-[#0d736d] border border-[#0d736d] px-3 py-1 rounded-lg"
              >
                {isAr ? "English" : "العربية"}
              </button>
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center text-xs mt-4 w-full"
            >
              <span>{t.nav.connectBtn}</span>
              <span className="btn-icon">
                <ArrowUpRight className={`w-3.5 h-3.5 ${isAr ? "rtl-mirror" : ""}`} />
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
