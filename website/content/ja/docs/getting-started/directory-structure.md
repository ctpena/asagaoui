+++
title = 'ディレクトリ構成'
weight = 20
+++

AsagaoUIのディレクトリ構成は、直感的で使いやすく設計されています。以下に、その基本的な構成を簡潔に説明します。

## コンパイル済みファイルの構造

ウェブでそのまま利用できるコンパイル済みのファイルは、`dist`フォルダに格納されています。

```text
asagaoui/dist/
├── css
│   ├── asagaoui-icons.css
│   ├── asagaoui-icons.css.map
│   ├── asagaoui-icons.min.css
│   ├── asagaoui.css
│   ├── asagaoui.css.map
│   └── asagaoui.min.css
├── icons
│   ├── asagaoui-icons.json
│   └── asagaoui-icons.woff2
└── js
    ├── asagaoui.js
    └── asagaoui.js.map
```

AsagaoUIのコンパイル積みCSSとJSは、`asagaoui.css`と`asagaoui.js`です。`.map`はソースマップを提供しています。`.min`は圧縮処理を行ったファイルです。
用途に応じて利用してください。

AsagaoUI Iconsで利用するCSSは、`asagaoui-icons.css`で提供しています。アイコンフォントは、`icons/`フォルダ内の`asagaoui-icons.woff2`です。

## フォルダ構造

プロジェクト全体のフォルダ構造は次の通りです。

```text
asagaoui/
├── assets
│   ├── brand
│   ├── icons
│   └── illustrations
├── dist
│   ├── css
│   ├── icons
│   └── js
├── scss
│   ├── base
│   ├── components
│   ├── forms
│   ├── layout
│   ├── styles
│   └── utilities
├── ts
│   └── components
└── website
```

## 主なディレクトリとその用途

`dist/`:AsagaoUIで利用するコンパイル済みのファイルがあります。

`scss`:ここにはAsagaoUIを構成するSCSSファイルが全て含まれており、カスタマイズや詳細なスタイリングに役立ちます。asagaoui.scssはエントリーポイントであり、他のすべてのスタイルファイル（base/,
components/, forms/, layout/, styles/, utilities/）がここからインポートされます。

`ts`:ここにはAsagaoUIを構成するTypeScriptファイルが含まれています。

`assets`:アイコンフォントなど、AsagaoUIで使用される静的リソースが格納されています。

`website`:AsagaoUIの公式ドキュメントが含まれています。HUGOで構築されています。

## まとめ

AsagaoUIのディレクトリ構成は、プロジェクトの簡単な導入から詳細なカスタマイズまで対応しています。
基本的にはdistディレクトリ内のasagaoui.cssを使用することで、AsagaoUIの全てのスタイルを適用できます。より深いカスタマイズが必要な場合は、ドキュメントの[カスタマイズ](/docs/customize/)
の項目を参照してください。
