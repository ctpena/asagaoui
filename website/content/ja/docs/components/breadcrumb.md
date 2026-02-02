---
title: パンくずリスト
weight: 30
---

ウェブサイトの改装表示を行うナビゲーションUIです。とにかくシンプルに使用できます。

## 例

{{% code-snippet lang="html" preview="true" %}}
<ol class="breadcrumb">
    <li class="breadcrumb-item"><a class="breadcrumb-link" href="">ホーム</a></li>
    <li class="breadcrumb-item"><a class="breadcrumb-link" href="">長いページタイトルが入ります長いページタイトルが入ります</a></li>
    <li class="breadcrumb-item"><a class="breadcrumb-link" href="">長いページタイトルが入ります長いページタイトルが入ります</a></li>
    <li class="breadcrumb-item"><a class="breadcrumb-link" href="">長いページタイトルが入ります長いページタイトルが入ります</a></li>
    <li class="breadcrumb-item">パンくずリスト</li>
</ol>
{{% /code-snippet %}}

## アイコンの実装

アイコンの表示にはAsagaoUI-Iconsが必要です。

{{% code-snippet lang="html" preview="true" %}}
<div>
    <i class="ail-arrow_right"></i>
</div>
{{% /code-snippet %}}
