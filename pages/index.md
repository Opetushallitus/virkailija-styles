@page index OPH Virkailija Style Guide

Based on [Sketch specs](https://opetushallitus.github.io/virkailija-styles/) 
&middot; Generated with [DocumentCSS](http://documentcss.com/)
&middot; View in [GitHub](https://github.com/Opetushallitus/virkailija-styles/tree/styleguide)

## Getting started

Install [Node.js](nodejs.org), then: 

```
npm install --save Opetushallitus/virkailija-styles#styleguide
```

#### a. Importing

Import the compiled stylesheet in your CSS file: 
 
```
@@import "virkailija-style-guide/oph-styles.css"
```

A pre- or postprocessor should be used to include the stylesheet's content to your compiled CSS.
For example, this style guide uses 
[postcss-smart-import](https://www.npmjs.com/package/postcss-smart-import) 
with [PostCSS](http://postcss.org).

#### b. Link tag

Copy the minified stylesheet to your static resources folder and 
add a link tag:

```
<link href="{path/to/resources}/oph-styles-min.css" rel="stylesheet">
```
