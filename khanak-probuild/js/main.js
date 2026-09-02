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
 <a href="mailto:khanakprobuild@gmail.com">khanakprobuild@gmail.com</a>
 </div>
 <div class="footer-contact-item">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 7.69 7.69l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 23 18l-.08.92z"/>
 </svg>
 <a href="tel:+919825652912">+91 98256 52912</a>
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
 3b. WHATSAPP FLOATING BUTTON
 ============================================================ */
function injectWhatsApp() {
 // Replace with the actual WhatsApp number (country code + number, no + or spaces)
  const WHATSAPP_NUMBER = '919825652912';
 const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I am interested in your construction/interior services.');

 const btn = document.createElement('a');
 btn.id = 'whatsapp-float';
 btn.className = 'whatsapp-float';
 btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
 btn.target = '_blank';
 btn.rel = 'noopener noreferrer';
 btn.setAttribute('aria-label', 'Chat with us on WhatsApp');
 btn.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
   <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.854L.057 23.885a.5.5 0 0 0 .606.61l6.198-1.442A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.003-1.368l-.36-.214-3.716.865.938-3.61-.234-.371A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
  <span class="whatsapp-float__tooltip">Chat with us</span>
 `;
 document.body.appendChild(btn);
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
 * Build slides HTML for the card slideshow.
 * Supports both image and video media items.
 */
function buildCardSlides(project) {
 const media = project.media && project.media.length
 ? project.media
 : [{ type: 'image', src: project.image || '', alt: project.title }];

 return media.map((item, i) => {
 if (item.type === 'video') {
 const poster = item.poster
 ? `poster="${item.poster}"`
 : '';
 return `
 <div class="card-slide${i === 0 ? ' card-slide--active' : ''}" data-slide-index="${i}" aria-hidden="${i !== 0}">
 <div class="card-slide__video-wrap">
 <video
 class="card-slide__video"
 src="${item.src}"
 ${poster}
 preload="none"
 playsinline
 controls
 aria-label="${project.title} — project video"
 ></video>
 <button
 class="card-slide__play-btn"
 aria-label="Play video for ${project.title}"
 type="button"
 >
 <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
 <polygon points="5 3 19 12 5 21 5 3"/>
 </svg>
 </button>
 </div>
 </div>`;
 }
 return `
 <div class="card-slide${i === 0 ? ' card-slide--active' : ''}" data-slide-index="${i}" aria-hidden="${i !== 0}">
 <img
 src="${item.src}"
 alt="${item.alt || project.title + ' — image ' + (i + 1)}"
 loading="${i === 0 ? 'eager' : 'lazy'}"
 onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
 >
 <div class="img-placeholder" style="display:none;" aria-hidden="true">
 <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.2">
 <rect x="8" y="28" width="12" height="28"/><rect x="26" y="16" width="12" height="40"/>
 <rect x="44" y="22" width="12" height="34"/><line x1="4" y1="56" x2="60" y2="56"/>
 </svg>
 </div>
 </div>`;
 }).join('');
}

/**
 * Build dot indicators for the card slideshow.
 */
function buildCardDots(count) {
 if (count <= 1) return '';
 const dots = Array.from({ length: count }, (_, i) =>
 `<button
 class="card-dot${i === 0 ? ' card-dot--active' : ''}"
 data-dot="${i}"
 aria-label="Go to slide ${i + 1}"
 type="button"
 ></button>`
 ).join('');
 return `<div class="card-slideshow__dots" aria-label="Slide navigation">${dots}</div>`;
}

/**
 * Build the inner HTML for a single project card.
 * Used on both Home (featured grid) and Projects page grid.
 */
function buildProjectCard(project) {
 const media = project.media && project.media.length
 ? project.media
 : [{ type: 'image', src: project.image || '', alt: project.title }];
 const slideCount = media.length;
 const showNav = slideCount > 1;

 return `
 <article
 class="project-card"
 data-category="${project.category}"
 data-project-id="${project.id}"
 >
 <div class="project-card__thumb">
 <!-- Slideshow wrapper -->
 <div
 class="card-slideshow"
 data-slideshow
 data-count="${slideCount}"
 aria-label="${project.title} project images"
 >
 <div class="card-slideshow__track">
 ${buildCardSlides(project)}
 </div>

 ${showNav ? `
 <button
 class="card-slideshow__nav card-slideshow__nav--prev"
 aria-label="Previous image for ${project.title}"
 type="button"
 >
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
 <polyline points="15 18 9 12 15 6"/>
 </svg>
 </button>
 <button
 class="card-slideshow__nav card-slideshow__nav--next"
 aria-label="Next image for ${project.title}"
 type="button"
 >
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
 <polyline points="9 18 15 12 9 6"/>
 </svg>
 </button>
 ` : ''}

 ${buildCardDots(slideCount)}
 </div>

 <span class="project-card__category">${project.category}</span>
 </div>

 <div
 class="project-card__body"
 role="button"
 tabindex="0"
 aria-label="View details for ${project.title}"
 onclick="openProjectModal('${project.id}')"
 onkeydown="if(event.key==='Enter'||event.key===' ')openProjectModal('${project.id}')"
 >
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
 initCardSlideshows(container);
 initScrollReveal();
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
 initCardSlideshows(container);
 initScrollReveal();
}

