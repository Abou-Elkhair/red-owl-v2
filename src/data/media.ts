import { CertificationItem, GalleryItem, ReelItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    image: './assets/redowl/obj_1333.jpg',
    category: 'fire',
    projectTitle: { ar: 'مشروع نيوم — السعودية', en: 'NEOM Project' },
    caption: {
      ar: 'غرفة طلمبات حريق UL/FM بقدرة 1000 جالون/دقيقة — نيوم',
      en: '1000 GPM UL/FM Fire Pump Room — NEOM, Saudi Arabia',
    },
    location: { ar: 'نيوم، المملكة العربية السعودية', en: 'NEOM, Saudi Arabia' },
    aspect: 'wide',
  },
  {
    id: 'gal-2',
    image: './assets/redowl/obj_799.jpg',
    category: 'fire',
    projectTitle: { ar: 'مول ميدور', en: 'Middor Mall' },
    caption: {
      ar: 'شبكة طلمبات الحريق والصمامات الرئيسية — مول ميدور',
      en: 'Clarke Fire Pump Header & Valve Assembly — Middor Mall',
    },
    location: { ar: 'التجمع الخامس، القاهرة الجديدة', en: 'Fifth Settlement, New Cairo' },
    aspect: 'wide',
  },
  {
    id: 'gal-3',
    image: './assets/redowl/obj_898.jpg',
    category: 'hvac',
    projectTitle: { ar: 'جامعة عين شمس الأهلية', en: 'Ain Shams National University' },
    caption: {
      ar: 'تنسيق مسارات الحريق والتكييف وحوامل الكابلات بالممرات',
      en: 'Coordinated Corridor MEP Racks: Fire, HVAC & Cable Trays',
    },
    location: { ar: 'طريق العين السخنة، القاهرة', en: 'Ain Sokhna Road, Cairo' },
    aspect: 'square',
  },
  {
    id: 'gal-4',
    image: './assets/redowl/obj_1136.jpg',
    category: 'electrical',
    projectTitle: { ar: 'مصنع اليوم للصناعات الغذائية', en: 'Alyoum Food Factory' },
    caption: {
      ar: 'فريق Red Owl أثناء تركيب مسارات التغذية الكهربائية واللوحات',
      en: 'Red Owl Technician Installing Industrial Busbar & Cable Tray System',
    },
    location: { ar: 'العاشر من رمضان، الشرقية', en: '10th of Ramadan City' },
    aspect: 'square',
  },
  {
    id: 'gal-5',
    image: './assets/redowl/obj_1062.jpg',
    category: 'hvac',
    projectTitle: { ar: 'المحكمة الاقتصادية', en: 'Economic Court' },
    caption: {
      ar: 'تأسيس مجاري الهواء المجلفنة كبيرة المقاس بالمحكمة الاقتصادية',
      en: 'Galvanized Main HVAC Ductwork — Economic Court',
    },
    location: { ar: 'العاصمة الإدارية الجديدة', en: 'New Administrative Capital' },
    aspect: 'square',
  },
  {
    id: 'gal-6',
    image: './assets/redowl/obj_1497.jpg',
    category: 'electrical',
    projectTitle: { ar: 'مول سجا 2', en: 'Saja-2 Mall' },
    caption: {
      ar: 'لوحة التحكم وإطلاق الإطفاء التلقائي Simplex 4004R',
      en: 'Simplex 4004R Suppression Release & Alarm Panel',
    },
    location: { ar: 'مدينة نصر، القاهرة', en: 'Nasr City, Cairo' },
    aspect: 'square',
  },
  {
    id: 'gal-7',
    image: './assets/redowl/obj_1479.jpg',
    category: 'plumbing',
    projectTitle: { ar: 'مول سجا 2', en: 'Saja-2 Mall' },
    caption: {
      ar: 'محطة معالجة وفلترة المياه والخزانات المضغوطة',
      en: 'Multi-Stage Sand Filtration & Pumping Plant Room',
    },
    location: { ar: 'مدينة نصر، القاهرة', en: 'Nasr City, Cairo' },
    aspect: 'square',
  },
  {
    id: 'gal-8',
    image: './assets/redowl/obj_1490.jpg',
    category: 'fire',
    projectTitle: { ar: 'مول سجا 2', en: 'Saja-2 Mall' },
    caption: {
      ar: 'بطاريات أسطوانات إطفاء الغاز CO2 عالية الضغط',
      en: 'High-Pressure CO2 Gas Suppression Cylinder Bank',
    },
    location: { ar: 'مدينة نصر، القاهرة', en: 'Nasr City, Cairo' },
    aspect: 'square',
  },
  {
    id: 'gal-9',
    image: './assets/redowl/obj_1145.jpg',
    category: 'electrical',
    projectTitle: { ar: 'مصنع اليوم للصناعات الغذائية', en: 'Alyoum Food Factory' },
    caption: {
      ar: 'غرفة محولات ولوحات الجهد المتوسط والمنخفض',
      en: 'Industrial High-Voltage Switchgear Enclosure',
    },
    location: { ar: 'العاشر من رمضان', en: '10th of Ramadan City' },
    aspect: 'wide',
  },
  {
    id: 'gal-10',
    image: './assets/redowl/obj_1153.jpg',
    category: 'electrical',
    projectTitle: { ar: 'مصنع اليوم للصناعات الغذائية', en: 'Alyoum Food Factory' },
    caption: {
      ar: 'منظومة مولد الطوارئ وخزان الوقود بسعة 2000 لتر',
      en: 'Backup Power Generator & 2000L Fuel Tank Installation',
    },
    location: { ar: 'العاشر من رمضان', en: '10th of Ramadan City' },
    aspect: 'wide',
  },
  {
    id: 'gal-11',
    image: './assets/redowl/obj_1244.jpg',
    category: 'hvac',
    projectTitle: { ar: 'برج ميركوري كومبلكس', en: 'Mercury Complex Tower' },
    caption: {
      ar: 'تمديد مجاري التكييف وشبكات الحريق في الأدوار المتكررة',
      en: 'High-Rise Corridor Ducting & Fire Piping — Mercury Tower',
    },
    location: { ar: 'العاصمة الإدارية الجديدة', en: 'New Administrative Capital' },
    aspect: 'square',
  },
  {
    id: 'gal-12',
    image: './assets/redowl/obj_1404.jpg',
    category: 'fire',
    projectTitle: { ar: 'محطة كهرباء ND-9', en: 'ND-9 Power Station' },
    caption: {
      ar: 'غرفة طلمبات الحريق ولوحات التحكم بمحطة محولات الضبعة',
      en: 'Substation Fire Pump Room & Control Panels — El Dabaa',
    },
    location: { ar: 'الضبعة، مطروح', en: 'El Dabaa, Matrouh' },
    aspect: 'wide',
  },
  {
    id: 'gal-13',
    image: './assets/redowl/obj_1170.jpg',
    category: 'plumbing',
    projectTitle: { ar: 'مصنع اليوم للصناعات الغذائية', en: 'Alyoum Food Factory' },
    caption: {
      ar: 'أعمال البنية التحتية ومد خطوط المواسير الأرضية HDPE',
      en: 'Underground HDPE Trenching & Utility Network',
    },
    location: { ar: 'العاشر من رمضان', en: '10th of Ramadan City' },
    aspect: 'square',
  },
  {
    id: 'gal-14',
    image: './assets/redowl/obj_999.jpg',
    category: 'hvac',
    projectTitle: { ar: 'رويال ووك — C07', en: 'Royal Walk – C07 Building' },
    caption: {
      ar: 'أعمال العزل الحراري لمجاري الهواء وماكينات FCU فوق السقف',
      en: 'Insulated HVAC Ducts, FCU Drops & Ceiling Grid Framing',
    },
    location: { ar: 'التجمع الخامس، القاهرة الجديدة', en: 'Fifth Settlement, New Cairo' },
    aspect: 'wide',
  },
  {
    id: 'gal-15',
    image: './assets/redowl/obj_807.jpg',
    category: 'fire',
    projectTitle: { ar: 'مول ميدور', en: 'Middor Mall' },
    caption: {
      ar: 'صناديق الحريق ومحبس التحكم بمنطقة الجراجات',
      en: 'Parking Area Fire Hose Cabinet & Zone Control Valve',
    },
    location: { ar: 'التجمع الخامس، القاهرة الجديدة', en: 'Fifth Settlement, New Cairo' },
    aspect: 'square',
  },
  {
    id: 'gal-16',
    image: './assets/redowl/obj_1342.jpg',
    category: 'fire',
    projectTitle: { ar: 'مشروع نيوم — السعودية', en: 'NEOM Project' },
    caption: {
      ar: 'منصات الصيانة والهيكل المعدني لغرفة الطلمبات في نيوم',
      en: 'Elevated Steel Access Platform & Fire Pump Skid — NEOM',
    },
    location: { ar: 'نيوم، المملكة العربية السعودية', en: 'NEOM, Saudi Arabia' },
    aspect: 'wide',
  },
  {
    id: 'gal-17',
    image: './assets/redowl/obj_1506.jpg',
    category: 'plumbing',
    projectTitle: { ar: 'مول سجا 2', en: 'Saja-2 Mall' },
    caption: {
      ar: 'غرفة طلمبات التغذية وخزان التمدد والضغط الثابت',
      en: 'Booster Pump Skid, Expansion Vessel & Pressure Tank',
    },
    location: { ar: 'مدينة نصر، القاهرة', en: 'Nasr City, Cairo' },
    aspect: 'wide',
  },
  {
    id: 'gal-18',
    image: './assets/redowl/obj_1179.jpg',
    category: 'landmarks',
    projectTitle: { ar: 'برج ميركوري كومبلكس', en: 'Mercury Complex Tower' },
    caption: {
      ar: 'الواجهة الخارجية لبرج ميركوري — الداون تاون',
      en: 'Mercury Complex Tower Exterior — New Capital Downtown',
    },
    location: { ar: 'العاصمة الإدارية الجديدة', en: 'New Administrative Capital' },
    aspect: 'square',
  },
  {
    id: 'gal-19',
    image: './assets/redowl/obj_1351.jpg',
    category: 'landmarks',
    projectTitle: { ar: 'محطة محولات ND-9', en: 'ND-9 Power Station' },
    caption: {
      ar: 'محطة محولات ND-9 بالضبعة — أعمال الحماية من الحريق',
      en: 'ND-9 High-Voltage Substation Compound — El Dabaa',
    },
    location: { ar: 'الضبعة، مطروح', en: 'El Dabaa, Matrouh' },
    aspect: 'square',
  },
  {
    id: 'gal-20',
    image: './assets/redowl/obj_1582.jpg',
    category: 'plumbing',
    projectTitle: { ar: 'مول بلدي — الزمالك', en: 'Balady Mall' },
    caption: {
      ar: 'أعمال تأسيس الصرف والسباكة على النيل بالزمالك',
      en: 'Under-Slab Drainage & Plumbing Rough-In — Zamalek',
    },
    location: { ar: 'الزمالك، القاهرة', en: 'Zamalek, Cairo' },
    aspect: 'square',
  },
];

