+++
title = 'Input Text'
weight = 50
+++

The text input component is the most basic input component. It provides styling for text input components implemented with `<input>`, etc.

## Example

Basically, just add the `input` class.

{{% code-snippet lang="html" preview="true" %}}
<input id="" type="text" class="input">
{{% /code-snippet %}}

## Sizes

You can change the size using classes such as `is-sm` or `is-md`.

{{% code-snippet lang="html" preview="true" %}}
<input id="" type="text" class="input is-lg">
<hr class="mt-3">
<input id="" type="text" class="input is-md">
<hr class="mt-3">
<input id="" type="text" class="input is-sm">
{{% /code-snippet %}}

## HTML Attributes

### Disabled

Adding the `disabled` attribute will gray out the input.

{{% code-snippet lang="html" preview="true" %}}
<input id="" type="text" class="input" disabled>
{{% /code-snippet %}}

### Read-only

Using `readonly` will apply a specific design.

{{% code-snippet lang="html" preview="true" %}}
<input id="" type="text" class="input" readonly>
{{% /code-snippet %}}

## Validation and Feedback

Feedback design after validating user input.

### Error

Simply add the `is-error` class.

{{% code-snippet lang="html" preview="true" %}}
<input id="" type="text" class="input is-error">
{{% /code-snippet %}}

Using `form-group` allows you to display error text at the same time.

{{% code-snippet lang="html" preview="true" %}}
<div class="form-group">
    <label for="test" class="form-label">
        Label
        <span class="form-necessity">* Required</span>
    </label>
    <div class="form-support">Support text</div>
    <input id="test" type="text" class="input is-error">
    <div class="form-error">* Error text</div>
</div>
{{% /code-snippet %}}
