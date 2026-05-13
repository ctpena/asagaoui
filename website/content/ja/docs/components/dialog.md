+++
title = 'ダイアログ'
summary = 'アラートやサブウインドウ、フォームなどの必要な内容を強調して表示できるUI'
weight = 90
+++

アラートやサブウインドウ、フォームなどの必要な内容を強調して表示できるUI

[Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)を使用して開くアクションを設定するとシンプルです。

```html {preview="true"}
<button class="btn btn-fill" commandfor="mydialog" command="show-modal">ダイアログ表示</button>
<dialog id="mydialog" class="dialog">
    <h2 class="dialog-title">ダイアログタイトル</h2>
    <p>ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。</p>
    <div>
        <button>実行</button>
        <button>閉じる</button>
    </div>
</dialog>
```
