+++
title = 'Textarea'
weight = 90
+++

A UI component for forms where users need to enter multiple lines of text.

{{< code-snippet lang="html" preview="true" >}}
<div class="form-group">
    <label for="test" class="form-label">
        Label
        <span class="form-necessity">* Required</span>
    </label>
    <div class="form-support">Support text</div>
    <textarea id="test" class="textarea"></textarea>
    <div class="form-error">* Error text</div>
</div>
{{< /code-snippet >}}

## HTML Attributes

### Disabled

Adding the `disabled` attribute will gray out the input.

{{< code-snippet lang="html" preview="true" >}}
<textarea class="textarea" disabled></textarea>
{{< /code-snippet >}}

### Read-only

Using `readonly` will apply a specific design.

{{< code-snippet lang="html" preview="true" >}}
<textarea class="textarea" readonly></textarea>
{{< /code-snippet >}}

## Validation and Feedback

Feedback design after validating user input.

### Error

Simply add the `is-error` class.

{{< code-snippet lang="html" preview="true" >}}
<textarea class="textarea is-error"></textarea>
{{< /code-snippet >}}

Using `form-group` allows you to display error text at the same time.

{{< code-snippet lang="html" preview="true" >}}
<div class="form-group">
    <label for="test" class="form-label">
        Label
        <span class="form-necessity">* Required</span>
    </label>
    <div class="form-support">Support text</div>
    <textarea id="test" class="textarea is-error"></textarea>
    <div class="form-error">* Error text</div>
</div>
{{< /code-snippet >}}
