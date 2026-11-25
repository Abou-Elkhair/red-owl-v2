import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { GALLERY_ITEMS } from '../data/media';

export const MediaLightbox: React.FC = () => {
  const { lightboxIndex, setLightboxIndex, activeReel, setActiveReel, lang, t, isRtl } = useApp();
  const [reelSlide, setReelSlide] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    setReelSlide(0);
    setPlaying(true);
  }, [activeReel?.id]);

  // Auto-advance interactive reel showcase
  useEffect(() => {
    if (!activeReel || !playing) return;
    const timer = window.setInterval(() => {
      setReelSlide((prev) => (prev + 1) % activeReel.slides.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [activeReel, playing]);

  // Keyboard support for Photo Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex(
          isRtl
            ? (lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
            : (lightboxIndex + 1) % GALLERY_ITEMS.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex(
          isRtl
            ? (lightboxIndex + 1) % GALLERY_ITEMS.length
            : (lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
        );
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, isRtl, setLightboxIndex]);

  useEffect(() => {
    if (!activeReel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveReel(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeReel, setActiveReel]);

  const currentPhoto = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <>
      {/* Fullscreen Photo Lightbox */}
      <AnimatePresence>
        {currentPhoto && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0E1013]/95 p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="flex items-center justify-between text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-[#B8BDC7] tabular-nums">
                <span>
                  {lightboxIndex + 1} / {GALLERY_ITEMS.length}
                </span>
                <span aria-hidden="true">·</span>
                <span>{currentPhoto.projectTitle[lang]}</span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-[#2E323B] bg-[#191B1F] text-white transition-colors hover:border-[#D11A22] hover:bg-[#D11A22]"
                aria-label={t.galleryPage.closeLightbox}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div
              className="relative mx-auto my-4 flex max-h-[75vh] w-full max-w-5xl items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
                  )
                }
                className="absolute start-2 z-10 flex h-11 w-11 items-center justify-center rounded-md bg-black/65 text-white transition-colors hover:bg-[#D11A22]"
                aria-label="Previous"
              >
                {isRtl ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
              </button>

              <img
                src={currentPhoto.image}
                alt={currentPhoto.caption[lang]}
                referrerPolicy="no-referrer"
                className="max-h-[74vh] w-auto rounded-lg object-contain shadow-2xl"
              />

              <button
                type="button"
                onClick={() => setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length)}
                className="absolute end-2 z-10 flex h-11 w-11 items-center justify-center rounded-md bg-black/65 text-white transition-colors hover:bg-[#D11A22]"
                aria-label="Next"
              >
                {isRtl ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
            </div>

            <div
              className="mx-auto w-full max-w-3xl text-center text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-base font-semibold">{currentPhoto.caption[lang]}</p>
              <p className="mt-1 text-xs text-[#8C93A0]">{currentPhoto.location[lang]}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Execution Reel Player */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E1013]/92 p-4 sm:p-8"
            onClick={() => setActiveReel(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl overflow-hidden rounded-xl border border-[#2E323B] bg-[#191B1F] text-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#2E323B] px-5 py-4">
                <div>
                  <p className="text-xs font-semibold text-[#D11A22]">
                    {activeReel.category[lang]} · <span className="tabular-nums">{activeReel.duration}</span>
                  </p>
                  <h3 className="mt-0.5 text-base font-bold sm:text-lg">
                    {activeReel.title[lang]}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveReel(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-[#2E323B] text-white transition-colors hover:bg-[#D11A22]"
                  aria-label={t.galleryPage.closeLightbox}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full overflow-hidden bg-black">
                {activeReel.videoUrl ? (
                  <iframe
                    src={activeReel.videoUrl}
                    title={activeReel.title[lang]}
                    className="h-full w-full"
                    allowFullScreen
                  />
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={reelSlide}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="relative h-full w-full"
                    >
                      <img
                        src={activeReel.slides[reelSlide].image}
                        alt={activeReel.slides[reelSlide].caption[lang]}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                      <div className="absolute bottom-5 inset-x-6 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-[#D11A22] tabular-nums">
                          {t.galleryPage.scene} 0{reelSlide + 1} / 0{activeReel.slides.length}
                        </span>
                        <p className="text-base font-semibold text-white sm:text-lg">
                          {activeReel.slides[reelSlide].caption[lang]}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>

              {/* Reel Playback Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#2E323B] px-5 py-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPlaying((p) => !p)}
                    className="inline-flex items-center gap-2 rounded-md bg-[#D11A22] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#B0141B]"
                  >
                    {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                    <span>{playing ? (lang === 'ar' ? 'إيقاف مؤقت' : 'Pause') : (lang === 'ar' ? 'تشغيل' : 'Play')}</span>
                  </button>
                  <div className="flex items-center gap-1.5">
                    {activeReel.slides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setReelSlide(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === reelSlide ? 'w-7 bg-[#D11A22]' : 'w-2 bg-[#4B505B] hover:bg-white'
                        }`}
                        aria-label={`${t.galleryPage.scene} ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#8C93A0]">{t.galleryPage.futureVideoNote}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
