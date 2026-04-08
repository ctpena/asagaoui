---
title: ドロワー
weight: 70
---

ドロワーは、モバイルメニューなどの外部から展開するコンテンツを作成できます。 モーダルダイアログとは異なります。

ドロワーを開くアクションは、Invoker Commands APIを用いることをおすすめします。

## 例

{{< code-snippet lang="html" preview="false" >}}
<!-- ドロワーと方向を指定 -->
<div class="drawer">
    <!-- 内部の固定ヘッダー -->
    <div class="drawer-header">
    </div>
    <!-- コンテンツの内容 -->
    <div class="drawer-body">
    </div>
</div>
{{< /code-snippet >}}

関連コンテンツ

{{< code-snippet lang="html" preview="false" >}}
<!-- 開くボタン -->
<button type="button" class="btn btn-primary" data-asagaoui-target="#test">ドロワーを開く</button>
<!-- ドロワーと方向を指定 -->
<div id="test" class="drawer">
    <!-- 内部の固定ヘッダー -->
    <div class="drawer-header">
    </div>
    <!-- コンテンツの内容 -->
    <div class="drawer-body">
    </div>
</div>
{{< /code-snippet >}}
