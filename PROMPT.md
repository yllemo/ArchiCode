# PROMPT.md - AI Prompt-bibliotek för ArchiCode.js

## 📚 Översikt

Detta dokument innehåller färdiga AI-prompter för att generera ArchiMate-diagram med ArchiCode.js. Kopiera och anpassa prompterna efter dina behov.

## 🎯 Hur du använder dessa prompter

1. **Välj en prompt** från listan nedan
2. **Ersätt [PLATSHÅLLARE]** med dina specifika värden
3. **Kopiera hela prompten** till din AI (ChatGPT, Claude, etc.)
4. **Klistra in resultatet** i ArchiCode demo eller din egen HTML-sida
5. **Rendera med** `ArchiCode.render(code, '#diagram')` och justera efter behov

---

## 🏢 BUSINESS ARCHITECTURE

### Prompt 1: Grundläggande Business Process

```
Skapa ett ArchiMate-diagram i ArchiCode.js-syntax som visar:

Business Layer:
- Actor: [AKTÖR_NAMN, t.ex. "Kund"]
- Role: [ROLL_NAMN, t.ex. "Kundtjänstansvarig"]
- Process: [PROCESS_NAMN, t.ex. "Hantera kundärende"]
- Service: [TJÄNST_NAMN, t.ex. "Kundsupport"]

Använd ArchiMate 3.2-syntax med format [<business:type> Name].
Lägg till relevanta relationer mellan elementen.
Inkludera kommentarer och #spacing: 80, #fontSize: 14.
```

**Exempel med ifyllda värden:**
```
Skapa ett ArchiMate-diagram i ArchiCode.js-syntax som visar:

Business Layer:
- Actor: "Patient"
- Role: "Läkare"
- Process: "Hantera patientjournal"
- Service: "Journaltjänst"

Använd ArchiMate 3.2-syntax med format [<business:type> Name].
Lägg till relevanta relationer mellan elementen.
Inkludera kommentarer och #spacing: 80, #fontSize: 14.
```

### Prompt 2: Business Capability Map

```
Skapa en business capability map i ArchiCode.js för [ORGANISATION/DOMÄN]:

Strategy Layer - Core Capabilities:
1. [CAPABILITY_1]
2. [CAPABILITY_2]
3. [CAPABILITY_3]

Supporting Capabilities:
1. [SUPPORTING_1]
2. [SUPPORTING_2]

Resources behövda:
1. [RESOURCE_1]
2. [RESOURCE_2]

Använd ArchiMate 3.2-syntax:
- strategy:capability för capabilities
- strategy:resource för resources
- Visa realiserings-relationer (.-|>)
- #spacing: 100, #fontSize: 14
```

### Prompt 3: Customer Journey

```
Skapa ett customer journey-diagram i ArchiCode.js för [TJÄNST/PRODUKT]:

Business Layer komponenter:
- Actor: [KUND_TYP]
- Touchpoints (business:interface): [LISTA TOUCHPOINTS]
- Processes: [LISTA STEG I JOURNEY]
- Services: [TJÄNSTER SOM LEVERERAS]
- Events: [VIKTIGA HÄNDELSER]

Visa journey-flödet med triggering-relationer (->>) mellan events och processes.
Använd ArchiMate 3.2-syntax, #spacing: 90.
```

---

## 💻 APPLICATION ARCHITECTURE

### Prompt 4: System Landscape

```
Skapa en application landscape i ArchiCode.js för [SYSTEM_LANDSKAP]:

Application Layer:
Components:
- [SYSTEM_1]
- [SYSTEM_2]
- [SYSTEM_3]

Services:
- [SERVICE_1]
- [SERVICE_2]

Interfaces:
- [API_1]
- [API_2]

Data Objects:
- [DATABAS_1]
- [DATABAS_2]

Visa hur komponenter kommunicerar via interfaces.
Använd access-relationer (<->) för data.
ArchiMate 3.2-syntax, #spacing: 80.
```

