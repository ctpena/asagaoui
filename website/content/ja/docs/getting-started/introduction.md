---
title: インストール
---

AsagaoUIは[デジタル庁デザインシステム](https://www.digital.go.jp/policies/servicedesign/designsystem)に基づいて構築されたUIコンポーネントを持つ
CSSフレームワークであり、美しく効率的なウェブ開発を実現します。

## クイックスタート

簡単にAsagaoUIを使用できます。レスポンシブデザインに対応するために`viewport`を追加する必要があります。そしてbodyタグにクラスbodyを追加するのを
忘れないでください。`<body class="body"></body>`

```html
<!doctype html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AsagaoUI demo</title>
    <link href="https://cdn.jsdelivr.net/npm/asagaoui/dist/css/asagaoui.min.css" rel="stylesheet">
</head>
<body class="body">
<h1>AsagaoUI</h1>
<script src="https://cdn.jsdelivr.net/npm/asagaoui/dist/js/asagaoui.min.js"></script>
</body>
</html>
```

## CDN

AsagaoUIは[jsDelivr](https://www.jsdelivr.com/package/npm/asagaoui)から入手できます。

## npm

AsagaoUIは[npm](https://www.npmjs.com/package/asagaoui)から入手できます。

```bash
npm i asagaoui
```

## スタイルの使用

[AsagaoUIのレポジトリ](https://github.com/ctpena/asagaoui)からソースファイルをダウンロードしてください。`/dist/css/asagaoui.css`
がコンパイル済みのCSSです。

```html
<link rel="stylesheet" href="dist/css/asagaoui.css">
```

### JSの使用

`/dist/js/asagaoui.js`がコンパイル済みのJSです。

```html
<script src="dist/js/asagaoui.js"></script>
```

## CSSリセット

AsagaoUIはすべてのデフォルトCSSをリセットするために[The New CSS Reset](https://github.com/elad2412/the-new-css-reset)
を使用しています。

## フォント

AsagaoUIで使用するフォントは「Noto Sans Japanese」が設定されています。使用されるフォントウェイトは、通常のテキスト用の400、少し太いテキスト用の500、強調表示や見出し用の700です。

フォントをウェブサイトに適用するには、Google Fontsなどから読み込むか、フォントファイルをセルフホストしてください。

デフォルトの設定

```css
.body {
    font-family: "Noto Sans JP", sans-serif;
}
```
