import i18next from "i18next";
import ar from "@/i18n/ar.json";
import en from "@/i18n/en.json";

export const languageOptions = [
  { code: "ar", label: "🇱🇾 العربية", dir: "rtl" },
  { code: "en", label: "🇬🇧 English", dir: "ltr" },
  { code: "fr", label: "🇫🇷 Français", dir: "ltr" },
  { code: "es", label: "🇪🇸 Español", dir: "ltr" },
  { code: "tr", label: "🇹🇷 Türkçe", dir: "ltr" },
  { code: "it", label: "🇮🇹 Italiano", dir: "ltr" },
  { code: "de", label: "🇩🇪 Deutsch", dir: "ltr" },
  { code: "zh", label: "🇨🇳 中文", dir: "ltr" },
  { code: "ru", label: "🇷🇺 Русский", dir: "ltr" },
  { code: "ja", label: "🇯🇵 日本語", dir: "ltr" }
];

const resources = {
  ar: { translation: ar },
  en: { translation: en },
  fr: { translation: en },
  es: { translation: en },
  tr: { translation: en },
  it: { translation: en },
  de: { translation: en },
  zh: { translation: en },
  ru: { translation: en },
  ja: { translation: en }
};

if (!i18next.isInitialized) {
  i18next.init({
    resources,
    lng: "ar",
    fallbackLng: "ar",
    interpolation: { escapeValue: false }
  });
}

export default i18next;
