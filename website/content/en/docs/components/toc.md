+++
title = 'Toc'
summary = 'Toc'
weight = 300
+++

This component extracts heading elements from pages containing long text and places them at the top of the page as a table of contents. You can also combine it with the “Bulleted List” component to create a hierarchical structure.

```html {preview="true"}
<nav class="toc">
    <ul>
        <li><a href="">Item</a></li>
        <li>
            <a href="">Item</a>
            <ul>
                <li><a href="">Item</a></li>
                <li><a href="">Item</a></li>
                <li><a href="">Item</a></li>
            </ul>
        </li>
        <li><a href="">Item</a></li>
    </ul>
</nav>
```
