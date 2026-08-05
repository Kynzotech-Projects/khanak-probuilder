/**
 * KHANAK PROBUILD MAIN JS
 * main.js
 * ============================================================
 * Handles:
 * 1. Header injection (shared across all pages)
 * 2. Footer injection (shared across all pages)
 * 3. Nav scroll shrink, active link, mobile toggle
 * 4. Scroll-progress bar
 * 5. Scroll-reveal (IntersectionObserver, no library needed)
 * 6. Animated counters
 * 7. Project card renderer (Home featured + Projects page grid)
 * 8. Projects page filter
 * 9. Project detail modal
 * 10. Services page tabs
 * 11. Contact form handler (client-side only)
 * 12. Smooth-scroll for anchor links
 * ============================================================
 */

/* ============================================================
 UTILITIES
 ============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function getCurrentPage() {
 const path = window.location.pathname.split('/').pop() || 'index.html';
 return path;
}

/* ============================================================
 1. HEADER HTML
 ============================================================ */
const HEADER_HTML = `
<header class="site-header" id="site-header" role="banner">
 <div class="container nav-inner">

 <a href="index.html" class="nav-logo" aria-label="Khanak ProBuild Home">
 <img src="images/main-logo.png" alt="Khanak ProBuild LLP logo" class="nav-logo-img">
 </a>

 <nav class="nav-links" aria-label="Primary navigation">
 <a href="index.html" class="nav-link" data-page="index.html">Home</a>
 <a href="about.html" class="nav-link" data-page="about.html">About</a>

 <div class="nav-item">
 <a href="services.html" class="nav-link" data-page="services.html" aria-haspopup="true">
 Services ▾
 </a>
 <div class="nav-dropdown" role="menu">
 <a href="construction.html" class="nav-dropdown-link" role="menuitem">Construction</a>
 <a href="interior.html" class="nav-dropdown-link" role="menuitem">Interior Design</a>
 <a href="project-management.html" class="nav-dropdown-link" role="menuitem">Project Management</a>
 </div>
 </div>

 <a href="projects.html" class="nav-link" data-page="projects.html">Projects</a>
 <a href="contact.html" class="nav-link" data-page="contact.html">Contact</a>
 </nav>

 <a href="contact.html" class="btn btn--primary btn--sm nav-cta">
 Get a Consultation
 </a>

 <button class="nav-toggle" id="nav-toggle" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="nav-mobile">
 <span></span>
 <span></span>
 <span></span>
 </button>

 </div>
</header>

<!-- Mobile Navigation Overlay -->
<nav class="nav-mobile" id="nav-mobile" aria-label="Mobile navigation" aria-hidden="true">
 <a href="index.html" class="nav-link" data-page="index.html">Home</a>
 <a href="about.html" class="nav-link" data-page="about.html">About</a>

 <a href="services.html" class="nav-link" data-page="services.html">Services</a>
 <div class="nav-mobile-sub">
 <a href="construction.html" class="nav-dropdown-link">Construction</a>
 <a href="interior.html" class="nav-dropdown-link">Interior Design</a>
 <a href="project-management.html" class="nav-dropdown-link">Project Management</a>
 </div>

 <a href="projects.html" class="nav-link" data-page="projects.html">Projects</a>
 <a href="contact.html" class="nav-link" data-page="contact.html">Contact</a>

 <div class="nav-cta">
 <a href="contact.html" class="btn btn--primary">Get a Consultation</a>
 </div>
</nav>

<!-- Scroll progress bar -->
<div class="scroll-progress" id="scroll-progress" aria-hidden="true"></div>
`;

/* ============================================================
 2. FOOTER HTML
 ============================================================ */
