/* ============ GRAPHICS MASTER — بيانات الموقع (عدّل هنا بسهولة) ============ */
window.GM = {
  CONFIG: {
    // بيانات التواصل — استبدل القيم الفارغة ببياناتك الحقيقية
    whatsapp: "201208614554",       // بصيغة دولية بدون + (مصر 20)
    whatsappShow: "01208614554",    // الرقم كما يظهر للزوار
    email: "",          // مثال: "info@example.com"
    phone: "",
    socials: { facebook: "https://www.facebook.com/share/1JcvxnuhzG/", instagram: "", behance: "", tiktok: "" },
    // عند تعبئة whatsapp يتم إرسال الطلب إلى واتساب مباشرة
    currency: { ar: "ج.م", en: "EGP" }
  },

  // الخدمات: price = null يعني "يحدد حسب الطلب" — ضع رقمًا ليظهر كسعر ابتدائي
  SERVICES: [
    { id:"banners", icon:"▤", cat:"banners", price:null, time:{ar:"1 – 3 أيام",en:"1–3 days"},
      ar:{name:"تصميم البانرات الإعلانية",short:"بانرات للويب والسوشيال والطباعة تلفت الانتباه وتخدم هدف حملتك.",desc:"بانرات إعلانية مدروسة بصريًا ورسالة واضحة، تناسب الحملات الرقمية واللوحات المطبوعة.",uses:["حملات إعلانية","مواقع ومتاجر","فعاليات وعروض"],gets:["تصميم بمقاسات متعددة","تعديلات حسب الاتفاق"],files:["PNG","JPG","PDF","PSD/AI حسب الاتفاق"]},
      en:{name:"Advertising Banners",short:"Web, social and print banners that catch the eye and serve your campaign goal.",desc:"Thoughtfully composed ad banners with a clear message for digital campaigns and printed signage.",uses:["Ad campaigns","Websites & stores","Events & offers"],gets:["Multi-size designs","Revisions as agreed"],files:["PNG","JPG","PDF","PSD/AI by agreement"]} },
    { id:"posters", icon:"◫", cat:"posters", price:null, time:{ar:"1 – 2 يوم",en:"1–2 days"},
      ar:{name:"تصميم بوسترات السوشيال ميديا",short:"بوستات جذابة ومتسقة لصفحاتك على كل المنصات.",desc:"بوسترات تحافظ على هوية صفحتك وتزيد التفاعل، مع قوالب قابلة للتكرار.",uses:["صفحات الشركات","المتاجر","المدرسون والمبدعون"],gets:["تصميم بمقاس كل منصة","اتساق مع هويتك"],files:["PNG","JPG","PSD/AI حسب الاتفاق"]},
      en:{name:"Social Media Posters",short:"Eye-catching, consistent posts for all your platforms.",desc:"Posters that keep your page identity and boost engagement, with repeatable templates.",uses:["Business pages","Online stores","Teachers & creators"],gets:["Platform-ready sizes","Consistent with your brand"],files:["PNG","JPG","PSD/AI by agreement"]} },
    { id:"logos", icon:"✦", cat:"logos", price:null, time:{ar:"3 – 7 أيام",en:"3–7 days"},
      ar:{name:"تصميم الشعارات والهويات البصرية",short:"شعار وهوية تعبّر عنك وتبقى في الذاكرة.",desc:"بناء شعار وهوية متكاملة تشمل الألوان والخطوط وطرق الاستخدام.",uses:["مشروعات جديدة","إعادة تصميم علامة","شركات ومتاجر"],gets:["شعار بنسخ متعددة","ألوان وخطوط الهوية"],files:["AI","SVG","PNG","PDF"]},
      en:{name:"Logo & Brand Identity",short:"A logo and identity that express you and stay memorable.",desc:"A complete logo and identity including colors, typography and usage rules.",uses:["New ventures","Rebranding","Companies & stores"],gets:["Logo in multiple versions","Brand colors & fonts"],files:["AI","SVG","PNG","PDF"]} },
    { id:"cards", icon:"▭", cat:"cards", price:null, time:{ar:"1 – 2 يوم",en:"1–2 days"},
      ar:{name:"تصميم الكروت الشخصية",short:"كروت أنيقة تترك انطباعًا احترافيًا من اللقاء الأول.",desc:"تصميم كروت شخصية للأفراد والشركات جاهزة للطباعة.",uses:["رجال الأعمال","الشركات","المستقلون"],gets:["تصميم وجهين","نسخة جاهزة للطباعة"],files:["PDF للطباعة","PNG","AI حسب الاتفاق"]},
      en:{name:"Business Cards",short:"Elegant cards that leave a professional first impression.",desc:"Print-ready business cards for individuals and companies.",uses:["Business owners","Companies","Freelancers"],gets:["Two-sided design","Print-ready file"],files:["Print PDF","PNG","AI by agreement"]} },
    { id:"wedding", icon:"♡", cat:"wedding", price:null, time:{ar:"1 – 3 أيام",en:"1–3 days"},
      ar:{name:"تصميم دعوات الزفاف والخطوبة",short:"دعوات راقية تعكس ذوقك وتليق بمناسبتك.",desc:"دعوات ورقية ورقمية بتفاصيل أنيقة وخيارات متنوعة.",uses:["الزفاف","الخطوبة","حفلات الأسرة"],gets:["دعوة مطبوعة أو رقمية","تعديلات حسب الاتفاق"],files:["PDF","PNG","JPG"]},
      en:{name:"Wedding & Engagement Invitations",short:"Refined invitations that reflect your taste and occasion.",desc:"Printed and digital invitations with elegant details and varied styles.",uses:["Weddings","Engagements","Family celebrations"],gets:["Printed or digital invitation","Revisions as agreed"],files:["PDF","PNG","JPG"]} },
    { id:"covers", icon:"▥", cat:"covers", price:null, time:{ar:"2 – 5 أيام",en:"2–5 days"},
      ar:{name:"تصميم أغلفة الكتب والملازم",short:"أغلفة تعبّر عن المحتوى وتجذب القارئ.",desc:"أغلفة كتب وملازم تعليمية بتنسيق يناسب الطباعة والنشر الرقمي.",uses:["المؤلفون","المدرسون","دور النشر"],gets:["غلاف أمامي وخلفي","ظهر الكتاب عند الحاجة"],files:["PDF للطباعة","PNG","PSD/AI حسب الاتفاق"]},
      en:{name:"Book & Notes Covers",short:"Covers that express the content and attract readers.",desc:"Book and study-notes covers formatted for print and digital publishing.",uses:["Authors","Teachers","Publishers"],gets:["Front & back cover","Spine when needed"],files:["Print PDF","PNG","PSD/AI by agreement"]} },
    { id:"certificates", icon:"✧", cat:"certificates", price:null, time:{ar:"1 – 2 يوم",en:"1–2 days"},
      ar:{name:"تصميم شهادات التقدير",short:"شهادات رسمية وأنيقة للمدارس والمؤسسات والفعاليات.",desc:"شهادات تقدير بتصميم رسمي قابل للطباعة أو التعبئة.",uses:["المدارس والمراكز","الفعاليات","الشركات"],gets:["تصميم جاهز للطباعة","قابل لتغيير الأسماء حسب الاتفاق"],files:["PDF","PNG","PSD حسب الاتفاق"]},
      en:{name:"Certificates of Appreciation",short:"Formal, elegant certificates for schools, institutions and events.",desc:"Print-ready appreciation certificates with a formal look.",uses:["Schools & centers","Events","Companies"],gets:["Print-ready design","Editable names by agreement"],files:["PDF","PNG","PSD by agreement"]} },
    { id:"greetings", icon:"❂", cat:"greetings", price:null, time:{ar:"نفس اليوم – يوم",en:"Same day – 1 day"},
      ar:{name:"تصميم تهنئات المناسبات",short:"تهنئات سريعة ومميزة للأعياد والمناسبات.",desc:"بطاقات تهنئة لكل المناسبات للأفراد والشركات.",uses:["الأعياد","المناسبات الشخصية","تهنئة العملاء"],gets:["تصميم جاهز للنشر","نسخ بمقاسات مختلفة"],files:["PNG","JPG"]},
      en:{name:"Occasion Greeting Designs",short:"Quick, distinctive greetings for holidays and occasions.",desc:"Greeting cards for any occasion, for individuals and companies.",uses:["Holidays","Personal occasions","Client greetings"],gets:["Ready-to-post design","Multiple sizes"],files:["PNG","JPG"]} },
    { id:"marketing", icon:"✺", cat:"marketing", price:null, time:{ar:"2 – 5 أيام",en:"2–5 days"},
      ar:{name:"تصميم المواد الإعلانية والتسويقية",short:"فلايرات وبروشورات وتصميمات تسويقية متكاملة.",desc:"مواد تسويقية متناسقة تدعم حملتك وتوصل رسالتك.",uses:["الفلايرات","البروشورات","الحملات الترويجية"],gets:["تصميم متناسق","جاهز للطباعة والنشر"],files:["PDF","PNG","AI حسب الاتفاق"]},
      en:{name:"Advertising & Marketing Materials",short:"Flyers, brochures and complete marketing designs.",desc:"Consistent marketing materials that support your campaign and message.",uses:["Flyers","Brochures","Promo campaigns"],gets:["Consistent design","Print & web ready"],files:["PDF","PNG","AI by agreement"]} }
  ],

  // أعمال تجريبية (placeholder) — استبدلها بأعمالك: ضع مسار الصورة في img
  // مثال: {cat:"logos", img:"assets/works/logo1.jpg", ar:{t:"..",d:".."}, en:{t:"..",d:".."}}
  WORKS: [],

  I18N: {
    ar: {
      brand:"GRAPHICS MASTER", dir:"rtl", other:"EN",
      nav:{home:"الرئيسية",services:"خدماتنا",portfolio:"معرض الأعمال",pricing:"الأسعار",order:"اطلب تصميمك",about:"من نحن",contact:"تواصل معنا"},
      tagline:"كل فكرة عندك ليها تصميم عندي",
      hero:{eyebrow:"GRAPHIC DESIGN & CREATIVE SOLUTIONS",title:"نحوّل أفكارك إلى تصاميم تصنع الفرق",text:"في GRAPHICS MASTER، نصنع تصاميم إبداعية تجمع بين الاحترافية والجمال وتساعد علامتك التجارية على الظهور بصورة مميزة.",b1:"استعرض أعمالنا",b2:"اطلب تصميمك الآن"},
      sample:"نموذج تجريبي",
      svcTitle:"خدماتنا الرئيسية",svcSub:"كل ما تحتاجه علامتك من تصميم، في مكان واحد.",allSvc:"عرض جميع الخدمات",orderSvc:"اطلب الخدمة",
      worksTitle:"معرض الأعمال المميز",worksSub:"مجموعة من أفضل التصميمات.",
      sampleNote:"الصور المعروضة حاليًا نماذج تجريبية مؤقتة وليست من أعمال المصمم، وسيتم استبدالها بالأعمال الحقيقية.",
      all:"الكل",viewAll:"شاهد المعرض كاملًا",
      whyTitle:"لماذا تختار GRAPHICS MASTER؟",
      why:["تصميمات مبتكرة ومميزة","الاهتمام بأدق التفاصيل","الالتزام بالاتفاق مع العميل","سهولة طلب التصميم","التواصل المباشر","تصميمات تناسب احتياجات المشروعات المختلفة"],
      stepsTitle:"خطوات العمل",stepsSub:"طريقة بسيطة وواضحة من الفكرة إلى التسليم.",
      steps:[["اختر الخدمة المناسبة","حدد نوع التصميم الذي تحتاجه."],["املأ نموذج الطلب","اكتب بياناتك واسم الخدمة."],["أرسل التفاصيل والمراجع","شاركنا فكرتك وأي أمثلة تعجبك."],["راجع الطلب والتكلفة","تأكد من التفاصيل والتكلفة المتفق عليها."],["ابدأ التنفيذ","نبدأ بعد تأكيد الطلب."],["استلم التصميم النهائي","تصلك الملفات وفق الاتفاق."]],
      testTitle:"آراء العملاء",testEmpty:"لا توجد تقييمات حقيقية معروضة بعد. (لصاحب الموقع: أضف آراء عملائك الحقيقية لاحقًا في ملف data.js ضمن TESTIMONIALS، ولا تضع آراء غير حقيقية.)",
      ctaTitle:"عندك فكرة؟ خلينا نحولها لتصميم مميز.",ctaText:"ابدأ طلبك الآن ودعنا نساعدك في تقديم فكرتك بأفضل صورة.",ctaBtn:"اطلب تصميمك الآن",
      footAbout:"GRAPHICS MASTER استوديو تصميم جرافيكي يقدم حلولًا إبداعية للأفراد والشركات والمدرسين وأصحاب المشروعات.",
      links:"روابط الصفحات",svcs:"الخدمات",follow:"تابعنا",contactInfo:"بيانات التواصل",todo:"سيتم إضافتها قريبًا",
      copy:"جميع الحقوق محفوظة.",
      // services page
      svcPageTitle:"خدماتنا",svcPageSub:"تفاصيل كل خدمة: ما ستحصل عليه، والملفات، والمدة التقديرية.",
      uses:"الاستخدامات المناسبة",gets:"ما ستحصل عليه",files:"الملفات المسلّمة (حسب الاتفاق)",time:"مدة التنفيذ التقديرية",price:"السعر الابتدائي",priceNone:"يُحدد حسب تفاصيل الطلب",
      // portfolio
      portTitle:"معرض الأعمال",portSub:"تصفح التصميمات حسب التصنيف، واضغط على أي عمل لعرضه بحجم أكبر.",
      cat:"التصنيف",
      // pricing
      priceTitle:"الأسعار",priceSub:"السعر النهائي يُحدد بعد معرفة تفاصيل طلبك، وتراجعه معنا قبل بدء التنفيذ.",
      priceNote:"لم يتم تحديد أسعار ابتدائية بعد — يمكن لصاحب الموقع إضافتها بسهولة من ملف data.js.",
      // order
      orderTitle:"اطلب تصميمك",orderSub:"املأ النموذج وسنتواصل معك لتأكيد التفاصيل والتكلفة.",
      f:{name:"الاسم",phone:"رقم الهاتف / واتساب",email:"البريد الإلكتروني (اختياري)",service:"الخدمة المطلوبة",choose:"اختر الخدمة",deadline:"الموعد المطلوب للتسليم (اختياري)",details:"تفاصيل التصميم",detailsPh:"اكتب النصوص، الألوان، المقاسات، وأي أفكار لديك...",refs:"روابط مراجع (اختياري)",send:"أرسل الطلب",ok:"تم تجهيز طلبك. ",okNoWa:"لم يتم ربط وسيلة استقبال الطلبات بعد (واتساب/بريد). تم نسخ نص الطلب لإرساله يدويًا.",req:"من فضلك املأ الحقول المطلوبة."},
      // about
      aboutTitle:"من نحن",aboutSub:"GRAPHICS MASTER — بإدارة المصمم MOHAMED ESSAM",
      aboutText:["GRAPHICS MASTER علامة متخصصة في التصميم الجرافيكي والحلول الإبداعية، نخدم الأفراد والشركات والمدرسين وأصحاب المشروعات.","نؤمن أن لكل فكرة تصميمًا يليق بها، ونهتم بالتفاصيل والالتزام بما تم الاتفاق عليه.","محمد عصام مصمم جرافيك بخبرة 5 سنوات في صناعة هويات بصرية وتصميمات مؤثرة، ويحوّل الأفكار إلى حلول بصرية ترفع من قيمة العلامات وتجذب الجمهور."],
      aboutAdd:"(لصاحب الموقع: يمكنك إضافة نبذة شخصية وصورتك هنا.)",
      // contact
      contactTitle:"تواصل معنا",contactSub:"يسعدنا سماع فكرتك.",
      c:{wa:"واتساب",mail:"البريد الإلكتروني",phone:"الهاتف",msg:"الرسالة",send:"أرسل الرسالة"}
    },
    en: {
      brand:"GRAPHICS MASTER", dir:"ltr", other:"عربي",
      nav:{home:"Home",services:"Services",portfolio:"Portfolio",pricing:"Pricing",order:"Order a Design",about:"About",contact:"Contact"},
      tagline:"Every idea you have has a design with me",
      hero:{eyebrow:"GRAPHIC DESIGN & CREATIVE SOLUTIONS",title:"We turn your ideas into designs that make a difference",text:"At GRAPHICS MASTER we craft creative designs that blend professionalism and beauty, helping your brand stand out.",b1:"View our work",b2:"Order your design now"},
      sample:"Sample",
      svcTitle:"Our Main Services",svcSub:"Everything your brand needs in design, in one place.",allSvc:"View all services",orderSvc:"Order this service",
      worksTitle:"Featured Portfolio",worksSub:"A selection of our best designs.",
      sampleNote:"Images shown are temporary sample placeholders, not the designer's real work. They will be replaced with real projects.",
      all:"All",viewAll:"View full portfolio",
      whyTitle:"Why choose GRAPHICS MASTER?",
      why:["Innovative, distinctive designs","Attention to the finest details","Commitment to what we agreed","Easy ordering","Direct communication","Designs fit for different project needs"],
      stepsTitle:"How it works",stepsSub:"A simple, clear path from idea to delivery.",
      steps:[["Choose the right service","Pick the type of design you need."],["Fill in the order form","Add your details and service."],["Send details & references","Share your idea and examples you like."],["Review order & cost","Confirm details and the agreed cost."],["We start designing","Work begins after confirmation."],["Receive the final design","Files delivered as agreed."]],
      testTitle:"Client Reviews",testEmpty:"No real client reviews are displayed yet. (Site owner: add your genuine reviews later in data.js under TESTIMONIALS — please don't add fake ones.)",
      ctaTitle:"Got an idea? Let's turn it into a great design.",ctaText:"Start your order now and let us help present your idea at its best.",ctaBtn:"Order your design now",
      footAbout:"GRAPHICS MASTER is a graphic design studio offering creative solutions for individuals, companies, teachers and business owners.",
      links:"Pages",svcs:"Services",follow:"Follow us",contactInfo:"Contact",todo:"Coming soon",
      copy:"All rights reserved.",
      svcPageTitle:"Our Services",svcPageSub:"Details of each service: what you get, files and estimated time.",
      uses:"Suitable uses",gets:"What you get",files:"Deliverable files (as agreed)",time:"Estimated time",price:"Starting price",priceNone:"Set based on order details",
      portTitle:"Portfolio",portSub:"Browse designs by category and click any work to view it larger.",
      cat:"Category",
      priceTitle:"Pricing",priceSub:"The final price is set after we know your order details, and you review it with us before work starts.",
      priceNote:"No starting prices have been set yet — the site owner can add them easily in data.js.",
      orderTitle:"Order Your Design",orderSub:"Fill in the form and we'll contact you to confirm details and cost.",
      f:{name:"Name",phone:"Phone / WhatsApp",email:"Email (optional)",service:"Requested service",choose:"Choose a service",deadline:"Desired delivery date (optional)",details:"Design details",detailsPh:"Write texts, colors, sizes and any ideas you have...",refs:"Reference links (optional)",send:"Send order",ok:"Your order is ready. ",okNoWa:"No order channel (WhatsApp/email) is linked yet. The order text was copied so you can send it manually.",req:"Please fill the required fields."},
      aboutTitle:"About Us",aboutSub:"GRAPHICS MASTER — led by designer MOHAMED ESSAM",
      aboutText:["GRAPHICS MASTER is a brand specialized in graphic design and creative solutions, serving individuals, companies, teachers and business owners.","We believe every idea deserves a fitting design, and we care about details and keeping to what we agreed.","Mohamed Essam is a graphic designer with 5 years of experience crafting compelling visual identities and impactful designs, turning concepts into visual solutions that elevate brands and engage audiences."],
      aboutAdd:"(Site owner: add a personal bio and your photo here.)",
      contactTitle:"Contact Us",contactSub:"We'd love to hear your idea.",
      c:{wa:"WhatsApp",mail:"Email",phone:"Phone",msg:"Message",send:"Send message"}
    }
  },

  CATS: [
    {id:"banners",ar:"البانرات",en:"Banners"},
    {id:"posters",ar:"البوسترات",en:"Posters"},
    {id:"logos",ar:"الشعارات",en:"Logos"},
    {id:"cards",ar:"الكروت الشخصية",en:"Business Cards"},
    {id:"wedding",ar:"دعوات الزفاف والخطوبة",en:"Wedding & Engagement"},
    {id:"covers",ar:"أغلفة الكتب والملازم",en:"Book & Notes Covers"},
    {id:"certificates",ar:"شهادات التقدير",en:"Certificates"},
    {id:"greetings",ar:"تهنئات المناسبات",en:"Greetings"},
    {id:"marketing",ar:"المواد الإعلانية والتسويقية",en:"Marketing Materials"}
  ],

  // آراء العملاء الحقيقية فقط. مثال:
  // {name:"اسم العميل", role:"...", text:"..."}
  TESTIMONIALS: []
};

