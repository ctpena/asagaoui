import Prism from 'prismjs';
// @ts-ignore
import 'prismjs/components/prism-typescript';
// @ts-ignore
import 'prismjs/components/prism-css';
// @ts-ignore
import 'prismjs/components/prism-markup';
// @ts-ignore
import 'prismjs/components/prism-bash';
// @ts-ignore
import 'prismjs/components/prism-json';
// @ts-ignore
import 'prismjs/components/prism-scss';

export class CodeSnippet extends HTMLElement {
    static observedAttributes = ["lang", "preview"];

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.initCopyButton();
    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    private render() {
        const lang = this.getAttribute("lang") || "html";
        const previewAttr = this.getAttribute("preview");

        const langLabel = this.querySelector(".codesnippet-lang");
        if (langLabel) langLabel.textContent = lang.toUpperCase();

        const codeElement = this.querySelector<HTMLElement>(".codesnippet-code code");
        if (codeElement) {
            codeElement.className = `language-${lang}`;
            Prism.highlightElement(codeElement);
        }

        const previewArea = this.querySelector(".codesnippet-preview");
        if (previewArea) {
            Array.from(previewArea.classList).forEach(cls => {
                if (cls.startsWith('codesnippet-preview-')) {
                    previewArea.classList.remove(cls);
                }
            });
            if (previewAttr && previewAttr !== "true") {
                previewArea.classList.add(`codesnippet-preview-${previewAttr}`);
            }
        }
    }

    private initCopyButton() {
        const copyBtn = this.querySelector(".codesnippet-copy-btn");
        const codeElement = this.querySelector(".codesnippet-code code");

        if (copyBtn && codeElement) {
            copyBtn.addEventListener("click", async () => {
                const text = codeElement.textContent || "";
                try {
                    await navigator.clipboard.writeText(text);

                    const icon = copyBtn.querySelector("i");
                    if (icon) {
                        icon.classList.replace("ail-copy", "ail-check");
                        copyBtn.classList.add("is-copied");
                        setTimeout(() => {
                            icon.classList.replace("ail-check", "ail-copy");
                            copyBtn.classList.remove("is-copied");
                        }, 500);
                    }
                } catch (err) {
                    console.error("Copy failed", err);
                }
            });
        }
    }

}

if (!customElements.get("code-snippet")) {
    customElements.define("code-snippet", CodeSnippet);
}
