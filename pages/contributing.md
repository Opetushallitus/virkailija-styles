@page contributing Contributing

## Quick quide

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the style guide: `npm start`
4. Write CSS in `/src/modules/*.css` according to code style or add new pages
5. Test the changes or additions
6. Update the [changelog] and version number in `package.json`
7. Commit the changes

## Code style

Follow the pre-existing code style when writing CSS. Linting
is done with [Stylelint](https://stylelint.io/) and validation errors break the 
build.

See the current rules in `config/stylelint.config.js`.

### Variables

Use the [variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) 
defined in `src/variables.css` instead of hardcoded values (colors, margins/padding etc.)
when applicable.

Add new variables for values which are used multiple times.

### Selectors
- no IDs, only classes
- no type selectors — `a`, `p`, `h1`...
- no qualifying selectors – `a.oph-link`, `p.oph-bold`...
- maximum of 3 compound selectors — `{selector} + {selector} + {selector}`

Consider removing any existing type selectors and turning on `selector-no-type` rule
on.

### Naming

**Classes: `.oph-{component}-{variable}-{state}`**

`.oph-button`

`.oph-button-primary`

Prefix state with `is-` or `has-`:

`.oph-button-is-disabled`

`.oph-input-has-error`

**Variables: `--{property}-{modifier}`**

`--font-size-base`

`--gray`

`--gray-lighten-1`

### Properties

Order properties by type. The order is also linted.
1. typography – `font-size`, `font-family`, `text-*`...
2. layout — `position`, `display`, `float`, `clear`...
3. box model – `width`, `height`, `margin`, `padding`...
4. visual – `border`, `background`, `color`...
5. miscellaneous – `cursor`, `overflow`...

Prefer relative units (`em`, `rem`, `%`) over absolute (`px`, `pt`).

## File structure

`config` Configuration files for dependencies

`demos` HTML files for component demos

`dist` Compiled and optimized resource files

`docs` Built style guide

`pages` Style guide pages

`src` Static resource files and Sketch specs

`theme` Style guide templates and static resources
