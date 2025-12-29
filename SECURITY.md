# Security Policy

## Supported Versions

Currently supported versions of ArchiCode.js:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security issues seriously. If you discover a security vulnerability in ArchiCode.js, please report it privately.

### How to Report

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please email security concerns to: henrik.yllemo@[domain] (replace with actual email)

Include the following information:
- Type of issue (e.g., XSS, code injection, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### Response Timeline

- **Initial Response**: Within 48 hours
- **Assessment**: Within 1 week
- **Fix Development**: Depends on severity
- **Public Disclosure**: After fix is available

### Security Considerations

ArchiCode.js processes user-provided text input and generates SVG output. Key security areas:

#### Input Validation
- All user input should be properly sanitized
- Element names and relationships are escaped before SVG generation
- No executable code should be injected through input

#### SVG Output
- Generated SVG should be safe for embedding in web pages
- No JavaScript execution in SVG content
- Proper escaping of text content

#### Web Application Security
- Demo application should follow web security best practices
- No sensitive data should be logged or exposed
- Safe handling of user preferences and auto-save data

### Known Security Measures

1. **Input Sanitization**: All text input is escaped before SVG generation
2. **No Code Execution**: The library does not execute any user-provided code
3. **Safe SVG Generation**: Output SVG contains only safe graphical elements
4. **Client-Side Only**: No server-side processing or data transmission

### Out of Scope

The following are generally considered out of scope for security reports:

- Issues requiring physical access to a user's device
- Social engineering attacks
- Denial of service attacks against the rendering engine
- Issues in third-party dependencies (report directly to those projects)

### Bug Bounty

We currently do not offer a bug bounty program, but we will acknowledge security researchers who responsibly report vulnerabilities.

### Safe Harbor

We support safe harbor for security researchers who:

- Make a good faith effort to avoid privacy violations and data destruction
- Only use exploits to the extent necessary to confirm a vulnerability
- Report vulnerabilities promptly
- Do not access sensitive data or disrupt our services

---

Thank you for helping keep ArchiCode.js secure!