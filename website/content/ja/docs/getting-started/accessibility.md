+++
title = 'アクセシビリティ'
weight = 4
+++

AsagaoUIはアクセシビリティを確保するための特別な実装は行っていません。適切なHTMLを使用するだけで実用的なアクセシビリティを提供できるという信念に基づいています。

## 基本方針

ネイティブHTML要素(`<button>`,`<nav>`,`<main>`,`<select>`など)には、既にアクセシビリティ機能が含まれています。これらを適切に使用することで、支援技術との互換性や基本的なキーボード操作が自動的に確保されます。

## デジタル庁デザインシステムの継承

AsagaoUIは既にアクセシビリティに配慮された[デジタル庁デザインシステム](https://design.digital.go.jp/dads/)を元に作成されています。従って基本的な色の組み合わせやコントラスト比、フォントサイズ、リンクやボタンのターゲットサイズに関する アクセシビリティについては、[デジタル庁デザインシステムのアクセシビリティページ](https://design.digital.go.jp/dads/guidance/accessibility/)をご覧ください。

### 選択的な継承方針

ただし、[デジタル庁デザインシステム](https://design.digital.go.jp/dads/)のすべてを継承しているわけではありません。 以下のような複雑なHTML構造を要求するようなものや実装が過剰ないし複雑になるものは排除しています。

- [アコーディオン](/docs/components/accordion/)や[ディスクロージャー](/docs/components/disclosure/)のリターンリンク
- [テキストエリア](/docs/forms/textarea/)の文字数カウンター

これらの要素は、適切に実装すればアクセシビリティ向上の手段ですが、HTMLの複雑化やJavaScript依存を招き、「適切なHTMLを使用するだけで実用的なアクセシビリティを提供できる」というAsagaoUIの基本方針に反するためです。 必要に応じて、開発者は元の[デジタル庁デザインシステム](https://design.digital.go.jp/dads/)から直接これらの要素を使用してください。

## 参考資料

- [HTML Standard](https://html.spec.whatwg.org/multipage/)
- [ARIA - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [HTML: A good basis for accessibility - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML)
