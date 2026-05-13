+++
title = 'チェックボックス'
summary = 'チェックボックス'
+++

チェックボックスは、ユーザーが複数の選択肢から一つまたは複数の項目を選択できるフォーム要素です。AsagaoUIでは、アクセシビリティとユーザビリティを重視した実装を提供しています。

```html {preview="true"}
<label class="checkbox">
    <input class="checkbox-input" type="checkbox">
    ラベル
</label>
```

## 大きさ

`is-sm`,`is-md`,`is-lg`クラスを追加することによって、チェックボックスのサイズを変更できます。

- `sm` デフォルトの大きさ
- `md`
- `lg` 

```html {preview="true"}
<label class="checkbox is-lg">
    <input class="checkbox-input" type="checkbox">
    lgサイズ
</label>
<label class="checkbox is-md">
    <input class="checkbox-input" type="checkbox">
    mdサイズ
</label>
<label class="checkbox is-sm">
    <input class="checkbox-input" type="checkbox">
    smサイズ
</label>
```

## 例

`form-group`を使用した例で、エラー表示が完結になります。

```html {preview="true"}
<div class="form-group">
    <label for="test" class="form-label">
        東京23区
        <span class="form-necessity">※必須</span>
    </label>
    <div class="form-support">該当するすべての区を選択してください。</div>
    <div>
        <label class="checkbox">
            <input class="checkbox-input" type="checkbox">
            足立区
        </label>
        <label class="checkbox">
            <input class="checkbox-input" type="checkbox">
            荒川区
        </label>
        <label class="checkbox">
            <input class="checkbox-input" type="checkbox">
            板橋区
        </label>
        <label class="checkbox">
            <input class="checkbox-input" type="checkbox">
            江戸川区
        </label>
    </div>
</div>
```
