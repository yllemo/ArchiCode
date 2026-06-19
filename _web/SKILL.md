---
name: archicode-am4-sv
description: >
  Generera ArchiMate 4 (C260)-diagram med ArchiCode-syntax. Denna skill täcker
  alla sju domäner (Motivation, Strategy, Common, Business, Application,
  Technology, Implementation & Migration), korrekt elementtyp-prefix, relationspilar
  och konfigurationsdirektiv. Syntax-utdata används direkt av ArchiCode.render().
keywords:
  - archimate
  - archimate 4
  - archicode
  - enterprise architecture
  - verksamhetsarkitektur
  - domänmodell
  - capability map
  - värdeström
  - migrationsplan
  - systemlandskap
author: ArchiCode / The Open Group C260
version: "4.0"
applyTo: ["**/*.archimate", "**/*.html", "**/*.md"]
tools: [archicode, diagrams, enterprise-architecture]
domains: [enterprise-architecture, business-modeling, system-design]
---

# ArchiCode — Claude Code Skill

## Syfte

Använd denna skill för att generera ArchiMate 4-diagram med ArchiCode-syntax.
ArchiCode renderar text direkt till SVG i webbläsaren utan externa beroenden.

Syntax-utdata i denna skill används av `ArchiCode.render(code, '#container')`.

---

## Snabbstart

Komplett diagram från scratch:

```archimate
#spacing: 90
#direction: down
#showBadges: true

[<motivation:goal> Oka kundnojdhet]
[<strategy:capability> E-handel]
[<business:actor> Kund]
[<business:role> Saljare]
[<common:process> Kopsprocess]
[<application:component> Webbshop]
[<technology:node> Kubernetes]

[Kund] .-- [Saljare]
[Saljare] -> [Kopsprocess]
[Kopsprocess] --:> [Webbshop]
[Webbshop] -> [Kubernetes]
[E-handel] --> [Oka kundnojdhet]
```

---

## ArchiMate 4 Domaner

| Doman | Farg | Kant | Prefix | Typiska element |
|---|---|---|---|---|
| Motivation | `#D8C1E4` | `#B39BCF` | `motivation:` | goal, driver, assessment, stakeholder, requirement, principle, value, meaning, outcome |
| Strategy | `#EFBD5D` | `#D4A43B` | `strategy:` | capability, resource, course-of-action, value-stream |
| Common | `#E8E5D3` | `#C4BFA6` | `common:` | process, function, service, event, collaboration, role, interaction |
| Business | `#F4DE7F` | `#E8C555` | `business:` | actor, role, collaboration, interface, process, function, event, service, object, product |
| Application | `#B6D7E1` | `#8CC5D4` | `application:` | component, collaboration, interface, function, event, service, data |
| Technology | `#C3E1B4` | `#9BD083` | `technology:` | node, device, system-software, path, network, service, artifact, equipment, facility, material |
| Implementation | `#F8C2BE` | `#F09B95` | `implementation:` | workpackage, deliverable, plateau |

---

## Syntax-referens

### Element-syntax

```
[<doman:elementtyp> Namn pa elementet]
```

Exempel:

```archimate
[<motivation:goal> Minska kostnader]
[<strategy:capability> Automatisering]
[<common:process> Fakturahantering]
[<business:actor> Kund]
[<application:component> Betalservice]
[<technology:node> Applikationsserver]
[<implementation:workpackage> Fas 1]
```

### Relationer

| Syntax | Relationstyp | Semantik |
|---|---|---|
| `->` | Serving | A levererar tjanst till B |
| `-->` | Flow | Information flödar fran A till B |
| `--:>` | Realization | A realiserar (implementerar) B |
| `-|>` | Triggering | A triggar/startar B |
| `.--` | Assignment | A ar tilldelad roll/funktion B |
| `o-` | Aggregation | B ar en del av A (los sammansattning) |
| `-:>` | Specialization | A ar en specialisering av B |
| `---` | Association | Generell, odefinierbar relation |
| `<->` | Access | A laser/skriver till B |

Relationsexempel:

```archimate
[<business:actor> Kund] .-- [<business:role> Kopare]
[<common:event> Order inkommen] -|> [<common:process> Orderhantering]
[<common:process> Orderhantering] -> [<common:service> Leveranstjanst]
[<application:component> Webbapp] --:> [<business:service> Onlinekop]
[<application:component> API] <-> [<application:data> Databas]
[<business:product> Prenumeration] o- [<business:service> Support 24/7]
```

### Konfigurationsdirektiv

```archimate
#spacing: 80          // Avstand mellan element (standard: 80)
#direction: down      // Layout-riktning: down | right
#fontSize: 14         // Teckenstorlek (standard: 14)
#showBadges: true     // Visa domanbokstav (M, S, Co, B, A, T, I)
#showIcons: true      // Visa elementikoner
#lineWidth: 2         // Linjetjocklek
```