### Prompt 5: Microservices Architecture

```
Skapa en microservices-arkitektur i ArchiCode.js för [SYSTEM]:

Application Layer:
Microservices (application:component):
1. [SERVICE_1] - [ANSVAR]
2. [SERVICE_2] - [ANSVAR]
3. [SERVICE_3] - [ANSVAR]

API Gateway (application:interface):
- [GATEWAY_NAMN]

Service Mesh/Communication:
- [KOMMUNIKATIONS_LAGER]

Data Stores (application:data):
- [SERVICE_1_DB]
- [SERVICE_2_DB]

Technology Layer:
- Container Platform: [T.EX. "Kubernetes"]
- Message Queue: [T.EX. "RabbitMQ"]

Visa alla relationer mellan services, APIs och databaser.
ArchiMate 3.2-syntax, #fontSize: 12, #spacing: 90.
```

### Prompt 6: Integration Pattern

```
Skapa ett integration-pattern diagram i ArchiCode.js:

Source Systems (application:component):
- [SYSTEM_A]
- [SYSTEM_B]

Integration Layer (application:component):
- [ESB/API_GATEWAY]
- [MESSAGE_BROKER]

Target Systems (application:component):
- [SYSTEM_C]
- [SYSTEM_D]

Data Flow:
- Visa data-flöden med flow-relationer (->)
- Inkludera transformation-steg om relevanta

ArchiMate 3.2-syntax, #spacing: 100.
```

---

## 🖥️ TECHNOLOGY ARCHITECTURE

### Prompt 7: Infrastructure Overview

```
Skapa ett infrastruktur-diagram i ArchiCode.js för [MILJÖ]:

Technology Layer:

Devices:
- [CLIENT_DEVICES, t.ex. "Laptop", "Mobile"]

Network:
- [NÄTVERK, t.ex. "Internet", "Corporate Network"]

Nodes:
- [SERVRAR, t.ex. "Web Server", "App Server", "DB Server"]

System Software:
- [PLATTFORMAR, t.ex. "Linux", "Docker", "Kubernetes"]

Visa nätverkstopologi och kommunikation.
ArchiMate 3.2-syntax, #spacing: 80.
```

### Prompt 8: Cloud Architecture

```
Skapa en cloud-arkitektur i ArchiCode.js för [SYSTEM] på [CLOUD_PROVIDER]:

Technology Layer:

Cloud Services (technology:node):
- [COMPUTE_SERVICE, t.ex. "EC2", "Azure VM"]
- [STORAGE_SERVICE, t.ex. "S3", "Azure Blob"]
- [DATABASE_SERVICE, t.ex. "RDS", "CosmosDB"]

Network (technology:network):
- [VPC/VNET]
- [SUBNETS]

Security:
- [FIREWALLS]
- [LOAD_BALANCERS]

Application Layer:
- [APPLIKATIONER SOM KÖRS I MOLNET]

Visa deployment-relationer mellan apps och cloud services.
ArchiMate 3.2-syntax, #spacing: 90.
```

---

## 🎯 STRATEGY & MOTIVATION

### Prompt 9: Strategic Goals & Capabilities

```
Skapa ett strategic alignment-diagram i ArchiCode.js:

Motivation Layer:
Stakeholders:
- [STAKEHOLDER_1]
- [STAKEHOLDER_2]

Drivers:
- [DRIVER_1]
- [DRIVER_2]

Goals:
- [MÅL_1]
- [MÅL_2]

Strategy Layer:
Capabilities needed:
- [CAPABILITY_1]
- [CAPABILITY_2]

Business Layer:
Services realizing capabilities:
- [SERVICE_1]
- [SERVICE_2]

Visa relationer:
- Stakeholders har drivers
- Drivers leder till goals
- Goals kräver capabilities
- Capabilities realiseras av services

ArchiMate 3.2-syntax, #spacing: 100.
```

### Prompt 10: Value Stream

