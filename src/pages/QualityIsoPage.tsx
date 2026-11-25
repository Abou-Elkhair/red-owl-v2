import React, { useState } from 'react';
import { Award, CheckCircle2, Flame, Leaf, ShieldCheck, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { CERTIFICATIONS } from '../data/media';
import { MepSchematicBackdrop, Reveal } from '../components/MotionPrimitives';
import { CertificationItem } from '../types';

export const QualityIsoPage: React.FC = () => {
  const { t, lang, navigate } = useApp();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const certIcons = [Award, Leaf, ShieldCheck, Flame];

  return (
    <div>
      {/* Header */}
      <section className="border-b border-[#E2E4E9] bg-[#F4F5F7] py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold tracking-wider text-[#D11A22]">
            {t.qualityPage.pageKicker}
          </p>
          <h1 className="font-display mt-2 max-w-3xl text-3xl font-bold text-[#191B1F] text-balance sm:text-4xl">
            {t.qualityPage.pageTitle}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4B505B] sm:text-base">
            {t.qualityPage.pageDesc}
          </p>
        </div>
      </section>

      {/* Quality Assurance Process (Page 7 Dark Charcoal Section) */}
      <section className="relative overflow-hidden bg-[#191B1F] py-16 text-white lg:py-22">
        <MepSchematicBackdrop />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              {t.qualityPage.qaTitle}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[#B8BDC7] sm:text-base">
              {t.qualityPage.qaDesc}
            </p>
          </Reveal>

          <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Connecting Line (Desktop) */}
            <div
              className="pointer-events-none absolute top-7 start-10 end-10 hidden h-[2px] bg-[#2E323B] md:block"
              aria-hidden="true"
            />

            {t.qualityPage.qaSteps.map((step, idx) => {
              const active = activeStep === idx;
              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`relative flex flex-col items-start rounded-xl border p-6 text-start transition-all duration-200 ${
                    active
                      ? 'border-[#D11A22] bg-[#25282E]'
                      : 'border-[#2E323B] bg-[#1E2025]/80 hover:border-[#4B505B]'
                  }`}
                >
                  <div
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white tabular-nums transition-transform duration-200 ${
                      active ? 'scale-105 bg-[#D11A22]' : 'bg-[#D11A22]/85'
                    }`}
                  >
                    {step.num}
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#B8BDC7]">{step.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ISO & Civil Defense / NFPA Certifications */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[#191B1F] sm:text-3xl">
              {t.qualityPage.certsTitle}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[#4B505B] sm:text-base">
              {t.qualityPage.certsDesc}
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {CERTIFICATIONS.map((cert, idx) => {
              const Icon = certIcons[idx % certIcons.length];
              return (
                <article
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="group flex cursor-pointer flex-col justify-between rounded-xl border border-[#E2E4E9] bg-[#F4F5F7] p-7 transition-all duration-200 hover:border-[#191B1F] hover:bg-white hover:shadow-md"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D11A22] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-display text-sm font-bold text-[#D11A22] tabular-nums">
                        {cert.code}
                      </span>
                    </div>

                    <h3 className="font-display mt-5 text-xl font-bold text-[#191B1F] group-hover:text-[#D11A22]">
                      {cert.title[lang]}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-[#6E7482]">
                      {cert.authority[lang]}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#4B505B]">
                      {cert.summary[lang]}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#E2E4E9] pt-4 text-xs font-bold text-[#191B1F]">
                    <span>{t.qualityPage.inspectCert}</span>
                    <span className="tabular-nums text-[#D11A22]">
                      0{cert.scopePoints[lang].length}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certification Scope Inspection Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-xl border border-[#E2E4E9] bg-white p-6 shadow-2xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4 border-b border-[#E2E4E9] pb-5">
                <div>
                  <span className="text-xs font-bold text-[#D11A22] tabular-nums">
                    {selectedCert.code}
                  </span>
                  <h3 className="font-display mt-1 text-2xl font-bold text-[#191B1F]">
                    {selectedCert.title[lang]}
                  </h3>
                  <p className="mt-1 text-xs text-[#6E7482]">{selectedCert.authority[lang]}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E2E4E9] text-[#191B1F] hover:bg-[#191B1F] hover:text-white"
                  aria-label={t.qualityPage.closeCert}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5">
                <p className="text-sm leading-relaxed text-[#4B505B]">
                  {selectedCert.summary[lang]}
                </p>
                <h4 className="mt-6 text-xs font-bold tracking-wider text-[#D11A22]">
                  {t.qualityPage.standardsCovered}
                </h4>
                <ul className="mt-3 space-y-3">
                  {selectedCert.scopePoints[lang].map((pt, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 rounded-lg border border-[#E2E4E9] bg-[#F4F5F7] p-3.5 text-sm text-[#191B1F]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D11A22]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex justify-end gap-3 border-t border-[#E2E4E9] pt-5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCert(null);
                    navigate('contact');
                  }}
                  className="rounded-md bg-[#D11A22] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#B0141B]"
                >
                  {t.nav.requestQuote}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
