+++
title = 'Container'
+++

Align content in the center at an appropriate size.

## Normal Container

It continues to expand to the appropriate size according to the screen size. By using the `.container`
class, content is centered, and margins are automatically adjusted.

Below is an example of a basic HTML structure using the `.container` class. This container centers the content it contains and adjusts its size according to responsive design principles.

```html {preview="false"}
<div class="container">
    <!-- Add content here -->
</div>
```

## Container Size

The maximum size of the container is defined for each breakpoint.
When using a normal `container`, it switches automatically.

* sm: 768px
* md: 992px
* lg: 1280px
* xl: 1440px
* xxl: 1920px
* xxxl: 2560px
* x4k: 3840px

Also, you can specify the maximum size as follows:

```html {preview="false"}
<div class="container-md">
    <!-- Does not expand beyond 992px -->
</div>
```

## 100% Style

By using `container-fluid`, it will always be 100% at any screen width.

```html {preview="false"}
<div class="container-fluid">
    <!-- Add content here -->
</div>
```
