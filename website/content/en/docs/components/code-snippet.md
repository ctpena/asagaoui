---
title: Code Snippet
weight: 60
---

The Code Snippet component is used to display programming code or text that needs to maintain its formatting, with syntax highlighting. It uses [Prism](https://prismjs.com) for syntax highlighting.

This component is an original component of AsagaoUI and is not included in the Digital Agency Design System.

JavaScript is required for operation, and it is implemented as a Web Component. It provides features such as syntax highlighting for code and a copy button.

## Usage

{{< code-snippet lang="html" preview="false" >}}
{{< code-snippet lang="HTML" preview="true" >}}
<div class="example">
  <p>Hello World</p>
</div>
{{< /code-snippet >}}
{{< /code-snippet >}}

### Attributes (Shortcode Parameters)

| Parameter | Description | 
|:----------|:-------------------------------------------------------------------------------------------|
| `lang`    | Specifies the language of the code (e.g., `html` (default), `css`, `javascript`, `typescript`, `bash`, `scss`, `json`). | 
| `preview` | Allows you to specify the layout of the preview area. |    

## Use as Web Components

Use the following structure. A specific class structure is required to ensure display stability (prevention of CLS).

{{< code-snippet lang="HTML" preview="false" >}}
<code-snippet lang="html" preview="false">
    <!-- Preview Area (Optional) -->
    <div class="codesnippet-preview">
        <!-- Area where HTML, etc., will be executed as is -->
    </div>
    <!-- Code Display Area (Required) -->
    <div class="codesnippet-area">
        <div class="codesnippet-header">
            <span class="codesnippet-lang"></span>
            <button class="codesnippet-copy-btn">
                <i class="ail-copy"></i>
            </button>
        </div>
        <pre class="codesnippet-code"><code><!-- Input code here --></code></pre>
    </div>
</code-snippet>
{{< /code-snippet >}}

### Key Classes and Elements

- `codesnippet-preview`: An area for directly displaying execution results such as HTML. Delete this element if a preview is not needed.
- `codesnippet-area`: The main area for code display (Required).
- `codesnippet-header`: The header part that displays the language name and a copy button (Required).
- `codesnippet-lang`: The specified language name (the value of the `lang` attribute) is automatically inserted.
- `codesnippet-copy-btn`: Copies the code to the clipboard when clicked.
- `codesnippet-code`: The area for displaying the code itself. Placing a `<code>` tag inside and writing code within it will automatically trigger highlighting.

## Preview Layout

You can adjust the layout of the preview area by setting specific values to the `preview` attribute.

- `preview="flex"`: Adds the `codesnippet-preview-flex` class to the preview area, making internal elements use a Flexbox layout. This is useful for checking the alignment of components.


