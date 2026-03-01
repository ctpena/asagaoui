+++
title = 'Checkbox'
weight = 20
+++

Checkboxes are form elements that allow users to select one or more items from multiple options. AsagaoUI provides an implementation focused on accessibility and usability.

{{< code-snippet lang="html" preview="true" >}}
<label class="checkbox">
    <input class="checkbox-input" type="checkbox">
    Label
</label>
{{< /code-snippet >}}

## Sizes

You can change the size of the checkbox by adding `is-sm`, `is-md`, or `is-lg` classes.

- `sm` Default size
- `md`
- `lg` 

{{< code-snippet lang="html" preview="true" >}}
<label class="checkbox is-lg">
    <input class="checkbox-input" type="checkbox">
    lg size
</label>
<label class="checkbox is-md">
    <input class="checkbox-input" type="checkbox">
    md size
</label>
<label class="checkbox is-sm">
    <input class="checkbox-input" type="checkbox">
    sm size
</label>
{{< /code-snippet >}}

## Example

An example using `form-group`, which makes error display concise.

{{< code-snippet lang="html" preview="true" >}}
<div class="form-group">
    <label for="test" class="form-label">
        Tokyo 23 Wards
        <span class="form-necessity">* Required</span>
    </label>
    <div class="form-support">Please select all applicable wards.</div>
    <div>
        <label class="checkbox">
            <input class="checkbox-input" type="checkbox">
            Adachi
        </label>
        <label class="checkbox">
            <input class="checkbox-input" type="checkbox">
            Arakawa
        </label>
        <label class="checkbox">
            <input class="checkbox-input" type="checkbox">
            Itabashi
        </label>
        <label class="checkbox">
            <input class="checkbox-input" type="checkbox">
            Edogawa
        </label>
    </div>
</div>
{{< /code-snippet >}}
