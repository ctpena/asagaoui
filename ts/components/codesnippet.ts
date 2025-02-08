class CodeSnippet extends HTMLElement {
    static readonly observedAttributes: string[] = ['lang', 'preview'];

    connectedCallback(): void {
        // Fixme Is this an appropriate process?
        setTimeout(() => {

            const content = this.innerHTML.trim();

            // Clear the original content
            this.innerHTML = '';

            // Only show preview if preview attribute is "true"
            const showPreview = this.getAttribute('preview') === 'true';
            if (showPreview) {
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
}

customElements.define('code-snippet', CodeSnippet);
