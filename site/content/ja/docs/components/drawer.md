+++
title = 'ドロワー'
draft = false
+++

ドロワーは、モバイルメニューなどの外部から展開するコンテンツを作成できます。
モーダルダイアログとは異なります。

基本的なコード

```html
<!-- ドロワーと方向を指定 -->
<div class="drawer drawer-right">
    <!-- 内部の固定ヘッダー -->
    <div class="drawer-header">
    </div>
    <!-- コンテンツの内容 -->
    <div class="drawer-body">
    </div>
</div>
<!-- 背景 -->
<div class="drawer-backdrop"></div>
```

表示方法

`.show`を追加することで、表示できます。

```html
<!-- 開くボタン -->
<button type="button" class="btn btn-primary" data-asagaoui-target="#test">ドロワーを開く</button>
<!-- ドロワーと方向を指定 -->
<div id="test" class="drawer drawer-right show">
    <!-- 内部の固定ヘッダー -->
    <div class="drawer-header">
    </div>
    <!-- コンテンツの内容 -->
    <div class="drawer-body">
    </div>
</div>
<!-- 背景 -->
<div class="drawer-backdrop"></div>
```