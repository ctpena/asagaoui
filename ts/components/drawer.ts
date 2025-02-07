export function drawer(): void {
    const openButtons: NodeListOf<Element> = document.querySelectorAll("[data-aui-target]");

    openButtons.forEach((openButton: Element): void => {
        openButton.addEventListener("click", (): void => {
            const targetDrawer: string | null = openButton.getAttribute("data-aui-target");

            if (targetDrawer) {
                const drawer: HTMLElement | null = document.querySelector(targetDrawer);

                if (drawer) {
                    drawer.classList.toggle("show");
                }
            }
        });
    });
}
