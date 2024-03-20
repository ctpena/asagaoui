+++
title = 'ディレクトリ構成'
draft = false
+++

AsagaoUIのディレクトリ構成は、直感的で使いやすく設計されています。以下に、その基本的な構成を簡潔に説明します。

## 基本的な構成

```text
asagaoui
├── dist
│   └── css
│       └── asagaoui.css
├── scss
│   ├── asagaoui.scss
│   ├── base/
│   ├── components/
│   ├── forms/
│   ├── layout/
│   ├── styles/
│   └── utilities/
├── assets
└── site
    └── ****
```

## 主なディレクトリとその用途

`dist/css/asagaoui.css`:これはAsagaoUIのコンパイル済みCSSファイルで、すぐにウェブプロジェクトに組み込んで使用できます。通常、このファイルだけでAsagaoUIの全てのスタイルを適用できます。

`scss`:ここにはAsagaoUIを構成するSCSSファイルが全て含まれており、カスタマイズや詳細なスタイリングに役立ちます。asagaoui.scssはエントリーポイントであり、他のすべてのスタイルファイル（base/,
components/, forms/, layout/, styles/, utilities/）がここからインポートされます。

`assets`:アイコンフォントなど、AsagaoUIで使用される静的リソースが格納されています。

`site`:AsagaoUIの公式ドキュメントが含まれています。

## まとめ

AsagaoUIのディレクトリ構成は、プロジェクトの簡単な導入から詳細なカスタマイズまで対応しています。
基本的にはdistディレクトリ内のasagaoui.cssを使用することで、AsagaoUIの全てのスタイルを適用できます。より深いカスタマイズが必要な場合は、ドキュメントの[カスタマイズ]()の項目を参照してください。

