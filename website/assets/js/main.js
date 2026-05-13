const savedScrollTop = sessionStorage.getItem('menu-scroll-pos');
if (savedScrollTop) {
    const restore = () => {
        const menu = document.querySelector('.custom-side-menu');
        if (menu) {
            menu.scrollTop = parseInt(savedScrollTop, 10);
            return true;
        }
    };
    restore() || document.addEventListener('DOMContentLoaded', restore, { once: true });
}

addEventListener('beforeunload', () => {
    const menu = document.querySelector('.custom-side-menu');
    menu ? sessionStorage.setItem('menu-scroll-pos', menu.scrollTop)
        : sessionStorage.removeItem('menu-scroll-pos');
});
