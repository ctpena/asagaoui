+++
title = 'チェックボックス'
weight = 20
+++

チェックボックスは、ユーザーが複数の選択肢から一つまたは複数の項目を選択できるフォーム要素です。AsagaoUIでは、アクセシビリティとユーザビリティを重視した実装を提供しています。

アイコンの表示にはAsagaoUI-Iconsが必要です。

{{% code-snippet lang="html" preview="true" %}}
<label class="form-check">
    <input class="form-check-input" type="checkbox">
    ラベル
</label>
{{% /code-snippet %}}

複数のコントロールをグループ化する場合は`fieldset`でグループ化してください。

{{% code-snippet lang="html" preview="true" %}}
<fieldset>
    <label class="form-check">
        <input class="form-check-input" type="checkbox">
        ラベル
    </label>
    <label class="form-check">
        <input class="form-check-input" type="checkbox">
        ラベル
    </label>
    <label class="form-check">
        <input class="form-check-input" type="checkbox">
        ラベル
    </label>
    <label class="form-check">
        <input class="form-check-input" type="checkbox">
        ラベル
    </label>
  </fieldset>
{{% /code-snippet %}}
