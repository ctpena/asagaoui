+++
title = '日付ピッカー'
summary = '日付を選択できるUIフォーム'
+++

日付を選択できるUIフォーム

```html {preview="true"}
<form>
    <fieldset class="date-picker">
        <legend class="date-picker-legend">日付ピッカー</legend>
        <input class="date-picker-value" type="hidden" name="date" id="date" value="">
        <label class="date-picker-year">
            <input autocomplete="off" class="date-picker-input" name="date_year" inputmode="numeric" pattern="[0-9]{4}" minlength="4" maxlength="4">
            <span class="date-picker-label">年</span>
        </label>
        <label class="date-picker-month">
            <input autocomplete="off" class="date-picker-input" type="text" name="date_month" inputmode="numeric" pattern="0[1-9]|1[0-2]" minlength="2" maxlength="2">
            <span class="date-picker-label">月</span>
        </label>
        <label class="date-picker-day">
            <input autocomplete="off" class="date-picker-input" type="text" name="date_day" inputmode="numeric" pattern="0[1-9]|[12][0-9]|3[01]" minlength="2" maxlength="2">
            <span class="date-picker-label">日</span>
        </label>
    </fieldset>
    <div class="mt-3">
        <button class="btn is-sm btn-fill" type="submit">送信</button>
    </div>
</form>
```
