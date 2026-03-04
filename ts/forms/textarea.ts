export class Textarea extends HTMLTextAreaElement {
    private readonly counter: HTMLElement;

    constructor() {
        super();
        this.counter = document.createElement('small');
        this.counter.className = 'textarea-counter';
    }

    connectedCallback(): void {
        this.after(this.counter);

        this.addEventListener('input', () => this.updateCount());

        this.updateCount();
    }

    private updateCount(): void {
        const currentLength = this.value.length;
        const maxAttr = this.getAttribute('max');

        const maxLength = maxAttr ? parseInt(maxAttr, 10) : Infinity;
        const displayMax = isFinite(maxLength) ? maxLength.toString() : '∞';

        this.counter.textContent = `${currentLength} / ${displayMax}`;
    }

    disconnectedCallback(): void {
        this.counter.remove();
    }
}

if (!customElements.get('au-textarea')) {
    customElements.define('au-textarea', Textarea, { extends: 'textarea' });
}
