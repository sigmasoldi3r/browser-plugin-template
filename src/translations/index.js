import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { addNamespaces } from "./addNamespaces";

import en from "./en";
import es from "./es";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: [],
    resources: {},
    partialBundledLanguages: true,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

addNamespaces(i18next, { en, es });
