/*=========================================
    LEVY MARTIN
    NAVIGATION
=========================================*/

const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

/*=========================================
    Sticky Header
=========================================*/

function handleScroll() {

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", handleScroll);

/*=========================================
    Mobile Menu
=========================================*/

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }

});

/*=========================================
    Close Menu
=========================================*/

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        menuBtn.classList.remove("active");
        document.body.style.overflow = "";

    });

});

/*=========================================
    Close With Escape
=========================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        mobileMenu.classList.remove("active");
        menuBtn.classList.remove("active");
        document.body.style.overflow = "";

    }

});

/*=========================================
    Close When Resizing
=========================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 992) {

        mobileMenu.classList.remove("active");
        menuBtn.classList.remove("active");
        document.body.style.overflow = "";

    }

});

/*=========================================
    Active Navigation Link
=========================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});

/*=========================================
    Navbar Shadow On Load
=========================================*/

handleScroll();