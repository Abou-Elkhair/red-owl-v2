import React from 'react';
import { Award, Eye, HardHat, Handshake, Lightbulb, MapPin, ShieldCheck, Target } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CountUp, Reveal, StaggerGroup, StaggerItem } from '../components/MotionPrimitives';

export const AboutPage: React.FC = () => {
  const { t, lang, navigate } = useApp();

  const valueIcons = [Award, Handshake, HardHat, Lightbulb, ShieldCheck];

  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-[#E2E4E9] bg-[#F4F5F7] py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold tracking-wider text-[#D11A22]">{t.about.pageKicker}</p>
          <h1 className="font-display mt-2 max-w-3xl text-3xl font-bold text-[#191B1F] text-balance sm:text-4xl">
            {t.about.pageTitle}
          </h1>
        </div>
      </section>

      {/* Red Owl at a Glance (Page 3) */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
            <div className="overflow-hidden rounded-xl border border-[#E2E4E9] bg-[#191B1F] lg:col-span-5">
              <img
                src="./assets/redowl/obj_95.jpg"
                alt={lang === 'ar' ? 'غرفة مضخات حريق red-owl' : 'Red Owl Construction Fire Pump Room'}
                referrerPolicy="no-referrer"
                className="h-full max-h-[460px] w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center lg:col-span-7">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-[#191B1F] sm:text-3xl">
                  {t.about.glanceTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4B505B]">{t.about.glanceP1}</p>
                <p className="mt-3 text-base leading-relaxed text-[#4B505B]">{t.about.glanceP2}</p>

                <div className="mt-8 grid grid-cols-3 gap-6 border-t border-[#E2E4E9] pt-8">
                  <div>
                    <div className="font-display text-3xl font-bold text-[#D11A22] sm:text-4xl">
                      <CountUp value={t.kpis.foundedValue} />
                    </div>
                    <p className="mt-1 text-xs font-semibold text-[#6E7482] sm:text-sm">
                      {t.kpis.foundedLabel}
                    </p>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-[#D11A22] sm:text-4xl">
                      <CountUp value={t.kpis.teamValue} />
                    </div>
                    <p className="mt-1 text-xs font-semibold text-[#6E7482] sm:text-sm">
                      {t.kpis.teamLabel}
                    </p>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-[#D11A22] sm:text-4xl">
                      <CountUp value={t.kpis.projectsValue} />
                    </div>
                    <p className="mt-1 text-xs font-semibold text-[#6E7482] sm:text-sm">
                      {t.kpis.projectsLabel}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Message from the Chairman (Page 4) */}
      <section className="border-y border-[#E2E4E9] bg-[#F4F5F7] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="overflow-hidden rounded-xl border border-[#E2E4E9] bg-white">
                  <img
                    src="./assets/redowl/obj_121.jpg"
                    alt={t.about.chairmanName}
                    referrerPolicy="no-referrer"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#191B1F]">{t.about.chairmanName}</h3>
                    <p className="mt-0.5 text-xs font-semibold text-[#D11A22]">
                      {t.about.chairmanRole}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <p className="text-xs font-bold tracking-wider text-[#D11A22]">
                  {t.about.chairmanKicker}
                </p>
                <h2 className="font-display mt-2 text-2xl font-bold text-[#191B1F] sm:text-3xl">
                  {t.about.chairmanTitle}
                </h2>
                <div className="mt-5 font-display text-4xl leading-none text-[#D11A22]" aria-hidden="true">
                  “
                </div>
                <blockquote className="mt-2 space-y-4 text-base leading-relaxed text-[#191B1F] sm:text-lg">
                  <p className="italic">{t.about.chairmanQuote1}</p>
                  <p className="italic text-[#4B505B]">{t.about.chairmanQuote2}</p>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission (Page 5 Hybrid White/Charcoal) */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-xl border border-[#E2E4E9] bg-[#F4F5F7] p-8 sm:p-10">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D11A22] text-white">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h2 className="font-display mt-5 text-2xl font-bold text-[#191B1F]">
                    {t.about.visionTitle}
                  </h2>
                  <ul className="mt-5 space-y-4 text-sm leading-relaxed text-[#4B505B] sm:text-base">
                    {t.about.visionPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D11A22]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-[#2E323B] bg-[#191B1F] p-8 text-white sm:p-10">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D11A22] text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <h2 className="font-display mt-5 text-2xl font-bold text-white">
                    {t.about.missionTitle}
                  </h2>
                  <ul className="mt-5 space-y-4 text-sm leading-relaxed text-[#C5C9D3] sm:text-base">
                    {t.about.missionPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D11A22]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values (Page 6) */}
      <section className="border-t border-[#E2E4E9] bg-[#F4F5F7] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[#191B1F] sm:text-3xl">
              {t.about.valuesTitle}
            </h2>
          </Reveal>

          <StaggerGroup className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {t.about.values.map((val, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <StaggerItem key={val.num}>
                  <div className="flex h-full flex-col rounded-xl border border-[#E2E4E9] bg-white p-6 transition-transform duration-200 hover:-translate-y-1">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D11A22] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="mt-5 text-xs font-bold text-[#D11A22] tabular-nums">
                      {val.num}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-[#191B1F]">{val.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#4B505B]">{val.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Regional Coverage Grid (Page 12) */}
      <section className="border-t border-[#E2E4E9] bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-display text-2xl font-bold text-[#191B1F] sm:text-3xl">
              {t.about.coverageTitle}
            </h2>
            <button
              type="button"
              onClick={() => navigate('projects')}
              className="text-sm font-semibold text-[#D11A22] hover:underline"
            >
              {lang === 'ar' ? 'استعراض المشاريع التفصيلية' : 'Browse All Projects'}
            </button>
          </div>

          <StaggerGroup className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.about.regions.map((region) => (
              <StaggerItem key={region.name}>
                <div
                  className={`flex h-full flex-col rounded-xl border p-6 ${
                    region.dark
                      ? 'border-[#2E323B] bg-[#191B1F] text-white'
                      : 'border-[#E2E4E9] bg-[#F4F5F7] text-[#191B1F]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin
                      className={`h-4 w-4 shrink-0 ${
                        region.dark ? 'text-white' : 'text-[#D11A22]'
                      }`}
                    />
                    <h3
                      className={`text-sm font-bold ${
                        region.dark ? 'text-white' : 'text-[#D11A22]'
                      }`}
                    >
                      {region.name}
                    </h3>
                  </div>
                  <ul
                    className={`mt-4 space-y-2.5 text-sm leading-relaxed ${
                      region.dark ? 'text-[#C5C9D3]' : 'text-[#4B505B]'
                    }`}
                  >
                    {region.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </div>
  );
};
