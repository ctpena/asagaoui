---
title: Banner
weight: 20
---

A UI component for making important information stand out. There are two types.

## Notification Banner

A notification banner is a UI that effectively presents content to the user, regardless of user interaction.

### Design Styles

Two design styles are available for notification banners. By adding `banner-chip`, you can change the design style to color chip.

#### Standard

{{< code-snippet lang="html" preview="true" >}}
<div class="banner">
    <i class="banner-icon aif-information"></i>
    <span class="banner-title">Registration period has been extended</span>
    <div class="banner-body">
        <time class="banner-date">April 1, 2025</time>
        <span class="banner-description">Dummy text is a placeholder text used when creating designs.</span>
    </div>
</div>
{{< /code-snippet >}}

#### Color Chip

{{< code-snippet lang="html" preview="true" >}}
<div class="banner banner-chip">
    <i class="banner-icon aif-information"></i>
    <span class="banner-title">Registration period has been extended</span>
    <div class="banner-body">
        <time class="banner-date">April 1, 2025</time>
        <span class="banner-description">Dummy text is a placeholder text used when creating designs.</span>
    </div>
</div>
{{< /code-snippet >}}

### Design Types

#### Success

Notification of successful completion of an operation, etc.

{{< code-snippet lang="html" preview="true" >}}
<div class="banner banner-success">
    <i class="banner-icon aif-complete"></i>
    <span class="banner-title">Registration process has been completed</span>
    <div class="banner-body">
        <time class="banner-date">April 1, 2025</time>
        <span class="banner-description">Dummy text is a placeholder text used when creating designs.</span>
    </div>
</div>
{{< /code-snippet >}}

#### Error

Notification that an operation, etc. did not complete correctly.

{{< code-snippet lang="html" preview="true" >}}
<div class="banner banner-error">
    <i class="banner-icon aif-error"></i>
    <span class="banner-title">Operation could not be completed</span>
    <div class="banner-body">
        <time class="banner-date">April 1, 2025</time>
        <span class="banner-description">Dummy text is a placeholder text used when creating designs.</span>
    </div>
</div>
{{< /code-snippet >}}

#### Warning

Notification of warnings or alerts to call attention.

{{< code-snippet lang="html" preview="true" >}}
<div class="banner banner-warning">
    <i class="banner-icon aif-warning"></i>
    <span class="banner-title">Beware of fake social media accounts</span>
    <div class="banner-body">
        <time class="banner-date">April 1, 2025</time>
        <span class="banner-description">Dummy text is a placeholder text used when creating designs.</span>
    </div>
</div>
{{< /code-snippet >}}

#### Info

{{< code-snippet lang="html" preview="true" >}}
<div class="banner banner-info">
    <i class="banner-icon aif-information"></i>
    <span class="banner-title">Registration period has been extended</span>
    <div class="banner-body">
        <time class="banner-date">April 1, 2025</time>
        <span class="banner-description">Dummy text is a placeholder text used when creating designs.</span>
    </div>
</div>
{{< /code-snippet >}}

## Emergency Banner

A design for displaying information that should be communicated to the user with the highest priority.

{{< code-snippet lang="html" preview="true" >}}
<div class="banner banner-emergency">
    <span class="banner-title">[Emergency] Evacuation preparation information issued for District XX</span>
    <div class="banner-body">
        <time class="banner-date">Updated February 2, 2026 06:00</time>
        <span class="banner-description">Evacuation preparation information was issued for District XX at 1:23. Those who take time to evacuate, such as the elderly, should move to designated shelters immediately.</span>
    </div>
</div>
{{< /code-snippet >}}
