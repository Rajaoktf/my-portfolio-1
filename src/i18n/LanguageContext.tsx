import { createContext, useContext, useMemo, useState } from "react";
import { translations } from "./translation";
import type { Language } from "./translation";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof translations.id;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
