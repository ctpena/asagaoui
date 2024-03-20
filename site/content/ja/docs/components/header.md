+++
title = 'ヘッダー'
draft = false
+++

デジタル庁デザインシステムで定義されているヘッダーはフルヘッダーとスリムヘッダーの２種類があります。ヘッダーコンポーネントはこの２種類を効率的に作成
するためのものです。現在は、フルヘッダーのみ対応。

かなり制限が多いですが、モバイルとディスクトップで効率的に使用できます。簡潔に書きたい場合やカスタマイズの幅を増やしたい場合は
今後追加予定の`名称未定`を使ってください。

## 基本的な構成

```html
<!-- ヘッダー宣言クラス -->
<header class="header">
    <!-- ヘッダーの種類を指定 -->
    <nav class="header-full">
        <!-- ロゴエリア -->
        <a class="header-logo" href=""></a>
        <!-- ハンバーガーメニューなどのボタンエリア -->
        <div class="header-button">
        </div>
        <!-- ユーティリティリンクなどの汎用エリア -->
        <div class="header-item">
        </div>
        <!-- グローバルメニュー用のエリア -->
        <div class="header-menu">
        </div>
        <!-- モバイルメニュー用のエリア -->
        <div class="header-drawer drawer drawer-right">
            <div class="drawer-header">
            </div>
            <div class="drawer-body">
            </div>
        </div>
        <div class="drawer-backdrop"></div>
    </nav>
</header>
```
