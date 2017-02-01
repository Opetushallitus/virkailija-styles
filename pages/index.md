@page index OPH Virkailija Style Guide

## Styles for Opintopolku apps

Based on [Sketch Specs](https://opetushallitus.github.io/virkailija-styles/)

***

## Usage

### 1. As an NPM dependency

First install [Node.js](nodejs.org) on your computer. 
Then, open the console and navigate to your project. 
Use [npm](https://www.npmjs.org) to install the style guide:

```
npm install --save Opetushallitus/virkailija-styles#styleguide
```

#### a. Importing

Import the compiled and minified stylesheet in your CSS file: 
 
```
@@import "virkailija-style-guide/oph-styles-min.css"
```

When importing, a pre- or postprocessor should be used to inline the content
to your compiled CSS. For example, this style guide uses 
[postcss-smart-import](https://www.npmjs.com/package/postcss-smart-import) 
with [PostCSS](http://postcss.org).

#### b. Link tag

Copy the stylesheet to your static resources folder and 
add a link tag to your HTML (or any template) file:

```
<link href="[path/to/resources]/oph-styles-min.css" rel="stylesheet">
```
