const vscode = require('vscode');

function activate(context) {

    const provider = vscode.languages.registerDocumentFormattingEditProvider('baseons', {
        provideDocumentFormattingEdits(document) {

            const fullText = document.getText();

            const formatted = formatHTMLLike(fullText);

            const fullRange = new vscode.Range(
                document.positionAt(0),
                document.positionAt(fullText.length)
            );

            return [vscode.TextEdit.replace(fullRange, formatted)];
        }
    });

    context.subscriptions.push(provider);
}

function formatHTMLLike(text) {
    let indent = 0;
    const lines = text.split('\n');

    return lines.map(line => {
        let trimmed = line.trim();

        // fecha tag diminui indent
        if (trimmed.match(/^<\/.+>/)) {
            indent--;
        }

        let result = '  '.repeat(Math.max(indent, 0)) + trimmed;

        // abre tag aumenta indent
        if (trimmed.match(/^<[^\/!][^>]*[^\/]>$/)) {
            indent++;
        }

        return result;
    }).join('\n');
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};