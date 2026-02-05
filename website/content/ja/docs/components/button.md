---
title: ボタン
weight: 40
---

ボタンはUIの最も基本的な構成要素です。様々な大きさやデザインのボタンを用意しています。

## 基本クラス

`btn`クラスは最も基本的な外観を提供するクラスです。

{{< code-snippet lang="html" preview="true" >}}
<div>
    <button class="btn" type="button">ボタン</button>
</div>
{{< /code-snippet >}}

## 大きさ

`is-lg`や`is-sm`で大きさを指定できます。

- lg
- md (デフォルト)
- sm
- xs

{{< code-snippet lang="html" preview="true" pv-layout="flex" >}}
<button class="btn is-xs btn-fill" type="button">ボタン</button>
<button class="btn is-sm btn-fill" type="button">ボタン</button>
<button class="btn is-md btn-fill" type="button">ボタン</button>
<button class="btn is-lg btn-fill" type="button">ボタン</button>
{{< /code-snippet >}}

## 種類

次の3種類のボタンデザインがあります。クラスを追加して使用できます。

- 塗りボタン
- アウトラインボタン
- テキストボタン

{{< code-snippet lang="html" preview="true" pv-layout="flex" >}}
<button class="btn btn-fill" type="button">ボタン</button>
<button class="btn btn-outline" type="button">ボタン</button>
<button class="btn btn-text" type="button">ボタン</button>
{{< /code-snippet >}}

## アクセシビリティ

### ターゲット領域

ボタンのターゲット領域は44CSSpx以上を保つようになっています。`is-xs`,`is-sm`を指定する場合は`after`によって、ターゲット領域が拡張されます。

### カーソル

`cursor: pointer;`はリンクを示す値と決められています。ボタンはリンクである場合とない場合がありますが、一律でカーソルをポインターに変更しています。
