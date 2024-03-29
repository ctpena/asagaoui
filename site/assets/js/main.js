//console.log('This site was generated by Hugo.');
document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.href;
    const menuLinks = document.querySelectorAll('a.menulist-link');
    menuLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    //
    function toggleDrawerClass() {
        const element = document.querySelector('.doc-nav');
        if (window.innerWidth >= 992) {
            element.classList.remove('drawer', 'drawer-left');
        } else {
            element.classList.add('drawer', 'drawer-left');
        }
    }

    window.addEventListener('resize', toggleDrawerClass);
    toggleDrawerClass();
});