const FOOTER_HTML = `
<footer class="site-footer" role="contentinfo">
 <div class="container">
 <div class="footer-grid">

 <!-- Brand -->
 <div class="footer-brand">
 <a href="index.html" class="nav-logo" aria-label="Khanak ProBuild Home">
 <img src="images/main-logo.png" alt="Khanak ProBuild LLP logo" class="nav-logo-img">
 </a>
 <p class="footer-tagline">
 Business consulting &amp; project management for construction and interior projects across India.
 </p>
 <div class="footer-social">
 <a href="https://www.instagram.com/khanakprobuild" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Khanak ProBuild on Instagram">
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
 <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
 <circle cx="12" cy="12" r="4"/>
 <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
 </svg>
 </a>
 <a href="https://www.linkedin.com/in/nirav-ved-pmp-337726395" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Khanak ProBuild on LinkedIn">
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
 <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
 <rect x="2" y="9" width="4" height="12"/>
 <circle cx="4" cy="4" r="2"/>
 </svg>
 </a>
 <a href="https://www.facebook.com/share/19ESbna91N/" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Khanak ProBuild on Facebook">
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
 <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
 </svg>
 </a>
 </div>
 </div>

 <!-- Quick Links -->
 <div class="footer-col">
 <h5>Quick Links</h5>
 <ul class="footer-links">
 <li><a href="index.html" class="footer-link">Home</a></li>
 <li><a href="about.html" class="footer-link">About Us</a></li>
 <li><a href="services.html" class="footer-link">Services</a></li>
 <li><a href="projects.html" class="footer-link">Projects</a></li>
 <li><a href="contact.html" class="footer-link">Contact</a></li>
 </ul>
 </div>

 <!-- Services -->
 <div class="footer-col">
 <h5>Services</h5>
 <ul class="footer-links">
 <li><a href="services.html#construction" class="footer-link">Construction</a></li>
 <li><a href="services.html#project-management" class="footer-link">Project Management</a></li>
 <li><a href="services.html#interior" class="footer-link">Interior Design</a></li>
 </ul>
 </div>

 <!-- Contact -->
 <div class="footer-col">
 <h5>Contact</h5>
 <div class="footer-contact-item">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
 <polyline points="22,6 12,13 2,6"/>
 </svg>
 <a href="mailto:info@khanakprobuild.com">info@khanakprobuild.com</a>
 </div>
 <div class="footer-contact-item">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 7.69 7.69l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 23 18l-.08.92z"/>
 </svg>
 <a href="tel:7946016866">7946016866</a>
 </div>
 <div class="footer-contact-item">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
 <circle cx="12" cy="10" r="3"/>
 </svg>
 <span>Ahmedabad, Gujarat, India</span>
 </div>
 </div>

 </div>

 <div class="footer-bottom">
 <p class="footer-copy">
 &copy; <span id="footer-year"></span> Khanak ProBuild LLP. All rights reserved.
 </p>
 <div class="footer-bottom-links">
 <a href="#">Privacy Policy</a>
 <a href="#">Terms of Use</a>
 </div>
 </div>
 </div>
</footer>
`;

/* ============================================================
 3. INJECT HEADER & FOOTER
 ============================================================ */
function injectHeader() {
 const placeholder = $('#header-placeholder');
 if (!placeholder) return;
 placeholder.outerHTML = HEADER_HTML;
}

function injectFooter() {
 const placeholder = $('#footer-placeholder');
 if (!placeholder) return;
 placeholder.outerHTML = FOOTER_HTML;

 // Set current year in footer
 const yearEl = $('#footer-year');
 if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ============================================================
 4. NAV SCROLL SHRINK, ACTIVE LINK, MOBILE TOGGLE
 ============================================================ */
function initNav() {
 const header = $('#site-header');
 const toggle = $('#nav-toggle');
 const mobileNav = $('#nav-mobile');
 if (!header) return;

 // Mark active page link
 const page = getCurrentPage();
 $$('[data-page]').forEach(link => {
 if (link.dataset.page === page) link.classList.add('active');
 });
 // Also highlight "Services" nav link when on any sub-service page
 const servicePages = ['construction.html', 'project-management.html', 'interior.html'];
 if (servicePages.includes(page)) {
 $$('[data-page="services.html"]').forEach(l => l.classList.add('active'));
 }

 // Scroll: add shadow + height reduction on scroll (background stays teal always)
 function onScroll() {
 if (window.scrollY > 60) {
 header.classList.add('scrolled');
 } else {
 header.classList.remove('scrolled');
 }
 }

 window.addEventListener('scroll', onScroll, { passive: true });
 onScroll();

 // Mobile toggle
 if (toggle && mobileNav) {
 toggle.addEventListener('click', () => {
 const isOpen = mobileNav.classList.toggle('open');
 toggle.classList.toggle('open', isOpen);
 toggle.setAttribute('aria-expanded', isOpen);
 mobileNav.setAttribute('aria-hidden', !isOpen);
 document.body.style.overflow = isOpen ? 'hidden' : '';
 });

 // Close on nav link click
 $$('.nav-mobile .nav-link, .nav-mobile .nav-dropdown-link').forEach(link => {
 link.addEventListener('click', () => {
 mobileNav.classList.remove('open');
 toggle.classList.remove('open');
 toggle.setAttribute('aria-expanded', 'false');
 mobileNav.setAttribute('aria-hidden', 'true');
 document.body.style.overflow = '';
 });
 });

 // Close on Escape key
 document.addEventListener('keydown', e => {
 if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
 mobileNav.classList.remove('open');
 toggle.classList.remove('open');
 toggle.setAttribute('aria-expanded', 'false');
 mobileNav.setAttribute('aria-hidden', 'true');
 document.body.style.overflow = '';
 toggle.focus();
 }
 });
 }
}

