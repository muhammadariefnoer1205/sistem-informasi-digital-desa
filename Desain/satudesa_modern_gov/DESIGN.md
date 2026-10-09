---
name: SatuDesa Modern Gov
colors:
  surface: '#edffdf'
  surface-dim: '#c6e3b5'
  surface-bright: '#edffdf'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#dffccd'
  surface-container: '#daf7c8'
  surface-container-high: '#d4f1c2'
  surface-container-highest: '#ceebbd'
  on-surface: '#0b2004'
  on-surface-variant: '#40493b'
  inverse-surface: '#203616'
  inverse-on-surface: '#dcf9ca'
  outline: '#707a69'
  outline-variant: '#c0cab6'
  surface-tint: '#196d00'
  primary: '#156100'
  on-primary: '#ffffff'
  primary-container: '#2a7c13'
  on-primary-container: '#c1ffa8'
  inverse-primary: '#85db69'
  secondary: '#226d03'
  on-secondary: '#ffffff'
  secondary-container: '#a5f783'
  on-secondary-container: '#29730c'
  tertiary: '#605237'
  on-tertiary: '#ffffff'
  tertiary-container: '#7a6a4d'
  on-tertiary-container: '#ffeccd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a0f882'
  primary-fixed-dim: '#85db69'
  on-primary-fixed: '#032100'
  on-primary-fixed-variant: '#115300'
  secondary-fixed: '#a5f783'
  secondary-fixed-dim: '#8bda6a'
  on-secondary-fixed: '#052100'
  on-secondary-fixed-variant: '#165200'
  tertiary-fixed: '#f5e0bc'
  tertiary-fixed-dim: '#d8c4a2'
  on-tertiary-fixed: '#241a05'
  on-tertiary-fixed-variant: '#52452b'
  background: '#edffdf'
  on-background: '#0b2004'
  surface-variant: '#ceebbd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
  data-tabular-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
  data-tabular-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  data-tabular-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

### Brand Personality & Core Philosophy
The design system bridges grassroots civil governance with contemporary digital administrative efficacy. Tailored for Indonesian village apparatus (*Pamong Desa*), sub-district regulators, and rural citizens, the interface balances institutional authority with pastoral approachability. The emotional tone avoids cold, rigid bureaucracy in favor of trust, clarity, dignity, and civic pride. 

### Visual Direction: Neo-Institutional Civic Modernism
The visual identity draws from **Corporate Modernism** fused with **Tactile Warmth**:
- **Clarity and High Utility**: Administrative interfaces prioritize information density, zero cognitive ambiguity, and swift transactional workflows (issuing surat pengantar, validating NIK/KK, and auditing APBDes disbursement).
- **Subtle Agrarian Warmth**: Rather than defaulting to sterile slate grays and clinical blues, the UI employs warm cream and sand foundations layered with deep botanical greens.
- **Dignified Restraint**: No ornamental clutter, gratuitous gradients, or disruptive motion. Subtle border lines, crisp card structures, and purposeful color coding ensure civic readability across varied device screens, from high-resolution desktop terminals in the village hall (*Balai Desa*) to budget mobile devices in the field.

## Colors

The palette grounds modern digital administration in organic stability, balancing accessibility, WCAG AA compliance, and state operational rigor.

### Palette Hierarchy & Intent
- **Primary (`#2A7C13`)**: The sovereign color. Applied to critical call-to-actions, primary navigation headers, active sidebar items, verified identity marks, and authoritative approval states.
- **Secondary (`#76C457`)**: Growth and leaf accent. Used for secondary highlights, active state indicators, hover elevations, and positive progression charts.
- **Tertiary / Warm Container (`#FBE6C2`)**: Warm sand tone. Provides tactile zoning for alert callouts, pending administration trays, citizen memo banners, and auxiliary metric containers.
- **Light Neutral / App Canvas (`#FFF8CF`)**: Warm ivory foundation for the global background canvas, cutting digital glare during long administrative shifts while preserving a welcoming civic warmth.
- **Neutral Surface Crisp (`#FFFFFF`)**: Pure white reserved for data-dense containers: citizen registry tables, metric cards, modal dialogs, and letter preview panels.
- **Deep Text Neutral (`#1A3011`)**: Deep moss-black with low green refraction. Replaces harsh `#000000` to deliver crisp contrast (12:1 against white) for all body text, headings, and data values.

