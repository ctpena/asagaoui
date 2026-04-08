+++
title = 'インプットテキスト'
weight = 50
+++

テキスト入力コンポーネントは、最も基本的な入力コンポーネントです。`<input>`などで実装されるテキスト入力コンポーネントにデザインを提供します。

## 例

基本的には、`input`クラスを追加するだけです。

{{% code-snippet lang="html" preview="true" %}}
<input id="" type="text" class="input">
{{% /code-snippet %}}

## 大きさ

`is-sm`や`is-md`などのクラスを使用して大きさを変更できます。

{{% code-snippet lang="html" preview="true" %}}
<input id="" type="text" class="input is-lg">
<hr class="mt-3">
<input id="" type="text" class="input is-md">
<hr class="mt-3">
<input id="" type="text" class="input is-sm">
{{% /code-snippet %}}

## HTML属性

### 無効

`disabled`属性を追加すると入力がグレーアウトされます。

{{% code-snippet lang="html" preview="true" %}}
<input id="" type="text" class="input" disabled>
{{% /code-snippet %}}

### 読み取り専用

`readonly`を使用すると専用のデザインになります。

{{% code-snippet lang="html" preview="true" %}}
<input id="" type="text" class="input" readonly>
{{% /code-snippet %}}

## 検証とフィードバック

ユーザーの入力を検証した後のフィードバックデザイン

### エラー

`is-error`クラスを追加するだけです。

{{% code-snippet lang="html" preview="true" %}}
<input id="" type="text" class="input is-error">
{{% /code-snippet %}}

`form-group`を使用するとエラーテキストも同時に表示することが可能です。

{{% code-snippet lang="html" preview="true" %}}
<div class="form-group">
    <label for="test" class="form-label">
        ラベル
        <span class="form-necessity">※必須</span>
    </label>
    <div class="form-support">サポートテキスト</div>
    <input id="test" type="text" class="input is-error">
    <div class="form-error">＊エラーテキスト</div>
</div>
{{% /code-snippet %}}
