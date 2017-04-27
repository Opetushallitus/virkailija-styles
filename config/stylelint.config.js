module.exports = {
  // See rule documentation in https://stylelint.io/user-guide/rules/
  rules: {
    // Color
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,

    // Font
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-weight-notation': 'numeric',

    // Functions
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',

    // Number
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,

    // String:
    'string-quotes': 'double',
    'string-no-newline': true,

    // Length
    'length-zero-no-unit': true,

    // Unit
    'unit-case': 'lower',
    'unit-no-unknown': true,

    // Value
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true,

    // Value list
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,

    // Shorthand property
    'shorthand-property-no-redundant-values': true,

    // Property
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,

    // Keyframe declaration
    'keyframe-declaration-no-important': true,

    // Declaration
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',

    // Declaration block
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',

    // Block
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',

    // Selector
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    'selector-attribute-quotes': 'always',
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-max-empty-lines": 0,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "single",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "selector-no-id": true,
    'selector-no-universal': true,
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-max-compound-selectors': 3,

    // Selector list
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-space-before": "never",

    // Media feature
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",

    // Media query list
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",

    // At rule
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-semicolon-newline-after": "always",

    // Comment
    "comment-no-empty": true,

    // General
    'indentation': 2,
    "max-empty-lines": 1,

  }
}
