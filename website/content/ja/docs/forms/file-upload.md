+++
title = 'ファイルアップロード'
summary = 'ファイルアップロード'
+++

ファイルアップロード

```html {preview="true"}
<file-upload>
    <div class="file-upload-area">
        <div class="file-upload-btn-area">
            <label class="btn btn-outline">
                <input class="file-upload-input" type="file" multiple />
                ファイル選択
            </label>
            <p>または、このエリア内にドラッグ＆ドロップ</p>
        </div>
        <label class="file-upload-option checkbox is-md">
            <input class="checkbox-input" type="checkbox">
            ドラッグ＆ドロップの範囲をこのブラウザウィンドウ全体に広げる
        </label>
    </div>
    <p class="file-upload-empty-message">ファイルが選択されていません</p>
</file-upload>
```