/* ============================================================
 5. SCROLL PROGRESS BAR
 ============================================================ */
function initScrollProgress() {
 const bar = $('#scroll-progress');
 if (!bar) return;
 window.addEventListener('scroll', () => {
 const total = document.documentElement.scrollHeight - window.innerHeight;
 const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
 bar.style.width = pct + '%';
 }, { passive: true });
}

/* ============================================================
 6. SCROLL REVEAL INTERSECTION OBSERVER
 ============================================================ */
function initScrollReveal() {
 const elements = $$('[data-reveal]');
 if (!elements.length) return;

 const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 entry.target.classList.add('revealed');
 observer.unobserve(entry.target);
 }
 });
 }, {
 threshold: 0.12,
 rootMargin: '0px 0px -40px 0px'
 });

 elements.forEach(el => observer.observe(el));
}

/* ============================================================
 7. ANIMATED COUNTERS
 ============================================================ */
function animateCounter(el) {
 const target = parseFloat(el.dataset.target);
 const suffix = el.dataset.suffix || '';
 const prefix = el.dataset.prefix || '';
 const duration = 1600;
 const start = performance.now();
 const isFloat = String(target).includes('.');

 function update(now) {
 const elapsed = now - start;
 const progress = Math.min(elapsed / duration, 1);
 // Ease out cubic
 const ease = 1 - Math.pow(1 - progress, 3);
 const value = target * ease;
 el.textContent = prefix + (isFloat ? value.toFixed(1) : Math.floor(value)) + suffix;
 if (progress < 1) requestAnimationFrame(update);
 }

 requestAnimationFrame(update);
}

function initCounters() {
 const counters = $$('[data-counter]');
 if (!counters.length) return;

 const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 animateCounter(entry.target);
 observer.unobserve(entry.target);
 }
 });
 }, { threshold: 0.5 });

 counters.forEach(el => observer.observe(el));
}

/* ============================================================
 8. PROJECT CARD RENDERER
 ============================================================ */

/**
 * Build the inner HTML for a single project card.
 * Used on both Home (featured grid) and Projects page grid.
 */
function buildProjectCard(project) {
 return `
 <article
 class="project-card"
 data-category="${project.category}"
 data-placeholder="true"
 role="button"
 tabindex="0"
 aria-label="View details for ${project.title}"
 onclick="openProjectModal('${project.id}')"
 onkeydown="if(event.key==='Enter'||event.key===' ')openProjectModal('${project.id}')"
 >
 <div class="project-card__thumb">
 <img
 src="${project.image}"
 alt="${project.title} ${project.category} project by Khanak ProBuild LLP, Ahmedabad"
 loading="lazy"
 onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
 >
 <!-- Fallback placeholder shown when image not yet available -->
 <div class="img-placeholder" style="display:none;" aria-hidden="true">
 <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.2">
 <rect x="8" y="28" width="12" height="28"/><rect x="26" y="16" width="12" height="40"/>
 <rect x="44" y="22" width="12" height="34"/><line x1="4" y1="56" x2="60" y2="56"/>
 </svg>
 </div>
 <span class="project-card__category">${project.category}</span>
 </div>
 <div class="project-card__body">
 <h3 class="project-card__title">${project.title}</h3>
 <p class="project-card__desc">${project.description}</p>
 <div class="project-card__meta">
 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
 <circle cx="12" cy="10" r="3"/>
 </svg>
 ${project.location}
 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" style="margin-left:0.5rem">
 <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
 <line x1="16" y1="2" x2="16" y2="6"/>
 <line x1="8" y1="2" x2="8" y2="6"/>
 <line x1="3" y1="10" x2="21" y2="10"/>
 </svg>
 ${project.year}
 </div>
 </div>
 </article>
 `;
}

/**
 * Render featured projects on the Home page.
 * Shows projects flagged featured:true (or first 3 if none flagged).
 */
