export function modalDialog() {
    const openButtons = document.querySelectorAll("[data-asagaoui-target]") as NodeListOf<Element>;
    openButtons.forEach((openButton) => {
        openButton.addEventListener("click", () => {
            const targetDialog = openButton.getAttribute("data-asagaoui-target") as string;
            const dialog = document.querySelector(targetDialog) as HTMLDialogElement;
            dialog.showModal();
            dialog.addEventListener("click", e => {
                const dialogDimensions = dialog.getBoundingClientRect()
                if (
                    e.clientX < dialogDimensions.left ||
                    e.clientX > dialogDimensions.right ||
                    e.clientY < dialogDimensions.top ||
                    e.clientY > dialogDimensions.bottom
                ) {
                    dialog.close()
                }
            })
        })
    })
}
