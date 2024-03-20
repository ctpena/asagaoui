+++
title = 'グリッド'
draft = false
+++

AsagaoUIには特徴的なグリッドシステムが２つあります。

## garden

`display: grid;`が割り当てられた`garden`は12カラムのグリッドレイアウトを提供します。

コード例

```html
<div class="garden">
    <div class="plot">
        <!-- 区画1 -->
    </div>
    <div class="plot">
        <!-- 区画2 -->
    </div>
</div>
```

## arbor

`display: flex;`が割り当てられた`arbor`は12カラムのグリッドレイアウトを提供します。

```html
<div class="arbor">
    <div class="bloom">
        <!-- アイテム1 -->
    </div>
    <div class="bloom">
        <!-- アイテム2 -->
    </div>
</div>
```

## gardenとarborの違いは

`display: grid;`か`display: flex;`です。

単純な水平方向のグリッドシステムでは、`arbor`が適している場合がほとんどですし、
水平方向と垂直方保に配置する必要がある場合は、`garden`が適してます。
どちらを使用するかは、特定のデザインのニーズや要件によって異なります。
