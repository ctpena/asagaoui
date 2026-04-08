---
title: ユーティリティリンク
weight: 150
---

色々な場所で使用できるシンプルなリンク

{{% code-snippet lang="html" preview="true" %}}
<div>
    <a class="utilitylink" href="">リンクテキスト</a>
</div>
{{% /code-snippet %}}

## 外部リンク

外部のコンテンツにリンクする場合は、`rel="external"`属性を追加する方が丁寧です。この属性を追加すると外部リンクであることを示すアイコンが表示されます。

{{% code-snippet lang="html" preview="true" %}}
<div>
    <a class="utilitylink" rel="external" href="https://design.digital.go.jp/dads/">デジタル庁デザインシステム</a>
</div>
{{% /code-snippet %}}

## 新しいタブやウインドウ

リンクを新しいタブやウインドウで開くかはユーザーが選択するべきで明示的に指定するべきではありません。どうしても用いる場合は、リンクをクリックしたときに何が起こるかを示してください。

{{% code-snippet lang="html" preview="true" %}}
<div>
    <a class="utilitylink" href="https://design.digital.go.jp/dads/" target="_blank">デジタル庁デザインシステム (新しいウィンドウで開きます)</a>
</div>
{{% /code-snippet %}}
