export function carousel() {
    // Get all carousels
    const carousels: NodeListOf<HTMLElement> = document.querySelectorAll('.carousel');
    // get item
    carousels.forEach(function (carousel) {
        const prevButton: HTMLButtonElement | null = carousel.querySelector('.carousel-control-prev');
        const nextButton: HTMLButtonElement | null = carousel.querySelector('.carousel-control-next');
        const items = carousel.querySelectorAll('.carousel-item');

        function findActiveItem() {
            for (let i = 0; i < items.length; i++) {
                if (items[i].classList.contains('active')) {
                    return i;
                }
            }
            return -1;
        }

        prevButton?.addEventListener('click', function () {
            const activeIndex = findActiveItem();
            if (activeIndex > 0) {
                items[activeIndex].classList.remove('active');
                items[activeIndex - 1].classList.add('active');
            } else {
                items[activeIndex].classList.remove('active');
                items[items.length - 1].classList.add('active');
            }
        });

        nextButton?.addEventListener('click', function () {
            const activeIndex = findActiveItem();
            if (activeIndex < items.length - 1) {
                items[activeIndex].classList.remove('active');
                items[activeIndex + 1].classList.add('active');
            } else {
                items[activeIndex].classList.remove('active');
                items[0].classList.add('active');
            }
        });
    })
}
