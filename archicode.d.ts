/**
 * ArchiCode.js TypeScript Definitions
 * Version 1.0.0
 */

declare namespace ArchiCode {
    interface RenderOptions {
        /**
         * CSS selector or DOM element where the diagram should be rendered
         */
        container: string | HTMLElement;
        
        /**
         * Optional configuration for the rendering
         */
        config?: {
            spacing?: number;
            padding?: number;
            fontSize?: number;
            lineWidth?: number;
            arrowSize?: number;
            direction?: 'down' | 'right';
            showBadges?: boolean;
        };
    }

    interface Element {
        id: string;
        name: string;
        layer: string;
        type: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }

    interface Relationship {
        id: string;
        source: string;
        target: string;
        type: string;
        label?: string;
    }

    interface ParseResult {
        elements: Element[];
        relationships: Relationship[];
        config: Record<string, any>;
    }

    /**
     * Main ArchiCode class for rendering ArchiMate diagrams
     */
    class ArchiCodeRenderer {
        /**
         * Render an ArchiMate diagram from text
         * @param code - ArchiMate code in Architext syntax
         * @param container - CSS selector or DOM element
         * @returns SVG element containing the rendered diagram
         */
        render(code: string, container: string | HTMLElement): SVGElement;

        /**
         * Parse ArchiMate code without rendering
         * @param code - ArchiMate code in Architext syntax
         * @returns Parsed elements and relationships
         */
        parse(code: string): ParseResult;

        /**
         * Export diagram as SVG string
         * @param code - ArchiMate code in Architext syntax
         * @returns SVG string
         */
        exportSVG(code: string): string;

        /**
         * Export diagram as draw.io XML
         * @param code - ArchiMate code in Architext syntax
         * @returns XML string compatible with draw.io
         */
        exportDrawIO(code: string): string;
    }
}

declare const ArchiCode: ArchiCode.ArchiCodeRenderer;

// For CommonJS/Node.js environments
declare module '@yllemo/archicode' {
    export = ArchiCode;
}

// For ES6 module environments
export = ArchiCode;
export as namespace ArchiCode;