const vscode = require('vscode');
const prettier = require('prettier');

function activate(context) {
    const provider = vscode.languages.registerDocumentFormattingEditProvider('baseons', {
        async provideDocumentFormattingEdits(document) {
            try {
                const fullText = document.getText();
                if (!fullText.trim()) return [];

                // Detecta parser automaticamente (HTML base)
                const formatted = await prettier.format(fullText, {
                    parser: "html",

                    // 🔥 ESSENCIAL pra funcionar com <script> e <style>
                    embeddedLanguageFormatting: "auto",

                    // 👇 opções recomendadas
                    tabWidth: 2,
                    useTabs: false,
                    printWidth: 100,
                    htmlWhitespaceSensitivity: "ignore",

                    // Evita quebrar Blade-like / Baseons
                    bracketSameLine: false
                });

                if (!formatted) return [];

                const fullRange = new vscode.Range(
                    document.positionAt(0),
                    document.positionAt(fullText.length)
                );

                return [vscode.TextEdit.replace(fullRange, formatted)];

            } catch (err) {
                console.error("Erro ao formatar com Prettier:", err);
                vscode.window.showErrorMessage("Erro ao formatar documento Baseons");
                return [];
            }
        }
    });

    context.subscriptions.push(provider);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};