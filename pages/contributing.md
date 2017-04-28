@page contributing Contributing

## Quick guide

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the style guide: `npm start`
4. Write CSS in `src/modules/*.css` according to code style or add new pages
5. Test the changes or additions
6. Update the [change log](docs/change-log.html) and version number in `package.json`
7. Commit the changes

---

## Code style

Follow the pre-existing code style when writing CSS. Linting
is done with [Stylelint](https://stylelint.io/) and validation errors break the 
build.

See the current rules in `config/stylelint.config.js`.

Don't use vendor prefixes, since they are automatically generated when building.

### Variables

Use the [variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) 
defined in `src/variables.css` instead of hardcoded values (colors, margins/padding etc.)
when applicable.

Add new variables for values which are used multiple times.

### Selectors
- no IDs, only classes
- no type selectors — `a`, `p`, `h1`...
- no qualifying selectors – `a.oph-link`, `p.oph-bold`...
- maximum of 3 compound selectors — e.g. `{selector} + {selector} + {selector}`

Consider removing any existing type selectors and turning the `selector-no-type` rule
on.

### Naming

Use generic and descriptive names instead of application-specific terms.

**Classes: `.oph-{base component}-{variant}-{state}`**

`.oph-button`

`.oph-button-primary`

Prefix state with `is-` or `has-`:

`.oph-button-is-disabled`

`.oph-input-has-error`

**Variables: `--{component}-{property}-{variant}`**

`--font-size-base`

`--gray`

`--gray-lighten-1`

Variables are global; prevent naming conflicts by prefixing with component name 
when defining component-specific variables:

`--button-font-size`

`--input-border-width`

### Properties

Order properties by type. The order is also linted.
1. typography – `font-size`, `font-family`, `text-*`...
2. layout — `position`, `display`, `float`, `clear`...
3. box model – `width`, `height`, `margin`, `padding`...
4. visual – `border`, `background`, `color`...
5. miscellaneous – `cursor`, `overflow`...

Prefer relative units (`em`, `rem`, `%`) over absolute (`px`, `pt`).

---

## File structure

`config` Configuration files for dependencies

`demos` HTML files for component demos

`dist` Compiled and optimized resource files

`docs` Built style guide

`pages` Style guide pages

`src` Static resource files and Sketch specs (copied to `docs` when building)

`theme` Style guide templates and static resources

---

## Component styles

Add new component styles to `src/modules` and a demo for each style. Each component
has some base styles and a number of variants.

Consider creating sub-folders and splitting the base and each variants' styles 
if the files grow too large.

A demo of the component, the markup and included JavaScript are displayed 
in the style guide.

### New variant 

Add variants for existing components to the component's stylesheet, see examples
in `src/modules/*.css`.

The block comment links the demo to the style when building. Add a 0-based index to 
each `@styles` tag, so the styles are listed in the correct order in the style guide.

Use an `@iframe` tag to only display the demo.

Document the description, usage and any other relevant info.

### New component

Add the stylesheet for a new component to `src/modules` and import 
it in `src/index.css`. 

Keep a proper source order; any styles which are used to
override other component's styles should be last, e.g. `colors.css`
and `typography.css`.

If the variables from `variables.css` are used, import it in the component's 
stylesheet so a minified version can be compiled to `dist`.

### Demo

Add a HTML file for each variant to `demos/{component}`. 
Use `demos/template.html` as a base.
 
`demos/app.css` is used for demo-specific styles.

---

## Build

The style guide is generated with [DocumentCSS](http://documentcss.com/).
Other dependencies include:
- [PostCSS](http://postcss.org/): Compile CSS
  - [postcss-smart-import](https://www.npmjs.com/package/postcss-smart-import): Inline imports
  - [postcss-inline-svg](https://www.npmjs.com/package/postcss-inline-svg): Inline SVG
  - [postcss-cssnext](http://cssnext.io/): Transform CSS
  - [postcss-cli](https://www.npmjs.com/package/postcss-cli): Run PostCSS in terminal
- [cssnano](http://cssnano.co/): Minify CSS
- [stylelint](https://stylelint.io/): Lint CSS
- [BrowserSync](https://browsersync.io/): Live reloading
- [watch](https://www.npmjs.com/package/watch): Watch files for changes

Configuration files are kept in `config`. DocumentCSS config is in root's
`/documentjs.json`.

Building is done with `npm` scripts (defined in `package.json`). When developing, 
run the style guide with `npm start`:
- lints the CSS
- compiles and minifies `oph-styles.css`
- compiles minified versions of the component stylesheets
- copies `src/sketch` to `docs/sketch` (for Github pages)
- starts a BrowserSync server
- demos, pages and the stylesheets are watched for changes, which trigger a rebuild
and refresh the browser tab
 
BrowserSync injects a script tag to pages, which is displayed in each demo's JS tab 
if the demo has no other scripts included.
 
After testing the changes, bump the version number in `package.json`, update
the change log (`pages/changelog.md`) according to [guidelines]((docs/change-log.html))
and commit.

---

## Customizing the style guide

The style guide's theme and layout can be customized by changing the templates
and resource files in `theme`. See the official documentation for details:

[Overwriting existing styles](https://documentcss.com/docs/customize.html#section=section_OverwritingExistingStyles)

[Updating the top menu](https://documentcss.com/docs/use.html#section=section_UpdatingtheTopMenu)

`npm run update-theme` updates the theme and layout, `npm run watch-theme` watches for
changes in `theme`.
