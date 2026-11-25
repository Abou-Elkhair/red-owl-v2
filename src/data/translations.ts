import { Language } from '../types';

export interface Translations {
  brandName: string;
  brandSub: string;
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    gallery: string;
    quality: string;
    contact: string;
    requestQuote: string;
    langSwitch: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    slideLabel: string;
  };
  kpis: {
    foundedValue: string;
    foundedLabel: string;
    teamValue: string;
    teamLabel: string;
    projectsValue: string;
    projectsLabel: string;
    stationsValue: string;
    stationsLabel: string;
    countriesValue: string;
    countriesLabel: string;
  };
  home: {
    scopeKicker: string;
    scopeTitle: string;
    scopeDesc: string;
    exploreServices: string;
    featuredKicker: string;
    featuredTitle: string;
    featuredDesc: string;
    viewAllProjects: string;
    coverageKicker: string;
    coverageTitle: string;
    coverageDesc: string;
    trustKicker: string;
    trustTitle: string;
    ctaBandTitle: string;
    ctaBandDesc: string;
    ctaBandButton: string;
  };
  about: {
    pageKicker: string;
    pageTitle: string;
    glanceTitle: string;
    glanceP1: string;
    glanceP2: string;
    chairmanKicker: string;
    chairmanTitle: string;
    chairmanName: string;
    chairmanRole: string;
    chairmanQuote1: string;
    chairmanQuote2: string;
    visionTitle: string;
    visionPoints: string[];
    missionTitle: string;
    missionPoints: string[];
    valuesTitle: string;
    values: { num: string; title: string; desc: string }[];
    coverageTitle: string;
    regions: { name: string; items: string[]; dark?: boolean }[];
  };
  services: {
    pageKicker: string;
    pageTitle: string;
    pageDesc: string;
    tabs: {
      id: 'mechanical' | 'electrical' | 'lowcurrent' | 'testing';
      title: string;
      shortDesc: string;
    }[];
    mechanicalTitle: string;
    mechanicalItems: string[];
    electricalTitle: string;
    electricalItems: string[];
    lowCurrentTitle: string;
    lowCurrentItems: string[];
    testingTitle: string;
    testingItems: string[];
    lifecycleTitle: string;
    lifecycleSteps: { num: string; title: string; desc: string }[];
    requestServiceCta: string;
  };
  projectsPage: {
    pageKicker: string;
    pageTitle: string;
    pageDesc: string;
    filterDiscipline: string;
    filterCountry: string;
    filterStatus: string;
    all: string;
    egypt: string;
    ksa: string;
    completed: string;
    inProgress: string;
    disciplines: {
      fire: string;
      hvac: string;
      plumbing: string;
      electrical: string;
      infrastructure: string;
    };
    matrixTitle: string;
    matrixSubtitle: string;
    matrixNote: string;
    colProject: string;
    colFire: string;
    colHvac: string;
    colPlumb: string;
    colElec: string;
    colInfra: string;
    otherProjectsTitle: string;
    otherProjectsDesc: string;
    viewDetails: string;
    photosCount: string;
    noResults: string;
    resetFilters: string;
  };
  projectModal: {
    country: string;
    client: string;
    owner: string;
    consultant: string;
    mainContractor: string;
    role: string;
    location: string;
    scopeTitle: string;
    statusCompleted: string;
    statusInProgress: string;
    requestSimilar: string;
    close: string;
  };
  galleryPage: {
    pageKicker: string;
    pageTitle: string;
    pageDesc: string;
    modePhotos: string;
    modeVideos: string;
    categories: {
      all: string;
      fire: string;
      hvac: string;
      electrical: string;
      plumbing: string;
      landmarks: string;
    };
    reelsTitle: string;
    reelsDesc: string;
    watchReel: string;
    futureVideoNote: string;
    closeLightbox: string;
    scene: string;
  };
  qualityPage: {
    pageKicker: string;
    pageTitle: string;
    pageDesc: string;
    qaTitle: string;
    qaDesc: string;
    qaSteps: { num: string; title: string; desc: string }[];
    certsTitle: string;
    certsDesc: string;
    inspectCert: string;
    standardsCovered: string;
    closeCert: string;
  };
  contactPage: {
    pageKicker: string;
    pageTitle: string;
    pageDesc: string;
    infoTitle: string;
    phoneLabel: string;
    emailLabel: string;
    websiteLabel: string;
    addressLabel: string;
    addressValue: string;
    copied: string;
    copy: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailInputLabel: string;
    phoneInputLabel: string;
    countryLabel: string;
    projectTypeLabel: string;
    projectTypes: string[];
    disciplinesLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
    openEmailClient: string;
    errors: {
      name: string;
      email: string;
      phone: string;
      disciplines: string;
    };
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactTitle: string;
    rights: string;
    regionsBadge: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  ar: {
    brandName: 'red-owl',
    brandSub: 'CONSTRUCTION',
    nav: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      services: 'الخدمات',
      projects: 'المشاريع',
      gallery: 'المعرض',
      quality: 'الجودة والأيزو',
      contact: 'تواصل معنا',
      requestQuote: 'اطلب عرض سعر',
      langSwitch: 'English',
    },
    hero: {
      kicker: 'أعمال كهروميكانيكية متكاملة · منذ 2020',
      title: 'نُنفذ أنظمة MEP التي تعتمد عليها المشاريع الكبرى من اليوم الأول.',
      subtitle:
        'تتخصص شركة red-owl في تنفيذ الأنظمة الميكانيكية والكهربائية والسباكة ومكافحة الحريق للمباني السكنية والتجارية والصناعية ومحطات الطاقة في مصر والمملكة العربية السعودية.',
      primaryCta: 'اطلب عرض سعر لمشروعك',
      secondaryCta: 'استكشف سجل المشاريع',
      slideLabel: 'من مواقع التنفيذ الفعلية',
    },
    kpis: {
      foundedValue: '2020',
      foundedLabel: 'سنة التأسيس والانطلاق',
      teamValue: '20+',
      teamLabel: 'مهندس وفني متخصص',
      projectsValue: '20+',
      projectsLabel: 'مشروع تجاري وصناعي وقومي',
      stationsValue: '150+',
      stationsLabel: 'محطة غازتك على مستوى مصر',
      countriesValue: '02',
      countriesLabel: 'مصر والمملكة العربية السعودية',
    },
    home: {
      scopeKicker: 'نطاق الأعمال الهندسية',
      scopeTitle: 'تنفيذ متكامل من التنسيق الهندسي حتى الاختبار والتسليم',
      scopeDesc:
        'نجمع بين الانضباط التخطيطي والمهارة الميدانية لتسليم أنظمة التكييف والحريق والكهرباء والسباكة وفق الجداول الزمنية والمواصفات القياسية.',
      exploreServices: 'عرض تفاصيل الخدمات الهندسية',
      featuredKicker: 'مشاريع مختارة',
      featuredTitle: 'بصمة تنفيذية في مصر والسعودية',
      featuredDesc:
        'شراكات طويلة الأمد مع الهيئات الهندسية، المطورين العقاريين، والمقاولين العموميين في مشاريع الطاقة، المولات، الجامعات، والمصانع.',
      viewAllProjects: 'استعراض كافة المشاريع والمصفوفة',
      coverageKicker: 'التواجد الجغرافي',
      coverageTitle: 'نغطي المحاور التنموية الرئيسية في مصر ونيوم',
      coverageDesc:
        'فرقنا الميدانية تعمل في القاهرة الجديدة، العاصمة الإدارية، الإسكندرية والدلتا، الضبعة، صعيد مصر، ومشروع نيوم بالمملكة العربية السعودية.',
      trustKicker: 'عملاء وشركاء النجاح',
      trustTitle: 'ثقة المؤسسات والاستشاريين في أصعب الاختبارات الميدانية',
      ctaBandTitle: 'هل تخطط لتنفيذ أعمال MEP لمشروع جديد؟',
      ctaBandDesc:
        'شاركنا نطاق أعمال المشروع أو جدول الكميات (BOQ) ليقوم فريقنا الهندسي بمراجعة المتطلبات وتقديم عرض فني ومالي دقيق.',
      ctaBandButton: 'تقديم طلب عرض سعر (RFP)',
    },
    about: {
      pageKicker: 'ملف الشركة والقيادة',
      pageTitle: 'بناء أنظمة هندسية موثوقة بالتخطيط المنضبط والالتزام الكامل',
      glanceTitle: 'red-owl في سطور',
      glanceP1:
        'تأسست شركة red-owl عام 2020 لتقديم حلول وأعمال الأنظمة الميكانيكية والكهربائية والسباكة (MEP) للمباني السكنية والتجارية والصناعية.',
      glanceP2:
        'يلتزم فريقنا المكون من 20 مهندساً وفنياً بأعلى معايير الجودة، السلامة المهنية في المواقع، والالتزام الدقيق بمواعيد التسليم دون تنازل عن التفاصيل الفنية.',
      chairmanKicker: 'كلمة رئيس مجلس الإدارة',
      chairmanTitle: 'انضباط التخطيط ووضوح الوعد',
      chairmanName: 'م. يوسف جودة',
      chairmanRole: 'رئيس مجلس الإدارة — red-owl',
      chairmanQuote1:
        'منذ عام 2020، نمت شركة red-owl من خلال التخطيط المنضبط، الكوادر الماهرة، ووعد واحد واضح: تسليم أنظمة ميكانيكية وكهربائية وسباكة تعمل بكفاءة واعتمادية منذ اليوم الأول.',
      chairmanQuote2:
        'نحن نولي عناية فائقة لأدق التفاصيل، ونحترم كل جدول زمني، ونتعامل مع كل مشروع باعتباره شراكة طويلة الأمد. ونتطلع إلى بناء المزيد من النجاحات مع عملائنا وشركائنا.',
      visionTitle: 'الرؤية',
      visionPoints: [
        'أن نكون الشريك الرائد والموثوق في الأنظمة الميكانيكية والكهربائية، والمعروف بجودة الهندسة والاعتمادية في التسليم.',
        'المساهمة في بناء منشآت حديثة وعالية الكفاءة والأمان عبر حلول تقنية متكاملة ومبتكرة.',
      ],
      missionTitle: 'الرسالة',
      missionPoints: [
        'تنفيذ أعمال MEP عالية الجودة بكفاءة واحترافية، في الوقت المحدد وضمن الميزانية المعتمدة.',
        'تلبية وتجاوز توقعات العملاء من خلال كوادر مؤهلة وأساليب تنفيذ مجربة وأعلى معايير السلامة.',
      ],
      valuesTitle: 'القيم الأساسية',
      values: [
        { num: '01', title: 'الجودة', desc: 'تطبيق معايير صارمة في كل مرحلة من مراحل المشروع' },
        { num: '02', title: 'الالتزام', desc: 'نحترم جداولنا الزمنية وميزانياتنا ووعودنا' },
        { num: '03', title: 'السلامة', desc: 'موقع عمل آمن لكل فرد وفق أفضل الممارسات العالمية' },
        { num: '04', title: 'الابتكار', desc: 'اعتماد التقنيات الحديثة والحلول الهندسية الذكية' },
        { num: '05', title: 'النزاهة', desc: 'الشفافية والثقة المتبادلة في جميع علاقاتنا المهنية' },
      ],
      coverageTitle: 'خريطة الانتشار والمشاريع',
      regions: [
        {
          name: 'الإسكندرية والدلتا والساحل الشمالي',
          items: [
            'شركة الإسكندرية للزيوت والصابون: ملفات التسخين والتبريد (الإسكندرية، كفر الشيخ، كفر الزيات، طنطا)',
            'محطة الضبعة النووية ومحطة ND-9: أنظمة مكافحة الحريق',
          ],
        },
        {
          name: 'التجمع الخامس والقاهرة الجديدة',
          items: ['مول ميدور، مولات سجا 1 وسجا 2، مولات الرحاب، مبنى رويال ووك (C07)'],
        },
        {
          name: 'العاصمة الإدارية الجديدة',
          items: ['المحكمة الاقتصادية (حي العدالة)', 'برج ميركوري كومبلكس (الداون تاون)'],
        },
        {
          name: 'مناطق القاهرة الكبرى',
          items: ['جامعة عين شمس الأهلية (الكيان العسكري)', 'مول بلدي (الزمالك)'],
        },
        {
          name: 'صعيد مصر',
          items: [
            'محطات غازتك: أنظمة الحريق (المنيا، سوهاج، بني سويف، الفيوم)',
            'مبادرة حياة كريمة: الأعمال الكهروميكانيكية لـ 4 قرى بمركز ملوي',
          ],
        },
        {
          name: 'المملكة العربية السعودية',
          items: ['مشروع نيوم NEOM: توريد وتركيب وتشغيل طلمبة حريق 1000 GPM معتمدة UL/FM'],
          dark: true,
        },
      ],
    },
    services: {
      pageKicker: 'القدرات والخدمات الفنية',
      pageTitle: 'نطاق الأعمال الكهروميكانيكية المتكامل',
      pageDesc:
        'تخصص دقيق في تنفيذ وتركيب واختبار كافة الأنظمة الميكانيكية والكهربائية والتيار الخفيف للمشاريع الكبرى.',
      tabs: [
        {
          id: 'mechanical',
          title: 'الأعمال الميكانيكية',
          shortDesc: 'التكييف المركزي، التهوية، السباكة، ومكافحة الحريق',
        },
        {
          id: 'electrical',
          title: 'الأعمال الكهربائية',
          shortDesc: 'توزيع القوى، اللوحات، الإضاءة، التأريض وإنذار الحريق',
        },
        {
          id: 'lowcurrent',
          title: 'أنظمة التيار الخفيف',
          shortDesc: 'المراقبة، شبكات البيانات، والتحكم في الدخول',
        },
        {
          id: 'testing',
          title: 'الاختبارات والصيانة والدعم',
          shortDesc: 'الاختبار والتشغيل والتسليم القياسي وخدمات ما بعد التسليم',
        },
      ],
      mechanicalTitle: 'الأعمال الميكانيكية',
      mechanicalItems: [
        'أنظمة التكييف المركزي والمياه المثلجة (HVAC & Chilled Water)',
        'تصنيع وتركيب مجاري الهواء والتهوية المعزولة (Ductwork & Ventilation)',
        'شبكات التغذية بالسباكة والصرف الصحي (Plumbing & Drainage)',
        'أنظمة مكافحة الحريق بالرشاشات والغاز والطلمبات (Fire Fighting Systems)',
        'غرف طلمبات المياه والرفع والإمداد الرئيسي (Pumps & Water Supply)',
        'أنظمة سحب الدخان والتحكم الآلي بالتهوية (Smoke Extraction & Controls)',
      ],
      electricalTitle: 'الأعمال الكهربائية',
      electricalItems: [
        'لوحات التوزيع الرئيسية والفرعية وتوزيع القوى (Power Distribution & Panels)',
        'أنظمة الإضاءة الداخلية والخارجية ومخارج القوى الصغيرة (Lighting & Small Power)',
        'تمديد الكابلات وحوامل الكابلات وشبكات التأريض (Cabling & Earthing)',
        'أنظمة كاميرات المراقبة وشبكات البيانات والتحكم بالدخول (CCTV, Data & Access Control)',
        'أنظمة إنذار الحريق المعنونة ولوحات الإطلاق التلقائي (Fire Alarm Systems)',
        'إجراءات الاختبار والتشغيل والاعتماد النهائي (Testing & Commissioning)',
      ],
      lowCurrentTitle: 'أنظمة التيار الخفيف والأتمتة',
      lowCurrentItems: [
        'بنية تحتية متكاملة لشبكات البيانات والألياف الضوئية',
        'منظومات كاميرات المراقبة الأمنية CCTV والتحكم المركزي',
        'بوابات وأنظمة التحكم في الدخول للأبراج والمقار الإدارية',
        'ربط لوحات إنذار الحريق بأنظمة إطفاء الغاز وسحب الدخان',
      ],
      testingTitle: 'الاختبارات والتشغيل والصيانة',
      testingItems: [
        'الاختبارات الهيدروستاتيكية لشبكات الحريق والسباكة والمياه المثلجة',
        'اتزان تدفق الهواء (TAB) ومعايرة طلمبات الحريق UL/FM',
        'اختبارات العزل الكهربائي ومقاومة الأرضي وفحص اللوحات',
        'تجهيز ملفات التشغيل والصيانة (O&M) ورسومات ما تم تنفيذه (As-Built)',
      ],
      lifecycleTitle: 'منهجية التنفيذ في الموقع',
      lifecycleSteps: [
        {
          num: '01',
          title: 'دراسة المخططات والتنسيق الهندسي',
          desc: 'مراجعة رسومات التنفيذ (Shop Drawings) ومنع تعارض المسارات الميكانيكية والكهربائية قبل البدء.',
        },
        {
          num: '02',
          title: 'توريد واعتماد الخامات',
          desc: 'تقديم الاعتمادات الفنية للمواد والطلمبات واللوحات للتوافق مع مواصفات الاستشاري.',
        },
        {
          num: '03',
          title: 'التنفيذ والتركيب تحت الإشراف',
          desc: 'تنفيذ الأعمال بواسطة مهندسين وفنيين متخصصين مع فحوصات دورية لكل مرحلة.',
        },
        {
          num: '04',
          title: 'الاختبار والتشغيل والتسليم',
          desc: 'إجراء كافة اختبارات الأداء والضغط والسلامة وتسليم المشروع خالياً من الملاحظات.',
        },
      ],
      requestServiceCta: 'اطلب تنفيذ هذا التخصص لمشروعك',
    },
    projectsPage: {
      pageKicker: 'سجل الأعمال والمشاريع',
      pageTitle: 'مشاريع مختارة في مصر والمملكة العربية السعودية',
      pageDesc:
        'استعرض سجل مشاريعنا المنفذة والجاري تنفيذها عبر القطاعات التجارية، الصناعية، التعليمية، محطات الطاقة، ومشاريع رؤية 2030.',
      filterDiscipline: 'التخصص',
      filterCountry: 'الدولة',
      filterStatus: 'حالة التنفيذ',
      all: 'الكل',
      egypt: 'مصر',
      ksa: 'السعودية',
      completed: 'مكتمل',
      inProgress: 'قيد التنفيذ',
      disciplines: {
        fire: 'مكافحة الحريق',
        hvac: 'التكييف HVAC',
        plumbing: 'السباكة',
        electrical: 'الكهرباء',
        infrastructure: 'البنية التحتية',
      },
      matrixTitle: 'مصفوفة نطاقات الأعمال المنفذة (What We Delivered)',
      matrixSubtitle: 'ملخص التخصصات المنفذة في أول 15 مشروعاً رئيسياً — اضغط على أي صف لعرض التفاصيل والصور.',
      matrixNote: 'بناءً على نطاق الأعمال المسند للشركة في كل مشروع.',
      colProject: 'المشروع',
      colFire: 'حريق',
      colHvac: 'تكييف',
      colPlumb: 'سباكة',
      colElec: 'كهرباء',
      colInfra: 'بنية تحتية',
      otherProjectsTitle: 'مشاريع وعملاء آخرون',
      otherProjectsDesc: 'قائمة إضافية من المنشآت الصناعية والأبراج والمحطات التي ساهمت red-owl في تنفيذها.',
      viewDetails: 'تفاصيل المشروع والصور',
      photosCount: 'صور',
      noResults: 'لا توجد مشاريع مطابقة للتصفية الحالية.',
      resetFilters: 'إعادة ضبط الفلاتر',
    },
    projectModal: {
      country: 'الدولة',
      client: 'العميل',
      owner: 'المالك',
      consultant: 'الاستشاري',
      mainContractor: 'المقاول العام',
      role: 'دور الشركة',
      location: 'الموقع',
      scopeTitle: 'نطاق الأعمال المنفذ',
      statusCompleted: 'مشروع مكتمل',
      statusInProgress: 'جاري التنفيذ',
      requestSimilar: 'اطلب عرض سعر لنطاق مشابه',
      close: 'إغلاق',
    },
    galleryPage: {
      pageKicker: 'توثيق التنفيذ الميداني',
      pageTitle: 'معرض الصور والفيديوهات الهندسية',
      pageDesc:
        'صور حقيقية مباشرة من مواقع العمل وغرف الطلمبات وشبكات التكييف واللوحات الكهربائية في مشاريعنا بمصر والسعودية.',
      modePhotos: 'صور المواقع الحقيقية',
      modeVideos: 'فيديوهات وجولات التنفيذ',
      categories: {
        all: 'كافة التخصصات',
        fire: 'غرف وطلمبات الحريق',
        hvac: 'التكييف ومجاري الهواء',
        electrical: 'الكهرباء واللوحات',
        plumbing: 'السباكة والفلترة',
        landmarks: 'واجهات ومواقع كبرى',
      },
      reelsTitle: 'جولات وتوثيق التنفيذ الميداني (Execution Reels)',
      reelsDesc:
        'عروض مرئية تفاعلية توثق مراحل التركيب والاختبار في أبرز المشاريع، مع جاهزية كاملة لإضافة فيديوهات المواقع المستقبلية.',
      watchReel: 'تشغيل العرض التفاعلي',
      futureVideoNote: 'مهيأ لدعم رفع وربط ملفات الفيديو (MP4 / YouTube / Vimeo)',
      closeLightbox: 'إغلاق العارض',
      scene: 'المشهد',
    },
    qualityPage: {
      pageKicker: 'ضمان الجودة والاعتمادات',
      pageTitle: 'شهادات الأيزو ومعايير الجودة والسلامة',
      pageDesc:
        'نطبق معايير قياسية معتمدة ونراقب الجودة في كل مرحلة، بدءاً من اعتماد الخامات وحتى الاختبار والتسليم النهائي.',
      qaTitle: 'منهجية ضمان الجودة (Quality Assurance Process)',
      qaDesc: 'أربع مراحل مترابطة لضمان مطابقة كل تركيب للكود الهندسي وتوقعات الاستشاري.',
      qaSteps: [
        {
          num: '1',
          title: 'التخطيط (Plan)',
          desc: 'إجراءات موثقة وقوائم فحص هندسية (Checklists) مخصصة لكل تخصص قبل بدء العمل.',
        },
        {
          num: '2',
          title: 'الاعتماد (Approve)',
          desc: 'فحص واعتماد كافة الخامات والمعدات والطلمبات قبل توريدها إلى موقع المشروع.',
        },
        {
          num: '3',
          title: 'الفحص (Inspect)',
          desc: 'تفتيش ميداني دوري وإشراف هندسي مستمر أثناء مراحل التركيب والتثبيت.',
        },
        {
          num: '4',
          title: 'الاختبار (Test)',
          desc: 'اختبارات شاملة للضغط والتشغيل والمعايرة (Commissioning) قبل التسليم النهائي.',
        },
      ],
      certsTitle: 'الشهادات والمعايير المعتمدة',
      certsDesc: 'اضغط على أي شهادة أو معيار لاستعراض نطاق التطبيق الهندسي والالتزام الميداني.',
      inspectCert: 'استعراض نطاق المعيار',
      standardsCovered: 'نطاق الالتزام والتطبيق',
      closeCert: 'إغلاق',
    },
    contactPage: {
      pageKicker: 'تواصل معنا والمناقصات',
      pageTitle: 'دعنا نبني أنظمة موثوقة معاً',
      pageDesc:
        'فريقنا الهندسي مستعد لاستقبال طلبات عروض الأسعار، كراسات الشروط، واستفسارات الشراكة في مصر والسعودية.',
      infoTitle: 'بيانات التواصل المباشر',
      phoneLabel: 'الهاتف',
      emailLabel: 'البريد الإلكتروني',
      websiteLabel: 'الموقع الإلكتروني',
      addressLabel: 'العنوان',
      addressValue: 'التجمع الخامس، جنوب الأكاديمية C، شارع التسعين، فيلا 328',
      copied: 'تم النسخ',
      copy: 'نسخ',
      formTitle: 'نموذج طلب عرض سعر (RFP)',
      formDesc: 'املأ بيانات مشروعك وسيتواصل معك مهندس التسعير خلال 24 ساعة عمل.',
      nameLabel: 'الاسم الكامل *',
      namePlaceholder: 'مثال: م. أحمد محمود',
      companyLabel: 'الشركة / الجهة',
      companyPlaceholder: 'اسم شركة التطوير أو المقاولات',
      emailInputLabel: 'البريد الإلكتروني *',
      phoneInputLabel: 'رقم الهاتف / الواتساب *',
      countryLabel: 'دولة المشروع',
      projectTypeLabel: 'نوع المشروع',
      projectTypes: ['مول تجاري / إداري', 'مصنع / منشأة صناعية', 'برج متعدد الاستخدامات', 'محطة طاقة / بنية تحتية', 'مجمع سكني / تعليمي'],
      disciplinesLabel: 'التخصصات المطلوبة *',
      messageLabel: 'نبذة عن المشروع أو نطاق الأعمال',
      messagePlaceholder: 'اذكر المساحة، الموقع، أو تفاصيل الأعمال الميكانيكية والكهربائية المطلوبة...',
      submitBtn: 'إرسال طلب عرض السعر',
      successTitle: 'تم استلام طلبك بنجاح',
      successDesc:
        'شكراً لتواصلك مع red-owl. تم تسجيل بيانات الطلب الهندسي وجاهز للتواصل المباشر مع فريق التسعير.',
      sendAnother: 'إرسال طلب جديد',
      openEmailClient: 'إرسال نسخة عبر البريد مباشرة',
      errors: {
        name: 'يرجى إدخال الاسم الكامل.',
        email: 'يرجى إدخال بريد إلكتروني صحيح.',
        phone: 'يرجى إدخال رقم هاتف صحيح.',
        disciplines: 'يرجى اختيار تخصص واحد على الأقل.',
      },
    },
    footer: {
      tagline: 'شريكك الموثوق في تنفيذ الأعمال الميكانيكية والكهربائية والسباكة ومكافحة الحريق في مصر والسعودية منذ 2020.',
      quickLinks: 'خريطة الموقع',
      contactTitle: 'بيانات التواصل',
      rights: 'جميع الحقوق محفوظة لشركة red-owl.',
      regionsBadge: 'القاهرة · نيوم',
    },
  },
  en: {
    brandName: 'Red Owl',
    brandSub: 'CONSTRUCTION',
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      gallery: 'Gallery',
      quality: 'Quality & ISO',
      contact: 'Contact',
      requestQuote: 'Request Quote',
      langSwitch: 'عربي',
    },
    hero: {
      kicker: 'MEP Works · Since 2020',
      title: 'Mechanical, electrical and plumbing systems that work reliably from day one.',
      subtitle:
        'Red Owl Construction delivers turnkey HVAC, firefighting, electrical, plumbing, and infrastructure works for residential, commercial, industrial, and energy landmarks across Egypt and Saudi Arabia.',
      primaryCta: 'Request Project Quote',
      secondaryCta: 'Explore Portfolio',
      slideLabel: 'From active project sites',
    },
    kpis: {
      foundedValue: '2020',
      foundedLabel: 'Year Founded',
      teamValue: '20+',
      teamLabel: 'Engineers & Technicians',
      projectsValue: '20+',
      projectsLabel: 'Delivered & Active Projects',
      stationsValue: '150+',
      stationsLabel: 'Gastec Stations Nationwide',
      countriesValue: '02',
      countriesLabel: 'Egypt & Saudi Arabia',
    },
    home: {
      scopeKicker: 'Scope of Work',
      scopeTitle: 'Complete MEP delivery from coordination to final handover',
      scopeDesc:
        'We combine disciplined planning and skilled field teams to deliver HVAC, firefighting, power, and plumbing installations on schedule.',
      exploreServices: 'Explore Engineering Services',
      featuredKicker: 'Selected Work',
      featuredTitle: 'Proven execution across Egypt and Saudi Arabia',
      featuredDesc:
        'Trusted by engineering authorities, major developers, and international consultants across energy substations, malls, universities, and industrial plants.',
      viewAllProjects: 'View All Projects & Matrix',
      coverageKicker: 'Geographic Coverage',
      coverageTitle: 'Active across Egypt’s strategic hubs and NEOM',
      coverageDesc:
        'Field execution spanning New Cairo, the New Administrative Capital, Alexandria & Delta, El Dabaa, Upper Egypt, and NEOM in Saudi Arabia.',
      trustKicker: 'Clients & Project Stakeholders',
      trustTitle: 'Trusted on mission-critical infrastructure and commercial developments',
      ctaBandTitle: 'Planning MEP works for an upcoming project?',
      ctaBandDesc:
        'Share your project scope or BOQ with our engineering and estimation team for a structured technical and commercial proposal.',
      ctaBandButton: 'Submit RFP Inquiry',
    },
    about: {
      pageKicker: 'Company Profile & Leadership',
      pageTitle: 'Built on disciplined planning, skilled people, and dependable delivery',
      glanceTitle: 'Red Owl at a Glance',
      glanceP1:
        'Red Owl Construction was founded in 2020 and delivers mechanical, electrical and plumbing (MEP) works for residential, commercial and industrial buildings.',
      glanceP2:
        'Our team of 20 engineers and technicians is committed to engineering quality, site safety, and on-time delivery.',
      chairmanKicker: 'Message from the Chairman',
      chairmanTitle: 'Disciplined planning and one clear promise',
      chairmanName: 'Youssef Gouda',
      chairmanRole: 'Chairman — Red Owl Construction',
      chairmanQuote1:
        'Since 2020, Red Owl has grown through disciplined planning, skilled people and one clear promise: to deliver mechanical, electrical and plumbing systems that work reliably from day one.',
      chairmanQuote2:
        'We pay close attention to detail, respect every schedule and treat each project as a long-term partnership. We look forward to building more of them with our clients and partners.',
      visionTitle: 'Vision',
      visionPoints: [
        'To be a leading and trusted partner in mechanical and electrical systems, known for engineering quality and dependable delivery.',
        'To help build modern, efficient and safe buildings through integrated, innovative technical solutions.',
      ],
      missionTitle: 'Mission',
      missionPoints: [
        'To deliver high-quality MEP works with efficiency and professionalism, on time and within budget.',
        'To meet and exceed client expectations through skilled people, proven methods and the highest standards of safety.',
      ],
      valuesTitle: 'Core Values',
      values: [
        { num: '01', title: 'Quality', desc: 'Strict standards at every stage of the project' },
        { num: '02', title: 'Commitment', desc: 'We honor our schedules, budgets and promises' },
        { num: '03', title: 'Safety', desc: 'A safe site for every worker, following best practice' },
        { num: '04', title: 'Innovation', desc: 'Modern technology and smart technical solutions' },
        { num: '05', title: 'Integrity', desc: 'Transparency and trust in every relationship' },
      ],
      coverageTitle: 'Regional Coverage',
      regions: [
        {
          name: 'Alexandria, Delta & North Coast',
          items: [
            'Alex Co. for Oil and Soap: heating and cooling coils (Alexandria, Kafr El Sheikh, Kafr El Zayat, Tanta)',
            'Dabaa Nuclear Power Plant & ND-9 Substation: fire fighting systems',
          ],
        },
        {
          name: '5th Settlement & New Cairo',
          items: ['Middor Mall, Saja-1 and Saja-2 Malls, Al Rehab Malls, Royal Walk (C07)'],
        },
        {
          name: 'New Administrative Capital',
          items: ['Economic Court (Justice District)', 'Mercury Complex Tower (Downtown)'],
        },
        {
          name: 'Other Cairo Areas',
          items: ['Ain Shams National University (Military Compound)', 'Balady Mall (Zamalek)'],
        },
        {
          name: 'Upper Egypt',
          items: [
            'Gastec: fire fighting (Minya, Sohag, Beni Suef, Fayoum)',
            'Decent Life: electromechanical works, 4 Mallawi villages (Dayrout Umm Nakhla, El Sheikh Shabika, Qasr Hor, Atqa)',
          ],
        },
        {
          name: 'Saudi Arabia',
          items: ['NEOM (1000 GPM UL/FM listed split case fire pump system)'],
          dark: true,
        },
      ],
    },
    services: {
      pageKicker: 'Engineering Capabilities',
      pageTitle: 'Complete Mechanical, Electrical & Low-Current Scope',
      pageDesc:
        'From design coordination and material submittals to heavy installation, testing, and commissioning.',
      tabs: [
        {
          id: 'mechanical',
          title: 'Mechanical Works',
          shortDesc: 'HVAC, chilled water, ductwork, plumbing & firefighting',
        },
        {
          id: 'electrical',
          title: 'Electrical Works',
          shortDesc: 'Power distribution, panels, lighting, cabling & fire alarm',
        },
        {
          id: 'lowcurrent',
          title: 'Low Current Systems',
          shortDesc: 'CCTV, structured data networks & access control',
        },
        {
          id: 'testing',
          title: 'Testing & Maintenance',
          shortDesc: 'Commissioning, balancing & ongoing technical support',
        },
      ],
      mechanicalTitle: 'Mechanical Works',
      mechanicalItems: [
        'HVAC and chilled water systems',
        'Ductwork and ventilation',
        'Plumbing and drainage',
        'Fire fighting systems',
        'Pumps and water supply',
        'Smoke extraction and controls',
      ],
      electricalTitle: 'Electrical Works',
      electricalItems: [
        'Power distribution and panels',
        'Lighting and small power',
        'Cabling and earthing',
        'CCTV, data networks and access control',
        'Fire alarm systems',
        'Testing and commissioning',
      ],
      lowCurrentTitle: 'Low Current & Building Integration',
      lowCurrentItems: [
        'Structured data cabling and fiber backbones',
        'CCTV surveillance and central security monitoring',
        'Access control systems for commercial towers and campuses',
        'Fire alarm integration with CO2 suppression & smoke extraction',
      ],
      testingTitle: 'Testing, Maintenance & Support',
      testingItems: [
        'Hydrostatic pressure testing for fire, chilled water & plumbing lines',
        'UL/FM fire pump flow & performance commissioning',
        'Electrical insulation, earthing resistance & switchgear verification',
        'As-built documentation and preventive maintenance support',
      ],
      lifecycleTitle: 'Site Delivery Lifecycle',
      lifecycleSteps: [
        {
          num: '01',
          title: 'Design Coordination',
          desc: 'Clash-free shop drawings and multi-trade corridor routing prior to site mobilization.',
        },
        {
          num: '02',
          title: 'Material Submittals',
          desc: 'Consultant-approved equipment, valves, panels, and UL/FM listed machinery.',
        },
        {
          num: '03',
          title: 'Supervised Installation',
          desc: 'Dedicated engineers and technicians executing work with stage-gate site inspections.',
        },
        {
          num: '04',
          title: 'Testing & Handover',
          desc: 'Full system balancing, commissioning logs, and snag-free client handover.',
        },
      ],
      requestServiceCta: 'Request Quote for This Discipline',
    },
    projectsPage: {
      pageKicker: 'Project Portfolio',
      pageTitle: 'Selected MEP Work Across Egypt & Saudi Arabia',
      pageDesc:
        'Explore our completed and active installations across commercial malls, industrial plants, universities, power stations, and NEOM.',
      filterDiscipline: 'Discipline',
      filterCountry: 'Country',
      filterStatus: 'Status',
      all: 'All',
      egypt: 'Egypt',
      ksa: 'Saudi Arabia',
      completed: 'Completed',
      inProgress: 'In Progress',
      disciplines: {
        fire: 'Fire Fighting',
        hvac: 'HVAC',
        plumbing: 'Plumbing',
        electrical: 'Electrical',
        infrastructure: 'Infrastructure',
      },
      matrixTitle: 'What We Delivered',
      matrixSubtitle: 'Interactive capability breakdown across 15 flagship projects — click any row to inspect photos & scope.',
      matrixNote: 'Based on the scope of works listed for each project.',
      colProject: 'Project',
      colFire: 'Fire',
      colHvac: 'HVAC',
      colPlumb: 'Plumb',
      colElec: 'Elec',
      colInfra: 'Infra',
      otherProjectsTitle: 'Other Projects',
      otherProjectsDesc: 'Additional industrial facilities, towers, and national station rollouts delivered by Red Owl.',
      viewDetails: 'View Case Study',
      photosCount: 'photos',
      noResults: 'No projects match your current filters.',
      resetFilters: 'Reset Filters',
    },
    projectModal: {
      country: 'Country',
      client: 'Client',
      owner: 'Owner',
      consultant: 'Consultant',
      mainContractor: 'Main Contractor',
      role: 'Our Role',
      location: 'Location',
      scopeTitle: 'Scope of Works',
      statusCompleted: 'Completed',
      statusInProgress: 'In Progress',
      requestSimilar: 'Request Quote for Similar Scope',
      close: 'Close',
    },
    galleryPage: {
      pageKicker: 'Field Execution Archive',
      pageTitle: 'Site Photography & Execution Reels',
      pageDesc:
        'Authentic installation photography from fire pump rooms, HVAC ducting, switchgear rooms, and active project sites.',
      modePhotos: 'Site Photography',
      modeVideos: 'Execution Reels & Video',
      categories: {
        all: 'All Trades',
        fire: 'Fire Pump Rooms & Networks',
        hvac: 'HVAC & Ductwork',
        electrical: 'Electrical & Switchgear',
        plumbing: 'Plumbing & Filtration',
        landmarks: 'Site Landmarks',
      },
      reelsTitle: 'Field Execution Reels',
      reelsDesc:
        'Interactive visual walkthroughs compiled from site photography, structured with plug-and-play support for uploaded site videos.',
      watchReel: 'Play Reel Showcase',
      futureVideoNote: 'Ready for direct MP4, YouTube, or Vimeo site video embeds',
      closeLightbox: 'Close Viewer',
      scene: 'Scene',
    },
    qualityPage: {
      pageKicker: 'Quality Assurance & Compliance',
      pageTitle: 'ISO Certifications & Engineering Standards',
      pageDesc:
        'We apply recognized standards and check quality at every stage, from material approval to final handover.',
      qaTitle: 'Quality Assurance Process',
      qaDesc: 'Four disciplined gates guaranteeing code compliance and reliable operation.',
      qaSteps: [
        {
          num: '1',
          title: 'Plan',
          desc: 'Documented procedures and inspection checklists for each trade',
        },
        {
          num: '2',
          title: 'Approve',
          desc: 'Materials and equipment approved before they reach site',
        },
        {
          num: '3',
          title: 'Inspect',
          desc: 'Regular site inspections and supervision during installation',
        },
        {
          num: '4',
          title: 'Test',
          desc: 'Full testing and commissioning before handover',
        },
      ],
      certsTitle: 'ISO & Fire Protection Accreditations',
      certsDesc: 'Select any standard to review its engineering scope and field compliance controls.',
      inspectCert: 'Inspect Standard Scope',
      standardsCovered: 'Compliance & Field Controls',
      closeCert: 'Close',
    },
    contactPage: {
      pageKicker: 'Get in Touch & Tenders',
      pageTitle: 'Let’s build reliable systems together.',
      pageDesc:
        'Reach our engineering and estimation team for tenders, technical submittals, or MEP contracting inquiries across Egypt and Saudi Arabia.',
      infoTitle: 'Contact Details',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      websiteLabel: 'Website',
      addressLabel: 'Address',
      addressValue: '5th Settlement, South Academy C, 90th St, Villa 328',
      copied: 'Copied',
      copy: 'Copy',
      formTitle: 'Request for Proposal (RFP)',
      formDesc: 'Provide your project specifications and our estimation team will respond within 24 business hours.',
      nameLabel: 'Full Name *',
      namePlaceholder: 'e.g. Eng. Ahmed Mahmoud',
      companyLabel: 'Company / Organization',
      companyPlaceholder: 'Developer or main contractor name',
      emailInputLabel: 'Email Address *',
      phoneInputLabel: 'Phone / WhatsApp *',
      countryLabel: 'Project Country',
      projectTypeLabel: 'Project Sector',
      projectTypes: ['Commercial Mall / Retail', 'Industrial Plant / Factory', 'Mixed-Use Tower', 'Power Station / Infrastructure', 'Residential / Educational'],
      disciplinesLabel: 'Required MEP Disciplines *',
      messageLabel: 'Project Scope & Notes',
      messagePlaceholder: 'Share approximate area, location, or specific mechanical/electrical requirements...',
      submitBtn: 'Submit RFP Inquiry',
      successTitle: 'RFP Inquiry Recorded',
      successDesc:
        'Thank you for contacting Red Owl Construction. Your technical brief is ready for our estimation team.',
      sendAnother: 'Submit Another Inquiry',
      openEmailClient: 'Send Copy via Email Client',
      errors: {
        name: 'Please enter your full name.',
        email: 'Please enter a valid email address.',
        phone: 'Please enter a valid phone number.',
        disciplines: 'Please select at least one MEP discipline.',
      },
    },
    footer: {
      tagline:
        'Mechanical, electrical, plumbing, and firefighting contracting across Egypt and Saudi Arabia since 2020.',
      quickLinks: 'Navigation',
      contactTitle: 'Headquarters & Contact',
      rights: 'Red Owl Construction. All rights reserved.',
      regionsBadge: 'Cairo · NEOM',
    },
  },
};
