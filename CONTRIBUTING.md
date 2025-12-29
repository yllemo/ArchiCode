# Contributing to ArchiCode.js

Thank you for your interest in contributing to ArchiCode.js! We welcome contributions from everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)

## Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Standards

- Be respectful and inclusive
- Focus on constructive feedback
- Accept responsibility and apologize for mistakes
- Focus on what is best for the community

## How to Contribute

### Types of Contributions

We welcome several types of contributions:

- **Bug Reports** - Help us identify and fix issues
- **Feature Requests** - Suggest new functionality
- **Documentation** - Improve or add documentation
- **Code Contributions** - Fix bugs or implement features
- **Examples** - Add new example diagrams
- **Testing** - Help improve test coverage

### Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a new branch for your contribution
4. Make your changes
5. Test your changes
6. Submit a pull request

## Development Setup

### Prerequisites

- Node.js 14+ (for development tools)
- A modern web browser
- Text editor with JavaScript support

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/yourusername/ArchiCode.git
cd ArchiCode

# Install development dependencies
npm install

# Start development server
npm run dev

# Open the demo in your browser
open http://localhost:8000/demo/
```

### Project Structure

```
ArchiCode/
├── archicode.js          # Main library file
├── archicode.css         # Icon system CSS
├── archicode.d.ts        # TypeScript definitions
├── demo/                 # Interactive demo
├── examples/             # Example diagrams
├── .github/              # GitHub templates and workflows
└── docs/                 # Documentation
```

## Coding Standards

### JavaScript Style

- Use ES6+ features where appropriate
- Follow semicolon usage consistently
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Maintain the existing code style

### Example:

```javascript
/**
 * Renders an ArchiMate element
 * @param {Object} element - The element to render
 * @param {string} element.name - Element name
 * @param {string} element.type - Element type
 * @returns {SVGElement} The rendered SVG element
 */
function renderElement(element) {
    // Implementation here
}
```

### ArchiMate Standards

- Follow ArchiMate 3.2 specification
- Use official colors and shapes
- Maintain compatibility with Architext.dev syntax
- Document any deviations from standards

## Testing

### Manual Testing

1. Test the demo application
2. Verify all examples render correctly
3. Test export functionality (SVG, draw.io)
4. Check browser compatibility

### Example Validation

```bash
# Validate all examples
npm run validate-examples
```

### Browser Testing

Test in these browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Pull Request Process

### Before Submitting

1. **Test thoroughly** - Ensure your changes work
2. **Update documentation** - Include relevant docs updates
3. **Add examples** - If adding features, provide examples
4. **Check formatting** - Run `npm run format`
5. **Validate examples** - Ensure examples still work

### Pull Request Guidelines

1. **Clear title** - Describe what your PR does
2. **Detailed description** - Explain the changes and why
3. **Link issues** - Reference related issues
4. **Small scope** - Keep PRs focused and manageable
5. **Update changelog** - Add entry to CHANGELOG.md

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Example addition
- [ ] Other (please describe)

## Testing
- [ ] Tested in multiple browsers
- [ ] All examples still work
- [ ] Export functionality works
- [ ] No console errors

## Screenshots
If applicable, add screenshots

## Related Issues
Fixes #(issue number)
```

## Reporting Issues

### Bug Reports

Use the bug report template and include:

- ArchiCode.js version
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- ArchiMate code that causes the issue
- Console error messages

### Feature Requests

Use the feature request template and include:

- Clear description of the feature
- Use case or problem it solves
- Examples or mockups if applicable
- ArchiMate standard compliance considerations

## Documentation

### README Updates

- Keep both Swedish (README.md) and English (README_EN.md) updated
- Update version numbers consistently
- Add new features to feature lists

### Code Documentation

- Use JSDoc for all public APIs
- Include parameter types and return values
- Add usage examples for complex functions

### Examples

- Create clear, focused examples
- Include comments explaining key concepts
- Test examples before submitting
- Add entries to examples/README.md

## Release Process

Releases are managed by maintainers:

1. Update version in package.json
2. Update CHANGELOG.md
3. Create Git tag
4. Publish to NPM
5. Deploy demo to GitHub Pages

## Questions?

- Open a GitHub issue for questions
- Check existing issues and documentation first
- Be patient and respectful when asking for help

## Recognition

All contributors will be recognized in the project. Thank you for helping make ArchiCode.js better!

---

By contributing to ArchiCode.js, you agree to license your contributions under the MIT License.