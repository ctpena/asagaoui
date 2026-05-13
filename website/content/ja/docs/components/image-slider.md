+++
title = 'イメージスライダー'
summary = 'イメージスライダーは、ギャラリーコンテンツのように複数のイメージを切り替えて見ることができるコンポーネントです。'
weight = 160
+++

イメージスライダーは、ギャラリーコンテンツのように複数のイメージを切り替えて見ることができるコンポーネントです。

```html {preview="true"}
<div class="carousel-wrapper">
    <ul class="carousel">
        <li class="slide">
            <img src="/docs/components/carousel/image-1.webp" alt="" loading="lazy" width="696" height="392">
        </li>
        <li class="slide">
            <img src="/docs/components/carousel/image-2.webp" alt="" loading="lazy" width="696" height="392">
        </li>
        <li class="slide">
            <img src="/docs/components/carousel/image-3.webp" alt="" loading="lazy" width="696" height="392">
        </li>
        <li class="slide">
            <img src="/docs/components/carousel/image-4.webp" alt="" loading="lazy" width="696" height="392">
        </li>
    </ul>
    <details class="carousel-others">
        <summary class="carousel-control">すべてのスライド</summary>
        <ul class="carousel-list">
            <li class="slide">
                <div class="slide-body">
                    <img src="/docs/components/carousel/image-1.webp" alt="" loading="lazy" width="696" height="392">
                </div>
            </li>
            <li class="slide">
                <div class="slide-body">
                    <img src="/docs/components/carousel/image-2.webp" alt="" loading="lazy" width="696" height="392">
                </div>
            </li>
            <li class="slide">
                <div class="slide-body">
                    <img src="/docs/components/carousel/image-3.webp" alt="" loading="lazy" width="696" height="392">
                </div>
            </li>
            <li class="slide">
                <div class="slide-body">
                    <img src="/docs/components/carousel/image-4.webp" alt="" loading="lazy" width="696" height="392">
                </div>
            </li>
        </ul>
    </details>
</div>
```
