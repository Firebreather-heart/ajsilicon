---
name: Institutional Rigor
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#45474c'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#75777c'
  outline-variant: '#c5c6cc'
  surface-tint: '#575f6e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#141c29'
  on-primary-container: '#7c8495'
  inverse-primary: '#bfc6d9'
  secondary: '#1d4ed8'
  on-secondary: '#ffffff'
  secondary-container: '#4069f2'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#281809'
  on-tertiary-container: '#997f6a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe2f5'
  primary-fixed-dim: '#bfc6d9'
  on-primary-fixed: '#141c29'
  on-primary-fixed-variant: '#3f4756'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001551'
  on-secondary-fixed-variant: '#0039b5'
  tertiary-fixed: '#fddcc4'
  tertiary-fixed-dim: '#e0c1a9'
  on-tertiary-fixed: '#281809'
  on-tertiary-fixed-variant: '#584231'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: IBM Plex Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  code-snippet:
    fontFamily: IBM Plex Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.5rem
  space-sm: 1rem
  space-md: 1.5rem
  space-lg: 2rem
  space-xl: 3rem
---

## Brand & Style

This design system delivers an authoritative, calm, and rigorous learning environment tailored for enterprise IT audit, cybersecurity, and regulatory risk governance professionals. Rooted in institutional credibility alongside international compliance bodies like ISACA, the interface eliminates frivolous novelty in favor of structural clarity, high precision, and academic gravitas.

The visual style follows an **Institutional Corporate / Precision Modern** discipline:
- **Tone:** Authoritative, measured, unimpeachable, and technically precise.
- **Audience:** Senior audit executives, risk compliance officers, IT security engineers, and enterprise trainees across West Africa and international markets.
- **Visual Tenets:** Strict tabular and document layouts, structured borders, high legibility under dense information loads, and an explicit lack of ornamental clutter. The application frame conveys stability through solid, deep navy surfaces, while active workspaces use pristine, functional paper-grade light tones.

## Colors

The palette enforces legal and compliance-grade contrast ratios, exceeding WCAG AAA requirements across reading surfaces.

### Core Tokens
- **Primary Canvas / Dominant Deep Navy:** `#0B1320` — Used for application navigation frames, credential credentials, and structural structural shells.
- **Primary Text:** `#0F172A` — Ultra-high contrast slate for technical documentation, learning objectives, and data grids.
- **Muted Text / Secondary Label:** `#475569` — For supporting metadata, timestamps, and column descriptors.
- **Interactive Links (Light Canvas):** `#1D4ED8`
- **Interactive Links (Dark Canvas / Top Bar):** `#93C5FD`
- **Focus Ring:** `#2563EB` (Applied as `2px solid #2563EB` with `2px offset`).

### Functional Surface & Border Tokens
- **Card Surface Outline:** `#E2E8F0`
- **Form Field Outlines:** `#64748B`
- **App Shell Header:** `#0B1320` with a pure white (`#FFFFFF`) logo backplate to ensure trademark compliance and uncompromised brand integrity.

### Status & Feedback Semantics
Every feedback tier pairs an unambiguous border/text value with an accessible light tint fill:
- **Danger / Non-Compliance:** Foreground `#B91C1C` | Background Fill `#FEF2F2`
- **Success / Certified:** Foreground `#047857` | Background Fill `#ECFDF5`
- **Warning / Review Required:** Foreground `#B45309` | Background Fill `#FFFBEB`
- **Info / Procedural Note:** Foreground `#1D4ED8` | Background Fill `#EFF6FF`

## Typography

Typography relies entirely on a single typeface: **IBM Plex Sans**. Designed for technical precision, corporate architecture, and engineered clarity, it delivers an authoritative voice suited for IT auditing frameworks (COBIT, NIST, ISO 27001).

### Weight Discipline
To avoid visual fragmentation, strictly three weights are utilized across the entire platform:
1. **Regular (`400`)**: Standard body content, syllabus copy, reading comprehension, and audit logs.
2. **Medium (`500`)**: Table headers, input labels, metadata chips, status indicators, and tabs.
3. **Semi-Bold (`600`)**: Module titles, section headers, score cards, and high-level hierarchy markers.

### Sizing and Rhythms
- Base baseline font size is fixed at `16px` for standard body reading (`body-md`), ensuring sustained legibility during long examination and studying sessions.
- Tabular data and log streams scale down to `14px` (`body-sm`) or `13px` (`code-snippet`) without altering line-height geometry.

## Layout & Spacing

The layout is built upon an absolute **8px mathematical grid**. Every spacing variable, gutter, element height, and padding increment must resolve to multiples of 8px (with a half-unit 4px step permissible strictly for inline badge horizontal offsets).

