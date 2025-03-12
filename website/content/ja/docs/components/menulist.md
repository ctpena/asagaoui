---
title: メニューリスト
weight: 110
---

ウェブサイトで多く用いられるメニューを実装するUIです。

## 注意事項

アイコン関係の実装と、アコーディオンメニューの実装が不十分です。

## 例

{{% code-snippet lang="html" preview="false" %}}
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
