+++
title = '検索ダイアログ'
summary = ''
weight = 258
+++

複数のコンポーネントを利用した検索ダイアログです。

```html {preview="flex"}
<button class="search-iconbtn" type="button" command="show-modal" commandfor="search-dialog">
    <i class="search-icon"></i>
    検索
</button>
<dialog id="search-dialog" class="search-dialog">
    <div class="search-dialog-header">
        <h2 class="search-dialog-title">サイト内検索</h2>
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
        <ul class="search-dialog-suggest-list">
            <li class="search-dialog-suggest-title">よくある検索：</li>
            <li><button class="btn is-sm btn-outline" type="button"></button></li>
            <li><button class="btn is-sm btn-outline" type="button"></button></li>
        </ul>
        <template>
            <div class="search-dialog-result-empty">
                <h3>該当する情報が見つかりませんでした</h3>
                <p>次の方法をお試しください。</p>
                <ul class="list">
                    <li>キーワードの表記を変える(例:「申込」→「申請」)</li>
                    <li>キーワードの数を減らす</li>
                </ul>
            </div>
        </template>
        <template>
            <p class="search-dialog-result-count"><span>0</span>件の結果</p>
            <ul class="search-dialog-result">
                <li>
                    <a class="search-dialog-result-link" href="">マイナンバーカードの申請方法</a>
                    <p class="search-dialog-result-desc">マイナンバーカードの申請に必要なものと、オンラインでの申請手順、受け取りまでの流れを説明します。</p>
                </li>
            </ul>
        </template>
    </div>
</dialog>
```
