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

This is a switch that toggles between two options. It is implemented simply using `<input type="radio"/>`. Since it is designed to toggle between two options, be sure to use the `checked` attribute in the initial state to set the default selection.

```html {preview="true"}
<fieldset class="mode-switch">
    <legend class="visually-hidden">Driving Mode</legend>
    <label>
        Mode 1
        <input type="radio" name="driving-mode" value="mode1"/>
    </label>
    <label>
        Mode 2
        <input type="radio" name="driving-mode" value="mode2" checked />
    </label>
</fieldset>
```
