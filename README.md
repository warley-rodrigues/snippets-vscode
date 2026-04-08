# Baseons Snippets

VS Code snippets and HTML-compatible syntax support for `*.bns.php` files.

## Feature

- Custom language `baseons` for `*.bns.php` files
- HTML compatibility via `emmet.includeLanguages`
- Snippets for directives like `@if`, `@else`, `@foreach`, `@for`, `@while`, `@include`, `@break`, `@continue`
- Echo block syntax: `{{ expression }}`
- Comment block syntax: `{{-- comment --}}`

## Installation

1. Copy this folder into your VS Code extensions directory or install from the VSIX when packaged.
2. Open a `.bns.php` file.
3. The language mode should be detected as `Baseons`.

## Configuration

The extension adds the following default Emmet configuration:

```json
"emmet.includeLanguages": {
  "baseons": "html"
}
```
