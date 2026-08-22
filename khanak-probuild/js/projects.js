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
 *    - The first item is shown by default (can be a video for Interior cards)
 *    - Add as many images as needed
 * 5. Drop project images/videos into the /images/ folder.
 * 6. Save the file. Done — no HTML or CSS editing needed.
 *
 * FIELD REFERENCE:
 *   id          — unique slug, lowercase, hyphens only (used for anchors)
 *   title       — project name shown on the card and detail view
 *   category    — must be exactly one of: "Construction" | "Project Management" | "Interior"
 *   description — one or two sentences shown on the card
 *   location    — city, state (shown in detail view)
 *   year        — completion year as a string, e.g. "2025"
 *   featured    — true = shown on Home page featured section; false = Projects page only
 *   media       — array of media items (images and/or video)
 *                 First item in the array = first slide shown
 *                 Only Interior projects should have a video as the first item
 *
 * EXAMPLE media structure:
 *   media: [
 *     { type: "video", src: "images/interior-video.mp4" },   // video first (Interior only)
 *     { type: "image", src: "images/interior-1.jpg", alt: "Interior living room" },
 *     { type: "image", src: "images/interior-2.jpg", alt: "Interior kitchen" }
 *   ]
 *
 * NOTE: Unsplash placeholder photos are used until real project photos are provided.
 * Replace each src with the real project photo/video path when available.
 */

const projects = [
  {
    id: "villa-ahmedabad",
    title: "Residential Villa — Ahmedabad",
    category: "Construction",
    description: "A 4,500 sq. ft. villa delivered on schedule with full interior fit-out.",
    location: "Ahmedabad, Gujarat",
    year: "2025",
    featured: true,
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&auto=format&fit=crop",
        alt: "Residential Villa Ahmedabad — front elevation"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
        alt: "Residential Villa Ahmedabad — living area"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop",
        alt: "Residential Villa Ahmedabad — exterior detail"
      }
    ]
  },
  {
    id: "corporate-office-fitout",
    title: "Corporate Office Fit-Out",
    category: "Interior",
    description: "A modern 8,000 sq. ft. office space designed for focus and collaboration.",
    location: "Ahmedabad, Gujarat",
    year: "2025",
    featured: true,
    media: [
      {
        type: "video",
        src: "images/WhatsApp%20Video%202026-08-20%20at%204.30.42%20PM.mp4",
        poster: "images/Interior%20Design%20Process/Concept%20Design.webp"
      },
      {
        type: "image",
        src: "images/Interior%20Design%20Process/Layout%20Planning.webp",
        alt: "Corporate Office Fit-Out — layout planning"
      },
      {
        type: "image",
        src: "images/Interior%20Design%20Process/Material%20Selection.webp",
        alt: "Corporate Office Fit-Out — material selection"
      },
      {
        type: "image",
        src: "images/Interior%20Design%20Process/Detailed%20Drawings.webp",
        alt: "Corporate Office Fit-Out — detailed drawings"
      },
      {
        type: "image",
        src: "images/Interior%20Design%20Process/Execution.webp",
        alt: "Corporate Office Fit-Out — execution"
      },
      {
        type: "image",
        src: "images/Interior%20Design%20Process/Final%20Handover.webp",
        alt: "Corporate Office Fit-Out — final handover"
      }
    ]
  },
  {
    id: "industrial-warehouse",
    title: "Industrial Warehouse Facility",
    category: "Construction",
    description: "A large-scale warehouse built for efficient logistics and long-term durability.",
    location: "Sanand, Gujarat",
    year: "2025",
    featured: true,
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop",
        alt: "Industrial Warehouse Sanand — exterior"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format&fit=crop",
        alt: "Industrial Warehouse Sanand — interior storage"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop",
        alt: "Industrial Warehouse Sanand — loading dock"
      }
    ]
  },
  {
    id: "retail-showroom",
    title: "Retail Showroom Renovation",
    category: "Interior",
    description: "A retail space reimagined to reflect a premium brand identity.",
    location: "Ahmedabad, Gujarat",
    year: "2025",
    featured: false,
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80&auto=format&fit=crop",
        alt: "Retail Showroom Renovation — main floor"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80&auto=format&fit=crop",
        alt: "Retail Showroom Renovation — boutique interior with display racks"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&auto=format&fit=crop",
        alt: "Retail Showroom Renovation — entrance"
      }
    ]
  },
  {
    id: "apartment-development",
    title: "Multi-Unit Apartment Development",
    category: "Project Management",
    description: "End-to-end project management from planning through handover.",
    location: "Gandhinagar, Gujarat",
    year: "2025",
    featured: false,
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop",
        alt: "Multi-Unit Apartment Development — building exterior"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&auto=format&fit=crop",
        alt: "Multi-Unit Apartment Development — unit interior"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format&fit=crop",
        alt: "Multi-Unit Apartment Development — completed building"
      }
    ]
  },
  {
    id: "commercial-complex",
    title: "Commercial Complex — Site Execution",
    category: "Project Management",
    description: "Cost control and schedule oversight delivered on a multi-phase commercial build.",
    location: "Ahmedabad, Gujarat",
    year: "2025",
    featured: false,
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
        alt: "Commercial Complex Ahmedabad — site view"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&q=80&auto=format&fit=crop",
        alt: "Commercial Complex Ahmedabad — lobby"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80&auto=format&fit=crop",
        alt: "Commercial Complex Ahmedabad — facade"
      }
    ]
  }
];
