---
title: Overview
weight: 1
---

AsagaoUI is designed to provide consistent design based on the Digital Agency Design System.
The `scss/styles` folder is at its core, defining the fundamental elements required for design, such as Color 2.0, Typography, and Spacing.

```text
asagaoui/scss/
├── asagaoui-icons.scss
├── asagaoui.scss
├── base/
│   ├── _base.scss
│   └── _reset.scss
├── components/
├── forms/
├── layout/
├── styles
│   ├── _breakpoint.scss
│   ├── _color.scss
│   ├── _ratios.scss
│   ├── _rounding.scss
│   ├── _spacing.scss
│   └── _typography.scss
└── utilities/
```

## Effective Use of Styles

Even when creating original components without using AsagaoUI components, you can easily achieve a consistent design based on the Digital Agency Design System by utilizing `styles`.

When creating original components, we recommend copying the contents of `styles` and referencing them. This eliminates the need to rewrite basic elements.
