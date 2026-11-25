import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { DisciplineKey } from '../types';

export const ProjectModal: React.FC = () => {
  const { selectedProject, setSelectedProject, lang, t, isRtl, navigate } = useApp();
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    setImgIdx(0);
  }, [selectedProject?.id]);

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
      if (e.key === 'ArrowRight') {
        setImgIdx((prev) =>
          isRtl
            ? (prev - 1 + selectedProject.images.length) % selectedProject.images.length
            : (prev + 1) % selectedProject.images.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setImgIdx((prev) =>
          isRtl
            ? (prev + 1) % selectedProject.images.length
            : (prev - 1 + selectedProject.images.length) % selectedProject.images.length
        );
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedProject, isRtl, setSelectedProject]);

  const handleRequestSimilar = () => {
    if (!selectedProject) return;
    const activeDisciplines = (Object.keys(selectedProject.disciplines) as DisciplineKey[]).filter(
      (k) => selectedProject.disciplines[k]
    );
    setSelectedProject(null);
    navigate('contact', {
      prefillDisciplines: activeDisciplines.length > 0 ? activeDisciplines : ['fire'],
    });
  };

  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs sm:p-6"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.name[lang]}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-[#E2E4E9] bg-white shadow-2xl lg:grid lg:grid-cols-12"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 end-4 z-20 flex h-10 w-10 items-center justify-center rounded-md border border-[#E2E4E9] bg-white/95 text-[#191B1F] transition-colors hover:bg-[#191B1F] hover:text-white"
              aria-label={t.projectModal.close}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left/Start: Interactive Photo Carousel */}
            <div className="flex flex-col bg-[#191B1F] lg:col-span-7">
              <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-[420px]">
                <img
                  src={selectedProject.images[imgIdx]}
                  alt={`${selectedProject.name[lang]} — ${imgIdx + 1}`}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setImgIdx(
                          (prev) =>
                            (prev - 1 + selectedProject.images.length) % selectedProject.images.length
                        )
                      }
                      className="absolute start-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-black/65 text-white transition-colors hover:bg-[#D11A22]"
                      aria-label="Previous photo"
                    >
                      {isRtl ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setImgIdx((prev) => (prev + 1) % selectedProject.images.length)
                      }
                      className="absolute end-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-black/65 text-white transition-colors hover:bg-[#D11A22]"
                      aria-label="Next photo"
                    >
                      {isRtl ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </button>
                    <div className="absolute bottom-3 start-3 rounded bg-black/75 px-2.5 py-1 text-xs font-semibold text-white tabular-nums">
                      {imgIdx + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto border-t border-[#2E323B] bg-[#141619] p-3">
                  {selectedProject.images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setImgIdx(i)}
                      className={`h-14 w-20 shrink-0 overflow-hidden rounded border-2 transition-all ${
                        i === imgIdx
                          ? 'border-[#D11A22] opacity-100'
                          : 'border-transparent opacity-55 hover:opacity-90'
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right/End: Case Study Details */}
            <div className="flex flex-1 flex-col justify-between overflow-y-auto p-6 sm:p-8 lg:col-span-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#6E7482]">
                  <span className="tabular-nums text-[#D11A22]">{selectedProject.number}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.sector[lang]}</span>
                  <span aria-hidden="true">·</span>
                  <span
                    className={
                      selectedProject.status === 'in-progress'
                        ? 'text-[#D11A22]'
                        : 'text-[#191B1F]'
                    }
                  >
                    {selectedProject.status === 'in-progress'
                      ? t.projectModal.statusInProgress
                      : t.projectModal.statusCompleted}
                  </span>
                </div>

                <h2 className="font-display mt-2 text-2xl font-bold text-[#191B1F] text-balance">
                  {selectedProject.name[lang]}
                </h2>

                <div className="mt-3 flex items-start gap-2 text-sm text-[#4B505B]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D11A22]" />
                  <span>{selectedProject.location[lang]}</span>
                </div>

                {/* Scope of Works */}
                <div className="mt-6 border-t border-[#E2E4E9] pt-5">
                  <h3 className="text-xs font-bold tracking-wider text-[#D11A22]">
                    {t.projectModal.scopeTitle}
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {selectedProject.scope[lang].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#191B1F]">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D11A22] text-[11px] font-bold text-white tabular-nums">
                          {idx + 1}
                        </span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Stakeholders */}
                <dl className="mt-6 grid grid-cols-1 gap-3 border-t border-[#E2E4E9] pt-5 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold text-[#6E7482]">{t.projectModal.country}</dt>
                    <dd className="mt-0.5 font-medium text-[#191B1F]">
                      {selectedProject.countryLabel[lang]}
                    </dd>
                  </div>
                  {selectedProject.client && (
                    <div>
                      <dt className="text-xs font-semibold text-[#6E7482]">{t.projectModal.client}</dt>
                      <dd className="mt-0.5 font-medium text-[#191B1F]">
                        {selectedProject.client[lang]}
                      </dd>
                    </div>
                  )}
                  {selectedProject.owner && (
                    <div>
                      <dt className="text-xs font-semibold text-[#6E7482]">{t.projectModal.owner}</dt>
                      <dd className="mt-0.5 font-medium text-[#191B1F]">
                        {selectedProject.owner[lang]}
                      </dd>
                    </div>
                  )}
                  {selectedProject.consultant && (
                    <div>
                      <dt className="text-xs font-semibold text-[#6E7482]">
                        {t.projectModal.consultant}
                      </dt>
                      <dd className="mt-0.5 font-medium text-[#191B1F]">
                        {selectedProject.consultant[lang]}
                      </dd>
                    </div>
                  )}
                  {selectedProject.mainContractor && (
                    <div>
                      <dt className="text-xs font-semibold text-[#6E7482]">
                        {t.projectModal.mainContractor}
                      </dt>
                      <dd className="mt-0.5 font-medium text-[#191B1F]">
                        {selectedProject.mainContractor[lang]}
                      </dd>
                    </div>
                  )}
                  {selectedProject.role && (
                    <div>
                      <dt className="text-xs font-semibold text-[#6E7482]">{t.projectModal.role}</dt>
                      <dd className="mt-0.5 font-medium text-[#191B1F]">
                        {selectedProject.role[lang]}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="mt-6 border-t border-[#E2E4E9] pt-5">
                <button
                  type="button"
                  onClick={handleRequestSimilar}
                  className="w-full rounded-md bg-[#D11A22] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B0141B]"
                >
                  {t.projectModal.requestSimilar}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
