+++
title = 'Button'
summary = 'Used to trigger actions or events.'
weight = 50
+++

Buttons are the most basic building block of a UI. We provide buttons of various sizes and designs.

## Basic Class

The `btn` class provides the most basic appearance.

```html {preview="flex"}
<button class="btn" type="button">Button</button>
```

## Size

You can specify the size with `is-lg` or `is-sm`.

- lg
- md (default)
- sm
- xs

```html {preview="flex"}
<button class="btn is-xs btn-fill" type="button">Button</button>
<button class="btn is-sm btn-fill" type="button">Button</button>
<button class="btn is-md btn-fill" type="button">Button</button>
<button class="btn is-lg btn-fill" type="button">Button</button>
```

## Type

There are three types of button designs. You can use them by adding classes.

- Filled button
- Outline button
- Text button

```html {preview="flex"}
<button class="btn btn-fill" type="button">Button</button>
<button class="btn btn-outline" type="button">Button</button>
<button class="btn btn-text" type="button">Button</button>
```

## Accessibility

### Target Area

The target area of the button is designed to maintain 44CSSpx or more. When specifying `is-xs` or `is-sm`, the target area is expanded by `after`.

### Cursor

`cursor: pointer;` is a value determined to indicate a link. A button may or may not be a link, but we uniformly change the cursor to a pointer.
