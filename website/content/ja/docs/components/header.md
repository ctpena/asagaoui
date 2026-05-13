+++
title = 'ヘッダー'
summary = 'ヘッダーに必要な複数のコンテナを効果的にまとめて表示できます。'
weight = 150
+++

ヘッダーに必要な複数のコンテナを効果的にまとめて表示できます。必要なコンポーネントををHTMLで配置して適切なクラスを設定するだけです。

## 仕組み

ヘッダーを使用するのに必要な情報は次の通りです。

- ヘッダーには2種類あります。.header-full,header-slim
- 全体をラップする.headerが必要です。

## スリム

```html {preview="true"}
<header class="header">
    <nav class="header-slim">
        <a class="header-logo" href="">
            AsagaoUI
        </a>
    </nav>
</header>
```

## フル

```html {preview="true"}
<header class="header">
    <nav class="header-full">
        <a class="header-logo" href="">
            AsagaoUI
        </a>
    </nav>
</header>
```
