# Stone Design Language (SDL) — 07. Motion & Animation
**Document Version:** 1.0.0  
**Architect:** Design System Architect, Stone Circuit  
**Status:** Approved Specification  

---

## Motion Philosophy

Motion in SDL is used to guide focus and show system states. It is not decorative. Transitions should feel responsive, fast, and grounded in physical movement.
*   **Performance First:** Animations must run at 60fps. We avoid animating properties that cause layout recalculations (like `width`, `height`, `margin`, or `top`). Instead, we animate `transform` (translate, scale, rotate) and `opacity`.
*   **Physical Inertia:** Objects should accelerate and decelerate naturally using spring curves or power-ease functions rather than linear transitions.
*   **Reduced Motion:** We respect user system preferences. If `prefers-reduced-motion` is enabled, all animations are replaced with instant changes or simple opacity fades.

---

## Easing Curves

Our easing curves define how elements move between states.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            SDL EASING FUNCTIONS                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  Ease-Out (Entrance) │ cubic-bezier(0.16, 1, 0.3, 1)  │ Quick reveal        │
│  Ease-In-Out (Fluid) │ cubic-bezier(0.76, 0, 0.24, 1) │ Transition loops   │
│  Standard Ease       │ cubic-bezier(0.4, 0, 0.2, 1)   │ General hovers      │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1. Ease-Out (Entrance Curve)
*   `cubic-bezier(0.16, 1, 0.3, 1)` (Ultra-fast start, decelerating smoothly).
*   *Application:* Modals opening, dropdown lists appearing, sidebar panels sliding in.
*   *Behavior:* Elements pop into view instantly, catching the user's attention, and settle smoothly.

### 2. Ease-In (Exit Curve)
*   `cubic-bezier(0.75, 0, 0.85, 0)` (Accelerating out of view).
*   *Application:* Modals closing, menus hiding.
*   *Behavior:* Elements slip out of view quickly without distracting the user.

### 3. Ease-In-Out (Standard / Loop Curve)
*   `cubic-bezier(0.76, 0, 0.24, 1)` (Symmectical deceleration).
*   *Application:* Moving cards, resizing containers, active status loops.

---

## Duration Scale

Use these values to maintain consistent animation speeds across the site.

| Token | Duration (ms) | Typical Application |
| :--- | :--- | :--- |
| `duration-instant` | `50ms` | Button hover background color shifts, cursor indicators |
| `duration-fast` | `150ms` | Checkbox toggles, tooltips appearing, tab switches |
| `duration-normal` | `250ms` | Dropdowns opening, card elevations, search item selections |
| `duration-slow` | `350ms` | Modal overlays opening, sidebar panels sliding out |
| `duration-heavy` | `500ms` | Multi-step setup transitions, page load animations |

---

## Component Animation Specifications

Below are guidelines for common component transitions:

### 1. CMD+K Command Menu Modal
*   *Entrance:*
    *   *Opacity:* From `0` to `1` (duration: `250ms`, ease: `ease-out`).
    *   *Scale:* From `0.97` to `1` (duration: `300ms`, curve: `cubic-bezier(0.175, 0.885, 0.32, 1.1)`).
*   *Exit:*
    *   *Opacity:* From `1` to `0` (duration: `150ms`, ease: `ease-in`).
    *   *Scale:* Instant.

### 2. Card Hover Translations
*   *Interactive Cards:* On hover, cards slide up using a `translateY(-2px)` transition.
*   *Timing:* Duration set to `200ms`, easing set to `ease-out` (`cubic-bezier(0.16, 1, 0.3, 1)`).
*   *Reset:* Moving the mouse away resets the card location back to `translateY(0)` over `250ms`.

### 3. Staggered List Entrance
*   When rendering search results or navigation links, stagger the entry of items.
*   *Delay:* Apply a `30ms` offset delay to each consecutive item, up to a maximum of 5 items, to keep page loads feeling responsive.
