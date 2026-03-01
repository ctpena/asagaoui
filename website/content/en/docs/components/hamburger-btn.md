---
title: Hamburger Menu Button
weight: 90
---

A component used to implement hamburger buttons commonly found in mobile menus.

The alignment of the icon and text (horizontal or vertical) is adjusted automatically, but it can also be explicitly specified.

{{% code-snippet lang="html" preview="true" %}}

<div class="hstack g-4">
    <button
        class="hamburger-iconbtn"
        type="button">
        <i class="hamburger-icon"></i>
        Menu
    </button>
    <button
        class="hamburger-btn"
        type="button">
        <i class="hamburger-icon"></i>
        Menu
    </button>
</div>

{{% /code-snippet %}}
