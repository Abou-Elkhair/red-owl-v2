import { specialties } from './specialties';
import { CONTACT } from '../data/contact';
import { PROJECTS, OTHER_PROJECTS } from '../data/projects';
import { TRANSLATIONS } from '../data/translations';
import { routePath, type Route } from './routes';

export const site = new URL(import.meta.env.VITE_SITE_URL || 'https://abou-elkhair.github.io/red-owl-v2/');
if (!site.pathname.endsWith('/')) site.pathname += '/';

export function metadata(route: Route) {
  const {lang,page,detail} = route, t = TRANSLATIONS[lang], ar = lang === 'ar';
  const project = page === 'projects' && PROJECTS.find(p => p.id === detail);
  const other = page === 'projects' && OTHER_PROJECTS.find(p=>p.id===detail);
  const specialty = specialties.find(item => item.id === detail);
  const service = page === 'services' && (specialty ? {title:specialty.title[lang],shortDesc:specialty.shortDesc[lang]} : t.services.tabs.find(tab => tab.id === detail));
  const headings = {
    home: ar ? 'مقاولات كهروميكانيكية في مصر والسعودية' : 'MEP Contractor in Egypt and Saudi Arabia',
    about: ar ? 'عن شركة المقاولات الكهروميكانيكية' : 'About our MEP contracting company',
    services: ar ? 'خدمات التكييف ومكافحة الحريق والكهرباء والسباكة' : 'HVAC, Fire Protection, Electrical and Plumbing Services',
    projects: ar ? 'مشاريع المقاولات الكهروميكانيكية في مصر والسعودية' : 'MEP Projects in Egypt and Saudi Arabia',
    gallery: t.galleryPage.pageTitle, quality: t.qualityPage.pageTitle, contact: t.contactPage.pageTitle,
  };
  const descriptions = {home:t.hero.subtitle,about:t.about.glanceP1,services:t.services.pageDesc,
    projects:t.projectsPage.pageDesc,gallery:t.galleryPage.pageDesc,quality:t.qualityPage.pageDesc,contact:t.contactPage.pageDesc};
  const name = project ? project.name[lang] : other ? other.name[lang] : service ? service.title : headings[page];
  const title = name + ' | ' + (ar ? 'red-owl' : 'Red Owl Construction');
  const description = project ? [project.location[lang],project.scope[lang][0]].filter(Boolean).join(' — ')
    : other ? [other.name[lang],other.sector[lang],other.subtitle?.[lang]].filter(Boolean).join(' — ') : service ? service.shortDesc : descriptions[page];
  const url = new URL(routePath(route),site).href;
  const alternate = (language: 'ar'|'en') => new URL(routePath({...route,lang:language}),site).href;
  const image = new URL(project ? project.coverImage : './assets/redowl/obj_7.jpg',site).href;
  const organization = site.href+'#organization';
  const graph: object[] = [
    {'@type':'Organization','@id':organization,name:'red-owl',url:site.href,logo:new URL('./assets/redowl/obj_7.jpg',site).href,
      email:CONTACT.email,telephone:CONTACT.phone,address:{'@type':'PostalAddress',streetAddress:t.contactPage.addressValue,addressCountry:'EG'},areaServed:['Egypt','Saudi Arabia']},
    {'@type':page==='contact'?'ContactPage':page==='about'?'AboutPage':'WebPage','@id':url+'#page',url,name:title,description,inLanguage:lang,publisher:{'@id':organization}},
  ];
  if(service) graph.push({'@type':'Service',name,description,url,provider:{'@id':organization}});
  return {title,description,url,image,ar:alternate('ar'),en:alternate('en'),graph:{'@context':'https://schema.org','@graph':graph}};
}

export function updateHead(route: Route) {
  const m=metadata(route);
  document.title=m.title;
  for(const [key,value] of Object.entries({description:m.description,'og:title':m.title,'og:description':m.description,'og:url':m.url,'og:image':m.image,'og:locale':route.lang==='ar'?'ar_EG':'en_US'})) {
    const attr=key.startsWith('og:')?'property':'name';
    document.querySelector('meta['+attr+'="'+key+'"]')?.setAttribute('content',value);
  }
  document.querySelector('link[rel="canonical"]')?.setAttribute('href',m.url);
  for(const [key,url] of Object.entries({ar:m.ar,en:m.en,'x-default':m.ar})) {
    document.querySelector('link[hreflang="'+key+'"]')?.setAttribute('href',url);
  }
  const schema=document.getElementById('structured-data');
  if(schema) schema.textContent=JSON.stringify(m.graph);
}
