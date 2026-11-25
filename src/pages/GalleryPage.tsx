import React, { useMemo, useState } from 'react';
import { Expand, Film, Image as ImageIcon, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { GALLERY_ITEMS, REEL_ITEMS } from '../data/media';
import { GalleryCategory } from '../types';

export const GalleryPage: React.FC = () => {
  const { t, lang, setLightboxIndex, setActiveReel } = useApp();
  const [mode, setMode] = useState<'photos' | 'videos'>('photos');
  const [category, setCategory] = useState<GalleryCategory>('all');

  const filteredPhotos = useMemo(() => {
    if (category === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === category);
  }, [category]);

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: t.galleryPage.categories.all },
    { key: 'fire', label: t.galleryPage.categories.fire },
    { key: 'hvac', label: t.galleryPage.categories.hvac },
    { key: 'electrical', label: t.galleryPage.categories.electrical },
    { key: 'plumbing', label: t.galleryPage.categories.plumbing },
    { key: 'landmarks', label: t.galleryPage.categories.landmarks },
  ];

  return (
    <div>
      {/* Header */}
      <section className="border-b border-[#E2E4E9] bg-[#F4F5F7] py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold tracking-wider text-[#D11A22]">
            {t.galleryPage.pageKicker}
          </p>
          <h1 className="font-display mt-2 max-w-3xl text-3xl font-bold text-[#191B1F] text-balance sm:text-4xl">
            {t.galleryPage.pageTitle}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4B505B] sm:text-base">
            {t.galleryPage.pageDesc}
          </p>

          {/* Media Mode Switcher */}
          <div className="mt-7 inline-flex rounded-lg border border-[#E2E4E9] bg-white p-1">
            <button
              type="button"
              onClick={() => setMode('photos')}
              className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                mode === 'photos'
                  ? 'bg-[#191B1F] text-white'
                  : 'text-[#4B505B] hover:text-[#191B1F]'
              }`}
            >
              <ImageIcon className="h-4 w-4" />
              <span>{t.galleryPage.modePhotos}</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('videos')}
              className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                mode === 'videos'
                  ? 'bg-[#D11A22] text-white'
                  : 'text-[#4B505B] hover:text-[#191B1F]'
              }`}
            >
              <Film className="h-4 w-4" />
              <span>{t.galleryPage.modeVideos}</span>
            </button>
          </div>
        </div>
      </section>

      {mode === 'photos' ? (
        <section className="bg-white py-10 lg:py-14">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            {/* Category Filter Bar */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#E2E4E9] pb-6">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setCategory(cat.key)}
                  className={`whitespace-nowrap rounded-md px-3.5 py-2 text-xs font-semibold transition-colors ${
                    category === cat.key
                      ? 'bg-[#D11A22] text-white'
                      : 'bg-[#F4F5F7] text-[#191B1F] hover:bg-[#E2E4E9]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Bento / Masonry Photo Grid */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filteredPhotos.map((item) => {
                const globalIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
                const spanClass =
                  item.aspect === 'wide' ? 'sm:col-span-2' : 'sm:col-span-1';
                return (
                  <motion.figure
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setLightboxIndex(globalIndex)}
                    className={`group relative cursor-pointer overflow-hidden rounded-xl border border-[#E2E4E9] bg-[#191B1F] ${spanClass}`}
                  >
                    <div
                      className={`w-full overflow-hidden ${
                        item.aspect === 'wide' ? 'aspect-[16/10]' : 'aspect-[4/3]'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.caption[lang]}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 transition-opacity group-hover:opacity-100" />

                    <div className="absolute top-3 end-3 flex h-9 w-9 items-center justify-center rounded-md bg-black/55 text-white opacity-0 transition-opacity group-hover:opacity-100">
                      <Expand className="h-4 w-4" />
                    </div>

                    <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <p className="text-[11px] font-semibold text-[#FF6B70]">
                        {item.projectTitle[lang]}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold leading-snug">
                        {item.caption[lang]}
                      </p>
                    </figcaption>
                  </motion.figure>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-4 border-b border-[#E2E4E9] pb-6 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-display text-2xl font-bold text-[#191B1F]">
                  {t.galleryPage.reelsTitle}
                </h2>
                <p className="mt-1.5 max-w-2xl text-sm text-[#4B505B]">
                  {t.galleryPage.reelsDesc}
                </p>
              </div>
              <p className="text-xs font-semibold text-[#6E7482]">
                {t.galleryPage.futureVideoNote}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {REEL_ITEMS.map((reel) => (
                <article
                  key={reel.id}
                  onClick={() => setActiveReel(reel)}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[#E2E4E9] bg-[#F4F5F7] transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-[#191B1F]">
                    <img
                      src={reel.slides[0].image}
                      alt={reel.title[lang]}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45 transition-colors group-hover:bg-black/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D11A22] text-white shadow-lg transition-transform duration-200 group-hover:scale-110">
                        <Play className="h-6 w-6 fill-current" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 start-3 rounded bg-black/75 px-2.5 py-1 text-xs font-semibold text-white tabular-nums">
                      {reel.duration} · {reel.slides.length} {t.galleryPage.scene}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="text-xs font-bold text-[#D11A22]">{reel.category[lang]}</p>
                      <h3 className="font-display mt-1.5 text-lg font-bold text-[#191B1F] group-hover:text-[#D11A22]">
                        {reel.title[lang]}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#4B505B]">
                        {reel.subtitle[lang]}
                      </p>
                    </div>
                    <div className="mt-5 border-t border-[#E2E4E9] pt-4 text-xs font-bold text-[#191B1F]">
                      {t.galleryPage.watchReel}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
