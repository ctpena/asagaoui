---
title: カード
weight: 50
---

このコンポーネントはAsagaoUIオリジナルのコンポーネントです。デジタル庁デザインシステムにはこのコンポーネントは定義されていません。

## タイトルとテキスト

{{% code-snippet lang="html" preview="true" %}}
<div class="card">
    <div class="card-body">
        <h5 class="card-title">カードタイトル</h5>
        <p class="card-text">カードテキスト</p>
    </div>
</div>
{{% /code-snippet %}}

## 画像

### 上

{{% code-snippet lang="html" preview="true" %}}
<div class="card">
    <img src="" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">カードタイトル</h5>
        <p class="card-text">カードテキスト</p>
    </div>
</div>
{{% /code-snippet %}}

### 下

{{% code-snippet lang="html" preview="true" %}}
<div class="card">
    <div class="card-body">
        <h5 class="card-title">カードタイトル</h5>
        <p class="card-text">カードテキスト</p>
    </div>
    <img src="" class="card-img-bottom" alt="">
</div>
{{% /code-snippet %}}

## ヘッダーとフッター

{{% code-snippet lang="html" preview="true" %}}
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
{{% /code-snippet %}}

## カードリンク

{{% code-snippet lang="html" preview="true" %}}
<div class="card">
    <div class="card-body">
        <h5 class="card-title"><a class="card-link" href="">カードリンク</a></h5>
        <p class="card-text">カードテキスト</p>
    </div>
</div>
{{% /code-snippet %}}