/* ============================================================
 8b. CARD SLIDESHOW LOGIC
 ============================================================ */

/**
 * Initialise all card slideshows inside a given container.
 * Safe to call multiple times — skips already-initialised slideshows.
 */
function initCardSlideshows(container) {
 const slideshows = $$('[data-slideshow]', container || document);

 slideshows.forEach(ss => {
 if (ss.dataset.slideshowReady) return; // already initialised
 ss.dataset.slideshowReady = 'true';

 const slides = $$('.card-slide', ss);
 const dots   = $$('.card-dot', ss);
 const prev   = ss.querySelector('.card-slideshow__nav--prev');
 const next   = ss.querySelector('.card-slideshow__nav--next');
 const total  = slides.length;
 if (total <= 1) return; // nothing to slide

 let current = 0;
 let autoTimer = null;
 const AUTO_INTERVAL = 4000;

 function pauseVideo(slide) {
 const vid = slide.querySelector('.card-slide__video');
 if (vid && !vid.paused) vid.pause();
 }

 function goTo(index) {
 const prev_slide = slides[current];
 pauseVideo(prev_slide);
 prev_slide.classList.remove('card-slide--active');
 prev_slide.setAttribute('aria-hidden', 'true');
 if (dots[current]) dots[current].classList.remove('card-dot--active');

 current = (index + total) % total;

 slides[current].classList.add('card-slide--active');
 slides[current].setAttribute('aria-hidden', 'false');
 if (dots[current]) dots[current].classList.add('card-dot--active');
 }

 function startAuto() {
 clearInterval(autoTimer);
 // Don't auto-advance if current slide is a playing video
 autoTimer = setInterval(() => {
 const currentVid = slides[current].querySelector('.card-slide__video');
 if (currentVid && !currentVid.paused) return; // wait for video to finish/pause
 goTo(current + 1);
 }, AUTO_INTERVAL);
 }

 function stopAuto() { clearInterval(autoTimer); }

 // Nav buttons — stop propagation to prevent triggering card modal
 if (prev) {
 prev.addEventListener('click', e => {
 e.stopPropagation();
 goTo(current - 1);
 startAuto();
 });
 }
 if (next) {
 next.addEventListener('click', e => {
 e.stopPropagation();
 goTo(current + 1);
 startAuto();
 });
 }

 // Dot navigation
 dots.forEach((dot, i) => {
 dot.addEventListener('click', e => {
 e.stopPropagation();
 goTo(i);
 startAuto();
 });
 });

 // Play-button overlay for video slides
 const playBtns = $$('.card-slide__play-btn', ss);
 playBtns.forEach(btn => {
 btn.addEventListener('click', e => {
 e.stopPropagation();
 const slide = btn.closest('.card-slide');
 const vid   = slide.querySelector('.card-slide__video');
 if (!vid) return;
 if (vid.paused) {
 vid.play();
 btn.style.display = 'none';
 stopAuto(); // pause auto-advance while video plays
 } else {
 vid.pause();
 btn.style.display = '';
 startAuto();
 }
 });
 });

 // Show play button again after video ends/pauses
 $$('.card-slide__video', ss).forEach(vid => {
 vid.addEventListener('pause', () => {
 const btn = vid.closest('.card-slide').querySelector('.card-slide__play-btn');
 if (btn) btn.style.display = '';
 startAuto();
 });
 vid.addEventListener('ended', () => {
 const btn = vid.closest('.card-slide').querySelector('.card-slide__play-btn');
 if (btn) btn.style.display = '';
 startAuto();
 goTo(current + 1); // auto-advance to next slide after video ends
 });
 // Stop native controls from triggering card modal
 vid.addEventListener('click', e => e.stopPropagation());
 });

 // Touch swipe support
 let touchStartX = 0;
 ss.addEventListener('touchstart', e => {
 touchStartX = e.changedTouches[0].screenX;
 }, { passive: true });
 ss.addEventListener('touchend', e => {
 const dx = e.changedTouches[0].screenX - touchStartX;
 if (Math.abs(dx) > 40) {
 goTo(dx < 0 ? current + 1 : current - 1);
 startAuto();
 }
 }, { passive: true });

 // Pause auto when user hovers over the card
 ss.closest('.project-card')?.addEventListener('mouseenter', stopAuto);
 ss.closest('.project-card')?.addEventListener('mouseleave', startAuto);

 startAuto();
 });
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
 10. PROJECT DETAIL MODAL — SLIDESHOW
 ============================================================ */

/** Track modal slideshow state so we can clean up on close */
let _modalState = null;

/**
 * Build one slide element for the modal slideshow.
 */
function buildModalSlide(item, index, project) {
 const slide = document.createElement('div');
 slide.className = 'modal__slide' + (index === 0 ? ' modal__slide--active' : '');
 slide.setAttribute('aria-hidden', index !== 0);

 if (item.type === 'video') {
 const poster = item.poster ? ` poster="${item.poster}"` : '';
 slide.innerHTML = `
 <div class="modal__slide-video-wrap">
 <video
 class="modal__slide-video"
 src="${item.src}"${poster}
 preload="none"
 playsinline
 controls
 aria-label="${project.title} — project video"
 ></video>
 <button class="modal__slide-play-btn" aria-label="Play video" type="button">
 <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
 <polygon points="5 3 19 12 5 21 5 3"/>
 </svg>
 </button>
 </div>`;

 // Wire play button
 const playBtn = slide.querySelector('.modal__slide-play-btn');
 const vid     = slide.querySelector('.modal__slide-video');
 playBtn.addEventListener('click', e => {
 e.stopPropagation();
 if (vid.paused) { vid.play(); playBtn.style.display = 'none'; }
 else            { vid.pause(); playBtn.style.display = ''; }
 });
 vid.addEventListener('pause',  () => { playBtn.style.display = ''; });
 vid.addEventListener('ended',  () => { playBtn.style.display = ''; });
 vid.addEventListener('click',  e => e.stopPropagation());

 } else {
 const img = document.createElement('img');
 img.className  = 'modal__slide-img';
 img.src        = item.src;
 img.alt        = item.alt || `${project.title} — image ${index + 1}`;
 img.loading    = index === 0 ? 'eager' : 'lazy';

 // Fallback placeholder on error
 img.onerror = () => {
 img.style.display = 'none';
 const ph = document.createElement('div');
 ph.className = 'modal__slide-placeholder';
 ph.setAttribute('aria-hidden', 'true');
 ph.innerHTML = `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.2">
 <rect x="8" y="28" width="12" height="28"/>
 <rect x="26" y="16" width="12" height="40"/>
 <rect x="44" y="22" width="12" height="34"/>
 <line x1="4" y1="56" x2="60" y2="56"/>
 </svg>`;
 slide.appendChild(ph);
 };
 slide.appendChild(img);
 }

 return slide;
}

function openProjectModal(projectId) {
 if (typeof projects === 'undefined') return;
 const project = projects.find(p => p.id === projectId);
 if (!project) return;

 const overlay    = $('#project-modal');
 if (!overlay) return;

 const slideshowEl = $('#modal-slideshow');
 const navEl       = $('#modal-slide-nav');
 const counterEl   = $('#modal-counter');
 const prevBtn     = $('#modal-prev');
 const nextBtn     = $('#modal-next');

 /* ── Build slides ──────────────────────────── */
 const media = project.media && project.media.length
 ? project.media
 : [{ type: 'image', src: project.image || '', alt: project.title }];

 // Clear previous content
 slideshowEl.innerHTML = '';

 const slideEls = media.map((item, i) => {
 const el = buildModalSlide(item, i, project);
 slideshowEl.appendChild(el);
 return el;
 });

 const total   = slideEls.length;
 let   current = 0;

 /* ── Counter helper ───────────────────────── */
 function updateCounter() {
 if (counterEl) counterEl.textContent = `${current + 1} / ${total}`;
 }

 /* ── Pause any playing video in a slide ─────── */
 function pauseSlideVideo(slide) {
 const vid = slide.querySelector('.modal__slide-video');
 if (vid && !vid.paused) vid.pause();
 }

 /* ── Navigate to a slide ─────────────────── */
 function goTo(index) {
 pauseSlideVideo(slideEls[current]);
 slideEls[current].classList.remove('modal__slide--active');
 slideEls[current].setAttribute('aria-hidden', 'true');

 current = (index + total) % total;

 slideEls[current].classList.add('modal__slide--active');
 slideEls[current].setAttribute('aria-hidden', 'false');
 updateCounter();
 }

 /* ── Nav buttons ─────────────────────────── */
 if (total > 1) {
 navEl.style.display = '';
 prevBtn.onclick = e => { e.stopPropagation(); goTo(current - 1); };
 nextBtn.onclick = e => { e.stopPropagation(); goTo(current + 1); };
 } else {
 navEl.style.display = 'none';
 }

 updateCounter();

 /* ── Keyboard ← / → ─────────────────────── */
 function onKeyDown(e) {
 if (!overlay.classList.contains('open')) return;
 if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(current - 1); }
 if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); }
 }

 /* ── Store state for cleanup on close ─────── */
 _modalState = { overlay, slideEls, pauseSlideVideo, onKeyDown, current: () => current };

 document.addEventListener('keydown', onKeyDown);

 /* ── Populate text fields ─────────────────── */
 const catEl  = overlay.querySelector('.modal__category');
 const titleEl= overlay.querySelector('.modal__title');
 const descEl = overlay.querySelector('.modal__desc');
 const locVal = overlay.querySelector('[data-modal-location]');
 const yearVal= overlay.querySelector('[data-modal-year]');
 const catVal = overlay.querySelector('[data-modal-category]');

 if (catEl)   catEl.textContent  = project.category;
 if (titleEl) titleEl.textContent= project.title;
 if (descEl)  descEl.textContent = project.description;
 if (locVal)  locVal.textContent = project.location;
 if (yearVal) yearVal.textContent= project.year;
 if (catVal)  catVal.textContent = project.category;

 overlay.classList.add('open');
 document.body.style.overflow = 'hidden';

 const closeBtn = overlay.querySelector('.modal__close');
 if (closeBtn) setTimeout(() => closeBtn.focus(), 50);
}

