---
title: Button
weight: 40
---

Buttons are the most fundamental building blocks of a UI. We provide buttons in various sizes and designs.

## Base Class

The `btn` class provides the most basic appearance.

{{< code-snippet lang="html" preview="true" >}}
<div>
    <button class="btn" type="button">Button</button>
</div>
{{< /code-snippet >}}

## Sizes

You can specify sizes using `is-lg` or `is-sm`.

- lg
- md (default)
- sm
- xs

{{< code-snippet lang="html" preview="true" pv-layout="flex" >}}
<button class="btn is-xs btn-fill" type="button">Button</button>
<button class="btn is-sm btn-fill" type="button">Button</button>
<button class="btn is-md btn-fill" type="button">Button</button>
<button class="btn is-lg btn-fill" type="button">Button</button>
{{< /code-snippet >}}

## Types

There are three types of button designs. You can use them by adding classes.

- Filled Button
- Outline Button
- Text Button

{{< code-snippet lang="html" preview="true" pv-layout="flex" >}}
<button class="btn btn-fill" type="button">Button</button>
<button class="btn btn-outline" type="button">Button</button>
<button class="btn btn-text" type="button">Button</button>
{{< /code-snippet >}}

## Accessibility

### Target Area

The target area of the buttons is maintained at 44 CSSpx or more. When `is-xs` or `is-sm` is specified, the target area is expanded using `::after`.

### Cursor

`cursor: pointer;` is typically defined as a value indicating a link. While buttons may or may not be links, we uniformly change the cursor to a pointer for all buttons.
