+++
title = 'Introduction'
weight = 1
+++

AsagaoUI is a UI component framework for digital services using a simple and beautiful UI.
It is ideal for everyone looking for a simple and beautiful UI.

## Quick Start

To start using AsagaoUI, be sure to make the following two important settings.

1. Add the `viewport` meta tag.
2. Add the root class `.aui` to `<body>`.

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

### Loading necessary CSS and JS

The easiest way is to load the files distributed from jsdelivr using `<link>` and `<script>` tags.

#### CSS

```html
<link href="https://cdn.jsdelivr.net/npm/asagaoui/dist/css/asagaoui.min.css" rel="stylesheet">
```

#### JS

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/asagaoui/dist/js/asagaoui.min.js"></script>
```

The HTML after placing the tags is as follows:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>quick start AsagaoUI</title>
    <link href="https://cdn.jsdelivr.net/npm/asagaoui/dist/css/asagaoui.min.css" rel="stylesheet">
    <script type="module" src="https://cdn.jsdelivr.net/npm/asagaoui/dist/js/asagaoui.min.js"></script>
</head>
<body class="aui">
<h1>AsagaoUI</h1>
</body>
</html>
```

## CDN Links

You can get CSS and JS at [jsdelivr](https://www.jsdelivr.com/package/npm/asagaoui).

## Offline (Self-hosting)

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
<script type="module" src="dist/js/asagaoui.js"></script>
```

## Important Global Settings

### HTML

AsagaoUI is designed with the assumption of HTML markup compliant with the HTML Living Standard.

### CSS Reset

To achieve consistent styling, AsagaoUI resets all default CSS using [The New CSS Reset](https://github.com/elad2412/the-new-css-reset).

### Fonts

The font used in AsagaoUI is set to "Noto Sans Japanese". The font weights used are 400 for regular text and 700 for emphasis and headings.

#### Default Settings

```css
.aui {
    font-family: "Noto Sans JP", "Noto Sans", sans-serif;
}
```

### Box-sizing

To simplify UI layout calculations, `box-sizing` has been changed to `border-box`.

## Next Steps

- For an explanation of the files included in AsagaoUI, please refer to [Directory Structure](/docs/getting-started/directory-structure/).
- For icons available in AsagaoUI, please refer to [AsagaoUI Icons](/icons/).
