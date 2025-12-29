# ArchiCode.js

[![npm version](https://badge.fury.io/js/@yllemo/archicode.svg)](https://badge.fury.io/js/@yllemo/archicode)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/yllemo/ArchiCode)](https://github.com/yllemo/ArchiCode/issues)
[![GitHub stars](https://img.shields.io/github/stars/yllemo/ArchiCode)](https://github.com/yllemo/ArchiCode/stargazers)

**[English README](README_EN.md)** | **[Live Demo](https://yllemo.github.io/ArchiCode/)** | **[Examples](examples/)**

En webbaserad applikation för att skapa ArchiMate 3.2-diagram från textbaserad syntax, kompatibel med [Architext.dev](https://architext.dev). Applikationen använder **ArchiCode.js** - ett autonomt rendering-bibliotek som följer ArchiMate 3.2-standarden.

## 📋 Översikt

ArchiCode.js är ett autonomt JavaScript-bibliotek för rendering av ArchiMate-diagram (liknande mermaid.js). Projektet inkluderar också en interaktiv demo för att testa biblioteket.

### ✨ Funktioner

- 🎨 **ArchiMate 3.2-standard** - Officiella färger, former och symboler
- 🔧 **Autonomt bibliotek** - ArchiCode.js kan användas fristående i egna projekt
- 📝 **Architext.dev-kompatibel** - Använder samma syntax
- 🌙 **Dark mode** - Modern och professionell design
- 💾 **Auto-sparande** - Kod sparas automatiskt i webbläsaren
- ⬇️ **SVG-export** - Ladda ner diagram som vektorgrafik
- ⌨️ **Tangentbordsgenvägar** - Ctrl+Enter för att rendera
- 🔍 **Zoom & Pan** - Zooma och panorera diagrammet fritt
- 📺 **Fullskärmsläge** - Både editor och preview kan maximeras
- 🚫 **Inga externa beroenden** - 100% egen kod

## 🚀 Snabbstart

### NPM Installation

```bash
npm install @yllemo/archicode
```

```javascript
import ArchiCode from '@yllemo/archicode';
// Glöm inte importera CSS för ikoner:
// import '@yllemo/archicode/archicode.css';

const code = `
    [<business:actor> Kund]
    [<business:process> Orderprocess]
    [<application:component> Webbportal]
    
    [Kund] --> [Orderprocess]
    [Orderprocess] --> [Webbportal]
`;

ArchiCode.render(code, '#diagram');
```

### CDN Usage

**Alternativ 1: jsDelivr (Fungerar direkt från GitHub)**
```html
<!-- Använd specifik commit för stabilitet (uppdatera hash för senaste version) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yllemo/ArchiCode@56b9715/archicode.css">
<script src="https://cdn.jsdelivr.net/gh/yllemo/ArchiCode@56b9715/archicode.js"></script>
<script>
    ArchiCode.render(myCode, '#diagram');
</script>
```

**Alternativ 2: unpkg (Efter NPM-publicering)**
```html
<link rel="stylesheet" href="https://unpkg.com/@yllemo/archicode@1.0.0/archicode.css">
<script src="https://unpkg.com/@yllemo/archicode@1.0.0/archicode.js"></script>
<script>
    ArchiCode.render(myCode, '#diagram');
</script>
```

### Lokal installation

1. **Klona eller ladda ner filerna**
   ```bash
   git clone https://github.com/yllemo/ArchiCode.git
   cd ArchiCode
   ```

2. **Installera dependencies (valfritt för utveckling)**
   ```bash
   npm install
   ```

3. **Öppna demon i webbläsaren**

   Öppna filen `demo/index.html` direkt i webbläsaren, eller starta en lokal webbserver:

   ```bash
   # Med Python
   python -m http.server 8000

   # Med Node.js (om http-server är installerat)
   npm run dev

   # Med PHP
   php -S localhost:8000
   ```

   Gå sedan till: `http://localhost:8000/demo/`

## 📚 ArchiCode.js - Autonomt Bibliotek

### Grundläggande användning

ArchiCode.js kan användas i vilken webbapplikation som helst, precis som mermaid.js:

```html
<!DOCTYPE html>
<html>
<head>
    <title>ArchiCode Exempel</title>
    <script src="archicode.js"></script>
</head>
<body>
    <div id="diagram"></div>
    
    <script>
        const code = `
            [<business:actor> Kund]
            [<business:process> Orderprocess]
            [<application:component> Webbportal]
            
            [Kund] --> [Orderprocess]
            [Orderprocess] --> [Webbportal]
        `;
        
        ArchiCode.render(code, '#diagram');
    </script>
</body>
</html>
```

### API

#### `ArchiCode.render(code, container)`

Renderar ett ArchiMate-diagram från textbaserad kod till ett DOM-element.

**Parameters:**
- `code` (string) - ArchiMate-kod i Architext-syntax
- `container` (string | HTMLElement) - CSS-selector eller DOM-element där diagrammet ska renderas

**Returns:**
- SVGElement - Det skapade SVG-elementet

**Exempel:**
```javascript
// Med CSS-selector
ArchiCode.render(myCode, '#myDiagram');

// Med DOM-element
const container = document.getElementById('myDiagram');
ArchiCode.render(myCode, container);
```

#### `ArchiCode.exportSVG(code)`

Exporterar diagram som en SVG-sträng (utan rendering till DOM).

**Parameters:**
- `code` (string) - ArchiMate-kod i Architext-syntax

**Returns:**
- string - SVG-markup som sträng

**Exempel:**
```javascript
const svgString = ArchiCode.exportSVG(code);
// Använd SVG-strängen för nedladdning, lagring eller inbäddning
const blob = new Blob([svgString], { type: 'image/svg+xml' });
const url = URL.createObjectURL(blob);
```

#### `ArchiCode.exportDrawIO(code)`

Exporterar diagram som draw.io/diagrams.net XML-format för import.

**Parameters:**
- `code` (string) - ArchiMate-kod i Architext-syntax

**Returns:**
- string - XML-sträng kompatibel med draw.io

**Exempel:**
```javascript
const drawIoXml = ArchiCode.exportDrawIO(code);
// Ladda ner som .drawio-fil
const blob = new Blob([drawIoXml], { type: 'application/xml' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'diagram.drawio';
a.click();
```

#### `ArchiCode.parse(code)`

Parsar ArchiMate-kod till en intern struktur (avancerad användning).

**Parameters:**
- `code` (string) - ArchiMate-kod i Architext-syntax

**Returns:**
- object - `{ elements, relations, config }`

**Exempel:**
```javascript
const { elements, relations, config } = ArchiCode.parse(code);
console.log('Hittade', elements.length, 'element och', relations.length, 'relationer');
```

## 📖 Syntax

### Element

ArchiMate-element definieras med följande syntax:

```
[<layer:type> Element Name]
```

**Exempel:**
```
[<business:actor> Customer]
[<business:process> Order Process]
[<application:component> Web Portal]
[<technology:node> Application Server]
```

**Element utan layer:type:**
Element kan också definieras utan explicit layer och type (använder default: business/object):
```
[Customer]                                       # Default: business:object
[Order Process]                                  # Default: business:object
```

**Långa elementnamn:**
Element kan ha långa namn - texten skalas automatiskt för att passa i boxen:
```
[<application:component> Application Component with Very Long Name That Scales Automatically]
```

**Ikoner:**
Varje element får automatiskt en ArchiMate-ikon i övre högra hörnet enligt sin typ.

### ArchiMate 3.2 Lager och Färger

ArchiCode.js följer den officiella ArchiMate 3.2-standarden:

#### Motivation Layer (Rosa/Magenta)
- `<motivation:stakeholder>` - Intressent
- `<motivation:driver>` - Drivkraft
- `<motivation:assessment>` - Bedömning
- `<motivation:goal>` - Mål
- `<motivation:outcome>` - Utfall
- `<motivation:principle>` - Princip
- `<motivation:requirement>` - Krav
- `<motivation:constraint>` - Begränsning
- `<motivation:value>` - Värde
- `<motivation:meaning>` - Betydelse

#### Strategy Layer (Orange)
- `<strategy:capability>` - Kapabilitet
- `<strategy:resource>` - Resurs
- `<strategy:course-of-action>` - Handlingsplan

#### Business Layer (Gul)
- `<business:actor>` - Aktör
- `<business:role>` - Roll
- `<business:collaboration>` - Samarbete
- `<business:interface>` - Gränssnitt
- `<business:process>` - Process
- `<business:function>` - Funktion
- `<business:interaction>` - Interaktion
- `<business:event>` - Händelse
- `<business:service>` - Tjänst
- `<business:object>` - Affärsobjekt
- `<business:contract>` - Kontrakt
- `<business:product>` - Produkt

#### Application Layer (Ljusblå)
- `<application:component>` - Applikationskomponent
- `<application:collaboration>` - Applikationssamarbete
- `<application:interface>` - Applikationsgränssnitt
- `<application:function>` - Applikationsfunktion
- `<application:interaction>` - Applikationsinteraktion
- `<application:event>` - Applikationshändelse
- `<application:service>` - Applikationstjänst
- `<application:data>` - Dataobjekt

#### Technology Layer (Grön)
- `<technology:node>` - Nod
- `<technology:device>` - Enhet
- `<technology:system-software>` - Systemmjukvara
- `<technology:path>` - Kommunikationsväg
- `<technology:network>` - Nätverk
- `<technology:service>` - Tekniktjänst
- `<technology:artifact>` - Artefakt

#### Physical Layer (Lila)
- `<physical:equipment>` - Utrustning
- `<physical:facility>` - Anläggning
- `<physical:material>` - Material

#### Implementation & Migration Layer (Rosa)
- `<implementation:workpackage>` - Arbetspaket
- `<implementation:deliverable>` - Leverans
- `<implementation:plateau>` - Platå
- `<implementation:gap>` - Gap

### Element-former enligt ArchiMate 3.2

ArchiCode.js använder de officiella formerna:

- **Fyrkantiga hörn** - Strukturelement (actor, role, component, node, etc.)
- **Rundade hörn** - Beteendeelement (process, function, service, event, etc.)
- **Diagonala hörn** - Motivationselement (stakeholder, goal, requirement, etc.)

### Relationer

Stödda relationstyper enligt [Architext.dev syntax](https://architext.dev/guide/relationships.html):

| Syntax | Relation | Beskrivning | Linjestil | Pil-typ |
|--------|----------|-------------|-----------|---------|
| `->` / `<-` | Serving | Tjänar | Heldragen | Öppen pil |
| `-->` / `<--` | Flow | Flöde | Streckad | Öppen pil |
| `--:>` / `<:--` | Realization | Realisering | Streckad | Tom triangel |
| `-|>` / `<\|-` | Triggering | Triggande | Heldragen | Öppen pil |
| `.--` / `--.` | Assignment | Tilldelning | Heldragen | Fylld cirkel |
| `+-` / `-+` | Composition | Komposition | Heldragen | Fylld diamant |
| `o-` / `-o` | Aggregation | Aggregering | Heldragen | Tom diamant |
| `-:>` / `<:-` | Specialization | Specialisering | Heldragen | Tom triangel |
| `---` | Association | Association | Heldragen | Ingen pil |
| `<->` | Access | Åtkomst | Streckad | Öppen pil (båda håll) |

**Exempel:**
```
[Customer] -> [Order Process]                     # Serving
[Process A] --> [Process B]                       # Flow
[Component] --:> [Service]                        # Realization
[Event] -|> [Process]                             # Triggering
[Actor] .-- [Business Process]                    # Assignment
[System] +- [Component]                           # Composition
[Team] o- [Member]                                # Aggregation
[Manager] -:> [Employee]                          # Specialization
[Component] <-> [Database]                        # Access
[Object A] --- [Object B]                         # Association
```

**Labels på relationer:**
Du kan lägga till labels på relationer:
```
[Business Actor] .-|> assignment [Customer]       # Label mellan syntax och target
[Source] label --> [Target]                       # Label före syntax
[Source] --> label [Target]                       # Label efter syntax
```

**Omvända riktningar:**
Alla relationer kan skrivas omvända:
```
[Target] <- [Source]                              # Omvänd serving
[Target] <:- [Source]                             # Omvänd specialization
[Target] <:-- [Source]                            # Omvänd realization
```

**Flera relationer på samma rad:**
```
[A] --- [B] --- [C]                                # Kedja av relationer
```

**Inline element-definitioner:**
Element kan definieras direkt i relationer:
```
[Application Component] --> [<application:data> Data Object]
[<business:actor> Customer] -> [<business:service> Service]
```

### Konfigurationsdirektiv

Anpassa diagrammets utseende:

```
#spacing: 80          # Avstånd mellan element
#padding: 16          # Padding inom element
#fontSize: 14         # Textstorlek
#lineWidth: 2         # Tjocklek på linjer
#arrowSize: 8         # Storlek på pilar
#direction: down      # Riktning (down/right)
#showBadges: true     # Visa lager-badges (M, S, B, A, T, P, I)
```

### Komplett exempel

```
#spacing: 80
#padding: 16
#fontSize: 14

// Strategy Layer
[<strategy:capability> Digital Transformation]
[<strategy:resource> IT Team]

// Business Layer
[<business:actor> Customer]
[<business:role> Sales Manager]
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
[Digital Transformation] --> [IT Team]
[Customer] --> [Sales Manager]
[Sales Manager] --> [Order Process]
[Order Process] --> [Online Shopping]
[Online Shopping] -:> [Web Portal]
[Web Portal] --> [Payment Service]
[Payment Service] <-> [Customer Database]
[Web Portal] --> [Application Server]
[Application Server] --> [Web Server]
```

## 🎨 ArchiMate 3.2 Standardfärger

ArchiCode.js använder de officiella färgerna från ArchiMate 3.2-specifikationen:

| Lager | Fyllnadsfärg | Kantfärg | Beskrivning |
|-------|-------------|----------|-------------|
| **Motivation** | `#FFCCDD` | `#CC0066` | Rosa/Magenta - Intressenter, mål, krav |
| **Strategy** | `#FFE0B2` | `#FF6F00` | Orange - Kapabiliteter, resurser, handlingsplaner |
| **Business** | `#FFF9C4` | `#F9A825` | Gul - Affärsaktörer, processer, tjänster |
| **Application** | `#B3E5FC` | `#0277BD` | Ljusblå - Mjukvarukomponenter, tjänster, data |
| **Technology** | `#C8E6C9` | `#388E3C` | Grön - Hårdvara, nätverk, systemmjukvara |
| **Physical** | `#E1BEE7` | `#7B1FA2` | Lila - Fysisk utrustning och anläggningar |
| **Implementation** | `#F8BBD0` | `#C2185B` | Rosa - Arbetspaket, leveranser, migration |

Varje element har också en lager-badge (M, S, B, A, T, P, I) i det övre vänstra hörnet.

## 💾 Export

### SVG Export
Exportera diagrammet som SVG-fil för användning i presentationsverktyg, dokumentation eller vidare redigering:

1. Klicka på "Exportera SVG"-knappen
2. Filen laddas ner automatiskt
3. Öppna i valfritt program som stöder SVG (Inkscape, Adobe Illustrator, etc.)

**Användningsfall:**
- Dokumentation i Confluence, Notion, eller Wiki
- Presentationer i PowerPoint eller Keynote
- Vidare redigering i vektorgrafikprogram
- Inbäddning i HTML-dokument

### Draw.io Export
Exportera diagrammet till draw.io XML-format för vidare redigering i draw.io:

1. Klicka på "Exportera draw.io"-knappen
2. Filen laddas ner som `.drawio` eller `.xml`
3. Öppna i draw.io (webb eller desktop):
   - **Webb**: Gå till [app.diagrams.net](https://app.diagrams.net)
   - Klicka på "File > Open from > Device"
   - Välj den exporterade filen
   - **Alternativt**: Dra och släpp filen i draw.io

**Användningsfall:**
- Vidare redigering i draw.io
- Integration med Confluence draw.io-makron
- Delning med team som använder draw.io
- Konvertering till andra format (PNG, PDF, etc.)

**Tips:**
- Om filen inte öppnas direkt, använd "File > Import > XML" i draw.io
- För bästa kompatibilitet, använd draw.io webbversion
- Ikoner kan behöva återställas manuellt i draw.io

## 🔍 Zoom och Pan

Förhandsgranskningen har kraftfulla zoom- och pan-funktioner för att utforska stora diagram:

### Zooma
- **Mushjul**: Scrolla för att zooma in/ut
- **Knappar**: Använd zoom-knapparna i preview-headern
- **Tangentbord**: `+`/`-` för zoom, `0` för att återställa
- **Område**: 10% till 500% zoom

### Panorera
- **Klicka och dra**: Håll ned musknappen och dra för att panorera
- **Cursor ändras**: Visar när du kan panorera (hand-cursor)

### Fullskärmsläge
- **F11**: Öppna preview i fullskärm
- **Fullskärmsknapp**: Klicka på ikonen i panel-headern
- **Esc**: Avsluta fullskärmsläge
- **Både editor och preview**: Kan öppnas i fullskärm separat

## 🤖 AI-Integration

ArchiCode.js fungerar utmärkt med AI-verktyg för att automatisera skapandet av diagram!

### Snabbstart med AI

**Använd ChatGPT, Claude eller annan AI:**
```
Skapa ett ArchiCode.js-diagram för en e-handelsplattform med:
- Business layer (kund, process, service)
- Application layer (webbapp, databas)
- Technology layer (server, nätverk)

Använd ArchiMate 3.2-syntax med format [<layer:type> Name].
```

### Kompletta guider

- **[AI.md](AI.md)** - Omfattande guide för att använda AI-verktyg med ArchiCode
  - Rekommenderade AI-verktyg
  - Bästa praxis
  - Steg-för-steg arbetsflöden
  - Felsökning
  - 100+ exempel

- **[PROMPT.md](PROMPT.md)** - 20+ färdiga promptmallar
  - Business Architecture
  - Application Architecture  
  - Technology Architecture
  - Strategy & Motivation
  - Transformation & Migration
  - Domän-specifika mallar
  - Copy-paste klara prompter

### Populära AI-verktyg

| Verktyg | Support | Användning |
|---------|---------|------------|
| ChatGPT (GPT-4) | ⭐⭐⭐⭐⭐ | Komplex arkitektur |
| Claude | ⭐⭐⭐⭐⭐ | Stora diagram |
| GitHub Copilot | ⭐⭐⭐⭐ | Kod-completion |
| Gemini | ⭐⭐⭐ | Grundläggande |

### Exempel AI-prompt

**Input till AI:**
```
Skapa ett ArchiCode.js-diagram för ett CRM-system:

Business Layer:
- Actor: "Säljare"
- Process: "Försäljningsprocess"
- Service: "CRM-tjänst"

Application Layer:
- Component: "CRM-applikation"
- Data: "Kunddatabas"

Technology Layer:
- Node: "Application Server"

Använd ArchiMate 3.2-syntax, lägg till relationer.
```

**Output från AI → Klistra in i demo-editorn och testa!**

## 🗂️ Filstruktur

```
ArchiCode/
├── archicode.js        # ArchiCode-biblioteket (autonomt)
├── archicode.css       # Stilar och ikoner för ArchiMate-element
├── archicode.d.ts      # TypeScript-definitioner
├── demo/               # Interaktiv demo/playground
│   └── index.html      # Demo-applikation
├── examples/           # Exempeldiagram
├── README.md           # Huvuddokumentation (Svenska)
├── README_EN.md        # Huvuddokumentation (English)
├── AI.md               # AI-integration guide
├── PROMPT.md           # AI promptmallar
├── CHANGELOG.md        # Versionshistorik
├── CONTRIBUTING.md     # Bidragsguide
└── LICENSE             # MIT-licens
```

## ⌨️ Tangentbordsgenvägar

### Editor
- **Ctrl+Enter** (Cmd+Enter på Mac) - Rendera diagram
- **Tab** - Indentera (2 mellanslag)

### Förhandsgranskning
- **F11** - Fullskärmsläge (preview)
- **Esc** - Avsluta fullskärm
- **+** eller **=** - Zooma in
- **-** - Zooma ut
- **0** - Återställ zoom till 100%
- **Mushjul** - Zooma in/ut
- **Klicka och dra** - Panorera diagrammet

### Knappar
- **Fullskärmsikonen** - Växla fullskärm för editor eller preview
- **🔍+** - Zooma in
- **🔍-** - Zooma ut
- **🔍0** - Återställ zoom

## 🔧 Avancerad användning av ArchiCode.js

### Använda i React

```jsx
import React, { useEffect, useRef } from 'react';

function ArchiMateViewer({ code }) {
    const containerRef = useRef(null);
    
    useEffect(() => {
        if (containerRef.current && window.ArchiCode) {
            window.ArchiCode.render(code, containerRef.current);
        }
    }, [code]);
    
    return <div ref={containerRef} />;
}
```

### Använda med vanilla JavaScript

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const code = document.getElementById('archimate-source').textContent;
    ArchiCode.render(code, '#diagram-container');
});
```

### Fånga fel

```javascript
try {
    ArchiCode.render(code, '#diagram');
} catch (error) {
    console.error('ArchiCode rendering error:', error.message);
    // Hantera fel
}
```

## 🐛 Felsökning

### Diagrammet renderas inte
- Kontrollera att syntaxen är korrekt (`<layer:type>` format)
- Se till att ArchiCode.js är korrekt inkluderad i din HTML
- Öppna webbläsarens konsol (F12) för felmeddelanden

### Element har fel färg
- Kontrollera att layer-namnet är korrekt (motivation, strategy, business, etc.)
- Kontrollera stavning av element-typer

### Relationer visas inte
- Kontrollera att både source och target element finns definierade
- Se till att relation-syntaxen är korrekt (se tabellen ovan)
- Element kan definieras inline i relationer: `[A] --> [<application:component> B]`
- Flera relationer mellan samma element är tillåtna

### Draw.io export fungerar inte
- Exporterad fil kan öppnas i draw.io via "File > Import > XML"
- För bästa kompatibilitet, använd draw.io webbversion
- Se till att element-namnen i relationer matchar exakt
- Kontrollera att relations-syntaxen är korrekt

## 📚 Resurser

- [ArchiMate 3.2 Specifikation](https://pubs.opengroup.org/architecture/archimate32-doc/) - Officiell standard
- [Architext.dev](https://architext.dev) - Original inspiration för syntaxen
- [ArchiMate Guide](https://www.visual-paradigm.com/guide/archimate/) - Nybörjarguide

## 📄 Licens

ArchiCode.js är licensierad under MIT License.

Copyright (c) 2026 Henrik Yllemo

ArchiMate® är ett registrerat varumärke som tillhör The Open Group.

## 🙏 Erkännanden

- **The Open Group** för ArchiMate 3.2-standarden
- **[Architext.dev](https://architext.dev)** av Arie Timmerman för syntaxinspiration
- Inspirerad av **mermaid.js** för biblioteksdesign

## 🤝 Bidrag

Förbättringsförslag välkomnas! Idéer för framtida utveckling:

- [ ] Fler layoutalgoritmer (hierarkisk, cirkulär, etc.)
- [ ] Stöd för vyer och viewpoints
- [ ] Export till PNG/PDF
- [ ] Zoom och pan-funktionalitet
- [ ] Nesting och gruppering av element
- [ ] Import från ArchiMate Exchange Format
- [ ] Animerade transitioner
- [ ] Interaktiva diagram (klickbara element)

## 📝 Versionshistorik

### v1.0.0 (Aktuell)
- ✅ Första versionen av ArchiCode.js
- ✅ Stöd för alla ArchiMate 3.2 lager
- ✅ Officiella färger och former
- ✅ Architext.dev-kompatibel syntax
- ✅ Autonomt bibliotek utan externa beroenden
- ✅ Automatisk layout-algoritm
- ✅ Komplett stöd för alla relationstyper (specialization, composition, aggregation, assignment, realization, triggering, serving, flow, access, association)
- ✅ Stöd för omvända riktningar och labels på relationer
- ✅ Inline element-definitioner i relationer
- ✅ Automatiska ArchiMate-ikoner för varje element
- ✅ SVG-export
- ✅ Draw.io export
- ✅ Zoom och pan-funktionalitet
- ✅ Fullskärmsläge
- ✅ Auto-sparande i webbläsaren
- ✅ SVG-rendering

---

**Skapad för enterprise architects och systemdesigners** 🎨📊

**Powered by ArchiCode.js** - Ett autonomt ArchiMate 3.2 rendering-bibliotek

**Author:** Henrik Yllemo
**Version:** 1.0.0
**Year:** 2025
**License:** MIT