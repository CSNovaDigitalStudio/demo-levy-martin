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


/*=========================================
NEWSLETTER TO WHATSAPP
=========================================*/

const newsletter=document.getElementById("newsletterForm");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const email=document.getElementById("newsletterEmail").value.trim();

const message=
`New Levy Martin Newsletter Subscriber:%0A%0AEmail: ${email}`;

window.open(

`https://wa.me/244923311962?text=${message}`,

"_blank"

);

newsletter.reset();

});

}

/*=========================================
CONTACT FORM TO WHATSAPP
=========================================*/

const contact=document.getElementById("contactForm");

if(contact){

contact.addEventListener("submit",(e)=>{

e.preventDefault();

const name=document.getElementById("contactName").value;

const email=document.getElementById("contactEmail").value;

const subject=document.getElementById("contactSubject").value;

const message=document.getElementById("contactMessage").value;

const whatsapp=

`New Website Contact:%0A%0AName: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0A%0AMessage:%0A${message}`;

window.open(

`https://wa.me/27635195475?text=${whatsapp}`,

"_blank"

);

contact.reset();

});

}