@page index OPH Virkailija Style Guide

A collection of component styles (documented in [components]) based on 
[Sketch specs](https://opetushallitus.github.io/virkailija-styles/).

Generated with [DocumentCSS](http://documentcss.com/)
&middot; View in [GitHub](https://github.com/Opetushallitus/virkailija-styles/tree/styleguide)

## Getting started

Install [Node.js](https://nodejs.org) and [Git](https://git-scm.com), then: 

```
npm install --save Opetushallitus/virkailija-styles#styleguide
```

#### a. Importing

Import the compiled stylesheet in one of your CSS files: 
 
```
@@import "oph-virkailija-style-guide/oph-styles.css"
```

A pre- or postprocessor should be used to include the stylesheet's content to your compiled CSS.
For example, this style guide uses 
[postcss-smart-import](https://www.npmjs.com/package/postcss-smart-import) 
with [PostCSS](http://postcss.org).
 
#### b. Link tag

Copy the minified stylesheet from `node_modules/oph-virkailija-style-guide` root to your static resources folder and 
add a link tag:

```
<link href="{path/to/resources}/oph-styles-min.css" rel="stylesheet">
```

## Contributing

See guidelines in [contributing].