```
Skapa ett value stream-diagram i ArchiCode.js för [VÄRDEKEDJA]:

Motivation Layer:
- Value: [VÄRDE_LEVERERAS]

Business Layer:
Value Stream Stages (business:process):
1. [STEG_1]
2. [STEG_2]
3. [STEG_3]
4. [STEG_4]

Supporting Services (business:service):
- [SERVICE_PER_STEG]

Visa flöde med flow-relationer (->).
Koppla varje steg till value med realization (.-|>).
ArchiMate 3.2-syntax, #spacing: 100.
```

---

## 🔄 TRANSFORMATION & MIGRATION

### Prompt 11: AS-IS to TO-BE

```
Skapa ett transformation-diagram i ArchiCode.js som visar [TRANSFORMATION]:

CURRENT STATE (AS-IS):
Business:
- [NUVARANDE_PROCESSER]

Application:
- [LEGACY_SYSTEM_1]
- [LEGACY_SYSTEM_2]

Technology:
- [GAMMAL_INFRASTRUKTUR]

TARGET STATE (TO-BE):
Business:
- [NYA_PROCESSER]

Application:
- [MODERNA_SYSTEM_1]
- [MODERNA_SYSTEM_2]

Technology:
- [NY_INFRASTRUKTUR]

Markera tydligt AS-IS vs TO-BE i kommentarer.
Använd olika spacing för visuell separation.
ArchiMate 3.2-syntax.
```

### Prompt 12: Migration Roadmap

```
Skapa en migration roadmap i ArchiCode.js:

Implementation & Migration Layer:

Plateaus (implementation:plateau):
1. [PLATEAU_1] - [TIDPUNKT]
2. [PLATEAU_2] - [TIDPUNKT]
3. [PLATEAU_3] - [TIDPUNKT]

Work Packages (implementation:workpackage):
- [WORKPACKAGE_1] - [BESKRIVNING]
- [WORKPACKAGE_2] - [BESKRIVNING]

Deliverables (implementation:deliverable):
- [LEVERANS_1]
- [LEVERANS_2]

Gaps (implementation:gap):
- [GAP mellan nuläge och målbild]

Visa dependencies mellan workpackages.
Koppla deliverables till plateaus.
ArchiMate 3.2-syntax, #spacing: 120.
```

---

## 🏗️ ENTERPRISE ARCHITECTURE VIEWS

### Prompt 13: Layered View (Full Stack)

```
Skapa en komplett layered view i ArchiCode.js för [SYSTEM]:

Motivation Layer:
- Goal: [HUVUDMÅL]
- Requirement: [HUVUDKRAV]

Strategy Layer:
- Capability: [CAPABILITY]

Business Layer:
- Actor: [ANVÄNDARE]
- Process: [PROCESS]
- Service: [BUSINESS_SERVICE]

Application Layer:
- Component: [APP]
- Service: [APP_SERVICE]
- Data: [DATA]

Technology Layer:
- Node: [SERVER]
- Device: [DEVICE]

Physical Layer:
- Equipment: [FYSISK_UTRUSTNING]
- Facility: [DATACENTER/KONTOR]

Visa alla lager-relationer enligt ArchiMate hierarki.
#spacing: 80, #fontSize: 12, #showBadges: true.
```

### Prompt 14: Cross-Layer Dependencies

```
Skapa ett cross-layer dependency-diagram i ArchiCode.js:

Fokus: Visa beroenden mellan [SYSTEM_A] och [SYSTEM_B]

Inkludera:
Business Layer:
- Shared processes: [DELADE_PROCESSER]

Application Layer:
- Integration points: [INTEGRATIONSPUNKTER]
- Shared data: [DELAD_DATA]

Technology Layer:
- Shared infrastructure: [DELAD_INFRA]

Använd association (-->) för beroenden.
Gruppera per system med kommentarer.
ArchiMate 3.2-syntax, #spacing: 90.
```

---

