---
title: ヘッダー
weight: 100
---

ヘッダーに必要な複数のコンテナを効果的にまとめて表示できます。必要なコンポーネントををHTMLで配置して適切なクラスを設定するだけです。

## 仕組み

ヘッダーを使用するのに必要な情報は次の通りです。

- ヘッダーには2種類あります。`.header-full`,`header-slim`
- 全体をラップする`.header`が必要です。

## 例

{{< code-snippet lang="html" preview="true" >}}
<header class="header">
    <nav class="header-slim">
        <a class="header-logo" href="">
            AsagaoUI
        </a>
    </nav>
</header>
<hr class="mt-5">
<header class="header">
    <nav class="header-full">
        <a class="header-logo" href="">
            AsagaoUI
        </a>
    </nav>
</header>
{{< /code-snippet >}}

## マークアップクラス

ヘッダーには各コンテンツを適切に配置するためのクラスが用意されています。

- `.header-logo` ブランドのロゴを配置
- `.header-items` ユーティリティリンクを配置
- `.header-menu` グローバルメニューを配置
- `.header-button` 言語切り替えやメニューボタンを配置
