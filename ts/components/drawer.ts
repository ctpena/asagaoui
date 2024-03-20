export function drawer() {
    const openButtons = document.querySelectorAll("[data-asagaoui-target]") as NodeListOf<Element>;
    openButtons.forEach((openButton) => {
        openButton.addEventListener("click", () => {
            const targetDrawer = openButton.getAttribute("data-asagaoui-target") as string;
            const drawer = document.querySelector(targetDrawer) as HTMLElement;
            if (drawer) {
                drawer.classList.toggle("show");
            }
        });
    });
}