class CodeSnippet extends HTMLElement {
    static observedAttributes = ['lang', 'preview'];
    connectedCallback() {
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
            {
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

function drawer() {
    const openButtons = document.querySelectorAll("[data-aui-target]");
    openButtons.forEach((openButton) => {
        openButton.addEventListener("click", () => {
            const targetDrawer = openButton.getAttribute("data-aui-target");
            if (targetDrawer) {
                const drawer = document.querySelector(targetDrawer);
                if (drawer) {
                    drawer.classList.toggle("show");
                }
            }
        });
    });
}

/*
==================================================
AsagaoUI
Written in TypeScript, compiled to JavaScript
==================================================
*/
function initAsagaoUI() {
    drawer();
}
document.addEventListener('DOMContentLoaded', initAsagaoUI);
//# sourceMappingURL=asagaoui.js.map
