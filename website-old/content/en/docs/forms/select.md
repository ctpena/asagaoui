+++
title = 'Select Box'
weight = 70
+++

Available simply by adding a class to the HTML `select` tag.

{{< code-snippet lang="html" preview="true" >}}
<select class="select">
    <option value="">Please select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
{{< /code-snippet >}}

## Example

{{< code-snippet lang="html" preview="true" >}}
<div class="form-group">
    <label for="test" class="form-label">
        Tokyo 23 Wards
        <span class="form-necessity">* Required</span>
    </label>
    <div class="form-support">Please select a ward.</div>
    <select id="test" class="select">
        <option value="">Please select</option>
        <option value="1">Adachi</option>
        <option value="2">Arakawa</option>
        <option value="3">Itabashi</option>
        <option value="4">Edogawa</option>
    </select>
    <div class="form-error">* Error text</div>
</div>
{{< /code-snippet >}}

## Sizes

- sm
- md (Default)
- lg

{{< code-snippet lang="html" preview="true" pv-layout="flex" >}}
<select class="select is-sm">
    <option value="">Please select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
<select class="select is-md">
    <option value="">Please select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
<select class="select is-lg">
    <option value="">Please select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
{{< /code-snippet >}}

## HTML Attributes

### Disabled

Adding the `disabled` attribute will gray out the input.

{{< code-snippet lang="html" preview="true" >}}
<select class="select" disabled>
    <option value="">Please select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
{{< /code-snippet >}}

## Validation and Feedback

Feedback design after validating user input.

### Error

Simply add the `is-error` class.

{{< code-snippet lang="html" preview="true" >}}
<select class="select is-error">
    <option value="">Please select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
{{< /code-snippet >}}

Using `form-group` allows you to display error text at the same time.

{{< code-snippet lang="html" preview="true" >}}
<div class="form-group">
    <label for="test" class="form-label">
        Tokyo 23 Wards
        <span class="form-necessity">* Required</span>
    </label>
    <div class="form-support">Please select a ward.</div>
    <select id="test" class="select is-error">
        <option value="">Please select</option>
        <option value="1">Adachi</option>
        <option value="2">Arakawa</option>
        <option value="3">Itabashi</option>
        <option value="4">Edogawa</option>
    </select>
    <div class="form-error">* Error text</div>
</div>
{{< /code-snippet >}}
