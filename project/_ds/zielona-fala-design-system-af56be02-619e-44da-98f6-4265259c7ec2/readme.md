# Zielona Fala — Design System

A presentation & interface design system for **„Zielona fala"** — optymalizacja sterowania
sygnalizacją świetlną we Wrocławiu z wykorzystaniem metod sztucznej inteligencji i symulacji
**cyfrowego bliźniaka** (AI-optimized traffic-signal control for Wrocław, validated in a digital-twin simulation).

It is built for **slide decks and supporting figures** that speak the language of traffic
engineering — restrained, diagrammatic, and metric-led — not generic startup decks.

## Concept

The brand color is **ultramarine** (`#2A43D0`), standing for the *digital twin / AI* layer.
The governing idea is the **„zielona fala"** (green wave): a vehicle sailing through consecutive
intersections without stopping.

**Reserved-words rule (non-negotiable):** in traffic engineering red / yellow / green carry hard,
literal meaning. They are used **only inside literal signal-phase diagrams** — never decoratively,
never as accent or highlight colors. Everything expressive is carried by the ultramarine brand and
the neutral greys.

## Sources

This system was authored from a written brand brief (no codebase or Figma attached). There is no
upstream repository or design file to reference. If a product codebase or Figma later exists, record
its links here so consumers can trace components back to source.

---

## Content fundamentals

- **Language:** Polish, with full diacritic support required (ąćęłńóśźż). Technical register of
  traffic/transport engineering.
- **Tone:** precise, sober, evidence-led. State findings, not adjectives. No hype, no exclamation.
- **Person:** impersonal / first-person plural for method ("optymalizujemy", "model uczy się").
  Address the audience implicitly through the work, not "you".
- **Casing:** sentence case for headlines and body. **Eyebrows and mono labels are UPPERCASE**
  with +6% tracking, formatted `NN · FAZA` (e.g. `03 · DIAGNOZA`).
- **Density:** one focus point per slide; ≤ ~15 words to read. At most **one new technical term per
  slide**. No bullet walls.
- **Numbers:** always IBM Plex Mono, tabular figures, explicit sign and unit (`−27%`, `32 s`, `2 400`).
- **Emoji:** never. **Icons:** sparingly (~6 per deck), line-only.
- **Examples:**
  - Header: *"Stałe programy nie nadążają za ruchem"*
  - Metric label: *"Średni czas przejazdu w szczycie"* → `−27 %`
  - Eyebrow: `06 · FAZA`

---

## Visual foundations

- **Colors.** Light theme is default (bg `#ECEFF2`, panel `#FFFFFF`, text `#16212E`, secondary
  `#5A6675`, brand `#2A43D0`, brand-fill `#DDE2FA`, ground-truth data `#3E6E96`). Dark theme
  (bg `#121A26` — deep slate, *never pure black*; panel `#1B2735`; brighter accent `#6E83FF`) is
  reserved for the title, the "SOTA gap" slide, and the closing. Neutrals `#C3C9D1 / #8B95A1 /
  #4B5563` draw diagram strokes. Reserved signal red/yellow/green only in phase diagrams.
- **Type.** IBM Plex Sans (headings 600/700, body 400/500) + IBM Plex Mono (labels, metrics, times,
  eyebrows). Scale @1280×720: title 80 · header 44 · subtitle 28 · body 22 (min 20) · big metric
  104 · label 15. Line-height: headings 1.05–1.15, body 1.4.
- **Layout.** 16:9. Hard margin 64px, **projector safe zone 88px** from each edge (overscan).
  12-column grid, 8px baseline. Headlines flush left. One focus point per slide. Eyebrow pinned
  top-left.
- **Backgrounds.** Flat color fields only. No images, no gradients, no textures, no blur. The only
  recurring graphic is the green-wave motif and diagram linework.
- **Signature elements.** (1) A **10-segment progress bar** at the bottom of *every* slide — active
  = brand, done = mid-neutral, future = idle-neutral. (2) The **time–distance green-wave motif**:
  vertical axis = consecutive intersections, horizontal = time, one diagonal brand band of
  unstopped passage over a neutral ladder.
- **Diagrams.** Flat, 2px stroke, exactly **one** brand-colored element (the thing being discussed).
  Node = circle: default outline `#4B5563` + panel fill; key node = `#DDE2FA` fill + `#2A43D0`
  outline. Labels in IBM Plex Mono. No gradients, shadows, or 3D — ever.
- **Cards / panels.** White panel, 1px `--divider` border, 4px radius, **no shadow**. Restraint over
  softness — this is engineering, not consumer SaaS.
- **Radii.** 2px / 4px; pills only for the progress bar and badges.
- **Motion.** Minimal. If anything animates, short fades / 120ms eases. No bounces, no decorative
  loops. Print, PDF, and reduced-motion must show the final state.
- **Hover / press.** Buttons fade opacity to ~0.88 on hover and nudge 1px down on press. No color
  inversion, no glow.
- **Imagery vibe.** Cool, neutral, technical. Data is the imagery.

---

## Iconography

- **Style:** line icons, single weight, **1.75px stroke**, no fill — matching the 2px diagram
  linework. Roughly **6 icons in an entire deck**; icons support, never decorate.
- **No icon font is bundled.** When a deck needs line icons, link **Lucide** from CDN
  (`https://unpkg.com/lucide-static`) — its 1.5–2px stroke and geometric line style match this
  system. Set `stroke-width` to `1.75` and color to `currentColor` so icons inherit text color.
  *(Substitution flagged: no first-party icon set was provided.)*
- **Emoji:** never used. **Unicode glyphs:** only true symbols where they are unambiguous (→, ×, −,
  CO₂); never as decorative icons.
- Diagram glyphs (nodes, intersections, phase ribbons) are drawn with the `DiagramNode` /
  `PhaseChip` / `GreenWave` components, not icon fonts.

---

## Index / manifest

**Root**
- `styles.css` — entry point; `@import`s the token + font files only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- `readme.md` — this file. `SKILL.md` — portable Agent-Skill manifest.

**Components** (`components/core/`, namespace `window.ZielonaFalaDesignSystem_af56be`)
- `Eyebrow` — mono `NN · FAZA` kicker.
- `ProgressBar` — signature 10-segment deck progress.
- `GreenWave` — signature time–distance motif.
- `MetricBlock` — single big mono metric + caption.
- `PhaseChip` / `PhaseRibbon` — literal signal-phase tokens (the only reserved-color home).
- `DiagramNode` — flat circular diagram node (one `key` node per figure).
- `Button` — solid / outline / ghost.
- `Badge` — mono label chip (`brand` / `truth` / `neutral` / `solid`).

**Slides** (`slides/`, 1280×720 specimens)
- `TitleSlide` (dark) · `ContentSlide` · `MetricSlide` · `DiagramSlide` (green wave) ·
  `PhaseSlide` (reserved colors) · `ClosingSlide` (dark).

**Foundation cards** (`guidelines/*.card.html`) — colors (light/dark/reserved), type
(headings/body+mono/metric), spacing (scale/geometry/radii), brand (green-wave/progress).

---

## Caveats

- **Fonts** load from Google Fonts (IBM Plex Sans + IBM Plex Mono) rather than self-hosted binaries,
  so the compiler reports 0 `@font-face` bundles. Both families fully cover Polish diacritics. If you
  need offline/self-hosted fonts, provide the `.woff2` files and the `@font-face` rules will be added.
- No first-party icon set was supplied → Lucide is the flagged substitution.