### Kommentarer

```archimate
// Detta ar en kommentar
[<business:actor> Kund]  // Inline-kommentar
```

---

## Promptmallar for AI

Anvand dessa prompter for att generera ArchiCode-diagram med en LLM.

### Mall 1: Systemlandskap (Business + Application + Technology)

> Generera ett ArchiCode-diagram for ett systemlandskap med [beskriv system].
> Inkludera business-domanen (aktorer och roller), application-domanen
> (komponenter och services) och technology-domanen (noder och databaser).
> Anvand korrekta ArchiMate 4-prefix och relationer.

### Mall 2: Capability Map (Strategy)

> Skapa en capability map med ArchiCode-syntax for [organisation/omrade].
> Anvand strategy:capability for formalgor, strategy:resource for resurser
> och strategy:value-stream for vardestrommen fran [start] till [slut].
> Koppla resurser till formalgor med .-- (assignment).

### Mall 3: Motivation och mal

> Generera ett motivationsdiagram med ArchiCode for [projekt/initiativ].
> Inkludera:
> - motivation:stakeholder for intressenter
> - motivation:driver for drivkrafter (lag, konkurrens, teknik)
> - motivation:goal for mal
> - motivation:requirement for krav
> Koppla med --> (flow) och -> (serving).

### Mall 4: Migrationsplan (Implementation)

> Skapa en migrationsplan med ArchiCode for overgangen fran [nulaege] till [mallaege].
> Anvand:
> - implementation:plateau for nulaege, mellanlaege och mallaege
> - implementation:workpackage for arbetspaket/faser
> - implementation:deliverable for leveranser
> Koppla plateauer med --> och arbetspaket med --> till sina leveranser.

### Mall 5: E-handelsarkitektur

> Rita en komplett e-handelsarkitektur med ArchiCode.
> Inkludera:
> - business:actor (Kund, Admin)
> - common:process (Kopprocess, Orderhantering)
> - application:component (Webbshop, API Gateway, Betaltjanst)
> - application:data (Orderdatabas, Kundregister)
> - technology:node (Appserver, Databasserver)
> - technology:device (Load Balancer, Brandvagg)

### Mall 6: Integration-/API-karta

> Generera en integrationskarta med ArchiCode for [system].
> Visa application:component for varje system, application:service for
> exponerade API:er, och anvand -> (serving) for integrationsfloden.
> Inkludera application:data for delade databaser med <-> (access).

---

## Felhantering

### Vanliga fel och losningar

**Fel: Element hittas inte i relation**

```archimate
// FEL — namnmatchning misslyckas
[<business:actor> Kund]
[Kundenn] -> [Process]  // Stavfel i referens

// RATT
[<business:actor> Kund]
[Kund] -> [Process]
```

**Fel: Ogiltigt elementprefix**

```archimate
// FEL — "physical" finns inte i AM4
[<physical:equipment> Server]

// RATT — anvand technology-domanen
[<technology:equipment> Server]
```

**Fel: Felaktig relationssyntax**

```archimate
// FEL — pilen skrivs fel
[A] ==> [B]
[A] ---> [B]

// RATT
[A] --> [B]   // flow
[A] -> [B]    // serving
[A] --:> [B]  // realization
```

**Fel: Specialtecken i namn**

```archimate
// FEL — hakparenteser i namn kan stalla till problem
[<business:actor> Kund [VIP]]

// RATT — anvand alternativ beteckning
[<business:actor> Kund VIP]
```

### Validering

Kontrollera alltid:

1. Prefix matchar en giltig doman: `motivation`, `strategy`, `common`, `business`, `application`, `technology`, `implementation`
2. Elementnamn i relationer stammer exakt overens med deklarerade namn
3. Relationssyntax anvander exakt en av: `->`, `-->`, `--:>`, `-|>`, `.--`, `o-`, `-:>`, `---`, `<->`
4. Konfigurationsdirektiv borjar med `#` och har ett giltigt varde

---

## Domaner i detalj

### Motivation (`#D8C1E4`)

Varfor arkitekturen existerar. Intressenter, drivkrafter och mal.

```archimate
[<motivation:stakeholder> CTO]
[<motivation:driver> Regulatoriska krav]
[<motivation:goal> GDPR-efterlevnad]
[<motivation:requirement> Kryptering i vila]
[<motivation:principle> Privacy by Design]
[CTO] --> [GDPR-efterlevnad]
[Regulatoriska krav] --> [GDPR-efterlevnad]
[GDPR-efterlevnad] --> [Kryptering i vila]
[Privacy by Design] --> [GDPR-efterlevnad]
```

