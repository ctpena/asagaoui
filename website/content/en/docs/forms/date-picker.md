+++
title = 'Date Picker'
summary = 'A UI form for selecting dates.'
+++

A UI form for selecting dates.

```html {preview="true"}
<fieldset class="date-picker">
    <legend class="date-picker-legend">Date Picker</legend>
    <input class="date-picker-value" type="hidden" name="date" id="date" value="">
    <label class="date-picker-year">
        <input class="date-picker-input" inputmode="numeric" pattern="[0-9]{4}" maxlength="4">
        <span class="date-picker-label">Year</span>
    </label>
    <label class="date-picker-month">
        <input class="date-picker-input" type="text" inputmode="numeric" pattern="[0-9]{2}" maxlength="2">
        <span class="date-picker-label">Month</span>
    </label>
    <label class="date-picker-day">
        <input class="date-picker-input" type="text" inputmode="numeric" pattern="[0-9]{2}" maxlength="2">
        <span class="date-picker-label">Day</span>
    </label>
</fieldset>
```
