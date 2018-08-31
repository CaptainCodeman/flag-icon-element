# Flag-Icon Element

Custom-Element version of [flag-icon-css](https://github.com/lipis/flag-icon-css).

[Demo](https://captaincodeman.github.io/flag-icon-element/)

## Benefits

Less than 200 bytes when bundled and compressed.
Flag images are loaded from the cloudflare CDN by default.
Shadow-Dom / WebComponent Friendly.

## Usage

Set country code as attribute of element to display the corresponding
flag. Use css font size to set the height.

```html
<flag-icon-css country="ca"></flag-icon-css>
```

Icons will be loaded from the default path which can be overridden by
setting the path attribute ( `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags`)

Default flag layout is 4:3. Set `square` attribute for square icons.

## Installation

Install from npm:

    npm install --save @captaincodeman/flag-icon-element

Include in app using ...

### Typescript

    import '@captaincodeman/flag-icon-element'

### ES Module

    import '/node_modules/@captaincodeman/flag-icon-element/flag-icon.js'

### JavaScript Script Tag

    <script src="/node_modules/@captaincodeman/flag-icon-element/flag-icon.min.js"></script>

or

    <script src="https://unpkg.com/@captaincodeman/flag-icon-element@1.0.0-beta.1/flag-icon.min.js"></script>

### Node (CommonJS)

    require('@captaincodeman/flag-icon-element')
