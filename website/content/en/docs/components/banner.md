+++
title = 'Banner'
summary = 'Two types of UI: notification banners and emergency banners, designed to highlight information that requires attention.'
weight = 30
+++

Two types of UI: notification banners and emergency banners, designed to highlight information that requires attention.

## Notification Banner

A notification banner is a UI that effectively presents content to users, regardless of their operations.

### Design Style

Two design styles are available for notification banners. By adding `banner-chip`, you can change the design style to a color chip.

#### Standard

```html {preview="true"}
<div class="banner">
    <i class="banner-icon aif-information"></i>
    <span class="banner-title">Registration period has been extended</span>
    <div class="banner-body">
        <time class="banner-date">April 1, 2025</time>
        <span class="banner-description">Dummy text is a placeholder used during design creation.</span>
    </div>
</div>
```

#### Color Chip

```html {preview="true"}
<div class="banner banner-chip">
    <i class="banner-icon aif-information"></i>
    <span class="banner-title">Registration period has been extended</span>
    <div class="banner-body">
        <time class="banner-date">April 1, 2025</time>
        <span class="banner-description">Dummy text is a placeholder used during design creation.</span>
    </div>
</div>
```

### Design Type

#### Success

Notification of smooth completion of operations, etc.

```html {preview="true"}
<div class="banner banner-success">
    <i class="banner-icon aif-complete"></i>
    <span class="banner-title">Registration process has been completed</span>
    <div class="banner-body">
        <time class="banner-date">April 1, 2025</time>
        <span class="banner-description">Dummy text is a placeholder used during design creation.</span>
    </div>
</div>
```

#### Error

Notification that an operation etc. did not complete correctly.

```html {preview="true"}
<div class="banner banner-error">
    <i class="banner-icon aif-error"></i>
    <span class="banner-title">Could not complete the operation</span>
    <div class="banner-body">
        <time class="banner-date">April 1, 2025</time>
        <span class="banner-description">Dummy text is a placeholder used during design creation.</span>
    </div>
</div>
```

#### Warning

Notification of warnings, alert information, etc., to draw attention.

```html {preview="true"}
<div class="banner banner-warning">
    <i class="banner-icon aif-warning"></i>
    <span class="banner-title">Please beware of fake SNS accounts</span>
    <div class="banner-body">
        <time class="banner-date">April 1, 2025</time>
        <span class="banner-description">Dummy text is a placeholder used during design creation.</span>
    </div>
</div>
```

#### Information

```html {preview="true"}
<div class="banner banner-info">
    <i class="banner-icon aif-information"></i>
    <span class="banner-title">Registration period has been extended</span>
    <div class="banner-body">
        <time class="banner-date">April 1, 2025</time>
        <span class="banner-description">Dummy text is a placeholder used during design creation.</span>
    </div>
</div>
```

## Emergency Banner

A design is prepared to display information that you want to convey to users with top priority.

```html {preview="true"}
<div class="banner banner-emergency">
    <span class="banner-title">[Emergency] Evacuation preparation information has been issued for the XX district</span>
    <div class="banner-body">
        <time class="banner-date">2026/2/2 06:00 Update</time>
        <span class="banner-description">Evacuation preparation information was issued for the XX district at 1:23. Those who take time to evacuate, such as the elderly, should move to the designated evacuation center immediately.</span>
    </div>
</div>
```
