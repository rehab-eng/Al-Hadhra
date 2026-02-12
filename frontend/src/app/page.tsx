"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const academicTracks = [
  {
    id: "it",
    title: "كلية تقنية المعلومات",
    subtitle: "حاضنة الابتكار الرقمي والأمن السيبراني",
    summary:
      "تجمع بين علوم الحاسب والهندسة البرمجية والأمن السيبراني ضمن منظومة بحثية تطبيقية.",
    departments: [
      {
        id: "cs",
        name: "علوم الحاسب",
        focus: "خوارزميات، ذكاء اصطناعي، وهندسة نظم متقدمة.",
        courses: [
          { name: "هياكل البيانات", credits: 3, type: "متطلب قسم" },
          { name: "تصميم الخوارزميات", credits: 3, type: "متطلب قسم" },
          { name: "مبادئ الذكاء الاصطناعي", credits: 3, type: "متطلب كلية" },
        ],
      },
      {
        id: "cyber",
        name: "الأمن السيبراني",
        focus: "حماية البنى التحتية والبيانات الحيوية بمنهجية عالمية.",
        courses: [
          { name: "أمن الشبكات", credits: 3, type: "متطلب قسم" },
          { name: "تحليل الثغرات", credits: 3, type: "متطلب قسم" },
          { name: "تشريعات الأمن الرقمي", credits: 2, type: "متطلب جامعة" },
        ],
      },
      {
        id: "se",
        name: "هندسة البرمجيات",
        focus: "تصميم أنظمة موثوقة قابلة للتوسع المؤسسي.",
        courses: [
          { name: "إدارة المشاريع البرمجية", credits: 3, type: "متطلب قسم" },
          { name: "هندسة المتطلبات", credits: 3, type: "متطلب قسم" },
          { name: "معمارية البرمجيات", credits: 3, type: "متطلب كلية" },
        ],
      },
    ],
  },
  {
    id: "law",
    title: "كلية القانون",
    subtitle: "منظومة قانونية تواكب التحولات التشريعية",
    summary:
      "تركز على القانون العام والخاص مع مسارات حديثة للحوكمة والامتثال الرقمي.",
    departments: [
      {
        id: "public-law",
        name: "القانون العام",
        focus: "الإدارة العامة، الدساتير، والحوكمة المؤسسية.",
        courses: [
          { name: "القانون الدستوري", credits: 3, type: "متطلب قسم" },
          { name: "القانون الإداري", credits: 3, type: "متطلب قسم" },
          { name: "النظم السياسية", credits: 2, type: "متطلب كلية" },
        ],
      },
      {
        id: "private-law",
        name: "القانون الخاص",
        focus: "العقود، التجارة، والقانون المدني الحديث.",
        courses: [
          { name: "القانون المدني", credits: 3, type: "متطلب قسم" },
          { name: "القانون التجاري", credits: 3, type: "متطلب قسم" },
          { name: "قانون العمل", credits: 2, type: "متطلب كلية" },
        ],
      },
    ],
  },
  {
    id: "languages",
    title: "كلية اللغات",
    subtitle: "لغة عالمية بهوية ثقافية رصينة",
    summary:
      "برامج احترافية في اللغة الإنجليزية والترجمة الأكاديمية المتخصصة.",
    departments: [
      {
        id: "english",
        name: "اللغة الإنجليزية والترجمة",
        focus: "مهارات الترجمة الفورية والتحرير الأكاديمي المتقدم.",
        courses: [
          { name: "الكتابة الأكاديمية", credits: 3, type: "متطلب قسم" },
          { name: "الترجمة المتخصصة", credits: 3, type: "متطلب قسم" },
          { name: "تواصل مهني", credits: 2, type: "متطلب جامعة" },
        ],
      },
    ],
  },
  {
    id: "arts",
    title: "كلية الفنون والتصميم",
    subtitle: "بيئة بصرية ملهمة تعزز الهوية العمرانية",
    summary:
      "تخصص التصميم الداخلي مع تركيز على المعارض الرقمية واستوديوهات العرض.",
    departments: [
      {
        id: "interior",
        name: "التصميم الداخلي",
        focus: "تصميم المساحات الذكية والتجارب الحسية الراقية.",
        courses: [
          { name: "أساسيات التصميم", credits: 3, type: "متطلب قسم" },
          { name: "رسم معماري رقمي", credits: 3, type: "متطلب قسم" },
          { name: "استوديو مشاريع", credits: 4, type: "متطلب كلية" },
        ],
      },
    ],
  },
  {
    id: "economics",
    title: "كلية الاقتصاد والعلوم الإدارية",
    subtitle: "قيادات أعمال بقدرات تحليلية عصرية",
    summary:
      "مسارات إدارة الأعمال والمحاسبة مع تكامل تقني في التحليل المالي.",
    departments: [
      {
        id: "business",
        name: "إدارة الأعمال",
        focus: "إدارة استراتيجية، تسويق، وريادة أعمال.",
        courses: [
          { name: "إدارة استراتيجية", credits: 3, type: "متطلب قسم" },
          { name: "سلوك تنظيمي", credits: 3, type: "متطلب كلية" },
          { name: "ريادة الأعمال", credits: 2, type: "متطلب جامعة" },
        ],
      },
      {
        id: "accounting",
        name: "المحاسبة",
        focus: "تقارير مالية ومعايير دولية للحوكمة.",
        courses: [
          { name: "محاسبة مالية", credits: 3, type: "متطلب قسم" },
          { name: "محاسبة تكاليف", credits: 3, type: "متطلب قسم" },
          { name: "تدقيق ومراجعة", credits: 2, type: "متطلب كلية" },
        ],
      },
    ],
  },
];

