---
title: Overview
weight: 10
---

Beautiful, convenient, and easy-to-use digital services have beautiful forms. They are the most important part of user interaction in digital services, and we have performed various optimizations to provide a clear and concise UI.

## Approach and Concept

There are various ways to implement forms in mainstream UI components and design systems. My approach is designed to manage form states solely through classes set on `<input>` elements. This design allows for easy integration with modern frontend frameworks and template systems, enhancing development efficiency.

Specifically, each element such as the input field, label, required indicator, support text, and error text works together to switch styles according to the state. This allows developers to intuitively change the state of the form, significantly increasing development speed.

## Components

A single input field is composed of the following parts. The actual combined behavior is as follows:

{{% code-snippet lang="html" preview="true" %}}
<div class="form-group">
    <label for="test" class="form-label">
        Label
        <span class="form-necessity">* Required</span>
    </label>
    <div class="form-support">Support text</div>
    <input id="test" type="text" class="input">
    <div class="form-error">* Error text</div>
</div>
{{% /code-snippet %}}

### Input Field

The field that serves as the basis for everything. Various state changes can be performed by changing the `class` of this field.

### Label

An explanation of what should be entered into the input field.

### Necessity Label

A label that explains whether input to that field is required when submitting the form.

### Support Text

Text that provides assistance regarding the value to be entered into the input field.

### Error Text

Text that displays the content of an error when one occurs.

### Character Counter

A character counter required for `textarea`. While defined in the [Digital Agency Design System](https://design.digital.go.jp/components/textarea/), its use is not recommended in AsagaoUI.

