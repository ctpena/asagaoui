+++
title = 'Search Box'
summary = 'The UI used for searching within the site and searching for content'
weight = 138
+++

A UI used for site-wide searches or searching through content.

```html {preview="true"}
<div class="search-box">
  <div class="search-box-fields">
    <label class="search-box-select">
        <span>Search target</span>
        <select name="scope">
            <button>
                <selectedcontent></selectedcontent>
            </button>
            <option value="">All</option>
            <option value="images">Images</option>
            <option value="files">Files</option>
            <option value="map">Map</option>
            <option value="videos">Videos</option>
        </select>
        <i class="search-box-arrow-icon ail-arrow_down"></i>
    </label>
    <label class="search-box-label">
        <i class="search-box-search-icon ail-search"></i>
        <input class="search-box-input" type="search" name="q">
    </label>
  </div>
  <button class="btn btn-fill is-lg" type="submit">Search</button>
</div>
```
