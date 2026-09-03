+++
title = 'Popover Calendar'
summary = 'A calendar UI available in a popover'
+++

A simple, selectable calendar component displayed in a popover format. It comes with basic accessibility support and is a flexible component that can be used in multiple formats.

All the HTML shown below is required.

```html {preview="true"}
<button popovertarget="calendar-popover" class="calendar-btn" type="button"></button>
<div popover id="calendar-popover" class="calendar-popover">
    <div class="calendar-controls">
        <select class="select is-sm">
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
        </select>
        <div class="calendar-nav">
            <button class="calendar-nav-btn"><i class="ail-arrow_left"></i></button>
            <p class="calendar-nav-dp"></p>
            <datalist>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
            </datalist>
            <button class="calendar-nav-btn"><i class="ail-arrow_right"></i></button>
        </div>
    </div>
    <table class="calendar-table">
        <thead>
        <tr>
            <th class="calendar-header-cell">Su</th>
            <th class="calendar-header-cell">Mo</th>
            <th class="calendar-header-cell">Tu</th>
            <th class="calendar-header-cell">We</th>
            <th class="calendar-header-cell">Th</th>
            <th class="calendar-header-cell">Fr</th>
            <th class="calendar-header-cell">Sa</th>
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
        <button class="btn is-sm btn-text">Clear</button>
        <button class="btn is-sm btn-outline">Today</button>
    </div>
</div>
```

## Usage

### Selectable years

You can add `option` tags to specify the range of years that can be selected (displayed). Years that are not defined cannot be selected and will not be shown.

```html
<select class="select is-sm">
    <option value="2025">2025</option>
    <option value="2026">2026</option>
    <option value="2027">2027</option>
</select>
```

### HTML Popover API

You can display a calendar UI using the HTML Popover API.

```html
<button popovertarget="calendar-popover" class="calendar-btn" type="button"></button>
<div popover id="calendar-popover" class="calendar-popover">
    <!-- calendar-popover -->
</div>
```

## Locale

The `.calendar-popover` component supports internationalization. You can customize the HTML directly for flexible localization.

### Chinese

### Japanese

```html {preview="true"}
<div class="calendar-popover">
    <div class="calendar-controls">
        <select class="select is-sm">
            <option value="2025">2025年</option>
            <option value="2026">2026年</option>
            <option value="2027">2027年</option>
        </select>
        <div class="calendar-nav">
            <button class="calendar-nav-btn"><i class="ail-arrow_left"></i></button>
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
            <button class="calendar-nav-btn"><i class="ail-arrow_right"></i></button>
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
        <button class="btn is-sm btn-text">削除</button>
        <button class="btn is-sm btn-outline">今日</button>
    </div>
</div>
```

### Korean
