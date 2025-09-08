+++
title = 'インストール'
weight = 30
+++

AsagaoUIは[デジタル庁デザインシステム](https://www.digital.go.jp/policies/servicedesign/designsystem)
に基づいて構築されたUIコンポーネントを持つ
CSSフレームワークであり、美しく効率的なウェブ開発を実現します。

## クイックスタート

AsagaoUIを使い始めるために、以下の2つの重要な設定を必ず行ってください。

1. `viewport`メタタグを追加してください。
2. ルートクラス`aui`を追加してください。

クイックスタート用のテンプレートHTMLは次の通りです。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AsagaoUI demo</title>
    <link href="https://cdn.jsdelivr.net/npm/asagaoui/dist/css/asagaoui.min.css" rel="stylesheet">
</head>
<body class="aui">
<h1>AsagaoUI</h1>
<script src="https://cdn.jsdelivr.net/npm/asagaoui/dist/js/asagaoui.min.js"></script>
</body>
</html>
```

## ダウンロード

すべての入手方法は[リソース](/about/resources/)ページをご覧ください。

### スタイルの使用

```html

<link rel="stylesheet" href="dist/css/asagaoui.css">
```

### JSの使用

`/dist/js/asagaoui.js`がコンパイル済みのJSです。

```html

<script src="dist/js/asagaoui.js"></script>
```

## コード要件

### HTML

AsagaoUIはHTML Living Standardに準拠したHTMLマークアップを前提として設計されています。

### CSSリセット

AsagaoUIは一貫したスタイリングを実現するため、[The New CSS Reset](https://github.com/elad2412/the-new-css-reset)
を使用してすべてのデフォルトCSSをリセットしています。

### フォント

AsagaoUIで使用するフォントは「Noto Sans Japanese」が設定されています。使用されるフォントウェイトは、通常のテキスト用の400、強調表示や見出し用の700です。

フォントをウェブサイトに適用するには、Google Fontsなどから読み込むか、フォントファイルをセルフホストしてください。

デフォルトの設定

```css
.aui {
    font-family: "Noto Sans JP", sans-serif;
}
```
