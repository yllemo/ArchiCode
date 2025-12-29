/**
 * ArchiCode.js TypeScript Definitions
 * Version 1.0.0
 */

/**
 * Configuration options for diagram rendering
 */
interface ArchiCodeConfig {
    /** Distance between elements (default: 80) */
    spacing?: number;
    /** Padding within elements (default: 16) */
    padding?: number;
    /** Text size (default: 14) */
    fontSize?: number;
    /** Line thickness (default: 2) */
    lineWidth?: number;
    /** Arrow size (default: 8) */
    arrowSize?: number;
    /** Layout direction (default: 'down') */
    direction?: 'down' | 'right';
    /** Show layer badges (M, S, B, A, T, P, I) (default: true) */
    showBadges?: boolean;
    /** Show element type icons (default: true) */
    showIcons?: boolean;
}

/**
 * ArchiMate element (before layout calculation)
 */
interface ArchiCodeElement {
    /** Unique identifier (element name) */
    id: string;
    /** Display name */
    name: string;
    /** ArchiMate layer (motivation, strategy, business, application, technology, physical, implementation) */
    layer: 'motivation' | 'strategy' | 'business' | 'application' | 'technology' | 'physical' | 'implementation';
    /** ArchiMate element type */
    type: string;
}

/**
 * Positioned ArchiMate element (after layout calculation)
 */
interface ArchiCodeLayoutElement extends ArchiCodeElement {
    /** X coordinate */
    x: number;
    /** Y coordinate */
    y: number;
    /** Element width */
    width: number;
    /** Element height */
    height: number;
}

/**
 * ArchiMate relationship
 */
interface ArchiCodeRelation {
    /** Source element identifier */
    source: string;
    /** Target element identifier */
    target: string;
    /** Relationship type (composition, aggregation, assignment, realization, serving, etc.) */
    type: string;
    /** Relationship syntax used (e.g., '->', '--:>', etc.) */
    syntax: string;
    /** Optional label at relationship start */
    startLabel?: string;
    /** Optional label at relationship end */
    endLabel?: string;
}

/**
 * Result of parsing ArchiMate code
 */
interface ArchiCodeParseResult {
    /** Array of parsed elements */
    elements: ArchiCodeElement[];
    /** Array of parsed relationships */
    relations: ArchiCodeRelation[];
    /** Configuration from code directives */
    config: ArchiCodeConfig;
    /** Array of syntax errors found during parsing */
    parseErrors?: string[];
    /** Array of warning messages */
    warnings?: string[];
    /** True if any errors were found */
    hasErrors?: boolean;
    /** True if any warnings were generated */
    hasWarnings?: boolean;
}

/**
 * Main ArchiCode class for rendering ArchiMate diagrams
 */
declare class ArchiCodeRenderer {
    /**
     * Render an ArchiMate diagram from text to a DOM element
     * @param code - ArchiMate code in Architext syntax
     * @param container - CSS selector or DOM element
     * @returns SVG element containing the rendered diagram
     * @example
     * ```typescript
     * const code = `
     *   [<business:actor> Customer]
     *   [<business:process> Order Process]
     *   [Customer] --> [Order Process]
     * `;
     * ArchiCode.render(code, '#diagram');
     * ```
     */
    render(code: string, container: string | HTMLElement): SVGElement;

    /**
     * Parse ArchiMate code without rendering
     * @param code - ArchiMate code in Architext syntax
     * @returns Parsed elements, relationships, and configuration
     * @example
     * ```typescript
     * const { elements, relations, config } = ArchiCode.parse(code);
     * console.log('Found', elements.length, 'elements');
     * ```
     */
    parse(code: string): ArchiCodeParseResult;

    /**
     * Calculate layout positions for elements
     * @param elements - Array of ArchiMate elements
     * @param relations - Array of relationships
     * @param config - Configuration options
     * @returns Array of elements with calculated positions
     */
    calculateLayout(
        elements: ArchiCodeElement[],
        relations: ArchiCodeRelation[],
        config: ArchiCodeConfig
    ): ArchiCodeLayoutElement[];

    /**
     * Export diagram as SVG string (without rendering to DOM)
     * @param code - ArchiMate code in Architext syntax
     * @returns SVG markup as a string
     * @example
     * ```typescript
     * const svgString = ArchiCode.exportSVG(code);
     * const blob = new Blob([svgString], { type: 'image/svg+xml' });
     * ```
     */
    exportSVG(code: string): string;

    /**
     * Export diagram as draw.io/diagrams.net XML format
     * @param code - ArchiMate code in Architext syntax
     * @returns XML string compatible with draw.io
     * @example
     * ```typescript
     * const drawIoXml = ArchiCode.exportDrawIO(code);
     * const blob = new Blob([drawIoXml], { type: 'application/xml' });
     * ```
     */
    exportDrawIO(code: string): string;

    /**
     * Export diagram as draw.io XML format (alias for exportDrawIO)
     * @param code - ArchiMate code in Architext syntax
     * @returns XML string compatible with draw.io
     */
    toDrawIo(code: string): string;
}

declare const ArchiCode: ArchiCodeRenderer;

// For CommonJS/Node.js environments
declare module '@yllemo/archicode' {
    export = ArchiCode;
}

// For ES6 module environments
export = ArchiCode;
export as namespace ArchiCode;