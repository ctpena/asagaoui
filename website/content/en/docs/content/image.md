+++
title = 'Image'
summary = 'A component for embedding images in a page, corresponding to the HTML img. It can also be used in combination with image captions.'
+++

A component for embedding images in a page, based on the HTML `<img>` element. It can also be used together with an image caption.

```html {preview="true"}
<img class="img-fluid" src="/no-image.svg" alt="Sample image" width="696" height="392">
```

## Figure with Caption

```html {preview="true"}
<figure class="figure">
    <div class="figure-image-area bordered">
        <img class="figure-image" src="/no-image.svg" alt="Sample image" width="696" height="392">
    </div>
    <figcaption class="figure-caption">This is a dummy image caption. A dummy image caption is placeholder text used when creating designs and layouts.</figcaption>
</figure>
```

### Link

```html {preview="true"}
<figure class="figure">
    <a class="figure-image-area" href="#">
        <img class="figure-image" src="/no-image.svg" alt="Sample image" width="696" height="392">
    </a>
    <figcaption class="figure-caption">This is a dummy image caption. A dummy image caption is placeholder text used when creating designs and layouts.</figcaption>
</figure>
```
