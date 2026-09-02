const SELECTOR_ROOT = '.date-picker';
const SELECTOR_HIDDEN = '.date-picker-value';
const SELECTOR_INPUT = '.date-picker-input';

const ENHANCED_CLASS = 'date-picker-js';

interface DatePickerParts {
    hidden: HTMLInputElement;
    year: HTMLInputElement;
    month: HTMLInputElement;
    day: HTMLInputElement;
}

function resolveParts(root: HTMLFieldSetElement): DatePickerParts | null {
    const hidden = root.querySelector<HTMLInputElement>(SELECTOR_HIDDEN);
    const year = root.querySelector<HTMLInputElement>(`.date-picker-year ${SELECTOR_INPUT}`);
    const month = root.querySelector<HTMLInputElement>(`.date-picker-month ${SELECTOR_INPUT}`);
    const day = root.querySelector<HTMLInputElement>(`.date-picker-day ${SELECTOR_INPUT}`);

    if (!hidden || !year || !month || !day) return null;
    return { hidden, year, month, day };
}

function sync(parts: DatePickerParts): void {
    const { year, month, day, hidden } = parts;

    const filled =
        year.value.length === year.maxLength &&
        month.value.length === month.maxLength &&
        day.value.length === day.maxLength;

    const valid =
        year.validity.valid &&
        month.validity.valid &&
        day.validity.valid;

    hidden.value = filled && valid
        ? `${year.value}-${month.value}-${day.value}`
        : '';
}

function attach(parts: DatePickerParts): void {
    for (const input of [parts.year, parts.month, parts.day]) {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^0-9]/g, '').slice(0, input.maxLength);
            sync(parts);
        });
    }
    sync(parts);
}

function initAll(root: ParentNode = document): void {
    root.querySelectorAll<HTMLFieldSetElement>(SELECTOR_ROOT).forEach((fieldset) => {
        if (fieldset.classList.contains(ENHANCED_CLASS)) return;

        const parts = resolveParts(fieldset);
        if (!parts) return;

        attach(parts);
        fieldset.classList.add(ENHANCED_CLASS);
    });
}

initAll();

export { initAll as initDatePickers };
