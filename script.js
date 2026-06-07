console.log("Portfolio Loaded");

AOS.init({
    duration: 1000,
    once: true
});

new Typed("#typing", {
    strings: [
        "Machine Learning Enthusiast",
        "Data Science Student",
        "Python Developer",
        "AI Explorer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});
console.log("Portfolio Loaded");

AOS.init({
    duration: 1000,
    once: true
});

new Typed("#typing", {
    strings: [
        "Machine Learning Enthusiast",
        "Data Science Student",
        "Python Developer",
        "AI Explorer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});


// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
