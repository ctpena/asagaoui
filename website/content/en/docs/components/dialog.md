+++
title = 'Dialog'
summary = 'A UI that can emphasize and display necessary content such as alerts, sub-windows, and forms.'
weight = 90
+++

A UI that can emphasize and display necessary content such as alerts, sub-windows, and forms.

[Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) using to set up the open action is simple.

```html {preview="true"}
<button class="btn btn-fill" commandfor="mydialog" command="show-modal">Show Dialog</button>
<dialog id="mydialog" class="dialog">
    <h2 class="dialog-title">Dialog Title</h2>
    <p>Auxiliary text for the dialog goes here. Auxiliary text for the dialog goes here.</p>
    <div>
        <button>Execute</button>
        <button>Close</button>
    </div>
</dialog>
```
