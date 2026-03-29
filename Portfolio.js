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
            internshipDate: 'Jun 2025 - Oct 2025',
            internshipRole: 'Backend Developer',
            internshipCompany: 'Cloudcredits Technologies Pvt.Ltd',
            internshipDesc: 'Collaborated on 4 enterprise-level projects using ASP.NET Core. Implemented Clean Architecture and Repository Patterns to ensure maintainability.',
            educationTitle: 'Education & Training',
            rmdDate: 'Nov 2025 - Jul 2026',
            rmdTitle: '.NET Full Stack Scholarship',
            rmdOrg: 'Digital Egypt Pioneers (RMD)',
            eduDate: '2022 - 2026 (Expected)',
            eduCS: 'B.Sc. in Computer Science',
            eduUni: 'Marsa Matrouh University',
            mcitDate: 'Oct 2025',
            eduMCIT: 'Digitopia Stage 3 - MCIT',
            eduMCITDesc: 'MCIT E-Learning Program',
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
            formBtn: 'Send Message',
            roles: ['Full Stack .NET Developer', 'Backend Specialist', 'Frontend Architect']
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
            internshipTitle: 'التدريب العملي',
            internshipDate: 'يونيو 2025 - أكتوبر 2025',
            internshipRole: 'مطور تطبيقات خلفية (Backend)',
            internshipCompany: 'كلاود كريديتس للتكنولوجيا',
            internshipDesc: 'المساهمة في 4 مشاريع برمجية كبرى باستخدام ASP.NET Core، مع تطبيق معايير Clean Architecture و Repository لضمان جودة الكود.',
            educationTitle: 'التعليم والتدريب',
            rmdDate: 'نوفمبر 2025 - يوليو 2026',
            rmdTitle: 'منحة .NET Full Stack',
            rmdOrg: 'رواد مصر الرقمية (RMD)',
            eduDate: '2022 - 2026 (متوقع)',
            eduCS: 'بكالوريوس في علوم الحاسب',
            eduUni: 'جامعة مرسى مطروح',
            mcitDate: 'أكتوبر 2025',
            eduMCIT: 'مبادرة ديجيتوبيا (المرحلة الثالثة)',
            eduMCITDesc: 'برنامج وزارة الاتصالات للتعلم عن بعد',
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
            formBtn: 'إرسال الرسالة',
            roles: ['مطور .NET متكامل', 'مطور تطبيقات خلفية', 'مطور واجهات أمامية']
        }
    };

    // Typewriter Effect
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const textElement = document.getElementById('typing-text');
        if (!textElement) return;

        const currentRoles = translations[currentLang].roles;
        const currentText = currentRoles[roleIndex % currentRoles.length];

        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex--);
            typeSpeed = 50;
        } else {
            textElement.textContent = currentText.substring(0, charIndex++);
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length + 1) {
            isDeleting = true;
            typeSpeed = 1500; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex++;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    type();

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
        document.querySelector('.hero-buttons .btn-primary').textContent = translations[lang].heroWork;
        document.querySelector('.hero-buttons .btn-outline').innerHTML = `<i class="bi bi-download"></i> ${translations[lang].heroCV}`;

        // Update Sections
        document.querySelectorAll('.section-title').forEach(title => {
            if (title.closest('#about')) title.textContent = translations[lang].aboutTitle;
            if (title.closest('#skills')) title.textContent = translations[lang].skillsTitle;
            if (title.closest('#experience')) title.textContent = translations[lang].expTitle;
            if (title.closest('#projects')) title.textContent = translations[lang].projectsTitle;
            if (title.closest('#contact')) title.textContent = translations[lang].connectTitle;
        });

        // Specific Experience Titles
        document.querySelector('#internship-content .section-title').textContent = translations[lang].internshipTitle;
        document.querySelector('#education-content .section-title').textContent = translations[lang].educationTitle;
        
        // Update Internship (Using specific IDs)
        const dateIntern = document.getElementById('date-intern');
        const roleIntern = document.getElementById('role-intern');
        const compIntern = document.getElementById('comp-intern');
        const descIntern = document.getElementById('desc-intern');

        if (dateIntern) dateIntern.textContent = translations[lang].internshipDate;
        if (roleIntern) roleIntern.textContent = translations[lang].internshipRole;
        if (compIntern) compIntern.textContent = translations[lang].internshipCompany;
        if (descIntern) descIntern.textContent = translations[lang].internshipDesc;

        // Update Education & Training (Using specific IDs)
        const dRmd = document.getElementById('date-rmd');
        const tRmd = document.getElementById('title-rmd');
        const oRmd = document.getElementById('org-rmd');
        if (dRmd) dRmd.textContent = translations[lang].rmdDate;
        if (tRmd) tRmd.textContent = translations[lang].rmdTitle;
        if (oRmd) oRmd.textContent = translations[lang].rmdOrg;

        const dMcit = document.getElementById('date-mcit');
        const tMcit = document.getElementById('title-mcit');
        const oMcit = document.getElementById('org-mcit');
        if (dMcit) dMcit.textContent = translations[lang].mcitDate;
        if (tMcit) tMcit.textContent = translations[lang].eduMCIT;
        if (oMcit) oMcit.textContent = translations[lang].eduMCITDesc;

        const dUni = document.getElementById('date-uni');
        const tUni = document.getElementById('title-uni');
        const oUni = document.getElementById('org-uni');
        if (dUni) dUni.textContent = translations[lang].eduDate;
        if (tUni) tUni.textContent = translations[lang].eduCS;
        if (oUni) oUni.textContent = translations[lang].eduUni;

        // Update About Card
        const aboutCard = document.querySelector('#about .glass-card');
        if (aboutCard) {
            aboutCard.querySelector('p:nth-child(1)').textContent = translations[lang].aboutP1;
            aboutCard.querySelector('p:nth-child(2)').textContent = translations[lang].aboutP2;
        }

        // Update Projects
        const projects = document.querySelectorAll('.project-card');
        const projKeys = ['projectKarofa', 'projectQatar', 'projectCloud', 'projectGym', 'projectEcommerce', 'projectLMS', 'projectSanad'];
        const projDescKeys = ['projectKarofaDesc', 'projectQatarDesc', 'projectCloudDesc', 'projectGymDesc', 'projectEcommerceDesc', 'projectLMSDesc', 'projectSanadDesc'];
        
        projects.forEach((card, index) => {
            if (projKeys[index]) {
                const titleEl = card.querySelector('h3');
                const descEl = card.querySelector('p');
                if (titleEl) titleEl.textContent = translations[lang][projKeys[index]];
                if (descEl) descEl.textContent = translations[lang][projDescKeys[index]];
            }
        });

        // Update Contact Form
        const connectTitle = document.querySelector('.contact-info h3');
        const connectPrompt = document.querySelector('.contact-info p');
        if (connectTitle) connectTitle.innerHTML = translations[lang].connectDesc;
        if (connectPrompt) connectPrompt.textContent = translations[lang].connectPrompt;
        
        const nameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="email"]');
        const msgInput = document.querySelector('textarea[name="message"]');
        const submitBtn = document.querySelector('#contact-form button');
        
        if (nameInput) nameInput.placeholder = translations[lang].formName;
        if (emailInput) emailInput.placeholder = translations[lang].formEmail;
        if (msgInput) msgInput.placeholder = translations[lang].formMsg;
        if (submitBtn) submitBtn.textContent = translations[lang].formBtn;

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