# ArchiCode.js Examples

This directory contains example ArchiMate diagrams demonstrating various features of ArchiCode.js.

## Available Examples

- [basic-business.archimate](./basic-business.archimate) - Simple business layer diagram with actors, processes, and services
- [ecommerce-platform.archimate](./ecommerce-platform.archimate) - Complete e-commerce platform architecture across business, application, and technology layers
- [relationship-showcase.archimate](./relationship-showcase.archimate) - Comprehensive demonstration of all ArchiMate relationship types
- [strategy-motivation-layer.archimate](./strategy-motivation-layer.archimate) - **ArchiMate 2025:** Motivation and **Strategy** layers (drivers, goals, capability, resource, course of action) linked to a business service
- [motivation-strategy-transformation.archimate](./motivation-strategy-transformation.archimate) - **Motivation + Strategy** with value stream, multiple capabilities, and realization toward business processes

## How to Use

1. Open any `.archimate` file in a text editor
2. Copy the content to the ArchiCode.js playground
3. Or use programmatically:

```javascript
fetch('./examples/basic-business.archimate')
    .then(response => response.text())
    .then(code => ArchiCode.render(code, '#diagram'));
```