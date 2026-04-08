---
title: Container
---

Centers content at an appropriate size.

## Standard Container

The container expands to an appropriate size according to the screen size. By using the `.container` class, content is centered, and margins are automatically adjusted.

Below is an example of a basic HTML structure using the `.container` class. This container properly centers its internal content and adjusts its size according to responsive design principles.

{{< code-snippet lang="html" preview="false" >}}
<div class="container">
    <!-- Add content here -->
</div>
{{< /code-snippet >}}

## Container Sizes

Maximum sizes for the container are defined for each breakpoint. Using the standard `container` will switch them automatically.

* sm: 768px
* md: 992px
* lg: 1280px
* xl: 1440px
* xxl: 1920px
* xxxl: 2560px
* x4k: 3840px

You can also specify a maximum size as follows:

{{< code-snippet lang="html" preview="false" >}}
<div class="container-md">
    <!-- Does not expand beyond 992px -->
</div>
{{< /code-snippet >}}

## 100% Style

By using `container-fluid`, it will always be 100% wide regardless of the screen width.

{{< code-snippet lang="html" preview="false" >}}
<div class="container-fluid">
    <!-- Add content here -->
</div>
{{< /code-snippet >}}