function renderFeaturedProjects() {
 const container = $('#featured-projects-grid');
 if (!container || typeof projects === 'undefined') return;

 let featured = projects.filter(p => p.featured);
 if (!featured.length) featured = projects.slice(0, 3);

 container.innerHTML = featured.map(buildProjectCard).join('');
 initScrollReveal(); // re-run so newly added cards get observed
}

/**
 * Render all projects on the Projects page.
 * Supports optional category filter.
 */
function renderProjectsGrid(filterCategory = 'All') {
 const container = $('#projects-page-grid');
 if (!container || typeof projects === 'undefined') return;

 const filtered = filterCategory === 'All'
 ? projects
 : projects.filter(p => p.category === filterCategory);

 if (!filtered.length) {
 container.innerHTML = '<p class="projects-empty">No projects in this category yet.</p>';
 return;
 }

 container.innerHTML = filtered.map(buildProjectCard).join('');
 initScrollReveal();
}

/* ============================================================
 9. PROJECTS PAGE FILTER
 ============================================================ */
function initProjectsFilter() {
 const filterBtns = $$('.filter-btn');
 if (!filterBtns.length) return;

 filterBtns.forEach(btn => {
 btn.addEventListener('click', () => {
 filterBtns.forEach(b => b.classList.remove('active'));
 btn.classList.add('active');
 renderProjectsGrid(btn.dataset.filter);
 });
 });
}

/* ============================================================
 10. PROJECT DETAIL MODAL
 ============================================================ */
function openProjectModal(projectId) {
 if (typeof projects === 'undefined') return;
 const project = projects.find(p => p.id === projectId);
 if (!project) return;

 const overlay = $('#project-modal');
 if (!overlay) return;

 // Populate modal
 const imgEl = overlay.querySelector('.modal__image');
 const imgPlaceholder = overlay.querySelector('.modal__image-placeholder');

 if (imgEl) {
 imgEl.src = project.image;
 imgEl.alt = `${project.title} Khanak ProBuild LLP`;
 imgEl.style.display = 'block';
 if (imgPlaceholder) imgPlaceholder.style.display = 'none';

 imgEl.onerror = () => {
 imgEl.style.display = 'none';
 if (imgPlaceholder) imgPlaceholder.style.display = 'flex';
 };
 }

 const catEl = overlay.querySelector('.modal__category');
 const titleEl = overlay.querySelector('.modal__title');
 const descEl = overlay.querySelector('.modal__desc');
 const locVal = overlay.querySelector('[data-modal-location]');
 const yearVal = overlay.querySelector('[data-modal-year]');
 const catVal = overlay.querySelector('[data-modal-category]');

 if (catEl) catEl.textContent = project.category;
 if (titleEl) titleEl.textContent = project.title;
 if (descEl) descEl.textContent = project.description;
 if (locVal) locVal.textContent = project.location;
 if (yearVal) yearVal.textContent = project.year;
 if (catVal) catVal.textContent = project.category;

 overlay.classList.add('open');
 document.body.style.overflow = 'hidden';

 // Focus the close button for accessibility
 const closeBtn = overlay.querySelector('.modal__close');
 if (closeBtn) setTimeout(() => closeBtn.focus(), 50);
}

function closeProjectModal() {
 const overlay = $('#project-modal');
 if (!overlay) return;
 overlay.classList.remove('open');
 document.body.style.overflow = '';
}

function initModal() {
 const overlay = $('#project-modal');
 if (!overlay) return;

 // Close on overlay click
 overlay.addEventListener('click', e => {
 if (e.target === overlay) closeProjectModal();
 });

 // Close button
 const closeBtn = overlay.querySelector('.modal__close');
 if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);

 // Escape key
 document.addEventListener('keydown', e => {
 if (e.key === 'Escape' && overlay.classList.contains('open')) closeProjectModal();
 });
}

/* ============================================================
 11. SERVICES PAGE TABS
 ============================================================ */
function initServiceTabs() {
 const tabs = $$('.service-tab');
 const sections = $$('.service-section-content');
 if (!tabs.length) return;

 // Handle hash on load (e.g. services.html#interior)
 function activateByHash() {
 const hash = window.location.hash.replace('#', '');
 const validHashes = ['construction', 'project-management', 'interior'];
 const target = validHashes.includes(hash) ? hash : 'construction';

 tabs.forEach(tab => {
 tab.classList.toggle('active', tab.dataset.tab === target);
 tab.setAttribute('aria-selected', tab.dataset.tab === target);
 });
 sections.forEach(sec => {
 sec.classList.toggle('active', sec.id === target);
 });
 }

 activateByHash();
 window.addEventListener('hashchange', activateByHash);

 tabs.forEach(tab => {
 tab.addEventListener('click', () => {
 const target = tab.dataset.tab;
 tabs.forEach(t => {
 t.classList.remove('active');
 t.setAttribute('aria-selected', 'false');
 });
 tab.classList.add('active');
 tab.setAttribute('aria-selected', 'true');
 sections.forEach(sec => sec.classList.toggle('active', sec.id === target));
 history.replaceState(null, '', '#' + target);
 });
 });
}

