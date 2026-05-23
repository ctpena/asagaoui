+++
title = 'Accessibility'
weight = 4
+++

AsagaoUI does not perform any special implementation to ensure accessibility. It is based on the belief that practical accessibility can be provided simply by using appropriate HTML.

## Basic Policy

Native HTML elements (such as `<button>`, `<nav>`, `<main>`, `<select>`, etc.) already include accessibility features. By using them appropriately, compatibility with assistive technologies and basic keyboard operations are automatically ensured.

## Inheriting the Digital Agency Design System

AsagaoUI is based on the [Digital Agency Design System](https://design.digital.go.jp/dads/), which is already designed with accessibility in mind. Therefore, regarding accessibility concerning basic color combinations, contrast ratios, font sizes, and target sizes for links and buttons, please refer to the [Digital Agency Design System's Accessibility page](https://design.digital.go.jp/dads/guidance/accessibility/).

### Selective Inheritance Policy

However, not all parts of the [Digital Agency Design System](https://design.digital.go.jp/dads/) have been inherited. We have excluded items that require complex HTML structures or where implementation would be excessive or complicated, such as:

- Return links for [Accordions](/docs/components/accordion/) or [Disclosures](/docs/components/disclosure/).
- Character counters for [Textareas](/docs/forms/textarea/).

While these elements can be means of improving accessibility if implemented correctly, they lead to more complex HTML and increased JavaScript dependency. This contradicts AsagaoUI's basic policy that "practical accessibility can be provided simply by using appropriate HTML." If necessary, developers should use these elements directly from the original [Digital Agency Design System](https://design.digital.go.jp/dads/).

## References

- [HTML Standard](https://html.spec.whatwg.org/multipage/)
- [ARIA - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [HTML: A good basis for accessibility - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML)
