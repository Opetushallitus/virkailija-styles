@page components Components
@parent index

Each component has it's own stylesheet in `src/modules`. They are compiled to 
`oph-styles.css` and `oph-styles-min.css`.

## Usage

Individual stylesheets can be used instead of the compiled ones.

### a. Importing

Import from the `dist` folder:

```
@@import "oph-virkailija-style-guide/dist/alerts.css"
```

Source order is important; import [src/modules/typography.css] (`dist/typography.css`) 
and [src/modules/colors.css] (`dist/colors.css`) last if you want to use them 
to override other components' styles. 
See [index.css](../src/index.css) for an ordering example.

Import `src/modules/variables.css` if you want to use the defined 
[CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
in your styles.

A pre- or postprocessor should be used to include the stylesheets' content to your compiled CSS.

### b. Link tag

Copy the stylesheet from `node_modules/oph-virkailija-style-guide/dist` to your static resources folder and 
add a link tag:

```
<link href="{path/to/resources}/alerts.css" rel="stylesheet">
```

## Live examples

- [Virkailijan työpöytä](https://itest-virkailija.oph.ware.fi/virkailijan-tyopoyta)
