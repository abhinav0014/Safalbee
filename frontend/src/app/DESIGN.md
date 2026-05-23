# Design System Strategy: The Digital Artisan

## 1. Overview & Creative North Star

This design system is anchored by a Creative North Star we call **"The Heritage Gallery."** We are not building a standard e-commerce grid; we are curating a digital exhibition of Nepali soul. The goal is to move away from the "template" look of modern marketplaces and toward a high-end editorial experience that feels as handcrafted as the art it hosts.

To achieve this, the system rejects rigid, boxed layouts in favor of **Intentional Asymmetry**. We use "The Digital Curator" lens: large, sophisticated typography scales, overlapping imagery that breaks container boundaries, and a "layered paper" philosophy that mimics the depth of traditional Newari wood carvings. By balancing the raw, earthy energy of terracotta and crimson with expansive cream negative space, we create a premium breathing room that allows each piece of art to command its own stage.

---

## 2. Colors & Atmospheric Tones

The palette is designed to evoke the warmth of a Himalayan sunset and the patina of ancient temples.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders (`#outline`) to section off content. 
Structure must be defined through **Background Color Shifts**. To separate a product description from the gallery, transition from `surface` (#fff8ef) to `surface-container-low` (#fbf3e4). This creates a "soft-edge" transition that feels organic rather than industrial.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of fine Nepali lokta paper.
*   **Base Layer:** `surface` (#fff8ef) – Use for the widest layout areas.
*   **Secondary Content:** `surface-container-low` (#fbf3e4) – Use for subtle grouping.
*   **Featured Elements:** `surface-container-highest` (#e9e2d3) – Use for sidebars or highlighted metadata.
By nesting a `surface-container-lowest` (#ffffff) card inside a `surface-container-low` section, you create a natural lift that eliminates the need for heavy outlines.

### The "Glass & Gold" Rule
For floating navigation or high-end filters, use **Glassmorphism**. Apply `surface` with 80% opacity and a 12px backdrop blur. This allows the rich `terracotta` and `crimson` of the artwork to bleed through the UI, making the interface feel integrated with the art. Use `tertiary` (#735c00) sparingly as a "metallic" accent for highlights and icons to mimic antique gold leaf.

---

## 3. Typography: The Editorial Voice

Our typography is a dialogue between the ancient and the modern.

*   **Display & Headlines (Noto Serif):** These are your "Statement" pieces. Use `display-lg` and `headline-lg` with generous tracking to evoke the feeling of a museum plaque. Headlines should often be center-aligned or dramatically offset to break the vertical rhythm.
*   **Titles & Body (Manrope):** This is your "Functional" layer. Manrope provides a clean, modern contrast to the serif headings. Use `body-lg` for product stories to ensure high legibility against the cream background.
*   **Labels (Manrope):** Use `label-md` in all-caps with 0.05rem letter spacing for "Artist Names" or "Categories" to create a premium, branded feel.

---

## 4. Elevation & Depth: Tonal Layering

Traditional "drop shadows" are too heavy for this aesthetic. We use **Ambient Depth**.

*   **The Layering Principle:** Depth is achieved by stacking tones. A `primary-container` (#c24e3a) CTA should sit on a `surface` background to create immediate pop through color contrast rather than shadow.
*   **Ambient Shadows:** If a card must float, use a "Tinted Shadow." Instead of black, use `on-surface` (#1e1b13) at 5% opacity with a 20px blur and a 4px vertical offset. This mimics the soft, diffused light of a courtyard.
*   **The Ghost Border Fallback:** If accessibility requires a stroke (e.g., in high-contrast modes), use `outline-variant` (#dec0ba) at **15% opacity**. It should be felt, not seen.
*   **Signature Textures:** Apply a 5% opacity "Wood Grain" or "Mandala" SVG watermark to `surface-container` tiers. This adds a tactile "soul" to the digital surface.

---

## 5. Components

### Buttons & CTAs
*   **Primary:** Solid `primary` (#a13625) with `on-primary` (#ffffff) text. Use `xl` (0.75rem) roundedness—never fully round, never sharp.
*   **Secondary (The Gold Standard):** A gradient transition from `tertiary_container` (#cca830) to `tertiary` (#735c00). This is reserved for "Buy Now" or "Place Bid" actions.
*   **Tertiary:** No background, `primary` text, with a `primary-fixed-dim` underline that appears on hover.

### Cards & Marketplace Items
*   **The "No-Divider" Rule:** Forbid the use of lines between list items. Use `spacing-6` (2rem) of vertical white space or a subtle shift to `surface-container-lowest` to separate items.
*   **Image Treatments:** Photos of art should have a `sm` (0.125rem) radius to feel like a cut canvas.

### Input Fields & Search
*   **Text Inputs:** Use a "Bottom-Line Only" approach or a `surface-container-highest` fill. The `outline` should only appear on `:focus` using `tertiary` (#735c00) to signify the "Golden Path" of user interaction.

### Artisan Chips
*   **Selection Chips:** Use `primary-fixed` (#ffdad4) with `on-primary-fixed` (#3f0300) text. These should feel like small wax seals on a document.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. If the left margin is `spacing-10`, try a `spacing-16` right margin for hero sections.
*   **Do** overlap elements. Let a product image bleed over the edge of a `surface-container`.
*   **Do** use `terracotta` (#C24E3A) for primary actions to keep the energy grounded and earthy.

### Don’t:
*   **Don’t** use pure black (#000000). Use `on-surface` (#1e1b13) for all "black" text to maintain the warmth of the cream paper.
*   **Don’t** use standard 8px grids strictly. Use the provided **Spacing Scale** (e.g., `1.4rem`, `2.75rem`) to create a more rhythmic, editorial flow.
*   **Don’t** use high-contrast borders. If the eye sees a line, the premium "flow" is broken. Rely on color and space.