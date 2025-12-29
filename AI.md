# AI.md - Använd AI-verktyg med ArchiCode.js

## 🤖 Översikt

Denna guide visar hur du använder AI-verktyg (ChatGPT, Claude, Copilot, etc.) för att generera ArchiMate-diagram med ArchiCode.js. AI kan dramatiskt påskynda skapandet av enterprise architecture-diagram.

## 🎯 Varför använda AI för ArchiMate?

### Fördelar

✅ **Snabbare diagrammering** - Generera komplex arkitektur på sekunder  
✅ **Konsekvent syntax** - AI följer ArchiCode.js-syntax korrekt  
✅ **Kreativa förslag** - Få idéer för arkitekturlösningar  
✅ **Dokumentation** - Konvertera text till visuella diagram  
✅ **Lärande** - Förstå ArchiMate genom exempel  

### Användningsfall

- 🏗️ **Enterprise Architecture** - Skapa system-översikter
- 📊 **Business Process Mapping** - Visualisera processer
- 🔄 **Digital Transformation** - Planera modernisering
- 🎓 **Utbildning** - Lära sig ArchiMate-standarden
- 📝 **Dokumentation** - Automatisera arkitekturdokumentation

## 🛠️ AI-verktyg som fungerar bra

### Rekommenderade verktyg

| Verktyg | Styrka | ArchiCode Support | Användning |
|---------|--------|-------------------|------------|
| **ChatGPT (GPT-4)** | ⭐⭐⭐⭐⭐ | Utmärkt | Komplex arkitektur, kreativa lösningar |
| **Claude (Sonnet)** | ⭐⭐⭐⭐⭐ | Utmärkt | Stora diagram, strukturerad arkitektur |
| **GitHub Copilot** | ⭐⭐⭐⭐ | Bra | Kod-completion i editor |
| **Copilot Chat** | ⭐⭐⭐⭐ | Bra | Snabba förslag och iterationer |
| **Gemini** | ⭐⭐⭐ | Godkänd | Grundläggande diagram |

### Hur du väljer verktyg

**För nya användare:**
- Börja med ChatGPT eller Claude
- Använd färdiga prompter från PROMPT.md
- Experimentera med små diagram först

**För erfarna användare:**
- Använd Copilot för snabb kod-completion
- Kombinera flera AI-verktyg
- Skapa egna anpassade prompter

## 📋 Grundläggande AI-arbetsflöde

### Steg 1: Förbered din förfrågan

**Beskriv vad du vill:**
```
Jag behöver ett ArchiMate-diagram för en e-handelsplattform med:
- Kunder som aktörer
- Beställningsprocess
- Webbapplikation
- Databas
- Betalningssystem
```

### Steg 2: Be om ArchiCode-format

**Lägg till format-instruktion:**
```
Skapa detta som ArchiCode.js-kod med ArchiMate 3.2-syntax.
Använd rätt lager (business, application, technology).
```

### Steg 3: Kopiera och testa

1. Kopiera genererad kod
2. Klistra in i ArchiCode demo-editorn (eller din egen HTML-sida)
3. Rendera med `ArchiCode.render(code, '#diagram')`
4. Justera vid behov

### Steg 4: Iterera och förbättra

**Be om justeringar:**
```
Lägg till:
- Ett API-lager mellan applikation och databas
- En separat betalningsgateway
- Zoom-inställning till 90%
```

## 💡 Bästa praxis

### DO: Gör detta ✅

1. **Var specifik om lager**
   ```
   ❌ "Skapa ett system för order"
   ✅ "Skapa business:process för orderhantering och application:component för order-system"
   ```

2. **Nämn ArchiCode.js explicit**
   ```
   ✅ "Generera ArchiCode.js-syntax"
   ✅ "Använd ArchiMate 3.2 med layer:type format"
   ```

3. **Be om kommentarer**
   ```
   ✅ "Inkludera kommentarer som förklarar varje lager"
   ```

