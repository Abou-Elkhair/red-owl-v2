import { specialties } from './specialties';
import { PROJECTS, OTHER_PROJECTS } from '../data/projects';
import { TRANSLATIONS } from '../data/translations';
import type { Language, PageId } from '../types';

export interface Route { lang: Language; page: PageId; detail?: string }
export const pages: PageId[] = ['home','about','services','projects','gallery','quality','contact'];
export const routes: Route[] = (['ar','en'] as const).flatMap(lang => [
  ...pages.map(page => ({lang, page})),
  ...TRANSLATIONS[lang].services.tabs.map(tab => ({lang, page: 'services' as const, detail: tab.id})),
  ...specialties.map(item => ({lang, page: 'services' as const, detail: item.id})),
  ...[...new Set([...PROJECTS,...OTHER_PROJECTS].map(p=>p.id))].map(id => ({lang, page: 'projects' as const, detail: id})),
]);

export function routePath({lang, page, detail}: Route) {
  if (page === 'home') return lang === 'ar' ? '' : 'en/';
  return [lang, page, detail].filter(Boolean).join('/') + '/';
}

export function browserRoute(): Route {
  const base = new URL(document.baseURI).pathname;
  const path = window.location.pathname.slice(base.length).replace(/index\.html$/, '');
  const route = routes.find(item => routePath(item) === path) ?? {lang:'ar', page:'home'};
  const legacy = window.location.hash.slice(1) as PageId;
  if (pages.includes(legacy)) return {lang:route.lang, page:legacy};
  return route;
}
