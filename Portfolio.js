document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Theme Switcher
    const themeBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        themeBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }

    themeBtn.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
        }
    });

    // Language Switcher
    const langBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'en';

    const translations = {
        en: {
            navAbout: 'About',
            navSkills: 'Skills',
            navExperience: 'Experience',
            navProjects: 'Projects',
            navContact: 'Contact',
            navHire: 'Hire Me',
            heroTitle: 'Crafting <span>Premium</span><br>Full Stack Experiences',
            heroDesc: "I'm <strong>Adham Emad</strong>, a Full Stack .NET Developer. I specialize in building end-to-end solutions using ASP.NET Core, C#, and modern frontend frameworks to deliver robust and scalable software.",
            heroWork: 'Check My Work',
            heroCV: 'Download CV',
            aboutTitle: 'Professional Summary',
            aboutP1: 'Computer Science student at Marsa Matrouh University with a deep passion for Full Stack development. My expertise lies in the .NET ecosystem, where I build clean, high-performance APIs and interactive user interfaces.',
            aboutP2: "With practical experience in Clean Architecture and the Repository Pattern, I'm dedicated to writing maintainable code that scales. Currently seeking an internship or part-time role to contribute to impactful software solutions.",
            skillsTitle: 'Technical Skills',
            expTitle: 'Professional Timeline',
            internshipTitle: 'Internship',
            internshipRole: 'Backend Developer',
            internshipDesc: 'Collaborated on 4 enterprise-level projects using ASP.NET Core. Implemented Clean Architecture and Repository Patterns to ensure maintainability.',
            educationTitle: 'Education',
            eduCS: 'B.Sc. Computer Science',
            eduUni: 'Marsa Matrouh University',
            eduMCIT: 'Digitopia Stage 3 - MCIT',
            contactLoc: 'Zagazig, Egypt',
            projectsTitle: 'Latest Projects',
            projectKarofa: 'Karofa | AI Compliance',
            projectKarofaDesc: 'An advanced legal research platform for Saudi laws. Features AI-driven document analysis, compliance checks, and a comprehensive legal database dashboard.',
            projectQatar: 'Qatar Contracting Portal',
            projectQatarDesc: 'A high-end service portal for a leading contracting firm. Features project showcases, service modules, and a professional appointment system.',
            projectCloud: 'Cloudcredits Landing',
            projectCloudDesc: 'A comprehensive landing page for a Frontend Web Development Internship. Features campaign details, application forms, and program overview.',
            projectGym: 'Mega GYM Platform',
            projectGymDesc: 'A dynamic and user-friendly website for fitness enthusiasts. Features class schedules, trainer profiles, and membership plans.',
            projectEcommerce: 'E-commerce Ecosystem',
            projectEcommerceDesc: 'A fully functional, user-friendly e-commerce platform. Allows customers to browse, select, and purchase products securely online.',
            projectLMS: 'Library Automation',
            projectLMSDesc: 'Automated system for managing core library functions. Built with ASP.NET MVC, focusing on seamless database operations.',
            projectSanad: 'Sanad - Legal Tech',
            projectSanadDesc: 'AI-powered consultation platform for criminal law in Egypt. Focused on accessibility and legal accuracy.',
            connectTitle: "Let's Connect",
            connectDesc: 'Turning vision into <span>digital reality</span>.',
            connectPrompt: 'Ready to discuss your next project or internship opportunity. My inbox is always open.',
            formName: 'Your Name',
            formEmail: 'Your Email',
            formMsg: 'Your Message',
            formBtn: 'Send Message'
        },
        ar: {
            navAbout: 'حول',
            navSkills: 'المهارات',
            navExperience: 'الخبرة',
            navProjects: 'المشاريع',
            navContact: 'تواصل',
            navHire: 'وظفني',
            heroTitle: 'بناء تجارب <span>متكاملة</span><br>بأعلى المعايير',
            heroDesc: 'أنا <strong>أدهم عماد</strong>، مطور Full Stack .NET. متخصص في بناء حلول متكاملة باستخدام ASP.NET Core و C# وأحدث أطر العمل الأمامية لتقديم برمجيات قوية وقابلة للتوسع.',
            heroWork: 'أعمالي',
            heroCV: 'تحميل CV',
            aboutTitle: 'ملخص مهني',
            aboutP1: 'طالب علوم حاسب في جامعة مرسى مطروح بشغف عميق لتطوير Full Stack. تكمن خبرتي في نظام .NET البيئي، حيث أقوم ببناء واجهات برمجية نظيفة وعالية الأداء وواجهات مستخدم تفاعلية.',
            aboutP2: 'مع خبرة عملية في Clean Architecture ونمط Repository، أنا مخصص لكتابة كود قابل للصيانة والتوسع. أبحث حالياً عن تدريب أو دور بدوام جزئي للمساهمة في حلول برمجية مؤثرة.',
            skillsTitle: 'المهارات التقنية',
            expTitle: 'المسار المهني',
            internshipTitle: 'تدريب',
            internshipRole: 'مطور باك أند',
            internshipDesc: 'شاركت في 4 مشاريع برمجية ضخمة باستخدام ASP.NET Core. قمت بتطبيق أنماط Clean Architecture و Repository لضمان جودة وسهولة صيانة الكود.',
            educationTitle: 'التعليم',
            eduCS: 'بكالوريوس علوم الحاسب',
            eduUni: 'جامعة مرسى مطروح',
            eduMCIT: 'ديجيتوبيا المرحلة 3 - وزارة الاتصالات',
            contactLoc: 'الزقازيق، مصر',
            projectsTitle: 'أحدث المشاريع',
            projectKarofa: 'كاروفا | الامتثال الذكي',
            projectKarofaDesc: 'منصة أبحاث قانونية متقدمة للقوانين السعودية. تتميز بتحليل المستندات المدعوم بالذكاء الاصطناعي، وفحوصات الامتثال، ولوحة بيانات شاملة للقواعد القانونية.',
            projectQatar: 'بوابة قطر للمقاولات',
            projectQatarDesc: 'بوابة خدمات رفيعة المستوى لشركة مقاولات رائدة. تتميز بعرض المشاريع، ونماذج الخدمات، ونظام حجز مواعيد احترافي.',
            projectCloud: 'هبوط Cloudcredits',
            projectCloudDesc: 'صفحة هبوط شاملة لتدريب تطوير الويب (Frontend). تتضمن تفاصيل الحملة، ونماذج التقديم، ونظرة عامة على البرنامج.',
            projectGym: 'منصة Mega GYM',
            projectGymDesc: 'موقع ديناميكي وسهل الاستخدام لعشاق اللياقة البدنية. يتضمن جداول الحصص، ملفات المدربين، وخطط العضوية.',
            projectEcommerce: 'نظام التجارة الإلكترونية',
            projectEcommerceDesc: 'منصة تجارة إلكترونية كاملة الوظائف وسهلة الاستخدام. تتيح للعملاء تصفح واختيار وشراء المنتجات بأمان عبر الإنترنت.',
            projectLMS: 'أتمتة المكتبات',
            projectLMSDesc: 'نظام آلي لإدارة وظائف المكتبة الأساسية. مبني باستخدام ASP.NET MVC، مع التركيز على عمليات قاعدة البيانات السلسة.',
            projectSanad: 'سند - التكنولوجيا القانونية',
            projectSanadDesc: 'منصة استشارات مدعومة بالذكاء الاصطناعي للقانون الجنائي في مصر. تركز على سهولة الوصول والدقة القانونية.',
            connectTitle: 'لنكن على اتصال',
            connectDesc: 'تحويل الرؤية إلى <span>واقع رقمي</span>.',
            connectPrompt: 'جاهز لمناقشة مشروعك القادم أو فرصة تدريب. بريدي متاح دائماً.',
            formName: 'اسمك',
            formEmail: 'بريدك الإلكتروني',
            formMsg: 'رسالتك',
            formBtn: 'إرسال الرسالة'
        }
    };

    function updateLanguage(lang) {
        currentLang = lang;
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);
        langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
        localStorage.setItem('lang', lang);

        // Update Nav
        document.querySelector('a[href="#about"]').textContent = translations[lang].navAbout;
        document.querySelector('a[href="#skills"]').textContent = translations[lang].navSkills;
        document.querySelector('a[href="#experience"]').textContent = translations[lang].navExperience;
        document.querySelector('a[href="#projects"]').textContent = translations[lang].navProjects;
        document.querySelector('a[href="#contact"]').textContent = translations[lang].navContact;
        document.querySelector('.nav-right > .btn-primary').textContent = translations[lang].navHire;

        // Update Hero
        document.querySelector('.hero-text h1').innerHTML = translations[lang].heroTitle;
        document.querySelector('.hero-text p').innerHTML = translations[lang].heroDesc;
        document.querySelector('.hero-buttons .btn-primary').textContent = translations[lang].heroWork;
        document.querySelector('.hero-buttons .btn-outline').innerHTML = `<i class="bi bi-download"></i> ${translations[lang].heroCV}`;

        // Update Sections
        document.querySelectorAll('.section-title').forEach(title => {
            if (title.closest('#about')) title.textContent = translations[lang].aboutTitle;
            if (title.closest('#skills')) title.textContent = translations[lang].skillsTitle;
            if (title.closest('#experience')) {
                // Handle different titles in experience section
            }
            if (title.closest('#projects')) title.textContent = translations[lang].projectsTitle;
            if (title.closest('#contact')) title.textContent = translations[lang].connectTitle;
        });

        // Specific Experience Titles
        document.querySelector('#experience h2:nth-child(1)').textContent = translations[lang].internshipTitle;
        document.querySelector('#experience div:nth-child(2) h2').textContent = translations[lang].educationTitle;
        
        const internship = document.querySelector('.timeline-item');
        if (internship) {
            internship.querySelector('h3').textContent = translations[lang].internshipRole;
            internship.querySelector('p:nth-of-type(2)').textContent = translations[lang].internshipDesc;
        }

        // Update About Card
        const aboutCard = document.querySelector('#about .glass-card');
        aboutCard.querySelector('p:nth-child(1)').textContent = translations[lang].aboutP1;
        aboutCard.querySelector('p:nth-child(2)').textContent = translations[lang].aboutP2;

        // Update Projects
        const projects = document.querySelectorAll('.project-card');
        const projKeys = ['projectKarofa', 'projectQatar', 'projectCloud', 'projectGym', 'projectEcommerce', 'projectLMS', 'projectSanad'];
        const projDescKeys = ['projectKarofaDesc', 'projectQatarDesc', 'projectCloudDesc', 'projectGymDesc', 'projectEcommerceDesc', 'projectLMSDesc', 'projectSanadDesc'];
        
        projects.forEach((card, index) => {
            if (projKeys[index]) {
                card.querySelector('h3').textContent = translations[lang][projKeys[index]];
                card.querySelector('p').textContent = translations[lang][projDescKeys[index]];
            }
        });

        // Update Contact Form
        document.querySelector('.contact-info h3').innerHTML = translations[lang].connectDesc;
        document.querySelector('.contact-info p').textContent = translations[lang].connectPrompt;
        document.querySelector('input[placeholder="Your Name"], input[placeholder="اسمك"]').placeholder = translations[lang].formName;
        document.querySelector('input[placeholder="Your Email"], input[placeholder="بريدك الإلكتروني"]').placeholder = translations[lang].formEmail;
        document.querySelector('textarea').placeholder = translations[lang].formMsg;
        document.querySelector('#contact-form button').textContent = translations[lang].formBtn;

        // Update Education
        const eduItems = document.querySelectorAll('#experience div:nth-child(2) .timeline-item');
        if (eduItems[0]) {
            eduItems[0].querySelector('h3').textContent = translations[lang].eduCS;
            eduItems[0].querySelector('p').textContent = translations[lang].eduUni;
        }
        if (eduItems[1]) {
            eduItems[1].querySelector('h3').textContent = translations[lang].eduMCIT;
            eduItems[1].querySelector('p').textContent = translations[lang].eduUni; // Same uni if it's the second p? No, HTML says MCIT.
        }

        // Update Contact Details
        document.querySelector('.contact-item:nth-child(2) span').textContent = translations[lang].contactLoc;
        document.querySelector('footer p').innerHTML = `&copy; 2026 Adham Emad. ${lang === 'ar' ? 'بُني بتميز.' : 'Built for excellence.'}`;
    }

    langBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'en' ? 'ar' : 'en';
        updateLanguage(nextLang);
    });

    // Initial language setup
    if (currentLang === 'ar') {
        updateLanguage('ar');
    }

    // Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            // Set loading state
            btn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
            btn.style.opacity = '0.7';
            btn.disabled = true;

            try {
                const formData = new FormData(contactForm);
                const response = await fetch('https://formspree.io/f/mqegpapo', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    btn.textContent = currentLang === 'ar' ? 'تم الإرسال بنجاح!' : 'Message Sent!';
                    btn.style.background = '#22c55e';
                    contactForm.reset();
                } else {
                    throw new Error('Formspree response not OK');
                }
            } catch (error) {
                console.error('Submission error:', error);
                btn.textContent = currentLang === 'ar' ? 'حدث خطأ. حاول ثانية' : 'Error. Try again';
                btn.style.background = '#ef4444';
            } finally {
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.style.opacity = '1';
                    btn.disabled = false;
                }, 3000);
            }
        });
    }
});