+++
title = 'Utility Link'
summary = 'Utility links are similar to ordinary horizontal link lists, but are more compact.'
weight = 310
+++

Utility links are similar to ordinary horizontal link lists, but are more compact.

```html {preview="true"}
<a class="utilitylink" href="">Link text</a>
```

## External Link

When linking to external content, it is more polite to add the `rel="external"` attribute. Adding this attribute displays an icon indicating that it is an external link.

```html {preview="true"}
<a class="utilitylink" rel="external" href="https://design.digital.go.jp/dads/">Digital Agency Design System</a>
```

## New Tab or Window

Whether to open a link in a new tab or window should be chosen by the user and should not be explicitly specified. If you must use it, indicate what will happen when the link is clicked.

```html {preview="true"}
<a class="utilitylink" href="https://design.digital.go.jp/dads/" target="_blank">Digital Agency Design System (Opens in a new window)</a>
```
