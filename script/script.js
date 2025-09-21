 // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Mobile menu toggle (simple version)
        function toggleMobileMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        }

        // Add scroll effect to navigation
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        });

        // Simple cart functionality
        let cartCount = 0;
        document.querySelectorAll('.btn-discover').forEach(button => {
            button.addEventListener('click', function() {
                cartCount++;
                alert('Programme ajouté au panier !');
                // Here you would typically update the cart icon
            });
        });

        // Translations object
const translations = {
    fr: {
        // Navigation
        'nav-home': 'Accueil',
        'nav-programs': 'Programmes',
        'nav-about': 'À propos',
        'nav-story': 'Mon histoire',
        'nav-testimonials': 'Témoignages',
        'nav-contact': 'Contact',

        // Hero section
        'hero-title': 'Transform Your Body,<br><span class="highlight">Elevate Your Mind</span>',
        'hero-subtitle': 'Découvrez mes programmes personnalisés conçus pour vous accompagner dans votre transformation physique et mentale.',
        'hero-discover': 'Découvrir les programmes →',
        'hero-learn-more': 'En savoir plus',

        // Programs section
        'programs-title': 'Mes <span class="highlight">Programmes</span>',
        'program-beginner': 'Programme Débutant',
        'program-beginner-desc': 'Idéal pour commencer votre transformation en douceur',
        'program-glutes': 'Programme Fessiers',
        'program-glutes-desc': 'Sculpter et tonifier vos fessiers efficacement',
        'program-complete': 'Programme Complet',
        'program-complete-desc': 'Transformation complète corps et esprit',
        'program-nutrition': 'Nutrition',
        'program-discover': 'Découvrir',

        // About section
        'about-title': 'Salut, je suis <span class="highlight">Ilona</span>',
        'about-text1': 'Passionnée de fitness depuis plus de 3 ans, j\'ai transformé ma passion en mission : vous accompagner dans votre propre transformation.',
        'about-text2': 'Mon approche combine entraînement personnalisé, nutrition équilibrée et bien-être mental pour des résultats durables et épanouissants.',
        'about-text3': 'Chaque programme que je crée est pensé pour vous faire progresser à votre rythme, en respectant votre corps et vos objectifs personnels.',

        // Story page
        'story-title': 'Mon parcours vers une vie plus <span class="highlight">épanouie</span>',
        'story-subtitle': 'Découvrez comment j\'ai transformé ma passion pour le fitness en mission de vie',
        'timeline-title': 'Mon <span class="highlight">parcours</span>',
        'timeline-2020-title': 'Le déclic',
        'timeline-2020-text': 'Après des années de sédentarité et de mal-être, j\'ai décidé de reprendre ma vie en main. Mon premier cours de fitness a été une révélation : j\'ai découvert que l\'exercice pouvait transformer non seulement mon corps, mais aussi mon état d\'esprit.',
        'timeline-2021-title': 'Formation et passion',
        'timeline-2021-text': 'J\'ai commencé ma formation de coach sportif tout en continuant ma propre transformation. Chaque jour, j\'apprenais quelque chose de nouveau sur la nutrition, l\'entraînement et l\'importance de l\'équilibre mental.',
        'timeline-2022-title': 'Mes premiers clients',
        'timeline-2022-text': 'J\'ai commencé à accompagner mes premières clientes. Voir leurs transformations, leur confiance retrouvée, leur joie de vivre... C\'est à ce moment que j\'ai su que j\'avais trouvé ma vocation.',
        'timeline-2023-title': 'Développement des programmes',
        'timeline-2023-text': 'Fort de mon expérience, j\'ai créé mes premiers programmes structurés. Chaque programme reflète ma philosophie : allier plaisir, efficacité et bienveillance pour des résultats durables.',
        'timeline-2024-title': 'FIT-ILO naît',
        'timeline-2024-text': 'Lancement officiel de FIT-ILO avec une approche holistique combinant fitness, nutrition et bien-être mental. Plus de 50 femmes m\'ont déjà fait confiance dans leur transformation.',

        // Philosophy
        'philosophy-title': 'Ma <span class="highlight">philosophie</span>',
        'philosophy-text1': 'Je crois profondément que chaque femme mérite de se sentir forte, confiante et épanouie dans son corps. Mon approche ne se limite pas à l\'aspect physique : je considère que la transformation véritable implique le corps, l\'esprit et l\'âme.',
        'pillar1-title': 'Force physique',
        'pillar1-text': 'Développer sa force pour gagner en confiance',
        'pillar2-title': 'Équilibre mental',
        'pillar2-text': 'Cultiver un mindset positif et résilient',
        'pillar3-title': 'Bien-être global',
        'pillar3-text': 'Créer une harmonie entre tous les aspects de la vie',
        'quote-text': 'La transformation ne commence pas dans la salle de sport, elle commence dans votre esprit. Mon rôle est de vous accompagner à chaque étape de ce voyage extraordinaire.',

        // Certifications
        'certifications-title': 'Mes <span class="highlight">certifications</span>',
        'cert1-title': 'Coach Sportif Certifiée',
        'cert1-text': 'Formation complète en sciences du sport et physiologie',
        'cert2-title': 'Nutrition Sportive',
        'cert2-text': 'Spécialisation en nutrition adaptée à l\'entraînement',
        'cert3-title': 'Bien-être Mental',
        'cert3-text': 'Formation en coaching mental et gestion du stress',

        // Testimonials page
        'testimonials-title': 'Elles ont transformé leur <span class="highlight">vie</span>',
        'testimonials-subtitle': 'Découvrez les histoires inspirantes de femmes qui ont choisi de prendre leur vie en main',
        'stat-clients': 'Clientes transformées',
        'stat-satisfaction': 'Taux de satisfaction',
        'stat-rating': 'Note moyenne',
        'featured-title': 'Témoignages <span class="highlight">vedettes</span>',
        'result-weight': 'Perte de poids',
        'result-strength': 'Force gagnée',
        'video-title': 'Témoignages <span class="highlight">vidéo</span>',
        'video-emma': 'Découvrez comment Emma a retrouvé confiance en elle',
        'video-clara': 'Les résultats spectaculaires de Clara en 8 semaines',
        'all-testimonials-title': 'Tous les <span class="highlight">témoignages</span>',
        'success-title': 'Nos <span class="highlight">résultats</span>',
        'success-weight': 'Kilos perdus au total',
        'success-clients': 'Femmes transformées',
        'success-goals': 'Objectifs atteints',
        'success-confidence': 'Confiance retrouvée',

        // Testimonials content
        'testimonial-marie': 'Ilona a littéralement changé ma vie. En 6 mois, j\'ai non seulement transformé mon corps mais aussi ma confiance en moi. Ses programmes sont parfaitement adaptés et son accompagnement est exceptionnel. Je me sens plus forte que jamais !',
        'testimonial-sophie': 'Le programme fessiers d\'Ilona est incroyable ! En 8 semaines, j\'ai vu des résultats que je n\'espérais plus. Ses conseils nutrition sont un plus énorme. Je recommande à 200% !',
        'testimonial-laura': 'Parfait pour reprendre le sport en douceur. Ilona est à l\'écoute et s\'adapte à nos contraintes. Grâce à elle, le sport fait maintenant partie de ma routine quotidienne !',
        'testimonial-amelie': 'Programme débutant parfait ! Ilona explique tout très clairement et est toujours disponible pour répondre aux questions. Je me sens plus en forme que jamais.',
        'testimonial-justine': 'Les résultats sont au rendez-vous ! En 3 mois, j\'ai complètement transformé ma silhouette. Le suivi d\'Ilona est exceptionnel.',
        'testimonial-camille': 'Approche holistique fantastique ! Ce n\'est pas qu\'un programme fitness, c\'est un vrai accompagnement vers une vie plus équilibrée.',
        'testimonial-nina': 'Grâce à Ilona, j\'ai appris à aimer faire du sport. Ses programmes sont variés et jamais ennuyeux. Une coach formidable !',
        'testimonial-valerie': 'Après 2 grossesses, je pensais ne jamais retrouver ma forme. Ilona m\'a prouvé le contraire ! Merci pour ce parcours incroyable.',
        'testimonial-estelle': 'Programme nutrition au top ! J\'ai enfin compris comment bien manger sans me priver. Les résultats parlent d\'eux-mêmes.',

        // Call to action
        'cta-title': 'Prête à commencer votre propre transformation ?',
        'cta-text': 'Rejoignez les femmes qui ont déjà transformé leur vie avec mes programmes',
        'cta-programs': 'Découvrir mes programmes',
        'cta-testimonials': 'Lire les témoignages',
        'cta-join-title': 'Rejoignez nos success stories',
        'cta-join-text': 'Votre transformation commence aujourd\'hui. Choisissez le programme qui vous correspond.',
        'cta-contact': 'Me contacter',

        // Footer
        'footer-description': 'Transformez votre corps et votre esprit avec des programmes personnalisés conçus pour des résultats durables.',
        'footer-nav': 'Navigation',
        'footer-programs': 'Programmes',
        'footer-contact': 'Contact',
        'footer-rights': '© 2025 FIT-ILO. Tous droits réservés.',
        'footer-legal': 'Mentions légales',
        'footer-privacy': 'Confidentialité',
        'footer-terms': 'CGV'
    },

    nl: {
        // Navigation
        'nav-home': 'Home',
        'nav-programs': 'Programma\'s',
        'nav-about': 'Over mij',
        'nav-story': 'Mijn verhaal',
        'nav-testimonials': 'Getuigenissen',
        'nav-contact': 'Contact',

        // Hero section
        'hero-title': 'Transformeer je lichaam,<br><span class="highlight">Verhef je geest</span>',
        'hero-subtitle': 'Ontdek mijn gepersonaliseerde programma\'s ontworpen om je te begeleiden in je fysieke en mentale transformatie.',
        'hero-discover': 'Ontdek de programma\'s →',
        'hero-learn-more': 'Meer weten',

        // Programs section
        'programs-title': 'Mijn <span class="highlight">Programma\'s</span>',
        'program-beginner': 'Beginners Programma',
        'program-beginner-desc': 'Ideaal om zachtjes te beginnen met je transformatie',
        'program-glutes': 'Billen Programma',
        'program-glutes-desc': 'Vorm en versterk je billen effectief',
        'program-complete': 'Compleet Programma',
        'program-complete-desc': 'Volledige lichaam en geest transformatie',
        'program-nutrition': 'Voeding',
        'program-discover': 'Ontdekken',

        // About section
        'about-title': 'Hallo, ik ben <span class="highlight">Ilona</span>',
        'about-text1': 'Al meer dan 3 jaar gepassioneerd door fitness, heb ik mijn passie omgezet in een missie: jou begeleiden in je eigen transformatie.',
        'about-text2': 'Mijn aanpak combineert gepersonaliseerde training, uitgebalanceerde voeding en mentaal welzijn voor duurzame en bevredigende resultaten.',
        'about-text3': 'Elk programma dat ik creëer is ontworpen om je in je eigen tempo vooruit te helpen, met respect voor je lichaam en persoonlijke doelen.',

        // Story page
        'story-title': 'Mijn reis naar een meer <span class="highlight">vervuld</span> leven',
        'story-subtitle': 'Ontdek hoe ik mijn passie voor fitness heb omgezet in een levensmissie',
        'timeline-title': 'Mijn <span class="highlight">reis</span>',
        'timeline-2020-title': 'Het kantelpunt',
        'timeline-2020-text': 'Na jaren van inactiviteit en onwelbevinden besloot ik mijn leven weer in eigen handen te nemen. Mijn eerste fitnessles was een openbaring: ik ontdekte dat oefening niet alleen mijn lichaam kon transformeren, maar ook mijn gemoedstoestand.',
        'timeline-2021-title': 'Opleiding en passie',
        'timeline-2021-text': 'Ik begon mijn opleiding als sportcoach terwijl ik mijn eigen transformatie voortzette. Elke dag leerde ik iets nieuws over voeding, training en het belang van mentale balans.',
        'timeline-2022-title': 'Mijn eerste klanten',
        'timeline-2022-text': 'Ik begon mijn eerste klanten te begeleiden. Hun transformaties zien, hun herkregen zelfvertrouwen, hun levensvreugde... Op dat moment wist ik dat ik mijn roeping had gevonden.',
        'timeline-2023-title': 'Ontwikkeling van programma\'s',
        'timeline-2023-text': 'Met mijn ervaring creëerde ik mijn eerste gestructureerde programma\'s. Elk programma weerspiegelt mijn filosofie: plezier, efficiëntie en welwillendheid combineren voor duurzame resultaten.',
        'timeline-2024-title': 'FIT-ILO wordt geboren',
        'timeline-2024-text': 'Officiële lancering van FIT-ILO met een holistische benadering die fitness, voeding en mentaal welzijn combineert. Meer dan 50 vrouwen hebben me al vertrouwd in hun transformatie.',

        // Philosophy
        'philosophy-title': 'Mijn <span class="highlight">filosofie</span>',
        'philosophy-text1': 'Ik geloof ten diepste dat elke vrouw het verdient om zich sterk, zelfverzekerd en vervuld te voelen in haar lichaam. Mijn benadering beperkt zich niet tot het fysieke aspect: ik beschouw dat echte transformatie het lichaam, de geest en de ziel behelst.',
        'pillar1-title': 'Fysieke kracht',
        'pillar1-text': 'Kracht ontwikkelen om zelfvertrouwen te winnen',
        'pillar2-title': 'Mentale balans',
        'pillar2-text': 'Een positieve en veerkrachtige mindset cultiveren',
        'pillar3-title': 'Algeheel welzijn',
        'pillar3-text': 'Harmonie creëren tussen alle aspecten van het leven',
        'quote-text': 'Transformatie begint niet in de sportschool, het begint in je geest. Mijn rol is om je te begeleiden bij elke stap van deze buitengewone reis.',

        // Certifications
        'certifications-title': 'Mijn <span class="highlight">certificaten</span>',
        'cert1-title': 'Gecertificeerd Sportcoach',
        'cert1-text': 'Volledige opleiding in sportwetenschappen en fysiologie',
        'cert2-title': 'Sportvoeding',
        'cert2-text': 'Specialisatie in voeding aangepast aan training',
        'cert3-title': 'Mentaal Welzijn',
        'cert3-text': 'Opleiding in mentale coaching en stressmanagement',

        // Testimonials page
        'testimonials-title': 'Zij hebben hun <span class="highlight">leven</span> getransformeerd',
        'testimonials-subtitle': 'Ontdek de inspirerende verhalen van vrouwen die ervoor kozen hun leven in eigen handen te nemen',
        'stat-clients': 'Getransformeerde klanten',
        'stat-satisfaction': 'Tevredenheidspercentage',
        'stat-rating': 'Gemiddelde score',
        'featured-title': 'Uitgelichte <span class="highlight">getuigenissen</span>',
        'result-weight': 'Gewichtsverlies',
        'result-strength': 'Kracht gewonnen',
        'video-title': 'Video <span class="highlight">getuigenissen</span>',
        'video-emma': 'Ontdek hoe Emma haar zelfvertrouwen terugvond',
        'video-clara': 'Clara\'s spectaculaire resultaten in 8 weken',
        'all-testimonials-title': 'Alle <span class="highlight">getuigenissen</span>',
        'success-title': 'Onze <span class="highlight">resultaten</span>',
        'success-weight': 'Totaal verloren kilo\'s',
        'success-clients': 'Getransformeerde vrouwen',
        'success-goals': 'Behaalde doelen',
        'success-confidence': 'Teruggevonden zelfvertrouwen',

        // Testimonials content
        'testimonial-marie': 'Ilona heeft mijn leven letterlijk veranderd. In 6 maanden heb ik niet alleen mijn lichaam getransformeerd maar ook mijn zelfvertrouwen. Haar programma\'s zijn perfect aangepast en haar begeleiding is uitzonderlijk. Ik voel me sterker dan ooit!',
        'testimonial-sophie': 'Ilona\'s billenprogramma is ongelooflijk! In 8 weken zag ik resultaten waar ik niet meer op hoopte. Haar voedingsadviezen zijn een enorme meerwaarde. Ik raad het 200% aan!',
        'testimonial-laura': 'Perfect om weer zachtjes te beginnen met sporten. Ilona luistert en past zich aan onze beperkingen aan. Dankzij haar maakt sport nu deel uit van mijn dagelijkse routine!',
        'testimonial-amelie': 'Perfect beginnersprogramma! Ilona legt alles heel duidelijk uit en is altijd beschikbaar om vragen te beantwoorden. Ik voel me fitter dan ooit.',
        'testimonial-justine': 'De resultaten zijn er! In 3 maanden heb ik mijn silhouet volledig getransformeerd. Ilona\'s begeleiding is uitzonderlijk.',
        'testimonial-camille': 'Fantastische holistische benadering! Het is niet alleen een fitnessprogramma, het is echte begeleiding naar een meer uitgebalanceerd leven.',
        'testimonial-nina': 'Dankzij Ilona heb ik leren houden van sporten. Haar programma\'s zijn gevarieerd en nooit saai. Een geweldige coach!',
        'testimonial-valerie': 'Na 2 zwangerschappen dacht ik nooit meer in vorm te komen. Ilona heeft me het tegendeel bewezen! Bedankt voor deze ongelooflijke reis.',
        'testimonial-estelle': 'Top voedingsprogramma! Ik heb eindelijk begrepen hoe goed eten zonder me te ontzeggen. De resultaten spreken voor zich.',

        // Call to action
        'cta-title': 'Klaar om je eigen transformatie te beginnen?',
        'cta-text': 'Sluit je aan bij de vrouwen die hun leven al hebben getransformeerd met mijn programma\'s',
        'cta-programs': 'Mijn programma\'s ontdekken',
        'cta-testimonials': 'Getuigenissen lezen',
        'cta-join-title': 'Sluit je aan bij onze succesverhalen',
        'cta-join-text': 'Je transformatie begint vandaag. Kies het programma dat bij je past.',
        'cta-contact': 'Contact opnemen',

        // Footer
        'footer-description': 'Transformeer je lichaam en geest met gepersonaliseerde programma\'s ontworpen voor duurzame resultaten.',
        'footer-nav': 'Navigatie',
        'footer-programs': 'Programma\'s',
        'footer-contact': 'Contact',
        'footer-rights': '© 2025 FIT-ILO. Alle rechten voorbehouden.',
        'footer-legal': 'Juridische vermeldingen',
        'footer-privacy': 'Privacy',
        'footer-terms': 'Algemene voorwaarden'
    },

    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-programs': 'Programs',
        'nav-about': 'About',
        'nav-story': 'My Story',
        'nav-testimonials': 'Testimonials',
        'nav-contact': 'Contact',

        // Hero section
        'hero-title': 'Transform Your Body,<br><span class="highlight">Elevate Your Mind</span>',
        'hero-subtitle': 'Discover my personalized programs designed to guide you through your physical and mental transformation.',
        'hero-discover': 'Discover programs →',
        'hero-learn-more': 'Learn more',

        // Programs section
        'programs-title': 'My <span class="highlight">Programs</span>',
        'program-beginner': 'Beginner Program',
        'program-beginner-desc': 'Perfect to start your transformation gently',
        'program-glutes': 'Glutes Program',
        'program-glutes-desc': 'Sculpt and tone your glutes effectively',
        'program-complete': 'Complete Program',
        'program-complete-desc': 'Complete body and mind transformation',
        'program-nutrition': 'Nutrition',
        'program-discover': 'Discover',

        // About section
        'about-title': 'Hi, I\'m <span class="highlight">Ilona</span>',
        'about-text1': 'Passionate about fitness for over 3 years, I\'ve transformed my passion into a mission: to guide you through your own transformation.',
        'about-text2': 'My approach combines personalized training, balanced nutrition, and mental wellness for lasting and fulfilling results.',
        'about-text3': 'Each program I create is designed to help you progress at your own pace, respecting your body and personal goals.',

        // Story page
        'story-title': 'My journey to a more <span class="highlight">fulfilled</span> life',
        'story-subtitle': 'Discover how I transformed my passion for fitness into a life mission',
        'timeline-title': 'My <span class="highlight">journey</span>',
        'timeline-2020-title': 'The turning point',
        'timeline-2020-text': 'After years of sedentary lifestyle and discomfort, I decided to take my life back into my own hands. My first fitness class was a revelation: I discovered that exercise could transform not only my body but also my state of mind.',
        'timeline-2021-title': 'Training and passion',
        'timeline-2021-text': 'I started my sports coach training while continuing my own transformation. Every day, I learned something new about nutrition, training, and the importance of mental balance.',
        'timeline-2022-title': 'My first clients',
        'timeline-2022-text': 'I started coaching my first clients. Seeing their transformations, their regained confidence, their joy of living... That\'s when I knew I had found my calling.',
        'timeline-2023-title': 'Program development',
        'timeline-2023-text': 'With my experience, I created my first structured programs. Each program reflects my philosophy: combining pleasure, efficiency, and kindness for lasting results.',
        'timeline-2024-title': 'FIT-ILO is born',
        'timeline-2024-text': 'Official launch of FIT-ILO with a holistic approach combining fitness, nutrition, and mental wellness. More than 50 women have already trusted me with their transformation.',

        // Philosophy
        'philosophy-title': 'My <span class="highlight">philosophy</span>',
        'philosophy-text1': 'I deeply believe that every woman deserves to feel strong, confident, and fulfilled in her body. My approach is not limited to the physical aspect: I consider that true transformation involves the body, mind, and soul.',
        'pillar1-title': 'Physical strength',
        'pillar1-text': 'Building strength to gain confidence',
        'pillar2-title': 'Mental balance',
        'pillar2-text': 'Cultivating a positive and resilient mindset',
        'pillar3-title': 'Overall wellness',
        'pillar3-text': 'Creating harmony between all aspects of life',
        'quote-text': 'Transformation doesn\'t start in the gym, it starts in your mind. My role is to guide you through every step of this extraordinary journey.',

        // Certifications
        'certifications-title': 'My <span class="highlight">certifications</span>',
        'cert1-title': 'Certified Sports Coach',
        'cert1-text': 'Complete training in sports science and physiology',
        'cert2-title': 'Sports Nutrition',
        'cert2-text': 'Specialization in nutrition adapted to training',
        'cert3-title': 'Mental Wellness',
        'cert3-text': 'Training in mental coaching and stress management',

        // Testimonials page
        'testimonials-title': 'They transformed their <span class="highlight">lives</span>',
        'testimonials-subtitle': 'Discover the inspiring stories of women who chose to take control of their lives',
        'stat-clients': 'Transformed clients',
        'stat-satisfaction': 'Satisfaction rate',
        'stat-rating': 'Average rating',
        'featured-title': 'Featured <span class="highlight">testimonials</span>',
        'result-weight': 'Weight loss',
        'result-strength': 'Strength gained',
        'video-title': 'Video <span class="highlight">testimonials</span>',
        'video-emma': 'Discover how Emma regained her confidence',
        'video-clara': 'Clara\'s spectacular results in 8 weeks',
        'all-testimonials-title': 'All <span class="highlight">testimonials</span>',
        'success-title': 'Our <span class="highlight">results</span>',
        'success-weight': 'Total kilos lost',
        'success-clients': 'Transformed women',
        'success-goals': 'Goals achieved',
        'success-confidence': 'Confidence regained',

        // Testimonials content
        'testimonial-marie': 'Ilona literally changed my life. In 6 months, I not only transformed my body but also my confidence. Her programs are perfectly adapted and her support is exceptional. I feel stronger than ever!',
        'testimonial-sophie': 'Ilona\'s glutes program is incredible! In 8 weeks, I saw results I no longer hoped for. Her nutrition advice is a huge plus. I recommend it 200%!',
        'testimonial-laura': 'Perfect for getting back into sport gently. Ilona listens and adapts to our constraints. Thanks to her, sport is now part of my daily routine!',
        'testimonial-amelie': 'Perfect beginner program! Ilona explains everything very clearly and is always available to answer questions. I feel fitter than ever.',
        'testimonial-justine': 'The results are there! In 3 months, I completely transformed my silhouette. Ilona\'s follow-up is exceptional.',
        'testimonial-camille': 'Fantastic holistic approach! It\'s not just a fitness program, it\'s real guidance towards a more balanced life.',
        'testimonial-nina': 'Thanks to Ilona, I learned to love exercising. Her programs are varied and never boring. A wonderful coach!',
        'testimonial-valerie': 'After 2 pregnancies, I thought I would never get back in shape. Ilona proved me wrong! Thank you for this incredible journey.',
        'testimonial-estelle': 'Top nutrition program! I finally understood how to eat well without depriving myself. The results speak for themselves.',

        // Call to action
        'cta-title': 'Ready to start your own transformation?',
        'cta-text': 'Join the women who have already transformed their lives with my programs',
        'cta-programs': 'Discover my programs',
        'cta-testimonials': 'Read testimonials',
        'cta-join-title': 'Join our success stories',
        'cta-join-text': 'Your transformation starts today. Choose the program that suits you.',
        'cta-contact': 'Contact me',

        // Footer
        'footer-description': 'Transform your body and mind with personalized programs designed for lasting results.',
        'footer-nav': 'Navigation',
        'footer-programs': 'Programs',
        'footer-contact': 'Contact',
        'footer-rights': '© 2025 FIT-ILO. All rights reserved.',
        'footer-legal': 'Legal notices',
        'footer-privacy': 'Privacy',
        'footer-terms': 'Terms of service'
    }
};

// Language management
let currentLang = 'fr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
    updatePageContent();
    updateActiveLanguageButton();
}

function updatePageContent() {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
}

function updateActiveLanguageButton() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.getElementById(`lang-${currentLang}`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Initialize language system
function initLanguageSystem() {
    // Get saved language or default to French
    const savedLang = localStorage.getItem('selectedLanguage') || 'fr';
    currentLang = savedLang;
    
    // Add event listeners to language buttons
    document.addEventListener('DOMContentLoaded', () => {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const lang = e.target.id.replace('lang-', '');
                setLanguage(lang);
            });
        });
        
        // Set initial language
        setLanguage(currentLang);
    });
}

// Initialize the language system
initLanguageSystem();