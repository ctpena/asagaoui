+++
title = 'モーダルダイアログ'
draft = false
+++

次のボタンで、モーダルダイアログを開くことができます。

<button type="button" class="btn btn-primary" data-asagaoui-target="#exDialog">
    モーダルダイアログを開く
</button>

<dialog class="modaldialog" id="exDialog" autofocus>
    <h2 class="modaldialog-title">ダイアログタイトル</h2>
    <span class="modaldialog-subtext">ダイアログ補助のテキストが入ります。</span>
    <form method="dialog">
        <button class="btn btn-secondary" type="submit">ダイアログを閉じる</button>
    </form>
</dialog>

code

```html
<button type="button" class="btn btn-primary" data-asagaoui-target="#exDialog">
    モーダルダイアログを開く
</button>

<dialog class="modaldialog" id="exDialog" autofocus>
    <h2 class="modaldialog-title">ダイアログタイトル</h2>
    <span class="modaldialog-subtext">ダイアログ補助のテキストが入ります。</span>
    <form method="dialog">
        <button class="btn btn-secondary" type="submit">ダイアログを閉じる</button>
    </form>
</dialog>
```
