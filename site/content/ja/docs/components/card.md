+++
title = 'カード'
draft = false
+++

このコンポーネントはAsagaoUIオリジナルのコンポーネントです。デジタル庁デザインシステムにはこのコンポーネントは定義されていません。

## タイトルとテキスト

<div class="card">
    <div class="card-body">
        <h5 class="card-title">カードタイトル</h5>
        <p class="card-text">カードテキスト</p>
    </div>
</div>

```html
<div class="card">
    <div class="card-body">
        <h5 class="card-title">カードタイトル</h5>
        <p class="card-text">カードテキスト</p>
    </div>
</div>
```

## 画像

### 上

```html
<div class="card">
    <img src="" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">カードタイトル</h5>
        <p class="card-text">カードテキスト</p>
    </div>
</div>
```

### 下

```html
<div class="card">
    <div class="card-body">
        <h5 class="card-title">カードタイトル</h5>
        <p class="card-text">カードテキスト</p>
    </div>
    <img src="" class="card-img-bottom" alt="">
</div>
```

## ヘッダーとフッター

<div class="card">
    <div class="card-header">
        ヘッダー
    </div>
    <div class="card-body">
        <h5 class="card-title">カードタイトル</h5>
        <p class="card-text">カードテキスト</p>
    </div>
    <div class="card-footer">
        フッター
    </div>
</div>

```html
<div class="card">
    <div class="card-header">
        ヘッダー
    </div>
    <div class="card-body">
        <h5 class="card-title">カードタイトル</h5>
        <p class="card-text">カードテキスト</p>
    </div>
    <div class="card-footer">
        フッター
    </div>
</div>
```
