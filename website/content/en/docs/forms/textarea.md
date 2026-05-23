+++
title = 'Textarea'
summary = 'Textarea'
+++


A UI component for forms where users need to input multiple lines of text.

```html {preview="true"}
<div class="form-group">
    <label for="test" class="form-label">
        Label
        <span class="form-necessity">*Required</span>
    </label>
    <div class="form-support">Support text</div>
    <textarea id="test" class="textarea"></textarea>
    <div class="form-error">*Error text</div>
</div>
```

## HTML Attributes

### Disabled

Adding the `disabled` attribute grays out the input.

```html {preview="true"}
<textarea class="textarea" disabled></textarea>
```

### Read-only

Using `readonly` results in a specialized design.

```html {preview="true"}
<textarea class="textarea" readonly></textarea>
```

## Validation and Feedback

Feedback design after validating user input.

### Error

Just add the `is-error` class.

```html {preview="true"}
<textarea class="textarea is-error"></textarea>
```

Using `form-group` allows you to display error text at the same time.

```html {preview="true"}
<div class="form-group">
    <label for="test" class="form-label">
        Label
        <span class="form-necessity">*Required</span>
    </label>
    <div class="form-support">Support text</div>
    <textarea id="test" class="textarea is-error"></textarea>
    <div class="form-error">*Error text</div>
</div>
```

## Character Counter

Requires JavaScript. Specifying a custom element with `is="au-textarea"` enables the character counter.

```html {preview="true"}
<div class="form-group">
    <label for="test" class="form-label">
        Label
        <span class="form-necessity">*Required</span>
    </label>
    <div class="form-support">Support text</div>
    <textarea is="au-textarea" id="test" class="textarea"></textarea>
    <div class="form-error">*Error text</div>
</div>
```
