+++
title = 'ドロワー'
summary = '画面の端からスライドしてくるコンテンツを表示するのに使用するUI'
weight = 120
+++

画面の端からスライドしてくるコンテンツを表示するのに使用するUIです。モバイルメニューなどの実装に最適です。

[ハンバーガーメニューボタン](/docs/components/hamburger-menu-button/)を使用するとメニューのアイコンの実装が簡単になります。


```html {preview="true"}
<button class="hamburger-iconbtn" type="button" command="show-modal" commandfor="divider-dialog-menu"><i class="hamburger-icon"></i>メニュー</button>
<dialog id="divider-dialog-menu" class="drawer">
    <div class="drawer-header d-flex justify-end">
        <button class="hamburger-btn" type="button" command="close" commandfor="divider-dialog-menu"><i class="hamburger-icon close"></i>
            閉じる
        </button>
    </div>
    <div class="drawer-body">
        <div>ここに好きなコンポーネントを表示</div>
    </div>
    <div class="drawer-footer"></div>
</dialog>
```
