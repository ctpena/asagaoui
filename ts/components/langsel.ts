import {computePosition} from "@floating-ui/dom";

export function langSel() {
    const buttons = document.querySelectorAll('.langsel-btn') as NodeListOf<HTMLElement>;
    const tooltips = document.querySelectorAll('.langsel-menu') as NodeListOf<HTMLElement>;
    tooltips.forEach(tooltip => {
        tooltip.style.display = 'none';
    });

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const tooltip = tooltips[index];
            const newDisplay = tooltip.style.display === 'none' ? 'flex' : 'none';
            tooltip.style.display = newDisplay;

            if (newDisplay === 'flex') {
                computePosition(button, tooltip).then(({x, y}) => {
                    Object.assign(tooltip.style, {
                        left: `${x}px`,
                        top: `${y}px`,
                    });
                });
            }
        });
    });
}
