+++
title = 'Input Text'
summary = 'The text input component is the most basic input component.'
weight = 50
+++

The text input component is the most basic input component. It provides styling for text input components implemented with `<input>`, etc.

## Example

Basically, just add the `input` class.

```html {preview="true"}
<input id="" type="text" class="input">
```

## Sizes

You can change the size using classes such as `is-sm` or `is-md`.

```html {preview="true"}
<input id="" type="text" class="input is-lg">
<hr class="mt-3">
<input id="" type="text" class="input is-md">
<hr class="mt-3">
<input id="" type="text" class="input is-sm">
```

## HTML Attributes

### Disabled

Adding the `disabled` attribute will gray out the input.

```html {preview="true"}
<input id="" type="text" class="input" disabled>
```

### Read-only

Using `readonly` will apply a specific design.

```html {preview="true"}
<input id="" type="text" class="input" readonly>
```

## Validation and Feedback

Feedback design after validating user input.

### Error

Simply add the `is-error` class.

```html {preview="true"}
<input id="" type="text" class="input is-error">
```

Using `form-group` allows you to display error text at the same time.

```html {preview="true"}
<div class="form-group">
    <label for="test" class="form-label">
        Label
        <span class="form-necessity">* Required</span>
    </label>
    <div class="form-support">Support text</div>
    <input id="test" type="text" class="input is-error">
    <div class="form-error">* Error text</div>
</div>
```
