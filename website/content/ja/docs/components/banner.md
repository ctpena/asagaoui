---
title: バナー
weight: 20
---

重要な情報を目出させるUIです。2種類あります。

## ノティフィケーションバナー

ノティフィケーションバナーは。ユーザーの操作に関わらず、コンテンツをユーザーに効果的に提示するUIです。

### デザインスタイル

ノティフィケーションバナーは2種類のデザインスタイルが用意されています。`banner-chip`を追加することで、デザインスタイルをカラーチップに変更できます。

#### スタンダード

{{% code-snippet lang="html" preview="true" %}}
<div class="banner">
    <i class="banner-icon aif-information"></i>
    <span class="banner-title">登録期間が延長されました</span>
    <div class="banner-body">
        <time class="banner-date">2025年4月1日</time>
        <span class="banner-description">ダミーテキストは、デザインの作成時に使用される仮の文章です。</span>
    </div>
</div>
{{% /code-snippet %}}

#### カラーチップ

{{% code-snippet lang="html" preview="true" %}}
<div class="banner banner-chip">
    <i class="banner-icon aif-information"></i>
    <span class="banner-title">登録期間が延長されました</span>
    <div class="banner-body">
        <time class="banner-date">2025年4月1日</time>
        <span class="banner-description">ダミーテキストは、デザインの作成時に使用される仮の文章です。</span>
    </div>
</div>
{{% /code-snippet %}}

### デザインタイプ

#### サクセス

操作等の滞りない完了の通知

{{% code-snippet lang="html" preview="true" %}}
<div class="banner banner-success">
    <i class="banner-icon aif-complete"></i>
    <span class="banner-title">登録手続きは全て完了しました</span>
    <div class="banner-body">
        <time class="banner-date">2025年4月1日</time>
        <span class="banner-description">ダミーテキストは、デザインの作成時に使用される仮の文章です。</span>
    </div>
</div>
{{% /code-snippet %}}

#### エラー

操作等が正しく完了しなかったことの通知

{{% code-snippet lang="html" preview="true" %}}
<div class="banner banner-error">
    <i class="banner-icon aif-error"></i>
    <span class="banner-title">操作を完了できませんでした</span>
    <div class="banner-body">
        <time class="banner-date">2025年4月1日</time>
        <span class="banner-description">ダミーテキストは、デザインの作成時に使用される仮の文章です。</span>
    </div>
</div>
{{% /code-snippet %}}

#### 警告

注意を喚起するための警告、警戒情報等の通知

{{% code-snippet lang="html" preview="true" %}}
<div class="banner banner-warning">
    <i class="banner-icon aif-warning"></i>
    <span class="banner-title">偽SNSアカウントにご注意ください</span>
    <div class="banner-body">
        <time class="banner-date">2025年4月1日</time>
        <span class="banner-description">ダミーテキストは、デザインの作成時に使用される仮の文章です。</span>
    </div>
</div>
{{% /code-snippet %}}

#### 情報

{{% code-snippet lang="html" preview="true" %}}
<div class="banner banner-info">
    <i class="banner-icon aif-information"></i>
    <span class="banner-title">登録期間が延長されました</span>
    <div class="banner-body">
        <time class="banner-date">2025年4月1日</time>
        <span class="banner-description">ダミーテキストは、デザインの作成時に使用される仮の文章です。</span>
    </div>
</div>
{{% /code-snippet %}}

## 緊急時バナー

ユーザーに最優先して伝えたい情報を表示するためのデザインを用意しています。

{{% code-snippet lang="html" preview="true" %}}
<div class="banner banner-emergency">
    <span class="banner-title">[緊急]〇〇地区に避難準備情報が発令されました</span>
    <div class="banner-body">
        <time class="banner-date">2026年2月2日 06:00更新</time>
        <span class="banner-description">1時23分に〇〇地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間のかかる方は、直ちに指定避難所へ移動してください。</span>
    </div>
</div>
{{% /code-snippet %}}
