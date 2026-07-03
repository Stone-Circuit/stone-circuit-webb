# Stone Design Language (SDL) — 06. Iconography System
**Document Version:** 1.0.0  
**Architect:** Design System Architect, Stone Circuit  
**Status:** Approved Specification  

---

## Iconography Philosophy

Icons are visual indicators that speed up navigation. In SDL, icons follow a geometric, clean style. They are designed as simple vector lines, avoiding fills unless used for status flags or indicators.
*   **Geometric Clarity:** Icons use basic shapes (circles, squares, 45-degree angles) to feel clean and structured.
*   **Open Paths:** We prefer icons with open paths and consistent stroke weights over filled icons.
*   **Consistent Scale:** Every icon must sit inside a pixel-perfect square container to prevent layout shifts.

---

## Icon Construction Grid

All icons must be designed on a standardized canvas:

```
┌─────────────────────────────────┐
│         ICON GRID CANVAS        │
│                                 │
│    ┌───────────────────────┐    │
│    │     SAFE ZONE         │    │
│    │     18px x 18px       │    │
│    │                       │    │
│    └───────────────────────┘    │
│                                 │
│          OUTER BOUNDS           │
│          20px x 20px            │
└─────────────────────────────────┘
```

*   **Default Canvas size:** `20px x 20px`. This fits clean inline typography scales.
*   **Safe Zone:** Bounding box of `18px x 18px`. Keep details inside this area; reserve the outer pixels for optical alignments or glow effects.
*   **Stroke Weights:**
    *   *Default:* `1.5px` (clean and readable).
    *   *Compact (16px):* `1.25px`.
    *   *Hero/Highlight (24px):* `2px`.
*   **Corner Radius:** Paths should use a stroke-join radius of `1.5px` to keep corners looking slightly rounded rather than sharp.

---

## Icon Categories & Key Set

To ensure consistency, we use Lucide Icons or custom SVG path mappings categorized into four groups:

### 1. Systems & Infrastructure (Kernel & Hardware)
Used for technical system details.
*   `cpu`: Represents processor activity, scheduling, and core limits.
*   `terminal`: Terminal commands, outputs, and CLI actions.
*   `database`: Persistent storage, key-value stores.
*   `activity`: Resource monitors, memory tracks, execution paths.
*   `layers`: Kernel stacks, filesystem hierarchies.

### 2. Cognitive & Agency (AI Operations)
Used for AI features.
*   `sparkles`: AI recommendations, auto-generation, suggestions.
*   `workflow`: Multi-agent loops, execution steps.
*   `brain`: Model loading, inference engines.
*   `git-branch`: Version control for code and agent decisions.

### 3. UI Navigation & Actions
Used for general navigation.
*   `arrow-right` / `arrow-left`: Page links, step progression.
*   `search`: Input lookups, file indexing.
*   `settings`: Configuration, parameters, environment keys.
*   `copy` / `check`: Code block copy operations.
*   `menu` / `x`: Mobile navigation controls.

### 4. Status Indicators
*   `info`: Standard notices.
*   `alert-triangle`: System degradation, deprecation warnings.
*   `alert-circle`: Critical system errors, crashed threads.
*   `shield-check`: Security audits, SOC2 status.

---

## Placement & Layout Rules

*   **Vertical Alignment:** Align icons to the center of adjacent text blocks. Use `flex items-center gap-2` to align the icon container optically with the font's x-height.
*   **Color Matching:** Icons should match the color of the adjacent text (`currentColor`) unless they indicate system status (e.g., using emerald-500 or crimson-500).
*   **Interaction States:** Hovering over a button should trigger a subtle translation animation on the icon (e.g., arrows translate 2px to the right) to indicate direction.
