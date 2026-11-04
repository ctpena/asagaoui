+++
title = 'File Upload'
summary = 'File Upload'
+++

File Upload

```html {preview="true"}
<file-upload>
    <div class="file-upload-area">
        <div class="file-upload-btn-area">
            <label class="btn btn-outline">
                <input class="file-upload-input" type="file" multiple />
                Select a file
            </label>
            <p>Or drag and drop into this area</p>
        </div>
        <label class="file-upload-option checkbox is-md">
            <input class="checkbox-input" type="checkbox">
            Expand the drag-and-drop area to the entire browser window
        </label>
    </div>
    <p class="file-upload-empty-message">No files have been selected</p>
</file-upload>
```