
(function(){
'use strict';
var DICT={"À propos": ["About", "من نحن"], "Galerie": ["Gallery", "المعرض"], "Services": ["Services", "الخدمات"], "Références": ["References", "مراجعنا"], "Recrutement": ["Careers", "التوظيف"], "Abonnement": ["Subscribe", "الاشتراك"], "Contact": ["Contact", "اتصل بنا"], "Contactez-nous": ["Contact us", "تواصل معنا"], "Menu": ["Menu", "القائمة"], "Maintenance Industrielle & Ingénierie": ["Industrial Maintenance & Engineering", "الصيانة الصناعية والهندسة"], "Spécialisés dans la maintenance industrielle, l'électricité et la mécanique — des solutions techniques complètes adaptées aux besoins des professionnels.": ["Specialized in industrial maintenance, electricity and mechanics — complete technical solutions tailored to the needs of professionals.", "متخصصون في الصيانة الصناعية والكهرباء والميكانيك — حلول تقنية متكاملة تلبي احتياجات المحترفين."], "Demander un devis": ["Request a quote", "اطلب عرض سعر"], "Nos services": ["Our services", "خدماتنا"], "Intervention rapide": ["Fast response", "تدخل سريع"], "Oran, Algérie": ["Oran, Algeria", "وهران، الجزائر"], "Sécurité": ["Safety", "السلامة"], "Avant tout": ["Above all", "أولاً وقبل كل شيء"], "Expertise": ["Expertise", "الخبرة"], "Certifiée": ["Certified", "معتمدة"], "Équipe technique New Vision": ["New Vision technical team", "الفريق التقني لنيو فيجن"], "Qui sommes-nous": ["Who we are", "من نحن"], "À PROPOS DE": ["ABOUT", "نبذة عن"], "Entreprise spécialisée dans la maintenance industrielle, l'électricité et la mécanique,": ["A company specialized in industrial maintenance, electricity and mechanics,", "شركة متخصصة في الصيانة الصناعية والكهرباء والميكانيك،"], "offre des solutions techniques complètes adaptées aux besoins des professionnels.": ["offers complete technical solutions tailored to the needs of professionals.", "تقدّم حلولاً تقنية متكاملة تلبي احتياجات المحترفين."], "Basés à": ["Based in", "مقرّنا في"], ", nous intervenons rapidement sur toute demande, avec une équipe d'experts qualifiés, engagés à garantir la performance et la continuité de vos installations industrielles.": [", we respond quickly to every request, with a team of qualified experts committed to ensuring the performance and continuity of your industrial installations.", "، نتدخل بسرعة لكل طلب بفريق من الخبراء المؤهلين الملتزمين بضمان أداء واستمرارية منشآتكم الصناعية."], "Notre mission : assurer la fiabilité de vos équipements avec": ["Our mission: ensuring the reliability of your equipment with", "مهمتنا: ضمان موثوقية معداتكم مع"], "Expertise. Précision. Performance.": ["Expertise. Precision. Performance.", "الخبرة. الدقة. الأداء."], "Rapide": ["Fast", "سريع"], "Intervention": ["Response", "تدخل"], "Services clés": ["Key services", "خدمات رئيسية"], "Qualité garantie": ["Guaranteed quality", "جودة مضمونة"], "Engagement": ["Commitment", "التزام"], "Intervention rapide sur site": ["Fast on-site response", "تدخل سريع في الموقع"], "Support technique qualifié": ["Qualified technical support", "دعم تقني مؤهل"], "Solutions sur mesure pour chaque client": ["Tailor-made solutions for every client", "حلول مخصصة لكل عميل"], "Respect strict des normes de sécurité": ["Strict compliance with safety standards", "احترام صارم لمعايير السلامة"], "Équipe certifiée et expérimentée": ["Certified and experienced team", "فريق معتمد وذو خبرة"], "Devis transparent et compétitif": ["Transparent and competitive quotes", "عروض أسعار شفافة وتنافسية"], "Nos réalisations": ["Our work", "أعمالنا"], "GALERIE": ["FIELD", "معرض"], "TERRAIN": ["GALLERY", "الميدان"], "Supervision industrielle": ["Industrial supervision", "الإشراف الصناعي"], "Supervision & Contrôle industriel": ["Industrial supervision & control", "الإشراف والتحكم الصناعي"], "Équipe maintenance": ["Maintenance team", "فريق الصيانة"], "Équipe d'intervention terrain": ["Field intervention team", "فريق التدخل الميداني"], "Équipements industriels": ["Industrial equipment", "المعدات الصناعية"], "Équipements & automatisation": ["Equipment & automation", "المعدات والأتمتة"], "Système de détection incendie": ["Fire detection system", "نظام كشف الحريق"], "Étude & installation système incendie": ["Fire system design & installation", "دراسة وتركيب أنظمة الحريق"], "Découvrez-nous": ["Discover us", "اكتشفونا"], "NOTRE": ["OUR", "فيديو"], "VIDÉO": ["VIDEO", "شركتنا"], "Votre navigateur ne supporte pas la lecture vidéo.": ["Your browser does not support video playback.", "متصفحك لا يدعم تشغيل الفيديو."], "Ce que nous faisons": ["What we do", "ما نقدمه"], "NOS": ["OUR", ""], "SERVICES": ["SERVICES", "خدماتنا"], "Maintenance électrique & mécanique": ["Electrical & mechanical maintenance", "الصيانة الكهربائية والميكانيكية"], "Maintenance préventive et corrective des équipements électriques et mécaniques industriels pour assurer votre continuité de production.": ["Preventive and corrective maintenance of industrial electrical and mechanical equipment to ensure your production continuity.", "صيانة وقائية وتصحيحية للمعدات الكهربائية والميكانيكية الصناعية لضمان استمرارية إنتاجكم."], "Installation d'équipements industriels": ["Industrial equipment installation", "تركيب المعدات الصناعية"], "Installation, mise en service et réglage de machines et équipements industriels selon les normes en vigueur.": ["Installation, commissioning and adjustment of industrial machines and equipment according to current standards.", "تركيب وتشغيل وضبط الآلات والمعدات الصناعية وفق المعايير المعمول بها."], "Protection incendie": ["Fire protection", "الحماية من الحريق"], "Installation et maintenance des systèmes de détection et de protection incendie conformes aux normes de sécurité.": ["Installation and maintenance of fire detection and protection systems compliant with safety standards.", "تركيب وصيانة أنظمة كشف الحريق والحماية منه المطابقة لمعايير السلامة."], "Étude et Installation système incendie": ["Fire system design & installation", "دراسة وتركيب نظام الحريق"], "Étude, conception et installation de systèmes de détection et d'alarme incendie (centrales, détecteurs, déclencheurs manuels, sirènes) conformes aux normes de sécurité.": ["Design, engineering and installation of fire detection and alarm systems (control panels, detectors, manual call points, sirens) compliant with safety standards.", "دراسة وتصميم وتركيب أنظمة كشف وإنذار الحريق (لوحات التحكم، الكاشفات، أزرار الإنذار اليدوية، الصفارات) المطابقة لمعايير السلامة."], "Projets électriques – bâtiments neufs": ["Electrical projects – new buildings", "المشاريع الكهربائية – المباني الجديدة"], "Réalisation complète des installations électriques pour bâtiments neufs : tableau, câblage, éclairage, prises et contrôle.": ["Complete electrical installations for new buildings: switchboards, wiring, lighting, sockets and control.", "تنفيذ متكامل للتركيبات الكهربائية للمباني الجديدة: اللوحات والتمديدات والإنارة والمقابس والتحكم."], "Armoires & réseaux électriques": ["Electrical cabinets & networks", "الخزائن والشبكات الكهربائية"], "Installation, câblage et maintenance des armoires électriques et réseaux basse et moyenne tension.": ["Installation, wiring and maintenance of electrical cabinets and low and medium voltage networks.", "تركيب وتمديد وصيانة الخزائن الكهربائية وشبكات الجهد المنخفض والمتوسط."], "Interventions sur cliniques médicales": ["Medical clinic interventions", "التدخلات في العيادات الطبية"], "Maintenance préventive et corrective des installations électriques, CVC, réseaux de fluides médicaux, éclairage technique et équipements hospitaliers, conformément aux normes de sécurité et d'hygiène.": ["Preventive and corrective maintenance of electrical installations, HVAC, medical gas networks, technical lighting and hospital equipment, in compliance with safety and hygiene standards.", "صيانة وقائية وتصحيحية للتركيبات الكهربائية والتكييف وشبكات الغازات الطبية والإنارة التقنية والمعدات الاستشفائية وفق معايير السلامة والنظافة."], "Installation Instrumentation & Automatisme": ["Instrumentation & Automation installation", "تركيب الأجهزة القياسية والأتمتة"], "Installation professionnelle d'instrumentation industrielle (capteurs de niveau, pression, débit, température) et d'automatismes (API Siemens, Schneider, armoires de commande, câblage, mise en service) selon les normes en vigueur.": ["Professional installation of industrial instrumentation (level, pressure, flow and temperature sensors) and automation (Siemens, Schneider PLCs, control cabinets, wiring, commissioning) according to current standards.", "تركيب احترافي للأجهزة القياسية الصناعية (حساسات المستوى والضغط والتدفق والحرارة) والأتمتة (PLC سيمنس وشنايدر، خزائن التحكم، التمديدات، التشغيل) وفق المعايير المعمول بها."], "Offre exclusive – Membres privilégiés": ["Exclusive offer – Priority members", "عرض حصري – للأعضاء المميزين"], "REJOIGNEZ NOTRE": ["JOIN OUR", "انضموا إلى"], "RÉSEAU PARTENAIRE": ["PARTNER NETWORK", "شبكة شركائنا"], "Abonnez-vous pour recevoir en priorité nos offres techniques, nos conseils d'experts en maintenance industrielle et être les premiers informés de nos nouvelles interventions.": ["Subscribe to receive our technical offers and industrial maintenance expert advice first, and be the first to know about our new projects.", "اشتركوا لتصلكم عروضنا التقنية ونصائح خبرائنا في الصيانة الصناعية أولاً، وكونوا أول من يعلم بتدخلاتنا الجديدة."], "Offres prioritaires": ["Priority offers", "عروض ذات أولوية"], "Conseils techniques gratuits": ["Free technical advice", "نصائح تقنية مجانية"], "Intervention express": ["Express response", "تدخل سريع جداً"], "Alertes maintenances": ["Maintenance alerts", "تنبيهات الصيانة"], "Votre nom / entreprise": ["Your name / company", "اسمك / شركتك"], "Votre adresse email *": ["Your email address *", "بريدك الإلكتروني *"], "S'abonner": ["Subscribe", "اشترك"], "Vos données restent confidentielles. Désinscription à tout moment.": ["Your data remains confidential. Unsubscribe at any time.", "بياناتك تبقى سرية. يمكنك إلغاء الاشتراك في أي وقت."], "Pourquoi nous choisir": ["Why choose us", "لماذا نحن"], "ATOUTS": ["STRENGTHS", "مزايانا"], "Réactivité maximale à toute heure. Nous minimisons vos temps d'arrêt pour préserver votre production.": ["Maximum responsiveness at any time. We minimize your downtime to protect your production.", "استجابة قصوى في أي وقت. نقلّل أوقات توقفكم للحفاظ على إنتاجكم."], "Une équipe d'experts qualifiés pour vous accompagner dans chaque situation technique.": ["A team of qualified experts to support you in every technical situation.", "فريق من الخبراء المؤهلين لمرافقتكم في كل وضع تقني."], "Solutions sur mesure": ["Tailor-made solutions", "حلول مخصصة"], "Chaque client est unique. Nous concevons des solutions adaptées à vos contraintes et objectifs.": ["Every client is unique. We design solutions adapted to your constraints and goals.", "كل عميل فريد. نصمم حلولاً تتناسب مع ظروفكم وأهدافكم."], "Respect des normes": ["Standards compliance", "احترام المعايير"], "Toutes nos interventions respectent strictement les normes de sécurité nationales et internationales.": ["All our interventions strictly comply with national and international safety standards.", "جميع تدخلاتنا تحترم بصرامة معايير السلامة الوطنية والدولية."], "Rejoignez l'équipe": ["Join the team", "انضم إلى الفريق"], "OFFRES D'": ["JOB ", "عروض "], "EMPLOI": ["OFFERS", "العمل"], "Vous êtes passionné par la technique et souhaitez intégrer une équipe dynamique ? NV TECH SOLUTIONS recrute des talents motivés dans les domaines de la maintenance industrielle et de l'ingénierie à Oran.": ["Passionate about technology and want to join a dynamic team? NV TECH SOLUTIONS is hiring motivated talent in industrial maintenance and engineering in Oran.", "هل أنت شغوف بالتقنية وترغب في الانضمام إلى فريق ديناميكي؟ تقوم NV TECH SOLUTIONS بتوظيف كفاءات متحمسة في مجالات الصيانة الصناعية والهندسة بوهران."], "Temps plein": ["Full time", "دوام كامل"], "Technicien en Maintenance Industrielle": ["Industrial Maintenance Technician", "تقني صيانة صناعية"], "BAC+2 minimum": ["Minimum 2-year degree (BAC+2)", "بكالوريا + سنتان على الأقل"], "Expérience 2+ ans": ["2+ years of experience", "خبرة سنتين فأكثر"], "Assurer la maintenance préventive et corrective des équipements industriels. Diagnostiquer les pannes et proposer des solutions adaptées pour garantir la continuité de production.": ["Carry out preventive and corrective maintenance of industrial equipment. Diagnose faults and propose suitable solutions to ensure production continuity.", "ضمان الصيانة الوقائية والتصحيحية للمعدات الصناعية. تشخيص الأعطال واقتراح الحلول المناسبة لضمان استمرارية الإنتاج."], "Électromécanique": ["Electromechanics", "الكهروميكانيك"], "Hydraulique": ["Hydraulics", "الهيدروليك"], "Pneumatique": ["Pneumatics", "الهوائيات"], "Lecture de plans": ["Plan reading", "قراءة المخططات"], "Postuler maintenant": ["Apply now", "قدّم طلبك الآن"], "Électricien Industriel": ["Industrial Electrician", "كهربائي صناعي"], "Expérience 1+ ans": ["1+ year of experience", "خبرة سنة فأكثر"], "Installation, câblage et dépannage des installations électriques industrielles (BT/HT). Intervention sur tableaux électriques, moteurs, variateurs de vitesse et automatismes.": ["Installation, wiring and troubleshooting of industrial electrical installations (LV/HV). Work on electrical panels, motors, variable speed drives and automation.", "تركيب وتمديد وإصلاح التركيبات الكهربائية الصناعية (جهد منخفض/عالٍ). التدخل على اللوحات الكهربائية والمحركات ومتحكمات السرعة والأتمتة."], "Électricité BT/HT": ["LV/HV electricity", "كهرباء الجهد المنخفض/العالي"], "Automatisme": ["Automation", "الأتمتة"], "Schémas électriques": ["Electrical diagrams", "المخططات الكهربائية"], "Stage / Alternance": ["Internship / Work-study", "تربص / تكوين بالتناوب"], "Ingénieur Technico-Commercial": ["Technical Sales Engineer", "مهندس تقني تجاري"], "BAC+3 minimum": ["Minimum 3-year degree (BAC+3)", "بكالوريا + 3 سنوات على الأقل"], "Débutant accepté": ["Beginners welcome", "المبتدئون مقبولون"], "Développer le portefeuille clients, établir des devis techniques, assurer le suivi commercial et technique des projets. Excellent sens du relationnel requis.": ["Develop the client portfolio, prepare technical quotes, ensure commercial and technical follow-up of projects. Excellent interpersonal skills required.", "تطوير محفظة العملاء، إعداد عروض الأسعار التقنية، ومتابعة المشاريع تجارياً وتقنياً. مهارات تواصل ممتازة مطلوبة."], "Commercial": ["Sales", "تجاري"], "Technique industrielle": ["Industrial engineering", "التقنيات الصناعية"], "Gestion de projets": ["Project management", "إدارة المشاريع"], "Communication": ["Communication", "التواصل"], "Candidature Spontanée": ["Spontaneous Application", "طلب توظيف عفوي"], "Vous ne trouvez pas de poste correspondant ? Envoyez-nous votre candidature spontanée. Nous étudions chaque profil avec attention.": ["Can't find a matching position? Send us your spontaneous application. We carefully review every profile.", "لم تجد وظيفة مناسبة؟ أرسل لنا طلبك العفوي. ندرس كل ملف بعناية."], "Envoyer ma candidature": ["Send my application", "إرسال طلبي"], "Postuler": ["Apply", "التقديم"], "Prénom & Nom *": ["Full name *", "الاسم واللقب *"], "Votre nom complet": ["Your full name", "اسمك الكامل"], "Téléphone *": ["Phone *", "الهاتف *"], "Email *": ["Email *", "البريد الإلكتروني *"], "votre@email.com": ["your@email.com", "your@email.com"], "Niveau d'études": ["Education level", "المستوى الدراسي"], "Sélectionner...": ["Select...", "اختر..."], "BAC": ["High school diploma (BAC)", "بكالوريا"], "BAC+2 / BTS": ["BAC+2 / Associate degree", "بكالوريا+2 / تقني سامي"], "BAC+3 / Licence": ["BAC+3 / Bachelor's", "بكالوريا+3 / ليسانس"], "BAC+5 / Master / Ingénieur": ["BAC+5 / Master's / Engineer", "بكالوريا+5 / ماستر / مهندس"], "Doctorat": ["Doctorate", "دكتوراه"], "Années d'expérience": ["Years of experience", "سنوات الخبرة"], "Débutant (0 an)": ["Beginner (0 years)", "مبتدئ (بدون خبرة)"], "1–2 ans": ["1–2 years", "1–2 سنة"], "3–5 ans": ["3–5 years", "3–5 سنوات"], "Plus de 5 ans": ["More than 5 years", "أكثر من 5 سنوات"], "Message / Motivations": ["Message / Motivation", "الرسالة / الدوافع"], "Parlez-nous de vous, de vos compétences et de vos motivations...": ["Tell us about yourself, your skills and your motivation...", "حدّثنا عن نفسك ومهاراتك ودوافعك..."], "Nous rejoindre": ["Reach us", "تواصل معنا"], "CONTACTEZ": ["CONTACT ", ""], "-NOUS": ["US", "تواصل معنا"], "Coordonnées": ["Contact details", "معلومات الاتصال"], "Adresse": ["Address", "العنوان"], "Email": ["Email", "البريد الإلكتروني"], "Téléphone": ["Phone", "الهاتف"], "Localisation – Oran, Algérie": ["Location – Oran, Algeria", "الموقع – وهران، الجزائر"], "Voir sur Google Maps": ["View on Google Maps", "عرض على خرائط جوجل"], "EXPERTISE.": ["EXPERTISE.", "الخبرة."], "PRÉCISION.": ["PRECISION.", "الدقة."], "PERFORMANCE.": ["PERFORMANCE.", "الأداء."], "Notre expertise, votre performance.": ["Our expertise, your performance.", "خبرتنا، أداؤكم."], "Nom complet *": ["Full name *", "الاسم الكامل *"], "Votre nom": ["Your name", "اسمك"], "Service concerné": ["Service needed", "الخدمة المطلوبة"], "-- Sélectionnez un service --": ["-- Select a service --", "-- اختر خدمة --"], "Autre": ["Other", "أخرى"], "Message *": ["Message *", "الرسالة *"], "Décrivez votre besoin ou demande...": ["Describe your need or request...", "صف احتياجك أو طلبك..."], "Envoyer le message": ["Send message", "إرسال الرسالة"], "WhatsApp": ["WhatsApp", "واتساب"], "Assistant virtuel": ["Virtual assistant", "المساعد الافتراضي"], "Assistant NV Tech": ["NV Tech Assistant", "مساعد NV Tech"], "En ligne — Répond instantanément": ["Online — Replies instantly", "متصل — يجيب فوراً"], "Localisation": ["Location", "الموقع"], "Devis": ["Quote", "عرض سعر"], "Horaires": ["Hours", "الدوام"], "Écrivez votre message...": ["Type your message...", "اكتب رسالتك..."], "Ils nous font confiance": ["They trust us", "يثقون بنا"], "RÉFÉRENCES": ["REFERENCES", "مراجعنا"], "Sécurité avant tout": ["Safety above all", "السلامة أولاً"], "Performance durable": ["Lasting performance", "أداء مستدام"], "© 2025 NV TECH SOLUTIONS – Oran, Algérie": ["© 2025 NV TECH SOLUTIONS – Oran, Algeria", "© 2025 NV TECH SOLUTIONS – وهران، الجزائر"], "Veuillez remplir les champs obligatoires.": ["Please fill in the required fields.", "يرجى ملء الحقول الإلزامية."], "Envoi en cours...": ["Sending...", "جارٍ الإرسال..."], "Message envoyé avec succès !": ["Message sent successfully!", "تم إرسال الرسالة بنجاح!"], "Erreur. Contactez-nous par téléphone.": ["Error. Please contact us by phone.", "حدث خطأ. يرجى الاتصال بنا هاتفياً."], "Veuillez entrer votre email.": ["Please enter your email.", "يرجى إدخال بريدك الإلكتروني."], "Abonnement confirmé ! Merci de rejoindre notre réseau.": ["Subscription confirmed! Thank you for joining our network.", "تم تأكيد الاشتراك! شكراً لانضمامكم إلى شبكتنا."], "Abonné": ["Subscribed", "مشترك"], "Erreur. Réessayez plus tard.": ["Error. Please try again later.", "حدث خطأ. حاول مجدداً لاحقاً."], "Veuillez remplir au moins votre nom et email.": ["Please fill in at least your name and email.", "يرجى ملء الاسم والبريد الإلكتروني على الأقل."], "Candidature envoyée avec succès ! Nous vous contacterons bientôt.": ["Application sent successfully! We will contact you soon.", "تم إرسال طلبك بنجاح! سنتواصل معك قريباً."], "Envoyée !": ["Sent!", "تم الإرسال!"], "Erreur lors de l'envoi. Veuillez réessayer.": ["Error while sending. Please try again.", "حدث خطأ أثناء الإرسال. يرجى المحاولة مجدداً."], "Instrumentation & Automatisme": ["Instrumentation & Automation", "الأجهزة القياسية والأتمتة"], "INSTRUMENTATION": ["INSTRUMENTATION", "الأجهزة القياسية"], "& AUTOMATISME": ["& AUTOMATION", "والأتمتة"], "Nous installons et mettons en service les chaînes de mesure et de commande de vos process : capteurs, transmetteurs, automates programmables, armoires de commande et réseaux de câblage, avec les meilleures marques du marché.": ["We install and commission the measurement and control chains of your processes: sensors, transmitters, programmable controllers, control cabinets and cabling networks, using the best brands on the market.", "نقوم بتركيب وتشغيل سلاسل القياس والتحكم في عملياتكم: الحساسات والمرسلات والمتحكمات القابلة للبرمجة وخزائن التحكم وشبكات التمديد، باستخدام أفضل العلامات في السوق."], "Automates programmables (API)": ["Programmable controllers (PLC)", "المتحكمات القابلة للبرمجة (PLC)"], "Siemens · TIA Portal & supervision": ["Siemens · TIA Portal & supervision", "سيمنس · TIA Portal والإشراف"], "Armoires de commande": ["Control cabinets", "خزائن التحكم"], "Câblage & mise en service": ["Wiring & commissioning", "التمديد والتشغيل"], "Capteurs de niveau": ["Level sensors", "حساسات المستوى"], "Radar, vibration, ultrasons": ["Radar, vibration, ultrasonic", "رادار، اهتزاز، موجات فوق صوتية"], "Débit, pression & analyse": ["Flow, pressure & analysis", "التدفق والضغط والتحليل"], "Débitmètres, transmetteurs, pH": ["Flowmeters, transmitters, pH", "مقاييس التدفق، المرسلات، pH"], "Capteurs & instrumentation inox": ["Stainless-steel sensors & instruments", "حساسات وأجهزة من الفولاذ المقاوم للصدأ"], "Température, pression, débit, proximité": ["Temperature, pressure, flow, proximity", "الحرارة، الضغط، التدفق، القرب"], "Mesure de niveau radar": ["Radar level measurement", "قياس المستوى بالرادار"], "Liquides & solides": ["Liquids & solids", "السوائل والمواد الصلبة"], "Transmetteurs de pression": ["Pressure transmitters", "مرسلات الضغط"], "Applications industrielles & agroalimentaires": ["Industrial & food applications", "تطبيقات صناعية وغذائية"], "Tirage de câbles sur site": ["On-site cable pulling", "سحب الكابلات في الموقع"], "Équipe NV TECH SOLUTIONS": ["NV TECH SOLUTIONS team", "فريق NV TECH SOLUTIONS"], "Mesure de niveau": ["Level measurement", "قياس المستوى"], "Mesure de pression": ["Pressure measurement", "قياس الضغط"], "Mesure de débit": ["Flow measurement", "قياس التدفق"], "Température & analyse": ["Temperature & analysis", "الحرارة والتحليل"], "Automates Siemens & Schneider": ["Siemens & Schneider PLCs", "متحكمات سيمنس وشنايدر"], "Armoires & câblage": ["Cabinets & wiring", "الخزائن والتمديد"], "Mise en service": ["Commissioning", "التشغيل"], "Automates programmables Siemens": ["Siemens programmable controllers", "متحكمات سيمنس القابلة للبرمجة"], "Instrumentation": ["Instrumentation", "الأجهزة القياسية"]};
var TITLE=["NV TECH SOLUTIONS – Industrial Maintenance & Engineering | Oran Algeria", "NV TECH SOLUTIONS – الصيانة الصناعية والهندسة | وهران الجزائر"], META=["NV TECH SOLUTIONS – Experts in industrial maintenance, industrial electricity, instrumentation and automation in Oran, Algeria. Fast response, ATEX zones, Siemens & Schneider automation.", "NV TECH SOLUTIONS – خبراء في الصيانة الصناعية والكهرباء الصناعية والأجهزة القياسية والأتمتة بوهران، الجزائر. تدخل سريع، مناطق ATEX، أتمتة سيمنس وشنايدر."], TICK={"en": "Contact us on WhatsApp", "ar": "تواصل معنا عبر واتساب", "fr": "Contactez-nous sur WhatsApp"};
var LI={fr:-1,en:0,ar:1};
var lang='fr';
var recs=new WeakMap();
function norm(s){return s.replace(/\s+/g,' ').trim();}
function pick(key){var e=DICT[key];return e?e:null;}

function trText(n){
  var p=n.parentNode; if(!p) return;
  var tag=p.nodeName; if(tag==='SCRIPT'||tag==='STYLE'||tag==='NOSCRIPT') return;
  if(p.closest && (p.closest('#chatMessages')||p.closest('.wa-ticker-text'))) return;
  var r=recs.get(n), fr=(r && n.nodeValue===r.w)? r.fr : n.nodeValue;
  var out=fr;
  if(lang!=='fr'){
    var e=pick(norm(fr));
    if(e){var m=fr.match(/^(\s*)[\s\S]*?(\s*)$/); out=m[1]+e[LI[lang]]+m[2];}
  }
  recs.set(n,{fr:fr,w:out});
  if(n.nodeValue!==out) n.nodeValue=out;
}
function walk(root){
  if(root.nodeType===3){trText(root);return;}
  if(root.nodeType!==1) return;
  var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null),n,list=[];
  while((n=w.nextNode())) list.push(n);
  list.forEach(trText);
}
var ATTRS=['placeholder','alt','title','aria-label'];
function trAttrs(root){
  var els=(root||document).querySelectorAll('[placeholder],[alt],[title],[aria-label]');
  els.forEach(function(el){
    ATTRS.forEach(function(a){
      if(!el.hasAttribute(a)) return;
      var k='data-fr-'+a;
      if(!el.hasAttribute(k)) el.setAttribute(k,el.getAttribute(a));
      var fr=el.getAttribute(k), e=lang==='fr'?null:pick(norm(fr));
      el.setAttribute(a,e?e[LI[lang]]:fr);
    });
  });
}
// option values stay in French (clean data in emails)
document.querySelectorAll('option').forEach(function(o){ if(!o.hasAttribute('value')) o.setAttribute('value',norm(o.textContent)); });

var mo=new MutationObserver(function(ms){
  ms.forEach(function(m){
    if(m.type==='characterData'){trText(m.target);}
    else m.addedNodes.forEach(function(n){walk(n);});
  });
});

function setTicker(){
  var t=document.querySelector('.wa-ticker-text'); if(!t) return;
  var order=lang==='ar'?['ar','fr','en']:lang==='en'?['en','fr','ar']:['fr','ar','en'];
  var sep=' &nbsp;&nbsp;|&nbsp;&nbsp; ';
  var one=order.map(function(k){return TICK[k];}).join(sep);
  t.innerHTML=one+sep+one+sep;
}

function setLang(l,save){
  if(!LI.hasOwnProperty(l)) l='fr';
  lang=l;
  var h=document.documentElement;
  h.setAttribute('lang',l); h.setAttribute('dir',l==='ar'?'rtl':'ltr');
  mo.disconnect();
  walk(document.body); trAttrs(document);
  mo.observe(document.body,{childList:true,subtree:true,characterData:true});
  document.title=l==='fr'?document.title:(l==='en'?TITLE[0]:TITLE[1]);
  if(l==='fr'&&window.__frTitle) document.title=window.__frTitle;
  var md=document.querySelector('meta[name="description"]');
  if(md){ if(!md.hasAttribute('data-fr')) md.setAttribute('data-fr',md.getAttribute('content')); md.setAttribute('content',l==='fr'?md.getAttribute('data-fr'):(l==='en'?META[0]:META[1])); }
  document.querySelectorAll('.lang-switch button').forEach(function(b){b.classList.toggle('active',b.dataset.lang===l);});
  setTicker();
  rebuildQuick();
  if(save){try{localStorage.setItem('nv_lang',l);}catch(e){}}
}
window.__frTitle=document.title;
document.querySelectorAll('.lang-switch button').forEach(function(b){
  b.addEventListener('click',function(){setLang(b.dataset.lang,true);});
});

/* ================= CHATBOT ================= */
var QUICK=[
 ['Quels sont vos services ?','What are your services?','ما هي خدماتكم؟'],
 ['Comment vous contacter ?','How can I contact you?','كيف يمكنني التواصل معكم؟'],
 ['Où êtes-vous situés ?','Where are you located?','أين يقع مقركم؟'],
 ['Demander un devis','Request a quote','طلب عرض سعر'],
 ['Horaires de travail ?','What are your working hours?','ما هي ساعات العمل؟']
];
var PH='<a href="https://wa.me/213658724256" target="_blank" style="color:var(--accent)" dir="ltr">+213 658 724 256</a> / <a href="tel:+213558304413" style="color:var(--accent)" dir="ltr">+213 558 304 413</a>';
var WA='<a href="https://wa.me/213658724256?text=URGENCE%20-%20" target="_blank" style="color:#25D366;font-weight:700" dir="ltr">+213 658 724 256</a>';
var REP={
 en:[
  '<strong>Our services include:</strong><br>• Preventive & corrective industrial maintenance<br>• Installation of instrumentation (sensors) & automation<br>• PLC programming (Siemens, Schneider)<br>• Variable speed drives (VFD)<br>• Fire detection systems<br>• Electrical cabinets & networks<br>• Custom studies & projects<br><br>Need a specific service? Contact us!',
  '<strong>Contact us:</strong><br>• WhatsApp / Phone: '+PH+'<br>• Through the contact form on our website<br><br>We reply quickly!',
  '<strong>Our location:</strong><br>NV TECH SOLUTIONS is based in <strong>Oran, Algeria</strong>.<br><br>We work across the western region and travel throughout Algeria as needed.',
  '<strong>Request a quote:</strong><br>To get a personalized quote:<br>1. Fill in the contact form<br>2. Or contact us on WhatsApp<br>3. Describe your need and we will reply quickly.<br><br><a href="#contact" style="color:var(--accent)" onclick="toggleChatbot()">→ Go to the form</a>',
  '<strong>Our hours:</strong><br>• Sunday – Thursday: 8:00 – 17:00<br>• Industrial emergencies: contact us on WhatsApp<br><br>Feel free to write to us at any time!',
  '<strong>Industrial emergency?</strong><br>Contact us immediately on WhatsApp:<br>'+WA+'<br><br>Our team responds quickly to minimize your downtime!',
  '<strong>Our work:</strong><br>We have completed projects in these sectors:<br>• Food industry<br>• Water & treatment<br>• Construction & heavy industry<br>• Energy & utilities<br><br>Check our gallery to see our work!',
  '<strong>Hello! Welcome to NV TECH SOLUTIONS.</strong><br><br>I am your virtual assistant. I can help with:<br>• Our services & offers<br>• How to contact us<br>• Quote requests<br>• Location & hours<br><br>How can I help you?'
 ],
 ar:[
  '<strong>تشمل خدماتنا:</strong><br>• الصيانة الصناعية الوقائية والتصحيحية<br>• تركيب الأجهزة القياسية (الحساسات) والأتمتة<br>• برمجة PLC (سيمنس، شنايدر)<br>• متحكمات السرعة (VFD)<br>• أنظمة كشف الحريق<br>• الخزائن والشبكات الكهربائية<br>• دراسات ومشاريع حسب الطلب<br><br>تحتاج خدمة محددة؟ تواصل معنا!',
  '<strong>تواصل معنا:</strong><br>• واتساب / هاتف: '+PH+'<br>• عبر نموذج الاتصال في موقعنا<br><br>نرد بسرعة!',
  '<strong>موقعنا:</strong><br>يقع مقر NV TECH SOLUTIONS في <strong>وهران، الجزائر</strong>.<br><br>نعمل في كامل الغرب الجزائري وننتقل إلى كافة ولايات الوطن حسب الحاجة.',
  '<strong>طلب عرض سعر:</strong><br>للحصول على عرض سعر مخصص:<br>1. املأ نموذج الاتصال<br>2. أو تواصل معنا عبر واتساب<br>3. صف احتياجك وسنرد عليك بسرعة.<br><br><a href="#contact" style="color:var(--accent)" onclick="toggleChatbot()">← الذهاب إلى النموذج</a>',
  '<strong>ساعات العمل:</strong><br>• من الأحد إلى الخميس: 8:00 – 17:00<br>• الحالات الصناعية الطارئة: تواصل معنا عبر واتساب<br><br>لا تتردد في مراسلتنا في أي وقت!',
  '<strong>حالة طارئة صناعية؟</strong><br>تواصل معنا فوراً عبر واتساب:<br>'+WA+'<br><br>يتدخل فريقنا بسرعة لتقليل وقت التوقف!',
  '<strong>أعمالنا:</strong><br>أنجزنا مشاريع في القطاعات التالية:<br>• الصناعات الغذائية<br>• المياه ومعالجتها<br>• البناء والصناعات الثقيلة<br>• الطاقة والمرافق<br><br>تصفح معرضنا لمشاهدة أعمالنا!',
  '<strong>مرحباً! أهلاً بك في NV TECH SOLUTIONS.</strong><br><br>أنا مساعدك الافتراضي. يمكنني إفادتك حول:<br>• خدماتنا وعروضنا<br>• طرق التواصل معنا<br>• طلب عرض سعر<br>• الموقع وساعات العمل<br><br>كيف يمكنني مساعدتك؟'
 ]
};
var KEYS=[
 ['خدم','صيانه','اتمته','حساس','what do you do','offer','sensor','automation','instrument'],
 ['اتصال','هاتف','رقم','تواصل','واتساب','call','phone','number','reach'],
 ['موقع','عنوان','اين','وين','مكان','وهران','where','address','located','city'],
 ['سعر','اسعار','تسعير','تكلف','ميزاني','quote','price','cost','pricing','estimate'],
 ['دوام','ساعات','مواعيد','اوقات','hours','schedule','opening','open'],
 ['طارئ','عطل','عاجل','استعجال','توقف','emergency','urgent','breakdown','failure'],
 ['مشاريع','مشروع','انجاز','اعمال','projects','portfolio','references','realisations'],
 ['اهلا','مرحبا','السلام','صباح','مساء','hello','hey','bonsoir']
];
chatbotFAQ.forEach(function(f,i){ if(KEYS[i]) KEYS[i].forEach(function(k){f.keys.push(k);}); });
var FR_REP=chatbotFAQ.map(function(f){return f.reply;});
function nz(s){return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه');}
function reply(i){return lang==='fr'?FR_REP[i]:REP[lang][i];}
var FALL={
 fr:null,
 en:' I didn\'t quite understand your question.<br>You can use the quick buttons below, or contact us directly on WhatsApp: ',
 ar:' لم أفهم سؤالك جيداً.<br>يمكنك استخدام الأزرار السريعة أدناه، أو التواصل معنا مباشرة عبر واتساب: '
};
window.getBotReply=function(text){
  var t=nz(text);
  for(var i=0;i<chatbotFAQ.length;i++){
    if(chatbotFAQ[i].keys.some(function(k){return t.indexOf(nz(k))!==-1;})) return reply(i);
  }
  if(lang==='fr') return ' Je n\'ai pas bien compris votre question.<br>Vous pouvez utiliser les boutons rapides ci-dessous, ou nous contacter directement sur WhatsApp : '+WA;
  return FALL[lang]+WA;
};
var GREET={
 fr:' Bonjour ! Je suis l\'assistant de <strong>NV TECH SOLUTIONS</strong>.<br>Comment puis-je vous aider aujourd\'hui ?',
 en:' Hello! I am the <strong>NV TECH SOLUTIONS</strong> assistant.<br>How can I help you today?',
 ar:' مرحباً! أنا مساعد <strong>NV TECH SOLUTIONS</strong>.<br>كيف يمكنني مساعدتك اليوم؟'
};
window.toggleChatbot=function(){
  chatOpen=!chatOpen;
  var win=document.getElementById('chatbotWindow');
  if(chatOpen){
    win.classList.add('open');
    if(!document.getElementById('chatMessages').children.length) setTimeout(function(){addBotMsg(GREET[lang]);},300);
  } else win.classList.remove('open');
};
window.askQuick=function(q){
  if(!chatOpen){chatOpen=true;document.getElementById('chatbotWindow').classList.add('open');}
  var idx=0; QUICK.forEach(function(x,i){ if(x[0]===q) idx=i; });
  addUserMsg(QUICK[idx][lang==='fr'?0:(lang==='en'?1:2)]);
  addBotMsg(reply(idx),200);
};
function rebuildQuick(){} // quick-button labels are translated through the DICT

setLang((function(){
  var p=null; try{p=new URLSearchParams(location.search).get('lang');}catch(e){}
  var s=null; try{s=localStorage.getItem('nv_lang');}catch(e){}
  return p||s||'fr';
})(),false);
})();

