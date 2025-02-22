(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    const menuLinks = document.querySelectorAll('.nav__links'); // Selecciona todos los enlaces del menú

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    // Cerrar el menú cuando se hace clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('nav__link--show');
        });
    });


})();