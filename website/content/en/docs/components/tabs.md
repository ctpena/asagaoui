+++
title = 'Tabs'
summary = 'A component combining tab labels and associated tab panels. It allows switching between multiple contents within a certain area.'
weight = 270
+++

A component combining tab labels and associated tab panels. It allows switching between multiple contents within a certain area.

## Mechanism

Tabs are implemented using [existing methods developed using scroll layout](https://web.dev/articles/building/a-tabs-component?hl=en). JavaScript is required for full operation.

## Example

```html {preview="true"}
<div class="tabs">
    <a href="#tab-1" class="tab-item active">All</a>
    <a href="#tab-2" class="tab-item">News</a>
    <a href="#tab-3" class="tab-item">Living</a>
</div>
<section class="tabs-area">
    <article id="tab-1" class="tab-area">
        <ul>
            <li><a href="" class="link">My Number Card Info (Info for local governments) Vol.100 has been posted</a><br/>Policy / Feb 6, 2026</li>
            <li><a href="" class="link">Online/Digitalization of National Qualifications, etc.: Added info for "Web Design Technician" to qualifications currently available for procedure</a><br/>Policy / Jan 26, 2026</li>
            <li><a href="" class="link">Mid-career recruitment (private sector talent) event information has been posted</a><br/>Recruitment / Dec 10, 2025</li>
        </ul>
    </article>
    <article id="tab-2" class="tab-area">
        <ul>
            <li><a href="" class="link">Umiyamakawa City News February issue has been posted</a><br/>Feb 1, 2026</li>
            <li><a href="" class="link">Regarding the FY2026 Staff Recruitment Examination</a><br/>Jan 20, 2026</li>
            <li><a href="" class="link">1st Regular Press Conference in 2025</a><br/>Jan 15, 2026</li>
        </ul>
    </article>
    <article id="tab-3" class="tab-area">
        <ul>
            <li><a href="" class="link">Announcement of rabies prevention group vaccination</a><br/>March 5, 2026</li>
            <li><a href="" class="link">Umiyamakawa City News March issue has been posted</a><br/>March 3, 2026</li>
            <li><a href="" class="link">Please cooperate with the dental checkup status survey</a><br/>March 2, 2026</li>
            <li><a href="" class="link">Regarding the recruitment of Umiyamakawa City Revitalization Volunteers</a><br/>Feb 26, 2026</li>
        </ul>
    </article>
</section>
```
