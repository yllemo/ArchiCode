# Changelog

All notable changes to ArchiCode.js will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Additional layout algorithms (hierarchical, circular)
- PNG/PDF export support
- Interactive diagrams with clickable elements
- Import from ArchiMate Exchange Format
- Animated transitions
- Element grouping and nesting

## [1.0.0] - 2025-12-29

### Added
- Initial release of ArchiCode.js library
- Complete ArchiMate 3.2 standard support
  - All 7 layers (Motivation, Strategy, Business, Application, Technology, Physical, Implementation)
  - Official colors and shapes according to specification
  - Proper element forms (square/rounded/diagonal corners)
- Architext.dev compatible syntax
- All ArchiMate relationship types:
  - Association (`---`)
  - Serving (`-->`)
  - Realization (`--:>`)
  - Triggering (`-|>`)
  - Assignment (`.--.`)
  - Composition (`+-`)
  - Aggregation (`o-`)
  - Specialization (`-:>`)
  - Access (`<->`)
  - Flow (`-->` dashed)
- Autonomous rendering with automatic layout algorithm
- SVG export functionality
- Draw.io XML export for further editing
- Configuration directives:
  - `#spacing` - Element spacing
  - `#padding` - Element padding
  - `#fontSize` - Text size
  - `#lineWidth` - Line thickness
  - `#arrowSize` - Arrow size
  - `#direction` - Layout direction
  - `#showBadges` - Layer badges visibility
- Comprehensive icon system with embedded SVG icons
- Support for:
  - Inline element definitions in relationships
  - Bidirectional relationships
  - Relationship labels
  - Long element names with automatic text scaling
  - Multiple relationships between same elements
- Interactive demo application with:
  - Live code editor
  - Real-time preview
  - Zoom and pan functionality
  - Fullscreen mode
  - Auto-save functionality
  - Keyboard shortcuts (Ctrl+Enter)
- Zero external dependencies
- Browser and Node.js compatibility
- TypeScript definitions
- Comprehensive documentation in Swedish and English
- Example diagrams covering various use cases
- MIT License

### Technical Details
- Pure JavaScript ES6+ implementation
- Automatic element positioning algorithm
- Clean SVG output with proper escaping
- Memory-efficient rendering
- Cross-browser compatibility
- Responsive design support

### Documentation
- Complete API reference
- Syntax guide with all ArchiMate elements
- Configuration options
- Export capabilities
- Integration examples
- AI prompt templates
- Troubleshooting guide

---

## Version History

### Pre-1.0 Development

Development focused on:
- ArchiMate 3.2 specification research
- Architext.dev syntax compatibility
- SVG rendering engine development
- Automatic layout algorithm design
- Icon system creation
- Demo application development

---

**Legend:**
- `Added` for new features
- `Changed` for changes in existing functionality
- `Deprecated` for soon-to-be removed features
- `Removed` for now removed features
- `Fixed` for any bug fixes
- `Security` for vulnerability fixes