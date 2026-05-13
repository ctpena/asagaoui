+++
title = 'タブ'
summary = 'タブラベルと、関連付けられたタブパネルの組み合わせのコンポーネントです。一定の領域の範囲内で、複数のコンテンツを切り替え表示できるコンポーネントです。'
weight = 270
+++

タブラベルと、関連付けられたタブパネルの組み合わせのコンポーネントです。一定の領域の範囲内で、複数のコンテンツを切り替え表示できるコンポーネントです。

## 仕組み

タブは[スクロールレイアウトを用いて開発された既存の手法](https://web.dev/articles/building/a-tabs-component?hl=en)を用いて実装されています。完全な動作にはJSが必要です。

## 例

```html {preview="true"}
<div class="tabs">
    <a href="#tab-1" class="tab-item active">すべて</a>
    <a href="#tab-2" class="tab-item">新着情報</a>
    <a href="#tab-3" class="tab-item">暮らし</a>
</div>
<section class="tabs-area">
    <article id="tab-1" class="tab-area">
        <ul>
            <li><a href="" class="link">マイナンバーカード・インフォ（自治体向け情報）Vol.100を掲載しました</a><br/>政策／2026年2月6日</li>
            <li><a href="" class="link">国家資格等のオンライン・デジタル化：現在手続が可能な資格に「ウェブデザイン技能士」の情報を追加しました</a><br/>政策／2026年1月26日</li>
            <li><a href="" class="link">中途採用（民間人材）の採用イベント情報を掲載しました</a><br/>採用／2025年12月10日</li>
        </ul>
    </article>
    <article id="tab-2" class="tab-area">
        <ul>
            <li><a href="" class="link">海山川市シティニュース2月号を掲載しました</a><br/>2026年2月1日</li>
            <li><a href="" class="link">令和8年度実施 職員採用試験について</a><br/>2026年1月20日</li>
            <li><a href="" class="link">令和7年第1回定例記者会見</a><br/>2026年1月15日</li>
        </ul>
    </article>
    <article id="tab-3" class="tab-area">
        <ul>
            <li><a href="" class="link">狂犬病予防集合注射のお知らせ</a><br/>2026年3月5日</li>
            <li><a href="" class="link">海山川市シティニュース3月号を掲載しました</a><br/>2026年3月3日</li>
            <li><a href="" class="link">歯科健診受診状況アンケートにご協力ください</a><br/>2026年3月2日</li>
            <li><a href="" class="link">海山川市街おこし協力隊の募集について</a><br/>2026年2月26日</li>
        </ul>
    </article>
</section>
```
