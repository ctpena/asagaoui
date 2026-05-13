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
    static observedAttributes = ["lang", "preview", "highlight"];
    private _observer: MutationObserver | null = null;
    private _initialized = false;

    constructor() {
        super();
    }

    connectedCallback() {
        if (this.querySelector(".codesnippet-code code")) {
            this._init();
        } else {
            this._waitForChildren();
        }
    }

    disconnectedCallback() {
        this._observer?.disconnect();
        this._observer = null;
        this._initialized = false;
    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        if (oldValue !== newValue && this._initialized) {
            this.render();
        }
    }

    private _waitForChildren() {
        this._observer = new MutationObserver(() => {
            if (this.querySelector(".codesnippet-code code")) {
                this._observer?.disconnect();
                this._observer = null;
                this._init();
            }
        });
        this._observer.observe(this, {childList: true, subtree: true});
    }

    private _init() {
        if (this._initialized) return;
        this._initialized = true;
        this.render();
        this.initCopyButton();
    }

    private get isHighlightEnabled(): boolean {
        const attr = this.getAttribute("highlight");
        return attr !== "false";
    }

    private render() {
        const lang = this.getAttribute("lang") || "html";
        const previewAttr = this.getAttribute("preview");

        const langLabel = this.querySelector(".codesnippet-lang");
        if (langLabel) langLabel.textContent = lang.toUpperCase();

        const codeElement = this.querySelector<HTMLElement>(".codesnippet-code code");
        if (codeElement) {
            if (this.isHighlightEnabled) {
                codeElement.className = `language-${lang}`;
                delete (codeElement as any)._prismHighlighted;
                Prism.highlightElement(codeElement);
            } else {
                codeElement.className = "";
            }
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
