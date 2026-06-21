/* =====================================================================
   RABET — رابط  ·  i18n.js
   All translatable copy lives here. To edit any text on the site,
   change it in this file. Each key holds five languages:
     ar = العربية (Syrian dialect, right-to-left)
     en = English
     tr = Türkçe
     fr = Français
     de = Deutsch
   Strings may contain HTML (<em>, <b>, <br>).
   ===================================================================== */

window.RABET_LANGS = [
  { code: "ar", name: "العربية", short: "ع",  rtl: true  },
  { code: "en", name: "English", short: "EN", rtl: false },
  { code: "tr", name: "Türkçe",  short: "TR", rtl: false },
  { code: "fr", name: "Français",short: "FR", rtl: false },
  { code: "de", name: "Deutsch", short: "DE", rtl: false }
];

window.RABET_I18N = {
  /* ---- nav ---- */
  "nav.services": { ar:"الخدمات", en:"Services", tr:"Hizmetler", fr:"Services", de:"Leistungen" },
  "nav.work":     { ar:"كيف نعمل", en:"How we work", tr:"Nasıl çalışırız", fr:"Notre méthode", de:"So arbeiten wir" },
  "nav.promise":  { ar:"الوعد", en:"The promise", tr:"Sözümüz", fr:"La promesse", de:"Das Versprechen" },
  "nav.contact":  { ar:"تواصل", en:"Contact", tr:"İletişim", fr:"Contact", de:"Kontakt" },
  "nav.cta":      { ar:"تواصل معنا", en:"Get in touch", tr:"Bize ulaşın", fr:"Nous contacter", de:"Kontakt aufnehmen" },

  /* ---- hero ---- */
  "hero.eyebrow": { ar:"وكالة رقمية سورية", en:"Syrian digital agency", tr:"Suriyeli dijital ajans", fr:"Agence digitale syrienne", de:"Syrische Digitalagentur" },
  "hero.h1": {
    ar:"الجسر بين عملك وبين الناس <em>يلي عم يدوّروا عليه.</em>",
    en:"The bridge between your business and the people <em>looking for it.</em>",
    tr:"İşletmeniz ile onu <em>arayan insanlar</em> arasındaki köprü.",
    fr:"Le pont entre votre activité et les gens <em>qui la cherchent.</em>",
    de:"Die Brücke zwischen Ihrem Unternehmen und den Menschen, <em>die es suchen.</em>"
  },
  "hero.lede": {
    ar:"رابط يبني، يدير، ويطوّر حضورك الرقمي — بشكل مباشر. بلا وسطاء. بلا ضجيج. نحنا منعمل الشغل بإيدينا.",
    en:"Rabet builds, manages, and grows your online presence — directly. No middlemen. No noise. Just us, doing the work.",
    tr:"Rabet, dijital varlığınızı doğrudan kurar, yönetir ve büyütür. Aracı yok. Gürültü yok. Sadece biz, işi yapıyoruz.",
    fr:"Rabet crée, gère et développe votre présence en ligne — directement. Sans intermédiaires. Sans bruit. Juste nous, qui faisons le travail.",
    de:"Rabet baut, betreut und vergrößert Ihre Online-Präsenz — direkt. Keine Vermittler. Kein Lärm. Nur wir, die die Arbeit machen."
  },
  "hero.cta1": { ar:"ابدأ الحديث", en:"Start a conversation", tr:"Bir görüşme başlatın", fr:"Démarrer la conversation", de:"Gespräch beginnen" },
  "hero.cta2": { ar:"شوف شو منعمل", en:"See what we do", tr:"Ne yaptığımıza bakın", fr:"Voir ce que nous faisons", de:"Sehen, was wir tun" },
  "hero.scroll": { ar:"انزل", en:"Scroll", tr:"Kaydır", fr:"Défiler", de:"Scrollen" },

  /* ---- promise ---- */
  "promise.eyebrow": { ar:"وعدنا", en:"Our promise", tr:"Sözümüz", fr:"Notre promesse", de:"Unser Versprechen" },
  "promise.trans": {
    ar:"منشتغل بصمت. والنتيجة بتحكي عنّا.",
    en:"The strongest bridges are never seen. They just hold.",
    tr:"En sağlam köprüler hiç görünmez. Sadece taşır.",
    fr:"Les ponts les plus solides ne se voient jamais. Ils tiennent, c'est tout.",
    de:"Die stärksten Brücken sieht man nie. Sie tragen einfach."
  },

  /* ---- services ---- */
  "services.eyebrow": { ar:"شو منعمل", en:"What we do", tr:"Ne yaparız", fr:"Ce que nous faisons", de:"Was wir tun" },
  "services.h2": {
    ar:"كل ما يحتاجه حضورك الرقمي. <em>تحت سقف واحد.</em>",
    en:"Everything your presence needs. <em>Under one roof.</em>",
    tr:"Varlığınızın ihtiyacı olan her şey. <em>Tek çatı altında.</em>",
    fr:"Tout ce dont votre présence a besoin. <em>Sous un même toit.</em>",
    de:"Alles, was Ihre Präsenz braucht. <em>Unter einem Dach.</em>"
  },
  "svc1.title": { ar:"تصميم وتطوير المواقع", en:"Website design &amp; development", tr:"Web tasarımı ve geliştirme", fr:"Conception &amp; développement web", de:"Webdesign &amp; Entwicklung" },
  "svc1.desc":  {
    ar:"مواقع سريعة وعصرية مبنية لتجيب نتائج، مو بس شكل.",
    en:"Fast, modern sites built to convert — not just to look good.",
    tr:"Sadece güzel görünmek için değil, sonuç getirmek için kurulan hızlı, modern siteler.",
    fr:"Des sites rapides et modernes conçus pour convertir, pas seulement pour plaire.",
    de:"Schnelle, moderne Seiten, die nicht nur gut aussehen, sondern überzeugen."
  },
  "svc2.title": { ar:"إدارة التواصل والمحتوى", en:"Social media &amp; content", tr:"Sosyal medya ve içerik", fr:"Réseaux sociaux &amp; contenu", de:"Social Media &amp; Content" },
  "svc2.desc":  {
    ar:"منرّكب ومندير قنواتك، ومنصنع المحتوى يلي بيعمّرها.",
    en:"We run your channels and make the content that fills them.",
    tr:"Kanallarınızı yönetiriz ve onları dolduran içeriği üretiriz.",
    fr:"Nous gérons vos canaux et créons le contenu qui les nourrit.",
    de:"Wir führen Ihre Kanäle und schaffen die Inhalte, die sie füllen."
  },
  "svc3.title": { ar:"الإعلانات الرقمية", en:"Digital advertising", tr:"Dijital reklamcılık", fr:"Publicité digitale", de:"Digitale Werbung" },
  "svc3.desc":  {
    ar:"حملات بتوصل للناس الصح، ومحسوبة لآخر ليرة.",
    en:"Campaigns aimed at the right people, measured to the last lira.",
    tr:"Doğru kişilere yönelen, son liraya kadar ölçülen kampanyalar.",
    fr:"Des campagnes ciblées sur les bonnes personnes, mesurées au centime près.",
    de:"Kampagnen für die richtigen Menschen — bis auf den letzten Cent messbar."
  },
  "svc4.title": { ar:"الهوية البصرية والتصميم", en:"Brand identity &amp; design", tr:"Marka kimliği ve tasarım", fr:"Identité de marque &amp; design", de:"Markenidentität &amp; Design" },
  "svc4.desc":  {
    ar:"شعارات وأنظمة بصرية بتخليك ما تنشبه بحدا.",
    en:"Logos, systems, and visuals that make you unmistakable.",
    tr:"Sizi benzersiz kılan logolar, sistemler ve görseller.",
    fr:"Des logos, des systèmes et des visuels qui vous rendent reconnaissable entre tous.",
    de:"Logos, Systeme und Visuals, die Sie unverwechselbar machen."
  },

  /* ---- how we work ---- */
  "work.eyebrow": { ar:"كيف منشتغل", en:"How we work", tr:"Nasıl çalışırız", fr:"Notre méthode", de:"So arbeiten wir" },
  "work.h2": {
    ar:"إنت بتحكي مع رابط. <em>ورابط بيعمل الشغل.</em>",
    en:"You speak to Rabet. <em>Rabet does the work.</em>",
    tr:"Siz Rabet ile konuşursunuz. <em>Rabet işi yapar.</em>",
    fr:"Vous parlez à Rabet. <em>Rabet fait le travail.</em>",
    de:"Sie sprechen mit Rabet. <em>Rabet macht die Arbeit.</em>"
  },
  "work.beat1": { ar:"بلا وسطاء", en:"No middlemen", tr:"Aracı yok", fr:"Pas d'intermédiaires", de:"Keine Vermittler" },
  "work.beat2": { ar:"بلا تحويلات", en:"No referrals", tr:"Yönlendirme yok", fr:"Pas de renvois", de:"Keine Weitervermittlung" },
  "work.beat3": { ar:"بلا انتظار «الشب يلي بيعرف»", en:"No waiting on “the guy”", tr:"“O adamı” beklemek yok", fr:"Pas d'attente du « bon contact »", de:"Kein Warten auf „den einen Typen“" },
  "work.toggle1": { ar:"مع رابط", en:"With Rabet", tr:"Rabet ile", fr:"Avec Rabet", de:"Mit Rabet" },
  "work.toggle2": { ar:"الباقين", en:"Everyone else", tr:"Diğerleri", fr:"Les autres", de:"Alle anderen" },
  "work.cap.rabet": {
    ar:"خيط واحد، من الأول للآخر. نفس الإيدين طول الطريق.",
    en:"One thread, end to end. The same hands the whole way.",
    tr:"Baştan sona tek bir hat. Yol boyunca aynı eller.",
    fr:"Un seul fil, du début à la fin. Les mêmes mains tout du long.",
    de:"Ein Faden, von Anfang bis Ende. Dieselben Hände den ganzen Weg."
  },
  "work.cap.others": {
    ar:"الفكرة بتضيع بالطريق. والوقت بيضيع بالتحويلات.",
    en:"Briefs lost in translation. Time lost in the handoffs.",
    tr:"Brief yolda kaybolur. Zaman devir teslimlerde kaybolur.",
    fr:"Le brief se perd en route. Le temps se perd dans les transferts.",
    de:"Das Briefing geht verloren. Zeit geht in den Übergaben verloren."
  },
  "work.you":   { ar:"إنت", en:"You", tr:"Siz", fr:"Vous", de:"Sie" },
  "work.live":  { ar:"جاهز", en:"Live", tr:"Yayında", fr:"En ligne", de:"Live" },
  "work.agency":{ ar:"وكالة", en:"AGENCY", tr:"AJANS", fr:"AGENCE", de:"AGENTUR" },
  "work.manager":{ ar:"مدير", en:"MANAGER", tr:"YÖNETİCİ", fr:"CHEF DE PROJET", de:"MANAGER" },
  "work.guy":   { ar:"«الشب»", en:"“THE GUY”", tr:"“O ADAM”", fr:"« LE CONTACT »", de:"„DER TYP“" },

  /* ---- manifesto ---- */
  "manifesto.eyebrow": { ar:"ليش ما رح تشوف وجوهنا", en:"Why you won’t see our faces", tr:"Neden yüzümüzü görmeyeceksiniz", fr:"Pourquoi vous ne verrez pas nos visages", de:"Warum Sie unsere Gesichter nicht sehen" },
  "manifesto.body": {
    ar:"ما منبيع أسماء ولا وجوه. منبيع <b>الشغل</b> — بهدوء، ومباشرة، وبنفس الإيدين كل مرة. كل ما لاحظتنا أقل، كل ما كان شغلنا أحسن.",
    en:"We don’t sell a brand built on personalities. We sell <b>the work</b> — quiet, direct, by the same hands every time. The less you notice us, the better we’ve done our job.",
    tr:"Kişiliklere dayalı bir marka satmıyoruz. Biz <b>işi</b> satıyoruz — sessiz, doğrudan ve her seferinde aynı ellerle. Bizi ne kadar az fark ederseniz, işimizi o kadar iyi yapmışız demektir.",
    fr:"Nous ne vendons pas une marque bâtie sur des personnalités. Nous vendons <b>le travail</b> — discret, direct, par les mêmes mains à chaque fois. Moins vous nous remarquez, mieux nous avons fait notre travail.",
    de:"Wir verkaufen keine Marke, die auf Persönlichkeiten beruht. Wir verkaufen <b>die Arbeit</b> — leise, direkt, jedes Mal von denselben Händen. Je weniger Sie uns bemerken, desto besser haben wir unsere Arbeit gemacht."
  },

  /* ---- contact ---- */
  "contact.eyebrow": { ar:"تواصل معنا", en:"Get in touch", tr:"Bize ulaşın", fr:"Nous contacter", de:"Kontakt aufnehmen" },
  "contact.h2": {
    ar:"قلّنا شو بدك. <em>ونحنا منكمّل.</em>",
    en:"Tell us what you need. <em>We’ll take it from there.</em>",
    tr:"Neye ihtiyacınız olduğunu söyleyin. <em>Gerisini biz hallederiz.</em>",
    fr:"Dites-nous ce qu'il vous faut. <em>On s'occupe du reste.</em>",
    de:"Sagen Sie uns, was Sie brauchen. <em>Den Rest übernehmen wir.</em>"
  },
  "contact.sub": {
    ar:"اختار شو بدك، ومنجهّزلك الإيميل جاهز.",
    en:"Pick what you’re after and we’ll start the email for you.",
    tr:"İstediğinizi seçin, e-postayı sizin için hazırlayalım.",
    fr:"Choisissez ce qui vous intéresse et nous préparons l'e-mail pour vous.",
    de:"Wählen Sie, was Sie suchen — wir bereiten die E-Mail für Sie vor."
  },
  "contact.chip1": { ar:"موقع", en:"Website", tr:"Web sitesi", fr:"Site web", de:"Website" },
  "contact.chip2": { ar:"سوشال ميديا", en:"Social media", tr:"Sosyal medya", fr:"Réseaux sociaux", de:"Social Media" },
  "contact.chip3": { ar:"إعلانات", en:"Advertising", tr:"Reklam", fr:"Publicité", de:"Werbung" },
  "contact.chip4": { ar:"هوية بصرية", en:"Branding", tr:"Marka", fr:"Identité", de:"Branding" },
  "contact.copy":  { ar:"نسخ", en:"Copy", tr:"Kopyala", fr:"Copier", de:"Kopieren" },
  "contact.send":  { ar:"افتح الإيميل", en:"Compose email", tr:"E-posta oluştur", fr:"Rédiger l'e-mail", de:"E-Mail verfassen" },
  "contact.copied":{ ar:"تم النسخ", en:"Copied to clipboard", tr:"Panoya kopyalandı", fr:"Copié dans le presse-papiers", de:"In die Zwischenablage kopiert" },

  /* ---- footer ---- */
  "footer.rights": { ar:"كل الحقوق محفوظة", en:"All rights reserved", tr:"Tüm hakları saklıdır", fr:"Tous droits réservés", de:"Alle Rechte vorbehalten" },

  /* ---- email builder (used to pre-fill the mailto) ---- */
  "mail.subject": { ar:"مشروع جديد لرابط", en:"A new project for Rabet", tr:"Rabet için yeni bir proje", fr:"Un nouveau projet pour Rabet", de:"Ein neues Projekt für Rabet" },
  "mail.and":     { ar:"و", en:"and", tr:"ve", fr:"et", de:"und" },
  "mail.intro_with": {
    ar:"مرحبا رابط،\n\nأنا بدوّر على {needs}.\n\nهي شوية معلومات عن شغلي:\n\n",
    en:"Hi Rabet,\n\nI'm looking for {needs}.\n\nHere's a bit about my business:\n\n",
    tr:"Merhaba Rabet,\n\n{needs} arıyorum.\n\nİşletmem hakkında biraz bilgi:\n\n",
    fr:"Bonjour Rabet,\n\nJe recherche {needs}.\n\nVoici quelques informations sur mon activité :\n\n",
    de:"Hallo Rabet,\n\nich suche {needs}.\n\nHier ein paar Infos zu meinem Unternehmen:\n\n"
  },
  "mail.intro_plain": {
    ar:"مرحبا رابط،\n\nعندي مشروع بفكري. هي شوية تفاصيل عنه:\n\n",
    en:"Hi Rabet,\n\nI have a project in mind. Here's a bit about it:\n\n",
    tr:"Merhaba Rabet,\n\nAklımda bir proje var. İşte biraz detay:\n\n",
    fr:"Bonjour Rabet,\n\nJ'ai un projet en tête. Voici quelques détails :\n\n",
    de:"Hallo Rabet,\n\nich habe ein Projekt im Kopf. Hier ein paar Details:\n\n"
  },
  "mail.need.website":  { ar:"موقع إلكتروني", en:"a website", tr:"bir web sitesi", fr:"un site web", de:"eine Website" },
  "mail.need.social":   { ar:"إدارة سوشال ميديا", en:"social media management", tr:"sosyal medya yönetimi", fr:"la gestion des réseaux sociaux", de:"Social-Media-Management" },
  "mail.need.ads":      { ar:"حملات إعلانية", en:"ad campaigns", tr:"reklam kampanyaları", fr:"des campagnes publicitaires", de:"Werbekampagnen" },
  "mail.need.branding": { ar:"هوية بصرية", en:"a brand identity", tr:"marka kimliği", fr:"une identité de marque", de:"eine Markenidentität" }
};
