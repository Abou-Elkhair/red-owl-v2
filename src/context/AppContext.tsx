import React, { createContext, useContext, useEffect, useState } from 'react';
import { TRANSLATIONS, Translations } from '../data/translations';
import { DisciplineKey, Language, PageId, Project, ReelItem } from '../types';

interface AppContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
  isRtl: boolean;
  currentPage: PageId;
  navigate: (page: PageId, options?: { prefillDisciplines?: DisciplineKey[] }) => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  lightboxIndex: number | null;
  setLightboxIndex: (idx: number | null) => void;
  activeReel: ReelItem | null;
  setActiveReel: (reel: ReelItem | null) => void;
  prefilledDisciplines: DisciplineKey[];
  setPrefilledDisciplines: (d: DisciplineKey[]) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

const VALID_PAGES: PageId[] = [
  'home',
  'about',
  'services',
  'projects',
  'gallery',
  'quality',
  'contact',
];

function getInitialPage(): PageId {
  const hash = window.location.hash.replace('#', '') as PageId;
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

function getInitialLang(): Language {
  try {
    const saved = localStorage.getItem('redowl_lang');
    if (saved === 'en' || saved === 'ar') return saved;
  } catch {
    // ignore storage errors
  }
  return 'ar';
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(getInitialLang);
  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);
  const [prefilledDisciplines, setPrefilledDisciplines] = useState<DisciplineKey[]>(['fire']);

  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('redowl_lang', lang);
    } catch {
      // ignore
    }
  }, [lang, isRtl]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const setLang = (next: Language) => {
    setLangState(next);
  };

  const toggleLang = () => {
    setLangState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const navigate = (page: PageId, options?: { prefillDisciplines?: DisciplineKey[] }) => {
    if (options?.prefillDisciplines && options.prefillDisciplines.length > 0) {
      setPrefilledDisciplines(options.prefillDisciplines);
    }
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t: TRANSLATIONS[lang],
        isRtl,
        currentPage,
        navigate,
        selectedProject,
        setSelectedProject,
        lightboxIndex,
        setLightboxIndex,
        activeReel,
        setActiveReel,
        prefilledDisciplines,
        setPrefilledDisciplines,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
