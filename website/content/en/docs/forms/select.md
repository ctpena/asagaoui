+++
title = 'Select Box'
summary = 'Select Box'
+++

It can be used simply by adding a class to the HTML `select` tag.

```html {preview="true"}
<select class="select">
    <option value="">Please select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
```

## Example

```html {preview="true"}
<div class="form-group">
    <label for="test" class="form-label">
        Tokyo 23 Wards
        <span class="form-necessity">*Required</span>
    </label>
    <div class="form-support">Please select the applicable ward.</div>
    <select id="test" class="select">
        <option value="">Please select</option>
        <option value="1">Adachi-ku</option>
        <option value="2">Arakawa-ku</option>
        <option value="3">Itabashi-ku</option>
        <option value="4">Edogawa-ku</option>
    </select>
    <div class="form-error">*Error text</div>
</div>
```

## Size

- sm
- md (default)
- lg

```html {preview="flex"}
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
```

## HTML Attributes

### Disabled

Adding the `disabled` attribute grays out the input.

```html {preview="true"}
<select class="select" disabled>
    <option value="">Please select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
```

## Validation and Feedback

Feedback design after validating user input.

### Error

Just add the `is-error` class.

```html {preview="true"}
<select class="select is-error">
    <option value="">Please select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
```

Using `form-group` allows you to display error text at the same time.

```html {preview="true"}
<div class="form-group">
    <label for="test" class="form-label">
        Tokyo 23 Wards
        <span class="form-necessity">*Required</span>
    </label>
    <div class="form-support">Please select the applicable ward.</div>
    <select id="test" class="select is-error">
        <option value="">Please select</option>
        <option value="1">Adachi-ku</option>
        <option value="2">Arakawa-ku</option>
        <option value="3">Itabashi-ku</option>
        <option value="4">Edogawa-ku</option>
    </select>
    <div class="form-error">*Error text</div>
</div>
```