/* ============================================================
 12. CONTACT FORM
 ============================================================ */
function initContactForm() {
 const form = $('#contact-form');
 const success = $('#form-success');
 if (!form) return;

 form.addEventListener('submit', e => {
 e.preventDefault();

 // Basic client-side validation
 let valid = true;
 $$('[required]', form).forEach(field => {
 if (!field.value.trim()) {
 field.style.borderColor = '#e05555';
 valid = false;
 } else {
 field.style.borderColor = '';
 }
 });

 if (!valid) return;

 // Simulate submission (no backend show success state)
 const submitBtn = form.querySelector('[type="submit"]');
 submitBtn.disabled = true;
 submitBtn.textContent = 'Sending…';

 setTimeout(() => {
 form.reset();
 submitBtn.disabled = false;
 submitBtn.textContent = 'Send Message';
 if (success) {
 success.classList.add('visible');
 success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
 setTimeout(() => success.classList.remove('visible'), 6000);
 }
 }, 1200);
 });

 // Real-time validation reset
 $$('[required]', form).forEach(field => {
 field.addEventListener('input', () => {
 field.style.borderColor = '';
 });
 });
}

/* ============================================================
 14. FAQ ACCORDION
 ============================================================ */
function initFaqAccordion() {
 const items = $$('.faq-item');
 if (!items.length) return;

 items.forEach(item => {
 const btn = item.querySelector('.faq-question');
 if (!btn) return;

 btn.addEventListener('click', () => {
 const isOpen = item.classList.contains('open');

 // Close all others
 items.forEach(other => {
 other.classList.remove('open');
 const otherBtn = other.querySelector('.faq-question');
 if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
 });

 // Toggle this one
 if (!isOpen) {
 item.classList.add('open');
 btn.setAttribute('aria-expanded', 'true');
 }
 });
 });
}
/* ============================================================
 15. GALLERY LIGHTBOX
 ============================================================ */
function initGallery() {
 const items = $$('.gallery-item');
 const overlay = $('#gallery-lightbox');
 if (!items.length || !overlay) return;

 const imgEl = $('#lightbox-img');
 const caption = $('#lightbox-caption');
 const closeBtn = $('#lightbox-close');
 const prevBtn = $('#lightbox-prev');
 const nextBtn = $('#lightbox-next');
 let current = 0;

 function show(index) {
 current = (index + items.length) % items.length;
 const img = items[current].querySelector('img');
 const cap = items[current].querySelector('.gallery-item__title');
 imgEl.src = img.src.replace(/w=\d+/, 'w=1400');
 imgEl.alt = img.alt;
 caption.textContent = cap ? cap.textContent : '';
 overlay.classList.add('open');
 document.body.style.overflow = 'hidden';
 setTimeout(() => closeBtn.focus(), 50);
 }

 function close() {
 overlay.classList.remove('open');
 document.body.style.overflow = '';
 items[current].focus();
 }

 items.forEach((item, i) => {
 item.addEventListener('click', () => show(i));
 item.addEventListener('keydown', e => {
 if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(i); }
 });
 });

 closeBtn.addEventListener('click', close);
 prevBtn.addEventListener('click', () => show(current - 1));
 nextBtn.addEventListener('click', () => show(current + 1));
 overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

 document.addEventListener('keydown', e => {
 if (!overlay.classList.contains('open')) return;
 if (e.key === 'Escape') close();
 if (e.key === 'ArrowLeft') show(current - 1);
 if (e.key === 'ArrowRight') show(current + 1);
 });
}

/* ============================================================
 16. HERO SLIDESHOW
 ============================================================ */
