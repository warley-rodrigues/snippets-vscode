const vscode = require('vscode');

function activate(context) {
    const provider = vscode.languages.registerDocumentFormattingEditProvider('baseons', {
        provideDocumentFormattingEdits(document) {
            try {
                const fullText = document.getText();
                if (!fullText.trim()) return [];

                const formatted = formatHTMLLike(fullText);

                // Garantia de que o arquivo não será limpo por erro na função
                if (!formatted) return [];

                // Seleção segura do documento inteiro
                const lastLine = document.lineAt(document.lineCount - 1);
                const fullRange = new vscode.Range(
                    new vscode.Position(0, 0),
                    lastLine.range.end
                );

                return [vscode.TextEdit.replace(fullRange, formatted)];
            } catch (err) {
                console.error("Erro na formatação:", err);
                return [];
            }
        }
    });

    context.subscriptions.push(provider);
}

function formatHTMLLike(text) {
    let indent = 0;
    let isInsideStyle = false;
    const lines = text.split(/\r?\n/);

    return lines.map(line => {
        const trimmed = line.trim();

        // Se a linha estiver vazia, retorna apenas a quebra de linha
        if (!trimmed) return '';

        // Detecção de entrada/saída de bloco de estilo
        if (trimmed.startsWith('<style')) {
            const result = '  '.repeat(Math.max(indent, 0)) + trimmed;
            indent++;
            isInsideStyle = true;
            return result;
        }

        if (trimmed.startsWith('</style')) {
            indent--;
            isInsideStyle = false;
            return '  '.repeat(Math.max(indent, 0)) + trimmed;
        }

        // Se estiver dentro do style, apenas mantém a indentação atual sem processar tags
        if (isInsideStyle) {
            return '  '.repeat(Math.max(indent, 0)) + trimmed;
        }

        // Lógica Normal para HTML
        if (trimmed.match(/^<\//)) {
            indent--;
        }

        const currentIndent = Math.max(indent, 0);
        const result = '  '.repeat(currentIndent) + trimmed;

        const startsWithOpenTag = trimmed.match(/^<[^\/!]/);
        const isSelfClosing = trimmed.match(/\/>$/) || trimmed.match(/<(img|br|hr|input|meta|link)[^>]*>/i);
        const closesOnSameLine = trimmed.match(/<\/[^>]+>$/);

        if (startsWithOpenTag && !isSelfClosing && !closesOnSameLine) {
            indent++;
        }

        return result;
    }).join('\n');
}

function deactivate() { }

module.exports = { activate, deactivate };