// app.js

document.addEventListener('DOMContentLoaded', () => {
    
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial Load Animation (Hero)
    const heroTl = gsap.timeline();
    
    heroTl.from(".hero-content .inline-block", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
    .from(".hero-content h1", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .from(".hero-content p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .from(".hero-content .flex a", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    }, "-=0.6")
    .from(".hero-image img", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
    }, "-=1");

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }
    });

    // Sections Scroll Animations
    
    // About Section
    gsap.from(".about-image", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 95%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 95%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // Section Headings Scroll Animation
    gsap.utils.toArray(".section-heading").forEach(heading => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: "top 95%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    gsap.utils.toArray(".service-card").forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 95%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    gsap.utils.toArray(".team-card").forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 95%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // Blog Section
    gsap.from(".blog-heading", {
        scrollTrigger: {
            trigger: "#blog .blog-heading",
            start: "top 95%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.utils.toArray(".blog-card").forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 95%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // Contact & Newsletter Section
    gsap.from(".contact-form-wrapper", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 95%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".newsletter-wrapper", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 95%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Statistics Section
    gsap.utils.toArray(".stat-item").forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 95%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Initialize Moving Particles Backgrounds
    if(typeof tsParticles !== 'undefined') {
        const particlesConfig = {
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            particles: {
                color: { value: "#A4865D" },
                links: { color: "#A4865D", distance: 150, enable: true, opacity: 0.2, width: 1 },
                move: { direction: "none", enable: true, outModes: { default: "out" }, random: false, speed: 1.5, straight: false },
                number: { density: { enable: true, area: 800 }, value: 40 },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 2 } },
            },
            detectRetina: true,
        };

        tsParticles.load("tsparticles-hero", particlesConfig);
        tsParticles.load("tsparticles-stats", particlesConfig);
        tsParticles.load("tsparticles-contact", particlesConfig);
    }

});
