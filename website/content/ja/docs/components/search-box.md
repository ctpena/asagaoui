+++
title = '検索ボックス'
summary = 'サイト内の検索やコンテンツの検索に用いるUI'
weight = 250
+++

サイト内の検索やコンテンツの検索に用いるUI

```html {preview="true"}
<div class="search-box">
    <div class="search-box-fields">
        <label class="search-box-select">
            <span>検索対象</span>
            <select name="scope">
                <button>
                    <selectedcontent></selectedcontent>
                </button>
                <option value="">すべて</option>
                <option value="images">画像</option>
                <option value="files">ファイル</option>
                <option value="map">地図</option>
                <option value="videos">動画</option>
            </select>
            <i class="search-box-arrow-icon ail-arrow_down"></i>
        </label>
        <label class="search-box-label">
            <i class="search-box-search-icon ail-search"></i>
            <input class="search-box-input" type="search" name="q">
        </label>
    </div>
    <button class="btn btn-fill is-lg" type="submit">検索</button>
</div>
```
