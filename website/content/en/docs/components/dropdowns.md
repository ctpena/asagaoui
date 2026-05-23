+++
title = 'Dropdown'
summary = 'A UI that can overlay content.'
weight = 125
+++

Components such as menu lists can be overlaid upon user click.

Implemented using the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API). Positions are calculated via [CSS anchor positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning), but JS is used to specify the `anchor-name`.

## ID Naming Convention

To automatically assign `anchor-name` to a dropdown, set the dropdown ID in the format `au-dropdown-{arbitrary string}`.

### Example

- `au-dropdown-0`
- `au-dropdown-main`

## Preview

```html {preview="true"}
<ul class="globalmenu" style="height: 55px;">
    <li class="globalmenu-item">
        <button popovertarget="au-dropdown-0" class="globalmenu-link">Resource</button>
        <div class="dropdown" id="au-dropdown-0" popover>
            <ul class="menulist">
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 1</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 2</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 3</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 4</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 5</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 6</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 7</a></li>
            </ul>
        </div>
    </li>
    <li class="globalmenu-item">
        <button popovertarget="au-dropdown-1" class="globalmenu-link">Resource</button>
        <div class="dropdown" id="au-dropdown-1" popover>
            <ul class="menulist">
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 1</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 2</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 3</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 4</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 5</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 6</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 7</a></li>
                <li class="menulist-item"><a class="menulist-link" href="">Menu Item 8</a></li>
            </ul>
        </div>
    </li>
</ul>
```
