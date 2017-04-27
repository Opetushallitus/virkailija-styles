@page contributing Contributing

## Code style

Follow the pre-existing code style when writing CSS. Linting
is done with [Stylelint](https://stylelint.io/) and validation errors break the 
build.

See the current rules in `config/stylelint.config.js`.

Consider removing any existing type selectors and turning on `selector-no-type` rule
on.
