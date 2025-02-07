class CodeSnippet extends HTMLElement {
    static readonly observedAttributes: string[] = ['lang', 'preview'];

    private isAttributePresent(value: string | null): value is string {
        return value !== null;
    }

    connectedCallback(): void {
        // Fixme Is this an appropriate process?
        setTimeout(() => {

            const content = this.innerHTML.trim();

            // Clear the original content
            this.innerHTML = '';

            if (this.hasAttribute('preview')) {
                const previewDiv = document.createElement('div');
                previewDiv.classList.add('codesnippet-preview');
                previewDiv.innerHTML = content;
                this.appendChild(previewDiv);
            }

            const areaDiv = document.createElement('div');
            areaDiv.classList.add('codesnippet-area');

            const headerDiv = document.createElement('div');
            headerDiv.classList.add('codesnippet-header');

            const langSpan = document.createElement('span');
            langSpan.classList.add('codesnippet-lang');
            const language = this.getAttribute('lang') || 'HTML';
            langSpan.textContent = language;
            headerDiv.appendChild(langSpan);

            const codeDiv = document.createElement('div');
            codeDiv.classList.add('codesnippet-code');

            const pre = document.createElement('pre');
            const code = document.createElement('code');
            code.textContent = content;

            if (language) {
                code.classList.add(`language-${language.toLowerCase()}`);
            }

            pre.appendChild(code);
            codeDiv.appendChild(pre);
            areaDiv.appendChild(headerDiv);
            areaDiv.appendChild(codeDiv);
            this.appendChild(areaDiv);
        }, 0);
    }

    attributeChangedCallback(
        name: string,
        oldValue: string | null,
        newValue: string | null
    ): void {
        if (this.isAttributePresent(oldValue)) {
            console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'code-snippet': CodeSnippet;
    }
}

customElements.define('code-snippet', CodeSnippet);
