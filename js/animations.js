/*=========================================
    LEVY MARTIN
    ANIMATIONS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initRevealAnimations();
    initStaggerAnimations();

});

/*=========================================
    REVEAL ANIMATIONS
=========================================*/

function initRevealAnimations(){

    const elements = document.querySelectorAll(
        ".fade-up, .fade-left, .fade-right, .fade, .scale"
    );

    if(!elements.length) return;

    const observer = new IntersectionObserver(

        (entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold:0.15
        }

    );

    elements.forEach(element=>{

        observer.observe(element);

    });

}

/*=========================================
    STAGGER CARDS
=========================================*/

function initStaggerAnimations(){

    const cards=document.querySelectorAll(

        ".product-card, .journal article"

    );

    if(!cards.length) return;

    const observer=new IntersectionObserver(

        (entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    const cardsInside=entry.target.parentElement.children;

                    [...cardsInside].forEach((card,index)=>{

                        setTimeout(()=>{

                            card.classList.add("show");

                        },index*120);

                    });

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold:.15
        }

    );

    cards.forEach(card=>{

        observer.observe(card);

    });

}

/*=========================================
    HERO PARALLAX
=========================================*/

const hero=document.querySelector(".hero-image img");

window.addEventListener("scroll",()=>{

    if(!hero) return;

    const offset=window.scrollY;

    hero.style.transform=`translateY(${offset*0.18}px) scale(1.08)`;

});

/*=========================================
    NAVBAR FADE
=========================================*/

const navbar=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>120){

        navbar.style.opacity="0.98";

    }

    else{

        navbar.style.opacity="1";

    }

});

/*=========================================
    BUTTON HOVER
=========================================*/

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-4px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});

/*=========================================
    IMAGE PARALLAX
=========================================*/

const featured=document.querySelector(".featured img");

window.addEventListener("scroll",()=>{

    if(!featured) return;

    const rect=featured.getBoundingClientRect();

    featured.style.transform=

    `translateY(${rect.top*0.03}px) scale(1.04)`;

});