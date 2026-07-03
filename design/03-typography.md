# Stone Design Language (SDL) — 03. Typography
**Document Version:** 1.0.0  
**Architect:** Design System Architect, Stone Circuit  
**Status:** Approved Specification  

---

## Typeface Selection

SDL uses two font families to balance clean editorial layouts with clear technical details.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            SDL TYPEFACE PAIRING                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  Sans-Serif: Geist Sans    │ Main layout, headings, descriptions, forms     │
│  Monospace:  Geist Mono    │ Code snippets, terminal logs, system metrics   │
└─────────────────────────────────────────────────────────────────────────────┘
```

*   **Primary Sans-Serif (Geist Sans):**
    *   *Usage:* Global navigation, headings, body copy, form fields, and labels.
    *   *Fallback Chain:* `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, sans-serif.
    *   *Design characteristics:* Micro-designed for high legibility on screens, featuring clean geometric shapes, tight spacing, and large counter-spaces.
*   **Secondary Monospace (Geist Mono):**
    *   *Usage:* API keys, terminal listings, execution states, system metrics, mathematical formulas, and code blocks.
    *   *Fallback Chain:* `JetBrains Mono`, `Fira Code`, `SF Mono`, `Menlo`, `Monaco`, monospace.
    *   *Design characteristics:* Optimized for reading source code, keeping line spacing consistent, and ensuring characters are clearly distinguishable.

---

## Typography Scale

Our type scale uses a responsive modular scale built on rems (where `1rem = 16px`).

| Token | CSS Size | Pixel Equiv. | Line Height | Tracking | Weight | Typical Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display` | `3.00rem` | `48px` | `1.1` | `-0.03em` | `Bold (700)` | Hero titles |
| `h1` | `2.25rem` | `36px` | `1.2` | `-0.02em` | `SemiBold (600)` | Page titles |
| `h2` | `1.50rem` | `24px` | `1.3` | `-0.015em` | `SemiBold (600)` | Section headers |
| `h3` | `1.25rem` | `20px` | `1.4` | `-0.01em` | `Medium (500)` | Card titles, subsections |
| `h4` | `1.00rem` | `16px` | `1.4` | `0` | `Medium (500)` | Small card headings |
| `body-lg` | `1.125rem` | `18px` | `1.6` | `0` | `Regular (400)` | Intros, blog body copy |
| `body-base` | `1.00rem` | `16px` | `1.5` | `0` | `Regular (400)` | Standard copy, settings |
| `body-sm` | `0.875rem` | `14px` | `1.5` | `+0.01em` | `Regular (400)` | Sidebar navigation, inputs |
| `caption` | `0.75rem` | `12px` | `1.4` | `+0.02em` | `Medium (500)` | Badges, table headers, labels |
| `code-base` | `0.875rem` | `14px` | `1.5` | `0` | `Regular (400)` | Terminal readouts, code blocks |

---

## Hierarchy Rules & Guidelines

To maintain visual structure, adhere to the following composition rules:

### 1. Headline Contrast
*   Always pair large display headers with a smaller, low-contrast subtitle.
*   *Correct:* `h1` (slate-50, bold) followed by `body-lg` (slate-200, regular) with a gap of `16px`.
*   Never place headers next to each other without varying font size, weight, or color.

### 2. Line Width and Reading Speed
*   For long paragraphs of body copy (e.g. `/blog` or `/docs`), limit the width of the text container to **65 characters** (`max-w-[65ch]` or `max-w-3xl`).
*   Avoid stretching body text across the full width of large monitors, as it makes reading difficult.

### 3. Case Guidelines
*   **UPPERCASE:** Use only for small labels, buttons, or indicators (`caption` size, with `tracking-wider` letter spacing).
*   *Correct:* `GET STARTED`, `API_KEY`.
*   Never use uppercase for headings or long sentences.

### 4. Text Rendering Settings
To ensure clean text rendering on macOS and Windows, apply the following CSS properties to your typography styles:
```css
body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```
