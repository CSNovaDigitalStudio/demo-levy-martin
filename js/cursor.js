/*=========================================
    LEVY MARTIN
    CUSTOM CURSOR
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const cursor = document.querySelector(".cursor");

    // Don't use custom cursor on touch devices
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) {
        if (cursor) cursor.style.display = "none";
        return;
    }

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    /*=========================================
        MOUSE POSITION
    =========================================*/

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

    });

    /*=========================================
        SMOOTH FOLLOW
    =========================================*/

    function animateCursor() {

        currentX += (mouseX - currentX) * 0.18;
        currentY += (mouseY - currentY) * 0.18;

        cursor.style.left = currentX + "px";
        cursor.style.top = currentY + "px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

    /*=========================================
        HOVER EFFECT
    =========================================*/

    const hoverElements = document.querySelectorAll(

        "a, button, .btn, .product-card, img, .journal article"

    );

    hoverElements.forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.classList.add("active");

        });

        item.addEventListener("mouseleave", () => {

            cursor.classList.remove("active");

        });

    });

    /*=========================================
        CLICK EFFECT
    =========================================*/

    document.addEventListener("mousedown", () => {

        cursor.style.transform = "translate(-50%, -50%) scale(.7)";

    });

    document.addEventListener("mouseup", () => {

        cursor.style.transform = "translate(-50%, -50%) scale(1)";

    });

    /*=========================================
        CURSOR HIDE
    =========================================*/

    document.addEventListener("mouseleave", () => {

        cursor.style.opacity = "0";

    });

    document.addEventListener("mouseenter", () => {

        cursor.style.opacity = "1";

    });

});