### Functional Status System
- **Success (`#2A7C13` on `#E8F5E9`)**: Approved certificates, active NIK validity, disbursed APBDes funds, verified bansos status.
- **Pending / In Review (`#D97706` on `#FEF3C7`)**: Administrative signatures pending, citizen requests in verification, draft proposals.
- **Informational (`#2563EB` on `#EFF6FF`)**: System updates, sub-district circular notices (*Surat Edaran*), scheduled musyawarah.
- **Critical / Danger (`#DC2626` on `#FEE2E2`)**: Invalid population credentials, rejected requests, audit budget anomalies, deceased status.

## Typography

The typographic hierarchy accommodates long Indonesian civil terms (*Surat Keterangan Catatan Kepolisian*, *Rencana Pembangunan Jangka Menengah Desa*) without line-wrapping friction or visual noise.

- **Primary Typeface (`Plus Jakarta Sans`)**: Clean, human, highly legible across both high-density desktop views and small phone screens. Heading weights (`600` and `700`) project governance stability, while body text (`400` and `500`) maintains maximum legibility across dense citizen records.
- **Data & Numerical Typeface (`JetBrains Mono`)**: Mandatory for citizen identification numbers (*NIK*, *Nomor Kartu Keluarga*), monetary APBDes records, RT/RW coordinates, postal codes, and registration timestamps. Monospaced rendering ensures numerical alignment down tabular columns, eliminating misreading errors in accounting or legal audits.

## Layout & Spacing

### Dashboard Grid Architecture
The system utilizes a structured layout tailored for operational command centers:
- **Desktop (>= 1280px)**: Persistent collapsible vertical sidebar (260px expanded, 72px icon-only), fixed top administrative control bar (64px height), and a fluid 12-column content grid bounded within a max-width of 1600px. Column gutters maintain `1.25rem` (`20px`).
- **Tablet / Responsive Desk (768px - 1279px)**: Sidebar shifts to an off-canvas drawer. The content grid shifts to an 8-column layout with `1rem` gutters and `1.5rem` margins.
- **Mobile (< 768px)**: 4-column layout with `0.75rem` gutters and `1rem` margins. Multi-column forms reflow to single-column vertical stacks. Tabular registries collapse into detailed citizen profile cards.

### Spacing Philosophy
- Use `space-xs` (4px) and `space-sm` (8px) for tightly coupled form elements, tag interiors, and metadata chips.
- Use `space-md` (16px) for interior card padding, table cell vertical rhythm, and standard input spacing.
- Use `space-lg` (24px) for card body padding, module separation, and modal inner wrappers.
- Use `space-xl` (40px) for macro section delineation across the village executive dashboard.

## Elevation & Depth

To avoid the cognitive fatigue of heavy drop shadows on data-dense governmental dashboards, this system applies a **Tonal Layering & Soft Architectural Borders** model.

### Depth Hierarchy
- **Level 0 (Base Canvas)**: Background rendered in `#FFF8CF`. No elevation, pure foundation.
- **Level 1 (Data Surfaces & Cards)**: Crisp white (`#FFFFFF`) or warm sand (`#FBE6C2`), bounded by an organic hair-line border `1px solid rgba(26, 48, 17, 0.08)`. Shadows are subtle and tinted: `0 1px 3px 0 rgba(26, 48, 17, 0.04)`.
- **Level 2 (Hover States & Active Dropdowns)**: Interactive cards, table rows on hover, and active filter popovers rise slightly: `0 4px 12px -2px rgba(26, 48, 17, 0.08)`, border reinforced with `rgba(42, 124, 19, 0.20)`.
- **Level 3 (Sticky Controls & Slide-overs)**: Secondary action bars, slide-out citizen validation panels: `0 10px 24px -4px rgba(26, 48, 17, 0.12)`.
- **Level 4 (Modals & Verification Dialogs)**: High-stakes confirmation prompts (e.g., *Pengesahan APBDes*, *Hapus Data Penduduk*) sit atop an ink backdrop `rgba(26, 48, 17, 0.48)` with elevation `0 20px 32px -8px rgba(26, 48, 17, 0.20)`.

## Shapes

