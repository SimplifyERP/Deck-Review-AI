import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enTranslations from "./translations/en/en.json";
import frTranslations from "./translations/hi/hi.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,

    fallbackLng: "en",
    resources: {
      en: {
        translation: enTranslations,
      },
      hi: {
        translation: frTranslations,
      },
    },
  });
export default i18n;
