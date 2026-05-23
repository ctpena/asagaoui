+++
title = 'Drawer'
summary = 'A UI used to display content that slides in from the edge of the screen.'
weight = 120
+++

A UI used to display content that slides in from the edge of the screen. Ideal for implementing mobile menus, etc.

Using the [Hamburger Menu Button](/docs/components/hamburger-menu-button/) makes it easy to implement the menu icon.

```html {preview="true"}
<button class="hamburger-iconbtn" type="button" command="show-modal" commandfor="divider-dialog-menu"><i class="hamburger-icon"></i>Menu</button>
<dialog id="divider-dialog-menu" class="drawer">
    <div class="drawer-header d-flex justify-end">
        <button class="hamburger-btn" type="button" command="close" commandfor="divider-dialog-menu"><i class="hamburger-icon close"></i>
            Close
        </button>
    </div>
    <div class="drawer-body">
        <div>Display your favorite components here</div>
    </div>
    <div class="drawer-footer"></div>
</dialog>
```
