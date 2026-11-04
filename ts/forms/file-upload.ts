class FileUpload extends HTMLElement {
    constructor() {
        super();
    }
}
if (!customElements.get("file-upload")) {
    customElements.define("file-upload", FileUpload);
}
