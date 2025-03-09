import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import es from "./locales/es.json";
import ptBR from "./locales/pt-BR.json";

i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            "pt-BR": {
                translation: ptBR,
            },
            "en": {
                translation: en,
            },
            "es": {
                translation: es,
            },
        },
        fallbackLng: "pt-BR",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
