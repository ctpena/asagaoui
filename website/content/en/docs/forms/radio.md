+++
title = 'Radio Button'
weight = 60
+++

A component for users to select one option from multiple choices.

{{% code-snippet lang="html" preview="true" %}}
<label class="radio">
    <input class="radio-input" type="radio">
    Label
</label>
{{% /code-snippet %}}

## Sizes

You can change the size of the radio button by adding `is-sm`, `is-md`, or `is-lg` classes.

- `sm` Default size
- `md`
- `lg`

{{% code-snippet lang="html" preview="true" %}}
<label class="radio is-sm">
    <input class="radio-input" type="radio">
    Label
</label>
<label class="radio is-md">
    <input class="radio-input" type="radio">
    Label
</label>
<label class="radio is-lg">
    <input class="radio-input" type="radio">
    Label
</label>
{{% /code-snippet %}}

## Example

{{% code-snippet lang="html" preview="true" %}}
<fieldset class="form-group">
    <legend class="form-label">
        Tokyo 23 Wards
        <span class="form-necessity">* Required</span>
    </legend>
    <div class="form-support">Please select a ward.</div>
    <div>
        <label class="radio">
            <input class="radio-input" type="radio" name="tokyo">
            Adachi
        </label>
        <label class="radio">
            <input class="radio-input" type="radio" name="tokyo">
            Arakawa
        </label>
        <label class="radio">
            <input class="radio-input" type="radio" name="tokyo">
            Itabashi
        </label>
        <label class="radio">
            <input class="radio-input" type="radio" name="tokyo">
            Edogawa
        </label>
    </div>
</fieldset>
{{% /code-snippet %}}
