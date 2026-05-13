+++
title = 'カード'
summary = 'コンテンツのまとまりを強調するためのUIです。'
weight = 60
+++

コンテンツのまとまりを強調するためのUIです。

## タイトルとテキスト

```html {preview="true"}
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Card text</p>
    </div>
</div>
```

## 画像

### 上

```html {preview="true"}
<div class="card">
    <img src="" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Card text</p>
    </div>
</div>
```

### 下

```html {preview="true"}
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Card text</p>
    </div>
    <img src="" class="card-img-bottom" alt="">
</div>
```

## ヘッダーとフッター

```html {preview="true"}
<div class="card">
    <div class="card-header">
        Header
    </div>
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Card text</p>
    </div>
    <div class="card-footer">
        Footer
    </div>
</div>
```

## カードリンク

```html {preview="true"}
<div class="card">
    <div class="card-body">
        <h5 class="card-title"><a class="card-link" href="">Card Link</a></h5>
        <p class="card-text">Card text</p>
    </div>
</div>
```
