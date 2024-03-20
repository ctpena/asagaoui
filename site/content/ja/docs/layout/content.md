+++
title = 'コンテンツ'
draft = false
+++

`content`クラスの役割は単純です。AsagaoUIはすべてのデフォルトCSSをリセットするため通常の`<h2>`などのタグのスタイルはすべてリセットされます。

`content`を利用すれば、ブログ記事や、`.md`ファイルから生成されたHTMLに別途クラスを付ける必要がなくなります。

コード

```html
<article class="content">
    <h1>AsagaoUI</h1>
    <h2>コンテンツ</h2>
    <p>AsagaoUIは<a href="https://www.digital.go.jp/policies/servicedesign/designsystem">デジタル庁デザインシステム</a>に基づいて構築されたUIコンポーネントを持つ
        CSSフレームワークであり、美しく効率的なウェブ開発を実現します。</p>
</article>
```

