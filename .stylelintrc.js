module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
    ],
    plugins: [
        'stylelint-scss',
        'stylelint-order',
    ],
    rules: {
        indentation: [
            4,
        ],
        'at-rule-no-unknown': null,
        'no-empty-source': null,
        'font-family-no-missing-generic-family-keyword': null,
        'no-descending-specificity': null,
        'unit-no-unknown': null,
    },
}