4. **Specificera relationer**
   ```
   ✅ "Använd --> för association, -:> för serving"
   ```

5. **Begär konfiguration**
   ```
   ✅ "Lägg till #spacing: 80 och #fontSize: 14"
   ```

### DON'T: Undvik detta ❌

1. ❌ Vaga beskrivningar utan detaljer
2. ❌ Glömma att nämna ArchiMate/ArchiCode
3. ❌ Be om för stora diagram på en gång
4. ❌ Ignorera lager-hierarki
5. ❌ Blanda olika notationer

## 🎓 AI-promptmallar

### Mall 1: Grundläggande system

```
Skapa ett ArchiCode.js-diagram för [SYSTEM_NAMN] med följande:

Business Layer:
- [LISTA AKTÖRER]
- [LISTA PROCESSER]

Application Layer:
- [LISTA KOMPONENTER]

Technology Layer:
- [LISTA INFRASTRUKTUR]

Använd ArchiMate 3.2-syntax med layer:type format.
Lägg till relevanta relationer.
Inkludera #spacing: 80 och #fontSize: 14.
```

### Mall 2: Transformation/Migration

```
Skapa ett ArchiCode.js-diagram som visar transformation från:

NULÄGE (AS-IS):
- [BEFINTLIGA SYSTEM]

MÅLBILD (TO-BE):
- [NYA SYSTEM]

Visa migration path med implementation:workpackage element.
Använd ArchiMate 3.2-syntax.
```

### Mall 3: Capability Map

```
Skapa en capability map i ArchiCode.js med:

Strategy Layer:
- Capabilities: [LISTA]
- Resources: [LISTA]

Business Layer:
- Processer som realiserar capabilities: [LISTA]

Använd realization relationer (.-|>) mellan capabilities och processer.
ArchiMate 3.2-syntax, #spacing: 100.
```

## 🔄 Iterativa AI-konversationer

### Första prompten

```
Skapa ett enkelt ArchiCode.js-diagram för ett CRM-system med:
- Business actors (kund, säljare)
- Business process (försäljningsprocess)
- Application component (CRM-applikation)
- Technology node (server)

Använd ArchiMate 3.2-syntax.
```

### Uppföljningsprompt 1

```
Lägg till:
- Ett application:data element för kunddatabas
- Ett application:service element för API
- Relationer mellan komponenterna
```

### Uppföljningsprompt 2

```
Expandera med:
- Motivation layer: Ett goal "Öka försäljning"
- Strategy layer: En capability "Kundhantering"
- Koppla dessa till befintliga element
```

### Uppföljningsprompt 3

```
Optimera diagrammet:
- Justera spacing till 90
- Lägg till kommentarer per lager
- Gruppera relaterade element
```

## 📊 Exempel: Komplett AI-konversation

### Prompt

```
Skapa ett ArchiCode.js-diagram för en modern e-handelsplattform enligt ArchiMate 3.2.

Inkludera:

Motivation Layer:
- Goal: "Öka online-försäljning"
- Driver: "Digital transformation"

Strategy Layer:
- Capability: "E-handel"

Business Layer:
- Actor: "Kund"
- Role: "Webshop Manager"
- Process: "Köpprocess", "Orderhantering"
- Service: "Online Shopping Service"

Application Layer:
- Component: "E-handelsplattform", "Betalningssystem"
- Service: "Product API", "Payment API"
- Data: "Produktkatalog", "Kundregister"

Technology Layer:
- Node: "Webserver", "Appserver", "Databasserver"
- Network: "Internet"

Använd korrekta relationer enligt ArchiMate.
Lägg till #spacing: 80, #fontSize: 14.
Kommentera varje lager.
```

### Förväntad output från AI

