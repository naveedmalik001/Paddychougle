# Design Notes

## Visual Direction
**Theme:** "Sleek Charcoal + Gold Accent"
- **Mood:** Premium, Clean, Cinematic.
- **Background:** Deep Charcoal (`#111214`) for a high-contrast, immersive feel.
- **Accents:** Luxurious Gold (`#d4af37`) for CTAs and highlights.
- **Typography:** 
  - **Headings:** `Playfair Display` (Serif) - Adds elegance and editorial feel.
  - **Body:** `Inter` (Sans-serif) - Ensures readability and modernity.

## Deviations from Reference
- While the exact reference was not visual, we inferred a "Premium Portfolio" structure based on the prompt description.
- Added a "Stats Grid" to establish authority early on.
- Implemented a "Process" section to highlight professionalism.
- Used a "Modal" interaction for projects to keep the user on the landing page (Single Page Application feel).

## Components
- **Sticky Header:** Shrinks on scroll for better visibility.
- **Mobile Menu:** Full-screen overlay for accessibility.
- **Scroll Spy:** Active link highlighting.
- **Contact Form:** Connected to Next.js API Route (`/api/contact`).

## Accessibility
- Proper contrast ratios maintained.
- Semantic HTML tags (`section`, `header`, `nav`).
- Focus states for keyboard navigation.
