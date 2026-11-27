import { CoverageExplorer } from '../components/CoverageExplorer';
import {SiteLink} from '../components/SiteLink';
import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Flame,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { PROJECTS } from '../data/projects';
import {
  CountUp,
  MepSchematicBackdrop,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from '../components/MotionPrimitives';
import { PARTNER_LOGOS } from '../components/PartnerLogos';
import {
  CraneInfrastructureIcon,
  FoundedAwardIcon,
  ProjectsSkylineIcon,
  RegionalPresenceIcon,
  TeamHelmetIcon,
} from '../components/KpiIcons';

const HERO_SLIDES = [
  {
    image: './assets/redowl/obj_1333.jpg',
    projectId: 'neom-project',
    title: { ar: 'مشروع نيوم — طلمبة حريق 1000 GPM', en: 'NEOM — 1000 GPM UL/FM Fire Pump System' },
    meta: { ar: 'المملكة العربية السعودية · استشاري Bechtel', en: 'Saudi Arabia · Bechtel (USA)' },
  },
  {
    image: './assets/redowl/obj_799.jpg',
    projectId: 'middor-mall',
    title: { ar: 'مول ميدور — غرفة طلمبات الحريق', en: 'Middor Mall — Fire Pump Room' },
    meta: { ar: 'التجمع الخامس · القاهرة الجديدة', en: 'Fifth Settlement · New Cairo' },
  },
  {
    image: './assets/redowl/obj_898.jpg',
    projectId: 'ain-shams-university',
    title: { ar: 'جامعة عين شمس الأهلية — أعمال MEP', en: 'Ain Shams National University — MEP Racks' },
    meta: { ar: 'الهيئة الهندسية للقوات المسلحة', en: 'Armed Forces Corps of Engineers' },
  },
  {
    image: './assets/redowl/obj_1145.jpg',
    projectId: 'alyoum-food-factory',
    title: { ar: 'مصنع اليوم — لوحات الجهد والقوى', en: 'Alyoum Food Factory — Power & Switchgear' },
    meta: { ar: 'العاشر من رمضان · أعمال كهروميكانيكية كاملة', en: '10th of Ramadan · Full Turnkey MEP' },
  },
  {
    image: './assets/redowl/obj_1062.jpg',
    projectId: 'economic-court',
    title: { ar: 'المحكمة الاقتصادية — التكييف والحريق', en: 'Economic Court — HVAC & Fire Systems' },
    meta: { ar: 'حي العدالة · العاصمة الإدارية الجديدة', en: 'Justice District · New Administrative Capital' },
  },
];

export const HomePage: React.FC = () => {
  const { t, lang, isRtl, navigate } = useApp();
  const [heroIdx, setHeroIdx] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const [carouselOffset, setCarouselOffset] = useState(0);

  const featuredProjects = PROJECTS.slice(0, 8);
  const visibleCount = 3;
  const maxOffset = Math.max(0, featuredProjects.length - visibleCount);

  const ForwardArrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div>
      {/* 1. Kinetic Split Hero Section */}
      <section className="relative overflow-hidden border-b border-[#E2E4E9] bg-[#191B1F] text-white">
        <div className="bg-engineering-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <MepSchematicBackdrop />

        <div className="relative mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="grid grid-cols-1 items-stretch gap-x-10 gap-y-5 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-10">
            {/* Hero Copy Column */}
            <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
                <p className="text-xs font-bold tracking-wider text-[#D11A22] sm:text-sm">
                  {t.hero.kicker}
                </p>

                <h1 className="font-display mt-4 text-3xl leading-[1.18] font-bold text-white text-balance sm:text-4xl lg:text-[clamp(2.25rem,3.6vw,3.45rem)]">
                  {t.hero.title}
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#C5C9D3]">
                  {t.hero.subtitle}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => navigate('contact')}
                    className="inline-flex min-h-[46px] items-center gap-2 rounded-md bg-[#D11A22] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#B0141B]"
                  >
                    <span>{t.hero.primaryCta}</span>
                    <ForwardArrow className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate('projects')}
                    className="inline-flex min-h-[46px] items-center gap-2 rounded-md border border-[#3B404B] bg-[#25282E]/80 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-[#2F333B]"
                  >
                    <span>{t.hero.secondaryCta}</span>
                  </button>
                </div>
              </div>


            {/* Hero Animated Image Carousel Column (stretched equal height) */}
            <div
              className="relative min-h-[340px] overflow-hidden rounded-xl border border-[#2E323B] bg-[#121417] lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:min-h-[480px]"
              onPointerEnter={event => { if (event.pointerType === 'mouse') setHeroPaused(true); }}
              onPointerLeave={() => setHeroPaused(false)}
            >
              {HERO_SLIDES.map((slide, index) => (
                <img
                  key={slide.projectId}
                  src={slide.image}
                  alt={index === heroIdx ? slide.title[lang] : ''}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  referrerPolicy="no-referrer"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 motion-reduce:transition-none ${index === heroIdx ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Caption Overlay & Direct Jump */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-5 sm:p-6">
                <SiteLink page="projects" detail={HERO_SLIDES[heroIdx].projectId}
                  className="text-start transition-opacity hover:opacity-90"
                >
                  <p className="text-xs font-medium text-[#D11A22]">
                    {HERO_SLIDES[heroIdx].meta[lang]}
                  </p>
                  <p className="mt-1 text-base font-bold text-white sm:text-lg">
                    {HERO_SLIDES[heroIdx].title[lang]}
                  </p>
                </SiteLink>

                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setHeroIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/55 text-white transition-colors hover:border-[#D11A22] hover:bg-[#D11A22]"
                    aria-label="Previous slide"
                  >
                    {isRtl ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroIdx((prev) => (prev + 1) % HERO_SLIDES.length)}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/55 text-white transition-colors hover:border-[#D11A22] hover:bg-[#D11A22]"
                    aria-label="Next slide"
                  >
                    {isRtl ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
              {/* Hero Slide Selector Controls */}
              <div className="lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:self-end lg:border-t lg:border-[#2E323B] lg:pt-5">
                <div className="flex items-center justify-between text-xs text-[#8C93A0]">
                  <span>{t.hero.slideLabel}</span>
                  <span className="tabular-nums font-semibold text-white">
                    0{heroIdx + 1} / 0{HERO_SLIDES.length}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {HERO_SLIDES.map((s, idx) => (
                    <button
                      key={s.projectId}
                      type="button"
                      onClick={() => setHeroIdx(idx)}
                      className="group flex flex-col gap-1.5 text-start focus-visible:outline-2 focus-visible:outline-[#D11A22]"
                      aria-label={s.title[lang]}
                      aria-pressed={idx === heroIdx}
                    >
                      <div className="h-1 w-full overflow-hidden rounded-full bg-[#2E323B]">
                        {idx === heroIdx && (
                          <div className="hero-slide-progress h-full w-full bg-[#D11A22]"
                            style={{ animationPlayState: heroPaused ? 'paused' : 'running' }}
                            onAnimationEnd={() => setHeroIdx((idx + 1) % HERO_SLIDES.length)}
                          />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* 2. Full-Width Quantitative Proof KPI Strip */}
      <section className="border-b border-[#DFE2E7] bg-[#EBECEE] py-12 lg:py-14">
        <StaggerGroup className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-6 gap-y-10 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-5 lg:px-12">
          {[
            {
              val: t.kpis.foundedValue,
              label: t.kpis.foundedLabel,
              Icon: FoundedAwardIcon,
            },
            {
              val: t.kpis.teamValue,
              label: t.kpis.teamLabel,
              Icon: TeamHelmetIcon,
            },
            {
              val: t.kpis.projectsValue,
              label: t.kpis.projectsLabel,
              Icon: ProjectsSkylineIcon,
            },
            {
              val: t.kpis.stationsValue,
              label: t.kpis.stationsLabel,
              Icon: CraneInfrastructureIcon,
            },
            {
              val: t.kpis.countriesValue,
              label: t.kpis.countriesLabel,
              Icon: RegionalPresenceIcon,
            },
          ].map((kpi, idx) => {
            const IconComp = kpi.Icon;
            return (
              <StaggerItem
                key={idx}
                className="group flex flex-col items-center text-center last:col-span-2 sm:last:col-span-1"
              >
                <div className="mb-3.5 text-[#7B808A] transition-all duration-200 group-hover:-translate-y-1 group-hover:text-[#D11A22]">
                  <IconComp className="h-12 w-12" />
                </div>
                <div className="font-display text-3xl font-semibold tracking-tight text-[#4D525C] transition-colors duration-200 group-hover:text-[#D11A22] sm:text-4xl">
                  <CountUp value={kpi.val} />
                </div>
                <p className="mt-2 max-w-[190px] text-xs font-medium leading-relaxed text-[#555A64] sm:text-sm">
                  {kpi.label}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      {/* 3. Core Capabilities Asymmetric Bento Grid */}
      <section className="bg-[#F4F5F7] py-16 lg:py-22">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-bold tracking-wider text-[#D11A22]">
                  {t.home.scopeKicker}
                </p>
                <h2 className="font-display mt-2 text-2xl font-bold text-[#191B1F] text-balance sm:text-3xl">
                  {t.home.scopeTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#4B505B] sm:text-base">
                  {t.home.scopeDesc}
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate('services')}
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-md border border-[#191B1F] bg-white px-5 py-2.5 text-sm font-semibold text-[#191B1F] transition-colors hover:bg-[#191B1F] hover:text-white md:self-auto"
              >
                <span>{t.home.exploreServices}</span>
                <ForwardArrow className="h-4 w-4" />
              </button>
            </div>
          </Reveal>

          <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* Marquee Mechanical Card (col-span-7) */}
            <StaggerItem className="lg:col-span-7">
              <div
                onClick={() => navigate('services')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate('services')}
                className="group grid h-full cursor-pointer grid-cols-1 overflow-hidden rounded-xl border border-[#E2E4E9] bg-white transition-transform duration-200 hover:-translate-y-0.5 sm:grid-cols-12"
              >
                <div className="flex flex-col justify-between p-6 sm:col-span-7 sm:p-8">
                  <div>
                    <div className="flex items-center gap-2.5 text-xs font-bold text-[#D11A22]">
                      <Flame className="h-4 w-4" />
                      <span>01</span>
                    </div>
                    <h3 className="font-display mt-3 text-xl font-bold text-[#191B1F]">
                      {t.services.mechanicalTitle}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-[#4B505B]">
                      {t.services.mechanicalItems.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D11A22]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#191B1F] group-hover:text-[#D11A22]">
                    <span>{t.home.exploreServices}</span>
                    <ForwardArrow className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="relative min-h-[220px] overflow-hidden bg-[#191B1F] sm:col-span-5">
                  <img
                    src="./assets/redowl/obj_281.jpg"
                    alt={t.services.mechanicalTitle}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </StaggerItem>

            {/* Electrical Card (col-span-5) */}
            <StaggerItem className="lg:col-span-5">
              <div
                onClick={() => navigate('services')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate('services')}
                className="group flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-[#E2E4E9] bg-[#191B1F] p-6 text-white transition-transform duration-200 hover:-translate-y-0.5 sm:p-8"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-[#D11A22]">
                    <Zap className="h-4 w-4" />
                    <span>02</span>
                  </div>
                  <h3 className="font-display mt-3 text-xl font-bold text-white">
                    {t.services.electricalTitle}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-[#B8BDC7]">
                    {t.services.electricalItems.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D11A22]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[#2E323B] pt-4 text-xs font-semibold text-white">
                  <span>{t.services.tabs[2].title}</span>
                  <ForwardArrow className="h-4 w-4 text-[#D11A22]" />
                </div>
              </div>
            </StaggerItem>

            {/* Low Current + Testing Row */}
            <StaggerItem className="lg:col-span-5">
              <div
                onClick={() => navigate('services')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate('services')}
                className="group flex h-full cursor-pointer flex-col justify-between rounded-xl border border-[#E2E4E9] bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5 sm:p-8"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-[#D11A22]">
                    <Wrench className="h-4 w-4" />
                    <span>03</span>
                  </div>
                  <h3 className="font-display mt-3 text-xl font-bold text-[#191B1F]">
                    {t.services.tabs[3].title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#4B505B]">
                    {t.services.tabs[3].shortDesc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#6E7482]">
                  <span>UL/FM Commissioning</span>
                  <span aria-hidden="true">·</span>
                  <span>Hydrostatic & TAB</span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem className="lg:col-span-7">
              <div
                onClick={() => navigate('quality')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate('quality')}
                className="group flex h-full cursor-pointer flex-col justify-between rounded-xl border border-[#E2E4E9] bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5 sm:p-8"
              >
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                  <div>
                    <div className="flex items-center gap-2.5 text-xs font-bold text-[#D11A22]">
                      <ShieldCheck className="h-4 w-4" />
                      <span>04</span>
                    </div>
                    <h3 className="font-display mt-3 text-xl font-bold text-[#191B1F]">
                      {t.qualityPage.certsTitle}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#4B505B]">
                      {t.qualityPage.pageDesc}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-2 rounded-md bg-[#F4F5F7] px-4 py-2.5 text-xs font-bold text-[#191B1F] group-hover:bg-[#D11A22] group-hover:text-white transition-colors">
                      <span>{t.nav.quality}</span>
                      <ForwardArrow className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[#E2E4E9] pt-4 text-xs font-semibold text-[#4B505B] tabular-nums">
                  <span>ISO 9001:2015</span>
                  <span aria-hidden="true">·</span>
                  <span>ISO 14001:2015</span>
                  <span aria-hidden="true">·</span>
                  <span>ISO 45001:2018</span>
                  <span aria-hidden="true">·</span>
                  <span>Civil Defense & NFPA</span>
                </div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* 4. Featured Landmark Projects Carousel */}
      <section className="border-t border-[#E2E4E9] bg-white py-16 lg:py-22">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-bold tracking-wider text-[#D11A22]">
                  {t.home.featuredKicker}
                </p>
                <h2 className="font-display mt-2 text-2xl font-bold text-[#191B1F] text-balance sm:text-3xl">
                  {t.home.featuredTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#4B505B] sm:text-base">
                  {t.home.featuredDesc}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-2 lg:flex">
                  <button
                    type="button"
                    onClick={() => setCarouselOffset((o) => Math.max(0, o - 1))}
                    disabled={carouselOffset === 0}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E2E4E9] text-[#191B1F] transition-colors hover:border-[#191B1F] disabled:opacity-35"
                    aria-label="Previous projects"
                  >
                    {isRtl ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCarouselOffset((o) => Math.min(maxOffset, o + 1))}
                    disabled={carouselOffset >= maxOffset}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E2E4E9] text-[#191B1F] transition-colors hover:border-[#191B1F] disabled:opacity-35"
                    aria-label="Next projects"
                  >
                    {isRtl ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('projects')}
                  className="inline-flex items-center gap-2 rounded-md bg-[#191B1F] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#D11A22]"
                >
                  <span>{t.home.viewAllProjects}</span>
                  <ForwardArrow className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Desktop Interactive Slider Grid / Mobile Scroll */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.slice(carouselOffset, carouselOffset + 3).map((proj) => (
              <motion.article
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}

                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[#E2E4E9] bg-white transition-shadow duration-200 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#191B1F]">
                  <img
                    src={proj.coverImage}
                    alt={proj.name[lang]}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 start-4 flex items-center gap-2 text-xs font-semibold text-white">
                    <span className="tabular-nums text-[#FF6B70]">{proj.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{proj.countryLabel[lang]}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-[#6E7482]">
                      <span>{proj.sector[lang]}</span>
                      <span aria-hidden="true">·</span>
                      <span
                        className={
                          proj.status === 'in-progress'
                            ? 'font-semibold text-[#D11A22]'
                            : 'text-[#4B505B]'
                        }
                      >
                        {proj.status === 'in-progress'
                          ? t.projectModal.statusInProgress
                          : t.projectModal.statusCompleted}
                      </span>
                    </div>

                    <h3 className="font-display mt-2 text-lg font-bold text-[#191B1F] group-hover:text-[#D11A22] transition-colors">
                      <SiteLink page="projects" detail={proj.id} className="after:absolute after:inset-0 focus-visible:after:outline">{proj.name[lang]}</SiteLink>
                    </h3>

                    {proj.highlightMetric && (
                      <p className="mt-2 text-sm text-[#4B505B]">{proj.highlightMetric[lang]}</p>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#E2E4E9] pt-4 text-xs font-semibold text-[#191B1F]">
                    <span>{t.projectsPage.viewDetails}</span>
                    <span className="tabular-nums text-[#6E7482]">
                      {proj.images.length} {t.projectsPage.photosCount}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Geographic Coverage Explorer (Charcoal Contrast Section) */}
      <section className="relative overflow-hidden bg-[#191B1F] py-16 text-white lg:py-22">
        <MepSchematicBackdrop />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-wider text-[#D11A22]">
                {t.home.coverageKicker}
              </p>
              <h2 className="font-display mt-2 text-2xl font-bold text-white text-balance sm:text-3xl">
                {t.home.coverageTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#B8BDC7] sm:text-base">
                {t.home.coverageDesc}
              </p>
            </div>
          </Reveal>

          <CoverageExplorer />
        </div>
      </section>

      {/* 6. Clients & Partners Kinetic Marquee */}
      <section className="border-b border-[#E2E4E9] bg-[#F4F5F7] py-12 overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold tracking-wider text-[#D11A22]">
            {t.home.trustKicker}
          </p>
          <h2 className="font-display mt-1 text-lg font-bold text-[#191B1F] sm:text-xl">
            {t.home.trustTitle}
          </h2>
        </div>

        <div className="marquee-wrapper mt-7 overflow-hidden">
          <div
            className={`flex w-max gap-4 ${
              isRtl ? 'animate-marquee-rtl' : 'animate-marquee-ltr'
            }`}
          >
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                title={partner.name}
                dir="ltr"
                className="flex shrink-0 cursor-pointer items-center rounded-xl border border-[#E2E4E9] bg-white px-6 py-4 grayscale opacity-70 transition-all duration-200 hover:border-[#D11A22]/35 hover:grayscale-0 hover:opacity-100 hover:shadow-md"
              >
                {partner.renderLogo()}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final Conversion CTA Band */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 rounded-xl border border-[#E2E4E9] bg-[#F4F5F7] p-8 sm:p-12 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl font-bold text-[#191B1F] text-balance sm:text-3xl">
                  {t.home.ctaBandTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#4B505B] sm:text-base">
                  {t.home.ctaBandDesc}
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate('contact')}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#D11A22] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#B0141B]"
              >
                <span>{t.home.ctaBandButton}</span>
                <ForwardArrow className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
