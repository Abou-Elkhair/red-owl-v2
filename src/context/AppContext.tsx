import React, { createContext, useContext, useEffect, useState } from 'react';
import { TRANSLATIONS, Translations } from '../data/translations';
import { DisciplineKey, Language, PageId, ReelItem } from '../types';

import { browserRoute, routePath, type Route, pages } from '../seo/routes';
import { updateHead } from '../seo/metadata';

interface AppContextValue {
  detail?: string;
  changeRoute: (route: Route) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
  isRtl: boolean;
  currentPage: PageId;
  navigate: (page: PageId, options?: { prefillDisciplines?: DisciplineKey[] }) => void;
  lightboxIndex: number | null;
  setLightboxIndex: (idx: number | null) => void;
  activeReel: ReelItem | null;
  setActiveReel: (reel: ReelItem | null) => void;
  prefilledDisciplines: DisciplineKey[];
  setPrefilledDisciplines: (d: DisciplineKey[]) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode; initialRoute?: Route }> = ({ children, initialRoute }) => {
  const [route,setRoute] = useState<Route>(() => initialRoute ?? browserRoute());
  const {lang,page:currentPage,detail} = route;
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
    function restore() {
      const next = browserRoute();
      if (pages.includes(location.hash.slice(1) as PageId)) {
        history.replaceState(null,'',new URL(routePath(next) || '.',document.baseURI));
      }
      setRoute(next);
      setLightboxIndex(null);
      setActiveReel(null);
    }
    restore();
    window.addEventListener('popstate',restore);
    window.addEventListener('hashchange',restore);
    return () => {
      window.removeEventListener('popstate',restore);
      window.removeEventListener('hashchange',restore);
    };
  }, []);
  useEffect(() => {updateHead(route);}, [route]);

  const changeRoute = (next: Route) => {
    const url = new URL(routePath(next) || '.', document.baseURI);
    if (location.href !== url.href) history.pushState(null,'',url);
    setRoute(next);
    window.scrollTo({top:0,behavior:"instant"});
  };
  const setLang = (next: Language) => changeRoute({...route,lang:next});
  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');

  const navigate = (page: PageId, options?: { prefillDisciplines?: DisciplineKey[] }) => {
    if (options?.prefillDisciplines && options.prefillDisciplines.length > 0) {
      setPrefilledDisciplines(options.prefillDisciplines);
    }
    changeRoute({lang,page});
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t: TRANSLATIONS[lang],
        isRtl,
        currentPage, detail, changeRoute,
        navigate,
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
