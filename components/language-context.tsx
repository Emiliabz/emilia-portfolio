"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "pt" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (ptText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const savedLang = localStorage.getItem("emilia-lang") as Language;
    if (savedLang === "pt" || savedLang === "en") {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("emilia-lang", lang);
  };

  const t = (ptText: string, enText: string) => {
    return language === "pt" ? ptText : enText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