export const REEL_ITEMS: ReelItem[] = [
  {
    id: 'reel-neom',
    title: {
      ar: 'توثيق تنفيذ غرفة طلمبات الحريق — نيوم (1000 GPM)',
      en: 'NEOM 1000 GPM UL/FM Fire Pump Room Commissioning Reel',
    },
    subtitle: {
      ar: 'جولة مصورة داخل غرفة الطلمبات المعتمدة تحت إشراف استشاري Bechtel وشركة العيوني',
      en: 'Walkthrough of the UL/FM split-case pump installation under Bechtel USA supervision',
    },
    category: { ar: 'أنظمة الحريق · السعودية', en: 'Firefighting · KSA' },
    duration: '00:28',
    slides: [
      {
        image: './assets/redowl/obj_1333.jpg',
        caption: {
          ar: 'المشهد 01 — منظومة الطلمبة الرئيسية واللوحات',
          en: 'Scene 01 — Main Electric & Diesel Split-Case Fire Pumps',
        },
      },
      {
        image: './assets/redowl/obj_1324.jpg',
        caption: {
          ar: 'المشهد 02 — تجميع المحابس والعدادات الهيدروليكية',
          en: 'Scene 02 — Flanged Manifold & Pressure Gauge Calibration',
        },
      },
      {
        image: './assets/redowl/obj_1342.jpg',
        caption: {
          ar: 'المشهد 03 — سقالات الصيانة وخطوط التوزيع الرئيسية',
          en: 'Scene 03 — Structural Catwalk & Overhead Risers',
        },
      },
      {
        image: './assets/redowl/obj_1315.jpg',
        caption: {
          ar: 'المشهد 04 — لوحة التحكم والاختبار النهائي',
          en: 'Scene 04 — Control Panel & Final Testing Handover',
        },
      },
    ],
  },
  {
    id: 'reel-alyoum',
    title: {
      ar: 'تنفيذ الأعمال الكهروميكانيكية المتكاملة — مصنع اليوم',
      en: 'Alyoum Food Factory Full Turnkey MEP Execution',
    },
    subtitle: {
      ar: 'من تأسيس البنية التحتية الأرضية إلى لوحات الجهد والمولدات وتشغيل خطوط الإنتاج',
      en: 'From underground HDPE trenches to HV switchgear, backup generator & cleanroom lighting',
    },
    category: { ar: 'صناعي متكامل · مصر', en: 'Industrial MEP · Egypt' },
    duration: '00:32',
    slides: [
      {
        image: './assets/redowl/obj_1136.jpg',
        caption: {
          ar: 'المشهد 01 — تركيب حوامل الكابلات الصناعية الثقيلة',
          en: 'Scene 01 — Heavy-Duty Industrial Busway & Cable Trays',
        },
      },
      {
        image: './assets/redowl/obj_1145.jpg',
        caption: {
          ar: 'المشهد 02 — لوحات توزيع الجهد المتوسط والمنخفض',
          en: 'Scene 02 — Main Distribution & Switchgear Room',
        },
      },
      {
        image: './assets/redowl/obj_1153.jpg',
        caption: {
          ar: 'المشهد 03 — وحدة التوليد الاحتياطي وخزان 2000 لتر',
          en: 'Scene 03 — Standby Generator Set & Fuel System',
        },
      },
      {
        image: './assets/redowl/obj_1089.jpg',
        caption: {
          ar: 'المشهد 04 — التسليم النهائي لصالات الإنتاج المعزولة',
          en: 'Scene 04 — Completed Insulated Production Hall',
        },
      },
    ],
  },
  {
    id: 'reel-saja-middor',
    title: {
      ar: 'شبكات الحريق والفلترة والتهوية بالمراكز التجارية الكبرى',
      en: 'Commercial Malls Fire, CO2 & HVAC Walkthrough (Middor & Saja-2)',
    },
    subtitle: {
      ar: 'تغطية تنفيذ شبكات الرشاشات التلقائية، أنظمة CO2، ومحطات الفلترة',
      en: 'Execution showcase of sprinkler grids, CO2 banks, Simplex panels & water treatment',
    },
    category: { ar: 'تجاري · القاهرة الجديدة', en: 'Commercial · New Cairo' },
    duration: '00:30',
    slides: [
      {
        image: './assets/redowl/obj_799.jpg',
        caption: {
          ar: 'المشهد 01 — غرفة طلمبات الحريق الرئيسية بمول ميدور',
          en: 'Scene 01 — Middor Mall Main Fire Pump Room',
        },
      },
      {
        image: './assets/redowl/obj_1470.jpg',
        caption: {
          ar: 'المشهد 02 — شبكة التوصيلات الميكانيكية بمول سجا 2',
          en: 'Scene 02 — Saja-2 Mall Mechanical & Pump Piping',
        },
      },
      {
        image: './assets/redowl/obj_1490.jpg',
        caption: {
          ar: 'المشهد 03 — منظومة إطفاء الغاز CO2 عالية الكفاءة',
          en: 'Scene 03 — Automated CO2 Cylinder Suppression Bank',
        },
      },
      {
        image: './assets/redowl/obj_1506.jpg',
        caption: {
          ar: 'المشهد 04 — منظومة طلمبات المياه وخزانات الضغط',
          en: 'Scene 04 — Domestic Water Booster & Pressure Vessel',
        },
      },
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'iso-9001',
    code: 'ISO 9001:2015',
    title: {
      ar: 'نظام إدارة الجودة الهندسية (QMS)',
      en: 'Quality Management System (QMS)',
    },
    authority: {
      ar: 'المعايير القياسية الدولية لإدارة جودة المقاولات والتنفيذ',
      en: 'International Organization for Standardization · MEP Contracting',
    },
    summary: {
      ar: 'ضبط دورة التنفيذ بالكامل من اعتماد العينات والرسومات التنفيذية وحتى الاختبارات والتسليم الابتدائي والنهائي بدون ملاحظات.',
      en: 'Governs documented trade checklists, material submittal approvals, site inspection logs, and zero-defect commissioning.',
    },
    scopePoints: {
      ar: [
        'توثيق إجراءات الفحص والاستلام (ITP) لكل بند كهروميكانيكي',
        'اعتماد كافة الخامات والمعدات قبل التوريد للموقع',
        'تتبع المعايرة والاختبارات الهيدروستاتيكية والكهربائية',
      ],
      en: [
        'Inspection & Test Plans (ITP) documented per MEP discipline',
        'Pre-delivery material & equipment submittal verification',
        'Traceable hydrostatic, airflow, and electrical commissioning records',
      ],
    },
  },
  {
    id: 'iso-14001',
    code: 'ISO 14001:2015',
    title: {
      ar: 'نظام الإدارة البيئية والاستدامة (EMS)',
      en: 'Environmental Management System (EMS)',
    },
    authority: {
      ar: 'معايير كفاءة الطاقة وترشيد الموارد في المواقع الإنشائية',
      en: 'International Standard for Sustainable Site & Energy Practices',
    },
    summary: {
      ar: 'الالتزام بأعلى معايير كفاءة أنظمة التكييف والطاقة وإدارة المخلفات بالمواقع الصناعية والتجارية والمشاريع الكبرى.',
      en: 'Ensures energy-efficient HVAC/chilled water integration, refrigerant compliance, and controlled site waste management.',
    },
    scopePoints: {
      ar: [
        'تصميم وتنفيذ أنظمة تكييف وتبريد عالية الكفاءة وتقليل الفاقد الحراري',
        'إدارة آمنة لمخلفات المواقع وزيوت المعدات والبطاريات',
        'الالتزام بالاشتراطات البيئية لمناطق المصانع ومحطات الطاقة',
      ],
      en: [
        'Low-loss thermal insulation & high-efficiency chilled water routing',
        'Controlled handling of site consumables, oils & commissioning fluids',
        'Full environmental compliance across industrial & energy sites',
      ],
    },
  },
  {
    id: 'iso-45001',
    code: 'ISO 45001:2018',
    title: {
      ar: 'نظام إدارة السلامة والصحة المهنية (HSE)',
      en: 'Occupational Health & Safety Management (HSE)',
    },
    authority: {
      ar: 'سلامة المهندسين والفنيين في الأعمال المرتفعة والكهربائية',
      en: 'International Standard for Workplace & Construction Site Safety',
    },
    summary: {
      ar: 'بيئة عمل آمنة بنسبة التزام صارمة بمهمات الوقاية الشخصية وتصاريح العمل الساخنة والعمل على ارتفاعات ولوحات الجهد.',
      en: 'Protects every engineer and technician through strict PPE enforcement, LOTO electrical protocols, and elevated-work permits.',
    },
    scopePoints: {
      ar: [
        'برامج تدريب يومية للسلامة المهنية (Toolbox Talks) قبل بدء الوردية',
        'تأمين أعمال اللحام، الرفع الميكانيكي، واختبارات لوحات الجهد العالي',
        'سجل خالٍ من الحوادث الجسيمة عبر أكثر من 20 مشروعاً في مصر والسعودية',
      ],
      en: [
        'Daily site safety briefings & task-specific risk assessments',
        'Lockout/Tagout (LOTO) & hot-work permit enforcement',
        'Zero-incident discipline across 20+ Egypt & Saudi Arabia sites',
      ],
    },
  },
  {
    id: 'nfpa-civil-defense',
    code: 'NFPA & Civil Defense',
    title: {
      ar: 'اعتمادات الدفاع المدني ومعايير الحريق NFPA / UL / FM',
      en: 'Civil Defense & NFPA / UL / FM Fire Compliance',
    },
    authority: {
      ar: 'الكود المصري للحريق ومعايير الجمعية الوطنية الأمريكية للوقاية من الحرائق',
      en: 'Egyptian Civil Defense Code & NFPA 13 / 14 / 20 / 72 Standards',
    },
    summary: {
      ar: 'تنفيذ غرف طلمبات الحريق وشبكات الرشاشات وإنذار الحريق والإطفاء بالغاز وفق متطلبات الدفاع المدني واستشاريي المشاريع الدولية.',
      en: 'Full compliance with UL/FM listed equipment, NFPA hydraulic standards, and Civil Defense handover approvals.',
    },
    scopePoints: {
      ar: [
        'توريد وتركيب طلمبات حريق معتمدة UL/FM حتى 1000+ GPM كما في مشروع نيوم',
        'اختبارات الضغط والتشغيل المتكاملة مع لوحات الإنذار Simplex والإطفاء التلقائي',
        'تجهيز ملفات الاعتماد والتسليم النهائي لهيئات الدفاع المدني',
      ],
      en: [
        'UL/FM listed split-case fire pumps up to 1000+ GPM (proven at NEOM)',
        'Integrated flow, pressure & Simplex fire alarm cause-and-effect testing',
        'Complete as-built & authority-ready Civil Defense handover dossiers',
      ],
    },
  },
];
