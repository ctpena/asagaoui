+++
title = '日付ピッカー'
summary = '日付を選択できるUIフォーム'
+++

日付を選択できるUIフォーム

```html {preview="true"}
<fieldset class="date-picker">
    <legend class="date-picker-legend">日付ピッカー</legend>
    <input class="date-picker-value" type="hidden" name="date" id="date" value="">
    <label class="date-picker-year">
        <input class="date-picker-input" inputmode="numeric" pattern="[0-9]{4}" maxlength="4">
        <span class="date-picker-label">年</span>
    </label>
    <label class="date-picker-month">
        <input class="date-picker-input" type="text" inputmode="numeric" pattern="[0-9]{2}" maxlength="2">
        <span class="date-picker-label">月</span>
    </label>
    <label class="date-picker-day">
        <input class="date-picker-input" type="text" inputmode="numeric" pattern="[0-9]{2}" maxlength="2">
        <span class="date-picker-label">日</span>
    </label>
</fieldset>
```