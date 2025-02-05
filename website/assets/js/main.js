class CodeSnippet extends HTMLElement {
    static observedAttributes = ['lang', 'preview'];

    connectedCallback() {
        // Fixme Is this an appropriate process?
        setTimeout(() => {

            const content = this.innerHTML.trim();
            // FIXme Debug
            /*
            console.log('=== Code Snippet Details ===');
            console.log('Content:', content);
            console.log('Language:', this.getAttribute('lang'));
            console.log('Preview:', this.getAttribute('preview'));
            console.log('========================');
            */
            // Clear the original content
            this.innerHTML = '';

            if (this.getAttribute('preview') !== null) {
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

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== null) {
            console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
        }
    }
}

customElements.define('code-snippet', CodeSnippet);
