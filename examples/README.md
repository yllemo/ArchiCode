# ArchiCode.js Examples

This directory contains example ArchiMate diagrams demonstrating various features of ArchiCode.js.

## Basic Examples

- [basic-business.archimate](./basic-business.archimate) - Simple business layer diagram
- [application-architecture.archimate](./application-architecture.archimate) - Application layer with integrations
- [technology-stack.archimate](./technology-stack.archimate) - Technology infrastructure diagram
- [complete-enterprise.archimate](./complete-enterprise.archimate) - Multi-layer enterprise architecture

## Advanced Examples

- [motivation-strategy.archimate](./motivation-strategy.archimate) - Motivation and strategy layers
- [transformation.archimate](./transformation.archimate) - Implementation and migration
- [relationship-showcase.archimate](./relationship-showcase.archimate) - All relationship types

## Domain-Specific Examples

- [ecommerce-platform.archimate](./ecommerce-platform.archimate) - E-commerce architecture
- [banking-system.archimate](./banking-system.archimate) - Banking system architecture
- [healthcare-system.archimate](./healthcare-system.archimate) - Healthcare IT architecture

## How to Use

1. Open any `.archimate` file in a text editor
2. Copy the content to the ArchiCode.js playground
3. Or use programmatically:

```javascript
fetch('./examples/basic-business.archimate')
    .then(response => response.text())
    .then(code => ArchiCode.render(code, '#diagram'));
```