## 🎓 UTBILDNING & DOKUMENTATION

### Prompt 15: ArchiMate Concept Example

```
Skapa ett pedagogiskt exempel i ArchiCode.js som visar [ARCHIMATE_KONCEPT]:

Syfte: Förklara hur [KONCEPT] används i ArchiMate

Exempel-scenario: [ENKELT_SCENARIO]

Inkludera:
1. Minst 3-4 element som demonstrerar konceptet
2. Tydliga kommentarer som förklarar vad varje element gör
3. Relevanta relationer
4. Annotations som pedagogiska poänger

Håll det enkelt och fokuserat på att lära ut konceptet.
ArchiMate 3.2-syntax, #spacing: 100, #fontSize: 16.
```

### Prompt 16: Reference Architecture Pattern

```
Skapa ett reference architecture-pattern i ArchiCode.js för [PATTERN_NAMN]:

Pattern: [T.EX. "Layered Architecture", "Event-Driven", "CQRS"]

Beskrivning: [KORT_BESKRIVNING_AV_PATTERN]

Nyckelkomponenter:
Business:
- [KOMPONENTER]

Application:
- [KOMPONENTER]

Technology:
- [KOMPONENTER]

Viktiga relationer:
- [RELATIONER SOM DEFINIERAR PATTERN]

Lägg till kommentarer som förklarar pattern-specifika aspekter.
ArchiMate 3.2-syntax, #spacing: 90.
```

---

## 🔧 TEKNISKA DETALJER

### Prompt 17: API Architecture

```
Skapa ett API-arkitektur diagram i ArchiCode.js:

Application Layer:

API Gateway (application:interface):
- [GATEWAY_NAMN]

Backend APIs (application:service):
- [API_1] - [BESKRIVNING]
- [API_2] - [BESKRIVNING]
- [API_3] - [BESKRIVNING]

Backend Components (application:component):
- [SERVICE_1]
- [SERVICE_2]

Data Layer (application:data):
- [DATABASE_1]
- [DATABASE_2]

Security:
- Authentication: [AUTH_MECHANISM]
- Authorization: [AUTHZ_MECHANISM]

Visa request flow från gateway till services till data.
ArchiMate 3.2-syntax, #spacing: 80.
```

### Prompt 18: Data Architecture

```
Skapa ett data-arkitektur diagram i ArchiCode.js:

Application Layer:

Data Sources (application:data):
- [SOURCE_1]
- [SOURCE_2]
- [SOURCE_3]

Data Integration (application:component):
- [ETL/ELT_TOOL]
- [DATA_PIPELINE]

Data Storage (application:data):
- [DATA_WAREHOUSE]
- [DATA_LAKE]
- [DATA_MART]

Data Access (application:service):
- [BI_LAYER]
- [ANALYTICS_API]

Consumers (application:component):
- [REPORTING_TOOL]
- [ANALYTICS_PLATFORM]

Visa data flow med flow-relationer (->).
Använd access-relationer (<->) för data access.
ArchiMate 3.2-syntax, #spacing: 100.
```

---

## 🏭 DOMÄN-SPECIFIKA MALLAR

### Prompt 19: Healthcare System

```
Skapa ett vårdinfomationssystem-diagram i ArchiCode.js:

Business Layer:
Actors:
- Patient
- Läkare
- Sjuksköterska
- Administratör

Processes:
- Patientregistrering
- Journalföring
- Läkemedelshantering
- Tidsbokning

Services:
- Journaltjänst
- Recepttjänst

Application Layer:
- Journalsystem
- Tidsbokning-system
- Apotekssystem

Technology Layer:
- GDPR-compliant databas
- Säker kommunikation

Fokusera på datasäkerhet och patient-integritet.
ArchiMate 3.2-syntax, #spacing: 80.
```

### Prompt 20: Financial Services

