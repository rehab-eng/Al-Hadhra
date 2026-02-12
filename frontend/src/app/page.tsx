"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import i18next, { languageOptions } from "@/lib/i18n";
import programs from "@/data/programs.json";

type Program = {
  id: string;
  title: string;
  coordinator?: string | null;
  stats: { courses: number; credits: number; semesters: number };
  highlights: string[];
  tuition: string;
  careers: string[];
};

type AcademicFolder = {
  id: string;
  title: string;
  summary: string;
  programs: { name: string; status: "active" | "coming" }[];
};

type CulturalCard = {
  id: string;
  title: string;
  description: string;
  image?: string;
  date?: string;
  tag: string;
  isSlider?: boolean;
  images?: string[];
};

type StatBubble = {
  id: string;
  value: number;
  size: "md" | "lg" | "xl";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const academicFolders: AcademicFolder[] = [
  {
    id: "languages",
    title: "قسم اللغات",
    summary: "برنامج اللغة الإنجليزية بإعداد أكاديمي وبحثي متقدم.",
    programs: [{ name: "برنامج اللغة الإنجليزية", status: "active" }],
  },
  {
    id: "law",
    title: "قسم القانون",
    summary: "برنامج قانوني شامل يربط المعرفة النظرية بالتطبيق العملي.",
    programs: [{ name: "برنامج القانون", status: "active" }],
  },
  {
    id: "business",
    title: "قسم الإدارة",
    summary: "برنامج إدارة الأعمال كالنواة الأولى للجامعة منذ 2001.",
    programs: [{ name: "برنامج إدارة الأعمال", status: "active" }],
  },
  {
    id: "arts",
    title: "قسم الفنون",
    summary: "تخصص التصميم الداخلي مع منظور إبداعي معاصر.",
    programs: [{ name: "التصميم الداخلي", status: "coming" }],
  },
  {
    id: "technology",
    title: "قسم التكنولوجيا",
    summary: "تخصصات رقمية متقدمة لخدمة اقتصاد المعرفة.",
    programs: [
      { name: "شعبة علوم الحاسوب", status: "active" },
      { name: "شعبة الأمن السيبراني", status: "coming" },
    ],
  },
];

const stats: StatBubble[] = [
  { id: "faculty", value: 93, size: "lg", top: "8%", left: "10%" },
  { id: "programs", value: 4, size: "md", top: "18%", right: "12%" },
  { id: "students", value: 2932, size: "xl", top: "45%", left: "22%" },
  { id: "graduates", value: 1560, size: "md", bottom: "8%", right: "18%" },
];

const footballSlides = [
  "/images/football_1.webp",
  "/images/football_2.webp",
  "/images/football_3.webp",
];

const culturalCards: CulturalCard[] = [
  {
    id: "blood",
    title: "حملة التبرع بالدم",
    description:
      "مصرف الدم المركزي طرابلس ينظم حملة للتبرع بالدم داخل جامعة الحاضرة.",
    date: "2024-01-04",
    image: "/images/blood_donation.webp",
    tag: "عطاء",
  },
  {
    id: "accreditation",
    title: "فخر الاعتماد",
    description:
      "نعتز بحصول جامعة الحاضرة على درع الاعتماد المؤسسي الكامل، تجسيداً لالتزامنا بمعايير الجودة العالمية.",
    image: "/images/accreditation_shield.webp",
    tag: "إنجاز",
  },
  {
    id: "book-fair",
    title: "منارة الثقافة",
    description:
      "مشاركة متميزة لجامعة الحاضرة في فعاليات معرض الكتاب الدولي، تعزيزاً للقيمة المعرفية لطلابنا.",
    image: "/images/book_fair.webp",
    tag: "ثقافة",
  },
  {
    id: "robotics",
    title: "مبادرة Wolf Strike",
    description:
      "إطلاق مبادرة علمية لتطوير مهارات الطلبة في البرمجة والروبوتات والأنظمة الذكية، لدمج الجانب الأكاديمي بالتطبيق العملي.",
    image: "/images/robotics_init.webp",
    tag: "تقنية",
  },
  {
    id: "billiards",
    title: "النشاط الرياضي (البلياردو)",
    description:
      "اختتام بطولة الجامعة للبلياردو وسط أجواء من المنافسة الراقية والروح الرياضية العالية.",
    image: "/images/billiards_tournament.webp",
    tag: "رياضة",
  },
  {
    id: "football",
    title: "تتويج الأبطال",
    description:
      "تهانينا لفريق كوماندو التتويج المستحق.. لقطات تجسد الروح الرياضية لطلبتنا وكادرنا.",
    images: footballSlides,
    isSlider: true,
    tag: "رياضة",
  },
  {
    id: "masters",
    title: "الدراسات العليا (الماجستير)",
    description:
      "خطوة نحو المستقبل.. جامعة الحاضرة تفتح آفاق البحث العلمي بإطلاق برامج الماجستير المعتمدة في تخصصات رائدة.",
    image: "/images/master_degree.webp",
    tag: "دراسات عليا",
  },
];

const admissionSteps = [
  {
    id: "profile",
    title: "البيانات الأساسية",
    description: "الهوية، البريد الإلكتروني، ورقم الهاتف.",
  },
  {
    id: "academic",
    title: "الاختيار الأكاديمي",
    description: "تحديد البرنامج، الشعبة، والمستوى الدراسي.",
  },
  {
    id: "review",
    title: "التأكيد النهائي",
    description: "مراجعة البيانات وإرسال الطلب.",
  },
];

export default function Home() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const heroImageRef = useRef<HTMLDivElement | null>(null);
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statValueRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [activeFolderId, setActiveFolderId] = useState(academicFolders[0].id);
  const [footballIndex, setFootballIndex] = useState(0);
  const [canHover, setCanHover] = useState(true);
  const [navHidden, setNavHidden] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [language, setLanguage] = useState(i18next.language || "ar");
  const [theme, setTheme] = useState("light");

  const activeFolder = useMemo(
    () => academicFolders.find((folder) => folder.id === activeFolderId),
    [activeFolderId]
  );

  const overlayVariants = useMemo(
    () => ({
      rest: { opacity: canHover ? 0 : 1, y: canHover ? 18 : 0 },
      hover: { opacity: 1, y: 0 },
    }),
    [canHover]
  );

  const t = useMemo(() => (key: string) => i18next.t(key), [language]);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      return;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const stored = window.localStorage.getItem("language");
    if (stored) {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    i18next.changeLanguage(language);
    const option = languageOptions.find((item) => item.code === language);
    document.documentElement.lang = language;
    document.documentElement.dir = option?.dir ?? "ltr";
    window.localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(hover: hover)");
    const update = () => setCanHover(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFootballIndex((prev) => (prev + 1) % footballSlides.length);
    }, 5200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: heroImageRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      bubbleRefs.current.forEach((bubble) => {
        if (!bubble) return;
        gsap.fromTo(
          bubble,
          { opacity: 0, scale: 0.85, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bubble,
              start: "top 80%",
              once: true,
            },
          }
        );
      });

      statValueRefs.current.forEach((el, index) => {
        if (!el) return;
        const target = stats[index]?.value ?? 0;
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 2.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.floor(counter.val).toLocaleString("ar-LY");
          },
        });
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScroll;
      if (delta > 12 && current > 160) {
        setNavHidden(true);
      } else if (delta < -12) {
        setNavHidden(false);
      }
      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen overflow-x-hidden text-[var(--text-primary)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(197,160,89,0.15),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,_rgba(0,31,63,0.08),_transparent_60%)]" />

      <header
        className={`fixed top-0 z-50 w-full transition-transform duration-500 ${
          navHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 pt-4 md:px-6">
          <div className="surface-card flex flex-col items-center gap-4 rounded-[28px] px-4 py-4 backdrop-blur-md md:flex-row md:justify-between md:px-6">
            <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium sm:text-sm md:justify-start">
              <a className="hover:text-[var(--gold)]" href="#home">
                {t("nav.home")}
              </a>
              <a className="hover:text-[var(--gold)]" href="#academics">
                {t("nav.academics")}
              </a>
              <a className="hover:text-[var(--gold)]" href="#programs">
                {t("nav.programs")}
              </a>
              <a className="hover:text-[var(--gold)]" href="#hub">
                {t("nav.hub")}
              </a>
              <a className="hover:text-[var(--gold)]" href="#admissions">
                {t("nav.admissions")}
              </a>
              <a className="hover:text-[var(--gold)]" href="#map">
                {t("nav.map")}
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/80 gold-ring">
                <Image
                  src="/images/logo.webp"
                  alt="شعار جامعة الحاضرة"
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <p className="font-display text-base sm:text-lg">
                  جامعة الحاضرة
                </p>
                <p className="text-[11px] text-muted sm:text-xs">
                  بوابة عالمية
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="input-surface rounded-full px-3 py-2 text-xs font-medium text-[var(--text-primary)]"
              >
                {languageOptions.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() =>
                  setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                }
                className="glow-hover rounded-full border border-[var(--gold)]/40 px-4 py-2 text-xs font-semibold text-[var(--text-primary)]"
              >
                {theme === "dark" ? "Light" : "Dark"}
              </button>
              <a
                className="rounded-full border border-[var(--brand)]/20 bg-white/80 px-4 py-2 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--gold)] sm:text-sm"
                href="#admissions"
              >
                {t("cta.portal")}
              </a>
              <a
                className="rounded-full bg-[var(--brand)] px-4 py-2 text-xs font-medium text-white hover:bg-[#0b2a4a] sm:text-sm glow-gold"
                href="#admissions"
              >
                {t("cta.login")}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="pt-28 md:pt-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/70 shadow-[0_40px_80px_rgba(0,31,63,0.18)]">
              <div
                ref={heroImageRef}
                className="absolute inset-0 will-change-transform"
              >
                <Image
                  src="/images/campus.webp"
                  alt="حرم جامعة الحاضرة"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1100px"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(0,31,63,0.86),_rgba(0,31,63,0.35),_rgba(0,31,63,0.92))]" />

              <div className="relative z-10 px-6 py-16 sm:px-8 md:px-16 md:py-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="max-w-3xl"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                    {t("hero.tag")}
                  </p>
                  <h1 className="font-display text-3xl leading-tight text-white sm:text-4xl md:text-6xl">
                    {t("hero.title")}
                    <span className="block text-[var(--gold)]">
                      {t("hero.subtitle")}
                    </span>
                  </h1>
                  <p className="mt-5 text-sm leading-7 text-white/85 sm:text-base">
                    {t("hero.body")}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#admissions"
                      className="rounded-full bg-[var(--gold)] px-6 py-3 text-xs font-semibold text-[var(--brand)] sm:text-sm"
                    >
                      {t("cta.apply")}
                    </a>
                    <a
                      href="#programs"
                      className="rounded-full border border-white/50 px-6 py-3 text-xs font-semibold text-white hover:border-[var(--gold)] sm:text-sm"
                    >
                      {t("cta.explore")}
                    </a>
                  </div>
                </motion.div>

                <div className="mt-10 grid gap-3 text-xs text-white/80 sm:grid-cols-2 sm:text-sm md:grid-cols-3">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                    بنية رقمية عالمية بمعايير مؤسسية.
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                    هوية ملكية بتوهج ذهبي فخم.
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                    تجربة تفاعلية مدعومة بـ GSAP و Framer Motion.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-[28px] p-8 sm:p-10"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                كلمة رئيس الجامعة
              </p>
              <blockquote className="mt-5 border-s-4 border-[var(--gold)] ps-5 text-lg leading-8 text-[var(--text-primary)] sm:text-xl">
                جامعة الحاضرة ليست مجرد صرح تعليمي، بل هي منارة لبناء الإنسان
                ونهضة الوطن عبر التكنولوجيا والابتكار.
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src="/images/signature.webp"
                  alt="توقيع رئيس الجامعة"
                  width={140}
                  height={48}
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    أ. عبد الرؤوف أبو جراد
                  </p>
                  <p className="text-xs text-muted">رئيس جامعة الحاضرة</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-[28px] p-8 sm:p-10"
            >
              <h2 className="font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
                القيادة الأكاديمية
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                نلتزم بتقديم تعليم عالمي قائم على البحث والتقنيات الحديثة، مع
                دعم كامل لمسارات القبول والتسجيل والبوابة الرقمية للطلبة.
              </p>
              <div className="mt-6 space-y-3">
                <div className="surface-card rounded-2xl p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    نظام قبول ذكي ومتدرج
                  </p>
                  <p className="text-xs text-muted">
                    نماذج إلكترونية مرتبطة مباشرة بقاعدة البيانات.
                  </p>
                </div>
                <div className="surface-card rounded-2xl p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    هوية بصرية عالمية
                  </p>
                  <p className="text-xs text-muted">
                    تجربة سينمائية، صور عالية الدقة، وحركة مبهرة.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="academics" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                {t("sections.academics")}
              </p>
              <h2 className="font-display text-3xl text-[var(--text-primary)] sm:text-4xl">
                الهيكل الأكاديمي الجديد
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                نظام المجلدات الذكية يوضح الأقسام الأكاديمية الأساسية مع
                مؤشرات جاهزية البرنامج و"قريباً" للتخصصات المستقبلية.
              </p>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-4">
                {academicFolders.map((folder) => {
                  const isActive = folder.id === activeFolderId;
                  return (
                    <motion.button
                      key={folder.id}
                      whileHover={{ y: -4 }}
                      onClick={() => setActiveFolderId(folder.id)}
                      className="relative overflow-hidden rounded-3xl text-start"
                    >
                      {isActive ? (
                        <motion.div
                          layoutId="folder-active"
                          className="absolute inset-0 rounded-3xl border border-[var(--gold)] bg-[rgba(197,160,89,0.12)]"
                        />
                      ) : null}
                      <div className="surface-card relative z-10 rounded-3xl p-5">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-xl text-[var(--text-primary)] sm:text-2xl">
                            {folder.title}
                          </h3>
                          <span className="text-[11px] font-semibold text-[var(--gold)] sm:text-xs">
                            استعراض
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-muted sm:text-sm">
                          {folder.summary}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="glass-card rounded-[32px] p-6 sm:p-8">
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-2xl text-[var(--text-primary)]">
                    {activeFolder?.title}
                  </h3>
                  <p className="text-sm text-muted">{activeFolder?.summary}</p>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {activeFolder?.programs.map((program) => (
                    <div
                      key={program.name}
                      className="surface-card relative overflow-hidden rounded-2xl p-4"
                    >
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        {program.name}
                      </p>
                      <p className="mt-2 text-xs text-muted">
                        {program.status === "coming"
                          ? "برنامج قيد الإطلاق"
                          : "برنامج معتمد"}
                      </p>
                      {program.status === "coming" ? (
                        <div className="coming-soon absolute inset-0 flex items-center justify-center backdrop-blur-sm">
                          <span className="rounded-full bg-[var(--gold)] px-4 py-2 text-xs font-semibold text-[var(--brand)]">
                            Coming Soon
                          </span>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                {t("sections.programs")}
              </p>
              <h2 className="font-display text-3xl text-[var(--text-primary)] sm:text-4xl">
                ملفات البرامج التفصيلية
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                بيانات أكاديمية دقيقة يتم إدارتها من ملف JSON خارجي لتحديث
                المحتوى بسرعة ومرونة.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {(programs as Program[]).map((program) => (
                <motion.article
                  key={program.id}
                  layoutId={`program-${program.id}`}
                  className="glass-card rounded-[32px] p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="font-display text-2xl text-[var(--text-primary)]">
                      {program.title}
                    </h3>
                    {program.coordinator ? (
                      <span className="rounded-full border border-[var(--gold)]/40 px-3 py-1 text-xs text-muted">
                        المنسق: {program.coordinator}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">
                    <div className="surface-card rounded-2xl px-3 py-4">
                      <span className="block text-lg font-semibold text-[var(--text-primary)]">
                        {program.stats.courses}
                      </span>
                      <span className="text-muted">مادة</span>
                    </div>
                    <div className="surface-card rounded-2xl px-3 py-4">
                      <span className="block text-lg font-semibold text-[var(--text-primary)]">
                        {program.stats.credits}
                      </span>
                      <span className="text-muted">وحدة</span>
                    </div>
                    <div className="surface-card rounded-2xl px-3 py-4">
                      <span className="block text-lg font-semibold text-[var(--text-primary)]">
                        {program.stats.semesters}
                      </span>
                      <span className="text-muted">فصول</span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-muted">
                    {program.highlights.map((item) => (
                      <p key={item}>• {item}</p>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-[var(--gold)]/20 bg-[rgba(197,160,89,0.12)] p-4 text-sm text-[var(--text-primary)]">
                    {program.tuition}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {program.careers.map((career) => (
                      <span
                        key={career}
                        className="rounded-full border border-[var(--gold)]/40 px-3 py-1 text-xs text-[var(--text-primary)]"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        <section id="stats" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                {t("sections.stats")}
              </p>
              <h2 className="font-display text-3xl text-[var(--text-primary)] sm:text-4xl">
                دوائر البيانات العائمة
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                مؤشرات رقمية تنبض بالحركة لتعكس حجم المنظومة الأكاديمية.
              </p>
            </div>

            <div className="relative mt-10 min-h-[420px]">
              <div className="grid gap-4 sm:hidden">
                {stats.map((stat, index) => (
                  <div
                    key={stat.id}
                    className="bubble flex items-center justify-between rounded-3xl px-6 py-5"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                        {t(`stats.${stat.id}`)}
                      </p>
                      <span
                        ref={(el) => {
                          statValueRefs.current[index] = el;
                        }}
                        className="mt-2 block text-2xl font-semibold text-[var(--text-primary)]"
                      >
                        0
                      </span>
                    </div>
                    <div className="rounded-full bg-[var(--gold)]/20 px-4 py-2 text-xs text-[var(--text-primary)]">
                      Live
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden sm:block">
                {stats.map((stat, index) => {
                  const sizeClass =
                    stat.size === "xl"
                      ? "h-40 w-40"
                      : stat.size === "lg"
                        ? "h-32 w-32"
                        : "h-28 w-28";
                  return (
                    <div
                      key={stat.id}
                      ref={(el) => {
                        bubbleRefs.current[index] = el;
                      }}
                      className={`bubble absolute flex flex-col items-center justify-center rounded-full text-center ${sizeClass}`}
                      style={{
                        top: stat.top,
                        left: stat.left,
                        right: stat.right,
                        bottom: stat.bottom,
                      }}
                    >
                      <span
                        ref={(el) => {
                          statValueRefs.current[index] = el;
                        }}
                        className="block text-2xl font-semibold text-[var(--text-primary)]"
                      >
                        0
                      </span>
                      <span className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                        {t(`stats.${stat.id}`)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="hub" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                {t("sections.hub")}
              </p>
              <h2 className="font-display text-3xl text-[var(--text-primary)] sm:text-4xl">
                مجتمع نابض بالحياة
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                نافذة على الأنشطة الثقافية والرياضية والمبادرات المجتمعية التي
                تصنع هوية الجامعة الحديثة.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {culturalCards.map((card) => {
                const isSlider = card.isSlider && card.images;
                if (isSlider && card.images) {
                  const currentSlide =
                    card.images[footballIndex % card.images.length];
                  return (
                    <motion.article
                      key={card.id}
                      initial="rest"
                      animate={canHover ? "rest" : "hover"}
                      whileHover={canHover ? "hover" : undefined}
                      className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-[0_20px_45px_rgba(0,31,63,0.16)] md:col-span-2"
                    >
                      <div className="relative h-64 sm:h-72">
                        <motion.div
                          key={currentSlide}
                          initial={{ opacity: 0, scale: 1.04 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={currentSlide}
                            alt={card.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                            loading="lazy"
                          />
                        </motion.div>
                        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(0,31,63,0.6),_rgba(0,31,63,0.1),_rgba(0,31,63,0.7))]" />
                        <motion.div
                          variants={overlayVariants}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="absolute inset-0 flex flex-col justify-between p-6 text-white"
                        >
                          <div>
                            <span className="rounded-full bg-[var(--gold)]/20 px-3 py-1 text-[11px] font-semibold text-white">
                              {card.tag}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-display text-2xl">
                              {card.title}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-white/85">
                              {card.description}
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                              <button
                                type="button"
                                onClick={() =>
                                  setFootballIndex(
                                    (prev) =>
                                      (prev - 1 + card.images!.length) %
                                      card.images!.length
                                  )
                                }
                                className="rounded-full border border-white/40 px-3 py-1 text-xs"
                              >
                                السابق
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setFootballIndex(
                                    (prev) => (prev + 1) % card.images!.length
                                  )
                                }
                                className="rounded-full border border-white/40 px-3 py-1 text-xs"
                              >
                                التالي
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.article>
                  );
                }

                return (
                  <motion.article
                    key={card.id}
                    initial="rest"
                    animate={canHover ? "rest" : "hover"}
                    whileHover={canHover ? "hover" : undefined}
                    className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-[0_18px_40px_rgba(0,31,63,0.12)]"
                  >
                    <div className="relative h-56 sm:h-64">
                      {card.image ? (
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                          loading="lazy"
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(0,31,63,0.55),_rgba(0,31,63,0.1),_rgba(0,31,63,0.65))]" />
                      <div className="absolute bottom-4 right-4 left-4 text-white">
                        <span className="rounded-full bg-[var(--gold)]/25 px-3 py-1 text-[11px] font-semibold">
                          {card.tag}
                        </span>
                        <h3 className="mt-3 font-display text-xl">
                          {card.title}
                        </h3>
                      </div>
                      <motion.div
                        variants={overlayVariants}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="absolute inset-0 flex flex-col justify-end bg-[rgba(0,31,63,0.86)] p-5 text-white"
                      >
                        <p className="text-sm leading-7 text-white/90">
                          {card.description}
                        </p>
                        {card.date ? (
                          <span className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[var(--gold)]">
                            {card.date}
                          </span>
                        ) : null}
                      </motion.div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
        <section id="admissions" className="py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card rounded-[28px] p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                {t("sections.admissions")}
              </p>
              <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
                بوابة القبول الذكية
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                نموذج تقديم تفاعلي متعدد الخطوات يحاكي تجربة الجامعات البريطانية.
              </p>

              <div className="mt-6 space-y-3">
                {admissionSteps.map((step, index) => {
                  const isActive = index === stepIndex;
                  return (
                    <div
                      key={step.id}
                      className="surface-card relative overflow-hidden rounded-2xl p-4"
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="admission-step"
                          className="absolute inset-0 bg-[rgba(197,160,89,0.15)]"
                        />
                      ) : null}
                      <div className="relative z-10 flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-[var(--text-primary)]">
                            {step.title}
                          </p>
                          <p className="text-xs text-muted">{step.description}</p>
                        </div>
                        <span className="text-xs font-semibold text-[var(--gold)]">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="glass-card rounded-[28px] p-8 sm:p-10">
              <h3 className="font-display text-xl text-[var(--text-primary)] sm:text-2xl">
                نموذج التقديم التفاعلي
              </h3>
              <p className="mt-3 text-sm text-muted">
                الخطوة {stepIndex + 1} من {admissionSteps.length}
              </p>

              <div className="mt-6 space-y-4">
                {stepIndex === 0 ? (
                  <div className="grid gap-4">
                    <input
                      className="input-surface rounded-2xl px-4 py-3 text-sm"
                      placeholder="الاسم الكامل"
                    />
                    <input
                      className="input-surface rounded-2xl px-4 py-3 text-sm"
                      placeholder="البريد الإلكتروني"
                    />
                    <input
                      className="input-surface rounded-2xl px-4 py-3 text-sm"
                      placeholder="رقم الهاتف"
                    />
                  </div>
                ) : null}

                {stepIndex === 1 ? (
                  <div className="grid gap-4">
                    <input
                      className="input-surface rounded-2xl px-4 py-3 text-sm"
                      placeholder="البرنامج المطلوب"
                    />
                    <input
                      className="input-surface rounded-2xl px-4 py-3 text-sm"
                      placeholder="الشعبة"
                    />
                    <input
                      className="input-surface rounded-2xl px-4 py-3 text-sm"
                      placeholder="المستوى الدراسي"
                    />
                  </div>
                ) : null}

                {stepIndex === 2 ? (
                  <div className="rounded-2xl border border-[var(--gold)]/20 bg-[rgba(197,160,89,0.12)] p-4 text-sm text-[var(--text-primary)]">
                    بالضغط على إرسال، سيتم تحويل الطلب إلى بوابة القبول الذكية
                    مع إشعار فوري عبر البريد الإلكتروني.
                  </div>
                ) : null}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setStepIndex((prev) => Math.max(prev - 1, 0))}
                  className="rounded-full border border-[var(--gold)]/30 px-5 py-2 text-xs font-semibold text-[var(--text-primary)]"
                >
                  السابق
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setStepIndex((prev) =>
                      Math.min(prev + 1, admissionSteps.length - 1)
                    )
                  }
                  className="rounded-full bg-[var(--brand)] px-5 py-2 text-xs font-semibold text-white glow-gold"
                >
                  التالي
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="map" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                {t("sections.map")}
              </p>
              <h2 className="font-display text-3xl text-[var(--text-primary)] sm:text-4xl">
                الخريطة التفاعلية
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                موقع الجامعة في زاوية الدهماني بواجهة داكنة أنيقة.
              </p>
            </div>

            <div className="glass-card mt-8 rounded-[32px] p-4 sm:p-6">
              <div className="overflow-hidden rounded-3xl">
                <iframe
                  title="Al-Hadhra University Location"
                  src="https://maps.google.com/maps?q=Tripoli%20Dahmani&t=m&z=13&output=embed"
                  className="h-80 w-full border-0"
                  loading="lazy"
                  style={{
                    filter:
                      theme === "dark"
                        ? "grayscale(0.3) invert(0.9) hue-rotate(180deg)"
                        : "grayscale(0.15)",
                  }}
                />
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-muted">
                <MapPin className="h-4 w-4 text-[var(--gold)]" />
                زاوية الدهماني، طرابلس
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--gold)]/20 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-xs text-muted sm:px-6 sm:text-sm md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <span className="block text-[var(--text-primary)]">
              جامعة الحاضرة © 2026
            </span>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[var(--gold)]" />
              <span>0213400875 - 0927700733</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[var(--gold)]" />
              <span>info@alhadhra.edu.ly</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              className="glow-hover rounded-full border border-[var(--gold)]/40 p-2 text-[var(--text-primary)]"
              href="#"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              className="glow-hover rounded-full border border-[var(--gold)]/40 p-2 text-[var(--text-primary)]"
              href="#"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              className="glow-hover rounded-full border border-[var(--gold)]/40 p-2 text-[var(--text-primary)]"
              href="#"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
