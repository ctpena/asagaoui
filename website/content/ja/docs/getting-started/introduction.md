+++
title = 'AsagaoUIを使い始める'
weight = 1
+++

AsagaoUIは、シンプルで美しいUIを用いるデジタルサービスのためのUIコンポーネントフレームワークです。
シンプルかつ美しいUIを求めている皆さんに最適です。現在AsagaoUIにはウェブサイト向けのUIコンポーネント実装が含まれています。将来的にAndroid向けのUIコンポーネント実装を提供する予定です。

## クイックスタート

AsagaoUIを使い始めるために、以下の2つの重要な設定を必ず行ってください。

1. `viewport`メタタグを追加してください。
2. ルートクラス`.aui`を`<body>`に追加してください。

クイックスタート用のテンプレートHTMLは次の通りです。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>quick start AsagaoUI</title>
</head>
<body class="aui">
<h1>AsagaoUI</h1>
</body>
</html>
```

### 必要なCSSとJSを読み込む

最も簡単なのは、jsdelivrから配布されているファイルを`<link>`タグと`<script>`タグを用いて読み込む方法です。

#### CSS

```html
<link href="https://cdn.jsdelivr.net/npm/asagaoui/dist/css/asagaoui.min.css" rel="stylesheet">
```

#### JS

```html
<script src="https://cdn.jsdelivr.net/npm/asagaoui/dist/js/asagaoui.min.js"></script>
```

タグの配置した後のHTMLは次の通りです。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>quick start AsagaoUI</title>
    <link href="https://cdn.jsdelivr.net/npm/asagaoui/dist/css/asagaoui.min.css" rel="stylesheet">
</head>
<body class="aui">
<h1>AsagaoUI</h1>
<script src="https://cdn.jsdelivr.net/npm/asagaoui/dist/js/asagaoui.min.js"></script>
</body>
</html>
```

## CDN リンク

[jsdelivr](https://www.jsdelivr.com/package/npm/asagaoui)でCSSとJSを入手できます。

## オフライン(セルフホスト)

`dist`フォルダの中に必要なCSSとJSがあります。

```text
asagaoui/dist/
├── css
│   ├── asagaoui.css
│   └── asagaoui.css.map
└── js
    ├── asagaoui.js
    └── asagaoui.js.map
```

### CSS

```html
<link rel="stylesheet" href="dist/css/asagaoui.css">
```

### JS

```html
<script src="dist/js/asagaoui.js"></script>
```

## 重要なグローバル設定

### HTML

AsagaoUIはHTML Living Standardに準拠したHTMLマークアップを前提として設計されています。

### CSSリセット

AsagaoUIは一貫したスタイリングを実現するため、[The New CSS Reset](https://github.com/elad2412/the-new-css-reset)
を使用してすべてのデフォルトCSSをリセットしています。

### フォント

AsagaoUIで使用するフォントは「Noto Sans Japanese」が設定されています。使用されるフォントウェイトは、通常のテキスト用の400、強調表示や見出し用の700です。

#### デフォルトの設定

```css
.aui {
    font-family: "Noto Sans JP", "Noto Sans", sans-serif;
}
```

### Box-sizing

UIレイアウトの計算の簡略化のため、`box-sizing`は、`border-box`に変更されています。

## 次のステップ

- AsagaoUIに含まれるファイルの説明は[ディレクトリ構成](/docs/getting-started/directory-structure/)を参照してください。
- AsagaoUIで利用できるアイコンについては、[AsagaoUI Icons](/icons/)を参照してください。

