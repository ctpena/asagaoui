---
title: Utility Link
weight: 150
---

Simple links that can be used in various places.

{{% code-snippet lang="html" preview="true" %}}
<div>
    <a class="utilitylink" href="">Link text</a>
</div>
{{% /code-snippet %}}

## External Links

When linking to external content, it's polite to add the `rel="external"` attribute. Adding this attribute will display an icon indicating an external link.

{{% code-snippet lang="html" preview="true" %}}
<div>
    <a class="utilitylink" rel="external" href="https://design.digital.go.jp/dads/">Digital Agency Design System</a>
</div>
{{% /code-snippet %}}

## New Tab or Window

Whether to open a link in a new tab or window should be chosen by the user and should not be explicitly specified. If you must use it, clearly indicate what will happen when the link is clicked.

{{% code-snippet lang="html" preview="true" %}}
<div>
    <a class="utilitylink" href="https://design.digital.go.jp/dads/" target="_blank">Digital Agency Design System (Opens in a new window)</a>
</div>
{{% /code-snippet %}}
