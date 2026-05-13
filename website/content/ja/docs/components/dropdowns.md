+++
title = 'ドロップダウン'
summary = 'コンテンツをオーバーレイ表示することができるUI'
weight = 125
+++

メニューリストなどのコンポーネントをユーザのクリックでオーバーレイ表示することができます。

[Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)を用いて実装されています。[CSS anchor positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning)によって位置を計算しますが、`anchor-name`を指定するためにJSを使用します。

## idの命名規則

ドロップダウンの`anchor-name`を自動的に付与するには、dropdownのidを`au-dropdown-{任意の文字列}`の形式にしてください。

### 例

- `au-dropdown-0`
- `au-dropdown-main`

## プレビュー

```html {preview="true"}
<ul class="globalmenu" style="height: 55px;">
    <li class="globalmenu-item">
        <button popovertarget="au-dropdown-0" class="globalmenu-link">リソース</button>
        <div class="dropdown" id="au-dropdown-0" popover>
            <ul class="menulist">
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目1</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目2</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目3</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目4</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目5</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目6</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目7</a></li>
            </ul>
        </div>
    </li>
    <li class="globalmenu-item">
        <button popovertarget="au-dropdown-1" class="globalmenu-link">リソース</button>
        <div class="dropdown" id="au-dropdown-1" popover>
            <ul class="menulist">
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目1</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目2</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目3</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目4</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目5</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目6</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目7</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">メニュー項目8</a></li>
            </ul>
        </div>
    </li>
</ul>
```
