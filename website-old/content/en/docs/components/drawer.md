---
title: Drawer
weight: 70
---

Drawers allow you to create content that expands from the outside, such as mobile menus. They are different from modal dialogs.

We recommend using the Invoker Commands API for the action of opening the drawer.

## Example

{{< code-snippet lang="html" preview="false" >}}
<!-- Specify drawer and direction -->
<div class="drawer">
    <!-- Internal fixed header -->
    <div class="drawer-header">
    </div>
    <!-- Content body -->
    <div class="drawer-body">
    </div>
</div>
{{< /code-snippet >}}

Related Content

{{< code-snippet lang="html" preview="false" >}}
<!-- Open button -->
<button type="button" class="btn btn-primary" data-asagaoui-target="#test">Open Drawer</button>
<!-- Specify drawer and direction -->
<div id="test" class="drawer">
    <!-- Internal fixed header -->
    <div class="drawer-header">
    </div>
    <!-- Content body -->
    <div class="drawer-body">
    </div>
</div>
{{< /code-snippet >}}
