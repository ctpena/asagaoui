+++
title = 'Radio Button'
summary = 'A component for users to select one from multiple options.'
+++

A component for users to select one from multiple options.

```html {preview="true"}
<label class="radio">
    <input class="radio-input" type="radio">
    Label
</label>
```

## Size

You can change the size of the radio button by adding `is-sm`, `is-md`, or `is-lg` classes.

- `sm` Default size
- `md`
- `lg`

```html {preview="true"}
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
```

## Example

```html {preview="true"}
<fieldset class="form-group">
    <legend class="form-label">
        Tokyo 23 Wards
        <span class="form-necessity">*Required</span>
    </legend>
    <div class="form-support">Please select the applicable ward.</div>
    <div>
        <label class="radio">
            <input class="radio-input" type="radio" name="tokyo">
            Adachi-ku
        </label>
        <label class="radio">
            <input class="radio-input" type="radio" name="tokyo">
            Arakawa-ku
        </label>
        <label class="radio">
            <input class="radio-input" type="radio" name="tokyo">
            Itabashi-ku
        </label>
        <label class="radio">
            <input class="radio-input" type="radio" name="tokyo">
            Edogawa-ku
        </label>
    </div>
</fieldset>
```
