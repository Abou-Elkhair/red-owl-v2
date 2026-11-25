import { visitorAnswer } from './visitorQuestions';
import { contactAnswer, normalize, searchSite } from './siteSearch';
import { TRANSLATIONS } from '../data/translations';
import { OTHER_PROJECTS, PROJECTS } from '../data/projects';
import type { Language } from '../types';

export interface Reply { text: string; page?: number; project?: string }
const references = [
  [15,'middor|ميدور'],[21,'ain shams|عين شمس'],[25,'royal walk|c07|رويال ووك|رويال ووك'],
  [31,'economic court|المحكمة الاقتصادية'],[36,'alyoum|اليوم'],[43,'mercury complex|mercury|ميركوري'],
  [47,'neom|نيوم'],[53,'nd 9|nd9'],[56,'saja|سجا'],[63,'al rehab|rehab|الرحاب'],[67,'balady|بلدي'],
  [12,'oil and soap|oil & soap|الزيوت والصابون'],[12,'dabaa nuclear|الضبعة النووية'],[12,'gastec|غازتك'],[12,'decent life|mallawi|حياة كريمة|ملوي'],
] as const;
const index = PROJECTS.map((project,i) => ({project,page:references[i][0],aliases:references[i][1].split('|').map(normalize)}));
type Fact = [RegExp, number, string, string];
const facts: Fact[] = [
 [/iso|certificate|certified|شهاد|ايزو|اعتماد الشرك/,7,'لتأكيد شهادة ISO معيّنة أو تاريخ صلاحيتها، تواصل مع فريقنا على info@redowlco.com.','To confirm a particular ISO certificate or its expiry date, contact our team at info@redowlco.com.'],
 [/quality|inspect|handover|جوده|تفتيش|استلام|تسليم/,7,'تبدأ الجودة بتوثيق الإجراءات وقوائم الفحص، ثم اعتماد المواد والمعدات قبل وصولها، والتفتيش أثناء التركيب، وأخيرًا الاختبار والتشغيل قبل التسليم.','Each trade follows documented procedures and checklists. Materials are approved before arrival, installations inspected on site, and systems tested and commissioned before handover.'],
 [/تواصل|تليفون|تلفون|رقم الشرك|عنوان|ايميل|البريد|مقر|مكتبكم|اتصل|اكلم|مناقص|عرض سعر|contact|phone|email|address|office|tender|quotation/,69,'للتواصل أو إرسال مناقصة: info@redowlco.com أو 01000695256. المكتب في فيلا ٣٢٨، شارع التسعين، جنوب الأكاديمية ج، التجمع الخامس.','For inquiries and tenders, email info@redowlco.com or call +20 100 069 5256. The office is at Villa 328, 90th Street, South Academy C, Fifth Settlement.'],
 [/chairman|يوسف|رئيس|يدير/,4,'يوسف جودة هو رئيس مجلس الإدارة. ','Youssef Gouda is the chairman. '],
 [/vision|mission|values|رؤي|رسال|قيم/,5,'تسعى red-owl لأن تكون شريكًا موثوقًا للأنظمة الميكانيكية والكهربائية، مع تنفيذ آمن في الموعد وضمن الميزانية. قيمها الجودة والالتزام والسلامة والابتكار والنزاهة.','Red Owl aims to be a trusted mechanical and electrical partner and deliver safely, on time and within budget. Its values are quality, commitment, safety, innovation and integrity.'],
 [/ongoing|in progress|status|progress|شغالين دلوقتي|قيد التنفيذ|جاري|نسبه الانجاز|حاله المشروع/,11,'للحصول على آخر تحديث لحالة المشروع أو نسبة الإنجاز، تواصل مع فريقنا على info@redowlco.com.','For the latest project status or completion percentage, contact our team at info@redowlco.com.'],
 [/saudi|ksa|السعودي/,47,'في السعودية شاركت red-owl في نيوم كمقاول باطن لتوريد وتركيب وتشغيل مضخة حريق بسعة ١٬٠٠٠ جالون في الدقيقة. المقاول الرئيسي العيوني والاستشاري بكتل.','In Saudi Arabia, Red Owl subcontracted at NEOM to supply, install and commission a 1,000 GPM fire pump. Al-Ayuni was the main contractor and Bechtel the consultant.'],
 [/where.*work|coverage|countries|دول|مناطق|محافظات|بتشتغلوا فين/,12,'تشمل الأعمال مصر والسعودية. في مصر توجد مشروعات بالقاهرة الجديدة والعاصمة الإدارية والدلتا والساحل الشمالي والصعيد، وفي السعودية شاركنا في مشروع نيوم.','Work spans Egypt and Saudi Arabia, including New Cairo, the New Administrative Capital, the Delta, North Coast, Upper Egypt and NEOM.'],
 [/fire|حريق|الحريق|حرايق|اطفا|رشاش/,9,'يشمل التخصص أنظمة مكافحة الحريق والمضخات. من أمثلة التنفيذ نظام ميدور مول ومضخة نيوم بسعة ١٬٠٠٠ جالون في الدقيقة.','Fire protection work includes firefighting systems and pumps. Examples include Middor Mall and the 1,000 GPM NEOM pump.'],
 [/hvac|chilled|duct|ventilation|mechanical|plumbing|تكييف|ميكانيك|سباك|صرف|تهوي|دكت/,9,'تشمل الأعمال الميكانيكية التكييف والمياه المبرّدة، ومجاري الهواء والتهوية، والسباكة والصرف، ومكافحة الحريق والمضخات وسحب الدخان. يظهر تطبيق شبكات المياه المبرّدة والدكت في جامعة عين شمس الأهلية.','Mechanical scope covers HVAC, chilled water, ducts, ventilation, plumbing, drainage, firefighting, pumps and smoke extraction. Ain Shams National University is a chilled-water and ductwork example.'],
 [/electric|low current|cctv|cabling|كهرب|تيار خفيف|انذار|كابل|كابلات|كاميرات/,10,'تشمل الأعمال توزيع القوى واللوحات، والإضاءة، والكابلات والتأريض، والمراقبة وشبكات البيانات والتحكم بالدخول وإنذار الحريق، ثم الاختبار والتشغيل.','Electrical work covers distribution panels, lighting, cabling, earthing, CCTV, data networks, access control, fire alarms, testing and commissioning.'],
 [/services|speciali|capabilit|\bmep\b|خدم|تخصص|بتعملوا ايه|بتقدم|خدمات/,8,'تنفّذ الشركة أعمال MEP من تنسيق التصميم إلى التركيب والتسليم، عبر الأعمال الميكانيكية والكهربائية وأنظمة التيار الخفيف والاختبارات والصيانة والدعم.','Red Owl delivers MEP work from design coordination to installation and handover, covering mechanical, electrical, low-current systems, testing, maintenance and support.'],
 [/team|staff|employees|technicians|engineers|فريق|مهندس|فنيين|موظف|عدد العاملين/,3,'فريقنا مكوّن من ٢٠ مهندس وفني.','Our team has 20 engineers and technicians.'],
 [/كم مشروع|كام مشروع|how many projects|number of projects|عدد (ال)?(مش|مشار)/,3,'عندنا أكتر من ٢٠ مشروع.','Our portfolio includes more than 20 projects.'],
 [/founded|established|since when|when.*start|تاس|اتاس|تاسيس|بدات|بداتوا|بدايت|من امتي|سنه كام/,3,'بدأنا سنة ٢٠٢٠.','We started in 2020.'],
 [/about|experience|who are you|خبر|عرفني|عن الشرك|مين انت|نبذه/,3,'إحنا red-owl للإنشاءات. بدأنا سنة ٢٠٢٠ وبننفّذ الأعمال الميكانيكية والكهربائية والصحية في مصر والسعودية.','We’re Red Owl Construction. Since 2020, we’ve delivered mechanical, electrical and plumbing work in Egypt and Saudi Arabia.'],
];
export function answer(question: string, lang: Language, previous?: string): Reply {
  const q=normalize(question);
  const tr=(ar:string,en:string)=>lang==='ar'?ar:en;
  const fallback=tr('أنا مساعد آلي لسه تحت التدريب والتجربة، ومقدرش أجاوب على السؤال ده حاليًا. تقدر تسأل فريقنا على info@redowlco.com، أو تختار سؤال من الاقتراحات دي.','I’m an automated assistant still in training and testing, so I can’t answer that question yet. You can email our team at info@redowlco.com or choose one of the suggested questions below.');
  const matches=index.filter(r=>r.aliases.some(a=>q.includes(a)));
  const company = /الشركه|شركتكم|ريد اول|red owl|company|business/.test(q);
  const projectQuestion = matches.length > 0 || /المشروع|project/.test(q);
  if (!projectQuestion && (company || !previous)) {
    const ownership = /صاحب|اصحاب|مالك|يملك|ملكيه|\b(owns|owner|ownership)\b/.test(q);
    const founder = /مؤسس|مين (?:اللي )?(?:اسس|بدا) |who (?:founded|started)|\bfounder\b/.test(q);
    if (ownership || founder) {
      const chairman = TRANSLATIONS[lang].about.chairmanName;
      const missing = founder ? tr('اسم المؤسس','the founder') : tr('اسم المالك','the owner');
      return {text:tr('رئيس مجلس إدارة red-owl هو '+chairman+'. '+missing+' مش مذكور في بيانات الشركة المتاحة.',
        chairman+' is Red Owl’s chairman. Our company information does not identify '+missing+'.'),page:4};
    }
  }
  if (!projectQuestion && /بتشتغلو[ا]? فين|شغالين فين|where do you work/.test(q)) {
    const coverage = facts.find(([pattern])=>pattern.test('coverage'))!;
    return {text:tr(coverage[2],coverage[3]),page:coverage[1]};
  }
  const generalServices = /(?:بتشتغلوا?|بتشتغلو|شغالين|متخصصين|تخصصكم|مجالكم|شغلكم|نشاطكم)\s+(?:ف(?:ي)?\s+)?ايه|ايه\s+(?:مجال|شغل|نشاط|تخصص)|(?:بتعملوا?|بتقدمو?ا?)\s+ايه|what (?:do you do|does (?:red owl|your company) do)|what kind of work/.test(q);
  if (!projectQuestion && generalServices) {
    const service = facts.find(([pattern])=>pattern.test('services'))!;
    return {text:tr(service[2],service[3]),page:service[1]};
  }
  const directory = contactAnswer(q,lang,matches.length > 0);
  if(directory) return {text:directory};
  const visitor = !matches.length && visitorAnswer(q,lang);
  if(visitor) return {text:visitor,page:8};
  const status = /ongoing|in progress|قيد التنفيذ|تحت التنفيذ|جاريه|شغالين دلوقتي/.test(q) ? 'in-progress'
    : /completed|مكتمله|خلصتوها/.test(q) ? 'completed' : undefined;
  const statusLabel = (value: string) => value === 'completed' ? TRANSLATIONS[lang].projectsPage.completed : TRANSLATIONS[lang].projectsPage.inProgress;
  if(matches.length && (status || /status|حاله/.test(q))) {
    return {text:matches.map(({project})=>project.name[lang]+' — '+statusLabel(project.status)).join('\n'),project:matches[0].project.id};
  }
  if(status && !matches.length) {
    const names=[...PROJECTS,...OTHER_PROJECTS].filter(p=>p.status===status).map(p=>p.name[lang]);
    return {text:statusLabel(status)+'\n'+(names.join('\n') || tr('لا توجد مشروعات معروضة بهذه الحالة.','No projects are listed with this status.'))};
  }
  const media = /صور|جالري|معرض|فيديو|ريلز|gallery|photos?|pictures?|videos?|reels?/.test(q);
  const siteTopic = media || /رؤي|رسال[ته]|قيمكم|mission|vision|values|lifecycle|مراحل التنفيذ/.test(q) || /iso|ايزو|شهادات|certifications?|certificates?|عرض سعر|quotation|request a quote|rfp/.test(q);
  if(siteTopic && !/تاريخ|صلاحية|صلاحيه|expiry|expir|تكلف|cost/.test(q)) {
    const result=searchSite(q,lang);
    if(result)return {text:result};
  }
  const partyFields = [
    ['mainContractor',/main contractor|المقاول الرئيسي/,'المقاول الرئيسي','Main contractor'],
    ['consultant',/consultant|استشاري/,'الاستشاري','Consultant'],
    ['owner',/owner|المالك/,'المالك','Owner'],
    ['client',/client|العميل/,'العميل','Client'],
    ['role',/role|دور|مقاول باطن/,'دور red-owl','Red Owl’s role'],
  ] as const;
  const requested=partyFields.filter(([,pattern])=>pattern.test(q));
  const place=/location|where|مكان|موقع|فين|عنوان/.test(q);
  const follow=requested.length || place || /scope|capacity|pump|system|details|شغل|نطاق|قدر|سعه|مضخ|طلمب|تفاصيل/.test(q);
  const projects=matches.length?matches:follow?index.filter(r=>r.project.id===previous):[];
  if (/price|budget|cost|salary|duration|deadline|ميزاني|تكلف|سعر|مده|مرتب/.test(q)) return {text:fallback,project:matches[0]?.project.id};
  if (/status|ongoing|progress|جاري|قيد التنفيذ|حاله|نسبه الانجاز/.test(q)) {
    const fact=facts.find(([pattern])=>pattern.test('ongoing'))!;
    return {text:tr(fact[2],fact[3]),page:fact[1]};
  }
  if(projects.length){
    const text=projects.map(({project:p})=>{
      const lines=[p.name[lang]];
      if(place) lines.push(p.location[lang]);
      for(const [field,,ar,en] of requested) lines.push(tr(ar,en)+': '+(p[field]?.[lang]??tr('غير مؤكد','Unconfirmed')));
      if(!place&&!requested.length || /scope|نطاق|نفذ|capacity|سعه|pump|مضخ/.test(q)) lines.push(...p.scope[lang]);
      return lines.join('\n');
    }).join('\n\n');
    return {text,page:projects[0].page,project:projects[0].project.id};
  }
  const other=OTHER_PROJECTS.find(p=>[p.name.en,p.name.ar,p.name.en.split(' (')[0]].some(s=>q.includes(normalize(s))));
  if(other)return {text:tr('من أعمالنا: ','Our work includes ')+other.name[lang]+'. '+tr('ما عنديش تفاصيل مؤكدة عن نطاق شغلنا فيه.','I don’t have confirmed scope details for this project.'),page:68};
  for(const [pattern,page,ar,en] of facts) if(pattern.test(q)) return {text:tr(ar,en),page,project:page===47?'neom-project':undefined};
  if(/projects?|مشروعات|مشاريع|اعمالكم|اعمالك|سابقة اعمال/.test(q))return {text:tr('من مشروعاتنا: ','Our projects include ')+PROJECTS.slice(0,11).map(p=>p.name[lang]).join(tr('، ',', '))+'.',page:13};
  if(/^(اهلا|مرحبا|هاي|hello|hi|السلام عليكم)[ !.؟?]*$/.test(q))return {text:tr('أهلًا بك! اسألني عن مشروع أو خدمة أو طريقة التواصل مع red-owl.','Welcome! Ask about a Red Owl project, service or how to contact the team.')};
  return {text:searchSite(q,lang) ?? fallback};
}

