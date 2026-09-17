/**
 * KHANAK PROBUILD — PROJECT DATA
 * ==============================
 * All projects are stored here as a single array of objects.
 *
 * HOW TO ADD A NEW PROJECT:
 * 1. Copy one of the objects below (from the opening { to the closing },)
 * 2. Paste it at the end of the array (before the closing ];)
 * 3. Fill in the new project's details — update every field.
 * 4. For the "media" array:
 *    - Each item is { type: "image" | "video", src: "path/to/file", alt: "description" }
 *    - The first item is shown by default
 *    - Add as many images as needed
 * 5. Drop project images into the /images/project images/ folder.
 * 6. Save the file. Done — no HTML or CSS editing needed.
 *
 * FIELD REFERENCE:
 *   id          — unique slug, lowercase, hyphens only (used for anchors)
 *   title       — project name shown on the card and detail view
 *   category    — "Interior" (all projects are Interior Fitout)
 *   description — one or two sentences shown on the card
 *   location    — city, state (shown in detail view)
 *   year        — completion year as a string, e.g. "2025"
 *   featured    — true = shown on Home page featured section; false = Projects page only
 *   media       — array of { type: "image", src: "...", alt: "..." }
 */

const projects = [
  {
    id: "3bhk-wapa-ahmedabad",
    title: "3 BHK Residential Fitout — WAPA, Ahmedabad",
    category: "Interior",
    description: "A complete 3 BHK residential interior fitout delivering comfort, style, and thoughtful space planning across every room.",
    location: "WAPA, Ahmedabad, Gujarat",
    year: "2025",
    featured: true,
    media: [
      {
        type: "video",
        src: "images/3%20BHK%20Residential%20Fitout%20%E2%80%94%20WAPA%2C%20Ahmedabad/3%20BHK%20Residential%20Fitout.mp4"
      }
    ]
  },
  {
    id: "retail-showroom-fitout",
    title: "Retail Showroom Interior Fitout",
    category: "Interior",
    description: "A premium retail showroom fitout crafted to reflect brand identity and create a compelling customer experience.",
    location: "Ahmedabad, Gujarat",
    year: "2025",
    featured: true,
    media: [
      {
        type: "video",
        src: "images/Retail%20showroom%20video/Retail_showroom.mp4"
      }
    ]
  },
  {
    id: "corporate-office-fitout",
    title: "Corporate Office Fitout",
    category: "Interior",
    description: "A modern corporate office fitout designed for focus, collaboration, and a professional brand environment.",
    location: "Ahmedabad, Gujarat",
    year: "2025",
    featured: true,
    media: [
      {
        type: "image",
        src: "images/Corporate%20office%20images/conver%20image.jpeg",
        alt: "Corporate Office Fitout — overview"
      },
      {
        type: "image",
        src: "images/Corporate%20office%20images/Corporate%20office.jpeg",
        alt: "Corporate Office Fitout — reception area"
      },
      {
        type: "image",
        src: "images/Corporate%20office%20images/Corporate%20office%20(2).jpeg",
        alt: "Corporate Office Fitout — workstation area"
      },
      {
        type: "image",
        src: "images/Corporate%20office%20images/Corporate%20office%20(3).jpeg",
        alt: "Corporate Office Fitout — conference room"
      },
      {
        type: "image",
        src: "images/Corporate%20office%20images/Corporate%20office%20(4).jpeg",
        alt: "Corporate Office Fitout — cabin area"
      },
      {
        type: "image",
        src: "images/Corporate%20office%20images/Corporate%20office%20(5).jpeg",
        alt: "Corporate Office Fitout — finished space"
      }
    ]
  },
  {
    id: "4bhk-residential-fitout",
    title: "4 BHK Residential Fitout",
    category: "Interior",
    description: "A luxurious 4 BHK residential fitout combining elegant aesthetics with highly functional living spaces.",
    location: "Ahmedabad, Gujarat",
    year: "2025",
    featured: false,
    media: [
      {
        type: "image",
        src: "images/4%20BHK%20Residential%20Fitout/WhatsApp%20Image%202026-09-07%20at%204.30.45%20PM%20-%20Copy.jpeg",
        alt: "4 BHK Residential Fitout — living room"
      },
      {
        type: "image",
        src: "images/4%20BHK%20Residential%20Fitout/WhatsApp%20Image%202026-09-07%20at%204.30.45%20PM%20(1)%20-%20Copy.jpeg",
        alt: "4 BHK Residential Fitout — master bedroom"
      },
      {
        type: "image",
        src: "images/4%20BHK%20Residential%20Fitout/WhatsApp%20Image%202026-09-07%20at%204.30.48%20PM%20(2)%20-%20Copy.jpeg",
        alt: "4 BHK Residential Fitout — kitchen"
      },
      {
        type: "image",
        src: "images/4%20BHK%20Residential%20Fitout/WhatsApp%20Image%202026-09-07%20at%204.30.49%20PM%20(2)%20-%20Copy.jpeg",
        alt: "4 BHK Residential Fitout — dining area"
      },
      {
        type: "image",
        src: "images/4%20BHK%20Residential%20Fitout/WhatsApp%20Image%202026-09-07%20at%204.30.50%20PM%20-%20Copy.jpeg",
        alt: "4 BHK Residential Fitout — bedroom 2"
      },
      {
        type: "image",
        src: "images/4%20BHK%20Residential%20Fitout/WhatsApp%20Image%202026-09-07%20at%204.30.52%20PM%20(1)%20-%20Copy.jpeg",
        alt: "4 BHK Residential Fitout — bedroom 3"
      },
      {
        type: "image",
        src: "images/4%20BHK%20Residential%20Fitout/WhatsApp%20Image%202026-09-07%20at%204.30.55%20PM%20-%20Copy.jpeg",
        alt: "4 BHK Residential Fitout — bathroom"
      },
      {
        type: "image",
        src: "images/4%20BHK%20Residential%20Fitout/WhatsApp%20Image%202026-09-07%20at%204.30.55%20PM%20(2).jpeg",
        alt: "4 BHK Residential Fitout — wardrobe"
      },
      {
        type: "image",
        src: "images/4%20BHK%20Residential%20Fitout/WhatsApp%20Image%202026-09-07%20at%204.30.56%20PM%20-%20Copy.jpeg",
        alt: "4 BHK Residential Fitout — hallway"
      },
      {
        type: "image",
        src: "images/4%20BHK%20Residential%20Fitout/WhatsApp%20Image%202026-09-07%20at%204.30.58%20PM%20(1)%20-%20Copy.jpeg",
        alt: "4 BHK Residential Fitout — detail view"
      },
      {
        type: "image",
        src: "images/4%20BHK%20Residential%20Fitout/WhatsApp%20Image%202026-09-07%20at%204.30.59%20PM%20(2).jpeg",
        alt: "4 BHK Residential Fitout — ceiling detail"
      },
      {
        type: "image",
        src: "images/4%20BHK%20Residential%20Fitout/WhatsApp%20Image%202026-09-07%20at%204.30.59%20PM%20(3).jpeg",
        alt: "4 BHK Residential Fitout — finished space"
      }
    ]
  }
];
