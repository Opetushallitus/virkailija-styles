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
npm install --save oph-virkailija-style-guide
```

#### a. Importing

Import the compiled and minified stylesheet in your CSS file: 
 
`@import "oph-virkailija-style-guide/oph-styles-min.css"`

When importing, a pre- or postprocessor should be used to inline the content
to your compiled CSS. For example, this style guide uses 
[postcss-smart-import](https://www.npmjs.com/package/postcss-smart-import) 
with [PostCSS](http://postcss.org).

#### b. Link tag

Add a link tag to your HTML (or any template) file

```
<link href="node_modules/oph-virkailija-style-guide/oph-styles-min.css" rel="stylesheet">
```

***

## Fonts

[Open Sans](https://fonts.google.com/specimen/Open+Sans) is used as the base font. 
Include it with a link tag:

```
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
```
