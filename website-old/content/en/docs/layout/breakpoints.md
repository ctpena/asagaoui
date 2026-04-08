---
title: Breakpoints
weight: 1
---

We use mobile-first breakpoints. We provide two types of breakpoints: those that existed in the Digital Agency Design System and those provided for improved development convenience.

## Component Breakpoints

These breakpoints are defined in the Digital Agency Design System 1.4.3 layout and are mainly used in AsagaoUI to switch between mobile/tablet and desktop views for components. These breakpoints are applied automatically internally.

Defined in `scss/styles/_breakpoint.scss`.

| Device          | Viewport Range |
|-----------------|----------------|
| Mobile / Tablet | <768px         |
| Desktop         | >=768px        |

Mainly used for font sizes when `.h1` or `.h2` classes are specified, banner padding, etc.

## Layout Breakpoints

Since component breakpoints cannot efficiently handle various device viewports, these breakpoints are provided for improved convenience. They can be used by including the layout breakpoint in class names, such as `d-md-none`.

Defined in `scss/utilities/_breakpoint.scss`.

| Breakpoint | Class Name | Viewport Range |
|------------|------------|----------------|
| None       |            | <768px         |
| sm         | sm         | >=768px        |
| md         | md         | >=992px        |
| lg         | lg         | >=1280px       |
| xl         | xl         | >=1440px       |
| xxl        | xxl        | >=1920px       |
| xxxl       | xxxl       | >=2560px       |
| x4k        | x4k        | >=3840px       |
