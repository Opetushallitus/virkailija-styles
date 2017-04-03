@page components Components
@parent index

## Usage

For individual component stylesheets, import from the `dist` folder:

```
@@import "oph-virkailija-style-guide/dist/alerts.css"
```

Source order is important; import [src/modules/typography.css] (dist/typography.css) 
and [src/modules/colors.css] (dist/colors.css) last if you want to use them to override other
components' styles.

Import `src/modules/variables.css` if you want to use the defined 
[CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) in your
CSS files.

For individual component stylesheets, copy from the `dist` folder and add link tags:

```
<link href="{path/to/resources}/alerts.css" rel="stylesheet">
```

## Live examples

See [Virkailijan työpöytä](https://itest-virkailija.oph.ware.fi/virkailijan-tyopoyta).
