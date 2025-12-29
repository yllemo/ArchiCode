/**
 * ArchiCode.js - Autonomous ArchiMate Diagram Renderer
 * Version 1.0.0
 *
 * A standalone library for rendering ArchiMate 3.2 diagrams from text
 * Compatible with Architext.dev syntax
 *
 * @author Henrik Yllemo
 * @copyright 2025 Henrik Yllemo
 * @license MIT
 *
 * Usage:
 *   ArchiCode.render(sourceCode, targetElement);
 */

(function(global) {
    'use strict';

    // ArchiMate 3.2 Standard Colors (based on official specification)
    const ARCHIMATE_COLORS = {
        // Motivation Layer - Pink/Magenta
        'motivation': { fill: '#FFCCDD', stroke: '#CC0066', badge: 'M' },
        
        // Strategy Layer - Orange
        'strategy': { fill: '#FFE0B2', stroke: '#FF6F00', badge: 'S' },
        
        // Business Layer - Yellow
        'business': { fill: '#FFF9C4', stroke: '#F9A825', badge: 'B' },
        
        // Application Layer - Light Blue
        'application': { fill: '#B3E5FC', stroke: '#0277BD', badge: 'A' },
        
        // Technology Layer - Green
        'technology': { fill: '#C8E6C9', stroke: '#388E3C', badge: 'T' },
        
        // Physical Layer - Light Purple
        'physical': { fill: '#E1BEE7', stroke: '#7B1FA2', badge: 'P' },
        
        // Implementation & Migration Layer - Pink
        'implementation': { fill: '#F8BBD0', stroke: '#C2185B', badge: 'I' }
    };

    // ArchiMate Element Types (corners indicate element type)
    // Square corners = Structure elements
    // Rounded corners = Behavior elements
    // Diagonal corners = Motivation elements
    const ELEMENT_SHAPES = {
        // Structure elements (square corners)
        'actor': 'square',
        'role': 'square',
        'collaboration': 'square',
        'interface': 'square',
        'component': 'square',
        'node': 'square',
        'device': 'square',
        'system-software': 'square',
        'path': 'square',
        'network': 'square',
        'equipment': 'square',
        'facility': 'square',
        'material': 'square',
        'object': 'square',
        'contract': 'square',
        'product': 'square',
        'artifact': 'square',
        'data': 'square',
        'representation': 'square',
        'resource': 'square',
        'capability': 'square',
        
        // Behavior elements (rounded corners)
        'process': 'rounded',
        'function': 'rounded',
        'interaction': 'rounded',
        'event': 'rounded',
        'service': 'rounded',
        'workpackage': 'rounded',
        'deliverable': 'rounded',
        'gap': 'rounded',
        'plateau': 'rounded',
        'course-of-action': 'rounded',
        
        // Motivation elements (diagonal corners)
        'stakeholder': 'diagonal',
        'driver': 'diagonal',
        'assessment': 'diagonal',
        'goal': 'diagonal',
        'outcome': 'diagonal',
        'principle': 'diagonal',
        'requirement': 'diagonal',
        'constraint': 'diagonal',
        'meaning': 'diagonal',
        'value': 'diagonal',
        
        // Default
        'default': 'square'
    };

    // Map element types to CSS icon classes (defined in archicode.css)
    const ICON_CLASS_MAP = {
        // Business Layer
        'actor': 'actor',
        'role': 'role',
        'collaboration': 'collaboration',
        'business-collaboration': 'collaboration',
        'business-interface': 'business-interface',
        'interface': 'business-interface',
        'process': 'process',
        'business-process': 'process',
        'function': 'function',
        'business-function': 'function',
        'interaction': 'interaction',
        'business-interaction': 'interaction',
        'event': 'event',
        'business-event': 'event',
        'service': 'service',
        'business-service': 'service',
        'object': 'object',
        'business-object': 'object',
        'data': 'data',
        'business-data': 'data',
        'contract': 'contract',
        'business-contract': 'contract',
        'product': 'product',
        'business-product': 'product',
        
        // Application Layer
        'component': 'application-component',
        'application-component': 'application-component',
        'application-collaboration': 'application-collaboration',
        'application-interface': 'application-interface',
        'application-function': 'application-function',
        'application-interaction': 'application-interaction',
        'application-event': 'application-event',
        'application-service': 'application-service',
        'data-object': 'data-object',
        'application-data': 'data-object',
        
        // Technology Layer
        'node': 'node',
        'device': 'device',
        'system-software': 'system-software',
        'technology-system-software': 'system-software',
        'network': 'network',
        'path': 'network',
        'communication-network': 'network',
        'technology-network': 'network',
        'technology-service': 'technology-service',
        'technology-interface': 'technology-interface',
        'artifact': 'artifact',
        'equipment': 'equipment',
        'facility': 'facility',
        'material': 'material',
        
        // Motivation Layer
        'stakeholder': 'stakeholder',
        'driver': 'driver',
        'assessment': 'assessment',
        'goal': 'goal',
        'outcome': 'outcome',
        'principle': 'principle',
        'requirement': 'requirement',
        'constraint': 'constraint',
        'value': 'value',
        'meaning': 'meaning',
        
        // Strategy Layer
        'capability': 'capability',
        'resource': 'resource',
        'course-of-action': 'course-of-action',
        
        // Implementation & Migration Layer
        'workpackage': 'workpackage',
        'work-package': 'workpackage',
        'deliverable': 'deliverable',
        'plateau': 'plateau',
        'gap': 'gap',
        
        // Physical Layer
        'physical-equipment': 'physical-equipment',
        'physical-facility': 'physical-facility',
        'physical-material': 'physical-material'
    };

    // Relationship types and their visual representations (ArchiMate 3.2 standard)
    const RELATIONSHIPS = {
        'composition': { line: 'solid', arrow: 'filled-diamond', label: '' },
        'aggregation': { line: 'solid', arrow: 'empty-diamond', label: '' },
        'assignment': { line: 'solid', arrow: 'filled-circle', label: '' },
        'realization': { line: 'dashed', arrow: 'empty-triangle', label: '' },
        'serving': { line: 'solid', arrow: 'open', label: '' },
        'access': { line: 'dashed', arrow: 'open', label: '' },
        'influence': { line: 'dashed', arrow: 'open', label: '' },
        'triggering': { line: 'solid', arrow: 'open', label: '' },
        'flow': { line: 'dashed', arrow: 'open', label: '' },
        'specialization': { line: 'solid', arrow: 'empty-triangle', label: '' },
        'association': { line: 'solid', arrow: 'none', label: '' }
    };

    // Map Architext.dev syntax to relationship types
    // Based on official Architext.dev documentation: https://architext.dev/guide/relationships.html
    const SYNTAX_TO_RELATIONSHIP = {
        // Specialization: -:> or <-: or <:--
        '-:>': 'specialization',
        '<:-': 'specialization',
        '<:--': 'specialization',
        // Composition: +- or -+
        '+-': 'composition',
        '-+': 'composition',
        // Aggregation: o- or -o
        'o-': 'aggregation',
        '-o': 'aggregation',
        // Assignments: .--. or .-> or .-|> or .--|> or <-. or <-|.
        '.--.': 'assignment',
        '.->': 'assignment',
        '.-|>': 'assignment',
        '.--|>': 'assignment',
        '<-.': 'assignment',
        '<-|.': 'assignment',
        // Realization: --:> or <:--
        '--:>': 'realization',
        '<:--': 'realization',
        // Triggering: -|> or <|-
        '-|>': 'triggering',
        '<|-': 'triggering',
        // Serving: -> or <-
        '->': 'serving',
        '<-': 'serving',
        // Flow: --> or <--
        '-->': 'flow',
        '<--': 'flow',
        // Access: <->
        '<->': 'access',
        // Association: --- or <--
        '---': 'association',
        '<--': 'association'
    };

    /**
     * Main ArchiCode class
     */
    class ArchiCode {
        constructor() {
            this.config = {
                spacing: 80,
                padding: 16,
                fontSize: 14,
                lineWidth: 2,
                arrowSize: 8,
                direction: 'down',
                showBadges: true,
                showIcons: true
            };

            // Cache för ikonernas data-URL (hämtas från CSS en gång)
            this.iconCache = {};
        }

        /**
         * Parse ArchiMate code
         */
        parse(code) {
            const lines = code.split('\n');
            const elements = [];
            const relations = [];
            const config = { ...this.config };

            for (let line of lines) {
                line = line.trim();
                
                // Skip empty lines and comments
                if (!line || line.startsWith('//')) continue;
                
                // Configuration directives
                if (line.startsWith('#')) {
                    const match = line.match(/#(\w+):\s*(.+)/);
                    if (match) {
                        const [, key, value] = match;
                        config[key] = isNaN(value) ? value : parseFloat(value);
                    }
                    continue;
                }
                
                // Element: [<layer:type> Name] or [Name] (without type)
                const elementMatchWithType = line.match(/\[<([^:>]+):([^>]+)>\s*([^\]]+)\]/);
                const elementMatchWithoutType = line.match(/^\[([^\]]+)\]$/);
                
                if (elementMatchWithType) {
                    const [, layer, type, name] = elementMatchWithType;
                    const elementName = name.trim();
                    // Use full name as ID, but also store first word for matching
                    const elementId = elementName;
                    // Check if element already exists (avoid duplicates)
                    if (!elements.find(el => el.id === elementId)) {
                        elements.push({
                            layer: layer.trim().toLowerCase(),
                            type: type.trim().toLowerCase(),
                            name: elementName,
                            id: elementId
                        });
                    }
                    continue;
                } else if (elementMatchWithoutType) {
                    // Element without type definition - treat as generic element
                    const elementName = elementMatchWithoutType[1].trim();
                    const elementId = elementName;
                    // Only add if not already defined and not part of a relation
                    if (!elements.find(el => el.id === elementId)) {
                        // Check if this line is actually a relation (has relation syntax)
                        const hasRelationSyntax = /\[([^\]]+)\]\s*(-:>|<-:|<:--|\+\-|\-\+|o-|-o|\.--\.|\.->|\.-\|>|\.--\|>|<-\||<-\|\.|--:>|-\|>|<\|-|->|<-|-->|<--|<->|---)\s*\[([^\]]+)\]/.test(line);
                        if (!hasRelationSyntax) {
                            elements.push({
                                layer: 'business', // Default layer
                                type: 'object', // Default type
                                name: elementName,
                                id: elementId
                            });
                        }
                    }
                    continue;
                }
                
                // Relation: [Source] --> [Target] or [Source] --> [<layer:type> Target]
                // Support all Architext.dev relationship syntaxes: https://architext.dev/guide/relationships.html
                // Also support reverse directions and inline element definitions
                // Parse all relations on the line (can have multiple like [a]-[b]-[c])
                // Support labels: [Source]label-->[Target] or [Source]-->label[Target]
                // Match pattern: [source] (optional startLabel) (syntax) (optional endLabel) [target]
                // Note: We need to match labels that can appear between syntax and target
                const relationPattern = /\[([^\]]+)\]\s*([^\[]*?)(-:>|<-:|<:--|\+\-|\-\+|o-|-o|\.--\.|\.->|\.-\|>|\.--\|>|<-\||<-\|\.|--:>|-\|>|<\|-|->|<-|-->|<--|<->|---)\s*([^\[]*?)\s*\[([^\]]+)\]/g;
                let relationMatch;
                while ((relationMatch = relationPattern.exec(line)) !== null) {
                    let [, source, startLabel, syntax, endLabel, target] = relationMatch;
                    source = source.trim();
                    target = target.trim();
                    syntax = syntax.trim();
                    startLabel = startLabel ? startLabel.trim() : '';
                    endLabel = endLabel ? endLabel.trim() : '';
                    
                    // Check if target is an inline element definition: [<layer:type> Name]
                    const inlineElementMatch = target.match(/<([^:>]+):([^>]+)>\s*(.+)/);
                    if (inlineElementMatch) {
                        const [, layer, type, name] = inlineElementMatch;
                        const elementName = name.trim();
                        const elementId = elementName;
                        // Add element if it doesn't exist
                        if (!elements.find(el => el.id === elementId)) {
                            elements.push({
                                layer: layer.trim().toLowerCase(),
                                type: type.trim().toLowerCase(),
                                name: elementName,
                                id: elementId
                            });
                        }
                        target = elementId;
                    } else {
                        // Target is just a name - ensure element exists (create if missing)
                        const targetId = target.trim();
                        if (!elements.find(el => el.id === targetId)) {
                            elements.push({
                                layer: 'business', // Default layer
                                type: 'object', // Default type
                                name: targetId,
                                id: targetId
                            });
                        }
                    }
                    
                    // Check if source is an inline element definition
                    const inlineSourceMatch = source.match(/<([^:>]+):([^>]+)>\s*(.+)/);
                    if (inlineSourceMatch) {
                        const [, layer, type, name] = inlineSourceMatch;
                        const elementName = name.trim();
                        const elementId = elementName;
                        if (!elements.find(el => el.id === elementId)) {
                            elements.push({
                                layer: layer.trim().toLowerCase(),
                                type: type.trim().toLowerCase(),
                                name: elementName,
                                id: elementId
                            });
                        }
                        source = elementId;
                    } else {
                        // Source is just a name - ensure element exists (create if missing)
                        const sourceId = source.trim();
                        if (!elements.find(el => el.id === sourceId)) {
                            elements.push({
                                layer: 'business', // Default layer
                                type: 'object', // Default type
                                name: sourceId,
                                id: sourceId
                            });
                        }
                    }
                    
                    // Determine relationship type and direction
                    let relType = SYNTAX_TO_RELATIONSHIP[syntax] || 'association';
                    let relSource = source;
                    let relTarget = target;
                    
                    // Handle reverse directions (swap source/target if needed)
                    // Check for reverse syntax patterns
                    const isReverse = syntax.startsWith('<') && !syntax.includes('->') && syntax !== '<->';
                    if (isReverse) {
                        // Reverse direction: swap source and target
                        relSource = target;
                        relTarget = source;
                        // Normalize syntax for lookup (remove leading < and reverse)
                        const reverseMap = {
                            '<:-': '-:>',
                            '<:--': '--:>',
                            '<|-': '-|>',
                            '<-': '->',
                            '<--': '-->',
                            '<-.': '.->',
                            '<-|.': '.-|>',
                            '<-|': '.->'  // Handle <-| as assignment
                        };
                        if (reverseMap[syntax]) {
                            relType = SYNTAX_TO_RELATIONSHIP[reverseMap[syntax]] || relType;
                        } else {
                            // Generic reverse: try to find forward version
                            const forwardSyntax = syntax.replace(/^</, '').replace(/-$/, '->');
                            if (SYNTAX_TO_RELATIONSHIP[forwardSyntax]) {
                                relType = SYNTAX_TO_RELATIONSHIP[forwardSyntax];
                            }
                        }
                    }
                    
                    // Always push the relation (allow multiple identical relations)
                    relations.push({
                        source: relSource,
                        target: relTarget,
                        type: relType,
                        syntax: syntax,
                        startLabel: startLabel,
                        endLabel: endLabel
                    });
                }
            }

            return { elements, relations, config };
        }

        /**
         * Calculate layout using hierarchical approach
         */
        calculateLayout(elements, relations, config) {
            const elementWidth = 180;
            const elementHeight = 60;
            const spacing = config.spacing || 80;
            
            // Build dependency graph
            const graph = new Map();
            const inDegree = new Map();
            
            elements.forEach(el => {
                graph.set(el.id, []);
                inDegree.set(el.id, 0);
            });
            
            relations.forEach(rel => {
                if (graph.has(rel.source) && graph.has(rel.target)) {
                    graph.get(rel.source).push(rel.target);
                    inDegree.set(rel.target, (inDegree.get(rel.target) || 0) + 1);
                }
            });
            
            // Topological sort for layering
            const layers = [];
            const processed = new Set();
            const queue = [];
            
            // Start with nodes that have no incoming edges
            inDegree.forEach((degree, id) => {
                if (degree === 0) queue.push(id);
            });
            
            while (queue.length > 0) {
                const currentLayer = [...queue];
                queue.length = 0;
                layers.push(currentLayer);
                
                currentLayer.forEach(id => {
                    processed.add(id);
                    const neighbors = graph.get(id) || [];
                    neighbors.forEach(neighbor => {
                        const newDegree = inDegree.get(neighbor) - 1;
                        inDegree.set(neighbor, newDegree);
                        if (newDegree === 0 && !processed.has(neighbor)) {
                            queue.push(neighbor);
                        }
                    });
                });
            }
            
            // Add any remaining elements (cycles or isolated nodes)
            const remaining = elements.filter(el => !processed.has(el.id));
            if (remaining.length > 0) {
                layers.push(remaining.map(el => el.id));
            }
            
            // Position elements
            const positioned = new Map();
            layers.forEach((layer, layerIndex) => {
                const y = layerIndex * (elementHeight + spacing) + spacing;
                const layerWidth = layer.length * (elementWidth + spacing);
                const startX = spacing;
                
                layer.forEach((id, index) => {
                    const x = startX + index * (elementWidth + spacing);
                    const element = elements.find(el => el.id === id);
                    if (element) {
                        positioned.set(id, {
                            ...element,
                            x, y,
                            width: elementWidth,
                            height: elementHeight
                        });
                    }
                });
            });
            
            return Array.from(positioned.values());
        }

        /**
         * Create SVG element
         */
        createSvgElement(tag, attrs = {}) {
            const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
            Object.entries(attrs).forEach(([key, value]) => {
                el.setAttribute(key, value);
            });
            return el;
        }

        /**
         * Resolve CSS background-image for an ArchiMate icon class to a data URL
         * This ensures icons följer med i exporterad SVG (via <image> med data-URL)
         */
        getIconDataUrl(iconClass) {
            if (!iconClass || typeof window === 'undefined' || !window.getComputedStyle) return null;

            if (this.iconCache[iconClass]) {
                return this.iconCache[iconClass];
            }

            const tmp = document.createElement('div');
            tmp.style.position = 'absolute';
            tmp.style.visibility = 'hidden';
            tmp.style.pointerEvents = 'none';
            tmp.className = `archimate-icon ${iconClass}`;
            document.body.appendChild(tmp);

            const bg = window.getComputedStyle(tmp).backgroundImage || '';
            document.body.removeChild(tmp);

            const match = bg.match(/url\\(["']?(.*?)["']?\\)/);
            const url = match ? match[1] : null;

            if (url) {
                this.iconCache[iconClass] = url;
            }
            return url;
        }

        /**
         * Render an ArchiMate element
         */
        renderElement(element, config) {
            const g = this.createSvgElement('g', { 
                class: 'archimate-element',
                'data-layer': element.layer,
                'data-type': element.type
            });
            
            const colors = ARCHIMATE_COLORS[element.layer] || { 
                fill: '#E0E0E0', 
                stroke: '#616161',
                badge: '?' 
            };
            const shape = ELEMENT_SHAPES[element.type] || 'square';
            
            // Create shape based on type
            let shapeEl;
            if (shape === 'rounded') {
                shapeEl = this.createSvgElement('rect', {
                    x: element.x,
                    y: element.y,
                    width: element.width,
                    height: element.height,
                    rx: 12,
                    ry: 12,
                    fill: colors.fill,
                    stroke: colors.stroke,
                    'stroke-width': config.lineWidth || 2
                });
            } else if (shape === 'diagonal') {
                // Create polygon for diagonal corners (motivation elements)
                const offset = 8;
                const points = [
                    [element.x + offset, element.y],
                    [element.x + element.width, element.y],
                    [element.x + element.width, element.y + element.height - offset],
                    [element.x + element.width - offset, element.y + element.height],
                    [element.x, element.y + element.height],
                    [element.x, element.y + offset]
                ].map(p => p.join(',')).join(' ');
                
                shapeEl = this.createSvgElement('polygon', {
                    points: points,
                    fill: colors.fill,
                    stroke: colors.stroke,
                    'stroke-width': config.lineWidth || 2
                });
            } else {
                // Square corners
                shapeEl = this.createSvgElement('rect', {
                    x: element.x,
                    y: element.y,
                    width: element.width,
                    height: element.height,
                    fill: colors.fill,
                    stroke: colors.stroke,
                    'stroke-width': config.lineWidth || 2
                });
            }
            g.appendChild(shapeEl);

            // Icon in top-right corner (HTML via foreignObject, styled by archicode.css)
            if (config.showIcons) {
                const iconClass = ICON_CLASS_MAP[element.type];
                if (iconClass) {
                    const iconSize = Math.min(20, element.height * 0.4);
                    const fo = this.createSvgElement('foreignObject', {
                        x: element.x + element.width - iconSize - 4,
                        y: element.y + 4,
                        width: iconSize,
                        height: iconSize
                    });
                    const div = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
                    div.setAttribute('class', `archimate-icon ${iconClass}`);
                    fo.appendChild(div);
                    g.appendChild(fo);
                }
            }
            
            // Layer badge (small letter in top-left)
            if (config.showBadges) {
                const badge = this.createSvgElement('text', {
                    x: element.x + 8,
                    y: element.y + 16,
                    'font-size': '10',
                    'font-family': 'Arial, sans-serif',
                    'font-weight': 'bold',
                    fill: colors.stroke
                });
                badge.textContent = colors.badge;
                g.appendChild(badge);
            }
            
            // Type label (italic, small)
            const typeLabel = this.createSvgElement('text', {
                x: element.x + element.width / 2,
                y: element.y + 20,
                'text-anchor': 'middle',
                'font-size': '10',
                'font-family': 'Arial, sans-serif',
                'font-style': 'italic',
                fill: '#666'
            });
            typeLabel.textContent = `«${element.type}»`;
            g.appendChild(typeLabel);
            
            // Element name (bold, centered) - scales down if too wide
            const baseFontSize = config.fontSize || 14;
            const padding = 16; // Horizontal padding to account for
            const availableWidth = element.width - padding;
            
            // Estimate text width (approximate: Arial bold is roughly 0.6 * fontSize per character)
            // This is a reasonable approximation for Arial bold font
            const estimatedCharWidth = baseFontSize * 0.6;
            const estimatedTextWidth = element.name.length * estimatedCharWidth;
            
            // Calculate scale factor if text is too wide
            let fontSize = baseFontSize;
            if (estimatedTextWidth > availableWidth) {
                fontSize = Math.max(8, (availableWidth / estimatedTextWidth) * baseFontSize);
            }
            
            const nameText = this.createSvgElement('text', {
                x: element.x + element.width / 2,
                y: element.y + element.height / 2 + 5,
                'text-anchor': 'middle',
                'font-size': fontSize,
                'font-family': 'Arial, sans-serif',
                'font-weight': 'bold',
                fill: '#000'
            });
            nameText.textContent = element.name;
            g.appendChild(nameText);
            
            return g;
        }

        /**
         * Calculate smart connection points between two elements
         * Chooses the nearest side of each box instead of always bottom->top
         */
        calculateConnectionPoints(source, target) {
            // Calculate centers
            const sourceCenterX = source.x + source.width / 2;
            const sourceCenterY = source.y + source.height / 2;
            const targetCenterX = target.x + target.width / 2;
            const targetCenterY = target.y + target.height / 2;

            // Calculate angle between boxes
            const dx = targetCenterX - sourceCenterX;
            const dy = targetCenterY - sourceCenterY;
            const angle = Math.atan2(dy, dx);

            // Determine connection point on source based on angle
            let sourcePoint;
            if (Math.abs(angle) < Math.PI / 4) {
                // Right side
                sourcePoint = { x: source.x + source.width, y: sourceCenterY, side: 'right' };
            } else if (Math.abs(angle) > 3 * Math.PI / 4) {
                // Left side
                sourcePoint = { x: source.x, y: sourceCenterY, side: 'left' };
            } else if (angle > 0) {
                // Bottom
                sourcePoint = { x: sourceCenterX, y: source.y + source.height, side: 'bottom' };
            } else {
                // Top
                sourcePoint = { x: sourceCenterX, y: source.y, side: 'top' };
            }

            // Determine connection point on target (opposite side)
            const reverseAngle = angle + Math.PI;
            let targetPoint;
            if (Math.abs(reverseAngle) < Math.PI / 4 || Math.abs(reverseAngle) > 7 * Math.PI / 4) {
                // Right side
                targetPoint = { x: target.x + target.width, y: targetCenterY, side: 'right' };
            } else if (Math.abs(reverseAngle) > 3 * Math.PI / 4 && Math.abs(reverseAngle) < 5 * Math.PI / 4) {
                // Left side
                targetPoint = { x: target.x, y: targetCenterY, side: 'left' };
            } else if (reverseAngle > 0 && reverseAngle < Math.PI) {
                // Bottom
                targetPoint = { x: targetCenterX, y: target.y + target.height, side: 'bottom' };
            } else {
                // Top
                targetPoint = { x: targetCenterX, y: target.y, side: 'top' };
            }

            return { sourcePoint, targetPoint };
        }

        /**
         * Create orthogonal (right-angle) path between two points
         * Creates a path with horizontal and vertical segments instead of diagonal lines
         */
        createOrthogonalPath(sourcePoint, targetPoint) {
            const path = [];
            path.push({ x: sourcePoint.x, y: sourcePoint.y });

            const dx = targetPoint.x - sourcePoint.x;
            const dy = targetPoint.y - sourcePoint.y;

            // Determine routing strategy based on connection sides
            if (sourcePoint.side === 'right' || sourcePoint.side === 'left') {
                // Horizontal exit from source
                const midX = sourcePoint.x + dx / 2;
                path.push({ x: midX, y: sourcePoint.y });
                path.push({ x: midX, y: targetPoint.y });
            } else {
                // Vertical exit from source (top or bottom)
                const midY = sourcePoint.y + dy / 2;
                path.push({ x: sourcePoint.x, y: midY });
                path.push({ x: targetPoint.x, y: midY });
            }

            path.push({ x: targetPoint.x, y: targetPoint.y });

            return path;
        }

        /**
         * Render a relationship
         */
        renderRelation(relation, elementsMap, config) {
            // Try exact match first
            let source = elementsMap.get(relation.source);
            let target = elementsMap.get(relation.target);
            
            // If not found, try exact trimmed match
            if (!source) {
                const sourceTrimmed = relation.source.trim();
                for (const [id, el] of elementsMap.entries()) {
                    if (id.trim() === sourceTrimmed) {
                        source = el;
                        break;
                    }
                }
            }
            
            if (!target) {
                const targetTrimmed = relation.target.trim();
                for (const [id, el] of elementsMap.entries()) {
                    if (id.trim() === targetTrimmed) {
                        target = el;
                        break;
                    }
                }
            }
            
            // Try matching by first word (for cases where element is defined with long name but referenced with short)
            // e.g., [<application:component> Application Component asdasd] defined, but [Application Component] referenced
            if (!source) {
                const sourceFirstWord = relation.source.trim().split(/\s+/)[0];
                for (const [id, el] of elementsMap.entries()) {
                    const idFirstWord = id.trim().split(/\s+/)[0];
                    if (idFirstWord === sourceFirstWord && id.trim().startsWith(relation.source.trim())) {
                        source = el;
                        break;
                    }
                }
            }
            
            if (!target) {
                const targetFirstWord = relation.target.trim().split(/\s+/)[0];
                for (const [id, el] of elementsMap.entries()) {
                    const idFirstWord = id.trim().split(/\s+/)[0];
                    if (idFirstWord === targetFirstWord && id.trim().startsWith(relation.target.trim())) {
                        target = el;
                        break;
                    }
                }
            }
            
            // Only try case-insensitive as last resort (to avoid false matches)
            if (!source) {
                const sourceLower = relation.source.trim().toLowerCase();
                for (const [id, el] of elementsMap.entries()) {
                    if (id.trim().toLowerCase() === sourceLower) {
                        source = el;
                        break;
                    }
                }
            }
            
            if (!target) {
                const targetLower = relation.target.trim().toLowerCase();
                for (const [id, el] of elementsMap.entries()) {
                    if (id.trim().toLowerCase() === targetLower) {
                        target = el;
                        break;
                    }
                }
            }
            
            if (!source || !target) {
                console.warn(`Relation not rendered: source="${relation.source}" or target="${relation.target}" not found`);
                return null;
            }
            
            const relStyle = RELATIONSHIPS[relation.type] || RELATIONSHIPS['association'];
            const g = this.createSvgElement('g', {
                class: 'archimate-relation',
                'data-type': relation.type
            });

            // Calculate smart connection points
            const { sourcePoint, targetPoint } = this.calculateConnectionPoints(source, target);

            // Create orthogonal path
            const pathPoints = this.createOrthogonalPath(sourcePoint, targetPoint);

            // Convert path points to SVG path data
            const pathData = pathPoints.map((point, i) =>
                `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
            ).join(' ');

            // Draw path
            const pathElement = this.createSvgElement('path', {
                d: pathData,
                stroke: '#333',
                'stroke-width': config.lineWidth || 2,
                fill: 'none',
                'stroke-dasharray': relStyle.line === 'dashed' ? '5,5' : 'none'
            });
            g.appendChild(pathElement);

            // Calculate arrow angle based on last path segment (for correct arrow direction)
            const lastSegment = pathPoints[pathPoints.length - 1];
            const secondLastSegment = pathPoints[pathPoints.length - 2];
            const arrowSize = config.arrowSize || 8;
            const angle = Math.atan2(
                lastSegment.y - secondLastSegment.y,
                lastSegment.x - secondLastSegment.x
            );

            // Final coordinates for arrow
            const x1 = sourcePoint.x;
            const y1 = sourcePoint.y;
            const x2 = targetPoint.x;
            const y2 = targetPoint.y;

            if (relStyle.arrow === 'open') {
                // Open arrow (for serving, access, triggering, flow)
                const arrowPoints = [
                    [x2 - arrowSize * Math.cos(angle - Math.PI / 6), y2 - arrowSize * Math.sin(angle - Math.PI / 6)],
                    [x2, y2],
                    [x2 - arrowSize * Math.cos(angle + Math.PI / 6), y2 - arrowSize * Math.sin(angle + Math.PI / 6)]
                ];
                const arrow = this.createSvgElement('polyline', {
                    points: arrowPoints.map(p => p.join(',')).join(' '),
                    fill: 'none',
                    stroke: '#333',
                    'stroke-width': config.lineWidth || 2
                });
                g.appendChild(arrow);
            } else if (relStyle.arrow === 'empty-triangle') {
                // Empty triangle (for specialization, realization)
                const arrowPoints = [
                    [x2 - arrowSize * Math.cos(angle - Math.PI / 6), y2 - arrowSize * Math.sin(angle - Math.PI / 6)],
                    [x2, y2],
                    [x2 - arrowSize * Math.cos(angle + Math.PI / 6), y2 - arrowSize * Math.sin(angle + Math.PI / 6)]
                ];
                const arrow = this.createSvgElement('polygon', {
                    points: arrowPoints.map(p => p.join(',')).join(' '),
                    fill: 'white',
                    stroke: '#333',
                    'stroke-width': config.lineWidth || 2
                });
                g.appendChild(arrow);
            } else if (relStyle.arrow === 'filled-diamond') {
                // Filled diamond (for composition)
                const diamondSize = arrowSize * 0.8;
                const arrowPoints = [
                    [x2 - diamondSize * Math.cos(angle), y2 - diamondSize * Math.sin(angle)],
                    [x2 - diamondSize * Math.cos(angle - Math.PI / 2), y2 - diamondSize * Math.sin(angle - Math.PI / 2)],
                    [x2, y2],
                    [x2 - diamondSize * Math.cos(angle + Math.PI / 2), y2 - diamondSize * Math.sin(angle + Math.PI / 2)]
                ];
                const arrow = this.createSvgElement('polygon', {
                    points: arrowPoints.map(p => p.join(',')).join(' '),
                    fill: '#333',
                    stroke: '#333',
                    'stroke-width': config.lineWidth || 2
                });
                g.appendChild(arrow);
            } else if (relStyle.arrow === 'empty-diamond') {
                // Empty diamond (for aggregation)
                const diamondSize = arrowSize * 0.8;
                const arrowPoints = [
                    [x2 - diamondSize * Math.cos(angle), y2 - diamondSize * Math.sin(angle)],
                    [x2 - diamondSize * Math.cos(angle - Math.PI / 2), y2 - diamondSize * Math.sin(angle - Math.PI / 2)],
                    [x2, y2],
                    [x2 - diamondSize * Math.cos(angle + Math.PI / 2), y2 - diamondSize * Math.sin(angle + Math.PI / 2)]
                ];
                const arrow = this.createSvgElement('polygon', {
                    points: arrowPoints.map(p => p.join(',')).join(' '),
                    fill: 'white',
                    stroke: '#333',
                    'stroke-width': config.lineWidth || 2
                });
                g.appendChild(arrow);
            } else if (relStyle.arrow === 'filled-circle') {
                // Filled circle (for assignment)
                const circle = this.createSvgElement('circle', {
                    cx: x2 - arrowSize * 0.7 * Math.cos(angle),
                    cy: y2 - arrowSize * 0.7 * Math.sin(angle),
                    r: arrowSize * 0.4,
                    fill: '#333',
                    stroke: '#333',
                    'stroke-width': config.lineWidth || 2
                });
                g.appendChild(circle);
            }
            
            // Render labels if present
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;
            
            if (relation.startLabel) {
                const labelText = this.createSvgElement('text', {
                    x: x1 + (midX - x1) * 0.3,
                    y: y1 + (midY - y1) * 0.3 - 5,
                    'font-size': config.fontSize || 12,
                    'font-family': 'Arial, sans-serif',
                    fill: '#333',
                    'text-anchor': 'middle'
                });
                labelText.textContent = relation.startLabel;
                g.appendChild(labelText);
            }
            
            if (relation.endLabel) {
                const labelText = this.createSvgElement('text', {
                    x: x2 - (x2 - midX) * 0.3,
                    y: y2 - (y2 - midY) * 0.3 - 5,
                    'font-size': config.fontSize || 12,
                    'font-family': 'Arial, sans-serif',
                    fill: '#333',
                    'text-anchor': 'middle'
                });
                labelText.textContent = relation.endLabel;
                g.appendChild(labelText);
            }
            
            return g;
        }

        /**
         * Main render method
         */
        render(code, container) {
            // Clear container
            if (typeof container === 'string') {
                container = document.querySelector(container);
            }
            if (!container) {
                throw new Error('Invalid container element');
            }
            container.innerHTML = '';
            
            // Parse code
            const { elements, relations, config } = this.parse(code);
            
            if (elements.length === 0) {
                throw new Error('No elements found in code');
            }
            
            // Calculate layout
            const layoutElements = this.calculateLayout(elements, relations, config);
            
            // Create elements map
            const elementsMap = new Map();
            layoutElements.forEach(el => elementsMap.set(el.id, el));
            
            // Calculate SVG size
            const maxX = Math.max(...layoutElements.map(e => e.x + e.width));
            const maxY = Math.max(...layoutElements.map(e => e.y + e.height));
            const width = maxX + config.spacing;
            const height = maxY + config.spacing;
            
            // Create SVG
            const svg = this.createSvgElement('svg', {
                class: 'archicode-diagram',
                width: width,
                height: height,
                xmlns: 'http://www.w3.org/2000/svg',
                style: 'background: transparent; border-radius: 8px;'
            });
            
            // Render relations first (so they appear under elements)
            relations.forEach(rel => {
                const relEl = this.renderRelation(rel, elementsMap, config);
                if (relEl) svg.appendChild(relEl);
            });
            
            // Render elements
            layoutElements.forEach(element => {
                const elementSvg = this.renderElement(element, config);
                svg.appendChild(elementSvg);
            });
            
            container.appendChild(svg);
            return svg;
        }

        /**
         * Export diagram as SVG string
         * Creates an in-memory SVG without rendering to the DOM
         */
        exportSVG(code) {
            // Parse code
            const { elements, relations, config } = this.parse(code);

            if (elements.length === 0) {
                throw new Error('No elements found in code');
            }

            // Calculate layout
            const layoutElements = this.calculateLayout(elements, relations, config);

            // Create elements map
            const elementsMap = new Map();
            layoutElements.forEach(el => elementsMap.set(el.id, el));

            // Calculate SVG size
            const maxX = Math.max(...layoutElements.map(e => e.x + e.width));
            const maxY = Math.max(...layoutElements.map(e => e.y + e.height));
            const width = maxX + config.spacing;
            const height = maxY + config.spacing;

            // Create SVG
            const svg = this.createSvgElement('svg', {
                class: 'archicode-diagram',
                width: width,
                height: height,
                xmlns: 'http://www.w3.org/2000/svg',
                style: 'background: transparent; border-radius: 8px;'
            });

            // Render relations first (so they appear under elements)
            relations.forEach(rel => {
                const relEl = this.renderRelation(rel, elementsMap, config);
                if (relEl) svg.appendChild(relEl);
            });

            // Render elements
            layoutElements.forEach(element => {
                const elementSvg = this.renderElement(element, config);
                svg.appendChild(elementSvg);
            });

            // Convert to string
            const serializer = new XMLSerializer();
            return serializer.serializeToString(svg);
        }

        /**
         * Export diagram to draw.io (diagrams.net) XML format
         * Returns a string that can be imported into draw.io
         * Alias for toDrawIo()
         */
        exportDrawIO(code) {
            return this.toDrawIo(code);
        }

        /**
         * Export diagram to draw.io (diagrams.net) XML format
         * Returns a string that can be imported into draw.io
         */
        toDrawIo(code) {
            const { elements, relations, config } = this.parse(code);
            if (elements.length === 0) {
                throw new Error('No elements found in code');
            }

            const layoutElements = this.calculateLayout(elements, relations, config);
            const cellIdMap = new Map();
            let nextId = 1;

            const cells = [];

            // Helper to escape XML
            const esc = (s) => String(s || '')
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&apos;');

            // Root & layer cells
            cells.push('<mxCell id="0"/>');
            cells.push('<mxCell id="1" parent="0"/>');

            // Map element.id -> cell id and create vertex cells
            layoutElements.forEach(el => {
                const id = String(nextId++);
                cellIdMap.set(el.id, id);

                const label = `${el.name}\\n«${el.layer}:${el.type}»`;
                const styleParts = [
                    'rounded=0',
                    'whiteSpace=wrap',
                    'html=1'
                ];

                // Approximate shape type
                const shape = ELEMENT_SHAPES[el.type] || 'square';
                if (shape === 'rounded') {
                    styleParts.push('shape=rectangle', 'arcSize=20');
                } else if (shape === 'diagonal') {
                    // draw.io har ingen exakt diagonal-rect, använd vanlig rektangel
                    styleParts.push('shape=rectangle');
                } else {
                    styleParts.push('shape=rectangle');
                }

                // Layer-based colors
                const colors = ARCHIMATE_COLORS[el.layer] || { fill: '#E0E0E0', stroke: '#616161' };
                styleParts.push(`fillColor=${colors.fill}`, `strokeColor=${colors.stroke}`, 'fontColor=#000000');

                const style = styleParts.join(';');

                cells.push(
                    `<mxCell id="${id}" value="${esc(label)}" style="${esc(style)}" vertex="1" parent="1">` +
                    `<mxGeometry x="${el.x}" y="${el.y}" width="${el.width}" height="${el.height}" as="geometry"/>` +
                    `</mxCell>`
                );
            });

            // Relationship (edge) cells
            relations.forEach(rel => {
                const sourceId = cellIdMap.get(rel.source);
                const targetId = cellIdMap.get(rel.target);
                if (!sourceId || !targetId) return;

                const id = String(nextId++);
                const relStyle = RELATIONSHIPS[rel.type] || RELATIONSHIPS['association'];

                const styleParts = ['edgeStyle=orthogonalEdgeStyle', 'rounded=0', 'html=1', 'endArrow=block'];
                if (relStyle.line === 'dashed') {
                    styleParts.push('dashed=1');
                }
                if (relStyle.arrow === 'none') {
                    styleParts.push('endArrow=none');
                } else if (relStyle.arrow === 'empty-triangle') {
                    styleParts.push('endArrow=block', 'endFill=0');
                } else if (relStyle.arrow === 'open') {
                    styleParts.push('endArrow=open');
                }

                const style = styleParts.join(';');

                cells.push(
                    `<mxCell id="${id}" edge="1" source="${sourceId}" target="${targetId}" style="${esc(style)}" parent="1">` +
                    `<mxGeometry relative="1" as="geometry"/>` +
                    `</mxCell>`
                );
            });

            // Simple mxGraphModel XML that draw.io/diagrams.net can import as "plain XML"
            // (No base64, no compression - simplest and most robust)
            const innerXml =
`<mxGraphModel dx="1000" dy="1000" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
  <root>
    ${cells.join('\n    ')}
  </root>
</mxGraphModel>`;

            return `<?xml version="1.0" encoding="UTF-8"?>
${innerXml}`;
        }
    }

    // Export to global scope
    global.ArchiCode = new ArchiCode();

    // Support for module systems
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = global.ArchiCode;
    }

})(typeof window !== 'undefined' ? window : this);
