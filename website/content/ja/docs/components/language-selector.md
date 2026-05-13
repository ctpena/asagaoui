+++
title = 'ランゲージセレクター'
summary = 'コンテンツの言語を効果的に選択することが可能となるUI'
weight = 170
+++

コンテンツの言語を効果的に選択することが可能となるUI

現在選択されている言語をハイライトするには`.active`クラスを追加してください。

```html {preview="true"}
<details class="lang-select">
    <summary class="lang-select-btn">
        <i class="ail-language"></i>
        <span class="lang-select-label">Language</span>
        <i class="ail-arrow_down"></i>
    </summary>
    <div class="lang-select-popup">
        <ul class="lang-select-menu">
            <li class="lang-select-item"><a class="lang-select-link active" href=""><i class="ail-check"></i><span class="lang-select-link-label">日本語</span></a></li>
            <li class="lang-select-item"><a class="lang-select-link" href=""><i class="ail-check"></i><span class="lang-select-link-label">English</span></a></li>
            <li class="lang-select-item"><a class="lang-select-link" href=""><i class="ail-check"></i><span class="lang-select-link-label">Русский</span></a></li>
            <li class="lang-select-item"><a class="lang-select-link" href=""><i class="ail-check"></i><span class="lang-select-link-label">Español</span></a></li>
        </ul>
    </div>
</details>
```
