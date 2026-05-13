+++
title = 'モバイルメニュー'
summary = 'タップ操作が前提のメニュー'
weight = 210
+++

モバイルデバイスなど、タッチスクリーンでのタップ操作を考慮したメニュー用コンポーネントで、ハンバーガーメニューボタン、ドロワーとともに使用されます。


```html {preview="true"}
<ul class="mobilemenu" style="max-width: 320px;">
    <li class="mobilemenu-item"><a class="mobilemenu-link" href="">メニューアイテム</a></li>
    <li class="mobilemenu-item"><a class="mobilemenu-link" href="">メニューアイテム</a></li>
    <li class="mobilemenu-item">
        <details class="mobilemenu-accordion" open>
            <summary class="mobilemenu-accordion-header">セクションタイトル</summary>
            <ul class="mobilemenu">
                <li class="mobilemenu-item"><a class="mobilemenu-link" href="">メニューアイテム</a></li>
                <li class="mobilemenu-item"><a class="mobilemenu-link" href="">メニューアイテム</a></li>
                <li class="mobilemenu-item"><a class="mobilemenu-link" href="">メニューアイテム</a></li>
                <li class="mobilemenu-item"><a class="mobilemenu-link" href="">メニューアイテム</a></li>
                <li class="mobilemenu-item"><a class="mobilemenu-link" href="">メニューアイテム</a></li>
            </ul>
        </details>
    </li>
    <li class="mobilemenu-item"><a class="mobilemenu-link" href="">メニューアイテム</a></li>
</ul>
```
