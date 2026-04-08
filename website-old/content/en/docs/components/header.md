---
title: Header
weight: 100
---

You can effectively display multiple containers required for a header. Simply place the necessary components in HTML and set the appropriate classes.

## How it Works

The information required to use the header is as follows:

- There are two types of headers: `.header-full` and `.header-slim`.
- A `.header` wrapper is required to wrap the whole content.

## Example

{{< code-snippet lang="html" preview="true" >}}
<header class="header">
    <nav class="header-slim">
        <a class="header-logo" href="">
            AsagaoUI
        </a>
    </nav>
</header>
<hr class="mt-5">
<header class="header">
    <nav class="header-full">
        <a class="header-logo" href="">
            AsagaoUI
        </a>
    </nav>
</header>
{{< /code-snippet >}}

## Markup Classes

The header provides classes to properly arrange each piece of content.

- `.header-logo`: Place the brand logo.
- `.header-items`: Place utility links.
- `.header-menu`: Place the global menu.
- `.header-button`: Place language switch or menu buttons.
