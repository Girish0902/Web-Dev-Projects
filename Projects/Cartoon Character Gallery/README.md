# Cartoon Character Gallery // The Animated Icon Archive

A premium, interactive character showcase portal built entirely with vanilla HTML5, CSS3, and JavaScript ES6+. This application presents a curated collection of 12 iconic cartoon characters across three distinct universes — 90s Nostalgia, Modern Anime, and Sci-Fi Cartoons — in a high-fidelity glassmorphic dark-theme interface.

---

## Technical Capabilities & Core Specifications

### 1. Real-Time Search & Filter Matrix (`script.js`)

- **Multi-Field String Matching:** The search input evaluates queries across character `name`, `bioDescription`, `catchphrase`, and `role` fields simultaneously using lowercase array mapping for case-insensitive results.
- **Category Chip Filtering:** Four filter chips ("All Universes", "90s Nostalgia", "Modern Anime", "Sci-Fi Cartoons") mask the card grid to show only matching entries. Active chips are highlighted with neon cyan borders and glow effects.
- **Composite Filter Logic:** Text search and universe chip filters combine via `AND` logic — only characters satisfying both constraints are displayed. Empty results surface a high-contrast neon "No Characters Found" placeholder.

### 2. Perspective Depth Card Grid (`style.css`)

- **Glassmorphic Card Foundations:** Cards use semi-transparent backgrounds (`rgba(255, 255, 255, 0.025)`) with subtle border accents, layered over the deep canvas backdrop (`#05060b`).
- **Spring-Easing Hover Transforms:** Hover triggers a `translateY(-8px) scale(1.02) rotateX(2deg)` matrix shift with `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing, accompanied by dynamic shadow blooms (`box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 8px 24px rgba(0,240,255,0.08)`).
- **Card Entry Animation:** Each card enters with a staggered fade-up + scale `@keyframes cardAppear` sequence with randomized animation delays for a cascading reveal effect.

### 3. Interactive Bio Drawer Modal (`script.js`, `style.css`)

- **Slide-In Panel:** Clicking any character card spawns a right-side drawer panel with a `translateX` transition driven by spring easing. A semi-transparent overlay with `backdrop-filter: blur(4px)` dims the background.
- **Detailed Profile View:** The drawer displays a hero image, the character's name, role, universe badge, full bio description, a glowing catchphrase block with decorative opening quotation mark, and a stat grid showing Character ID and Universe.
- **Multi-Modal Dismissal:** The drawer closes on clicking the close button, tapping the overlay, or pressing the `Escape` key — all without page reload.

### 4. Live Telemetry Counter (`script.js`)

- A status bar below the header displays three real-time metrics:
  - **DISPLAYED:** Count of currently visible cards after search/filter application
  - **TOTAL:** Total character count in the dataset (12)
  - **ACTIVE FILTER:** Currently selected universe category label

### 5. Responsive Grid Architecture (`style.css`)

- **Fluid Column Scaling:** Uses `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))` to gracefully reflow from 4+ columns on ultrawide monitors down to single-column on mobile.
- **Three Breakpoints:**
  - `>=1200px`: 300px+ cards with 24px gaps
  - `768px`: 240px+ cards with 16px padding
  - `<=480px`: Single-column full-width layout

### 6. Visual Theming (`style.css`)

- **Color Palette:** Deep velvet black background (`#05060b`), neon cyan (`#00f0ff`) interactive elements, radioactive pink (`#ff2975`) accents, and purple (`#a855f7`) for anime universe tags.
- **Typography Trio:** `Orbitron` for display headings, `Inter` for body text, and `JetBrains Mono` for technical readouts — all loaded via Google Fonts with `preconnect` hints.
- **Colored Universe Badges:** Each universe category gets its own distinct badge color scheme (90s Nostalgia = pink, Modern Anime = purple, Sci-Fi Cartoons = cyan) applied consistently across card tags and drawer elements.

---

## Local Development

```bash
# No build step required. Serve the folder with any static file server:
npx serve "Projects/Cartoon Character Gallery"
# or open index.html directly in a browser
```
