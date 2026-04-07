const prettier = require("prettier");

function formatHTMLLike(text) {
    return prettier.format(text, {
        parser: "html"
    });
}