import React, { useMemo, useState } from 'react';
import { Building2, MapPin, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { OTHER_PROJECTS, PROJECTS } from '../data/projects';
import { Reveal } from '../components/MotionPrimitives';
import { DisciplineKey, ProjectCountry, ProjectStatus } from '../types';

export const ProjectsPage: React.FC = () => {
  const { t, lang, setSelectedProject } = useApp();
  const [discipline, setDiscipline] = useState<DisciplineKey | 'all'>('all');
  const [country, setCountry] = useState<ProjectCountry | 'all'>('all');
  const [status, setStatus] = useState<ProjectStatus | 'all'>('all');

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (discipline !== 'all' && !p.disciplines[discipline]) return false;
      if (country !== 'all' && p.country !== country) return false;
      if (status !== 'all' && p.status !== status) return false;
      return true;
    });
  }, [discipline, country, status]);

  const resetFilters = () => {
    setDiscipline('all');
    setCountry('all');
    setStatus('all');
  };

  const disciplineOptions: { key: DisciplineKey | 'all'; label: string }[] = [
    { key: 'all', label: t.projectsPage.all },
    { key: 'fire', label: t.projectsPage.disciplines.fire },
    { key: 'hvac', label: t.projectsPage.disciplines.hvac },
    { key: 'plumbing', label: t.projectsPage.disciplines.plumbing },
    { key: 'electrical', label: t.projectsPage.disciplines.electrical },
    { key: 'infrastructure', label: t.projectsPage.disciplines.infrastructure },
  ];

  return (
    <div>
      {/* Header */}
      <section className="border-b border-[#E2E4E9] bg-[#F4F5F7] py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold tracking-wider text-[#D11A22]">
            {t.projectsPage.pageKicker}
          </p>
          <h1 className="font-display mt-2 max-w-3xl text-3xl font-bold text-[#191B1F] text-balance sm:text-4xl">
            {t.projectsPage.pageTitle}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4B505B] sm:text-base">
            {t.projectsPage.pageDesc}
          </p>
        </div>
      </section>

      {/* Interactive Filter Toolbar */}
      <section className="border-b border-[#E2E4E9] bg-white py-6">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          {/* Discipline Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="me-1 text-xs font-bold text-[#6E7482]">
              {t.projectsPage.filterDiscipline}:
            </span>
            {disciplineOptions.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setDiscipline(opt.key)}
                className={`whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                  discipline === opt.key
                    ? 'bg-[#D11A22] text-white'
                    : 'bg-[#F4F5F7] text-[#191B1F] hover:bg-[#E2E4E9]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Country & Status Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-[#6E7482]">
                {t.projectsPage.filterCountry}:
              </span>
              {(
                [
                  { k: 'all', l: t.projectsPage.all },
                  { k: 'egypt', l: t.projectsPage.egypt },
                  { k: 'ksa', l: t.projectsPage.ksa },
                ] as const
              ).map((c) => (
                <button
                  key={c.k}
                  type="button"
                  onClick={() => setCountry(c.k)}
                  className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    country === c.k
                      ? 'bg-[#191B1F] text-white'
                      : 'bg-[#F4F5F7] text-[#4B505B] hover:text-[#191B1F]'
                  }`}
                >
                  {c.l}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-[#6E7482]">
                {t.projectsPage.filterStatus}:
              </span>
              {(
                [
                  { k: 'all', l: t.projectsPage.all },
                  { k: 'completed', l: t.projectsPage.completed },
                  { k: 'in-progress', l: t.projectsPage.inProgress },
                ] as const
              ).map((s) => (
                <button
                  key={s.k}
                  type="button"
                  onClick={() => setStatus(s.k)}
                  className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    status === s.k
                      ? 'bg-[#191B1F] text-white'
                      : 'bg-[#F4F5F7] text-[#4B505B] hover:text-[#191B1F]'
                  }`}
                >
                  {s.l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Projects Grid */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-[#E2E4E9] bg-[#F4F5F7] p-12 text-center">
              <p className="text-base font-semibold text-[#191B1F]">{t.projectsPage.noResults}</p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#D11A22] px-4 py-2 text-xs font-semibold text-white"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>{t.projectsPage.resetFilters}</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((proj) => (
                <motion.article
                  key={proj.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSelectedProject(proj)}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[#E2E4E9] bg-white transition-shadow duration-200 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#191B1F]">
                    <img
                      src={proj.coverImage}
                      alt={proj.name[lang]}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
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
                              ? 'font-bold text-[#D11A22]'
                              : 'text-[#4B505B]'
                          }
                        >
                          {proj.status === 'in-progress'
                            ? t.projectModal.statusInProgress
                            : t.projectModal.statusCompleted}
                        </span>
                      </div>

                      <h2 className="font-display mt-2 text-lg font-bold text-[#191B1F] transition-colors group-hover:text-[#D11A22]">
                        {proj.name[lang]}
                      </h2>

                      <p className="mt-2 flex items-start gap-1.5 text-xs leading-relaxed text-[#4B505B]">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D11A22]" />
                        <span className="line-clamp-2">{proj.location[lang]}</span>
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-[#E2E4E9] pt-4 text-xs font-semibold">
                      <span className="text-[#191B1F] group-hover:text-[#D11A22]">
                        {t.projectsPage.viewDetails}
                      </span>
                      <span className="tabular-nums text-[#6E7482]">
                        {proj.images.length} {t.projectsPage.photosCount}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* What We Delivered Matrix Table (Page 13) */}
      <section className="border-t border-[#E2E4E9] bg-[#F4F5F7] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[#191B1F] sm:text-3xl">
              {t.projectsPage.matrixTitle}
            </h2>
            <p className="mt-2 text-sm text-[#4B505B]">{t.projectsPage.matrixSubtitle}</p>
          </Reveal>

          <div className="mt-8 overflow-x-auto rounded-xl border border-[#E2E4E9] bg-white">
            <table className="w-full min-w-[680px] border-collapse text-start text-sm">
              <thead>
                <tr className="bg-[#191B1F] text-white">
                  <th className="px-4 py-3.5 text-start text-xs font-bold tabular-nums">#</th>
                  <th className="px-4 py-3.5 text-start text-xs font-bold">
                    {t.projectsPage.colProject}
                  </th>
                  <th className="px-4 py-3.5 text-center text-xs font-bold">
                    {t.projectsPage.colFire}
                  </th>
                  <th className="px-4 py-3.5 text-center text-xs font-bold">
                    {t.projectsPage.colHvac}
                  </th>
                  <th className="px-4 py-3.5 text-center text-xs font-bold">
                    {t.projectsPage.colPlumb}
                  </th>
                  <th className="px-4 py-3.5 text-center text-xs font-bold">
                    {t.projectsPage.colElec}
                  </th>
                  <th className="px-4 py-3.5 text-center text-xs font-bold">
                    {t.projectsPage.colInfra}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E4E9]">
                {PROJECTS.map((p, idx) => (
                  <tr
                    key={p.id}
                    onClick={() => setSelectedProject(p)}
                    className={`cursor-pointer transition-colors hover:bg-[#F4F5F7] ${
                      idx % 2 === 1 ? 'bg-[#FAFAFB]' : 'bg-white'
                    }`}
                  >
                    <td className="px-4 py-3 font-bold text-[#D11A22] tabular-nums">{p.number}</td>
                    <td className="px-4 py-3 font-semibold text-[#191B1F]">{p.name[lang]}</td>
                    {(
                      ['fire', 'hvac', 'plumbing', 'electrical', 'infrastructure'] as DisciplineKey[]
                    ).map((dk) => (
                      <td key={dk} className="px-4 py-3 text-center">
                        <span
                          className={`inline-block h-2.5 w-2.5 rounded-full ${
                            p.disciplines[dk] ? 'bg-[#D11A22]' : 'bg-[#E2E4E9]'
                          }`}
                          aria-label={p.disciplines[dk] ? 'Included' : 'Not in scope'}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs italic text-[#6E7482]">{t.projectsPage.matrixNote}</p>
        </div>
      </section>

      {/* Other Projects Grid (Page 68) */}
      <section className="border-t border-[#E2E4E9] bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[#191B1F] sm:text-3xl">
              {t.projectsPage.otherProjectsTitle}
            </h2>
            <p className="mt-2 text-sm text-[#4B505B]">{t.projectsPage.otherProjectsDesc}</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OTHER_PROJECTS.map((item) => (
              <div
                key={item.number}
                className="flex items-start justify-between rounded-xl border border-[#E2E4E9] bg-[#F4F5F7] p-5"
              >
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D11A22] text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#191B1F]">{item.name[lang]}</h3>
                    {item.subtitle && (
                      <p className="mt-0.5 text-xs font-medium text-[#4B505B]">
                        {item.subtitle[lang]}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-[#6E7482]">
                      {item.sector[lang]} ·{' '}
                      <span
                        className={
                          item.status === 'in-progress' ? 'font-semibold text-[#D11A22]' : ''
                        }
                      >
                        {item.status === 'in-progress'
                          ? t.projectModal.statusInProgress
                          : t.projectModal.statusCompleted}
                      </span>
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#D11A22] tabular-nums">{item.number}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
