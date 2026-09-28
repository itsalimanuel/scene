export interface EventItem {
  slug: string;
  category: { en: string; ar: string };
  badge: { en: string; ar: string };
  title: { en: string; ar: string };
  date: { en: string; ar: string };
  time: { en: string; ar: string };
  location: { en: string; ar: string };
  city: { en: string; ar: string };
  cmeCredits: string;
  image: string;
  shortDesc: { en: string; ar: string };
  fullDesc: { en: string; ar: string };
  objectives: { en: string[]; ar: string[] };
  agenda: {
    time: string;
    topic: { en: string; ar: string };
    speaker: { en: string; ar: string };
  }[];
  technologies: { en: string; ar: string }[];
  speakers: {
    name: { en: string; ar: string };
    title: { en: string; ar: string };
    hospital: { en: string; ar: string };
    image: string;
  }[];
  gallery: string[];
}

export const eventsList: EventItem[] = [
  {
    slug: "annual-spine-pain-symposium",
    category: { en: "Flagship Keynote", ar: "المؤتمر السنوي الرئيسي" },
    badge: { en: "Annual Symposium", ar: "الندوة السنوية" },
    title: {
      en: "Annual Spine & Interventional Pain Symposium",
      ar: "المؤتمر السنوي لجراحة العمود الفقري وعلاج الألم التداخلي",
    },
    date: { en: "November 14-16, 2026", ar: "١٤ - ١٦ نوفمبر ٢٠٢٦" },
    time: { en: "09:00 AM – 05:30 PM", ar: "٠٩:٠٠ صباحاً – ٠٥:٣٠ مساءً" },
    location: {
      en: "Dubai World Trade Centre (DWTC)",
      ar: "مركز دبي التجاري العالمي",
    },
    city: { en: "Dubai, UAE", ar: "دبي، الإمارات العربية المتحدة" },
    cmeCredits: "14 CME Credits (DHA Accredited)",
    image: "/images/event-spine-symposium.jpg",
    shortDesc: {
      en: "A premier 3-day scientific symposium gathering regional spine surgeons and pain specialists to examine next-generation ablation protocols.",
      ar: "مؤتمر علمي رائد على مدار ٣ أيام يجمع كبار جراحي العمود الفقري وأطباء الألم لمناقشة أحدث بروتوكولات التردد الحراري والدمج الفقري.",
    },
    fullDesc: {
      en: "The Annual Spine & Interventional Pain Symposium is the UAE's dedicated clinical forum exploring innovative approaches to chronic spinal pain, endoscopic decompression, and segmental stabilization. Hosted by Scene Medical Supplies in partnership with international surgical faculty, this symposium delivers peer-reviewed lectures, cadaveric technique demonstrations, and clinical case presentations.",
      ar: "يعد المؤتمر السنوي لجراحة العمود الفقري وعلاج الألم التداخلي المنصة العلمية الأبرز في دولة الإمارات لاستعراض أحدث تقنيات علاج آلام الظهر المزمنة واستئصال الغضروف بالمنظار والتثبيت القطني. يجمع المؤتمر نخبة من الاستشاريين الدوليين والمحليين في جلسات نقاشية وورش عمل تطبيقية معتمدة.",
    },
    objectives: {
      en: [
        "Evaluate radiofrequency neurotomy protocols for facet and sacroiliac chronic pain.",
        "Analyze biomechanical load sharing in 3D porous titanium vs. PEEK interbody cages.",
        "Review clinical outcomes and patient recovery timelines in endoscopic decompression.",
        "Examine regulatory frameworks and hospital consignment workflows in the UAE.",
      ],
      ar: [
        "تقييم بروتوكولات التردد الحراري (RFA) لتعطيل إشارات الألم في مفاصل الفقرات.",
        "تحليل الثبات الحيوي والميكانيكي لأقفاص التيتانيوم المسامية ثلاثية الأبعاد مقارنة بالـ PEEK.",
        "مراجعة النتائج السريرية وسرعة تعافي المرضى في جراحات مناظير العمود الفقري.",
        "استعراض الأطر التنظيمية وسلاسل توريد المستشفيات في دولة الإمارات.",
      ],
    },
    agenda: [
      {
        time: "09:00 AM",
        topic: {
          en: "Opening Address: Advancing Surgical Technology in the UAE",
          ar: "الكلمة الافتتاحية: تطوير التقنيات الجراحية في دولة الإمارات",
        },
        speaker: {
          en: "Clinical Leadership Panel",
          ar: "لجنة القيادة الإكلينيكية",
        },
      },
      {
        time: "10:30 AM",
        topic: {
          en: "Thermal Neurotomy: Multipolar RF Cannula Systems in Practice",
          ar: "التردد الحراري: الاستخدام العملي للكانولات متعددة الأقطاب",
        },
        speaker: {
          en: "Dr. Karim Al-Hashemi, Senior Interventionalist",
          ar: "د. كريم الهاشمي، استشاري علاج الألم",
        },
      },
      {
        time: "01:30 PM",
        topic: {
          en: "3D Titanium vs PEEK Cages: Osseointegration and Subsidence",
          ar: "مقارنة أقفاص التيتانيوم وPEEK: الاندماج العظمي ومنع الهبوط",
        },
        speaker: {
          en: "Prof. Marcus Vance, Spine Fellowship Director",
          ar: "البروفيسور ماركوس فانس، مدير برنامج زمالة العمود الفقري",
        },
      },
      {
        time: "03:30 PM",
        topic: {
          en: "Hands-on Technical Lab: Cannula Placement & Live Bio-Telemetry",
          ar: "ورشة عمل تدريبية: توجيه الكانولات ومراقبة الإشارات الحيوية",
        },
        speaker: {
          en: "Scene Medical Clinical Specialist Team",
          ar: "فريق سين للمتخصصين الإكلينيكيين",
        },
      },
    ],
    technologies: [
      { en: "Multipolar RFA Generators", ar: "مولدات التردد الحراري متعددة الأقطاب" },
      { en: "3D Porous Titanium Lumbar Cages", ar: "أقفاص تيتانيوم مسامية ثلاثية الأبعاد" },
      { en: "Interspinous Dynamic Spacers", ar: "دعامات خلفية ديناميكية بين الفقرات" },
      { en: "Balloon Kyphoplasty Restoration Kits", ar: "مجموعات تقويم الفقرات بالبالون" },
    ],
    speakers: [
      {
        name: { en: "Dr. Karim Al-Hashemi", ar: "د. كريم الهاشمي" },
        title: { en: "Consultant Spine & Pain Specialist", ar: "استشاري جراحة العمود الفقري وعلاج الألم" },
        hospital: { en: "Dubai Healthcare City", ar: "مدينة دبي الطبية" },
        image: "/images/doctor-1.jpg",
      },
      {
        name: { en: "Dr. Laila Mansoor", ar: "د. ليلى منصور" },
        title: { en: "Head of Orthopedic Surgery", ar: "رئيس قسم جراحة العظام" },
        hospital: { en: "Sheikh Shakhbout Medical City", ar: "مدينة الشيخ شخبوط الطبية" },
        image: "/images/doctor-2.jpg",
      },
      {
        name: { en: "Prof. Marcus Vance", ar: "البروفيسور ماركوس فانس" },
        title: { en: "Spine Fellowship Director", ar: "مدير زمالة العمود الفقري" },
        hospital: { en: "International Faculty Guest", ar: "أستاذ زائر وخبير جراحي" },
        image: "/images/doctor-3.jpg",
      },
    ],
    gallery: [
      "/images/event-spine-symposium.jpg",
      "/images/gallery-conference-stage.jpg",
      "/images/gallery-medical-team.jpg",
      "/images/gallery-surgery-lab.jpg",
      "/images/gallery-panel-discussion.jpg",
      "/images/about-surgical-lab.jpg",
    ],
  },
  {
    slug: "endoscopic-spine-masterclass",
    category: { en: "Clinical Workshop", ar: "ورشة عمل إكلينيكية" },
    badge: { en: "Hands-on Masterclass", ar: "ماستر كلاس تطبيقي" },
    title: {
      en: "Endoscopic Spine Surgery & Micro-Decompression Masterclass",
      ar: "ماستر كلاس جراحة مناظير العمود الفقري وتخفيف الضغط المجهري",
    },
    date: { en: "December 05, 2026", ar: "٠٥ ديسمبر ٢٠٢٦" },
    time: { en: "08:30 AM – 04:30 PM", ar: "٠٨:٣٠ صباحاً – ٠٤:٣٠ مساءً" },
    location: {
      en: "Mohammed Bin Rashid University (MBRU) Surgical Sim Center",
      ar: "مركز المحاكاة الجراحية بجامعة محمد بن راشد للعلوم الطبية",
    },
    city: { en: "Dubai, UAE", ar: "دبي، الإمارات العربية المتحدة" },
    cmeCredits: "8 CME Credits (DHA Accredited)",
    image: "/images/event-masterclass.jpg",
    shortDesc: {
      en: "Specialist-led masterclass exploring biportal and uniportal endoscopic decompression techniques with simulation dry labs.",
      ar: "ورشة تدريبية متقدمة لاستعراض تقنيات استئصال الانزلاق الغضروفي وتوسيع القناة العصبية بالمنظار عبر مختبرات المحاكاة الجراحية.",
    },
    fullDesc: {
      en: "This focused single-day masterclass guides orthopedic and neurosurgeons through step-by-step interlaminar and transforaminal endoscopic approaches. Attendees participate in hands-on workstation trials, learning optical scope management, targeted burring, and ligamentum flavum resection with zero surgical muscle trauma.",
      ar: "ماستر كلاس تطبيقي مكثف يتيح لجراحي العظام والأعصاب إتقان مسارات الدخول عبر النوافذ الفقرية الطبيعية باستخدام المناظير الدقيقة. يتدرب المشاركون على التحكم في المنظار الضوئي، واستخدام المبارد المجهرية بدقة، واستئصال الغضاريف دون إحداث أضرار في العضلات المحيطة.",
    },
    objectives: {
      en: [
        "Master the ergonomics and camera fluid-management systems in uniportal endoscopy.",
        "Demonstrate safe dural mobilization and nerve root decompression techniques.",
        "Examine instrument maintenance and sterile theater handling protocols.",
      ],
      ar: [
        "إتقان ديناميكية العمل والتحكم في تدفق السوائل وكاميرا المنظار الأحادي.",
        "التطبيق الآمن لتقنيات إبعاد الغشاء الجافي وتوسيع مخارج الجذور العصبية.",
        "معايير التعقيم والصيانة الدقيقة لأجهزة ومعدات المناظير الجراحية.",
      ],
    },
    agenda: [
      {
        time: "08:30 AM",
        topic: {
          en: "Anatomic Landmarks in Interlaminar & Transforaminal Access",
          ar: "المعالم التشريحية للمداخل بين الصفائح وعبر الثقوب الفقرية",
        },
        speaker: {
          en: "Dr. Tariq Al-Nuaimi",
          ar: "د. طارق النعيمي",
        },
      },
      {
        time: "11:00 AM",
        topic: {
          en: "Simulator Workshop: High-Speed Diamond Burring & Nerve Root Safety",
          ar: "تدريب عملي: استخدام المبارد الماسية الدقيقة وسلامة الجذور العصبية",
        },
        speaker: {
          en: "Senior Technical Proctors",
          ar: "فريق الإشراف الجراحي",
        },
      },
      {
        time: "02:00 PM",
        topic: {
          en: "Complication Avoidance & Fast-Track Same-Day Discharge Protocols",
          ar: "تجنب المضاعفات وبروتوكولات الخروج السريع في نفس اليوم",
        },
        speaker: {
          en: "Dr. Laila Mansoor",
          ar: "د. ليلى منصور",
        },
      },
    ],
    technologies: [
      { en: "Full-HD & 4K Endoscopic Tower Systems", ar: "أبراج مناظير عالية الدقة بدقة 4K" },
      { en: "High-Speed Micro-Dissection Drills", ar: "مثاقب مجهرية فائقة السرعة" },
      { en: "Radiofrequency Hemostasis Probes", ar: "مجسات التخثر بالتردد الحراري" },
    ],
    speakers: [
      {
        name: { en: "Dr. Tariq Al-Nuaimi", ar: "د. طارق النعيمي" },
        title: { en: "Consultant Neurosurgeon", ar: "استشاري جراحة المخ والأعصاب والعمود الفقري" },
        hospital: { en: "Rashid Hospital Trauma Center", ar: "مركز الحوادث بمستشفى راشد" },
        image: "/images/doctor-3.jpg",
      },
      {
        name: { en: "Dr. Laila Mansoor", ar: "د. ليلى منصور" },
        title: { en: "Head of Orthopedic Surgery", ar: "رئيس قسم جراحة العظام" },
        hospital: { en: "Sheikh Shakhbout Medical City", ar: "مدينة الشيخ شخبوط الطبية" },
        image: "/images/doctor-2.jpg",
      },
    ],
    gallery: [
      "/images/event-masterclass.jpg",
      "/images/gallery-endoscope-system.jpg",
      "/images/gallery-surgery-lab.jpg",
      "/images/focus-endoscopy.jpg",
      "/images/gallery-medical-team.jpg",
      "/images/solutions-rf-device.jpg",
    ],
  },
  {
    slug: "arab-health-congress-expo",
    category: { en: "Exhibition", ar: "المعرض الطبي" },
    badge: { en: "International Expo", ar: "معرض دولي" },
    title: {
      en: "Scene Medical at Arab Health Exhibition & Congress",
      ar: "جناح سين للتجهيزات الطبية في مؤتمر ومعرض آراب هيلث",
    },
    date: { en: "January 25-28, 2027", ar: "٢٥ - ٢٨ يناير ٢٠٢٧" },
    time: { en: "10:00 AM – 06:00 PM", ar: "١٠:٠٠ صباحاً – ٠٦:٠٠ مساءً" },
    location: {
      en: "Dubai International Convention & Exhibition Centre (Hall 4, Stand B20)",
      ar: "مركز دبي الدولي للمؤتمرات والمعارض (القاعة ٤، جناح B20)",
    },
    city: { en: "Dubai, UAE", ar: "دبي، الإمارات العربية المتحدة" },
    cmeCredits: "Exhibition & Certified Booth Tech Demos",
    image: "/images/event-arab-health.jpg",
    shortDesc: {
      en: "Explore our regional inventory, live product showcases, and meet our Dubai distribution team at the Middle East's largest healthcare gathering.",
      ar: "استكشف مخزوننا المحلي المتاح فوراً في الإمارات، وجرّب أحدث التجهيزات الطبية مع فريقنا في كبرى فعاليات الرعاية الصحية بالشرق الأوسط.",
    },
    fullDesc: {
      en: "Arab Health is the central nexus of healthcare innovation in the MENA region. Visit Scene Medical Equipment Trading L.L.C at Stand B20 to inspect certified spine implants, test the precision of our latest radiofrequency ablation consoles, and discuss hospital consignment terms directly with our supply chain directors.",
      ar: "يعد معرض آراب هيلث الملتقى الأبرز لقطاع الرعاية الصحية في الشرق الأوسط. ندعوكم لزيارة جناح سين للتجهيزات الطبية (B20) للاطلاع المباشر على الغرسات المعتمدة، واختبار مولدات التردد الحراري، ومناقشة عقود التوريد والأمانات مع مديري سلاسل الإمداد لدينا.",
    },
    objectives: {
      en: [
        "Inspect verified CE/FDA certified spinal implants and interbody cages.",
        "Interact with digital RF console user interfaces and temperature tracking software.",
        "Establish hospital supply agreements and scheduled delivery routes across the UAE.",
      ],
      ar: [
        "فحص غرسات العمود الفقري وأقفاص الدمج الحاصلة على اعتمادات CE وFDA الدولية.",
        "تجربة واجهات التحكم الرقمية لمولدات التردد الحراري وبرامج قياس درجات الحرارة.",
        "تنسيق اتفاقيات التوريد المباشر ومسارات التوصيل السريع للمستشفيات في الدولة.",
      ],
    },
    agenda: [
      {
        time: "10:00 AM – 12:30 PM",
        topic: {
          en: "Morning Surgical Demonstrations: Biomechanical Cage Insertion",
          ar: "عروض صباحية للجراحين: تقنيات إدخال أقفاص الدمج وتثبيت البراغي",
        },
        speaker: {
          en: "Technical Support Specialists",
          ar: "أخصائيو الدعم الفني",
        },
      },
      {
        time: "02:00 PM – 04:00 PM",
        topic: {
          en: "Hospital Tender & Consignment Inventory Consultations",
          ar: "جلسات استشارية لإدارات المشتريات ومناقصات المستشفيات",
        },
        speaker: {
          en: "Procurement & Commercial Leadership",
          ar: "إدارة المشتريات والتجارة",
        },
      },
    ],
    technologies: [
      { en: "PEEK & Titanium Interbody Cages", ar: "أقفاص دمج PEEK وتيتانيوم مسامي" },
      { en: "RF Generators with Multi-Lesion Capability", ar: "مولدات تردد حراري متعددة الآفات" },
      { en: "Kyphoplasty Inflation Syringes & Tamps", ar: "مضخات وبالونات تقويم الفقرات" },
    ],
    speakers: [
      {
        name: { en: "Eng. Zaid Al-Khatib", ar: "م. زيد الخطيب" },
        title: { en: "Head of Clinical Supply Operations", ar: "مدير العمليات والإمداد الإكلينيكي" },
        hospital: { en: "Scene Medical Trading LLC", ar: "سين للتجهيزات الطبية ذ.م.م" },
        image: "/images/speaker-zaid.jpg",
      },
    ],
    gallery: [
      "/images/event-arab-health.jpg",
      "/images/gallery-exhibition-hall.jpg",
      "/images/gallery-product-demo.jpg",
      "/images/gallery-networking.jpg",
      "/images/solutions-spine-implants.jpg",
      "/images/gallery-medical-team.jpg",
    ],
  },
  {
    slug: "healthcare-procurement-summit",
    category: { en: "Strategic Forum", ar: "ملتقى استراتيجي" },
    badge: { en: "Executive Summit", ar: "قمة القيادات الطبية" },
    title: {
      en: "UAE Healthcare Procurement & Clinical Supply Summit",
      ar: "قمة سلاسل الإمداد والتوريد للمنشآت الصحية بدولة الإمارات",
    },
    date: { en: "February 18, 2027", ar: "١٨ فبراير ٢٠٢٧" },
    time: { en: "09:30 AM – 03:30 PM", ar: "٠٩:٣٠ صباحاً – ٠٣:٣٠ مساءً" },
    location: {
      en: "Abu Dhabi National Exhibition Centre (ADNEC)",
      ar: "مركز أبوظبي الوطني للمعارض (أدنيك)",
    },
    city: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات العربية المتحدة" },
    cmeCredits: "Leadership & Healthcare Management Credits",
    image: "/images/event-procurement-summit.jpg",
    shortDesc: {
      en: "Connecting hospital administrators, departmental chairs, and procurement directors with reliable medical supply pipelines.",
      ar: "بناء جسور التواصل بين مديري المستشفيات ورؤساء الأقسام الطبية ومسؤولي المشتريات لضمان استدامة سلاسل الإمداد الطبي.",
    },
    fullDesc: {
      en: "The Healthcare Procurement & Clinical Supply Summit is an exclusive executive roundtable addressing hospital inventory resilience, on-demand emergency implant delivery, and compliance with MOHAP and DHA supply regulations. Leaders from both government and private health groups examine how unified distributor partnerships reduce surgical delays.",
      ar: "ملتقى تنفيذي رفيع المستوى يناقش جاهزية المخزون الطبي داخل المستشفيات، وسرعة تلبية احتياجات الحالات الجراحية المستعجلة، والامتثال لمعايير وزارة الصحة وهيئة الصحة بدبي. يناقش قادة القطاعين الحكومي والخاص سبل تقليص فترات الانتظار الجراحي عبر شراكات توريد متينة.",
    },
    objectives: {
      en: [
        "Implement consignment inventory models that minimize hospital carrying costs.",
        "Ensure compliance with UAE medical device traceability protocols.",
        "Establish 2-hour emergency dispatch protocols for neurosurgical and orthopedic cases.",
      ],
      ar: [
        "تطبيق نماذج المخزون بالأمانة لتقليل التكاليف التشغيلية على المستشفيات.",
        "ضمان التتبع الدقيق للأجهزة والغرسات الطبية وفق معايير دولة الإمارات.",
        "اعتماد بروتوكولات التوريد الطارئ خلال ساعتين لعمليات جراحة الأعصاب والعظام.",
      ],
    },
    agenda: [
      {
        time: "09:30 AM",
        topic: {
          en: "Executive Keynote: Supply Chain Resilience in UAE Hospitals",
          ar: "الكلمة الرئيسية: استدامة سلاسل الإمداد في مستشفيات دولة الإمارات",
        },
        speaker: {
          en: "Hospital Operations Panel",
          ar: "لجنة إدارة العمليات بالمستشفيات",
        },
      },
      {
        time: "11:30 AM",
        topic: {
          en: "Panel Discussion: Mitigating Operating Room Delays via Dedicated Consignment",
          ar: "حلقة نقاشية: منع تأجيل العمليات الجراحية عبر مخزون الأمانات المباشر",
        },
        speaker: {
          en: "Healthcare Supply Directors",
          ar: "مديرو سلاسل الإمداد الصحي",
        },
      },
      {
        time: "02:00 PM",
        topic: {
          en: "Roundtable: Regulatory Auditing & Track-and-Trace Compliance",
          ar: "طاولة مستديرة: التدقيق التنظيمي وتتبع الأجهزة الطبية",
        },
        speaker: {
          en: "MOHAP Compliance Specialists",
          ar: "خبراء الامتثال والتنظيم",
        },
      },
    ],
    technologies: [
      { en: "Emergency Surgical Consignment Trays", ar: "حقائب التوريد الجراحي الطارئ" },
      { en: "Real-time RFID Inventory Dispatch", ar: "أنظمة التتبع الفوري بتقنية RFID" },
      { en: "Certified Spine & Pain Instrumentation Kits", ar: "مجموعات أدوات جراحة العمود الفقري وعلاج الألم" },
    ],
    speakers: [
      {
        name: { en: "Eng. Zaid Al-Khatib", ar: "م. زيد الخطيب" },
        title: { en: "Head of Clinical Supply Operations", ar: "مدير العمليات والإمداد الإكلينيكي" },
        hospital: { en: "Scene Medical Trading LLC", ar: "سين للتجهيزات الطبية ذ.م.م" },
        image: "/images/speaker-zaid.jpg",
      },
    ],
    gallery: [
      "/images/event-procurement-summit.jpg",
      "/images/gallery-roundtable.jpg",
      "/images/gallery-panel-discussion.jpg",
      "/images/gallery-networking.jpg",
      "/images/gallery-conference-stage.jpg",
      "/images/gallery-medical-team.jpg",
    ],
  },
];