```archicode
#spacing: 80
#fontSize: 14
#showBadges: true

// Motivation Layer - Varför gör vi detta?
[<motivation:goal> Öka online-försäljning]
[<motivation:driver> Digital transformation]

// Strategy Layer - Vad behöver vi?
[<strategy:capability> E-handel]

// Business Layer - Vad gör vi?
[<business:actor> Kund]
[<business:role> Webshop Manager]
[<business:process> Köpprocess]
[<business:process> Orderhantering]
[<business:service> Online Shopping Service]

// Application Layer - Vilka system stödjer?
[<application:component> E-handelsplattform]
[<application:component> Betalningssystem]
[<application:service> Product API]
[<application:service> Payment API]
[<application:data> Produktkatalog]
[<application:data> Kundregister]

// Technology Layer - Vilken infrastruktur?
[<technology:node> Webserver]
[<technology:node> Appserver]
[<technology:node> Databasserver]
[<technology:network> Internet]

// Relationships - Hur hänger allt ihop?
// Motivation -> Strategy
[Digital transformation] --> [E-handel]
[Öka online-försäljning] --> [E-handel]

// Strategy -> Business
[E-handel] .-|> [Online Shopping Service]

// Business Layer
[Kund] --> [Köpprocess]
[Webshop Manager] --> [Orderhantering]
[Köpprocess] -:> [Online Shopping Service]
[Orderhantering] -:> [Online Shopping Service]

// Application Layer
[Online Shopping Service] .-|> [E-handelsplattform]
[E-handelsplattform] --> [Product API]
[E-handelsplattform] --> [Payment API]
[Product API] <-> [Produktkatalog]
[Payment API] --> [Betalningssystem]
[Betalningssystem] <-> [Kundregister]

// Technology Layer
[E-handelsplattform] --> [Appserver]
[Betalningssystem] --> [Appserver]
[Produktkatalog] --> [Databasserver]
[Kundregister] --> [Databasserver]
[Appserver] --> [Webserver]
[Webserver] --> [Internet]
```

## 🎯 Specialiserade användningsfall

### Use Case 1: Migreringsplan

**Prompt:**
```
Skapa ett ArchiMate migration-diagram i ArchiCode.js som visar:

Current State (Nuläge):
- Legacy Mainframe System
- File-based storage

Target State (Målbild):
- Cloud-native Microservices
- PostgreSQL Database

Migration Path:
- Workpackage: "Data Migration"
- Workpackage: "Application Modernization"
- Plateau: "Hybrid State"

Använd implementation:workpackage, implementation:plateau.
Visa gap mellan nuläge och målbild.
ArchiMate 3.2-syntax.
```

### Use Case 2: Business Capability Model

**Prompt:**
```
Skapa en business capability map i ArchiCode.js för en bank:

Core Capabilities:
- strategy:capability "Kundtjänst"
- strategy:capability "Kredithantering"
- strategy:capability "Riskhanalys"

Supporting Capabilities:
- strategy:capability "IT-drift"
- strategy:capability "HR"

Resources:
- strategy:resource "Banksystem"
- strategy:resource "Personal"

Koppla capabilities till resources.
Gruppera efter typ (core vs supporting).
#spacing: 100, #fontSize: 14.
```

### Use Case 3: Stakeholder-analys

**Prompt:**
```
Skapa ett stakeholder-diagram i ArchiCode.js:

Stakeholders:
- motivation:stakeholder "CTO"
- motivation:stakeholder "Business Manager"
- motivation:stakeholder "Utvecklare"

Drivers:
- motivation:driver "Kostnadsbesparing"
- motivation:driver "Innovation"

Goals:
- motivation:goal "Modernisera IT"
- motivation:goal "Öka effektivitet"

Requirements:
- motivation:requirement "Cloud Migration"
- motivation:requirement "Agile Processes"

Koppla stakeholders till drivers och goals.
Koppla goals till requirements.
ArchiMate 3.2-syntax.
```

## 🔧 Felsökning med AI

### Problem: AI genererar fel syntax

**Lösning:**
```
Fel syntax genererades. Korrigera enligt följande:

ArchiCode.js använder:
- Format: [<layer:type> Name]
- Exempel: [<business:actor> Customer]
- INTE: [Business Actor: Customer]
- INTE: [<<business>> Actor: Customer]

Generera om med korrekt syntax.
```