function closeProjectModal() {
 const overlay = $('#project-modal');
 if (!overlay) return;

 // Pause any playing video and remove keyboard listener
 if (_modalState) {
 const { slideEls, pauseSlideVideo, onKeyDown } = _modalState;
 slideEls.forEach(pauseSlideVideo);
 document.removeEventListener('keydown', onKeyDown);
 _modalState = null;
 }

 overlay.classList.remove('open');
 document.body.style.overflow = '';
}

function initModal() {
 const overlay = $('#project-modal');
 if (!overlay) return;

 // Close on backdrop click
 overlay.addEventListener('click', e => {
 if (e.target === overlay) closeProjectModal();
 });

 // Close button
 const closeBtn = overlay.querySelector('.modal__close');
 if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);

 // Escape key (base handler — openProjectModal also adds arrow-key handler)
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
  const form    = $('#contact-form');
  const success = $('#form-success');
  if (!form) return;

  // ── Google Apps Script Web App endpoint (unchanged) ──────────────────────
  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwAG7SwKhBRlDJB-AfusJD03oa8BpOQr7z_1Fvj4Gjicr6Hqj00t9jOsjgBrh42itIx/exec';

  // ── Guard against duplicate in-flight submissions ─────────────────────────
  let isSubmitting = false;

  // ── Resolve or create the submission-level error banner ──────────────────
  let errorEl = $('#form-error');
  if (!errorEl) {
    errorEl = document.createElement('div');
    errorEl.id = 'form-error';
    errorEl.setAttribute('role', 'alert');
    errorEl.setAttribute('aria-live', 'polite');
    errorEl.className = 'form-error';
    if (success) {
      success.parentNode.insertBefore(errorEl, success.nextSibling);
    } else {
      form.parentNode.appendChild(errorEl);
    }
  }

  // ── Field references ──────────────────────────────────────────────────────
  const nameInput    = document.getElementById('contact-name');
  const emailInput   = document.getElementById('contact-email');
  const phoneInput   = document.getElementById('contact-phone');
  const serviceInput = document.getElementById('contact-service');
  const messageInput = document.getElementById('contact-message');
  const counterEl    = document.getElementById('contact-message-counter');
  const submitBtn    = form.querySelector('[type="submit"]');

  // ── Valid service values (must match the HTML option values exactly) ──────
  const VALID_SERVICES = [
    'Construction',
    'Project Management Consultancy',
    'Interior Design',
    'General Enquiry'
  ];

  // ── Submit-button inner HTML (reused on restore) ──────────────────────────
  const BTN_DEFAULT_HTML = 'Send Message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';

  // ══════════════════════════════════════════════════════════════════════════
  // HELPERS — show / clear individual field errors
  // ══════════════════════════════════════════════════════════════════════════

  /**
   * Mark a field as invalid: red border + visible error <span>.
   * The error element is looked up by the field's aria-describedby id.
   */
  function setError(field, message) {
    field.style.borderColor = '#e05555';
    field.setAttribute('aria-invalid', 'true');
    const errId = field.getAttribute('aria-describedby');
    if (!errId) return;
    let errEl = document.getElementById(errId);
    if (!errEl) {
      errEl = document.createElement('span');
      errEl.id = errId;
      errEl.className = 'field-error';
      errEl.setAttribute('role', 'alert');
      // Insert immediately after the field (or after the counter for message)
      const after = field.id === 'contact-message' ? counterEl || field : field;
      after.insertAdjacentElement('afterend', errEl);
    }
    errEl.textContent = message;
    errEl.classList.add('visible');
  }

  /** Remove the error state from a field. */
  function clearError(field) {
    field.style.borderColor = '';
    field.removeAttribute('aria-invalid');
    const errId = field.getAttribute('aria-describedby');
    if (!errId) return;
    const errEl = document.getElementById(errId);
    if (errEl) {
      errEl.textContent = '';
      errEl.classList.remove('visible');
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // VALIDATORS — each returns null (valid) or an error string (invalid)
  // ══════════════════════════════════════════════════════════════════════════

  function validateName(value) {
    if (!value) return 'Full name is required.';
    if (value.length < 2)  return 'Name must be at least 2 characters.';
    if (value.length > 80) return 'Name cannot exceed 80 characters.';
    return null;
  }

  function validateEmail(value) {
    if (!value) return 'Email address is required.';
    if (value.length > 254) return 'Email cannot exceed 254 characters.';
    // Requires: local-part @ domain . tld(2+)
    // local-part: non-whitespace, no @
    // domain: non-whitespace, no @, contains at least one dot
    // tld: 2+ non-whitespace, non-@ chars
    // Rejects: akash, akash@, @gmail.com, akash@gmail,
    //          akash gmail.com, akash@@gmail.com (double @)
    const re = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;
    if (!re.test(value)) return 'Please enter a valid email address.';
    return null;
  }

  function validatePhone(value) {
    // Optional — empty is fine
    if (!value) return null;
    // Reject anything that contains letters, @, or .
    if (/[a-zA-Z@.]/.test(value)) return 'Please enter a valid 10-digit Indian mobile number.';
    // Strip allowed formatting: +91 country prefix, spaces, hyphens
    const stripped = value
      .replace(/^\+91[\s-]?/, '')  // remove optional +91 prefix
      .replace(/[\s-]/g, '');      // remove spaces and hyphens
    // After stripping, must be exactly 10 digits
    if (!/^\d{10}$/.test(stripped)) return 'Please enter a valid 10-digit Indian mobile number.';
    // First digit of the 10-digit number must be 6, 7, 8, or 9
    if (!/^[6-9]/.test(stripped)) return 'Please enter a valid 10-digit Indian mobile number.';
    return null;
  }

  function validateService(value) {
    if (!value || !VALID_SERVICES.includes(value)) return 'Please select a service.';
    return null;
  }

  function validateMessage(value) {
    if (!value) return 'Message is required.';
    if (value.length < 2)   return 'Message must be at least 2 characters.';
    if (value.length > 250) return 'Message cannot exceed 250 characters.';
    return null;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // CHARACTER COUNTER for message textarea
  // ══════════════════════════════════════════════════════════════════════════

  function updateCounter() {
    if (!counterEl) return;
    const len = messageInput.value.length;
    counterEl.textContent = len + ' / 250';
    counterEl.classList.toggle('msg-counter--warn', len >= 230 && len < 250);
    counterEl.classList.toggle('msg-counter--limit', len >= 250);
  }

  if (messageInput) {
    messageInput.addEventListener('input', updateCounter);
    updateCounter(); // initialise to "0 / 250" on page load
  }

  // ══════════════════════════════════════════════════════════════════════════
  // REAL-TIME (on-blur + on-input) error clearing
  // Validate on blur so the user sees the error when they leave a field.
  // Clear the error as soon as they start correcting it.
  // ══════════════════════════════════════════════════════════════════════════

  function attachLiveValidation(field, validatorFn) {
    // Show error when focus leaves the field
    field.addEventListener('blur', () => {
      const val = field.value.trim();
      const err = validatorFn(val);
      if (err) setError(field, err); else clearError(field);
    });
    // Clear error as soon as the user starts typing again
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') clearError(field);
    });
  }

  attachLiveValidation(nameInput,    validateName);
  attachLiveValidation(emailInput,   validateEmail);
  attachLiveValidation(phoneInput,   validatePhone);
  attachLiveValidation(messageInput, validateMessage);

  // Service select — validate on change
  serviceInput.addEventListener('change', () => {
    const err = validateService(serviceInput.value);
    if (err) setError(serviceInput, err); else clearError(serviceInput);
  });

  // ══════════════════════════════════════════════════════════════════════════
  // SUBMIT HANDLER
  // ══════════════════════════════════════════════════════════════════════════

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Prevent duplicate in-flight submissions
    if (isSubmitting) return;

    // Hide previous submission-level banners
    if (success) success.classList.remove('visible');
    errorEl.classList.remove('visible');

    // ── Read and trim all values ────────────────────────────────────────────
    const nameValue    = nameInput.value.trim();
    const emailValue   = emailInput.value.trim();
    const phoneValue   = phoneInput.value.trim();
    const serviceValue = serviceInput.value;
    const messageValue = messageInput.value.trim();

    // ── Run all validators ──────────────────────────────────────────────────
    const errors = [
      { field: nameInput,    error: validateName(nameValue)       },
      { field: emailInput,   error: validateEmail(emailValue)     },
      { field: phoneInput,   error: validatePhone(phoneValue)     },
      { field: serviceInput, error: validateService(serviceValue) },
      { field: messageInput, error: validateMessage(messageValue) }
    ];

    let firstInvalid = null;
    errors.forEach(({ field, error }) => {
      if (error) {
        setError(field, error);
        if (!firstInvalid) firstInvalid = field;
      } else {
        clearError(field);
      }
    });

    // If any field failed validation, stop here — do NOT call GAS
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    // ── Lock the submit button ──────────────────────────────────────────────
    isSubmitting = true;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending&hellip;';

    // ── POST to Google Apps Script (unchanged) ──────────────────────────────
    fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' }, // avoids CORS preflight for GAS
      body: JSON.stringify({
        name:    nameValue,
        email:   emailValue,
        phone:   phoneValue,
        service: serviceValue,
        message: messageValue
      })
    })
    .then(response => {
      // Catch genuine HTTP errors (non-2xx)
      if (!response.ok) throw new Error('Server responded with ' + response.status);
      return response.json();
    })
    .then(result => {
      // GAS can return HTTP 200 with { success: false } — check the payload
      if (result.success !== true) {
        throw new Error(result.message || 'Submission failed');
      }
      // ── Success ────────────────────────────────────────────────────────────
      form.reset();
      updateCounter(); // reset counter to "0 / 250"
      submitBtn.innerHTML = BTN_DEFAULT_HTML;
      submitBtn.disabled  = false;
      isSubmitting = false;
      if (success) {
        success.classList.add('visible');
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(() => success.classList.remove('visible'), 6000);
      }
    })
    .catch(() => {
      // ── Failure — do NOT clear form, show error ────────────────────────────
      submitBtn.innerHTML = BTN_DEFAULT_HTML;
      submitBtn.disabled  = false;
      isSubmitting = false;
      errorEl.textContent = 'Something went wrong. Please try again or email us directly at khanakprobuild@gmail.com';
      errorEl.classList.add('visible');
      errorEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => errorEl.classList.remove('visible'), 8000);
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
 const INTERVAL = 4000; // ms between slides

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
 injectWhatsApp();

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
