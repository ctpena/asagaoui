+++
title = 'Switch'
summary = 'Switch'
+++

A switch is a control UI for settings that take effect immediately when toggled. It is used for settings where the result of the change can be visually confirmed on the spot.

* Use the Checkbox or Radio Button components for settings where the result of the switch operation is not immediately apparent from the screen display, or for those that require a confirmation action such as a "Save" or "Submit" button.

## On/Off Switch

```html {preview="true"}
<label class="switch">
    <input class="switch-input" type="checkbox">
</label>
```

### Disabled

```html {preview="true"}
<label class="switch">
    <input class="switch-input" type="checkbox" checked disabled>
</label>
```

## Mode Switch

