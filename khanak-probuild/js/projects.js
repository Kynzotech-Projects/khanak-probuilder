/**
 * KHANAK PROBUILD — PROJECT DATA
 * ==============================
 * All projects are stored here as a single array of objects.
 *
 * HOW TO ADD A NEW PROJECT:
 * 1. Copy one of the objects below (from the opening { to the closing },)
 * 2. Paste it at the end of the array (before the closing ];)
 * 3. Fill in the new project's details — update every field.
 * 4. Drop the project image into the /images/projects/ folder.
 *    Name the file exactly as you set in the "image" field below.
 * 5. Save the file. Done — no HTML or CSS editing needed.
 *
 * FIELD REFERENCE:
 *   id          — unique slug, lowercase, hyphens only (used for URLs/anchors)
 *   title       — project name shown on the card and detail view
 *   category    — must be exactly one of: "Construction" | "Project Management" | "Interior"
 *   image       — URL or path relative to site root, e.g. "images/projects/my-project.jpg"
 *   description — one or two sentences shown on the card
 *   location    — city, state (shown in detail view)
 *   year        — completion year as a string, e.g. "2025"
 *   featured    — true = shown on Home page featured section; false = Projects page only
 *
 * NOTE: All images below use Unsplash placeholder photos (data-placeholder="true" on rendered cards).
 * Replace each image URL with the real project photo path (e.g. "images/projects/villa-ahmedabad.jpg")
 * when the client provides actual photography.
 */

const projects = [
  {
    id: "villa-ahmedabad",
    title: "Residential Villa — Ahmedabad",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&auto=format&fit=crop",
    description: "A 4,500 sq. ft. villa delivered on schedule with full interior fit-out.",
    location: "Ahmedabad, Gujarat",
    year: "2025",
    featured: true
  },
  {
    id: "corporate-office-fitout",
    title: "Corporate Office Fit-Out",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
    description: "A modern 8,000 sq. ft. office space designed for focus and collaboration.",
    location: "Ahmedabad, Gujarat",
    year: "2025",
    featured: true
  },
  {
    id: "industrial-warehouse",
    title: "Industrial Warehouse Facility",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop",
    description: "A large-scale warehouse built for efficient logistics and long-term durability.",
    location: "Sanand, Gujarat",
    year: "2025",
    featured: true
  },
  {
    id: "retail-showroom",
    title: "Retail Showroom Renovation",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80&auto=format&fit=crop",
    description: "A retail space reimagined to reflect a premium brand identity.",
    location: "Ahmedabad, Gujarat",
    year: "2025",
    featured: false
  },
  {
    id: "apartment-development",
    title: "Multi-Unit Apartment Development",
    category: "Project Management",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop",
    description: "End-to-end project management from planning through handover.",
    location: "Gandhinagar, Gujarat",
    year: "2025",
    featured: false
  },
  {
    id: "commercial-complex",
    title: "Commercial Complex — Site Execution",
    category: "Project Management",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
    description: "Cost control and schedule oversight delivered on a multi-phase commercial build.",
    location: "Ahmedabad, Gujarat",
    year: "2025",
    featured: false
  }
];
