# Baseons Snippets

VS Code extension that provides snippet support and HTML-compatible syntax highlighting for `*.bns.html` and `*.bns.php` files.

## Features

- Custom `baseons` language support for Baseons files
- HTML-compatible syntax with embedded PHP, JavaScript, and CSS blocks
- Syntax highlighting for Baseons directives such as:
  - `@if`, `@else`, `@elseif`, `@endif`
  - `@foreach`, `@endforeach`, `@for`, `@endfor`, `@while`, `@endwhile`
  - `@section`, `@endsection`, `@include`, `@yield`
  - `@url`, `@route`, `@csrf`, `@break`, `@continue`
- Support for `{{ ... }}` expression blocks and `{{-- ... --}}` comments
- `<script>` blocks are parsed as JavaScript and `<style>` blocks as CSS
- Emmet HTML support enabled for the `baseons` language
- Default formatting compatible with HTML

## Installation

1. Copy the extension folder into your VS Code extensions directory or install from the packaged VSIX.
2. Open a `*.bns.html` or `*.bns.php` file.
3. The language mode should be detected as `Baseons`.

## Quick Test

- Open `test.bns.html` in VS Code.
- Check syntax highlighting for directives and embedded blocks.
- Use `Format Document` to apply formatting.

## Default Configuration

The extension adds the following default setting:

```json
"emmet.includeLanguages": {
  "baseons": "html"
}
```

## Contributing

Contributions and fixes are welcome, especially for:

- new Baseons snippets
- improvements to the language grammar
- support for additional directives and file patterns
