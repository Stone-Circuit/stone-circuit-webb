# Stone Design Language (SDL) — 08. Layout & Grid Systems
**Document Version:** 1.0.0  
**Architect:** Design System Architect, Stone Circuit  
**Status:** Approved Specification  

---

## Grid Layout Architecture

The layout system in SDL is designed to handle both high-density developer interfaces (dashboards, logs, documentation) and clean content feeds (marketing hubs, research posts). It uses a standard breakpoint grid combined with fixed sidebars.

---

## Screen Breakpoints

All layouts must scale fluidly across our core responsive breakpoints:

| Breakpoint | Minimum Width | Grid Columns | Gutter Width | Screen Margin |
| :--- | :--- | :--- | :--- | :--- |
| `sm` | `640px` | `4 columns` | `16px` (`space-4`) | `16px` (`space-4`) |
| `md` | `768px` | `8 columns` | `24px` (`space-6`) | `24px` (`space-6`) |
| `lg` | `1024px` | `12 columns` | `24px` (`space-6`) | `32px` (`space-8`) |
| `xl` | `1280px` | `12 columns` | `24px` (`space-6`) | `40px` (`space-10`) |
| `2xl` | `1536px` | `12 columns` | `32px` (`space-8`) | `48px` (`space-12`) |

---

## Page Layout Shells

We use three standard layout blueprints across our web products:

### 1. The Marketing & Product Grid (12-Column Layout)
Used for landing pages, product pages, pricing grids, and careers hubs.
*   **Max Container Width:** `1280px` (`max-w-7xl`).
*   **Alignment:** Centered on screen (`mx-auto`).
*   **Grid Structure:** 12-column CSS Grid.
    *   *Hero grids:* 2-column or 1-column layouts at mobile, switching to 12-column spans (`col-span-6` or `col-span-12`) on desktop.
    *   *Pricing grids:* 3 cards, each spanning `col-span-4` on desktop.

### 2. The Three-Column Documentation Layout
Used for guides, developer reference interfaces, and API documentation.

```
┌──────────────────┬─────────────────────────────────┬──────────────────┐
│                  │                                 │                  │
│  Sidebar         │         Central Reading         │  Outline         │
│  Navigation      │         Column                  │  Table of Cont.  │
│  Width: 280px    │         Max Width: 768px        │  Width: 240px    │
│  (Fixed)         │         (Fluid)                 │  (Fixed)         │
│                  │                                 │                  │
└──────────────────┴─────────────────────────────────┴──────────────────┘
```

*   **Left Sidebar (Fixed):** `280px` width. Collapses into a bottom-sheet drawer on mobile.
*   **Main Reading Column (Fluid):** Constrained to `768px` (`max-w-3xl` or `65ch`) to keep text line lengths readable.
*   **Right Utility Column (Fixed):** `240px` width. Scroll-tracked page outline. Hidden on screens below `1280px` (desktop).

### 3. Split-Console Layout (Interactive Playgrounds)
Used for dashboard workspaces, log monitors, and sandbox terminals.
*   **Layout:** Full screen width (`w-screen`), full screen height (`h-screen`), overflow hidden.
*   **Primary Pane (Left):** Workspace controls, input editor. Spans 60% viewport width.
*   **Terminal Pane (Right):** Log output screen, runtime outputs. Spans 40% viewport width.
*   **Mobile Fallback:** Columns stack vertically into tabs (`Editor` and `Console` views) to maintain usability on mobile.

---

## Section Layout Guidelines
*   **Vertical Margins:** Separate major sections on a page using `space-16` (64px) on mobile and `space-24` (96px) on desktop to keep layouts clean and open.
*   **Header Safe Zones:** To prevent headers from overlapping content, pages must use a top padding matching the header height (`64px` or `4rem`).
