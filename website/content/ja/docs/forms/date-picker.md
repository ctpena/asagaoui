+++
title = '日付ピッカー'
summary = '日付を選択できるUIフォーム'
+++

日付を選択できるUIフォーム

```html {preview="true"}
<fieldset class="date-picker">
    <legend class="date-picker-legend">日付ピッカー</legend>
    <input class="date-picker-value" type="hidden" name="date">
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
```

## 使用方法

### ポップオーバーカレンダー

[ポップオーバーカレンダー](/docs/forms/popover-calendar/)と組み合わせて日付を選択させることも可能です。

```html {preview="true"}
<form>
    <div class="date-picker-area">
        <fieldset class="date-picker">
            <legend class="date-picker-legend">日付ピッカー</legend>
            <input class="date-picker-value" type="hidden" name="date" id="date" value="">
            <label class="date-picker-year">
                <input autocomplete="off" class="date-picker-input" name="date_year" inputmode="numeric"
                       pattern="[0-9]{4}" minlength="4" maxlength="4">
                <span class="date-picker-label">年</span>
            </label>
            <label class="date-picker-month">
                <input autocomplete="off" class="date-picker-input" type="text" name="date_month" inputmode="numeric"
                       pattern="0[1-9]|1[0-2]" minlength="2" maxlength="2">
                <span class="date-picker-label">月</span>
            </label>
            <label class="date-picker-day">
                <input autocomplete="off" class="date-picker-input" type="text" name="date_day" inputmode="numeric"
                       pattern="0[1-9]|[12][0-9]|3[01]" minlength="2" maxlength="2">
                <span class="date-picker-label">日</span>
            </label>
        </fieldset>
        <button popovertarget="calendar-popover" class="calendar-btn" type="button"></button>
        <div popover id="calendar-popover" class="calendar-popover">
            <input class="calendar-popover-value" type="hidden">
            <div class="calendar-controls">
                <select class="select is-sm">
                    <option value="2025">2025年</option>
                    <option value="2026">2026年</option>
                    <option value="2027">2027年</option>
                </select>
                <div class="calendar-nav">
                    <button class="calendar-nav-btn" type="button"><i class="ail-arrow_left"></i></button>
                    <p class="calendar-nav-dp"></p>
                    <datalist>
                        <option value="1">1月</option>
                        <option value="2">2月</option>
                        <option value="3">3月</option>
                        <option value="4">4月</option>
                        <option value="5">5月</option>
                        <option value="6">6月</option>
                        <option value="7">7月</option>
                        <option value="8">8月</option>
                        <option value="9">9月</option>
                        <option value="10">10月</option>
                        <option value="11">11月</option>
                        <option value="12">12月</option>
                    </datalist>
                    <button class="calendar-nav-btn" type="button"><i class="ail-arrow_right"></i></button>
                </div>
            </div>
            <table class="calendar-table">
                <thead>
                <tr>
                    <th class="calendar-header-cell">日</th>
                    <th class="calendar-header-cell">月</th>
                    <th class="calendar-header-cell">火</th>
                    <th class="calendar-header-cell">水</th>
                    <th class="calendar-header-cell">木</th>
                    <th class="calendar-header-cell">金</th>
                    <th class="calendar-header-cell">土</th>
                </tr>
                </thead>
                <tbody class="calendar-table-body">
                <template>
                    <td class="calendar-cell">
                        <button class="calendar-date"></button>
                    </td>
                </template>
                </tbody>
            </table>
            <div class="calendar-footer">
                <button class="btn is-sm btn-text" type="button">削除</button>
                <button class="btn is-sm btn-outline" type="button">今日</button>
            </div>
        </div>
    </div>
    <div class="mt-3">
        <button class="btn is-sm btn-fill" type="submit">送信</button>
    </div>
</form>
```
