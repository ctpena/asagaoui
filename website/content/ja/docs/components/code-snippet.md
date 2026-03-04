---
title: コードスニペット
weight: 60
---

コードスニペットコンポーネントは、プログラミングコードやフォーマットを維持する必要があるテキストを、シンタックスハイライト付きで表示するために使用します。構文ハイライトには[Prism](https://prismjs.com)を採用しています。

このコンポーネントはAsagaoUIオリジナルのコンポーネントであり、デジタル庁デザインシステムには含まれていません。

動作にはJavaScriptが必要で、Web Componentsとして実装されています。コードのシンタックスハイライトやコピーボタンの機能を提供します。

## 使い方

{{< code-snippet lang="html" preview="false" >}}
{{< code-snippet lang="HTML" preview="true" >}}
<div class="example">
  <p>Hello World</p>
</div>
{{< /code-snippet >}}
{{< /code-snippet >}}

### 属性（Shortcode パラメータ）

| パラメータ     | 説明                                                                                         | 
|:----------|:-------------------------------------------------------------------------------------------|
| `lang`    | コードの言語を指定します（例: `html`(デフォルト), `css`, `javascript`, `typescript`, `bash`, `scss`, `json`）。 | 
| `preview` | プレビューエリアのレイアウトを指定することができます                                                                 |    

## Web Components としての使用

以下の構造で記述します。表示の安定性（CLSの防止）を確保するため、特定のクラス構造が必要です。

{{< code-snippet lang="HTML" preview="false" >}}
<code-snippet lang="html" preview="false">
    <!-- プレビューエリア（任意） -->
    <div class="codesnippet-preview">
        <!-- HTMLなどそのまま実行されるエリア -->
    </div>
    <!-- コード表示エリア（必須） -->
    <div class="codesnippet-area">
        <div class="codesnippet-header">
            <span class="codesnippet-lang"></span>
            <button class="codesnippet-copy-btn">
                <i class="ail-copy"></i>
            </button>
        </div>
        <pre class="codesnippet-code"><code><!-- ここにコードを入力 --></code></pre>
    </div>
</code-snippet>
{{< /code-snippet >}}

### 主要なクラスと要素

- `codesnippet-preview`: HTMLなどの実行結果を直接表示するエリアです。プレビューが不要な場合はこの要素自体を削除してください。
- `codesnippet-area`: コード表示のメイン領域です（必須）。
- `codesnippet-header`: 言語名やコピーボタンを表示するヘッダー部分です（必須）。
- `codesnippet-lang`: 指定した言語名（`lang`属性の値）が自動的に挿入されます。
- `codesnippet-copy-btn`: クリックするとコードをクリップボードにコピーします。
- `codesnippet-code`: コード本体を表示するエリアです。内部に`<code>`タグを配置し、その中にコードを記述すると自動的にハイライトされます。

## プレビューのレイアウト

`preview`属性に特定の値を設定することで、プレビューエリアのレイアウトを調整できます。

- `preview="flex"`: プレビューエリアに `codesnippet-preview-flex` クラスが追加され、内部要素が Flexbox レイアウトになります。コンポーネントの並びを確認する場合に便利です。


