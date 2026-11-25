import { CONTACT } from '../data/contact';
import { CERTIFICATIONS, GALLERY_ITEMS, REEL_ITEMS } from '../data/media';
import { PROJECTS, OTHER_PROJECTS } from '../data/projects';
import { TRANSLATIONS } from '../data/translations';
import type { Language } from '../types';

export function normalize(value: string) {
  return value.toLowerCase().normalize('NFKC').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه')
    .replace(/[\u064b-\u065fـ]/g,'').replace(/[-–—]/g,' ').replace(/\s+/g,' ').trim();
}

export function contactAnswer(query: string, lang: Language, namedProject: boolean) {
  const c = TRANSLATIONS[lang].contactPage;
  const fields = [
    { match: /تليفون|تلفون|تلفان|هاتف|موبايل|نمره|رقم(?:كم|ك| الشركه| التواصل| التليفون| الهاتف| الموبايل)|^(?:ال)?رقم$|\b(phone|telephone|mobile)\b/, label: c.phoneLabel, value: CONTACT.phone },
    { match: /ايميل|ميلكم|البريد|\be[ -]?mail\b/, label: c.emailLabel, value: CONTACT.email },
    { match: /عنوان|مقركم|مقر الشركه|لوكيشن|مكتبكم|مكانكم|مكان الشركه|(?<!web )address|office location/, label: c.addressLabel, value: c.addressValue },
    { match: /ويب سايت|لينك الموقع|موقعكم الالكتروني|website|web address/, label: c.websiteLabel, value: CONTACT.website },
  ];
  const general = /كونتا?كت|تواصل|اتصل|اكلمكم|كلمكم|contact|reach (you|the team)|get in touch/.test(query);
  if (namedProject || /استشاري|مقاول رئيسي|consultant|main contractor/.test(query)) return;
  const selected = fields.filter(field => field.match.test(query));
  if (selected.length || general) return (selected.length ? selected : fields).map(f => f.label + ': ' + f.value).join('\n');
}

type Entry = { title: string; body: string; aliases: string };
function entries(lang: Language): Entry[] {
  const t = TRANSLATIONS[lang], a = t.about, s = t.services, g = t.galleryPage, q = t.qualityPage;
  const docs: Entry[] = [];
  function add(title: string, body: string | string[], aliases = '') {
    docs.push({title, body: Array.isArray(body) ? body.join('\n') : body, aliases});
  }
  add(t.nav.home,t.hero.subtitle);
  add(t.nav.about,[a.glanceP1,a.glanceP2]);
  add(a.visionTitle,a.visionPoints,'الرؤية رؤيتكم vision');
  add(a.missionTitle,a.missionPoints,'رسالتكم mission');
  add(a.valuesTitle,a.values.map(v=>v.title+' — '+v.desc),'قيمكم values');
  add(a.coverageTitle,a.regions.map(r=>r.name+' — '+r.items.join('، ')),'coverage التغطية');
  add(a.chairmanName,a.chairmanRole);
  add(t.nav.services,s.pageDesc,'الخدمات خدماتكم services');
  add(s.mechanicalTitle,s.mechanicalItems,'mechanical ميكانيكا الميكانيكية');
  add(s.electricalTitle,s.electricalItems,'electrical كهرباء الكهربائية');
  add(s.lowCurrentTitle,s.lowCurrentItems,'low current تيار خفيف');
  add(s.testingTitle,s.testingItems,'commissioning testing التشغيل الاختبارات');
  add(s.lifecycleTitle,s.lifecycleSteps.map(v=>v.title+' — '+v.desc),'lifecycle مراحل التنفيذ');
  add(t.nav.gallery,g.pageDesc,'الجالري جالري معرض gallery');
  add(g.modeVideos,REEL_ITEMS.map(v=>v.title[lang]),'فيديو فيديوهات الفيديوهات ريلز reels videos');
  add(g.modePhotos,GALLERY_ITEMS.slice(0,4).map(v=>v.caption[lang]),'صور الصور photos pictures');
  for(const item of GALLERY_ITEMS) add(item.projectTitle[lang],item.caption[lang],g.modePhotos);
  for(const item of REEL_ITEMS) add(item.title[lang],item.subtitle[lang],g.modeVideos);
  add(q.certsTitle,CERTIFICATIONS.map(c=>c.code+' — '+c.title[lang]),'iso ايزو الايزو شهادات الشهادات certificates certifications');
  for(const c of CERTIFICATIONS) add(c.code+' '+c.title[lang],c.summary[lang],c.code);
  add(q.qaTitle,q.qaSteps.map(v=>v.title+' — '+v.desc),'الجودة quality assurance');
  add(t.contactPage.formTitle,t.contactPage.formDesc,'عرض سعر طلب تسعير quotation quote rfp');
  add(t.nav.projects,t.projectsPage.pageDesc);
  for(const p of PROJECTS) add(p.name[lang],p.scope[lang],p.location[lang]+' '+p.sector[lang]);
  for(const p of OTHER_PROJECTS) add(p.name[lang],p.subtitle?.[lang] || p.sector[lang]);
  return docs;
}

const stop = new Set('في ف من عن علي لي اي ايه هي هو ما ده دي ممكن عايز عاوز محتاج الموقع السايت الشركه عندكم بتاعكم the in of a an what is are do you your me show tell please site website our'.split(' '));
function words(text: string) {
  return normalize(text).split(/[^\p{L}\p{N}]+/u).map(w=>w.replace(/^ال(?=.{3})/,'')).filter(w=>w.length>1 && !stop.has(w) && !stop.has('ال'+w));
}
const catalog = { ar: entries('ar'), en: entries('en') };
export function searchSite(question: string, lang: Language) {
  const tokens = [...new Set(words(question))];
  if (!tokens.length) return;
  let best: Entry | undefined, bestScore = 0;
  for (const doc of catalog[lang]) {
    const heading = new Set(words(doc.title+' '+doc.aliases)), body = new Set(words(doc.body));
    let matched = 0, score = 0;
    for (const token of tokens) {
      const weight = heading.has(token) ? 4 : body.has(token) ? 1 : 0;
      if (weight) { matched++; score += weight; }
    }
    if (matched >= Math.ceil(tokens.length/2) && score >= 2 && score > bestScore) {
      best = doc; bestScore = score;
    }
  }
  return best && best.title+'\n'+best.body;
}
