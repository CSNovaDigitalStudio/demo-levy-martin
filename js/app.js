/*=========================================
    LEVY MARTIN
    APP
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initBackToTop();
    initLazyImages();
    initCurrentYear();

});

/*=========================================
    LOADER
=========================================*/

function initLoader() {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 600);

    });

}

/*=========================================
    BACK TO TOP
=========================================*/

function initBackToTop() {

    const button = document.querySelector(".back-to-top");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/*=========================================
    LAZY IMAGES
=========================================*/

function initLazyImages() {

    const images = document.querySelectorAll("img[data-src]");

    if (!images.length) return;

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const img = entry.target;

            img.src = img.dataset.src;

            img.removeAttribute("data-src");

            observer.unobserve(img);

        });

    });

    images.forEach(image => observer.observe(image));

}

/*=========================================
    CURRENT YEAR
=========================================*/

function initCurrentYear() {

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

}

/*=========================================
    UTILITIES
=========================================*/

function debounce(callback, delay = 100) {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}

/*=========================================
    PAGE READY
=========================================*/

document.body.classList.add("page-ready");