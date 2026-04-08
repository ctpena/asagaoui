+++
title = 'Accessibility'
weight = 40
+++

AsagaoUI does not include special implementations specifically for accessibility. It is based on the belief that practical accessibility can be provided simply by using appropriate HTML.

## Basic Policy

Native HTML elements (such as `<button>`, `<nav>`, `<main>`, `<select>`, etc.) already include accessibility features. Using these properly automatically ensures compatibility with assistive technologies and basic keyboard operation.

AsagaoUI is a pure CSS framework. Since much of accessibility is determined by HTML structure and semantics, the responsibility of a CSS framework, which handles styling, is limited. These are ultimately the responsibility of those providing the final web service.

## Inheritance from the Digital Agency Design System

AsagaoUI is created based on the [Digital Agency Design System](https://design.digital.go.jp/), which already considers accessibility. Therefore, for accessibility regarding basic color combinations, contrast ratios, font sizes, and target sizes for links and buttons, please refer to the [Digital Agency Design System Accessibility Page](https://design.digital.go.jp/guidance/accessibility/).

### Selective Inheritance Policy

However, not everything from the [Digital Agency Design System](https://design.digital.go.jp/) is inherited. We exclude things that require complex HTML structures or where the implementation would become excessive or complicated, such as:

- Return links for [Accordions](/docs/components/accordion/) or Disclosures
- Character counters for [Textareas](/docs/forms/overview/)

While these elements are means of improving accessibility when implemented correctly, they can lead to HTML complexity and JavaScript dependency, which contradicts AsagaoUI's basic policy that "practical accessibility can be provided simply by using appropriate HTML." If necessary, developers should use these elements directly from the original [Digital Agency Design System](https://design.digital.go.jp/).

## References

- [HTML Standard](https://html.spec.whatwg.org/multipage/)
- [ARIA - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [HTML: A good basis for accessibility - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML)