const discoveryQuestions = {
  team: ['فريقكم فيه كام مهندس وفني؟', 'How big is your team?'],
  services: ['إيه خدماتكم؟', 'What services do you offer?'],
  quality: ['إزاي بتراجعوا الجودة قبل التسليم؟', 'How do you check quality before handover?'],
  fire: ['إيه خبرتكم في مكافحة الحريق؟', 'What fire protection work do you do?'],
  electrical: ['بتنفذوا إيه في الأعمال الكهربائية؟', 'Which electrical works do you deliver?'],
  university: ['نفذتوا إيه في جامعة عين شمس؟', 'What did you deliver at Ain Shams University?'],
  neom: ['إيه دوركم في نيوم؟', 'What was your role at NEOM?'],
  count: ['عندكم كام مشروع؟', 'How many projects have you worked on?'],
  founded: ['بدأتوا سنة كام؟', 'When was Red Owl founded?'],
} as const;

export function followUpQuestions(reply: Reply, language: Language, asked: string[]): string[] {
  const column = language === 'ar' ? 0 : 1;
  const project = PROJECTS.find(item => item.id === reply.project);
  const candidates: string[] = [];
  if (project) {
    const name = project.name[language];
    candidates.push(language === 'ar' ? `إيه نطاق شغلكم في ${name}؟` : `What was the scope at ${name}?`);
    if (project.consultant) candidates.push(language === 'ar' ? `مين الاستشاري في ${name}؟` : `Who was the consultant at ${name}?`);
    else if (project.client) candidates.push(language === 'ar' ? `مين العميل في ${name}؟` : `Who was the client at ${name}?`);
  }
  const { university, neom, fire, electrical, services, quality, team, count, founded } = discoveryQuestions;
  const topics = project ? [quality, services] : reply.page === 8 ? [fire, electrical] : [university, neom];
  candidates.push(...[...topics, team, count, services, quality, founded, electrical, fire, university, neom].map(pair => pair[column]));
  const used = new Set(asked.map(normalize));
  const choices = [...new Set(candidates)].filter(prompt => answer(prompt, language, reply.project).text !== reply.text);
  return [...choices.filter(prompt => !used.has(normalize(prompt))), ...choices.filter(prompt => used.has(normalize(prompt)))].slice(0, 2);
}
