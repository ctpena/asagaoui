class CalendarPopover {
    #yearSelect: HTMLSelectElement;
    readonly #minYear: number;
    readonly #maxYear: number;
    #prevBtn: HTMLButtonElement;
    #nextBtn: HTMLButtonElement;
    #monthLabel: HTMLParagraphElement;
    #cellTemplate: HTMLTemplateElement;
    #tbody: HTMLTableSectionElement;
    #monthList: HTMLDataListElement;

    #currentYear: number;
    #currentMonth: number;

    #selectedDate: Date | null = null;

    #clearBtn: HTMLButtonElement;
    #todayBtn: HTMLButtonElement;

    constructor(root: HTMLElement) {
        const yearSelect = root.querySelector<HTMLSelectElement>(".calendar-controls select");
        const navButtons = root.querySelectorAll<HTMLButtonElement>(".calendar-nav-btn");
        const monthLabel = root.querySelector<HTMLParagraphElement>(".calendar-nav-dp");
        const tbody = root.querySelector<HTMLTableSectionElement>(".calendar-table-body");
        const cellTemplate = root.querySelector<HTMLTemplateElement>(".calendar-table-body template");
        const footerButtons = root.querySelectorAll<HTMLButtonElement>(".calendar-footer .btn");
        const monthList = root.querySelector<HTMLDataListElement>(".calendar-nav datalist");

        if (
            !yearSelect ||
            navButtons.length !== 2 ||
            !monthLabel ||
            !monthList ||
            !tbody ||
            !cellTemplate ||
            footerButtons.length !== 2
        ) {
            throw new Error("CalendarPopover");
        }

        this.#monthList = monthList;

        this.#yearSelect = yearSelect;

        const yearValues = Array.from(this.#yearSelect.options)
            .map((opt) => Number(opt.value))
            .filter((n) => Number.isFinite(n));

        this.#minYear = Math.min(...yearValues);
        this.#maxYear = Math.max(...yearValues);

        const today = new Date();

        this.#currentYear = today.getFullYear();
        this.#currentMonth = today.getMonth();

        if (yearValues.includes(this.#currentYear)) {
            this.#yearSelect.value = String(this.#currentYear);
        } else {
            this.#currentYear = this.#minYear;
            this.#yearSelect.value = String(this.#currentYear);
        }

        this.#prevBtn = navButtons[0]!;
        this.#nextBtn = navButtons[1]!;

        this.#monthLabel = monthLabel;
        this.#tbody = tbody;
        this.#cellTemplate = cellTemplate;

        this.#prevBtn.addEventListener("click", () => {
            this.#moveMonth(-1);
        });

        this.#nextBtn.addEventListener("click", () => {
            this.#moveMonth(1);
        });

        this.#yearSelect.addEventListener("change", () => {
            this.#changeYear();
        });

        this.#renderCalendar();

        this.#clearBtn = footerButtons[0]!;
        this.#todayBtn = footerButtons[1]!;

        this.#clearBtn.addEventListener("click", () => {
            this.#clearDate();
        });

        this.#todayBtn.addEventListener("click", () => {
            this.#selectToday();
        });
    }

    #moveMonth(diff: number) {
        const date = new Date(
            this.#currentYear,
            this.#currentMonth + diff,
            1
        );

        const year = date.getFullYear();
        const month = date.getMonth();

        if (
            year < this.#minYear ||
            year > this.#maxYear
        ) {
            return;
        }

        this.#currentYear = year;
        this.#currentMonth = month;

        this.#yearSelect.value = String(year);

        this.#renderCalendar();
    }

    #changeYear() {
        const year = Number(this.#yearSelect.value);

        if (!Number.isFinite(year)) {
            return;
        }

        if (
            year < this.#minYear ||
            year > this.#maxYear
        ) {
            return;
        }

        this.#currentYear = year;

        this.#renderCalendar();
    }

    #renderCalendar() {
        const year = this.#currentYear;
        const month = this.#currentMonth;

        this.#tbody.replaceChildren();

        this.#monthLabel.textContent = this.#getMonthLabel(month);

        const firstDay = new Date(year, month, 1).getDay();

        const lastDate =
            new Date(year, month + 1, 0).getDate();

        let row = document.createElement("tr");

        for (let i = 0; i < firstDay; i++) {
            row.append(document.createElement("td"));
        }

        for (let date = 1; date <= lastDate; date++) {
            const cell = this.#cellTemplate.content.cloneNode(true) as DocumentFragment;

            const button = cell.querySelector<HTMLButtonElement>(".calendar-date")!;
            button.textContent = String(date);

            const isSelected =
                this.#selectedDate !== null &&
                this.#selectedDate.getFullYear() === year &&
                this.#selectedDate.getMonth() === month &&
                this.#selectedDate.getDate() === date;

            if (isSelected) {
                button.classList.add("active");
            }

            button.addEventListener("click", () => {
                this.#selectDate(year, month, date);
            });

            row.append(cell);

            if (row.children.length === 7) {
                this.#tbody.append(row);
                row = document.createElement("tr");
            }
        }

        if (row.children.length > 0) {
            while (row.children.length < 7) {
                row.append(document.createElement("td"));
            }

            this.#tbody.append(row);
        }

        this.#updateNavigation();
    }

    #selectDate(year: number, month: number, date: number) {
        this.#selectedDate = new Date(year, month, date);

        this.#renderCalendar();
    }

    #selectToday() {
        const today = new Date();

        const year = today.getFullYear();
        const month = today.getMonth();
        const date = today.getDate();

        if (
            year < this.#minYear ||
            year > this.#maxYear
        ) {
            return;
        }

        this.#currentYear = year;
        this.#currentMonth = month;
        this.#selectedDate = new Date(year, month, date);

        this.#yearSelect.value = String(year);

        this.#renderCalendar();
    }

    #clearDate() {
        this.#selectedDate = null;

        this.#renderCalendar();
    }

    #updateNavigation() {
        this.#prevBtn.disabled =
            this.#currentYear === this.#minYear &&
            this.#currentMonth === 0;

        this.#nextBtn.disabled =
            this.#currentYear === this.#maxYear &&
            this.#currentMonth === 11;
    }

    #getMonthLabel(month: number): string {
        const value = String(month + 1);

        const option = Array.from(this.#monthList.options)
            .find((option) => option.value === value);

        return option?.textContent?.trim() ?? value;
    }
}

const calendarPopovers = document.querySelectorAll<HTMLElement>(".calendar-popover");

calendarPopovers.forEach((root) => {
    new CalendarPopover(root);
});
