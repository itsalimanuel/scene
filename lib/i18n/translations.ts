export type Locale = "en" | "ar";

export interface Translations {
  nav: {
    about: string;
    solutions: string;
    focus: string;
    events: string;
    contact: string;
    connectBtn: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleAccent: string;
    desc: string;
    exploreBtn: string;
    aboutBtn: string;
    trustedPartners: string;
    trustedRegion: string;
    expertiseTitle: string;
    expertiseSubtitle: string;
    bannerSub: string;
    bannerTitleLine1: string;
    bannerTitleLine2: string;
    tags: string[];
  };
  marquee: string[];
  about: {
    badge: string;
    headline: string;
    desc: string;
    locationBadge: string;
    bannerTitle: string;
    bannerDesc: string;
    ctaBtn: string;
    diffBadge: string;
    diffTitle: string;
    cards: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  solutions: {
    badge: string;
    title: string;
    desc: string;
    btn: string;
    ctaBtn: string;
    items: {
      num: string;
      title: string;
      desc: string;
      tags: string[];
    }[];
  };
  focus: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    brochureBtn: string;
    items: {
      num: string;
      title: string;
      desc: string;
      field: string;
    }[];
  };
  products: {
    badge: string;
    title: string;
    desc: string;
    deskTitle: string;
    deskDesc: string;
    enquireBtn: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  };
  events: {
    badge: string;
    title: string;
    desc: string;
    featuredBadge: string;
    featuredTitle: string;
    featuredDesc: string;
    items: {
      num: string;
      tag: string;
      title: string;
      desc: string;
    }[];
    linkedinTitle: string;
    linkedinDesc: string;
    linkedinBtn: string;
  };
  contact: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    callLabel: string;
    linkedinLabel: string;
    linkedinLink: string;
    basedLabel: string;
    location: string;
    companyName: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    hospitalLabel: string;
    hospitalPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    lineLabel: string;
    lineOptions: string[];
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
  };
  footer: {
    brandDesc: string;
    navTitle: string;
    specializedTitle: string;
    specializedItems: string[];
    copyright: string;
    backToTop: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      about: "About Us",
      solutions: "Medical Lines",
      focus: "Procedures",
      events: "Events",
      contact: "Contact",
      connectBtn: "Let's Connect",
    },
    hero: {
      badge: "Dubai, UAE • Healthcare Solutions",
      titleLine1: "Supporting care.",
      titleLine2: "Advancing",
      titleAccent: "possibilities.",
      desc: "Advanced surgical systems for spine, interventional pain, and orthopedics — empowering clinical teams across the UAE.",
      exploreBtn: "Explore Solutions",
      aboutBtn: "Get to know Scene",
      trustedPartners: "Clinical Partners",
      trustedRegion: "Hospitals across the UAE",
      expertiseTitle: "Surgical expertise.",
      expertiseSubtitle: "A human perspective.",
      bannerSub: "SCENE MEDICAL TRADING LLC",
      bannerTitleLine1: "Where innovation meets",
      bannerTitleLine2: "surgical excellence.",
      tags: [
        "Spine Surgery",
        "Interventional Pain",
        "Endoscopic Systems",
        "Regenerative Medicine",
      ],
    },
    marquee: [
      "Pain Management",
      "Spine & Orthopedics",
      "Minimally Invasive Spine",
      "Regenerative Solutions",
      "Pain Management",
      "Spine & Orthopedics",
      "Minimally Invasive Spine",
      "Regenerative Solutions",
    ],
    about: {
      badge: "01 / ABOUT US",
      headline:
        "Connecting UAE hospitals with the world's leading surgical innovations.",
      desc: "Scene Medical provides certified implants, reliable local supply, and in-theater clinical support to simplify hospital workflows and elevate patient outcomes.",
      locationBadge: "Dubai, United Arab Emirates",
      bannerTitle: "Specialized technologies for clinical excellence.",
      bannerDesc:
        "Certified implants and procedural systems delivered on demand.",
      ctaBtn: "Talk to a Specialist",
      diffBadge: "THE SCENE DIFFERENCE",
      diffTitle: "Precision in every procedure",
      cards: [
        {
          num: "01",
          title: "Clinically Verified",
          desc: "Vetted for surgical precision and verified patient safety.",
        },
        {
          num: "02",
          title: "Dubai Hub Logistics",
          desc: "Rapid consignment delivery across all UAE Emirates.",
        },
        {
          num: "03",
          title: "In-Theater Support",
          desc: "Specialist clinical presence during procedural deployments.",
        },
        {
          num: "04",
          title: "Licensed & Certified",
          desc: "Fully compliant with DHA, MOHAP, and global CE/FDA standards.",
        },
      ],
    },
    solutions: {
      badge: "02 / MEDICAL LINES",
      title: "Equipped for your field of care",
      desc: "Certified technologies, implants, and procedural kits for surgical excellence.",
      btn: "Explore Line",
      ctaBtn: "Enquire About Supply",
      items: [
        {
          num: "01",
          title: "Pain Management",
          desc: "Precision radiofrequency generators and cannula systems for acute and chronic pain therapies.",
          tags: [
            "RFA Generators",
            "Specialized Electrodes",
            "Pain Consumables",
          ],
        },
        {
          num: "02",
          title: "Spine & Orthopedics",
          desc: "Engineered stabilization and interbody fusion systems designed for optimal biomechanical hold.",
          tags: [
            "Interspinous Implants",
            "Lumbar Fixation",
            "PEEK & 3D Titanium Cages",
          ],
        },
        {
          num: "03",
          title: "Minimally Invasive Spine",
          desc: "Endoscopic optics and micro-instruments minimizing tissue trauma and patient downtime.",
          tags: [
            "Endoscopic Spine Systems",
            "Micro-Decompression",
            "Kyphoplasty Kits",
          ],
        },
        {
          num: "04",
          title: "Regenerative & Injections",
          desc: "Advanced cellular separation kits and joint delivery systems for tissue restoration.",
          tags: [
            "PRP Centrifuge Kits",
            "Closed Infiltration Kits",
            "Joint Therapy Solutions",
          ],
        },
      ],
    },
    focus: {
      badge: "03 / PROCEDURAL PORTFOLIO",
      titleLine1: "Targeted pain management.",
      titleLine2: "Advanced spine systems.",
      desc: "Collaborating with surgeons to deliver certified outcomes for chronic and acute pathologies.",
      brochureBtn: "Request Technical Data",
      items: [
        {
          num: "01",
          title: "Radiofrequency Ablation (RFA)",
          desc: "Precision thermal neurotomy for facet and sacroiliac joint denervation.",
          field: "Interventional Pain",
        },
        {
          num: "02",
          title: "Lumbar Fixation Systems",
          desc: "Titanium pedicle screw constructs providing rigid segmental stability.",
          field: "Spine Surgery",
        },
        {
          num: "03",
          title: "SDF & Interbody Cages",
          desc: "Anatomically contoured PEEK and porous 3D titanium fusion spacers.",
          field: "Spinal Fusion",
        },
        {
          num: "04",
          title: "Interspinous Fixation",
          desc: "Minimally invasive interlaminar spacers designed to relieve stenosis.",
          field: "Decompression",
        },
        {
          num: "05",
          title: "Endoscopic Spine Systems",
          desc: "HD optics and micro-tools for targeted disc and canal decompression.",
          field: "Endoscopy",
        },
        {
          num: "06",
          title: "Kyphoplasty Systems",
          desc: "Controlled inflatable balloon tamps and targeted cement injection kits.",
          field: "Fracture Restoration",
        },
      ],
    },
    products: {
      badge: "04 / PRODUCT ENQUIRIES",
      title: "Direct answers for your surgical needs.",
      desc: "Request technical brochures, surgeon technique guides, or immediate product availability.",
      deskTitle: "Procurement Desk",
      deskDesc: "Direct assistance for emergency hospital orders and catalog requests.",
      enquireBtn: "Enquire About Portfolio",
      faqs: [
        {
          question: "Product Availability & Hospital Supply",
          answer:
            "We maintain dedicated regional stock in Dubai for rapid same-day and next-day hospital delivery across all Emirates.",
        },
        {
          question: "Technical Guides & Certifications",
          answer:
            "Surgical technique guides, CE certificates, and FDA compliance documentation are provided immediately upon request.",
        },
        {
          question: "Hospital Standing Orders & Tenders",
          answer:
            "We provide volume contracts, consignment inventory models, and tender support for private and governmental hospitals.",
        },
        {
          question: "Clinical Case Support",
          answer:
            "Our certified clinical specialists attend initial operating room cases to assist your team with seamless system integration.",
        },
      ],
    },
    events: {
      badge: "05 / CONFERENCES & EVENTS",
      title: "Sharing knowledge. Connecting expertise.",
      desc: "Highlights from our regional conference participation, lectures, and medical symposiums.",
      featuredBadge: "Keynote Highlight",
      featuredTitle: "Insights from the Stage",
      featuredDesc:
        "Surgical presentations introducing modern radiofrequency ablation and spinal stabilization protocols.",
      items: [
        {
          num: "01",
          tag: "Symposium",
          title: "Clinical Lectures & Panels",
          desc: "Specialist-led discussions on endoscopic decompression techniques.",
        },
        {
          num: "02",
          tag: "Exhibition",
          title: "Medical Congress Expo",
          desc: "Hands-on surgeon trials with our 3D titanium cages and RFA systems.",
        },
        {
          num: "03",
          tag: "Partnership",
          title: "Clinical Collaborations",
          desc: "Partnering with healthcare executives to ensure stable product pipelines.",
        },
      ],
      linkedinTitle: "Scene Medical on LinkedIn",
      linkedinDesc:
        "Follow our official channel for symposium schedules and product arrivals.",
      linkedinBtn: "Follow on LinkedIn",
    },
    contact: {
      badge: "LET'S CONNECT",
      titleLine1: "What can we",
      titleLine2: "help you explore?",
      desc: "Speak with our clinical consultants regarding medical implants, consignment schedules, or case coverage.",
      callLabel: "Call Our Team Directly",
      linkedinLabel: "Connect with Scene",
      linkedinLink: "Find us on LinkedIn",
      basedLabel: "Headquarters",
      location: "Dubai, United Arab Emirates",
      companyName: "Scene Medical Equipment Trading L.L.C",
      formTitle: "Hospital & Clinic Enquiry",
      formDesc: "Our clinical team responds within 2 business hours.",
      nameLabel: "Full Name *",
      namePlaceholder: "Dr. / Clinician Name",
      hospitalLabel: "Hospital / Facility *",
      hospitalPlaceholder: "e.g. Dubai Hospital",
      phoneLabel: "Phone Number *",
      phonePlaceholder: "+971 50 000 0000",
      lineLabel: "Area of Interest",
      lineOptions: [
        "Pain Management (RFA & Consumables)",
        "Spine & Orthopedics (Implants & Cages)",
        "Minimally Invasive Spine (Endoscopic / Kyphoplasty)",
        "Regenerative Solutions (PRP-related)",
        "Tender / Hospital Procurement",
      ],
      notesLabel: "Case Notes or Product Requirements",
      notesPlaceholder: "Specify product line, case urgency, or sample request...",
      submitBtn: "Send Message to Specialists",
      successTitle: "Enquiry Received",
      successDesc:
        "Thank you. A Scene Medical specialist will contact your facility promptly.",
    },
    footer: {
      brandDesc:
        "UAE distributor specializing in spine surgery, interventional pain, orthopedics, and minimally invasive procedures.",
      navTitle: "Navigation",
      specializedTitle: "Specialized Lines",
      specializedItems: [
        "Radiofrequency Ablation (RFA)",
        "Spine Stabilization & Cages",
        "Endoscopic Spine Systems",
        "Kyphoplasty Balloon Systems",
        "Regenerative PRP Solutions",
      ],
      copyright: "Scene Medical Equipment Trading L.L.C. All rights reserved.",
      backToTop: "Back to Top",
    },
  },
  ar: {
    nav: {
      about: "من نحن",
      solutions: "خطوطنا الطبية",
      focus: "الإجراءات الجراحية",
      events: "المؤتمرات",
      contact: "اتصل بنا",
      connectBtn: "تواصل معنا",
    },
    hero: {
      badge: "دبي، الإمارات • حلول الرعاية الصحية",
      titleLine1: "ندعم الرعاية.",
      titleLine2: "ونرتقي",
      titleAccent: "بالإمكانيات الجراحية.",
      desc: "تقنيات جراحية متطورة لجراحة العمود الفقري، وعلاج الألم، والعظام — ندعم المستشفيات والكوادر الطبية في دولة الإمارات.",
      exploreBtn: "استكشف الحلول",
      aboutBtn: "تعرف على سين",
      trustedPartners: "شريك المنشآت الطبية",
      trustedRegion: "المستشفيات في دولة الإمارات",
      expertiseTitle: "خبرة جراحية.",
      expertiseSubtitle: "بمنظور إنساني متكامل.",
      bannerSub: "سين لتجارة المعدات الطبية ذ.م.م",
      bannerTitleLine1: "ملتقى الابتكار التكنولوجي",
      bannerTitleLine2: "والتميز الجراحي.",
      tags: [
        "جراحة العمود الفقري",
        "علاج الألم التداخلي",
        "مناظير العمود الفقري",
        "الطب التجديدي",
      ],
    },
    marquee: [
      "علاج الألم التداخلي",
      "العمود الفقري والعظام",
      "جراحة طفيفة التوغل",
      "الحلول التجديدية",
      "علاج الألم التداخلي",
      "العمود الفقري والعظام",
      "جراحة طفيفة التوغل",
      "الحلول التجديدية",
    ],
    about: {
      badge: "01 / من نحن",
      headline:
        "نربط مستشفيات دولة الإمارات بأحدث الابتكارات الجراحية العالمية.",
      desc: "توفر سين للتجهيزات الطبية غرسات معتمدة، وتوريداً محلياً موثوقاً، ودعماً إكلينيكياً في غرف العمليات لتسهيل إجراءات المستشفيات وتحسين نتائج المرضى.",
      locationBadge: "دبي، الإمارات العربية المتحدة",
      bannerTitle: "تقنيات تخصصية لتحقيق التميز السريري والجراحي.",
      bannerDesc:
        "غرسات طبية وأنظمة جراحية معتمدة عند الطلب.",
      ctaBtn: "تحدث مع خبير متخصص",
      diffBadge: "ما يميز سين ميديكال",
      diffTitle: "الدقة الفائقة في كل إجراء جراحي",
      cards: [
        {
          num: "01",
          title: "اعتمادات سريرية موثقة",
          desc: "تقنيات مدروسة بدقة لضمان الأمان والنتائج الجراحية المثالية.",
        },
        {
          num: "02",
          title: "إمداد سريع من دبي",
          desc: "تغطية فورية وشاملة للحالات الطارئة وجداول العمليات في كافة الإمارات.",
        },
        {
          num: "03",
          title: "دعم داخل غرفة العمليات",
          desc: "مرافقة إكلينيكية متخصصة وتدريب ميداني لفرق الجراحة والتمريض.",
        },
        {
          num: "04",
          title: "ترخيص وتوافق تنظيمي",
          desc: "معايير معتمدة من هيئة الصحة ووزارة الصحة ومطابقة لمعايير CE/FDA.",
        },
      ],
    },
    solutions: {
      badge: "02 / خطوطنا الطبية",
      title: "تجهيزات متكاملة لمجال تخصصكم",
      desc: "محفظة معتمدة من التقنيات الجراحية والغرسات والمستهلكات الدقيقة.",
      btn: "تفاصيل الخط الطبي",
      ctaBtn: "طلب التوريد للمستشفيات",
      items: [
        {
          num: "01",
          title: "علاج الألم التداخلي",
          desc: "أنظمة التردد الحراري وكانولات الحقن الدقيقة لعلاج الآلام المزمنة والحادة.",
          tags: [
            "مولدات التردد الحراري (RFA)",
            "إلكترودات وكانولات دقيقة",
            "مستهلكات علاج الألم",
          ],
        },
        {
          num: "02",
          title: "العمود الفقري والعظام",
          desc: "أنظمة تثبيت ودمج فقري متطورة توفر أعلى درجات الثبات التشريحي والميكانيكي.",
          tags: [
            "دعامات ما بين الفقرات",
            "أنظمة التثبيت القطني",
            "أقفاص PEEK وتيتانيوم مسامي",
          ],
        },
        {
          num: "03",
          title: "جراحة طفيفة التوغل",
          desc: "مناظير دقيقة وأدوات متطورة لتقليل التدخل الجراحي وتسريع استشفاء المريض.",
          tags: [
            "مناظير العمود الفقري",
            "توسيع القناة العصبية",
            "حقن الأسمنت للفقرات",
          ],
        },
        {
          num: "04",
          title: "الحلول التجديدية والحقن",
          desc: "تقنيات فصل بيولوجية متطورة وأنظمة حقن مفاصل لتحفيز الالتئام وتقليل الألم.",
          tags: [
            "أنابيب البلازما (PRP)",
            "أنظمة حقن مغلقة معقمة",
            "علاجات المفاصل الحيوية",
          ],
        },
      ],
    },
    focus: {
      badge: "03 / الإجراءات الجراحية",
      titleLine1: "علاج الألم التداخلي.",
      titleLine2: "حلول العمود الفقري المتقدمة.",
      desc: "نتعاون مع الجراحين لتقديم حلول معتمدة للآلام المزمنة والحالات المعقدة.",
      brochureBtn: "طلب البيانات التقنية",
      items: [
        {
          num: "01",
          title: "التردد الحراري (RFA)",
          desc: "كيّ حراري مستهدف لتعطيل إشارات الألم في مفاصل الفقرات والمفصل العجزي.",
          field: "علاج الألم التداخلي",
        },
        {
          num: "02",
          title: "أنظمة التثبيت القطني",
          desc: "براغي وقضبان تيتانيوم توفر ثباتاً صلباً للفقرات القطنية.",
          field: "جراحة العمود الفقري",
        },
        {
          num: "03",
          title: "أقفاص الدمج الفقري",
          desc: "أقفاص تشريحية من PEEK والتيتانيوم المسامي لدعم الالتئام العظمي.",
          field: "دمج الفقرات",
        },
        {
          num: "04",
          title: "التثبيت بين النواتئ الشوكية",
          desc: "دعامات خلفية طفيفة التوغل لتخفيف الضغط دون استئصال جراحي واسع.",
          field: "تخفيف الضغط",
        },
        {
          num: "05",
          title: "مناظير العمود الفقري",
          desc: "عدسات عالية الدقة لاستئصال الانزلاق الغضروفي بأقل شق جراحي ممكن.",
          field: "جراحة المناظير",
        },
        {
          num: "06",
          title: "رأب الفقرات بالبالون (كيفوبلاستي)",
          desc: "بالونات متطورة لاستعادة ارتفاع الفقرة وحقن الأسمنت الطبي بدقة.",
          field: "ترميم الكسور",
        },
      ],
    },
    products: {
      badge: "04 / استفسارات التوريد",
      title: "إجابات مباشرة لاحتياجاتكم الجراحية.",
      desc: "اطلبوا الكتيبات التقنية، الأدلة الجراحية، أو تحققوا من توفر المنتجات الفوري.",
      deskTitle: "مكتب المشتريات المباشر",
      deskDesc: "مساعدة فورية لطلبات المستشفيات المستعجلة وكتالوج المنتجات.",
      enquireBtn: "استفسر عن المنتجات",
      faqs: [
        {
          question: "توفر المنتجات وسرعة التسليم",
          answer:
            "نحتفظ بمخزون محلي في دبي لضمان التوريد الفوري بنفس اليوم أو اليوم التالي لكافة المنشآت الطبية في الدولة.",
        },
        {
          question: "الأدلة الجراحية والشهادات الدولية",
          answer:
            "نوفر أدلة التقنيات الجراحية وشهادات CE وFDA المعتمدة فوراً عند الطلب لجميع المنتجات والغرسات.",
        },
        {
          question: "مناقصات المستشفيات وعقود الأمانات",
          answer:
            "نقدم عقود توريد مرنة ونماذج أمانات مخزنية مناسبة للمستشفيات الخاصة والحكومية عبر فرق عمل متخصصة.",
        },
        {
          question: "التغطية الإكلينيكية داخل العمليات",
          answer:
            "يرافق أخصائيونا المعتمدون الكوادر الجراحية خلال الحالات الأولى لضمان الاستخدام الأمثل والدمج السلس.",
        },
      ],
    },
    events: {
      badge: "05 / المؤتمرات والفعاليات",
      title: "نشارك المعرفة. ونعزز الشراكات.",
      desc: "لقطات من مشاركاتنا في المؤتمرات الطبية الإقليمية والمحاضرات التخصصية.",
      featuredBadge: "المحاضرة الرئيسية",
      featuredTitle: "رؤى وأبحاث من المنصة",
      featuredDesc:
        "عروض علمية تسلط الضوء على أحدث بروتوكولات التردد الحراري وتثبيت الفقرات.",
      items: [
        {
          num: "01",
          tag: "ندوة علمية",
          title: "محاضرات وجلسات إكلينيكية",
          desc: "نقاشات جراحية حول تقنيات استئصال الغضروف وتوسيع القناة العصبية بالمنظار.",
        },
        {
          num: "02",
          tag: "معرض طبي",
          title: "جناح سين في المعارض",
          desc: "تجارب عملية مباشرة للأطباء مع أقفاص التيتانيوم المسامية وأجهزة التردد الحراري.",
        },
        {
          num: "03",
          tag: "شراكات",
          title: "تعاون مؤسسي مستمر",
          desc: "تعزيز قنوات التوريد المستدامة مع رؤساء الأقسام وإدارات المشتريات.",
        },
      ],
      linkedinTitle: "سين ميديكال على لينكد إن",
      linkedinDesc:
        "تابعوا حسابنا الرسمي لمعرفة مواعيد المؤتمرات والوصول الحصري للمنتجات.",
      linkedinBtn: "تابعنا على LinkedIn",
    },
    contact: {
      badge: "تواصل معنا",
      titleLine1: "كيف يمكننا",
      titleLine2: "مساعدتكم اليوم؟",
      desc: "تحدثوا مع مستشارينا لمناقشة الغرسات الطبية، جداول التوريد، أو تغطية الحالات الجراحية.",
      callLabel: "اتصل بفريقنا مباشرة",
      linkedinLabel: "تواصل مع سين",
      linkedinLink: "تفضل بزيارة صفحتنا على LinkedIn",
      basedLabel: "المقر الرئيسي",
      location: "دبي، الإمارات العربية المتحدة",
      companyName: "سين لتجارة المعدات الطبية ذ.م.م",
      formTitle: "استفسار للمستشفيات والعيادات",
      formDesc: "يقوم فريقنا الإكلينيكي بالرد خلال ساعتي عمل.",
      nameLabel: "الاسم الكامل *",
      namePlaceholder: "د. / اسم المتخصص",
      hospitalLabel: "المستشفى / المنشأة *",
      hospitalPlaceholder: "مثال: مستشفى دبي",
      phoneLabel: "رقم الهاتف *",
      phonePlaceholder: "+971 50 000 0000",
      lineLabel: "المجال الطبي المطلوب",
      lineOptions: [
        "علاج الألم التداخلي (التردد الحراري والمستهلكات)",
        "العمود الفقري والعظام (الغرسات وأقفاص الدمج)",
        "جراحة طفيفة التوغل (المناظير ورأب الفقرات)",
        "الحلول التجديدية (حقن البلازما والمفاصل)",
        "استفسار مناقصة أو توريد مستشفيات",
      ],
      notesLabel: "ملاحظات الحالة أو متطلبات المنتجات",
      notesPlaceholder: "حدد الأنظمة المطلوبة، درجة الاستعجال، أو التغطية الإكلينيكية...",
      submitBtn: "إرسال الرسالة إلى المتخصصين",
      successTitle: "تم استلام الاستفسار",
      successDesc:
        "شكراً لتواصلكم. سيتواصل معكم ممثل سين ميديكال على الفور.",
    },
    footer: {
      brandDesc:
        "موزع معتمد في دولة الإمارات متخصص في جراحة العمود الفقري، علاج الألم، والعظام.",
      navTitle: "روابط الموقع",
      specializedTitle: "التخصصات الدقيقة",
      specializedItems: [
        "التردد الحراري لعلاج الألم (RFA)",
        "تثبيت الفقرات وأقفاص الدمج",
        "مناظير العمود الفقري الدقيقة",
        "رأب الفقرات بالبالون (كيفوبلاستي)",
        "حقن البلازما التجديدية (PRP)",
      ],
      copyright: "سين لتجارة المعدات الطبية ذ.م.م. جميع الحقوق محفوظة.",
      backToTop: "العودة للأعلى",
    },
  },
};
