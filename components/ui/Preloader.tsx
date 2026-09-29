"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/context";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const { isAr } = useI18n();

  useEffect(() => {
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 250
      : 1100;
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, delay);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      aria-label={isAr ? "جارٍ تحميل سين ميديكال" : "Loading Scene Medical"}
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#003C72] transition-opacity duration-500 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        <img
          src="/images/logo.png"
          alt="Scene Medical Supplies"
          className="h-10 w-auto brightness-0 invert sm:h-12"
        />
        <span className="h-px w-20 overflow-hidden bg-white/25">
          <span className="preloader-progress block h-full w-full origin-left bg-white" />
        </span>
      </div>
    </div>
  );
}