---
title: コンテナ
---

コンテンツを適切なサイズで中央に揃える

## 通常のコンテナ

画面のサイズに合わせて、適切な大きさまで広がり続けます。`.container`
クラスを使用することで、コンテンツが中央に揃えられ、余白は自動的に調整されます。

以下は、`.container`クラスを使用した基本的なHTML構造の例です。このコンテナは、内包するコンテンツを適切に中央揃えし、レスポンシブデザインの原則に従ってサイズを調整します。

{{% code-snippet lang="html" preview="false" %}}
<div class="container">
    <!-- ここにコンテンツを追加 -->
</div>
{{% /code-snippet %}}

## コンテナの大きさ

ブレイクポイントごとにコンテナの最大サイズが定められています。
通常の`container`を用いると自動的に切り替わります。

* sm: 768px
* md: 992px
* lg: 1280px
* xl: 1440px
* xxl: 1920px
* xxxl: 2560px
* x4k: 3840px

また、次のように最大サイズを指定できます。

{{% code-snippet lang="html" preview="false" %}}
<div class="container-md">
    <!-- 992px以上に広がりません -->
</div>
{{% /code-snippet %}}

## 100%スタイル

`container-fluid`を使用することで、どのような画面幅でも常に100%になります。

{{% code-snippet lang="html" preview="false" %}}
<div class="container-fluid">
    <!-- ここにコンテンツを追加 -->
</div>
{{% /code-snippet %}}
