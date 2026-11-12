+++
title = 'Search Dialog'
summary = ''
weight = 258
+++

This is a search dialog that uses multiple components.

```html {preview="flex"}
<button class="search-iconbtn" type="button" command="show-modal" commandfor="search-dialog">
    <i class="search-icon"></i>
    SEARCH
</button>
<dialog id="search-dialog" class="search-dialog">
    <div class="search-dialog-header">
        <h2 class="fs-22 fw-b" style="line-height: 1.5;">サイト内検索</h2>
        <button class="btn btn-outline g-2" type="button" commandfor="search-dialog" command="close"><i class="hamburger-icon close"></i>閉じる</button>
    </div>
    <form class="search-dialog-form">
        <label class="search-dialog-form-label" for="q">キーワード</label>
        <div class="search-box">
            <div class="search-box-fields">
                <label class="search-box-label">
                    <i class="search-box-search-icon ail-search"></i>
                    <input id="q" class="search-box-input" type="search" name="q" autofocus style="border-radius: 8px;">
                </label>
            </div>
            <button class="btn btn-fill is-lg" type="button">検索</button>
        </div>
    </form>
    <div class="search-dialog-body">
        <p class="search-dialog-result-count">0件の結果</p>
        <div id="search-dialog-result-area">
            <!--
            <div class="search-dialog-result-empty">
                <h3>該当する情報が見つかりませんでした</h3>
                <p>次の方法をお試しください。</p>
                <ul>
                    <li>キーワードの表記を変える(例:「申込」→「申請」)</li>
                    <li>キーワードの数を減らす</li>
                    <li>カテゴリを「すべて」にする</li>
                </ul>
            </div>
            -->
            <ul class="search-dialog-result">
                <li>
                    
                </li>
            </ul>
        </div>
    </div>
</dialog>
```