```
Skapa ett bank-system diagram i ArchiCode.js:

Business Layer:
Actors:
- Kund
- Banktjänsteman

Processes:
- Kontohantering
- Betalningar
- Låneansökan

Services:
- Banktjänster
- Betalnings-tjänster

Application Layer:
- Core Banking System
- Payment Gateway
- Mobile Banking App
- Fraud Detection System

Technology Layer:
- Transaction Database
- Security Infrastructure

Motivation Layer:
- Requirement: "PCI-DSS Compliance"
- Requirement: "24/7 Availability"

Inkludera compliance och säkerhet.
ArchiMate 3.2-syntax, #spacing: 90.
```

---

## 🎨 ADVANCED PROMPTS

### Prompt 21: Multi-Tenant SaaS

```
Skapa en multi-tenant SaaS-arkitektur i ArchiCode.js:

Business Layer:
- Olika tenant-organisationer som actors
- Isolerade business services per tenant

Application Layer:
- Shared application components
- Tenant-specific data isolation
- Multi-tenancy management

Technology Layer:
- Container orchestration (Kubernetes)
- Tenant data separation
- Shared infrastructure med resource isolation

Visa:
1. Hur tenants delar infrastruktur
2. Hur data isoleras per tenant
3. Shared vs dedicated komponenter

ArchiMate 3.2-syntax, #spacing: 100.
```

### Prompt 22: IoT Architecture

```
Skapa en IoT-arkitektur i ArchiCode.js för [IOT_SYSTEM]:

Physical Layer:
Equipment:
- [IOT_DEVICES, t.ex. "Sensor", "Actuator"]
- [EDGE_DEVICES]

Technology Layer:
- Edge Computing Nodes
- IoT Gateway
- Message Broker (MQTT/AMQP)
- Cloud Platform

Application Layer:
- Device Management
- Data Processing
- Analytics Platform
- Control Systems

Business Layer:
- Monitoring Service
- Automated Processes

Visa data flow från devices till cloud till business.
ArchiMate 3.2-syntax, #spacing: 90.
```

---

## 💡 META-PROMPTER

### Prompt 23: Generate Custom Prompt

```
Jag behöver en AI-prompt för att generera ArchiCode.js-diagram för [BESKRIVNING_AV_BEHOV].

Skapa en prompt-mall som:
1. Inkluderar relevanta ArchiMate-lager för mitt use case
2. Specificerar rätt element-typer enligt ArchiMate 3.2
3. Innehåller placeholder för anpassning
4. Ger tydliga instruktioner om relationer
5. Inkluderar lämpliga konfigurationsdirektiv

Formatera som copy-paste-klar prompt jag kan ge till en AI.
```

---

## 📋 CHECKLISTA FÖR PROMPTER

När du skapar egna prompter, inkludera:

- [ ] **Specificera ArchiCode.js** explicit
- [ ] **ArchiMate 3.2-syntax** nämnt
- [ ] **Format** `[<layer:type> Name]` tydliggjort
- [ ] **Lager** som behövs listade
- [ ] **Relationstyper** specificerade
- [ ] **Konfiguration** (#spacing, #fontSize, etc.)
- [ ] **Kommentarer** efterfrågade
- [ ] **Placeholders** i [BRACKETS] där användaren ska fylla i
- [ ] **Exempel** på förväntad output (valfritt)

---

## 🚀 Snabbstart

**Första gången:**
1. Välj Prompt 1 eller Prompt 4 (enklast)
2. Fyll i placeholders
3. Testa i din AI
4. Lär dig syntaxen

**Därefter:**
1. Utforska mer avancerade prompter
2. Kombinera flera prompter
3. Skapa egna varianter
4. Dela med communityn

---

**Version:** 1.0.0
**Author:** Henrik Yllemo
**Year:** 2025
**License:** MIT

**Relaterade dokument:**
- `AI.md` - Guide för AI-verktyg
- `README.md` - ArchiCode.js dokumentation (Svenska)
- `README_EN.md` - ArchiCode.js documentation (English)
