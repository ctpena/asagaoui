+++
title = 'Breakpoints'
weight = 1
+++

Mobile-first breakpoints are used. Two types of breakpoints are provided: implementations existing in the Digital Agency Design System and breakpoints for improved development convenience.

## Component Breakpoints

These are breakpoints defined in the layout of Digital Agency Design System 1.4.3, used in AsagaoUI mainly for switching between mobile/tablet and desktop for components. These breakpoints are applied automatically internally.

`scss/styles/_breakpoint.scss` is where they are defined.

| Device | Viewport Range |
| --- | --- |
| Mobile/Tablet | < 768px |
| Desktop | >= 768px |

Mainly used for font sizes when `.h1` or `.h2` classes are specified, and banner padding.

## Layout Breakpoints

These breakpoints were prepared to improve convenience, as component breakpoints cannot efficiently handle various device viewports. They can be used by including the layout breakpoint, such as `d-md-none`.

`scss/utilities/_breakpoint.scss` is where they are defined.

| Breakpoint | Class name | Viewport Range |
| --- | --- | --- |
| None | | < 768px |
| sm | sm | >= 768px |
| md | md | >= 992px |
| lg | lg | >= 1280px |
| xl | xl | >= 1440px |
| xxl | xxl | >= 1920px |
| xxxl | xxxl | >= 2560px |
| x4k | x4k | >= 3840px |
