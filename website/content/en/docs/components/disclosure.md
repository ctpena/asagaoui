+++
title = 'Disclosure'
summary = 'A disclosure is used to present additional information for main information in a collapsed state.'
weight = 100
+++

A disclosure is used to present additional information for main information in a collapsed state.

```html {preview="true"}
<details class="disclosure">
  <summary class="disclosure-header">
    What is dummy text?
  </summary>
  <div class="disclosure-body">
    <div>This is dummy text.</div>
    <div>Dummy text is a placeholder text used during the creation of design and layout.</div>
  </div>
</details>
```

## Difference from Digital Agency Design System

In [Digital Agency Design System v2.13.0](https://design.digital.go.jp/components/accordion/), a return link is implemented when the disclosure is expanded, but AsagaoUI does not implement it for the following reasons:

- Improved usability: Browser-standard scrolling is sufficient
- Consideration for accessibility: Reduction of cognitive load by avoiding additional elements
- Improved maintainability and sustainability

Individual customized implementation is recommended especially for long content where return links are needed.
