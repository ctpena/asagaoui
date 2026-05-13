+++
title = 'テキストエリア'
summary = 'テキストエリア'
+++


ユーザーが複数行のテキストを入力する必要があるフォーム用のUIコンポーネントです。

```html {preview="true"}
<div class="form-group">
    <label for="test" class="form-label">
        ラベル
        <span class="form-necessity">※必須</span>
    </label>
    <div class="form-support">サポートテキスト</div>
    <textarea id="test" class="textarea"></textarea>
    <div class="form-error">＊エラーテキスト</div>
</div>
```

## HTML属性

### 無効

`disabled`属性を追加すると入力がグレーアウトされます。

```html {preview="true"}
<textarea class="textarea" disabled></textarea>
```

### 読み取り専用

`readonly`を使用すると専用のデザインになります。

```html {preview="true"}
<textarea class="textarea" readonly></textarea>
```

## 検証とフィードバック

ユーザーの入力を検証した後のフィードバックデザイン

### エラー

`is-error`クラスを追加するだけです。

```html {preview="true"}
<textarea class="textarea is-error"></textarea>
```

`form-group`を使用するとエラーテキストも同時に表示することが可能です。

```html {preview="true"}
<div class="form-group">
    <label for="test" class="form-label">
        ラベル
        <span class="form-necessity">※必須</span>
    </label>
    <div class="form-support">サポートテキスト</div>
    <textarea id="test" class="textarea is-error"></textarea>
    <div class="form-error">＊エラーテキスト</div>
</div>
```

## 文字数カウンター

JavaScriptが必要です。`is="au-textarea"`でカスタム要素を指定すると文字数カウンターが利用できます。

```html {preview="true"}
<div class="form-group">
    <label for="test" class="form-label">
        ラベル
        <span class="form-necessity">※必須</span>
    </label>
    <div class="form-support">サポートテキスト</div>
    <textarea is="au-textarea" id="test" class="textarea"></textarea>
    <div class="form-error">＊エラーテキスト</div>
</div>
```
