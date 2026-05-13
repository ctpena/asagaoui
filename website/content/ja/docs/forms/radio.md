+++
title = 'ラジオボタン'
summary = 'ユーザーが複数の選択肢の中から1つを選択されるためのコンポーネントです。'
+++

ユーザーが複数の選択肢の中から1つを選択されるためのコンポーネントです。

```html {preview="true"}
<label class="radio">
    <input class="radio-input" type="radio">
    ラベル
</label>
```

## 大きさ

`is-sm`,`is-md`,`is-lg`クラスを追加することによって、チェックボックスのサイズを変更できます。

- `sm` デフォルトの大きさ
- `md`
- `lg`

```html {preview="true"}
<label class="radio is-sm">
    <input class="radio-input" type="radio">
    ラベル
</label>
<label class="radio is-md">
    <input class="radio-input" type="radio">
    ラベル
</label>
<label class="radio is-lg">
    <input class="radio-input" type="radio">
    ラベル
</label>
```

## 例

```html {preview="true"}
<fieldset class="form-group">
    <legend class="form-label">
        東京23区
        <span class="form-necessity">※必須</span>
    </legend>
    <div class="form-support">該当する区を選択してください。</div>
    <div>
        <label class="radio">
            <input class="radio-input" type="radio" name="tokyo">
            足立区
        </label>
        <label class="radio">
            <input class="radio-input" type="radio" name="tokyo">
            荒川区
        </label>
        <label class="radio">
            <input class="radio-input" type="radio" name="tokyo">
            板橋区
        </label>
        <label class="radio">
            <input class="radio-input" type="radio" name="tokyo">
            江戸川区
        </label>
    </div>
</fieldset>
```
