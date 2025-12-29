# ArchiCode.js

[![npm version](https://badge.fury.io/js/@yllemo/archicode.svg)](https://badge.fury.io/js/@yllemo/archicode)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An autonomous JavaScript library for rendering ArchiMate 3.2 diagrams from text, compatible with [Architext.dev](https://architext.dev) syntax. Think of it as "mermaid.js for ArchiMate".

## 🚀 Quick Start

### CDN Usage

**Option 1: jsDelivr (Works immediately from GitHub)**
```html
<!DOCTYPE html>
<html>
<head>
    <title>ArchiCode Example</title>
    <!-- Use specific commit for stability (update hash for latest version) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yllemo/ArchiCode@56b9715/archicode.css">
    <script src="https://cdn.jsdelivr.net/gh/yllemo/ArchiCode@56b9715/archicode.js"></script>
</head>
<body>
    <div id="diagram"></div>
    
    <script>
        const code = `
            [<business:actor> Customer]
            [<business:process> Order Process]
            [<application:component> Web Portal]
            
            [Customer] --> [Order Process]
            [Order Process] --> [Web Portal]
        `;
        
        ArchiCode.render(code, '#diagram');
    </script>
</body>
</html>
```

**Option 2: unpkg (After NPM publishing)**
```html
<link rel="stylesheet" href="https://unpkg.com/@yllemo/archicode@1.0.0/archicode.css">
<script src="https://unpkg.com/@yllemo/archicode@1.0.0/archicode.js"></script>
```

### NPM Installation

```bash
npm install @yllemo/archicode
```

```javascript
import ArchiCode from '@yllemo/archicode';
// Don't forget to import the CSS for icons:
// import '@yllemo/archicode/archicode.css';

ArchiCode.render(myCode, '#myDiagram');
```

## ✨ Features

- 🎨 **ArchiMate 3.2 Standard** - Official colors, shapes, and symbols
- 🔧 **Autonomous Library** - Zero external dependencies
- 📝 **Architext.dev Compatible** - Uses same syntax
- 🌙 **Modern Design** - Professional styling
- ⬇️ **SVG Export** - Download diagrams as vector graphics
- 📊 **Draw.io Export** - Export to draw.io format for further editing
- 🔍 **TypeScript Support** - Full type definitions included
- 🌐 **Browser & Node.js** - Works everywhere JavaScript runs

## 📖 Syntax Overview

### Elements

Define ArchiMate elements with the following syntax:

```
[<layer:type> Element Name]
```

**Examples:**
```
[<business:actor> Customer]
[<business:process> Order Process]
[<application:component> Web Portal]
[<technology:node> Application Server]
```

### ArchiMate 3.2 Layers and Colors

ArchiCode.js follows the official ArchiMate 3.2 standard with the official color palette:

| Layer | Fill Color | Stroke Color | Description |
|-------|-----------|--------------|-------------|
| **Motivation** | `#FFCCDD` | `#CC0066` | Pink/Magenta - Stakeholders, goals, requirements |
| **Strategy** | `#FFE0B2` | `#FF6F00` | Orange - Capabilities, resources, courses of action |
| **Business** | `#FFF9C4` | `#F9A825` | Yellow - Business actors, processes, services |
| **Application** | `#B3E5FC` | `#0277BD` | Light Blue - Software components, services, data |
| **Technology** | `#C8E6C9` | `#388E3C` | Green - Hardware, networks, system software |
| **Physical** | `#E1BEE7` | `#7B1FA2` | Light Purple - Physical equipment and facilities |
| **Implementation** | `#F8BBD0` | `#C2185B` | Pink - Work packages, deliverables, migration |

**Layer Examples:**

#### 🔴 Motivation Layer (Pink/Magenta)
```
[<motivation:stakeholder> Stakeholder]
[<motivation:goal> Business Goal]
[<motivation:requirement> Requirement]
```

#### 🟠 Strategy Layer (Orange)
```
[<strategy:capability> Digital Capability]
[<strategy:resource> IT Resources]
```

#### 🟡 Business Layer (Yellow)
```
[<business:actor> Customer]
[<business:process> Sales Process]
[<business:service> Customer Service]
```

#### 🔵 Application Layer (Light Blue)
```
[<application:component> CRM System]
[<application:service> REST API]
[<application:data> Customer Database]
```

#### 🟢 Technology Layer (Green)
```
[<technology:node> Web Server]
[<technology:device> Mobile Device]
[<technology:network> Corporate Network]
```

#### 🟣 Physical Layer (Purple)
```
[<physical:equipment> Server Hardware]
[<physical:facility> Data Center]
```

### Relationships

Supported relationship types:

| Syntax | Relationship | Description |
|--------|-------------|-------------|
| `-->` | Serving | Element serves another |
| `--:>` | Realization | Element realizes another |
| `-|>` | Triggering | Element triggers another |
| `.--.` | Assignment | Element assigned to another |
| `+-` | Composition | Element composed of another |
| `o-` | Aggregation | Element aggregates another |
| `-:>` | Specialization | Element specializes another |
| `---` | Association | Elements are associated |
| `<->` | Access | Bidirectional access |

**Examples:**
```
[Customer] --> [Sales Process]          # Serving
[Web Portal] --:> [Customer Service]    # Realization
[Order Event] -|> [Fulfillment]         # Triggering
[Manager] .-- [Project Team]            # Assignment
[System] +- [Database]                  # Composition
[Department] o- [Employee]              # Aggregation
[Premium Customer] -:> [Customer]       # Specialization
```

### Complete Example

```
#spacing: 80
#fontSize: 14

// Business Layer
[<business:actor> Customer]
[<business:process> Order Process]
[<business:service> Online Shopping]

// Application Layer
[<application:component> Web Portal]
[<application:service> Payment Service]
[<application:data> Customer Database]

// Technology Layer
[<technology:node> Application Server]
[<technology:device> Web Server]

// Relationships
[Customer] --> [Order Process]
[Order Process] --> [Online Shopping]
[Online Shopping] --:> [Web Portal]
[Web Portal] --> [Payment Service]
[Payment Service] <-> [Customer Database]
[Web Portal] --> [Application Server]
[Application Server] --> [Web Server]
```

## 🔧 API Reference

### `ArchiCode.render(code, container)`

Renders an ArchiMate diagram from textual code to a DOM element.

**Parameters:**
- `code` (string) - ArchiMate code in Architext syntax
- `container` (string | HTMLElement) - CSS selector or DOM element

**Returns:**
- SVGElement - The created SVG element

**Example:**
```javascript
const code = `
  [<business:actor> Customer]
  [<business:process> Order Process]
  [Customer] --> [Order Process]
`;
ArchiCode.render(code, '#diagram');
```

---

### `ArchiCode.exportSVG(code)`

Exports diagram as an SVG string (without rendering to DOM).

**Parameters:**
- `code` (string) - ArchiMate code in Architext syntax

**Returns:**
- string - SVG markup as a string

**Example:**
```javascript
const svgString = ArchiCode.exportSVG(code);
// Use the SVG string for download, storage, or embedding
const blob = new Blob([svgString], { type: 'image/svg+xml' });
const url = URL.createObjectURL(blob);
```

---

### `ArchiCode.exportDrawIO(code)`

Exports diagram as draw.io/diagrams.net XML format for import.

**Parameters:**
- `code` (string) - ArchiMate code in Architext syntax

**Returns:**
- string - XML string compatible with draw.io

**Example:**
```javascript
const drawIoXml = ArchiCode.exportDrawIO(code);
// Download as .drawio file
const blob = new Blob([drawIoXml], { type: 'application/xml' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'diagram.drawio';
a.click();
```

---

### `ArchiCode.parse(code)`

Parses ArchiMate code into an internal structure (advanced usage).

**Parameters:**
- `code` (string) - ArchiMate code in Architext syntax

**Returns:**
- object - `{ elements, relations, config }`

**Example:**
```javascript
const { elements, relations, config } = ArchiCode.parse(code);
console.log('Found', elements.length, 'elements and', relations.length, 'relations');
```

## 🤖 AI Integration

ArchiCode.js works excellently with AI tools for automated diagram creation!

**Example AI Prompt:**
```
Create an ArchiCode.js diagram for an e-commerce platform with:
- Business layer (customer, process, service)
- Application layer (web app, database)
- Technology layer (server, network)

Use ArchiMate 3.2 syntax with format [<layer:type> Name].
```

## 🎨 Configuration

Customize diagram appearance:

```
#spacing: 80          # Distance between elements
#padding: 16          # Padding within elements
#fontSize: 14         # Text size
#lineWidth: 2         # Line thickness
#arrowSize: 8         # Arrow size
#direction: down      # Layout direction (down/right)
#showBadges: true     # Show layer badges (M, S, B, A, T, P, I)
```

## 🚀 Live Demo

Try ArchiCode.js online: [Demo Page](https://yllemo.github.io/ArchiCode/)

## 📚 Examples

Check the [examples](./examples/) directory for more complex diagrams and use cases.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **The Open Group** for the ArchiMate 3.2 standard
- **[Architext.dev](https://architext.dev)** by Arie Timmerman for syntax inspiration
- Inspired by **mermaid.js** for library design

## 📞 Support

- [GitHub Issues](https://github.com/yllemo/ArchiCode/issues)
- [Documentation](https://github.com/yllemo/ArchiCode/wiki)

---

**ArchiMate®** is a registered trademark of The Open Group.

Made with ❤️ for enterprise architects and system designers.