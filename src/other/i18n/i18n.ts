import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zh from "./locales/zh/translation.json";
import en from "./locales/en/translation.json";

window.LOCALE = "zh";

i18n.use(initReactI18next).init({
  lng: window.LOCALE,
  fallbackLng: window.LOCALE,
  resources: {
    zh: {
      translation: zh
    },
    en: {
      translation: en
    }
  }
});

export default i18n;