const stats = [
  { label: "طالب نشط", value: 18540 },
  { label: "عضو هيئة تدريس", value: 860 },
  { label: "بحث منشور", value: 1260 },
];

export default function Home() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const heroImageRef = useRef<HTMLDivElement | null>(null);
  const statsSectionRef = useRef<HTMLElement | null>(null);
  const statValueRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [activeFacultyId, setActiveFacultyId] = useState(academicTracks[0].id);
  const [activeDepartmentId, setActiveDepartmentId] = useState(
    academicTracks[0].departments[0].id
  );
  const [navHidden, setNavHidden] = useState(false);

  const activeFaculty = useMemo(
    () => academicTracks.find((track) => track.id === activeFacultyId),
    [activeFacultyId]
  );

  const activeDepartment = useMemo(() => {
    const fallback = academicTracks[0].departments[0];
    if (!activeFaculty) return fallback;
    return (
      activeFaculty.departments.find(
        (dept) => dept.id === activeDepartmentId
      ) ?? activeFaculty.departments[0]
    );
  }, [activeFaculty, activeDepartmentId]);

  useEffect(() => {
    if (!activeFaculty) return;
    setActiveDepartmentId(activeFaculty.departments[0].id);
  }, [activeFaculty]);

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

      if (statsSectionRef.current) {
        statValueRefs.current.forEach((el, index) => {
          if (!el) return;
          const target = stats[index]?.value ?? 0;
          const counter = { val: 0 };
          gsap.to(counter, {
            val: target,
            duration: 2.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsSectionRef.current,
              start: "top 75%",
              once: true,
            },
            onUpdate: () => {
              el.textContent = Math.floor(counter.val).toLocaleString("ar-LY");
            },
          });
        });
      }
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
      className="relative min-h-screen overflow-hidden text-[var(--navy)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(197,160,89,0.15),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,_rgba(0,31,63,0.08),_transparent_60%)]" />

      <header
        className={`fixed top-0 z-50 w-full transition-transform duration-500 ${
          navHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <nav className="flex items-center gap-6 text-sm font-medium text-[var(--navy)]">
            <a className="hover:text-[var(--gold)]" href="#home">
              الرئيسية
            </a>
            <a className="hover:text-[var(--gold)]" href="#academics">
              الكليات
            </a>
            <a className="hover:text-[var(--gold)]" href="#admissions">
              القبول
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/80 gold-ring">
              <Image
                src="/images/logo.png"
                alt="شعار جامعة الحاضرة"
                width={32}
                height={32}
              />
            </div>
            <div className="text-center">
              <p className="font-display text-lg">جامعة الحاضرة</p>
              <p className="text-xs text-slate-600">بوابة عالمية</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              className="rounded-full border border-[var(--navy)]/20 bg-white/80 px-4 py-2 text-sm font-medium text-[var(--navy)] hover:border-[var(--gold)]"
              href="#portal"
            >
              بوابة الطالب
            </a>
            <a
              className="rounded-full bg-[var(--navy)] px-4 py-2 text-sm font-medium text-white hover:bg-[#0b2a4a]"
              href="#login"
            >
              تسجيل الدخول
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="pt-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/70 shadow-[0_40px_80px_rgba(0,31,63,0.18)]">
              <div
                ref={heroImageRef}
                className="absolute inset-0 will-change-transform"
              >
                <Image
                  src="/images/campus.jpg"
                  alt="حرم جامعة الحاضرة"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(0,31,63,0.86),_rgba(0,31,63,0.35),_rgba(0,31,63,0.92))]" />

              <div className="relative z-10 px-8 py-20 md:px-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="max-w-3xl"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-[var(--gold)]">
                    The Grand Blueprint
                  </p>
                  <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
                    بوابة جامعة الحاضرة العالمية
                    <span className="block text-[var(--gold)]">
                      تجربة تعليمية تفاعلية فاخرة
                    </span>
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-white/85">
                    منصة رقمية تُحاكي مواقع الجامعات العالمية بجودة سينمائية،
                    مدفوعة بالرسوم المتحركة، وبتجربة سلسة تُبرز هوية ليبيا
                    الأكاديمية الحديثة.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="#admissions"
                      className="rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--navy)]"
                    >
                      قدّم الآن
                    </a>
                    <a
                      href="#academics"
                      className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white hover:border-[var(--gold)]"
                    >
                      استكشف البرامج
                    </a>
                  </div>
                </motion.div>

                <div className="mt-12 grid gap-4 text-sm text-white/80 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                    بيئة أكاديمية رقمية متكاملة
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                    تصميم بصري ملكي مستوحى من الهوية الليبية
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                    تجربة استخدام ناعمة بتقنيات GSAP & Framer Motion
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-[32px] p-10"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--gold)]">
                كلمة رئيس الجامعة
              </p>
              <blockquote className="mt-6 border-r-4 border-[var(--gold)] pr-6 text-xl leading-9 text-slate-800">
                جامعة الحاضرة ليست مجرد صرح تعليمي، بل هي منارة لبناء الإنسان
                ونهضة الوطن عبر التكنولوجيا والابتكار.
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src="/images/signature.png"
                  alt="توقيع رئيس الجامعة"
                  width={140}
                  height={48}
                />
                <div>
                  <p className="font-semibold text-[var(--navy)]">
                    أ. عبد الرؤوف أبو جراد
                  </p>
                  <p className="text-sm text-slate-500">رئيس جامعة الحاضرة</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-[32px] p-10"
            >
              <h2 className="font-display text-3xl text-[var(--navy)]">
                القيادة الأكاديمية
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                نلتزم بتقديم تعليم عالمي قائم على البحث والتقنيات الحديثة، مع
                دعم كامل لمسارات القبول والتسجيل والبوابة الرقمية للطلبة.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-[var(--navy)]/10 bg-white/70 p-4">
                  <p className="text-sm font-semibold text-[var(--navy)]">
                    نظام قبول ذكي ومتدرج
                  </p>
                  <p className="text-xs text-slate-500">
                    نماذج إلكترونية مرتبطة مباشرة بقاعدة البيانات.
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--navy)]/10 bg-white/70 p-4">
                  <p className="text-sm font-semibold text-[var(--navy)]">
                    هوية بصرية عالمية
                  </p>
                  <p className="text-xs text-slate-500">
                    تجربة سينمائية، صور عالية الدقة، وحركة مبهرة.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="academics" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-3">
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--gold)]">
                المصفوفة الأكاديمية
              </p>
              <h2 className="font-display text-4xl text-[var(--navy)]">
                التخصصات والمواد
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-600">
                كل تخصص مصمم كبطاقة ذكية متصلة بقاعدة البيانات، مع عرض مباشر
                للمقررات والوحدات ونوع المتطلبات.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-4">
                {academicTracks.map((track) => {
                  const isActive = track.id === activeFacultyId;
                  return (
                    <motion.button
                      key={track.id}
                      whileHover={{ y: -4 }}
                      onClick={() => setActiveFacultyId(track.id)}
                      className={`flex w-full flex-col gap-3 rounded-3xl border p-6 text-right transition-all ${
                        isActive
                          ? "border-[var(--gold)] bg-white shadow-[0_25px_50px_rgba(0,31,63,0.15)]"
                          : "border-white/70 bg-white/70 hover:border-[var(--navy)]/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-2xl text-[var(--navy)]">
                          {track.title}
                        </h3>
                        <span className="text-xs font-semibold text-[var(--gold)]">
                          عرض التفاصيل
                        </span>
                      </div>
                      <p className="text-sm text-slate-500">{track.subtitle}</p>
                      <p className="text-xs leading-6 text-slate-600">
                        {track.summary}
                      </p>
                    </motion.button>
                  );
                })}
              </div>

              <div className="glass-card rounded-[32px] p-8">
                <div className="flex flex-wrap gap-3">
                  {activeFaculty?.departments.map((dept) => {
                    const isDeptActive = dept.id === activeDepartmentId;
                    return (
                      <button
                        key={dept.id}
                        onClick={() => setActiveDepartmentId(dept.id)}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                          isDeptActive
                            ? "bg-[var(--navy)] text-white"
                            : "border border-[var(--navy)]/20 text-[var(--navy)]"
                        }`}
                      >
                        {dept.name}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <h3 className="font-display text-2xl text-[var(--navy)]">
                    {activeDepartment?.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {activeDepartment?.focus}
                  </p>
                </div>

                <div className="mt-6 rounded-2xl border border-[var(--navy)]/10 bg-white/70 p-4">
                  <div className="grid grid-cols-[2fr_0.8fr_1fr] gap-3 border-b border-[var(--navy)]/10 pb-3 text-xs font-semibold text-slate-500">
                    <span>اسم المادة</span>
                    <span>الوحدات</span>
                    <span>نوع المتطلب</span>
                  </div>
                  <div className="mt-3 space-y-3 text-sm">
                    {activeDepartment?.courses.map((course) => (
                      <div
                        key={course.name}
                        className="grid grid-cols-[2fr_0.8fr_1fr] items-center gap-3"
                      >
                        <span className="font-medium text-[var(--navy)]">
                          {course.name}
                        </span>
                        <span className="rounded-full bg-[var(--gold)]/15 px-3 py-1 text-center text-xs font-semibold text-[var(--navy)]">
                          {course.credits}
                        </span>
                        <span className="text-xs text-slate-600">
                          {course.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stats" ref={statsSectionRef} className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="glass-card rounded-[36px] p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[var(--gold)]">
                    الإحصائيات الحية
                  </p>
                  <h2 className="font-display text-3xl text-[var(--navy)]">
                    مؤشرات عالمية متجددة
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-7 text-slate-600">
                  عدادات رقمية متحركة تعكس النمو الأكاديمي والبحثي للجامعة.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-[var(--navy)]/10 bg-white/70 p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      {stat.label}
                    </p>
                    <span
                      ref={(el) => {
                        statValueRefs.current[index] = el;
                      }}
                      className="mt-3 block font-display text-3xl text-[var(--navy)]"
                    >
                      0
                    </span>
                    <p className="mt-2 text-xs text-slate-500">
                      تحديث مباشر من بوابة البيانات.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="admissions" className="py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card rounded-[32px] p-10">
              <h2 className="font-display text-3xl text-[var(--navy)]">
                بوابة القبول والتسجيل
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                نظام قبول إلكتروني متكامل يربط الطلبات مباشرة بقاعدة البيانات،
                مع خطوات واضحة للمقابلات والتحقق من الملفات.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white">
                  فتح نموذج التقديم
                </button>
                <button className="rounded-full border border-[var(--navy)]/20 px-6 py-3 text-sm font-semibold text-[var(--navy)]">
                  دليل القبول
                </button>
              </div>
            </div>

            <div className="glass-card rounded-[32px] p-10" id="portal">
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--gold)]">
                بوابة الطالب
              </p>
              <h3 className="font-display text-2xl text-[var(--navy)]">
                وصول سريع وآمن
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                استعراض الجدول الدراسي، النتائج، والإعلانات الأكاديمية من لوحة
                تحكم موحدة.
              </p>
              <div className="mt-6 grid gap-3" id="login">
                <button className="rounded-2xl bg-white/80 px-4 py-3 text-sm font-semibold text-[var(--navy)]">
                  تسجيل دخول الطالب
                </button>
                <button className="rounded-2xl border border-[var(--navy)]/20 px-4 py-3 text-sm font-semibold text-[var(--navy)]">
                  دخول الموظفين وأعضاء هيئة التدريس
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--navy)]/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>جامعة الحاضرة © 2026</span>
          <span>الهوية البصرية الملكية | Deep Navy & Matte Gold</span>
        </div>
      </footer>
    </div>
  );
}
