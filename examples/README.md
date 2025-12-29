# ArchiCode.js Examples

This directory contains example ArchiMate diagrams demonstrating various features of ArchiCode.js.

## Available Examples

- [basic-business.archimate](./basic-business.archimate) - Simple business layer diagram with actors, processes, and services
- [ecommerce-platform.archimate](./ecommerce-platform.archimate) - Complete e-commerce platform architecture across business, application, and technology layers
- [relationship-showcase.archimate](./relationship-showcase.archimate) - Comprehensive demonstration of all ArchiMate relationship types

## How to Use

1. Open any `.archimate` file in a text editor
2. Copy the content to the ArchiCode.js playground
3. Or use programmatically:

```javascript
fetch('./examples/basic-business.archimate')
    .then(response => response.text())
    .then(code => ArchiCode.render(code, '#diagram'));
```