### Problem: Saknar relationer

**Lösning:**
```
Diagrammet saknar relationer mellan element.

Lägg till relationer för:
- Alla business processes ska serve business services (-->)
- Applications ska realize services (.-|>)
- Technology nodes ska köra applications (-->)

Använd ArchiMate relationstyper korrekt.
```

### Problem: Fel lager

**Lösning:**
```
Elementen är på fel lager enligt ArchiMate 3.2.

Korrigera:
- "Databas" ska vara technology:node (INTE application:component)
- "API" ska vara application:interface eller application:service
- "Säljare" ska vara business:actor eller business:role

Generera om med korrekta lager.
```

## 📚 Resurser och referenser

### ArchiCode.js Dokumentation
- `README.md` - Komplett syntax-referens
- `PROMPT.md` - Färdiga promptmallar
- `README_EN.md` - English documentation

### ArchiCode.js API
- `ArchiCode.render(code, container)` - Rendera diagram till DOM
- `ArchiCode.exportSVG(code)` - Exportera som SVG-sträng
- `ArchiCode.exportDrawIO(code)` - Exportera till draw.io format
- `ArchiCode.parse(code)` - Parsa kod till intern struktur

### ArchiMate 3.2 Officiella Färger

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

### ArchiMate Standarder
- [ArchiMate 3.2 Specification](https://pubs.opengroup.org/architecture/archimate32-doc/)
- [ArchiMate Reference Cards](https://www.opengroup.org/archimate-forum/archimate-overview)

### AI-verktyg länkar
- [ChatGPT](https://chat.openai.com) - OpenAI
- [Claude](https://claude.ai) - Anthropic
- [GitHub Copilot](https://github.com/features/copilot) - Microsoft
- [Gemini](https://gemini.google.com) - Google

## 💡 Pro Tips

### Tip 1: Bygg stegvis
```
Börja enkelt → Expandera gradvis → Förfina detaljer
```

### Tip 2: Använd exempel
```
"Skapa ett diagram liknande [EXEMPEL], men för [DITT SYSTEM]"
```

### Tip 3: Be om förklaringar
```
"Förklara varför du valde dessa relationer"
```

### Tip 4: Iterera snabbt
```
Första utkast → Snabb feedback → AI-justering → Repeat
```

### Tip 5: Spara bra prompter
```
Dokumentera prompts som ger bra resultat för återanvändning
```

## 🎓 Träningsövningar

### Övning 1: Enkel prompt
**Uppgift:** Be AI skapa ett 3-lagers diagram (business, application, technology)  
**Mål:** Förstå grundläggande AI-interaktion

### Övning 2: Iterativ utveckling
**Uppgift:** Starta med enkelt diagram, lägg till 3 gånger  
**Mål:** Lära sig bygga komplexitet stegvis

### Övning 3: Felkorrigering
**Uppgift:** Be AI fixa ett diagram med fel  
**Mål:** Förstå hur man guidar AI till korrekt syntax

### Övning 4: Domänexpert
**Uppgift:** Beskriv ett system från din bransch, be AI skapa diagram  
**Mål:** Tillämpa ArchiMate på verkliga scenarion

### Övning 5: Jämförelse
**Uppgift:** Be 2 olika AI-verktyg skapa samma diagram, jämför  
**Mål:** Förstå styrkor och svagheter hos olika verktyg

## 🚀 Nästa steg

1. **Läs PROMPT.md** - Färdiga promptmallar att använda direkt
2. **Testa ett exempel** - Kopiera en prompt från denna guide
3. **Experimentera** - Justera prompter för dina behov
4. **Dela resultat** - Bidra med bra prompter till communityn
5. **Automatisera** - Integrera AI i ditt arkitekturarbetsflöde

---

**Version:** 1.0.0
**Author:** Henrik Yllemo
**Year:** 2025
**License:** MIT
