+++
title = 'Directory Structure'
weight = 20
+++

The directory structure of AsagaoUI is designed to be intuitive and easy to use. Below is a concise explanation of its basic structure.

## Structure of Compiled Files

Compiled files that can be used directly on the web are stored in the `dist` folder.

```text
asagaoui/dist/
├── css
│   ├── asagaoui-icons.css
│   ├── asagaoui-icons.css.map
│   ├── asagaoui-icons.min.css
│   ├── asagaoui.css
│   ├── asagaoui.css.map
│   └── asagaoui.min.css
├── icons
│   ├── asagaoui-icons.json
│   └── asagaoui-icons.woff2
└── js
    ├── asagaoui.js
    └── asagaoui.js.map
```

The compiled CSS and JS for AsagaoUI are `asagaoui.css` and `asagaoui.js`. The `.map` files provide source maps. The `.min` files are compressed versions.
Use them according to your needs.

The CSS used for AsagaoUI Icons is provided in `asagaoui-icons.css`. The icon font is `asagaoui-icons.woff2` in the `icons/` folder.

## Folder Structure

The overall folder structure of the project is as follows:

```text
asagaoui/
├── assets
│   ├── brand
│   ├── icons
│   └── illustrations
├── dist
│   ├── css
│   ├── icons
│   └── js
├── scss
│   ├── base
│   ├── components
│   ├── forms
│   ├── layout
│   ├── styles
│   └── utilities
├── ts
│   └── components
└── website
```

## Main Directories and Their Purposes

`dist/`: Contains compiled files used by AsagaoUI.

`scss`: Contains all SCSS files that make up AsagaoUI, useful for customization and detailed styling. `asagaoui.scss` is the entry point, and all other style files (base/, components/, forms/, layout/, styles/, utilities/) are imported from there.

`ts`: Contains TypeScript files that make up AsagaoUI.

`assets`: Stores static resources used by AsagaoUI, such as icon fonts.

`website`: Contains the official documentation for AsagaoUI. It is built with HUGO.

## Summary

The directory structure of AsagaoUI supports everything from easy project introduction to detailed customization.
Basically, by using `asagaoui.css` in the `dist` directory, you can apply all the styles of AsagaoUI. If deeper customization is required, refer to the [Customization](/docs/customize/) section of the documentation.
