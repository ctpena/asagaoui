+++
title = 'カルーセル'
summary = 'カルーセルは、複数のスライドを順番に表示するUI。'
weight = 70
+++

カルーセルは、複数のスライドを順番に見ることのできるコンポーネントです。

```html {preview="true"}
<div class="carousel-wrapper">
    <h2 class="h2">開催中のイベント</h2>
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
    <div>
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
</div>
```
