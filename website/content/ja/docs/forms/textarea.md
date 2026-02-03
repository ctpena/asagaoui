+++
title = 'テキストエリア'
weight = 90
+++

ユーザーが複数行のテキストを入力する必要があるフォーム用のUIコンポーネントです。

{{% code-snippet lang="html" preview="true" %}}
<div class="form-group">
    <label for="test" class="form-label">
        ラベル
        <span class="form-necessity">※必須</span>
    </label>
    <div class="form-support">サポートテキスト</div>
    <textarea id="test" class="textarea"></textarea>
    <div class="form-error">＊エラーテキスト</div>
</div>
{{% /code-snippet %}}

## HTML属性

### 無効

`disabled`属性を追加すると入力がグレーアウトされます。

{{% code-snippet lang="html" preview="true" %}}
<textarea class="textarea" disabled></textarea>
{{% /code-snippet %}}

### 読み取り専用

`readonly`を使用すると専用のデザインになります。

{{% code-snippet lang="html" preview="true" %}}
<textarea class="textarea" readonly></textarea>
{{% /code-snippet %}}

## 検証とフィードバック

ユーザーの入力を検証した後のフィードバックデザイン

### エラー

`is-error`クラスを追加するだけです。

{{% code-snippet lang="html" preview="true" %}}
<textarea class="textarea is-error"></textarea>
{{% /code-snippet %}}

`form-group`を使用するとエラーテキストも同時に表示することが可能です。

{{% code-snippet lang="html" preview="true" %}}
<div class="form-group">
    <label for="test" class="form-label">
        ラベル
        <span class="form-necessity">※必須</span>
    </label>
    <div class="form-support">サポートテキスト</div>
    <textarea id="test" class="textarea is-error"></textarea>
    <div class="form-error">＊エラーテキスト</div>
</div>
{{% /code-snippet %}}
