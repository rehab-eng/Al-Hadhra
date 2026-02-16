"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
  Youtube,
} from "lucide-react";
import i18next, { languageOptions } from "@/lib/i18n";
import programsAr from "@/data/programs.ar.json";
import programsEn from "@/data/programs.en.json";

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
  titleKey: string;
  summaryKey: string;
  programs: { nameKey: string; status: "active" | "coming" }[];
};

type CulturalCard = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image?: string;
  dateKey?: string;
  tagKey: string;
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
    titleKey: "folders.languages.title",
    summaryKey: "folders.languages.summary",
    programs: [
      { nameKey: "folders.languages.programs.0", status: "active" },
    ],
  },
  {
    id: "law",
    titleKey: "folders.law.title",
    summaryKey: "folders.law.summary",
    programs: [{ nameKey: "folders.law.programs.0", status: "active" }],
  },
  {
    id: "business",
    titleKey: "folders.business.title",
    summaryKey: "folders.business.summary",
    programs: [
      { nameKey: "folders.business.programs.0", status: "active" },
    ],
  },
  {
    id: "arts",
    titleKey: "folders.arts.title",
    summaryKey: "folders.arts.summary",
    programs: [{ nameKey: "folders.arts.programs.0", status: "coming" }],
  },
  {
    id: "technology",
    titleKey: "folders.technology.title",
    summaryKey: "folders.technology.summary",
    programs: [
      { nameKey: "folders.technology.programs.0", status: "active" },
      { nameKey: "folders.technology.programs.1", status: "coming" },
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
    titleKey: "hub.cards.blood.title",
    descriptionKey: "hub.cards.blood.description",
    dateKey: "hub.cards.blood.date",
    image: "/images/blood_donation.webp",
    tagKey: "hub.cards.blood.tag",
  },
  {
    id: "accreditation",
    titleKey: "hub.cards.accreditation.title",
    descriptionKey: "hub.cards.accreditation.description",
    image: "/images/accreditation_shield.webp",
    tagKey: "hub.cards.accreditation.tag",
  },
  {
    id: "book-fair",
    titleKey: "hub.cards.bookFair.title",
    descriptionKey: "hub.cards.bookFair.description",
    image: "/images/book_fair.webp",
    tagKey: "hub.cards.bookFair.tag",
  },
  {
    id: "robotics",
    titleKey: "hub.cards.robotics.title",
    descriptionKey: "hub.cards.robotics.description",
    image: "/images/robotics_init.webp",
    tagKey: "hub.cards.robotics.tag",
  },
  {
    id: "billiards",
    titleKey: "hub.cards.billiards.title",
    descriptionKey: "hub.cards.billiards.description",
    image: "/images/billiards_tournament.webp",
    tagKey: "hub.cards.billiards.tag",
  },
  {
    id: "football",
    titleKey: "hub.cards.football.title",
    descriptionKey: "hub.cards.football.description",
    images: footballSlides,
    isSlider: true,
    tagKey: "hub.cards.football.tag",
  },
  {
    id: "masters",
    titleKey: "hub.cards.masters.title",
    descriptionKey: "hub.cards.masters.description",
    image: "/images/master_degree.webp",
    tagKey: "hub.cards.masters.tag",
  },
];

const admissionSteps = [
  {
    id: "profile",
    titleKey: "admissions.steps.profile.title",
    descriptionKey: "admissions.steps.profile.description",
  },
  {
    id: "academic",
    titleKey: "admissions.steps.academic.title",
    descriptionKey: "admissions.steps.academic.description",
  },
  {
    id: "review",
    titleKey: "admissions.steps.review.title",
    descriptionKey: "admissions.steps.review.description",
  },
];

