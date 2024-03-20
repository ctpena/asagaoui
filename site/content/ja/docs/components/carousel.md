+++
title = 'カルーセル'
draft = false
+++

カルーセルです。

画像を横にスライドさせて複数表示することができます。

最初に表示する`carousel-item`に`active`クラスを設定する必要があります。

デモコード

```html
<!--カルーセル-->
<div class="carousel">
    <figure class="carousel-item active">
        <img class="carousel-image" src="" alt="">
        <figcaption class="carousel-caption">
            image2
        </figcaption>
    </figure>
    <figure class="carousel-item">
        <img class="carousel-image" src="" alt="">
        <figcaption class="carousel-caption">
            image2
        </figcaption>
    </figure>
    <button class="carousel-control-prev" type="button">
        <span class=""><</span>
    </button>
    <button class="carousel-control-next" type="button">
        <span class="">></span>
    </button>
</div>
```
