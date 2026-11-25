import { TRANSLATIONS } from '../data/translations';
import type { Language } from '../types';
import { normalize } from './siteSearch';

const examples = {
  services: [
    'مجالات العمل', 'مجال عمل الشركة', 'مجالات شغلكم', 'ايه طبيعة شغلكم', 'بتشتغلوا ف ايه',
    'ايه الخدمات اللي بتقدموها', 'ايه تخصصاتكم', 'نشاط الشركة ايه', 'بتنفذوا ايه',
    'what do you do', 'what do you specialize in', 'areas of work', 'what services do you offer',
    'what kind of work do you handle',
  ],
  help: [
    'ازاي ريد أول ممكن تفيدني', 'ممكن تساعدوني في ايه', 'هستفيد منكم ازاي', 'ايه اللي تقدروا تقدموه لمشروعي',
    'عندي مشروع وعايز اعرف ازاي تساعدوني', 'محتاج مساعدتكم في مشروعي', 'ابدأ معاكم ازاي',
    'how can red owl help me', 'how could you help with my project', 'how do I get started with you',
    'what can you do for my project', 'how can I benefit from your services',
  ],
} as const;

const filler = new Set(normalize('ازاي كيف ايه اي ماذا ما هي هو ف في من عن علي و اللي ممكن هل لو سمحت فضلك طيب تقولي تقوللي عايز عاوز اعرف محتاج انتو انتم ريد اول الشركة the a an red owl your you me i my can could how what are is with in of do does please tell').split(' '));

function terms(text: string) {
  const words = normalize(text)
    .replace(/(?:ت|هت|بت)?(?:فيد|نفع)(?:و)?ني|استفاد|هستفيد|استفيد|فائدة|benefits?|benefit/g, 'benefit')
    .replace(/(?:ت|هت|بت)?ساعد(?:وني|ني|ونا|نا)|مساعدتكم|تساعدوا|مساعده|assist(?:ance)?|support/g, 'help')
    .replace(/(?:تخصصات|تخصص|مجالات|مجال)(?:كم|كو|كوا|نا)?/g, ' field ')
    .replace(/(?:ال)?(?:شغل|عمل)(?:كم|كو|كوا|نا)?(?=\s|$|[؟?])/g,' work ')
    .replace(/(?:ال)?خدمات(?:كم|كو|كوا)?/g,' services ')
    .split(/[^\p{L}\p{N}]+/u);
  return new Set(words.filter(w => w && !filler.has(w)));
}

const patterns = Object.entries(examples).flatMap(([intent, samples]) =>
  samples.map(sample => ({intent, terms: terms(sample)}))
);

export function visitorAnswer(question: string, lang: Language) {
  const query = terms(question);
  if (!query.size) return;
  let bestScore = 0;
  let bestIntent: string | undefined;
  for (const pattern of patterns) {
    const common = [...query].filter(term => pattern.terms.has(term)).length;
    if (!common || common / query.size < 0.75) continue;
    const score = 2 * common / (query.size + pattern.terms.size);
    if (score >= 0.65 && score > bestScore) {
      bestScore = score;
      bestIntent = pattern.intent;
    }
  }
  if (bestIntent === 'services') {
    return TRANSLATIONS[lang].services.tabs.map(tab => tab.title+' — '+tab.shortDesc).join('\n');
  }
  if (bestIntent === 'help') {
    return lang === 'ar'
      ? 'لو عندك مشروع، نقدر ننفّذ فيه أعمال التكييف والتهوية والسباكة ومكافحة الحريق والكهرباء، ونختبر الأنظمة قبل التسليم. لو معاك رسومات أو جدول كميات، ابعت لنا نطاق الشغل من «اطلب عرض سعر» عشان فريقنا يراجعه ويقدّم لك عرض فني ومالي.'
      : 'We can install HVAC, plumbing, fire protection and electrical systems for your project and test them before handover. Use “Request a quote” to share your scope or bill of quantities so our team can review it and prepare a technical and financial proposal.';
  }
}
