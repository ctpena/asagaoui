+++
title = 'カレンダー'
summary = 'ポップオーバーで利用できるカレンダーUI'
weight = 55
+++

ポップオーバー形式で表示し、選択できるシンプルなカレンダーコンポーネントです。基本的なアクセシビリティ対応を備えており、複数の形式で利用可能な柔軟なコンポーネントです。

記述されているHTMLはすべてが必要です。

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

## 使用方法

### 選択できる年

`option`タグを追加して、選択できる（表示できる）年の範囲を指定することができます。定義されていない年は選択できない上、表示されません。

```html
<select class="select is-sm">
    <option value="2025">2025年</option>
    <option value="2026">2026年</option>
    <option value="2027">2027年</option>
</select>
```

## ロケール

`.calendar-popover`コンポーネントは、国際化に対応しています。HTMLを直接カスタマイズすることで柔軟に変更することが可能です。

### 英語圏

```html {preview="true"}
<div class="calendar-popover">
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
        <button class="btn is-sm btn-text">削除</button>
        <button class="btn is-sm btn-outline">今日</button>
    </div>
</div>
```
