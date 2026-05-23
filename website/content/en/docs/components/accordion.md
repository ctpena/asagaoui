+++
title = 'Accordion'
summary = 'Provides a UI that can collapse and hide content.'
weight = 10
+++

An accordion provides a UI that can collapse and hide content. Since it uses the `<details>` HTML element, no JavaScript is required.

Clicking the accordion below will display the hidden content.

To render an accordion expanded by default, add the `open` attribute.

```html {preview="true"}
<details class="accordion">
    <summary class="accordion-header">What is dummy text?</summary>
    <div class="accordion-body">
        This is dummy text. Dummy text is a placeholder text used during the creation of design and layout. Using dummy text allows you to evaluate the overall design and check the placement and length of the text. Since dummy text is not an actual sentence, the content has no meaning.
    </div>
</details>
```

## Difference from Digital Agency Design System

In [Digital Agency Design System v2.13.0](https://design.digital.go.jp/components/accordion/), a return link is implemented when the accordion is expanded, but AsagaoUI does not implement it for the following reasons:

- Improved usability: Browser-standard scrolling is sufficient
- Consideration for accessibility: Reduction of cognitive load by avoiding additional elements
- Improved maintainability and sustainability

Individual customized implementation is recommended especially for long content where return links are needed.
