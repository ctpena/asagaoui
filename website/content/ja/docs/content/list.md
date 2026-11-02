+++
title = 'リスト'
summary = 'List'
+++

主に`ul`要素で表現される箇条書きリストのコンポーネントです。[デジタル庁デザインシステム箇条書きリスト](https://design.digital.go.jp/dads/components/list/)の実装に合わせ、`<ol>`を使用せず、`ul`要素のみで実装するアプローチを採用しています。

## リストマークタイプ

```html {preview="true"}
<ul class="list">
    <li>リストアイテム1</li>
    <li>リストアイテム2</li>
    <li>リストアイテム3</li>
</ul>
```

## 項番タイプ

```html {preview="true"}
<ul class="list list-marker">
    <li><span>1. </span>リストアイテム1</li>
    <li><span>2. </span>リストアイテム2</li>
    <li><span>3. </span>リストアイテム3</li>
</ul>
```
