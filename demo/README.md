# ArchiCode.js Demo

This directory contains the interactive demo application for ArchiCode.js.

## Files

- `index.html` - Interactive playground for testing ArchiCode.js
- The demo uses the main library files (`archicode.js` and `archicode.css`) from the project root

## ⚠️ Important Note

This demo uses the **CDN version** of ArchiCode.js from jsDelivr with a specific commit hash to ensure stability and avoid cache issues.

**If you want to use the latest development version:**
1. Uncomment the local file links in `index.html`
2. Comment out the CDN links
3. Ensure `../archicode.js` and `../archicode.css` exist

**CDN vs Local:**
- **CDN** (default): Reliable, works online without downloading files
- **Local**: Latest features, works offline, best for development

## Running the Demo

### Option 1: Local Web Server (Recommended)

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then open http://localhost:8000/demo/

### Option 2: NPM Script

```bash
npm run demo
```

### Option 3: Direct File Access

Simply open `index.html` in your browser (some features may not work due to CORS restrictions).

## Features

- **Live Editor** - Edit ArchiMate code with syntax highlighting
- **Real-time Preview** - See diagrams update as you type
- **Export Options** - Download as SVG or draw.io XML
- **Zoom & Pan** - Navigate large diagrams
- **Fullscreen Mode** - Focus on editing or viewing
- **Keyboard Shortcuts** - Ctrl+Enter to render
- **Auto-save** - Code persisted in browser storage

## Example Code

The demo includes several example diagrams to get you started:

- Business layer diagrams
- Application architecture
- Technology infrastructure
- Complete enterprise models

## Customization

You can modify the demo by editing `index.html` or creating your own HTML file that includes ArchiCode.js:

```html
<script src="../archicode.js"></script>
<link rel="stylesheet" href="../archicode.css">
```