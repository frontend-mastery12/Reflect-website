# Reflect Landing Page Clone – AI Prompting Context

A guide for AI coding assistants to build a dark-themed Reflect app desktop clone step-by-step using pure HTML, CSS, and JavaScript.

---

## 1. Golden Rules for AI Execution
- **Step-by-Step Building Only**: NEVER generate the entire landing page in one prompt. Only generate the exact section requested in the current prompt (e.g., Prompt 1: Nav + Hero, Prompt 2: Section 2, etc.). Wait for user review before proceeding.
- **Strict 3-File Architecture**: Use ONLY `index.html`, `style.css`, and `script.js`.
- **Zero External Packages**: No `npm`, Node dependencies, Python, or external frameworks. Pure vanilla web technologies only.
- **Desktop Only**: Target desktop viewports (1440px / 1920px). Do NOT add responsive code or mobile/tablet `@media` queries.
- **Concise & Reusable Code**: Reuse established class names across all sections. Do not duplicate CSS rules.

---

## 2. Design System & Tokens
- **Font Family**: `'Inter', -apple-system, sans-serif`
- **Colors**:
  - Main Background: `#080612` (dark cosmic violet)
  - Card & Surface: `rgba(18, 14, 32, 0.85)`
  - Text Primary: `#ffffff` | Secondary: `#9d9cb2` | Muted: `#6e6d82`
  - Purple Accents: Glow `#a855f7`, Highlight `#c084fc`, Deep `#4c1d95`
  - Button Gradient: `linear-gradient(135deg, #3b1861 0%, #581c87 100%)`
  - Borders: `rgba(255, 255, 255, 0.08)` (subtle) | `rgba(168, 85, 247, 0.32)` (glow)

---

## 3. Reusable Component Classes
Apply these shared classes to maintain visual consistency across all pages:
- `.section-header`: Centered container for badge, title, and subtitle (`max-width: 860px`).
- `.section-badge`: Pill badge for tags (`Meet Reflect Open`, `Research and reading`, `Privacy`, `About`).
- `.section-title`: Large bold headline (`font-size: 4.25rem; font-weight: 700; color: #fff`).
- `.section-subtitle`: Description paragraph (`font-size: 1.25rem; color: #9d9cb2`).
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-download`: Unified button components.
- Video styling: Set `mix-blend-mode: unset;` on all section videos.

---

## 4. Project Assets & Directory Structure
Always refer to the design screenshots in `Page-Design-Reference/` before coding each section:

```
Practice/
├── index.html                  # Main markup
├── style.css                   # Desktop styling & reusable classes
├── script.js                   # Autoplay loops & demo lightbox modal
├── images/
│   ├── Backgorund.png          # Page 1: Hero concentric celestial radar background
│   ├── Ist-page-image.png      # Page 1: Reflect app interface UI preview
│   ├── 2nd-page-image.png      # Page 2: Central glowing hub icon
│   └── 3rd-page-image.png      # Page 3: Glowing padlock privacy emblem
├── videos/
│   ├── 1st-page-video.webm     # Page 1: Accretion disk / black hole portal loop
│   ├── 2nd-page-video.mp4      # Page 2: Animated radar scanner sweep loop
│   ├── 3rd-page-video.webm     # Page 3: Encrypted cipher text cloud loop
│   ├── 4rd-page-video.mp4      # Page 4: 3D rotating point-cloud globe loop
│   └── click-video.mp4         # Demo video triggered by the play button modal
└── Page-Design-Reference/
    ├── 1st-Page.png            # Visual reference: Navigation & Hero
    ├── 1st-Page-2nd-Part.png   # Visual reference: App card & play button
    ├── 2nd-Page.png            # Visual reference: Radar & dual device features
    ├── 3rd-Page.png            # Visual reference: Privacy & local files
    ├── 4rd-Page.png            # Visual reference: Indie team & 3D globe
    └── Footer.png              # Visual reference: Links, newsletter & copyright
```

---

## 5. Step-by-Step Prompting Sequence
1. **Prompt 1**: Header / Navigation bar + Hero section (`1st-Page.png`, `1st-page-video.webm`, `Ist-page-image.png`, `Backgorund.png`).
2. **Prompt 2**: Second section – Radar & Features (`2nd-Page.png`, `2nd-page-video.mp4`, `2nd-page-image.png`).
3. **Prompt 3**: Third section – Privacy & Local files (`3rd-Page.png`, `3rd-page-video.webm`, `3rd-page-image.png`).
4. **Prompt 4**: Fourth section – About indie team (`4rd-Page.png`, `4rd-page-video.mp4`).
5. **Prompt 5**: Footer section – Links, Newsletter form & Legal links (`Footer.png`).

