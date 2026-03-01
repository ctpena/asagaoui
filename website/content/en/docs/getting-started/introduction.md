+++
title = 'Introduction'
weight = 1
+++

AsagaoUI is a UI component framework for digital services that use a simple and beautiful UI.
It is ideal for those seeking a simple yet elegant UI. Currently, AsagaoUI includes UI component implementations for websites. We plan to provide UI component implementations for Android in the future.

## Quick Start

To get started with AsagaoUI, be sure to make the following two important settings:

1. Add the `viewport` meta tag.
2. Add the root class `.aui` to the `<body>`.

The template HTML for a quick start is as follows:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>quick start AsagaoUI</title>
</head>
<body class="aui">
<h1>AsagaoUI</h1>
</body>
</html>
```

### Loading Required CSS and JS

The easiest way is to load the files distributed by jsdelivr using `<link>` and `<script>` tags.

#### CSS

```html
<link href="https://cdn.jsdelivr.net/npm/asagaoui/dist/css/asagaoui.min.css" rel="stylesheet">
```

#### JS

```html
<script src="https://cdn.jsdelivr.net/npm/asagaoui/dist/js/asagaoui.min.js"></script>
```

<div class="banner banner-info mt-3">
    <i class="banner-icon aif-information"></i>
    <span class="banner-title">Is JavaScript required?</span>
    <div class="banner-body">
        <time class="banner-date">February 27, 2026</time>
        <span class="banner-description">It is required for some components like code snippets, but it is completely unnecessary if you do not use those components.</span>
    </div>
</div>

The HTML after placing the tags is as follows:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>quick start AsagaoUI</title>
    <link href="https://cdn.jsdelivr.net/npm/asagaoui/dist/css/asagaoui.min.css" rel="stylesheet">
</head>
<body class="aui">
<h1>AsagaoUI</h1>
<script src="https://cdn.jsdelivr.net/npm/asagaoui/dist/js/asagaoui.min.js"></script>
</body>
</html>
```

## CDN Links

You can get the CSS and JS from [jsdelivr](https://www.jsdelivr.com/package/npm/asagaoui).

## Offline (Self-hosted)

The necessary CSS and JS are in the `dist` folder.

```text
asagaoui/dist/
├── css
│   ├── asagaoui.css
│   └── asagaoui.css.map
└── js
    ├── asagaoui.js
    └── asagaoui.js.map
```

### CSS

```html
<link rel="stylesheet" href="dist/css/asagaoui.css">
```

### JS

```html
<script src="dist/js/asagaoui.js"></script>
```

## Important Global Settings

### HTML

AsagaoUI is designed based on HTML markup compliant with the HTML Living Standard.

### CSS Reset

To achieve consistent styling, AsagaoUI uses [The New CSS Reset](https://github.com/elad2412/the-new-css-reset) to reset all default CSS.

### Fonts

The font used in AsagaoUI is set to "Noto Sans Japanese". The font weights used are 400 for regular text and 700 for emphasis and headings.

#### Default Settings

```css
.aui {
    font-family: "Noto Sans JP", "Noto Sans", sans-serif;
}
```

### Box-sizing

For easier UI layout calculations, `box-sizing` is set to `border-box`.

## Next Steps

- For an explanation of the files included in AsagaoUI, refer to the [Directory Structure](/docs/getting-started/directory-structure/).
- For icons available in AsagaoUI, refer to [AsagaoUI Icons](/icons/).

