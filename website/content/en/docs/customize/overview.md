+++
title = 'Overview'
weight = 1
+++

AsagaoUI is designed to provide a consistent design based on the Digital Agency Design System.
The `scss/styles` folder is at its core, where the basic elements necessary for design, such as Color 2.0, typography, and spacing, are defined collectively.

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

## Effective Use of styles

Even when setting up your own components without using AsagaoUI's components, by using `styles`, you can easily achieve a consistent design based on the Digital Agency Design System.

When creating your own components, we recommend copying the contents of `styles` directly and referencing them when creating your own components. This eliminates the need to rewrite basic elements.