/* أعمال المصمم الحقيقية (من ملف Portfolio) — لإضافة عمل جديد انسخ سطرًا وغيّر المسارات */
GM.WORKS = [
 {
  "cat": "banners",
  "img": "assets/works/w03.jpg",
  "thumb": "assets/thumbs/w03.jpg",
  "feat": true,
  "ar": {
   "t": "بانرات مطاعم وقوائم طعام",
   "d": "مجموعة بانرات إعلانية لمطاعم الوجبات السريعة وقوائم الطعام بتصميم جذاب."
  },
  "en": {
   "t": "Restaurant Banners & Menu Roll-ups",
   "d": "Advertising banners and menu roll-ups for fast-food restaurants."
  }
 },
 {
  "cat": "banners",
  "img": "assets/works/w04.jpg",
  "thumb": "assets/thumbs/w04.jpg",
  "feat": false,
  "ar": {
   "t": "بانرات كافيهات وقهوة",
   "d": "بانرات وروول أب لكافيهات ومشروبات ساخنة وباردة."
  },
  "en": {
   "t": "Coffee Shop Banners",
   "d": "Banners and roll-ups for coffee shops and drinks."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w05.jpg",
  "thumb": "assets/thumbs/w05.jpg",
  "feat": true,
  "ar": {
   "t": "بوسترات برجر",
   "d": "بوسترات إعلانية لمطعم برجر بألوان قوية وتركيز على المنتج."
  },
  "en": {
   "t": "Burger Posters",
   "d": "Bold promotional posters for a burger restaurant, focused on the product."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w06.jpg",
  "thumb": "assets/thumbs/w06.jpg",
  "feat": false,
  "ar": {
   "t": "سلسلة بوستات سوشيال للبرجر",
   "d": "سلسلة بوستات متناسقة لصفحة مطعم على السوشيال ميديا."
  },
  "en": {
   "t": "Burger Social Media Series",
   "d": "A consistent series of posts for a restaurant's social media page."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w07.jpg",
  "thumb": "assets/thumbs/w07.jpg",
  "feat": false,
  "ar": {
   "t": "بوسترات برجر إبداعية",
   "d": "أفكار إبداعية لتقديم المنتج بصريًا في إعلان جذاب."
  },
  "en": {
   "t": "Creative Burger Posters",
   "d": "Creative concepts presenting the product in an eye-catching ad."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w08.jpg",
  "thumb": "assets/thumbs/w08.jpg",
  "feat": false,
  "ar": {
   "t": "بوسترات كومبو برجر",
   "d": "بوسترات عروض وكومبو بتصميم عصري."
  },
  "en": {
   "t": "Burger Combo Posters",
   "d": "Offer and combo posters with a modern look."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w09.jpg",
  "thumb": "assets/thumbs/w09.jpg",
  "feat": false,
  "ar": {
   "t": "بوسترات شاورما ومأكولات",
   "d": "بوسترات إعلانية لمطاعم الشاورما والمأكولات السريعة."
  },
  "en": {
   "t": "Shawarma & Food Posters",
   "d": "Promotional posters for shawarma and fast-food restaurants."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w10.jpg",
  "thumb": "assets/thumbs/w10.jpg",
  "feat": false,
  "ar": {
   "t": "سلسلة بوستات بيتزا ومأكولات",
   "d": "بوستات سوشيال ميديا متنوعة لمطاعم البيتزا والمأكولات."
  },
  "en": {
   "t": "Pizza & Food Series",
   "d": "Varied social media posts for pizza and food restaurants."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w11.jpg",
  "thumb": "assets/thumbs/w11.jpg",
  "feat": false,
  "ar": {
   "t": "بوسترات عصائر ومشروبات",
   "d": "بوسترات منتعشة لعصائر ومشروبات بألوان حيوية."
  },
  "en": {
   "t": "Juice & Drinks Posters",
   "d": "Fresh posters for juices and drinks in vibrant colors."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w12.jpg",
  "thumb": "assets/thumbs/w12.jpg",
  "feat": false,
  "ar": {
   "t": "بوسترات ميلك شيك وقهوة",
   "d": "بوسترات لمشروبات الميلك شيك والقهوة."
  },
  "en": {
   "t": "Milkshake & Coffee Posters",
   "d": "Posters for milkshakes and coffee."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w13.jpg",
  "thumb": "assets/thumbs/w13.jpg",
  "feat": false,
  "ar": {
   "t": "تصميمات سوشيال ميديا لعيادات ومنتجات",
   "d": "بوستات سوشيال ميديا لعيادات أسنان ومنتجات العناية."
  },
  "en": {
   "t": "Social Media for Clinics & Products",
   "d": "Social media posts for dental clinics and care products."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w14.jpg",
  "thumb": "assets/thumbs/w14.jpg",
  "feat": true,
  "ar": {
   "t": "إعلانات حجز لمدرسين ومحاضرين",
   "d": "إعلانات فتح باب الحجز بأفكار إبداعية لمدرسين ومحاضرين."
  },
  "en": {
   "t": "Booking Announcements for Teachers",
   "d": "Creative booking-open announcements for teachers and lecturers."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w15.jpg",
  "thumb": "assets/thumbs/w15.jpg",
  "feat": false,
  "ar": {
   "t": "إعلانات بداية الفصل الدراسي",
   "d": "تصميمات سوشيال ميديا لإعلان بداية الفصل ومواعيد المجموعات."
  },
  "en": {
   "t": "Semester Start Announcements",
   "d": "Social media designs announcing semester starts and group schedules."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w16.jpg",
  "thumb": "assets/thumbs/w16.jpg",
  "feat": false,
  "ar": {
   "t": "إعلانات إبداعية للترم الثاني",
   "d": "أفكار بصرية مبتكرة لإعلانات بداية الترم."
  },
  "en": {
   "t": "Creative Second-term Ads",
   "d": "Inventive visual concepts for term-start ads."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w17.jpg",
  "thumb": "assets/thumbs/w17.jpg",
  "feat": false,
  "ar": {
   "t": "إعلانات كورسات ومراجعات",
   "d": "تصميمات لإعلانات الكورسات ومواعيد المراجعات."
  },
  "en": {
   "t": "Course & Revision Ads",
   "d": "Designs for course and revision schedule ads."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w18.jpg",
  "thumb": "assets/thumbs/w18.jpg",
  "feat": false,
  "ar": {
   "t": "إعلانات مراجعات الترم",
   "d": "بوسترات مراجعات ومواعيد لمدرسين."
  },
  "en": {
   "t": "Term Revision Ads",
   "d": "Revision and schedule posters for teachers."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w19.jpg",
  "thumb": "assets/thumbs/w19.jpg",
  "feat": true,
  "ar": {
   "t": "إعلانات المراجعة النهائية",
   "d": "تصميمات درامية لإعلانات المراجعة النهائية وبداية الفصل الثاني."
  },
  "en": {
   "t": "Final Revision Ads",
   "d": "Dramatic designs for final-revision and second-semester ads."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w20.jpg",
  "thumb": "assets/thumbs/w20.jpg",
  "feat": false,
  "ar": {
   "t": "إعلانات مواعيد وفتح باب الحجز",
   "d": "بوسترات مواعيد وحجز لمدرسين بأسلوب جذاب."
  },
  "en": {
   "t": "Schedule & Booking Ads",
   "d": "Schedule and booking posters for teachers with an engaging style."
  }
 },
 {
  "cat": "posters",
  "img": "assets/works/w21.jpg",
  "thumb": "assets/thumbs/w21.jpg",
  "feat": false,
  "ar": {
   "t": "إعلانات بداية الحجز والمراجعات",
   "d": "تصميمات إعلانية لمدرسين بأسلوب مميز."
  },
  "en": {
   "t": "Booking & Revision Ads",
   "d": "Distinctive advertising designs for teachers."
  }
 },
 {
  "cat": "logos",
  "img": "assets/works/w26.jpg",
  "thumb": "assets/thumbs/w26.jpg",
  "feat": true,
  "ar": {
   "t": "شعارات عربية وإنجليزية (1)",
   "d": "مجموعة شعارات لمجالات مختلفة بطابع بسيط وراقٍ."
  },
  "en": {
   "t": "Arabic & English Logos (1)",
   "d": "A set of logos for various fields with a clean, elegant style."
  }
 },
 {
  "cat": "logos",
  "img": "assets/works/w27.jpg",
  "thumb": "assets/thumbs/w27.jpg",
  "feat": false,
  "ar": {
   "t": "شعارات عربية وإنجليزية (2)",
   "d": "شعارات حروف ورموز بخطوط عربية وإنجليزية."
  },
  "en": {
   "t": "Arabic & English Logos (2)",
   "d": "Lettermark and symbol logos in Arabic and English typography."
  }
 },
 {
  "cat": "logos",
  "img": "assets/works/w31.jpg",
  "thumb": "assets/thumbs/w31.jpg",
  "feat": true,
  "ar": {
   "t": "هوية بصرية لعيادة طبيب",
   "d": "هوية بصرية متكاملة: شعار وألوان وخطوط وكروت ومطبوعات."
  },
  "en": {
   "t": "Visual Identity for a Doctor's Clinic",
   "d": "A full identity: logo, colors, typography, cards and stationery."
  }
 },
 {
  "cat": "logos",
  "img": "assets/works/w32.jpg",
  "thumb": "assets/thumbs/w32.jpg",
  "feat": false,
  "ar": {
   "t": "هوية بصرية لمكتب محاماة",
   "d": "هوية بصرية متكاملة لمكتب محاماة بمطبوعات وتطبيقات."
  },
  "en": {
   "t": "Visual Identity for a Law Office",
   "d": "A full identity for a law office with stationery and applications."
  }
 },
 {
  "cat": "cards",
  "img": "assets/works/w31.jpg",
  "thumb": "assets/thumbs/w31.jpg",
  "feat": false,
  "ar": {
   "t": "كروت شخصية ضمن هوية عيادة",
   "d": "كروت شخصية متناسقة مع هوية العيادة."
  },
  "en": {
   "t": "Business Cards in a Clinic Identity",
   "d": "Business cards consistent with a clinic's identity."
  }
 },
 {
  "cat": "cards",
  "img": "assets/works/w32.jpg",
  "thumb": "assets/thumbs/w32.jpg",
  "feat": false,
  "ar": {
   "t": "كروت شخصية ضمن هوية مكتب محاماة",
   "d": "كروت شخصية أنيقة ضمن هوية مكتب محاماة."
  },
  "en": {
   "t": "Business Cards in a Law Office Identity",
   "d": "Elegant business cards within a law office identity."
  }
 },
 {
  "cat": "wedding",
  "img": "assets/works/w28.jpg",
  "thumb": "assets/thumbs/w28.jpg",
  "feat": true,
  "ar": {
   "t": "دعوات زفاف وخطوبة (1)",
   "d": "دعوات بتصميمات أنيقة وزهور وألوان ناعمة."
  },
  "en": {
   "t": "Wedding & Engagement Invitations (1)",
   "d": "Elegant invitation designs with florals and soft colors."
  }
 },
 {
  "cat": "wedding",
  "img": "assets/works/w29.jpg",
  "thumb": "assets/thumbs/w29.jpg",
  "feat": false,
  "ar": {
   "t": "دعوات زفاف وخطوبة (2)",
   "d": "دعوات بإطارات وورود بألوان هادئة."
  },
  "en": {
   "t": "Wedding & Engagement Invitations (2)",
   "d": "Invitations with frames and flowers in calm colors."
  }
 },
 {
  "cat": "wedding",
  "img": "assets/works/w30.jpg",
  "thumb": "assets/thumbs/w30.jpg",
  "feat": false,
  "ar": {
   "t": "دعوات زفاف وخطوبة (3)",
   "d": "دعوات بتصميمات عصرية وزخارف ناعمة."
  },
  "en": {
   "t": "Wedding & Engagement Invitations (3)",
   "d": "Modern invitations with delicate ornaments."
  }
 },
 {
  "cat": "marketing",
  "img": "assets/works/w22.jpg",
  "thumb": "assets/thumbs/w22.jpg",
  "feat": true,
  "ar": {
   "t": "منيو وقوائم أسعار (1)",
   "d": "منيو مطاعم مطبوع بتصميم عصري."
  },
  "en": {
   "t": "Menus & Price Lists (1)",
   "d": "A printed restaurant menu with a modern layout."
  }
 },
 {
  "cat": "marketing",
  "img": "assets/works/w23.jpg",
  "thumb": "assets/thumbs/w23.jpg",
  "feat": false,
  "ar": {
   "t": "منيو وقوائم أسعار (2)",
   "d": "تصميمات قوائم أسعار ومنيو متنوعة."
  },
  "en": {
   "t": "Menus & Price Lists (2)",
   "d": "Varied menu and price-list designs."
  }
 },
 {
  "cat": "marketing",
  "img": "assets/works/w24.jpg",
  "thumb": "assets/thumbs/w24.jpg",
  "feat": false,
  "ar": {
   "t": "منيو وقوائم أسعار (3)",
   "d": "منيو مطعم بتصميم حيوي."
  },
  "en": {
   "t": "Menus & Price Lists (3)",
   "d": "A restaurant menu with a lively design."
  }
 },
 {
  "cat": "marketing",
  "img": "assets/works/w25.jpg",
  "thumb": "assets/thumbs/w25.jpg",
  "feat": false,
  "ar": {
   "t": "منيو وقوائم أسعار (4)",
   "d": "منيو مطعم برجر بألوان قوية."
  },
  "en": {
   "t": "Menus & Price Lists (4)",
   "d": "A burger restaurant menu in strong colors."
  }
 }
];
