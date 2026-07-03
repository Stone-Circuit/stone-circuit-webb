# Stone Design Language (SDL) — 04. Spacing
**Document Version:** 1.0.0  
**Architect:** Design System Architect, Stone Circuit  
**Status:** Approved Specification  

---

## Spacing Philosophy

The spacing system in SDL is built on an **8px base grid**. Spacing must be predictable and proportional to ensure layouts feel clean and balanced. We avoid arbitrary spacing values; every layout gap, margin, and padding value must use a token from the spacing scale.

---

## Spacing Scale

Our scale provides options ranging from tight inline spacings to large page gutters.

| Token | Multiplier | Rem Value | Pixel Value | Typical Application |
| :--- | :--- | :--- | :--- | :--- |
| `space-1` | `0.5` | `0.25rem` | `4px` | Accent dots, inline badges, micro gaps |
| `space-2` | `1.0` | `0.50rem` | `8px` | Small buttons padding, list items gap |
| `space-3` | `1.5` | `0.75rem` | `12px` | Card internal padding (mobile), dropdown items |
| `space-4` | `2.0` | `1.00rem` | `16px` | Standard button padding, general card padding |
| `space-5` | `2.5` | `1.25rem` | `20px` | Form input vertical spacing, subheaders |
| `space-6` | `3.0` | `1.50rem` | `24px` | Dashboard grid gaps, medium card padding |
| `space-8` | `4.0` | `2.00rem` | `32px` | Large card padding, page headers |
| `space-10` | `5.0` | `2.50rem` | `40px` | Page section margins (mobile) |
| `space-12` | `6.0` | `3.00rem` | `48px` | Page section margins (desktop) |
| `space-16` | `8.0` | `4.00rem` | `64px` | Large hero margins, footer spacers |
| `space-20` | `10.0` | `5.00rem` | `80px` | Major layout separations |
| `space-24` | `12.0` | `6.00rem` | `96px` | Hero section vertical padding |

---

## Padding vs. Margin Rules

To keep layouts predictable, we divide spacing into two categories:

### 1. Internal Padding (Inside Elements)
*   **Touch Targets:** Interactive targets must maintain a minimum size of `44px x 44px`.
*   *Buttons:* Use `space-2` vertical padding and `space-4` horizontal padding for standard buttons.
*   *Form Inputs:* Use `space-3` vertical padding and `space-4` horizontal padding.
*   *Cards:* Use `space-4` padding for standard components and `space-6` for rich data components.

### 2. External Margins & Gaps (Between Elements)
*   *Grid Lists:* Grid cards must use a gap of `space-6` (24px) on desktop to keep layouts readable.
*   *Sidebar Lists:* Vertical items in a navigation list should use a gap of `space-1` (4px) or `space-2` (8px).
*   *Sections:* Use `space-12` (48px) to separate major sections on a page.

---

## Common Layout Blueprints

Below are standard spacing layouts used across the Stone Circuit site.

### 1. Global Header Spacing
*   **Vertical Height:** Locked at `64px` (`4rem`).
*   **Internal Padding:** `space-3` (12px) vertical, `space-6` (24px) horizontal.
*   **Item Gaps:** `space-4` (16px) or `space-6` (24px) between links.

### 2. Interactive Card Spacing
*   **Internal Padding:** `space-6` (24px) all around.
*   **Title to Content:** `space-3` (12px) gap.
*   **Content to Footer:** `space-4` (16px) gap.

### 3. Sidebar Navigation Spacing
*   **Width:** Fixed at `280px` (`17.5rem`).
*   **Item Height:** `40px` average height.
*   **Vertical Gap:** `space-1` (4px) between active list items.
