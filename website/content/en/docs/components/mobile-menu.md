+++
title = 'Mobile Menu'
summary = 'A menu designed for tap operations.'
weight = 210
+++

A menu component designed for tap operations on touchscreens, such as mobile devices, used with hamburger menu buttons and drawers.


```html {preview="true"}
<ul class="mobilemenu" style="max-width: 320px;">
    <li class="mobilemenu-item"><a class="mobilemenu-link" href="">Menu Item</a></li>
    <li class="mobilemenu-item"><a class="mobilemenu-link" href="">Menu Item</a></li>
    <li class="mobilemenu-item">
        <details class="mobilemenu-accordion" open>
            <summary class="mobilemenu-accordion-header">Section Title</summary>
            <ul class="mobilemenu">
                <li class="mobilemenu-item"><a class="mobilemenu-link" href="">Menu Item</a></li>
                <li class="mobilemenu-item"><a class="mobilemenu-link" href="">Menu Item</a></li>
                <li class="mobilemenu-item"><a class="mobilemenu-link" href="">Menu Item</a></li>
                <li class="mobilemenu-item"><a class="mobilemenu-link" href="">Menu Item</a></li>
                <li class="mobilemenu-item"><a class="mobilemenu-link" href="">Menu Item</a></li>
            </ul>
        </details>
    </li>
    <li class="mobilemenu-item"><a class="mobilemenu-link" href="">Menu Item</a></li>
</ul>
```
