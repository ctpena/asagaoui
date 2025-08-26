---
title: ハンバーガーメニューボタン
weight: 90
---

モバイルメニューで用いられるハンバーガーボタンを実装するコンポーネントです。

アイコンと文字が横並びか縦並びかは自動的に調整されますが、明示的に指定することも可能です。

{{% code-snippet lang="html" preview="true" %}}

<div class="hstack g-4">
    <button
        class="hamburger-btn"
        type="button">
        <i class="hamburger-btn-icon"></i>
        メニュー
    </button>
    <button
        class="hamburger-btn"
        type="button">
        <i class="hamburger-btn-icon"></i>
        メニュー
    </button>
</div>

{{% /code-snippet %}}
