+++
title = '画像'
summary = 'HTMLのimgに対応した、ページ中に画像を埋め込むためのコンポーネントです。画像キャプションと組み合わせて使うこともできます。'
+++

HTMLの`<img>`に対応した、ページ中に画像を埋め込むためのコンポーネントです。画像キャプションと組み合わせて使うこともできます。

```html {preview="true"}
<img class="img-fluid" src="/no-image.svg" alt="サンプル画像" width="696" height="392">
```

## 図表-キャプション

```html {preview="true"}
<figure class="figure">
    <div class="figure-image-area bordered">
        <img class="figure-image" src="/no-image.svg" alt="サンプル画像" width="696" height="392">
    </div>
    <figcaption class="figure-caption">これはダミーの画像キャプションです。ダミーの画像キャプションは、デザインやレイアウトの作成時に使用される仮の文章です。</figcaption>
</figure>
```

### リンク

```html {preview="true"}
<figure class="figure">
    <a class="figure-image-area" href="#">
        <img class="figure-image" src="/no-image.svg" alt="サンプル画像" width="696" height="392">
    </a>
    <figcaption class="figure-caption">これはダミーの画像キャプションです。ダミーの画像キャプションは、デザインやレイアウトの作成時に使用される仮の文章です。</figcaption>
</figure>
```
