import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { PageId } from '../types';

export const Navbar: React.FC = () => {
  const { t, lang, toggleLang, currentPage, navigate } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'projects', label: t.nav.projects },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'quality', label: t.nav.quality },
  ];

  const handleNav = (id: PageId) => {
    setMobileOpen(false);
    navigate(id);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E2E4E9] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
        {/* Zone 1: Brand Lockup (single clean element from official profile) */}
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="flex shrink-0 items-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D11A22]"
          aria-label="Red Owl Construction Home"
        >
          <img
            src="./assets/redowl/obj_7.jpg"
            alt="Red Owl Construction"
            referrerPolicy="no-referrer"
            className="h-9 w-auto object-contain sm:h-10"
          />
        </button>

        {/* Zone 2: 5 concise single-line text links */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary Navigation">
          {navLinks.map((item) => {
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`relative shrink-0 whitespace-nowrap py-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D11A22] ${
                  active ? 'text-[#D11A22]' : 'text-[#191B1F] hover:text-[#D11A22]'
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-active-underline"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className="absolute inset-x-0 -bottom-[2px] h-[2px] bg-[#D11A22]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Language Switch + 1 Primary Action */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-md border border-[#E2E4E9] px-3 py-2 text-xs font-semibold text-[#191B1F] transition-colors duration-150 hover:border-[#191B1F] hover:bg-[#F4F5F7] sm:inline-flex"
            aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            <Globe className="h-3.5 w-3.5 text-[#D11A22]" />
            <span>{t.nav.langSwitch}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNav('contact')}
            className="hidden shrink-0 whitespace-nowrap rounded-md bg-[#D11A22] px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-[#B0141B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D11A22] sm:inline-flex sm:text-sm"
          >
            {t.nav.requestQuote}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#E2E4E9] text-[#191B1F] transition-colors hover:bg-[#F4F5F7] lg:hidden"
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[#E2E4E9] bg-white px-5 py-5 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {(
                [
                  { id: 'home', label: t.nav.home },
                  ...navLinks,
                  { id: 'contact', label: t.nav.contact },
                ] as { id: PageId; label: string }[]
              ).map((item) => {
                const active = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className={`flex min-h-[44px] items-center justify-between rounded-md px-3 text-sm font-semibold transition-colors ${
                      active
                        ? 'bg-[#F4F5F7] text-[#D11A22]'
                        : 'text-[#191B1F] hover:bg-[#F4F5F7]'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex items-center gap-3 border-t border-[#E2E4E9] pt-4">
              <button
                type="button"
                onClick={() => {
                  toggleLang();
                  setMobileOpen(false);
                }}
                className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-md border border-[#E2E4E9] px-4 text-sm font-semibold text-[#191B1F]"
              >
                <Globe className="h-4 w-4 text-[#D11A22]" />
                <span>{t.nav.langSwitch}</span>
              </button>
              <button
                type="button"
                onClick={() => handleNav('contact')}
                className="flex min-h-[44px] flex-1 items-center justify-center rounded-md bg-[#D11A22] px-4 text-sm font-semibold text-white"
              >
                {t.nav.requestQuote}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
