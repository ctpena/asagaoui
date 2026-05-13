+++
title = 'Accordion'
summary = 'A collapsible content component built on the native HTML element, requiring no JavaScript'
weight = 10
+++

Accordions provide a UI where content can be folded and hidden. Since it uses the `<details>` HTML element, JavaScript is not required.

## Example

Clicking the accordion below will display the hidden content.

To render an accordion expanded by default, add the `open` attribute.

```html {preview="true"}
<details class="accordion">
    <summary class="accordion-header">What is dummy text?</summary>
    <div class="accordion-body">
        This is dummy text. Dummy text is a placeholder text used when creating designs or layouts. Using dummy text allows you to evaluate the overall look of a design and check the placement and length of text. Since dummy text is not actual writing, the content has no meaning.
    </div>
</details>
```

## Differences from the Digital Agency Design System

In [Digital Agency Design System v2.10.1](https://design.digital.go.jp/components/accordion/), a return link is implemented when the accordion is expanded. However, AsagaoUI does not implement it for the following reasons:

- Improved usability: Standard browser scrolling is sufficient.
- Accessibility consideration: Reducing cognitive load by avoiding additional elements.
- Improved maintainability.

If a return link is required, especially for long content, we recommend individual customization and implementation.
