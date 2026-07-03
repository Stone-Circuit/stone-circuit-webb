# Stone Design Language (SDL) — 05. Component Specifications
**Document Version:** 1.0.0  
**Architect:** Design System Architect, Stone Circuit  
**Status:** Approved Specification  

---

## Interactive Components & States

This document details the visual and behavioral specifications for core components in the Stone Design Language (SDL).

---

## 1. Buttons

Buttons represent physical actions. They must feel tactile and responsive.

```
┌────────────────────────────────────────────────────────┐
│                        BUTTON STATES                   │
├────────────────────────────────────────────────────────┤
│ Default    │ Solid surface, sharp inner border         │
│ Hover      │ Subtly elevated, soft scale scale (99%)   │
│ Active     │ Depressed state, darker background       │
│ Focus      │ 2px Orange focus ring with offset         │
└────────────────────────────────────────────────────────┘
```

### Primary Button
*   *Style:* Deep charcoal background (`slate-800`), white text (`slate-50`), thin inner border (`1px solid rgba(255, 255, 255, 0.08)`).
*   *Hover:* Background changes to `slate-700`, translation transforms `translateY(-1px)`, and dynamic shadow scale activates.
*   *Active:* Background shifts to `slate-900`, transform resets to `translateY(0)`.
*   *Focus:* Outer ring offset by `2px` using `orange-500`.

### Secondary Button
*   *Style:* Transparent background, slate border (`1px solid slate-700`), light grey text (`slate-200`).
*   *Hover:* Background turns to `slate-900` with 50% opacity, border changes to `slate-600`.
*   *Active:* Background changes to `slate-950` with 80% opacity.

### Cognitive Accent Button (AI Actions)
*   *Style:* Cognitive Blue background (`blue-600`), white text (`slate-50`), bright accent border (`1px solid rgba(14, 165, 233, 0.3)`).
*   *Hover:* Background changes to `blue-500`, adding a subtle blue glow shadow (`box-shadow: 0 0 12px rgba(14, 165, 233, 0.2)`).

---

## 2. Cards

Cards organize content. They use elevations to look layered on the page.

### Standard Panel Card
*   *Background:* `slate-900` (`#101014`).
*   *Border:* `1px solid slate-800` (`#1b1b22`).
*   *Corner Radius:* `8px` (`rounded-lg`).
*   *Shadow:* Small layout shadow.

### Interactive Card (Hover Actions)
*   *Default:* Same as standard card.
*   *Hover:* Border changes to `slate-700` (`#2a2a35`), background shifts to `slate-800` with 40% opacity, and the card moves slightly up (`transform: translateY(-2px)`).
*   *Transit Time:* 200ms ease-out.

### Glassmorphic Card
Used for overlays and modals.
*   *Background:* `rgba(16, 16, 20, 0.7)`.
*   *Backdrop Blur:* `16px`.
*   *Border:* `1px solid rgba(255, 255, 255, 0.06)`.
*   *Corner Radius:* `12px` (`rounded-xl`).

---

## 3. Inputs & Forms

Inputs must emphasize focus states, ensuring they are accessible and easy to read.

*   *Default Input:* Background set to `slate-950` (`#0a0a0c`), border set to `slate-800` (`#1b1b22`), text set to `slate-100` (`#e4e4e7`). Corner radius is `6px`.
*   *Focus State:* Border changes to `orange-500` (`#f97316`) and triggers an inset focus shadow.
*   *Error State:* Border changes to `crimson-500` (`#ef4444`). A small warning caption is displayed below the field.
*   *AI suggestion chip:* When inputting, an inline suggestion chip appears on the right of the field (`Geist Mono`, HSL `200 95% 50%`) representing AI predictions.

---

## 4. Badges & Status Dots

*   *System Status Dot:* A `8px` round circle showing status:
    *   *Operational:* Emerald green (`HSL 142 70% 45%`) with a slow breathing animation.
    *   *Degraded:* Orange (`HSL 25 90% 50%`).
    *   *Outage:* Crimson red (`HSL 350 80% 50%`).
*   *Version Tag:* `Geist Mono` font, background set to `slate-800`, text set to `slate-200`, corner radius `4px`, padding set to `2px 6px`.

---

## 5. Code Blocks & Documentation API Viewers

*   *Code Container:* Background set to `slate-950` (`#0a0a0c`), border set to `slate-800` (`#1b1b22`), corner radius `8px`.
*   *Copy Button:* Floating button in the top-right corner. It defaults to 0% opacity and fades to 100% on container hover.
*   *Tabs:* Allows users to switch languages (Python, Rust, cURL). Active tabs are shown with a bottom border using `orange-500` and high-contrast text.

---

## 6. Command Menu (CMD+K Modal)

The command menu is the central hub for keyboard navigation.

*   *Layout:* A centered modal with a width of `640px` and a maximum height of `480px`.
*   *Search Input:* Fixed at the top. It uses a borderless design with large typography (`1.25rem`) and placeholder text.
*   *Results Area:* Dividers separate categories (Docs, Actions). Hovering over an item highlights its background in `slate-800`.
*   *Keyboard Hints:* The right side of each item displays keyboard shortcut shortcuts (e.g., `⏎ to select`, `↓ to navigate`).
