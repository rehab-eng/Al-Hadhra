import i18next from "i18next";

export const languageOptions = [
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "tr", label: "Türkçe", dir: "ltr" },
  { code: "it", label: "Italiano", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "zh", label: "中文", dir: "ltr" },
  { code: "ru", label: "Русский", dir: "ltr" },
  { code: "ja", label: "日本語", dir: "ltr" },
];

const en = {
  nav: {
    home: "Home",
    academics: "Academics",
    programs: "Programs",
    hub: "Al-Hadhra Hub",
    admissions: "Admissions",
    map: "Campus Map",
  },
  hero: {
    tag: "Global Scale",
    title: "Al-Hadhra Global Digital Portal",
    subtitle: "An elite academic experience with cinematic interaction.",
    body:
      "A world-class university platform that blends heritage, innovation, and a premium user journey.",
  },
  cta: {
    apply: "Apply Now",
    explore: "Explore Programs",
    portal: "Student Portal",
    login: "Login",
  },
  sections: {
    academics: "Academic Architecture",
    programs: "Program Profiles",
    stats: "Dynamic Stats Dashboard",
    hub: "Culture, Sports & Community",
    admissions: "Smart Admissions",
    map: "Interactive Campus Map",
  },
  stats: {
    faculty: "Faculty",
    programs: "Programs",
    students: "Students",
    graduates: "Graduates",
  },
};

const ar = {
  nav: {
    home: "الرئيسية",
    academics: "الأكاديميات",
    programs: "البرامج",
    hub: "الحاضرة",
    admissions: "القبول",
    map: "الخريطة",
  },
  hero: {
    tag: "Global Scale",
    title: "البوابة الرقمية العالمية لجامعة الحاضرة",
    subtitle: "تجربة أكاديمية فاخرة بتفاعل سينمائي.",
    body:
      "منصة جامعية عالمية تجمع بين الأصالة والابتكار مع رحلة رقمية استثنائية.",
  },
  cta: {
    apply: "قدّم الآن",
    explore: "استكشف البرامج",
    portal: "بوابة الطالب",
    login: "تسجيل الدخول",
  },
  sections: {
    academics: "الهيكل الأكاديمي الذكي",
    programs: "الملفات التفصيلية للبرامج",
    stats: "لوحة الإحصائيات الابتكارية",
    hub: "الحاضرة | ثقافة، رياضة، وعطاء",
    admissions: "بوابة القبول الذكية",
    map: "خريطة الجامعة التفاعلية",
  },
  stats: {
    faculty: "هيئة التدريس",
    programs: "التخصصات",
    students: "الطلاب",
    graduates: "الخريجون",
  },
};

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
  ja: { translation: en },
};

if (!i18next.isInitialized) {
  i18next.init({
    resources,
    lng: "ar",
    fallbackLng: "ar",
    interpolation: { escapeValue: false },
  });
}

export default i18next;
