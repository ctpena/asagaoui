+++
title = 'Image Slider'
summary = 'An image slider is a component that allows switching between multiple images, like gallery content.'
weight = 160
+++

An image slider is a component that allows switching between multiple images, like gallery content.

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
        <summary class="carousel-control">All Slides</summary>
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
