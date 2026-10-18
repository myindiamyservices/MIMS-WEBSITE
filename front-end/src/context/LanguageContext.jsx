import { createContext, useContext, useState, useEffect } from "react";
import translations from "../translations/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default is 'en' as requested: "by default english rkho"
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem("mims_language") || "en";
  });

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("mims_language", lang);
      document.documentElement.lang = lang === "hi" ? "hi-IN" : "en-IN";

      // Keep Google Translate cookie in sync for full-page dynamic coverage
      const domain = window.location.hostname;
      const cookieVal = lang === "hi" ? "/en/hi" : "/en/en";
      document.cookie = `googtrans=${cookieVal}; path=/;`;
      document.cookie = `googtrans=${cookieVal}; path=/; domain=${domain};`;

      // Trigger Google Translate select element if loaded
      const gtCombo = document.querySelector(".goog-te-combo");
      if (gtCombo) {
        gtCombo.value = lang;
        gtCombo.dispatchEvent(new Event("change"));
      }
    } catch (e) {
      console.warn("Language update error:", e);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  useEffect(() => {
    document.documentElement.lang = language === "hi" ? "hi-IN" : "en-IN";

    // Setup helper to trigger Google translate if user already chose hindi
    if (language === "hi") {
      const interval = setInterval(() => {
        const gtCombo = document.querySelector(".goog-te-combo");
        if (gtCombo && gtCombo.value !== "hi") {
          gtCombo.value = "hi";
          gtCombo.dispatchEvent(new Event("change"));
          clearInterval(interval);
        }
      }, 500);

      const timer = setTimeout(() => clearInterval(interval), 5000);
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [language]);

  const t = (key, fallback) => {
    if (!key) return "";
    if (language === "en") {
      return key;
    }
    return translations.hi?.[key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export default LanguageContext;