The design system adopts a **Rounded (`roundedness: 2`)** geometry. This strikes a deliberate balance: structural enough to appear authoritative and reliable for legal certificates, yet curved enough to feel humane and approachable for everyday village staff.

### Radius Implementation
- **Micro Elements (Badges, Chips, Indicators)**: `0.375rem` (6px) or fully pill-shaped (`9999px`) for categorical state flags.
- **Standard Controls (Inputs, Buttons, Dropdowns)**: `0.5rem` (8px) for comfortable touch targets and ergonomic alignment.
- **Surface Cards & Modular Panels**: `0.75rem` to `1rem` (12px to 16px) for distinct visual containment without encroaching on content area.
- **Modals & Flyout Drawers**: `1rem` (16px) corner rounding with crisp interior dividers.

## Components

### Buttons
- **Primary Action**: Solid `#2A7C13` background with white text, font weight 600, 8px border radius, 40px standard height (48px for citizen kiosks). Hover transitions to `#226510`.
- **Secondary Action**: `#FFFFFF` background with 1px border `rgba(42, 124, 19, 0.3)`, text `#2A7C13`. Hover shifts to `#F0FDF4`.
- **Tertiary / Ghost**: Transparent background, text `#1A3011`, hover shifts to `rgba(42, 124, 19, 0.06)`.
- **Danger Action**: Solid `#DC2626` background or soft danger outline (`#DC2626` text, `#FEE2E2` background) for destructive operations like voiding official documents.

### Inputs & Form Fields
- Fields use an architectural border (`1px solid rgba(26, 48, 17, 0.18)`), `#FFFFFF` background, 8px radius, and standard padding of `10px 14px`.
- **Focus State**: 2px outline in `#2A7C13` with a soft green ring glow `rgba(42, 124, 19, 0.15)`.
- **Helper & Validation Labels**: Clean 12px text directly beneath inputs. Errors trigger a crisp `#DC2626` border and descriptive microcopy.

### Data Tables (Population Registry & Financial Audits)
- **Container**: Elevated Level 1 white card with integrated top filter toolbar (search by NIK, filter by RT/RW, filter by Bansos, export XLS/PDF).
- **Table Head**: Subtle sand wash background (`#FBE6C2` at 40% opacity or `#F7F4E9`), 11px uppercase label font with sorting indicators.
- **Row Heights**: Fixed 52px dense rows; zebra rows avoided in favor of crisp `1px solid rgba(26, 48, 17, 0.06)` dividers and hover highlight `rgba(118, 196, 87, 0.08)`.
- **Numbers & Identifiers**: Fixed-width columns with `JetBrains Mono` for NIK, No. KK, and APBDes Rupiah balances.

### Status Badges & Classification Chips
- **Bansos Classification**: Compact pill badges (`padding: 2px 8px`, 11px font weight 600).
  - *PKH*: Purple tint (`#7C3AED` text, `#F5F3FF` bg).
  - *BLT Dana Desa*: Forest green (`#2A7C13` text, `#E8F5E9` bg).
  - *BPNT*: Amber tint (`#D97706` text, `#FEF3C7` bg).
- **Disability & Vulnerable Status**: Neutral-high-contrast chip with clear accessible icon indicator.
- **Workflow Status**: Dot indicator accompanied by uppercase tag (e.g., green dot for `TERVERIFIKASI`, amber dot for `MENUNGGU TTD KADES`).

### Metric & Statistic Cards (*Statistik Desa*)
- Structure: 16px padding, white background, soft micro-border.
- Content Layout: Metric category label at top (12px muted green-gray), prominent figure in center (28px bold tabular typography), and trend/percentage comparison badge at bottom paired with sub-district benchmarks.

### Letter Tracker Component (*Tracking Permohonan Surat*)
- Visual horizontal/vertical milestone stepper showing four steps: *Pengajuan Warga*, *Verifikasi RT/RW*, *Pemeriksaan Kasi Pelayanan*, *Penandatanganan Kades (TTE)*.
- Completed steps display a solid `#2A7C13` circle with check icon; active steps pulse with `#76C457`; pending steps show muted outlined circles.

### APBDes Transparency Widget
- Multi-tier progressive bar showing *Pendapatan Desa*, *Belanja Desa*, and *Pembiayaan Desa*.
- Strict numerical parity between realized budget and targeted allocation, rendered with `JetBrains Mono` and color-coded expenditure categories.