### Layout Geometry
- **Grid Architecture:** 12-column responsive fluid grid bounded at a maximum content width of `1280px` for courseware reading comfort.
- **Top Shell Navigation:** Fixed `64px` height shell in `#0B1320`, framing the user's focus. Logo sits encapsulated on an isolated high-contrast light plate (`height: 40px`, padding `0 12px`, radius `4px`).
- **Touch & Accessibility Floor:** Every clickable element, button, table row action, and navigation anchor must observe a **minimum touch target of 44px x 44px** to satisfy enterprise field audit mobility across tablet and touchscreen surfaces.
- **Responsive Adaptations:**
  - *Desktop (>1024px):* 12 columns, `24px` gutter, `32px` page margins.
  - *Tablet (768px - 1023px):* 8 columns, `16px` gutter, `24px` page margins.
  - *Mobile (<768px):* 4 columns, `16px` gutter, `16px` page margins. Complex data tables convert to bordered vertical inspection cards.

## Elevation & Depth

This design system avoids deep drop-shadows, diffuse blurs, and glassmorphic translucent effects. In professional risk governance and cybersecurity, interfaces must look anchored, stable, and flatly auditable.

### Flat Structured Hierarchy
- **Surfaces:** Base page background is pure neutral `#F8FAFC` or `#FFFFFF`. Content containers sit directly on this canvas, differentiated by structural borders rather than blur elevation.
- **Border-First Boundary:** Depth is defined by clean, single-pixel borders using `#E2E8F0` for content containers and `#64748B` for interactive elements.
- **Subtle Ambient Lift:** For floating layers (modals, dropdown menus, exam tooltips), apply a single restrained institutional elevation:
  `box-shadow: 0 4px 6px -1px rgba(11, 19, 32, 0.08), 0 2px 4px -2px rgba(11, 19, 32, 0.04);`
- **Active Focus:** Form fields and interactive controls never gain blurry glow outlines. They use the explicit crisp `2px solid #2563EB` focus ring separated by an uncolored `2px` offset spacing.

## Shapes

The design uses a clean, architectural curvature standard that balances corporate formality with modern software refinement.

- **Cards and Module Panels:** Hard-locked to **12px radius** (`border-radius: 12px;`), delivering a neat, contained shape for enterprise modules, exam sections, and compliance briefs.
- **Buttons and Input Controls:** Standardized at `6px` radius (`border-radius: 0.375rem;`) to preserve an executive, tool-like presence.
- **Status Badges & Chips:** Structured pill corners (`border-radius: 9999px;`) or soft `4px` tags to visually differentiate them from actionable cards and input fields.
- **Top Bar Logo Plate:** Subtle `4px` corner beveling to keep the institutional insignia crisp and authoritative.

## Components

### Buttons
- **Primary:** Background `#0B1320`, text `#FFFFFF`, 6px corner radius, font weight `500`. Minimum height `44px` with horizontal padding `24px`. Hover state: `#1E293B`.
- **Secondary / Ghost:** Transparent background, `1px solid #64748B`, text `#0F172A`. Minimum height `44px`. Hover: `#F1F5F9`.
- **Destructive Action:** Background `#FEF2F2`, border `1px solid #B91C1C`, text `#B91C1C`. Hover: `#FEE2E2`.
- **Accessibility:** Focused via standard `2px` focus ring in `#2563EB` with `2px` offset.

### Input Fields & Controls
- **Form Text Inputs:** Height `44px`, background `#FFFFFF`, border `1px solid #64748B`, border-radius `6px`, text `#0F172A`, placeholder `#475569`.
- **Focus Behavior:** Border shifts to `#2563EB` with an external `2px focus-ring` in `#2563EB` with `2px` offset.
- **Checkboxes & Radios:** Explicit `20px x 20px` footprint wrapped in an interactive bounding area of at least `44px x 44px`. Selected state matches Primary Navy `#0B1320` with white checkmark.

### Cards & Module Containers
- **Border & Corner:** `1px solid #E2E8F0`, `border-radius: 12px`, background `#FFFFFF`.
- **Padding:** Compact units use `16px` (`space-sm`), standard curriculum modules use `24px` (`space-md`).
- **Card Headers:** Separated with a subtle `1px solid #E2E8F0` hairline divider when containing high-density audit criteria.

### Status Chips & Badges
- **Display:** Display inline-flex, align-items center, height `24px`, padding `0 10px`, font size `12px`, weight `500`.
- **Pass / Certified:** Background `#ECFDF5`, text `#047857`, border `1px solid #047857`.
- **Fail / High Risk:** Background `#FEF2F2`, text `#B91C1C`, border `1px solid #B91C1C`.
- **Pending Review:** Background `#FFFBEB`, text `#B45309`, border `1px solid #B45309`.
- **Informational / ISACA Scope:** Background `#EFF6FF`, text `#1D4ED8`, border `1px solid #1D4ED8`.

### Tables & Audit Logs
- **Header Cells:** Background `#F8FAFC`, uppercase tracking, font size `12px`, weight `500`, text `#475569`, border-bottom `2px solid #E2E8F0`.
- **Body Rows:** Minimum height `48px`, border-bottom `1px solid #E2E8F0`, vertical alignment center. Interactive rows hover with background `#F8FAFC`.