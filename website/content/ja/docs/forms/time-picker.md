+++
title = '時刻ピッカー'
summary = '時刻を選択できるUIフォーム'
+++

時刻を選択できるUIフォーム

```html {preview="true"}
<form>
    <fieldset class="time-picker">
        <legend class="time-picker-legend">時刻ピッカー</legend>
        <input class="time-picker-value" type="hidden" name="time" id="time" value="">
        <label class="time-picker-hour">
            <input autocomplete="off" class="time-picker-input" name="" inputmode="numeric" pattern="0[1-9]|1[0-9]|2[0-3]" minlength="2" maxlength="2">
            <span class="time-picker-label">時</span>
        </label>
        <label class="time-picker-month">
            <input autocomplete="off" class="time-picker-input" type="text" name="" inputmode="numeric" pattern="[0-5][0-9]" minlength="2" maxlength="2">
            <span class="time-picker-label">分</span>
        </label>
        <label class="time-picker-day">
            <input autocomplete="off" class="time-picker-input" type="text" name="" inputmode="numeric" pattern="[0-5][0-9]" minlength="2" maxlength="2">
            <span class="time-picker-label">秒</span>
        </label>
    </fieldset>
    <div class="mt-3">
        <button class="btn is-sm btn-fill" type="submit">送信</button>
    </div>
</form>
```
