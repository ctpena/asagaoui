---
title: Content
---

The role of the `content` class is simple. Since AsagaoUI resets all default CSS, the styles of standard tags like `<h2>` are also reset.

By using `content`, you don't need to add separate classes to HTML generated from blog posts or `.md` files.

Code

{{< code-snippet lang="html" preview="false" >}}
<article class="content">
    <h1>AsagaoUI</h1>
    <h2>Content</h2>
    <p>AsagaoUI is a CSS framework with UI components built based on the <a href="https://www.digital.go.jp/policies/servicedesign/designsystem">Digital Agency Design System</a>, enabling beautiful and efficient web development.</p>
</article>
{{< /code-snippet >}}
