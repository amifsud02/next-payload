module.exports = {
    plugins: [
        "stylelint-order", 
        "stylelint-color-format",
    ],
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-prettier-scss",
        "stylelint-config-idiomatic-order",
    ],
    rules: {
        "color-format/format": {
            format: "rgb",
        },
        "declaration-empty-line-before": [
            "always",
            {
                ignore: [
                    "after-comment",
                    "after-declaration",
                    "first-nested",
                    "inside-single-line-block",
                ],
            },
        ],
    },
};