### Strategy (`#EFBD5D`)

Hur organisationen planerar att uppna sina mal.

```archimate
[<strategy:capability> Digital forsaljning]
[<strategy:resource> Saljteam]
[<strategy:resource> Sakerhetssystem]
[<strategy:value-stream> Lead till betalning]
[<strategy:course-of-action> Digitaliseringsstrategi]
[Saljteam] .-- [Digital forsaljning]
[Digital forsaljning] -> [Lead till betalning]
[Digitaliseringsstrategi] --> [Digital forsaljning]
```

### Common (`#E8E5D3`)

Delade beteendeelement tvaers domaner — ny i AM4.

```archimate
[<common:event> Bestallning inkommen]
[<common:process> Orderhantering]
[<common:function> Prisberakning]
[<common:service> Ordertjanst]
[<common:collaboration> Supportteam]
[Bestallning inkommen] -|> [Orderhantering]
[Orderhantering] o- [Prisberakning]
[Orderhantering] -> [Ordertjanst]
```

### Business (`#F4DE7F`)

Verksamhetens aktorer, roller, processer och produkter.

```archimate
[<business:actor> Kund]
[<business:actor> Leverantor]
[<business:role> Inkopare]
[<business:process> Inkopsprocess]
[<business:service> Leveranstjanst]
[<business:object> Inkopsorder]
[<business:product> Serviceprenumeration]
[Kund] .-- [Inkopare]
[Inkopare] -> [Inkopsprocess]
[Inkopsprocess] -> [Leveranstjanst]
[Inkopsprocess] <-> [Inkopsorder]
```

### Application (`#B6D7E1`)

IT-system och mjukvarukomponenter.

```archimate
[<application:component> API Gateway]
[<application:component> Ordertjanst]
[<application:service> REST-API]
[<application:interface> OpenAPI]
[<application:data> Orderdatabas]
[<application:data> Kundregister]
[API Gateway] -> [REST-API]
[REST-API] --:> [Ordertjanst]
[Ordertjanst] <-> [Orderdatabas]
[Ordertjanst] <-> [Kundregister]
[OpenAPI] --:> [REST-API]
```

### Technology (`#C3E1B4`)

Infrastruktur, servers, nativerk och systemmjukvara.

```archimate
[<technology:device> Brandvagg]
[<technology:node> Kubernetes-kluster]
[<technology:system-software> PostgreSQL 16]
[<technology:network> Internt LAN]
[<technology:artifact> Docker-image]
[<technology:equipment> Serverrack]
[<technology:facility> Datacenter Stockholm]
[Brandvagg] -> [Kubernetes-kluster]
[Kubernetes-kluster] -> [PostgreSQL 16]
[PostgreSQL 16] --> [Serverrack]
[Serverrack] --> [Datacenter Stockholm]
```

### Implementation (`#F8C2BE`)

Transformationsarbete och migreringsplanering.

```archimate
[<implementation:plateau> Nulaege 2025]
[<implementation:plateau> Hybridlaege Q2 2026]
[<implementation:plateau> Malarkitektur 2027]
[<implementation:workpackage> Fas 1 Inventering]
[<implementation:workpackage> Fas 2 Migrering]
[<implementation:deliverable> Kravspec]
[<implementation:deliverable> Testrapport]
[Nulaege 2025] --> [Hybridlaege Q2 2026]
[Hybridlaege Q2 2026] --> [Malarkitektur 2027]
[Fas 1 Inventering] --> [Kravspec]
[Fas 2 Migrering] --> [Testrapport]
[Fas 2 Migrering] --> [Hybridlaege Q2 2026]
```

---

## Integration med ArchiCode API

```javascript
// Grundlaeggande rendering
const code = `
[<business:actor> Kund]
[<common:process> Kopprocess]
[Kund] -> [Kopprocess]
`;

ArchiCode.render(code, '#diagram-container');

// Exportera som SVG-strang
const svgStr = ArchiCode.exportSVG(code);

// Exportera till draw.io
const drawioXml = ArchiCode.exportDrawIO(code);

// Parsa utan rendering
const { elements, relations, config } = ArchiCode.parse(code);
console.log('Element:', elements.length);
console.log('Relationer:', relations.length);
```

---

## Referens

- **Standard**: The Open Group ArchiMate 4, specifikation C260, april 2026
- **Farger**: ArchiMate 2025 Modern Color Set
- **Dokumentation**: [opengroup.org/archimate-forum](https://www.opengroup.org/archimate-forum)
- **Renderare**: ArchiCode.js — MIT-licens
- **Demo**: [../demo/index.html](../demo/index.html)
- **Guide**: [archimate-guide.html](archimate-guide.html)
