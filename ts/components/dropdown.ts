const isAuDropdownId = (id: string): boolean =>
    /^au-dropdown-.+$/.test(id);

const assignAnchor = (trigger: HTMLElement, popover: HTMLElement): void => {
    const anchorName = `--${popover.id}`;
    trigger.style.anchorName = anchorName;
    popover.style.positionAnchor = anchorName;
};

const initDropdowns = (): void => {
    document.querySelectorAll<HTMLElement>("[popovertarget]").forEach((trigger) => {
        const targetId = trigger.getAttribute("popovertarget");
        if (!targetId) return;

        if (!isAuDropdownId(targetId)) return;

        const popover = document.getElementById(targetId);
        if (!popover) return;

        assignAnchor(trigger, popover);
    });
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDropdowns);
} else {
    initDropdowns();
}
