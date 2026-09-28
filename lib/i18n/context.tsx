"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, Translations, translations } from "./translations";

interface I18nContextType {
  locale: Locale;
  dir: "ltr" | "rtl";
  isAr: boolean;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("scene_lang") as Locale | null;
    if (saved === "ar" || saved === "en") {
      setLocaleState(saved);
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = saved;
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("scene_lang", newLocale);
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLocale;
  };

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  const dir = locale === "ar" ? "rtl" : "ltr";
  const isAr = locale === "ar";
  const t = translations[locale];

  return (
    <I18nContext.Provider
      value={{
        locale,
        dir,
        isAr,
        setLocale,
        toggleLocale,
        t,
      }}
    >
      <div className={isAr ? "font-cairo" : "font-sans"} dir={dir}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
