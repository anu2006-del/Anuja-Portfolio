/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        if (navLinks.classList.contains("open")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    /* Close menu after clicking */

    document.querySelectorAll(".nav-links a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuBtn.textContent = "☰";

        });

    });

}


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 180;
        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.id;
        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (targetId === "#") return;

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-content, " +
    ".skills-header, " +
    ".skill, " +
    ".projects-title, " +
    ".project-card, " +
    ".contact-content"
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   STAGGER SKILLS
========================= */

const skills =
    document.querySelectorAll(".skill");

skills.forEach((skill, index) => {

    skill.style.transitionDelay =
        `${index * 0.08}s`;

});


/* =========================
   STAGGER PROJECTS
========================= */

const projects =
    document.querySelectorAll(".project-card");

projects.forEach((project, index) => {

    project.style.transitionDelay =
        `${index * 0.12}s`;

});


/* =========================
   PROJECT 3D HOVER
========================= */

projects.forEach((project) => {

    const visual =
        project.querySelector(".project-visual");

    if (!visual) return;


    project.addEventListener("mousemove", (event) => {

        const rect =
            project.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const rotateX =
            ((y / rect.height) - 0.5) * -5;

        const rotateY =
            ((x / rect.width) - 0.5) * 5;


        visual.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)
             scale(1.015)`;

    });


    project.addEventListener("mouseleave", () => {

        visual.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) translateY(-10px) scale(1.015)";

    });

});


/* =========================
   HERO CARD MOUSE MOVEMENT
========================= */

const heroArt =
    document.querySelector(".hero-art");

const creativeCard =
    document.querySelector(".creative-card");


if (heroArt && creativeCard) {

    heroArt.addEventListener("mousemove", (event) => {

        const rect =
            heroArt.getBoundingClientRect();


        const x =
            (event.clientX - rect.left) /
            rect.width - 0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height - 0.5;


        const moveX = x * 18;
        const moveY = y * 18;

        const rotateX = y * -5;
        const rotateY = x * 5;


        creativeCard.style.transform =
            `rotate(${rotateY * -0.5 - 2}deg)
             translate(${moveX}px, ${moveY}px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    heroArt.addEventListener("mouseleave", () => {

        creativeCard.style.transform =
            "rotate(-5deg) translate(0, 0)";

    });

}


/* =========================
   FLOATING TAG INTERACTION
========================= */

const floatingTags =
    document.querySelectorAll(".floating-tag");


floatingTags.forEach((tag) => {

    tag.addEventListener("mouseenter", () => {

        tag.style.boxShadow =
            "0 15px 40px rgba(155, 124, 255, 0.45)";

    });


    tag.addEventListener("mouseleave", () => {

        tag.style.boxShadow =
            "0 10px 30px rgba(0, 0, 0, 0.2)";

    });

});


/* =========================
   SKILL HOVER NUMBER EFFECT
========================= */

skills.forEach((skill) => {

    const number =
        skill.querySelector(".skill-number");

    if (!number) return;


    skill.addEventListener("mouseenter", () => {

        number.style.transform =
            "translateX(5px)";

        number.style.color =
            "#fff8e9";

    });


    skill.addEventListener("mouseleave", () => {

        number.style.transform =
            "translateX(0)";

        number.style.color =
            "";

    });

});


/* =========================
   CURSOR GLOW EFFECT
========================= */

const cursorGlow =
    document.createElement("div");

cursorGlow.className =
    "cursor-glow";

document.body.appendChild(cursorGlow);


document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left =
        `${event.clientX}px`;

    cursorGlow.style.top =
        `${event.clientY}px`;

});


/* =========================
   CURSOR GLOW STYLE
========================= */

const cursorStyle =
    document.createElement("style");

cursorStyle.textContent = `

.cursor-glow {

    position: fixed;

    width: 180px;
    height: 180px;

    border-radius: 50%;

    pointer-events: none;

    transform: translate(-50%, -50%);

    background:
        radial-gradient(
            circle,
            rgba(118, 87, 232, 0.10),
            transparent 70%
        );

    z-index: 0;

    transition:
        left 0.15s ease-out,
        top 0.15s ease-out;

}

`;

document.head.appendChild(cursorStyle);


/* =========================
   BUTTON MAGNET EFFECT
========================= */

const buttons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn, .nav-contact"
    );


buttons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

        const rect =
            button.getBoundingClientRect();

        const x =
            event.clientX - rect.left - rect.width / 2;

        const y =
            event.clientY - rect.top - rect.height / 2;


        button.style.transform =
            `translate(${x * 0.12}px, ${y * 0.12}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "";

    });

});


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.querySelector(
        'footer a[href="#home"]'
    );


if (backToTop) {

    backToTop.addEventListener("click", (event) => {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================
   CURRENT YEAR
========================= */

const footerText =
    document.querySelector(".footer-container p");


if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} Anuja · Frontend Developer`;

}


/* =========================
   PARALLAX HERO ORBITS
========================= */

const orbits =
    document.querySelectorAll(".orbit");


if (heroArt) {

    heroArt.addEventListener("mousemove", (event) => {

        const rect =
            heroArt.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width - 0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height - 0.5;


        orbits.forEach((orbit, index) => {

            const strength =
                (index + 1) * 8;

            orbit.style.marginLeft =
                `${x * strength}px`;

            orbit.style.marginTop =
                `${y * strength}px`;

        });

    });


    heroArt.addEventListener("mouseleave", () => {

        orbits.forEach((orbit) => {

            orbit.style.marginLeft = "0";
            orbit.style.marginTop = "0";

        });

    });

}


/* =========================
   PAGE LOAD
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});