/* ==========================================
   LEVY MARTIN NAVIGATION — FIXED
========================================== */
(() => {
    function initNavigation(){
        const header = document.querySelector('header');
        const menuButton = document.querySelector('.menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-menu a');
        const languageSwitcher = document.querySelector('.language-switcher');

        if(!header) return;

        function updateHeaderState(){
            header.classList.toggle('scrolled', window.scrollY > 70);
        }

        function closeMenu(){
            if(!menuButton || !mobileMenu) return;
            menuButton.classList.remove('active');
            mobileMenu.classList.remove('active');
            header.classList.remove('menu-open');
            menuButton.setAttribute('aria-expanded','false');
            document.body.style.overflow='';
        }

        function openMenu(){
            if(!menuButton || !mobileMenu) return;
            menuButton.classList.add('active');
            mobileMenu.classList.add('active');
            header.classList.add('menu-open');
            menuButton.setAttribute('aria-expanded','true');
            document.body.style.overflow='hidden';
            languageSwitcher?.classList.remove('open');
            languageSwitcher?.querySelector('.language-current')?.setAttribute('aria-expanded','false');
        }

        if(menuButton && mobileMenu){
            menuButton.setAttribute('type','button');
            menuButton.setAttribute('aria-label','Open navigation menu');
            menuButton.setAttribute('aria-expanded','false');

            menuButton.addEventListener('click',(event)=>{
                event.preventDefault();
                event.stopPropagation();
                mobileMenu.classList.contains('active') ? closeMenu() : openMenu();
            });

            mobileLinks.forEach(link=>link.addEventListener('click',closeMenu));

            document.addEventListener('keydown',(event)=>{
                if(event.key==='Escape') closeMenu();
            });

            window.addEventListener('resize',()=>{
                if(window.innerWidth > 992) closeMenu();
            });
        }

        window.addEventListener('scroll',updateHeaderState,{passive:true});
        updateHeaderState();
    }

    if(document.readyState==='loading'){
        document.addEventListener('DOMContentLoaded',initNavigation);
    }else{
        initNavigation();
    }
})();
