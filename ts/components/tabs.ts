const initTabs = (): void => {
    const tabItems = document.querySelectorAll<HTMLAnchorElement>(".tab-item");
    const tabsArea = document.querySelector<HTMLElement>(".tabs-area");
    if (!tabItems.length || !tabsArea) return;

    const activateTab = (tab: HTMLAnchorElement): void => {
        const targetId = tab.getAttribute("href")?.slice(1);
        if (!targetId) return;
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        tabItems.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        const areaRect = tabsArea.getBoundingClientRect();
        const elRect = targetEl.getBoundingClientRect();
        tabsArea.scrollLeft += elRect.left - areaRect.left;
    };

    const handleClick = (e: MouseEvent): void => {
        e.preventDefault();
        activateTab(e.currentTarget as HTMLAnchorElement);
    };

    tabItems.forEach((tab) => {
        tab.addEventListener("click", handleClick);
    });

    const firstTab = tabItems[0];
    if (firstTab && !document.querySelector(".tab-item.active")) {
        firstTab.classList.add("active");
    }
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTabs);
} else {
    initTabs();
}
