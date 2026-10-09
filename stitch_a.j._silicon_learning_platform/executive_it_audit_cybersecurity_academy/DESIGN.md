---
name: Executive IT Audit & Cybersecurity Academy
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#44474c'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#525f75'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0e1c2f'
  on-primary-container: '#77849c'
  inverse-primary: '#bac7e1'
  secondary: '#006c4a'
  on-secondary: '#ffffff'
  secondary-container: '#82f5c1'
  on-secondary-container: '#00714e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f1500'
  on-tertiary-container: '#c76c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3fe'
  primary-fixed-dim: '#bac7e1'
  on-primary-fixed: '#0e1c2f'
  on-primary-fixed-variant: '#3a475c'
  secondary-fixed: '#85f8c4'
  secondary-fixed-dim: '#68dba9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  telemetry-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-badge:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 2rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3rem
---

## Brand & Style

This design system establishes an institutional, high-assurance aesthetic tailored for senior IT auditors, CISOs, and enterprise risk practitioners. The visual narrative combines the technical precision of modern high-performance engineering suites with the venerable authority of global accreditation bodies. 

The aesthetic is clean, disciplined, and spacious—eschewing frivolous decoration in favor of structural clarity, crisp typography, deliberate negative space, and architectural data framing. Surfaces feel grounded and immutable, evoking audit-trail permanence, cryptographic certainty, and boardroom-ready credibility.

## Colors

The palette leverages high-contrast institutional tones balanced against serene, clinical surfaces.

- **Foundational Surfaces**: The primary canvas rests on `#F8FAFC`, complemented by elevated container surfaces in `#FFFFFF`. Hairline structural borders use `#E2E8F0` to enforce architectural separation without visual heaviness.
- **Primary Brand**: `#0B192C` (Midnight Navy) anchors all high-order structures, navigation frames, authoritative badges, and dominant headers. An operational tone `#0F172A` delivers contrast for high-density textual content.
- **Audit Pass Accent**: `#059669` (with supporting mint `#10B981`) conveys compliance status, cryptographically verified elements, passing controls, and active system health.
- **Pedigree Amber Accent**: `#D97706` (with high-visibility amber `#F59E0B`) highlights executive certification pathways, honorary milestones, risk tiers, and formal accreditation seals.
- **Neutral Typography Scale**: Headlines command authority at `#0F172A` (Slate 900). Reading passages use `#475569` (Slate 600) for sustained legibility. Sub-labels, table metadata, and system telemetry markers resolve in `#64748B` and `#94A3B8`.

## Typography

The typographic hierarchy uses **Inter** configured with disciplined negative tracking on larger display registers to achieve a poised executive profile. 

- **Display & Headlines**: Tightly tracked (`-0.02em` to `-0.03em`) with deliberate line-heights to eliminate slack in multi-line institutional statements.
- **Reading Body**: Balanced tracking at standard scale to optimize long-form comprehension across audit matrices, technical modules, and legal case studies.
- **Telemetry & Hashes**: **JetBrains Mono** is reserved exclusively for checksums, control identifiers, cryptographic hashes, CVE numbers, and ledger timestamps, reinforcing audit legitimacy.

## Layout & Spacing

The layout philosophy centers on expansive breathing room, eliminating cramped enterprise dashboards in favor of structured confidence.

- **Grid Architecture**: A strict 12-column desktop grid with a maximum content container of 1440px. Gutters stay locked at 32px (`2rem`) on desktop screens, transitioning to 16px (`1rem`) on single-column mobile viewports.
- **Margin Model**: Wide lateral frames—48px (`3rem`) on wide screens—give content intentional focus.
- **Component Padding Rhythms**: Containers prioritize generous inner padding (typically 32px to 40px) to maintain editorial composure around data tables, syllabus tracks, and certification flows.

## Elevation & Depth

This design system avoids loud, ungrounded dropshadows. Depth is articulated through **tonal layering and microscopic surface contrast**:

- **Hairline Bounding**: Containers rely on crisp 1px solid borders (`#E2E8F0`) over `#FFFFFF` panels set against the foundational `#F8FAFC` bedrock.
- **Precision Ambient Elevation**:
  - *Resting Card Elevation*: `0 1px 3px 0 rgba(15, 23, 42, 0.03), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`
  - *Interactive / Lifted State*: `0 8px 24px -4px rgba(15, 23, 42, 0.06), 0 2px 6px -2px rgba(15, 23, 42, 0.04)`
- **Header & Modal Overlays**: Glass surfaces apply `backdrop-filter: blur(12px)` over an 85% alpha midnight or white surface, bound by a 1px border.

## Shapes

The system specifies a **Soft (Level 1)** curvature discipline. Corner radii remain restrained and architectural:
- Standard interactive elements, inputs, and badges use `4px` (`0.25rem`).
- Large cards, modules, and dialog sheets use `8px` (`0.5rem`).
- Strict avoidances: Fully circular pill buttons are barred for enterprise controls to preserve formal institutional poise.

## Components

### Buttons & Interactive Controls
- **Primary Executive Action**: Deep Midnight Navy background (`#0B192C`), crisp white text, 4px radius, 12px 24px padding. Hover shifts to `#0F172A` with a subtle hairline highlight.
- **Secondary Action**: White fill, hairline border (`#CBD5E1`), Slate 900 text (`#0F172A`). Hover transitions border to `#94A3B8`.
- **Tertiary / Danger**: Red-tinted surface (`#FEF2F2`), border `#FCA5A5`, text `#991B1B`.

### Verification Chips & Compliance Badges
- Constructed with 4px corner radii, upper-case label typography (`JetBrains Mono`, 11px), and 4px 10px padding.
- **Compliant / Certified**: `#ECFDF5` background, `#059669` typography, accompanied by a 1px solid border in `#A7F3D0`.
- **Accredited Pathway / Distinction**: `#FFFBEB` background, `#D97706` text, hairline `#FDE68A` border.

### Executive Cards & Framework Containers
- Encased in `#FFFFFF` with a 1px hairline border (`#E2E8F0`).
- Card headers strictly separate metadata and actions using generous padding (`space-lg`), separated from card bodies by a clean 1px divider line (`#F1F5F9`).

### Data Tables & Audit Logs
- Column headers: JetBrains Mono or small-caps Inter in `#64748B`, with bottom border `#CBD5E1`.
- Row rhythm: 52px minimum height, hover state `#F8FAFC`, active state `#F1F5F9`.
- Cells containing hashes, IP blocks, or reference codes render in `JetBrains Mono` with muted inline badge backdrops.

### Input Fields & Selectors
- Solid `#FFFFFF` background, 1px border (`#CBD5E1`), 4px border radius.
- Focus state: Replaces the default focus ring with a 1px solid `#0B192C` border and an ultra-diffused 3px box-shadow halo (`rgba(11, 25, 44, 0.08)`).