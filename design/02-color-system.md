# Stone Design Language (SDL) — 02. Color System
**Document Version:** 1.0.0  
**Architect:** Design System Architect, Stone Circuit  
**Status:** Approved Specification  

---

## Color Philosophy

The Stone Design Language color palette is optimized for long sessions of technical work, offering high legibility and low eye strain.
*   **Dark Mode First:** Dark mode is the primary interface state. It uses deep slate and granite tones to mimic physical hardware terminals.
*   **Light Mode Fallback:** Light mode uses clean slate-whites and light gray borders, keeping the same contrast ratios.
*   **Functional Accent Colors:** Colors are used to convey information. We avoid decorative colors; every accent color shows system status, AI activity, alerts, or interactive states.

---

## Primitive Palette (HSL Values)

These base colors form the foundation of our design system.

### 1. Neutrals (The Slate Scale)
The Neutral scale is based on Slate Grays, tinted with a touch of blue to feel technical and cool rather than flat.

| Token | Dark Mode HSL | Light Mode HSL | Visual Weight |
| :--- | :--- | :--- | :--- |
| `slate-50` | `240 5.8% 90%` | `240 5.8% 10%` | Highest contrast text (light) / Primary text (dark) |
| `slate-100` | `240 4.8% 85%` | `240 4.8% 15%` | Body text (light) / Body text (dark) |
| `slate-200` | `240 3.7% 75%` | `240 3.7% 25%` | Muted text (light) / Muted text (dark) |
| `slate-300` | `240 3% 60%` | `240 3% 40%` | Borders (light) / Muted borders (dark) |
| `slate-400` | `240 2.4% 45%` | `240 2.4% 55%` | Muted lines, disabled states |
| `slate-500` | `240 2.1% 35%` | `240 2.1% 65%` | Separators |
| `slate-600` | `240 2% 25%` | `240 2% 75%` | Sub-panels |
| `slate-700` | `240 2.2% 18%` | `240 2.2% 82%` | Element borders |
| `slate-800` | `240 3.1% 12%` | `240 3.1% 88%` | Cards, secondary buttons |
| `slate-900` | `240 3.7% 8%` | `240 3.7% 92%` | Sub-background panels |
| `slate-950` | `240 5.9% 4%` | `240 5.9% 96%` | Page backgrounds (dark) / Page backgrounds (light) |

---

## Accent & Semantic Colors

We use four key semantic accent colors across all interfaces:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            SDL ACCENT PALETTE                               │
├─────────────────────────────────────────────────────────────────────────────┤
│  Cognitive Blue    │ HSL 200 95% 50% │ AI, cognitive scheduling, agency      │
│  Circuit Orange    │ HSL 25 90% 50%  │ Interactive focus, warning, flow     │
│  Silicon Emerald   │ HSL 142 70% 45% │ Success, operational, active, debug  │
│  Laser Crimson     │ HSL 350 80% 50% │ Danger, terminal error, halt, alert  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1. Cognitive Blue (AI & Agency)
*   **Tokens:** `blue-500` (`HSL 200 95% 50%`), `blue-600` (`HSL 200 95% 40%`)
*   **Usage:** Applied to AI-generated interfaces, autocompletion states, agent threads, and active scheduling states.

### 2. Circuit Orange (Focus & Interactivity)
*   **Tokens:** `orange-500` (`HSL 25 90% 50%`), `orange-600` (`HSL 25 90% 40%`)
*   **Usage:** Focus rings, active selection states, warnings, and highlighting connection routes.

### 3. Silicon Emerald (Success & Health)
*   **Tokens:** `emerald-500` (`HSL 142 70% 45%`), `emerald-600` (`HSL 142 70% 35%`)
*   **Usage:** System status operational indicators, success messages, low-latency metrics, and completed steps.

### 4. Laser Crimson (Errors & Alerts)
*   **Tokens:** `crimson-500` (`HSL 350 80% 50%`), `crimson-600` (`HSL 350 80% 40%`)
*   **Usage:** Fatal error states, crashed agent threads, memory leaks, system outages, and destructive actions.

---

## Semantic Token Mappings (Dark Mode Defaults)

To ensure consistency, developers and designers must use semantic tokens instead of primitive color values.

### 1. Backgrounds
*   `bg-base`: `slate-950` (`#0a0a0c`). The main page background.
*   `bg-panel`: `slate-900` (`#101014`). Card surfaces, sidebar structures, and header sections.
*   `bg-element`: `slate-800` (`#1b1b22`). Secondary buttons, input boxes, and list items.
*   `bg-overlay`: `slate-950` with alpha opacity (`rgba(10, 10, 12, 0.75)`). Modals, menus, and dropdowns.

### 2. Borders & Outlines
*   `border-muted`: `slate-800` (`#1b1b22`). Default card borders, dividers, and tables.
*   `border-active`: `slate-700` (`#2a2a35`). Hover states and active selections.
*   `border-focus`: `orange-500` (`#f97316`). Applied to keyboard focus rings.
*   `border-glow`: `blue-500` with opacity (`rgba(14, 165, 233, 0.4)`). Active AI modules.

### 3. Typography
*   `text-primary`: `slate-50` (`#e4e4e7`). Headings and main copy.
*   `text-secondary`: `slate-200` (`#c4c4c7`). Secondary text, descriptions, and labels.
*   `text-muted`: `slate-400` (`#9f9fbf`). Captions, breadcrumbs, and helper text.
*   `text-disabled`: `slate-500` (`#71717a`). Disabled actions.

---

## Contrast & Accessibility Rules
*   **Minimum Contrast:** Text-to-background contrast must meet WCAG AA standards (minimum 4.5:1 ratio).
*   **Monochrome Checks:** Ensure interfaces remain usable in grayscale. Never rely solely on color to convey state (e.g., an error badge must use both the crimson color and a warning icon or label).
