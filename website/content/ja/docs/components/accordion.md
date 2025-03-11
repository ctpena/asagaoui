---
title: アコーディオン
weight: 10
---

アコーディオンは、コンテンツを折りたたんで隠すことが可能なUIを提供します。HTML要素である`<details>`を使用しているため、JavaScriptは必要ありません。

## 注意事項

現在、アイコンは実装されていません。今後実装予定です。

## 例

{{% code-snippet lang="html" preview="true" %}}
<details class="accordion">
    <summary class="accordion-header">ダミーテキストはどのような場合に使用されますか。</summary>
    <div class="accordion-body">
        これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
    </div>
</details>
{{% /code-snippet %}}
