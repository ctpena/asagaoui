+++
title = 'セレクトボックス'
summary = 'セレクトボックス'
+++

HTMLの`select`タグにクラスを追加するだけで利用可能です。

```html {preview="true"}
<select class="select">
    <option value="">選択してください</option>
    <option value="1">選択肢1</option>
    <option value="2">選択肢2</option>
    <option value="3">選択肢3</option>
</select>
```

## 例

```html {preview="true"}
<div class="form-group">
    <label for="test" class="form-label">
        東京23区
        <span class="form-necessity">※必須</span>
    </label>
    <div class="form-support">該当する区を選択してください。</div>
    <select id="test" class="select">
        <option value="">選択してください</option>
        <option value="1">足立区</option>
        <option value="2">荒川区</option>
        <option value="3">板橋区</option>
        <option value="4">江戸川区</option>
    </select>
    <div class="form-error">＊エラーテキスト</div>
</div>
```

## 大きさ

- sm
- md (デフォルト値)
- lg

```html {preview="flex"}
<select class="select is-sm">
    <option value="">選択してください</option>
    <option value="1">選択肢1</option>
    <option value="2">選択肢2</option>
    <option value="3">選択肢3</option>
</select>
<select class="select is-md">
    <option value="">選択してください</option>
    <option value="1">選択肢1</option>
    <option value="2">選択肢2</option>
    <option value="3">選択肢3</option>
</select>
<select class="select is-lg">
    <option value="">選択してください</option>
    <option value="1">選択肢1</option>
    <option value="2">選択肢2</option>
    <option value="3">選択肢3</option>
</select>
```

## HTML属性

### 無効

`disabled`属性を追加すると入力がグレーアウトされます。

```html {preview="true"}
<select class="select" disabled>
    <option value="">選択してください</option>
    <option value="1">選択肢1</option>
    <option value="2">選択肢2</option>
    <option value="3">選択肢3</option>
</select>
```

## 検証とフィードバック

ユーザーの入力を検証した後のフィードバックデザイン

### エラー

`is-error`クラスを追加するだけです。

```html {preview="true"}
<select class="select is-error">
    <option value="">選択してください</option>
    <option value="1">選択肢1</option>
    <option value="2">選択肢2</option>
    <option value="3">選択肢3</option>
</select>
```

`form-group`を使用するとエラーテキストも同時に表示することが可能です。

```html {preview="true"}
<div class="form-group">
    <label for="test" class="form-label">
        東京23区
        <span class="form-necessity">※必須</span>
    </label>
    <div class="form-support">該当する区を選択してください。</div>
    <select id="test" class="select is-error">
        <option value="">選択してください</option>
        <option value="1">足立区</option>
        <option value="2">荒川区</option>
        <option value="3">板橋区</option>
        <option value="4">江戸川区</option>
    </select>
    <div class="form-error">＊エラーテキスト</div>
</div>
```
