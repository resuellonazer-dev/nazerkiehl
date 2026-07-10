// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Header background on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#111319";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.4)";
    } else {
        header.style.background = "#181b22";
        header.style.boxShadow = "none";
    }
});

// Reveal animation
const revealElements = document.querySelectorAll("section");

function reveal() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

// Initial styles
revealElements.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Contact form
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        form.reset();
    });
}

// Card hover animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

// Current year in footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = '© ${new Date().getFullYear()} Nazer. All Rights Reserved.';
}
