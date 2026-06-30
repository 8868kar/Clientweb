---
name: Timeless Sanctuary
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d1c5b2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9a8f7e'
  outline-variant: '#4e4637'
  surface-tint: '#eac168'
  primary: '#eac168'
  on-primary: '#3f2e00'
  primary-container: '#c8a24c'
  on-primary-container: '#4e3900'
  inverse-primary: '#785a04'
  secondary: '#cac6be'
  on-secondary: '#32302b'
  secondary-container: '#494740'
  on-secondary-container: '#b9b5ac'
  tertiary: '#b4ccbb'
  on-tertiary: '#203529'
  tertiary-container: '#95ad9c'
  on-tertiary-container: '#2c4134'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdf9d'
  primary-fixed-dim: '#eac168'
  on-primary-fixed: '#251a00'
  on-primary-fixed-variant: '#5b4300'
  secondary-fixed: '#e7e2d9'
  secondary-fixed-dim: '#cac6be'
  on-secondary-fixed: '#1d1c16'
  on-secondary-fixed-variant: '#494740'
  tertiary-fixed: '#d0e9d6'
  tertiary-fixed-dim: '#b4ccbb'
  on-tertiary-fixed: '#0a2014'
  on-tertiary-fixed-variant: '#364c3e'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-lg:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: 0.05em
  data-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-padding: 120px
---

## Brand & Style
The design system is rooted in the concept of "Timeless Sanctuary." It balances the weight of heritage with the clarity of modern luxury. The visual language is inspired by high-end hospitality brands like Aman, emphasizing exclusivity, serenity, and a deep connection to nature. 

The primary aesthetic is **Minimalist Luxury with Tactile Accents**. It utilizes matte surfaces, high-contrast typography, and gold-on-black treatments to evoke a sense of quiet authority. The circular "Tree of Life" motif serves as a recurring geometric anchor, appearing in subtle watermarks, button shapes, and iconography to symbolize growth and groundedness.

**Key visual principles:**
- **Atmospheric Depth:** Use of dark, matte backgrounds to create a focused, intimate environment.
- **Precision:** Fine hairline borders (0.5pt - 1pt) in gold to define structure without adding visual bulk.
- **Intentional Whitespace:** Generous margins and letter-spacing to allow the content to "breathe," mirroring the physical space of a luxury estate.

## Colors
The palette is a curated selection of "Earth and Elegance." 

- **Matte Black (#0A0A0A):** The foundation. Used for primary backgrounds to create a high-end, immersive "dark mode" experience.
- **Champagne Gold (#C8A24C):** The accent. Reserved for primary calls to action, brand-defining iconography, and delicate decorative strokes.
- **Warm Beige (#F6F1E8):** The secondary surface. Used for cards, secondary sections, or text to soften the high contrast of the black and gold.
- **Forest Green (#1A2F23):** The subtle nature accent. Used for success states, secondary markers, or as a deep overlay on imagery to reinforce the "Tree of Life" narrative.
- **White (#FFFFFF):** Used sparingly for primary body text and critical UI labels to ensure maximum legibility against dark backgrounds.

## Typography
The typographic system utilizes a "Tri-Font Strategy" to categorize information:

1.  **Playfair Display (Serif):** The editorial voice. Used for all large titles and property names to convey heritage and sophistication.
2.  **Inter (Sans Serif):** The functional voice. Used for all long-form body copy and descriptions to ensure modern clarity and high readability on digital screens.
3.  **Space Grotesk (Monospace/Geometric):** The technical voice. Used exclusively for numerical data (pricing, square footage, availability dates) and small utility labels. This provides a subtle "architectural" or "blueprints" feel to the data.

**Hierarchy Note:** Mobile headlines scale down by 25% (e.g., `display-lg` becomes 48px) to maintain balance on smaller viewports.

## Layout & Spacing
The layout follows a **Rigid Fixed Grid** on desktop to evoke the precision of a printed luxury brochure, transitioning to a fluid container on smaller devices.

- **Desktop (1440px):** 12-column grid with a wide 80px side margin. Content is centered with significant vertical "breathing room" (120px) between major sections.
- **Tablet (768px - 1024px):** 8-column grid with 40px margins.
- **Mobile (375px):** 4-column grid with 20px margins.

Spacing is based on an 8px base unit. For luxury appeal, favor larger spacing increments (e.g., using 32px where 16px might be "standard") to create an unhurried, premium pace.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** rather than heavy shadows.

- **Surface Levels:** The base is Matte Black (#0A0A0A). Secondary cards or "hover" states use a deep "Off-Black" (#121212) or the Forest Green accent at low opacity.
- **Fine Outlines:** Instead of shadows, use 1px solid borders in Gold (#C8A24C) at 20% opacity to define card edges.
- **Glassmorphism:** Navigation bars and modal backgrounds use a 20px backdrop-blur with a 40% opaque Black fill to maintain focus while suggesting a layered, physical environment.
- **Shadows:** When necessary for functional depth (e.g., a floating booking bar), use a very soft, "Ambient Gold" shadow: `0 20px 40px rgba(200, 162, 76, 0.08)`.

## Shapes
The shape language is primarily **Sharp (0px)** to maintain a sense of architectural structure and classic formality.

**Exceptions:**
- **The Emblem Motif:** Buttons containing icons or standalone badges should be perfectly circular (Pill-shaped) to echo the Tree of Life logo's outer ring.
- **Interactive Elements:** Small UI components like checkboxes use a very subtle "Soft" radius (2px) to prevent them from feeling too aggressive, while main containers and primary images remain strictly rectangular.

## Components
- **Buttons:** 
  - *Primary:* Solid Champagne Gold background with Black text. Rectangular with 0px radius.
  - *Secondary:* Transparent with a 1px Gold hairline border and Gold text.
  - *Icon Buttons:* Contained within a Gold circular border, mimicking the logo emblem.
- **Input Fields:** Bottom-border only (1px Gold or White), with labels in Space Grotesk. No background fill unless in a focused state.
- **Chips/Badges:** Small, circular or pill-shaped tags using Forest Green backgrounds with Gold text for "Featured" or "Exclusive" markers.
- **Cards:** Defined by a change in surface color (#121212) and a 1px hairline border. Large imagery should fill the top 60% of the card.
- **Lists:** Separated by thin, 0.5px Gold lines with generous vertical padding (24px) between items.
- **Decorative Elements:** Use the Tree of Life emblem as a 5% opacity watermark behind section titles or as a parallax background element.