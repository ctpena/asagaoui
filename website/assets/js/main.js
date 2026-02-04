window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.custom-side-menu nav');
    if (!menu) return;

    const savedScrollTop = sessionStorage.getItem('menu-scroll-pos');
    if (savedScrollTop !== null) {
        menu.scrollTop = parseInt(savedScrollTop, 10);
    }

    menu.addEventListener('scroll', () => {
        sessionStorage.setItem('menu-scroll-pos', menu.scrollTop);
    });
});
