---
title: メニューリスト
weight: 110
---

ウェブサイトで多く用いられるメニューを実装するUIです。

## 例

{{% code-snippet lang="html" preview="true" %}}
<ul class="menulist">
    <li class="menulist-item">
        <a href="" class="menulist-title">メニュータイトル</a>
        <ul class="menulist">
            <li class="menulist-item">
                <a href="" class="menulist-link ">メニューアイテム</a>
            </li>
            <li class="menulist-item">
                <a href="" class="menulist-link ">メニューアイテム</a>
            </li>
        </ul>
    </li>
</ul>
{{% /code-snippet %}}

## 大きさ

- sm
- md (デフォルト)

{{% code-snippet lang="html" preview="true" %}}
<ul class="menulist is-sm">
    <li class="menulist-item">
        <a href="" class="menulist-title">メニュータイトル</a>
        <ul class="menulist">
            <li class="menulist-item">
                <a href="" class="menulist-link ">メニューアイテム</a>
            </li>
            <li class="menulist-item">
                <a href="" class="menulist-link ">メニューアイテム</a>
            </li>
        </ul>
    </li>
</ul>
{{% /code-snippet %}}