function initHeroSlideshow() {
 const slides = $$('.hero-slide');
 const dots = $$('.slide-dot');
 if (!slides.length) return;

 let current = 0;
 let timer = null;
 const INTERVAL = 5000; // ms between slides

 function goTo(index) {
 // Mark current as leaving
 slides[current].classList.remove('active');
 slides[current].classList.add('leaving');
 dots[current] && dots[current].classList.remove('active');

 // After transition completes, remove leaving class
 const prev = slides[current];
 setTimeout(() => prev.classList.remove('leaving'), 1300);

 current = (index + slides.length) % slides.length;

 slides[current].classList.add('active');
 dots[current] && dots[current].classList.add('active');
 }

 function next() { goTo(current + 1); }

 function startTimer() {
 clearInterval(timer);
 timer = setInterval(next, INTERVAL);
 }

 // Dot click navigation
 dots.forEach(dot => {
 dot.addEventListener('click', () => {
 goTo(parseInt(dot.dataset.slide, 10));
 startTimer(); // reset timer on manual nav
 });
 });

 // Pause on hover (desktop)
 const hero = $('.hero--slideshow');
 if (hero) {
 hero.addEventListener('mouseenter', () => clearInterval(timer));
 hero.addEventListener('mouseleave', startTimer);
 }

 // Touch swipe support
 let touchStartX = 0;
 if (hero) {
 hero.addEventListener('touchstart', e => {
 touchStartX = e.changedTouches[0].screenX;
 }, { passive: true });
 hero.addEventListener('touchend', e => {
 const dx = e.changedTouches[0].screenX - touchStartX;
 if (Math.abs(dx) > 50) {
 goTo(dx < 0 ? current + 1 : current - 1);
 startTimer();
 }
 }, { passive: true });
 }

 // Pause when tab is hidden (saves CPU)
 document.addEventListener('visibilitychange', () => {
 document.hidden ? clearInterval(timer) : startTimer();
 });

 startTimer();
}


function initProjectsHeroSlideshow() {
 const slides = $$('.projects-hero__slide');
 const dots   = $$('.phero-dot');
 if (!slides.length) return;

 let current  = 0;
 let timer    = null;
 const INTERVAL = 2000;

 function goTo(index) {
   slides[current].classList.remove('active');
   slides[current].classList.add('leaving');
   dots[current] && dots[current].classList.remove('active');
   const prev = slides[current];
   setTimeout(() => prev.classList.remove('leaving'), 1300);
   current = (index + slides.length) % slides.length;
   slides[current].classList.add('active');
   dots[current] && dots[current].classList.add('active');
 }

 function startTimer() {
   clearInterval(timer);
   timer = setInterval(() => goTo(current + 1), INTERVAL);
 }

 dots.forEach(dot => {
   dot.addEventListener('click', () => {
     goTo(parseInt(dot.dataset.slide, 10));
     startTimer();
   });
 });

 const hero = $('.projects-hero');
 if (hero) {
   hero.addEventListener('mouseenter', () => clearInterval(timer));
   hero.addEventListener('mouseleave', startTimer);
   hero.addEventListener('touchstart', e => { hero._tx = e.changedTouches[0].screenX; }, { passive: true });
   hero.addEventListener('touchend', e => {
     const dx = e.changedTouches[0].screenX - (hero._tx || 0);
     if (Math.abs(dx) > 50) { goTo(dx < 0 ? current + 1 : current - 1); startTimer(); }
   }, { passive: true });
 }

 document.addEventListener('visibilitychange', () => {
   document.hidden ? clearInterval(timer) : startTimer();
 });

 startTimer();
}

function initSmoothScroll() {
 $$('a[href^="#"]').forEach(link => {
 link.addEventListener('click', e => {
 const target = $(link.getAttribute('href'));
 if (!target) return;
 e.preventDefault();
 const navH = parseInt(getComputedStyle(document.documentElement)
 .getPropertyValue('--nav-height-small')) || 60;
 const top = target.getBoundingClientRect().top + window.scrollY - navH - 24;
 window.scrollTo({ top, behavior: 'smooth' });
 });
 });
}

/* ============================================================
 INIT run everything on DOMContentLoaded
 ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
 injectHeader();
 injectFooter();

 // Small delay so injected DOM is painted before we query it
 requestAnimationFrame(() => {
 initNav();
 initScrollProgress();
 initScrollReveal();
 initCounters();
 initModal();
 initProjectsFilter();
 initServiceTabs();
 initContactForm();
 initFaqAccordion();
 initGallery();
 initSmoothScroll();
 initHeroSlideshow();
 initProjectsHeroSlideshow();

 // Render project grids if containers exist on this page
 renderFeaturedProjects();
 renderProjectsGrid();
 });
});