export default function Home() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const heroImageRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const statsSectionRef = useRef<HTMLElement | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statValueRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [activeFolderId, setActiveFolderId] = useState(academicFolders[0].id);
  const [footballIndex, setFootballIndex] = useState(0);
  const [canHover, setCanHover] = useState(true);
  const [navHidden, setNavHidden] = useState(false);
  const [navCompact, setNavCompact] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    nationalId: "",
    departmentRequested: "",
    studyType: "",
    sendToUniversityEmail: true,
    sendToStudentEmail: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submission, setSubmission] = useState<{
    applicationCode: string;
    fileName: string | null;
    documentBase64: string | null;
    submittedAt: string;
    warnings?: string[];
  } | null>(null);
  const [language, setLanguage] = useState(i18next.language || "ar");
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const activeFolder = useMemo(
    () => academicFolders.find((folder) => folder.id === activeFolderId),
    [activeFolderId]
  );

  const programsData = useMemo(
    () => (language === "ar" ? programsAr : programsEn),
    [language]
  );

  const numberLocale = language === "ar" ? "ar-LY" : "en-US";

  const folderProgramsMap: Record<string, string[]> = useMemo(
    () => ({
      languages: ["english"],
      law: ["law"],
      business: ["business"],
      technology: ["computer-science"],
      arts: []
    }),
    []
  );

  const activeProgramIds = folderProgramsMap[activeFolderId] ?? [];
  const activePrograms = (programsData as Program[]).filter((program) =>
    activeProgramIds.includes(program.id)
  );

  const overlayVariants = useMemo(
    () => ({
      rest: { opacity: canHover ? 0 : 1, y: canHover ? 18 : 0 },
      hover: { opacity: 1, y: 0 },
    }),
    [canHover]
  );

  const t = useMemo(() => (key: string) => i18next.t(key), [language]);
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "";

  const handleAdmissionChange = (
    field: keyof typeof formData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const profileComplete =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.nationalId.trim() !== "";
  const academicComplete =
    formData.departmentRequested.trim() !== "" &&
    formData.studyType.trim() !== "";

  const handleAdmissionSubmit = async () => {
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const response = await fetch(`${apiBase}/admissions/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          nationalId: formData.nationalId,
          departmentRequested: formData.departmentRequested,
          studyType: formData.studyType,
          sendToUniversityEmail: formData.sendToUniversityEmail,
          sendToStudentEmail: formData.sendToStudentEmail,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.message || "Submission failed.");
      }

      const payload = await response.json();
      setSubmission({
        applicationCode: payload.applicationCode,
        fileName: payload.fileName,
        documentBase64: payload.documentBase64,
        submittedAt: payload.submittedAt,
        warnings: payload.warnings,
      });
    } catch (error: any) {
      setSubmitError(error?.message || t("admissions.submitError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    if (!submission?.documentBase64) return;
    const binary = atob(submission.documentBase64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = submission.fileName || "admission.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const handleThemeToggle = async () => {
    const next = theme === "dark" ? "light" : "dark";
    const { applyTheme } = await import("@/lib/theme");
    applyTheme(next);
    setTheme(next);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next =
      stored === "dark" || stored === "light"
        ? stored
        : prefersDark
          ? "dark"
          : "light";
    setTheme(next);
    if (next === "dark") {
      import("@/lib/theme").then(({ applyTheme }) => applyTheme("dark"));
    } else {
      document.documentElement.dataset.theme = "light";
    }
  }, []);

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
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  useEffect(() => {
    statValueRefs.current = [];
    bubbleRefs.current = [];
  }, [isMobile]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!logoRef.current) return;
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile =
      window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
    if (prefersReduced || !isMobile) return;
    import("gsap").then(({ gsap }) => {
      if (!logoRef.current) return;
      gsap.fromTo(
        logoRef.current,
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
      );
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFootballIndex((prev) => (prev + 1) % footballSlides.length);
    }, 5200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!statsSectionRef.current) return;
    let context: { revert: () => void } | null = null;
    const target = statsSectionRef.current;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const gsapModule = await import("gsap");
        const scrollTriggerModule = await import("gsap/ScrollTrigger");
        const gsap = gsapModule.gsap;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger);
        context = gsap.context(() => {
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
            const targetValue = stats[index]?.value ?? 0;
            const counter = { val: 0 };
            gsap.to(counter, {
              val: targetValue,
              duration: 2.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
              onUpdate: () => {
                el.textContent = Math.floor(counter.val).toLocaleString(
                  numberLocale
                );
              },
            });
          });
        }, rootRef);
      },
      { rootMargin: "0px 0px -20% 0px" }
    );

    observer.observe(target);
    return () => {
      observer.disconnect();
      context?.revert();
    };
  }, [numberLocale, isMobile]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      statValueRefs.current.forEach((el, index) => {
        if (!el) return;
        const current = el.textContent?.trim() ?? "";
        if (current === "0" || current === "٠" || current === "?") {
          el.textContent = stats[index].value.toLocaleString(numberLocale);
        }
      });
    }, 1200);
    return () => clearTimeout(timeout);
  }, [numberLocale, isMobile]);

  useEffect(() => {
    if (!detailsOpen || !detailsRef.current) return;
    detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [detailsOpen, activeFolderId]);

  useEffect(() => {
    if (!detailsOpen || !detailsRef.current) return;
    const items = Array.from(
      detailsRef.current.querySelectorAll<HTMLElement>("[data-count]")
    );
    if (!items.length) return;
    const duration = 700;
    items.forEach((item) => {
      const raw = item.dataset.count ?? "0";
      const target = Number.parseInt(raw, 10);
      if (!Number.isFinite(target) || target <= 0) return;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.max(1, Math.round(target * progress));
        item.textContent = value.toLocaleString(numberLocale);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      item.textContent = "1";
      requestAnimationFrame(step);
    });
  }, [detailsOpen, activeFolderId, numberLocale]);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScroll;
      setNavCompact(current > 80);
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
          <div className="md:hidden">
            <div
              className={`nav-shell flex items-center justify-between rounded-[24px] px-4 transition-all duration-300 ${
                navCompact ? "py-2" : "py-3"
              }`}
            >
              <button
                type="button"
                aria-label={t("nav.menu")}
                onClick={() => setIsMenuOpen(true)}
                className="glow-hover flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)]/30 text-[var(--text-primary)]"
              >
                <Menu className="h-5 w-5" />
              </button>

              <div ref={logoRef} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 gold-ring">
                  <Image
                    src="/images/logo.webp"
                    alt={t("brand.logoAlt")}
                    width={28}
                    height={28}
                    loading="lazy"
                    sizes="40px"
                    quality={80}
                  />
                </div>
                <div className="text-center">
                  <p className="font-display text-sm">
                    {t("brand.name")}
                  </p>
                  <p className="text-[10px] text-muted">{t("brand.tagline")}</p>
                </div>
              </div>

              <div className="h-11 w-11" />
            </div>
          </div>

          <div className="hidden md:block">
            <div
              className={`nav-shell relative rounded-[32px] px-6 transition-all duration-300 ${
                navCompact ? "py-3" : "py-4"
              }`}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(197,160,89,0.2),_transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[linear-gradient(120deg,_rgba(0,31,63,0.08),_transparent_70%)]" />

              <div className="relative grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
                <nav className="flex flex-wrap items-center gap-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-primary)]">
                  <a className="hover:text-[var(--gold)]" href="#home">
                    {t("nav.home")}
                  </a>
                  <a className="hover:text-[var(--gold)]" href="#academics">
                    {t("nav.academics")}
                  </a>
                  <a className="hover:text-[var(--gold)]" href="#hub">
                    {t("nav.hub")}
                  </a>
                  <a className="hover:text-[var(--gold)]" href="#admissions">
                    {t("nav.admissions")}
                  </a>
                </nav>

                <div className="flex items-center justify-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/80 gold-ring">
                    <Image
                      src="/images/logo.webp"
                      alt={t("brand.logoAlt")}
                      width={32}
                      height={32}
                      loading="lazy"
                      sizes="48px"
                      quality={80}
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-display text-base sm:text-lg">
                      {t("brand.name")}
                    </p>
                    <p className="text-[11px] text-muted sm:text-xs">
                      {t("brand.tagline")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-end gap-3">
                  <label htmlFor="language-select" className="sr-only">
                    Language
                  </label>
                  <select
                    id="language-select"
                    value={language}
                    onChange={(event) => setLanguage(event.target.value)}
                    className="input-surface min-h-[44px] rounded-full px-3 py-2 text-xs font-medium text-[var(--text-primary)]"
                  >
                    {languageOptions.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.label}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={handleThemeToggle}
                    className="glow-hover min-h-[44px] rounded-full border border-[var(--gold)]/40 px-4 py-2 text-xs font-semibold text-[var(--text-primary)]"
                  >
                    {theme === "dark" ? t("toggle.light") : t("toggle.dark")}
                  </button>
                  <a
                    className="min-h-[44px] rounded-full border border-[var(--brand)]/20 bg-white/80 px-4 py-2 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--gold)] sm:text-sm"
                    href="#admissions"
                  >
                    {t("cta.portal")}
                  </a>
                  <a
                    className="min-h-[44px] rounded-full bg-[var(--brand)] px-4 py-2 text-xs font-medium text-white hover:bg-[#0b2a4a] sm:text-sm glow-gold"
                    href="#admissions"
                  >
                    {t("cta.login")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label={t("nav.close")}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black/40"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="glass-card absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col gap-6 rounded-l-[32px] p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 gold-ring">
                    <Image
                      src="/images/logo.webp"
                      alt={t("brand.logoAlt")}
                      width={28}
                      height={28}
                      loading="lazy"
                      sizes="40px"
                      quality={80}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      {t("brand.name")}
                    </p>
                    <p className="text-[11px] text-muted">
                      {t("brand.tagline")}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="glow-hover flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)]/30"
                >
                  <X className="h-5 w-5 text-[var(--text-primary)]" />
                </button>
              </div>

              <nav className="flex flex-col gap-3 text-sm font-medium">
                {[
                  { href: "#home", label: t("nav.home") },
                  { href: "#academics", label: t("nav.academics") },
                  { href: "#hub", label: t("nav.hub") },
                  { href: "#admissions", label: t("nav.admissions") },
                  { href: "#location", label: t("nav.location") },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="surface-card min-h-[44px] rounded-2xl px-4 py-3 text-[var(--text-primary)]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleThemeToggle}
                  className="glow-hover flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full border border-[var(--gold)]/40 px-4 text-sm font-semibold text-[var(--text-primary)]"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4" />
                      {t("toggle.light")}
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" />
                      {t("toggle.dark")}
                    </>
                  )}
                </button>
              </div>

              <div>
                <label
                  htmlFor="language-select-mobile"
                  className="mb-2 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  {t("nav.language")}
                </label>
                <select
                  id="language-select-mobile"
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                  className="input-surface min-h-[44px] w-full rounded-2xl px-3 py-2 text-sm font-medium text-[var(--text-primary)]"
                >
                  {languageOptions.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-3">
                <a
                  href="#admissions"
                  onClick={() => setIsMenuOpen(false)}
                  className="min-h-[44px] rounded-full border border-[var(--brand)]/20 bg-white/80 px-4 py-3 text-center text-sm font-semibold text-[var(--text-primary)]"
                >
                  {t("cta.portal")}
                </a>
                <a
                  href="#admissions"
                  onClick={() => setIsMenuOpen(false)}
                  className="min-h-[44px] rounded-full bg-[var(--brand)] px-4 py-3 text-center text-sm font-semibold text-white glow-gold"
                >
                  {t("cta.login")}
                </a>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>

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
                  alt={t("hero.imageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1100px"
                  priority
                  quality={60}
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
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[var(--gold)] px-6 py-3 text-xs font-semibold text-[var(--brand)] sm:text-sm"
                    >
                      {t("cta.apply")}
                    </a>
                    <a
                      href="#academics"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/50 px-6 py-3 text-xs font-semibold text-white hover:border-[var(--gold)] sm:text-sm"
                    >
                      {t("cta.explore")}
                    </a>
                  </div>
                </motion.div>

                <div className="mt-10 grid gap-3 text-xs text-white/80 sm:grid-cols-2 sm:text-sm md:grid-cols-3">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                    {t("hero.features.0")}
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                    {t("hero.features.1")}
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                    {t("hero.features.2")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-lazy py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-[28px] p-8 sm:p-10"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                {t("leadership.title")}
              </p>
              <blockquote className="mt-5 border-s-4 border-[var(--gold)] ps-5 text-lg leading-8 text-[var(--text-primary)] sm:text-xl">
                {t("leadership.quote")}
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-full border border-[var(--gold)]/40">
                  <Image
                    src="/images/vice_chancellor_v2.webp"
                    alt={t("leadership.photoAlt")}
                    width={56}
                    height={56}
                    loading="lazy"
                    sizes="56px"
                    quality={70}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    {t("leadership.name")}
                  </p>
                  <p className="text-xs text-muted">{t("leadership.role")}</p>
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
                {t("academicLeadership.title")}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                {t("academicLeadership.body")}
              </p>
              <div className="mt-6 space-y-3">
                <div className="surface-card rounded-2xl p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    {t("academicLeadership.cards.0.title")}
                  </p>
                  <p className="text-xs text-muted">
                    {t("academicLeadership.cards.0.description")}
                  </p>
                </div>
                <div className="surface-card rounded-2xl p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    {t("academicLeadership.cards.1.title")}
                  </p>
                  <p className="text-xs text-muted">
                    {t("academicLeadership.cards.1.description")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="academics" className="section-lazy py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                {t("sections.academics")}
              </p>
              <h2 className="font-display text-3xl text-[var(--text-primary)] sm:text-4xl">
                {t("academics.title")}
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                {t("academics.body")}
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
                      onClick={() => {
                        setActiveFolderId(folder.id);
                        setDetailsOpen((prev) =>
                          folder.id === activeFolderId ? !prev : true
                        );
                      }}
                      aria-expanded={detailsOpen && folder.id === activeFolderId}
                      aria-controls="academic-details"
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
                            {t(folder.titleKey)}
                          </h3>
                          <span className="text-[11px] font-semibold text-[var(--gold)] sm:text-xs">
                            {t("academics.view")}
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-muted sm:text-sm">
                          {t(folder.summaryKey)}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="glass-card rounded-[32px] p-6 sm:p-8">
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-2xl text-[var(--text-primary)]">
                    {activeFolder ? t(activeFolder.titleKey) : ""}
                  </h3>
                  <p className="text-sm text-muted">
                    {activeFolder ? t(activeFolder.summaryKey) : ""}
                  </p>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {activeFolder?.programs.map((program) => (
                    <div
                      key={program.nameKey}
                      className="surface-card relative overflow-hidden rounded-2xl p-4"
                    >
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        {t(program.nameKey)}
                      </p>
                      <p className="mt-2 text-xs text-muted">
                        {program.status === "coming"
                          ? t("academics.status.coming")
                          : t("academics.status.active")}
                      </p>
                      {program.status === "coming" ? (
                        <div className="coming-soon absolute inset-0 flex items-center justify-center backdrop-blur-sm">
                          <span className="rounded-full bg-[var(--gold)] px-4 py-2 text-xs font-semibold text-[var(--brand)]">
                            {t("academics.comingSoon")}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {detailsOpen ? (
              <motion.div
                id="academic-details"
                ref={detailsRef}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="mt-10 glass-card rounded-[32px] p-6 sm:p-8"
              >
                <div className="flex flex-col gap-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                    {t("sections.programs")}
                  </p>
                  <h3 className="font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
                    {t("programs.title")}
                  </h3>
                  <p className="text-sm text-muted">{t("programs.body")}</p>
                </div>

                {activePrograms.length ? (
                  <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    {activePrograms.map((program) => (
                      <article
                        key={program.id}
                        className="surface-card rounded-[28px] p-5 sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h4 className="font-display text-xl text-[var(--text-primary)]">
                            {program.title}
                          </h4>
                          {program.coordinator ? (
                            <span className="rounded-full border border-[var(--gold)]/40 px-3 py-1 text-[11px] text-muted">
                              {t("programs.coordinator")}: {program.coordinator}
                            </span>
                          ) : null}
                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                          <div className="glass-card rounded-2xl px-3 py-4">
                            <span
                              data-count={program.stats.courses}
                              className="block text-lg font-semibold text-[var(--text-primary)]"
                            >
                              0
                            </span>
                            <span className="text-muted">
                              {t("programs.courses")}
                            </span>
                          </div>
                          <div className="glass-card rounded-2xl px-3 py-4">
                            <span
                              data-count={program.stats.credits}
                              className="block text-lg font-semibold text-[var(--text-primary)]"
                            >
                              0
                            </span>
                            <span className="text-muted">
                              {t("programs.credits")}
                            </span>
                          </div>
                          <div className="glass-card rounded-2xl px-3 py-4">
                            <span
                              data-count={program.stats.semesters}
                              className="block text-lg font-semibold text-[var(--text-primary)]"
                            >
                              0
                            </span>
                            <span className="text-muted">
                              {t("programs.semesters")}
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 space-y-3 text-sm text-muted">
                          {program.highlights.map((item) => (
                            <p key={item}>• {item}</p>
                          ))}
                        </div>

                        <div className="mt-4 rounded-2xl border border-[var(--gold)]/20 bg-[rgba(197,160,89,0.12)] p-4 text-sm text-[var(--text-primary)]">
                          {program.tuition}
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {program.careers.map((career) => (
                            <span
                              key={career}
                              className="rounded-full border border-[var(--gold)]/40 px-3 py-1 text-xs text-[var(--text-primary)]"
                            >
                              {career}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 rounded-3xl border border-[var(--gold)]/25 bg-[rgba(197,160,89,0.12)] p-6 text-sm text-[var(--text-primary)]">
                    {t("academics.comingSoon")}
                  </div>
                )}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </section>
        <section
          id="stats"
          ref={statsSectionRef}
          className="section-lazy py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                {t("sections.stats")}
              </p>
              <h2 className="font-display text-3xl text-[var(--text-primary)] sm:text-4xl">
                {t("statsSection.title")}
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                {t("statsSection.body")}
              </p>
            </div>

            <div className="relative mt-10 min-h-[420px]">
              <div className="grid gap-4 sm:hidden">
                {stats.map((stat, index) => (
                  <div
                    key={stat.id}
                    className="bubble relative flex items-center justify-between rounded-3xl px-6 py-5"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                        {t(`stats.${stat.id}`)}
                      </p>
                      <span
                        ref={(el) => {
                          if (isMobile) {
                            statValueRefs.current[index] = el;
                          }
                        }}
                        className="relative z-10 mt-2 block text-2xl font-semibold text-[var(--text-primary)]"
                      >
                        0
                      </span>
                    </div>
                    <div className="rounded-full bg-[var(--gold)]/20 px-4 py-2 text-xs text-[var(--text-primary)]">
                      {t("statsSection.live")}
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
                        if (!isMobile) {
                          bubbleRefs.current[index] = el;
                        }
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
                          if (!isMobile) {
                            statValueRefs.current[index] = el;
                          }
                        }}
                        className="relative z-10 block text-2xl font-semibold text-[var(--text-primary)]"
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

        <section id="hub" className="section-lazy py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                {t("sections.hub")}
              </p>
              <h2 className="font-display text-3xl text-[var(--text-primary)] sm:text-4xl">
                {t("hub.title")}
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                {t("hub.body")}
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
                            alt={t(card.titleKey)}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 700px"
                            loading="lazy"
                            quality={55}
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
                              {t(card.tagKey)}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-display text-2xl">
                              {t(card.titleKey)}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-white/85">
                              {t(card.descriptionKey)}
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
                                className="min-h-[44px] rounded-full border border-white/40 px-4 py-2 text-xs"
                              >
                                {t("carousel.prev")}
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setFootballIndex(
                                    (prev) => (prev + 1) % card.images!.length
                                  )
                                }
                                className="min-h-[44px] rounded-full border border-white/40 px-4 py-2 text-xs"
                              >
                                {t("carousel.next")}
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
                          alt={t(card.titleKey)}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                          loading="lazy"
                          quality={55}
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(0,31,63,0.55),_rgba(0,31,63,0.1),_rgba(0,31,63,0.65))]" />
                      <div className="absolute bottom-4 right-4 left-4 text-white">
                        <span className="rounded-full bg-[var(--gold)]/25 px-3 py-1 text-[11px] font-semibold">
                          {t(card.tagKey)}
                        </span>
                        <h3 className="mt-3 font-display text-xl">
                          {t(card.titleKey)}
                        </h3>
                      </div>
                      <motion.div
                        variants={overlayVariants}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="absolute inset-0 flex flex-col justify-end bg-[rgba(0,31,63,0.86)] p-5 text-white"
                      >
                        <p className="text-sm leading-7 text-white/90">
                          {t(card.descriptionKey)}
                        </p>
                        {card.dateKey ? (
                          <span className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[var(--gold)]">
                            {t(card.dateKey)}
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
        <section id="admissions" className="section-lazy py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card rounded-[28px] p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                {t("sections.admissions")}
              </p>
              <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
                {t("admissions.title")}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                {t("admissions.body")}
              </p>

              <div
                className="mt-6 space-y-3"
                role="tablist"
                aria-label={t("admissions.tabsLabel")}
              >
                {admissionSteps.map((step, index) => {
                  const isActive = index === stepIndex;
                  return (
                    <motion.button
                      key={step.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`admission-panel-${step.id}`}
                      onClick={() => setStepIndex(index)}
                      className={`surface-card relative w-full overflow-hidden rounded-2xl p-4 text-start transition ${
                        isActive
                          ? "glow-gold ring-1 ring-[var(--gold)]/40"
                          : ""
                      }`}
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
                            {t(step.titleKey)}
                          </p>
                          <p className="text-xs text-muted">
                            {t(step.descriptionKey)}
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-[var(--gold)]">
                          0{index + 1}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="glass-card rounded-[28px] p-8 sm:p-10">
              <h3 className="font-display text-xl text-[var(--text-primary)] sm:text-2xl">
                {t("admissions.formTitle")}
              </h3>
              <p className="mt-3 text-sm text-muted">
                {t("admissions.stepLabel")} {stepIndex + 1} {t("admissions.of")}{" "}
                {admissionSteps.length}
              </p>

              <div className="mt-6 space-y-4">
                <AnimatePresence mode="wait">
                  {stepIndex === 0 ? (
                    <motion.div
                      key="profile"
                      id="admission-panel-profile"
                      role="tabpanel"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="grid gap-4"
                    >
                      <input
                        className="input-surface min-h-[44px] rounded-2xl px-4 py-3 text-sm"
                        placeholder={t("admissions.fields.fullName")}
                        value={formData.fullName}
                        onChange={(event) =>
                          handleAdmissionChange("fullName", event.target.value)
                        }
                      />
                      <input
                        className="input-surface min-h-[44px] rounded-2xl px-4 py-3 text-sm"
                        placeholder={t("admissions.fields.email")}
                        type="email"
                        value={formData.email}
                        onChange={(event) =>
                          handleAdmissionChange("email", event.target.value)
                        }
                      />
                      <input
                        className="input-surface min-h-[44px] rounded-2xl px-4 py-3 text-sm"
                        placeholder={t("admissions.fields.nationalId")}
                        value={formData.nationalId}
                        onChange={(event) =>
                          handleAdmissionChange("nationalId", event.target.value)
                        }
                      />
                    </motion.div>
                  ) : null}

                  {stepIndex === 1 ? (
                    <motion.div
                      key="academic"
                      id="admission-panel-academic"
                      role="tabpanel"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="grid gap-4"
                    >
                      <label className="text-xs font-semibold text-muted">
                        {t("admissions.fields.department")}
                        <select
                          className="input-surface mt-2 min-h-[44px] w-full rounded-2xl px-4 py-3 text-sm"
                          value={formData.departmentRequested}
                          onChange={(event) =>
                            handleAdmissionChange(
                              "departmentRequested",
                              event.target.value
                            )
                          }
                        >
                          <option value="">{t("admissions.fields.choose")}</option>
                          <option value={t("departments.languages")}>
                            {t("departments.languages")}
                          </option>
                          <option value={t("departments.law")}>
                            {t("departments.law")}
                          </option>
                          <option value={t("departments.business")}>
                            {t("departments.business")}
                          </option>
                          <option value={t("departments.art")}>
                            {t("departments.art")}
                          </option>
                          <option value={t("departments.computer")}>
                            {t("departments.computer")}
                          </option>
                          <option value={t("departments.cyber")}>
                            {t("departments.cyber")}
                          </option>
                        </select>
                      </label>

                      <label className="text-xs font-semibold text-muted">
                        {t("admissions.fields.studyType")}
                        <select
                          className="input-surface mt-2 min-h-[44px] w-full rounded-2xl px-4 py-3 text-sm"
                          value={formData.studyType}
                          onChange={(event) =>
                            handleAdmissionChange("studyType", event.target.value)
                          }
                        >
                          <option value="">{t("admissions.fields.choose")}</option>
                          <option value={t("admissions.studyTypes.morning")}>
                            {t("admissions.studyTypes.morning")}
                          </option>
                          <option value={t("admissions.studyTypes.evening")}>
                            {t("admissions.studyTypes.evening")}
                          </option>
                        </select>
                      </label>
                    </motion.div>
                  ) : null}

                  {stepIndex === 2 ? (
                    <motion.div
                      key="review"
                      id="admission-panel-review"
                      role="tabpanel"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="rounded-2xl border border-[var(--gold)]/20 bg-[rgba(197,160,89,0.12)] p-4 text-sm text-[var(--text-primary)]">
                        <p className="font-semibold">{t("admissions.reviewTitle")}</p>
                        <div className="mt-3 space-y-2 text-xs text-muted">
                          <div className="flex items-center justify-between">
                            <span>{t("admissions.fields.fullName")}</span>
                            <span className="text-[var(--text-primary)]">
                              {formData.fullName || "-"}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>{t("admissions.fields.nationalId")}</span>
                            <span className="text-[var(--text-primary)]">
                              {formData.nationalId || "-"}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>{t("admissions.fields.department")}</span>
                            <span className="text-[var(--text-primary)]">
                              {formData.departmentRequested || "-"}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>{t("admissions.fields.studyType")}</span>
                            <span className="text-[var(--text-primary)]">
                              {formData.studyType || "-"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-3 text-xs text-muted">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="h-4 w-4 accent-[var(--gold)]"
                            checked={formData.sendToUniversityEmail}
                            onChange={(event) =>
                              handleAdmissionChange(
                                "sendToUniversityEmail",
                                event.target.checked
                              )
                            }
                          />
                          {t("admissions.sendToUniversity")}
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="h-4 w-4 accent-[var(--gold)]"
                            checked={formData.sendToStudentEmail}
                            onChange={(event) =>
                              handleAdmissionChange(
                                "sendToStudentEmail",
                                event.target.checked
                              )
                            }
                          />
                          {t("admissions.sendToStudent")}
                        </label>
                      </div>

                      {submitError ? (
                        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-600">
                          {submitError}
                        </div>
                      ) : null}

                      {submission ? (
                        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-700">
                          <p className="font-semibold">
                            {t("admissions.submitSuccess")}
                          </p>
                          <p className="mt-2">
                            {t("admissions.applicationCode")}:{" "}
                            <strong>{submission.applicationCode}</strong>
                          </p>
                          {submission.documentBase64 ? (
                            <button
                              type="button"
                              onClick={handleDownload}
                              className="mt-3 min-h-[44px] rounded-full bg-[var(--brand)] px-4 py-2 text-xs font-semibold text-white"
                            >
                              {t("admissions.downloadDocument")}
                            </button>
                          ) : (
                            <p className="mt-3 text-[11px] text-emerald-700/80">
                              {t("admissions.pendingDocument")}
                            </p>
                          )}
                        </div>
                      ) : null}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setStepIndex((prev) => Math.max(prev - 1, 0))}
                  disabled={stepIndex === 0}
                  className="min-h-[44px] rounded-full border border-[var(--gold)]/30 px-5 py-2 text-xs font-semibold text-[var(--text-primary)]"
                >
                  {t("admissions.prev")}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (stepIndex < admissionSteps.length - 1) {
                      setStepIndex((prev) =>
                        Math.min(prev + 1, admissionSteps.length - 1)
                      );
                      return;
                    }
                    handleAdmissionSubmit();
                  }}
                  disabled={
                    isSubmitting ||
                    (stepIndex === 0 && !profileComplete) ||
                    (stepIndex === 1 && !academicComplete) ||
                    (stepIndex === admissionSteps.length - 1 &&
                      (!profileComplete || !academicComplete))
                  }
                  className="min-h-[44px] rounded-full bg-[var(--brand)] px-5 py-2 text-xs font-semibold text-white glow-gold disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {stepIndex === admissionSteps.length - 1
                    ? isSubmitting
                      ? t("admissions.submitting")
                      : t("admissions.submit")
                    : t("admissions.next")}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="location" className="section-lazy py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="glass-card flex flex-col gap-4 rounded-[32px] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:text-sm">
                {t("sections.location")}
              </p>
              <h2 className="font-display text-2xl text-[var(--text-primary)] sm:text-3xl">
                {t("location.title")}
              </h2>
              <p className="text-sm leading-7 text-muted">
                {t("location.body")}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--gold)]/20 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-xs text-muted sm:px-6 sm:text-sm md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <span className="block text-[var(--text-primary)]">
              {t("footer.copyright")}
            </span>
            <div className="text-xs text-muted">{t("footer.location")}</div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[var(--gold)]" />
              <span>{t("footer.phone")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[var(--gold)]" />
              <span>{t("footer.email")}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              className="glow-hover flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--text-primary)]"
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              className="glow-hover flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--text-primary)]"
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              className="glow-hover flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--text-primary)]"
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

