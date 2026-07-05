+++
title = 'スイッチ'
summary = 'スイッチ'
+++

スイッチは、切り替えたら即座に反映される設定項目のためのコントロールUIです。反映されたことがその場で目視により把握できる設定内容で使用できます。

※スイッチを操作した際の画面の表示内容では反映結果が分からないものや、保存ボタンや送信ボタンなどの確定動作を要するものは、「チェックボックス」コンポーネントや「ラジオボタン」コンポーネントを使ってください。

## On/Offスイッチ

```html {preview="true"}
<label class="switch">
    <input class="switch-input" type="checkbox">
</label>
```

### 無効

```html {preview="true"}
<label class="switch">
    <input class="switch-input" type="checkbox" checked disabled>
</label>
```

## Modeスイッチ

