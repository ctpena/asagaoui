import Prism from 'prismjs';
// Import Prism CSS theme
import './codesnippet.css';
// Import common languages
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-scss';

class CodeSnippet extends HTMLElement {
    static readonly observedAttributes: string[] = ['lang', 'preview'];

    connectedCallback(): void {
        // Use setTimeout to ensure the component is fully rendered
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
            const language = this.getAttribute('lang') || 'html';
            langSpan.textContent = language.toUpperCase();
            headerDiv.appendChild(langSpan);

            const codeDiv = document.createElement('div');
            codeDiv.classList.add('codesnippet-code');

            const pre = document.createElement('pre');
            const code = document.createElement('code');
            code.textContent = content;

            // Add the appropriate language class for Prism.js
            if (language) {
                code.classList.add(`language-${language.toLowerCase()}`);
            }

            pre.appendChild(code);
            codeDiv.appendChild(pre);
            areaDiv.appendChild(headerDiv);
            areaDiv.appendChild(codeDiv);
            this.appendChild(areaDiv);

            // Apply syntax highlighting with Prism.js
            Prism.highlightElement(code);
        }, 0);
    }
}

customElements.define('code-snippet', CodeSnippet);
