/**
 * Altis Fitness Club — Vanilla ES6+ Interactions
 */

'use strict';

/* --------------------------------------------------------------------------
   1. Media Manifest
   When gym photographs are converted from WebP to PNG and placed in
   /assets/images/, populate the `src` field for each matching slot.
   When `src` is null, clean architectural placeholders remain visible with
   zero broken image requests.
   -------------------------------------------------------------------------- */
const GYM_MEDIA = {
  hero: {
    src: 'assets/images/unnamed.png',
    alt: 'Altis Fitness Club main workout floor with hexagon ceiling lighting, turf track, and dumbbell racks in Kondhwa Budruk, Pune',
    position: 'center 40%',
  },
  about: {
    src: 'assets/images/unnamed-1.png',
    alt: 'Altis Fitness Club reception emblem and motivational wall display',
    position: 'center center',
  },
  environment: {
    src: 'assets/images/unnamed-2.png',
    alt: 'Active training floor with members working out and stretching at Altis Fitness Club',
    position: 'center 55%',
  },
  trainer: {
    src: 'assets/images/unnamed-5.png',
    alt: 'Supportive coaching and gym community inside the mirrored free-weight area at Altis Fitness Club',
    position: 'center 52%',
  },
  'equip-squat-rack': {
    src: 'assets/images/unnamed-7.png',
    alt: 'Squat rack and barbell station at Altis Fitness Club',
    position: 'center 55%',
  },
  'equip-bench-press': {
    src: 'assets/images/unnamed-6.png',
    alt: 'Bench press and pressing stations at Altis Fitness Club',
    position: 'center 62%',
  },
  'equip-deadlift': {
    src: 'assets/images/unnamed-3.png',
    alt: 'Lifting corridor with weight plates and floor training space at Altis Fitness Club',
    position: 'center 55%',
  },
  'equip-dumbbells': {
    src: 'assets/images/unnamed-4.png',
    alt: 'Indus dumbbell racks lined along turf and illuminated mirrors at Altis Fitness Club',
    position: 'center 58%',
  },
  'equip-barbells': {
    src: 'assets/images/unnamed-7.png',
    alt: 'Straight and EZ-curl barbells stored beside dumbbell racks at Altis Fitness Club',
    position: 'left 65%',
  },
  'equip-plates': {
    src: 'assets/images/unnamed-6.png',
    alt: 'Weight plate rack and plate-loaded strength equipment at Altis Fitness Club',
    position: 'left 58%',
  },
  'equip-cardio': {
    src: 'assets/images/unnamed.png',
    alt: 'Turf track and open conditioning floor at Altis Fitness Club',
    position: 'center 52%',
  },
  'equip-machines': {
    src: 'assets/images/unnamed-3.png',
    alt: 'Plate-loaded and cable strength training machines at Altis Fitness Club',
    position: 'left 50%',
  },
};

const GALLERY_ITEMS = [
  {
    key: 'hero',
    src: 'assets/images/unnamed.png',
    alt: 'Altis Fitness Club main training floor with hexagon LED lights and red turf lane',
    title: 'Main Training Floor',
    caption: 'Spacious workout floor with turf lane and hexagon ceiling lights at ALIF TOWER',
    wide: true,
    position: 'center 40%',
  },
  {
    key: 'about',
    src: 'assets/images/unnamed-1.png',
    alt: 'Altis Fitness Club illuminated wall badge and motivational sign',
    title: 'Altis Club Entrance',
    caption: 'Illuminated Altis Fitness Club emblem and training motto wall',
    wide: false,
    position: 'center center',
  },
  {
    key: 'equip-dumbbells',
    src: 'assets/images/unnamed-4.png',
    alt: 'Organized Indus dumbbell rack on green turf beside full-length mirrors',
    title: 'Dumbbell & Free Weight Rack',
    caption: 'Full set of organized dumbbells along illuminated wall mirrors',
    wide: false,
    position: 'center 58%',
  },
  {
    key: 'equip-squat-rack',
    src: 'assets/images/unnamed-7.png',
    alt: 'Power rack, barbells, and free weights at Altis Fitness Club',
    title: 'Squat Rack & Barbells',
    caption: 'Power rack station alongside straight and EZ-curl barbells',
    wide: false,
    position: 'center 55%',
  },
  {
    key: 'equip-bench-press',
    src: 'assets/images/unnamed-6.png',
    alt: 'Bench press, weight plate tree, and plate-loaded pressing machines',
    title: 'Bench & Plate-Loaded Zone',
    caption: 'Flat benches, weight plate trees, and plate-loaded strength stations',
    wide: false,
    position: 'center 60%',
  },
  {
    key: 'environment',
    src: 'assets/images/unnamed-2.png',
    alt: 'Members training across strength machines and floor space at Altis Fitness Club',
    title: 'Active Workout Atmosphere',
    caption: 'Motivating floor energy with cable machines and open stretching space',
    wide: true,
    position: 'center 55%',
  },
  {
    key: 'equip-machines',
    src: 'assets/images/unnamed-3.png',
    alt: 'Strength corridor with plate trees, mats, and machines leading to turf',
    title: 'Strength & Conditioning Corridor',
    caption: 'Dedicated strength machines, plate storage, and floor mats',
    wide: false,
    position: 'center 55%',
  },
  {
    key: 'trainer',
    src: 'assets/images/unnamed-5.png',
    alt: 'Mirrored free-weight zone with members and coaching support',
    title: 'Community & Coaching Floor',
    caption: 'Supportive members and form guidance in the free-weight area',
    wide: false,
    position: 'center 52%',
  },
];

/* --------------------------------------------------------------------------
   2. Authentic Customer Reviews (Supplied Feedback)
   -------------------------------------------------------------------------- */
const CUSTOMER_REVIEWS = [
  {
    name: 'Ajmal Pasha',
    text: "Amazing energy, top-tier equipment, and spotless washrooms. Best fitness decision I've made in a long time. The gym has a really positive and motivating energy.",
  },
  {
    name: 'Moshin Khan',
    text: 'Altis Fitness Club is an absolute game-changer! The workout environment here is fantastic and super motivating. The equipment is modern, clean, and well-maintained, and the trainers, especially Sufiyan, are knowledgeable and supportive, always ensuring proper form and guidance.',
  },
  {
    name: 'Irfan Mansuri',
    text: 'Great gym in the Kondhwa area! Clean space, good machines for both cardio and strength training, and a very positive workout environment.',
  },
  {
    name: 'Alii Shikilkarr',
    text: 'Best gym in Kondhwa location. Spent 3 months in this gym and got best results with the help of trainer.',
  },
  {
    name: 'Shahenshah Shaikh',
    text: 'Best gym in Kondhwa.',
  },
  {
    name: 'Ikrama Shaikh',
    text: 'I was well maintained and all equipment were all clean and well maintained.',
  },
  {
    name: 'Jafar Bagalkote',
    text: 'Thanks for giving such exceptional machines.',
  },
  {
    name: 'Lakshya Rathore',
    text: 'Good space, great environment for workout, well equipped and helping staff. Overall great workout experience.',
  },
];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --------------------------------------------------------------------------
   3. Initialize All Modules on DOM Ready
   -------------------------------------------------------------------------- */
function initApp() {
  hydrateMediaSlots();
  initStickyHeader();
  initMobileNavigation();
  initScrollReveal();
  initCounters();
  initHeroParallax();
  initGalleryAndLightbox();
  initReviewsCarousel();
  initFaqAccordion();
  initIntentPrefill();
  initContactForm();
  initScrollToTop();
  setCopyrightYear();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/* --------------------------------------------------------------------------
   Media Hydration
   -------------------------------------------------------------------------- */
function hydrateMediaSlots() {
  const slots = document.querySelectorAll('.media-slot[data-media-key]');
  slots.forEach((slot) => {
    const key = slot.getAttribute('data-media-key');
    const entry = GYM_MEDIA[key];
    if (!entry || !entry.src) return;

    const img = document.createElement('img');
    img.src = entry.src;
    img.alt = entry.alt;
    if (entry.position) {
      img.style.objectPosition = entry.position;
    }
    if (key !== 'hero') {
      img.loading = 'lazy';
    }
    img.decoding = 'async';
    img.addEventListener('load', () => {
      const placeholder = slot.querySelector('.media-placeholder');
      if (placeholder) placeholder.remove();
    });
    img.addEventListener('error', () => {
      img.remove();
    });
    slot.prepend(img);
  });
}

/* --------------------------------------------------------------------------
   Sticky Header & Active Section Highlighting
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  const navLinks = Array.from(document.querySelectorAll('.desktop-nav .nav-link'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function updateHeaderState() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);

    const scrollPosition = window.scrollY + 130;
    let activeId = sections[0]?.id || '';
    sections.forEach((section) => {
      if (section.offsetTop <= scrollPosition) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const targetId = link.getAttribute('href').slice(1);
      link.classList.toggle('is-active', targetId === activeId);
    });
  }

  window.addEventListener('scroll', updateHeaderState, { passive: true });
  updateHeaderState();
}

/* --------------------------------------------------------------------------
   Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('mobileMenuClose');
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta');

  if (!toggleBtn || !closeBtn || !drawer || !backdrop) return;

  function openDrawer() {
    backdrop.hidden = false;
    drawer.hidden = false;
    void drawer.offsetWidth;
    requestAnimationFrame(() => {
      backdrop.classList.add('is-open');
      drawer.classList.add('is-open');
    });
    drawer.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
    closeBtn.focus();
  }

  function closeDrawer() {
    backdrop.classList.remove('is-open');
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
    setTimeout(() => {
      if (!drawer.classList.contains('is-open')) {
        backdrop.hidden = true;
        drawer.hidden = true;
      }
    }, 320);
  }

  toggleBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  drawerLinks.forEach((link) => link.addEventListener('click', closeDrawer));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
      toggleBtn.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   Scroll Reveal (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   Animated Statistics Counters
   -------------------------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length || prefersReducedMotion || !('IntersectionObserver' in window)) return;

  function animateCounter(el) {
    const target = parseFloat(el.dataset.target || '0');
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const duration = 1100;
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = value.toFixed(decimals);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toFixed(decimals);
      }
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

/* --------------------------------------------------------------------------
   Subtle Hero Parallax
   -------------------------------------------------------------------------- */
function initHeroParallax() {
  const parallaxLayer = document.getElementById('heroParallax');
  if (!parallaxLayer || prefersReducedMotion) return;

  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY * 0.16, 80);
        parallaxLayer.style.transform = `translate3d(0, ${offset}px, 0)`;
        ticking = false;
      });
    },
    { passive: true }
  );
}

/* --------------------------------------------------------------------------
   Gallery Grid & Lightbox
   -------------------------------------------------------------------------- */
function initGalleryAndLightbox() {
  const grid = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('galleryLightbox');
  const backdrop = document.getElementById('lightboxBackdrop');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const figure = document.getElementById('lightboxFigure');
  const caption = document.getElementById('lightboxCaption');
  const counter = document.getElementById('lightboxCounter');

  if (!grid || !lightbox) return;

  let currentIndex = 0;
  let lastFocusedTrigger = null;

  grid.innerHTML = GALLERY_ITEMS.map((item, index) => {
    const media = GYM_MEDIA[item.key];
    const src = item.src || (media && media.src);
    const alt = item.alt || (media && media.alt) || item.title;
    const position = item.position || (media && media.position) || 'center';
    const wideClass = item.wide ? ' is-wide' : '';

    return `
      <button
        type="button"
        class="gallery-item reveal${wideClass}"
        data-gallery-index="${index}"
        aria-label="View ${item.title} in lightbox"
      >
        ${
          src
            ? `<img src="${src}" alt="${alt}" style="object-position: ${position};" loading="lazy" decoding="async" />`
            : `<div class="media-placeholder">
                 <div class="media-grid-pattern"></div>
                 <div class="media-placeholder-content">
                   <span class="media-index">0${index + 1}</span>
                   <span class="media-placeholder-title">${item.title}</span>
                 </div>
               </div>`
        }
        <span class="gallery-item-overlay">
          <span class="gallery-item-title">${item.title}</span>
          <svg class="gallery-expand-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </span>
      </button>
    `;
  }).join('');

  // Re-observe newly created gallery cards for reveal animation
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const galleryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            galleryObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    grid.querySelectorAll('.reveal').forEach((el) => galleryObserver.observe(el));
  } else {
    grid.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

  function renderLightboxSlide(index) {
    currentIndex = (index + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    const item = GALLERY_ITEMS[currentIndex];
    const media = GYM_MEDIA[item.key];
    const src = item.src || (media && media.src);
    const alt = item.alt || (media && media.alt) || item.title;

    counter.textContent = `${currentIndex + 1} / ${GALLERY_ITEMS.length}`;
    caption.textContent = `${item.title} — ${item.caption}`;

    if (src) {
      figure.innerHTML = `<img src="${src}" alt="${alt}" />`;
    } else {
      figure.innerHTML = `
        <div class="media-placeholder">
          <div class="media-grid-pattern"></div>
          <div class="media-placeholder-content">
            <span class="media-index">0${currentIndex + 1}</span>
            <span class="media-placeholder-title">${item.title}</span>
            <span class="media-placeholder-sub">${item.caption}</span>
          </div>
        </div>
      `;
    }
  }

  function openLightbox(index, triggerEl) {
    lastFocusedTrigger = triggerEl || null;
    renderLightboxSlide(index);
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    if (lastFocusedTrigger) {
      lastFocusedTrigger.focus();
    }
  }

  grid.addEventListener('click', (event) => {
    const button = event.target.closest('.gallery-item');
    if (!button) return;
    const index = parseInt(button.dataset.galleryIndex || '0', 10);
    openLightbox(index, button);
  });

  prevBtn.addEventListener('click', () => renderLightboxSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => renderLightboxSlide(currentIndex + 1));
  closeBtn.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') renderLightboxSlide(currentIndex - 1);
    if (event.key === 'ArrowRight') renderLightboxSlide(currentIndex + 1);
  });
}

/* --------------------------------------------------------------------------
   Customer Reviews Carousel
   -------------------------------------------------------------------------- */
function initReviewsCarousel() {
  const viewport = document.getElementById('reviewsViewport');
  const track = document.getElementById('reviewsTrack');
  const prevBtn = document.getElementById('reviewPrevBtn');
  const nextBtn = document.getElementById('reviewNextBtn');
  const statusEl = document.getElementById('carouselStatus');

  if (!viewport || !track || !prevBtn || !nextBtn) return;

  const starSvg = `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.77l-5.2 2.75.99-5.8-4.21-4.1 5.82-.85L10 1.5z"/></svg>`;

  track.innerHTML = CUSTOMER_REVIEWS.map(
    (review) => `
      <article class="review-card">
        <div>
          <div class="stars-row" aria-label="5 out of 5 stars" style="margin-bottom: 1rem;">
            ${starSvg.repeat(5)}
          </div>
          <blockquote class="review-quote">“${review.text}”</blockquote>
        </div>
        <footer class="review-author">
          <span class="review-author-name">${review.name}</span>
          <span class="review-source">5.0 / 5.0</span>
        </footer>
      </article>
    `
  ).join('');

  function getVisibleCount() {
    if (window.innerWidth >= 960) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function updateCarouselStatus() {
    const cards = Array.from(track.children);
    if (!cards.length) return;
    const cardWidth = cards[0].getBoundingClientRect().width + 20;
    const startIndex = Math.min(
      CUSTOMER_REVIEWS.length - 1,
      Math.max(0, Math.round(viewport.scrollLeft / cardWidth))
    );
    const visible = getVisibleCount();
    const endIndex = Math.min(CUSTOMER_REVIEWS.length, startIndex + visible);

    statusEl.textContent = `${startIndex + 1} – ${endIndex} of ${CUSTOMER_REVIEWS.length}`;
    prevBtn.disabled = viewport.scrollLeft <= 4;
    nextBtn.disabled = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 4;
  }

  function scrollByCards(direction) {
    const firstCard = track.firstElementChild;
    if (!firstCard) return;
    const step = firstCard.getBoundingClientRect().width + 20;
    viewport.scrollBy({
      left: direction * step,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }

  prevBtn.addEventListener('click', () => scrollByCards(-1));
  nextBtn.addEventListener('click', () => scrollByCards(1));
  viewport.addEventListener('scroll', updateCarouselStatus, { passive: true });
  window.addEventListener('resize', updateCarouselStatus);
  updateCarouselStatus();
}

/* --------------------------------------------------------------------------
   FAQ Accordion (Single Open At A Time)
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const accordion = document.getElementById('faqAccordion');
  if (!accordion) return;

  const triggers = Array.from(accordion.querySelectorAll('.faq-trigger'));

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      triggers.forEach((btn) => {
        const panelId = btn.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        btn.setAttribute('aria-expanded', 'false');
        if (panel) panel.classList.remove('is-open');
      });

      if (!isExpanded) {
        const panelId = trigger.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        trigger.setAttribute('aria-expanded', 'true');
        if (panel) panel.classList.add('is-open');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Pre-fill Form Interest From CTA Buttons
   -------------------------------------------------------------------------- */
function initIntentPrefill() {
  const intentButtons = document.querySelectorAll('[data-intent]');
  const select = document.getElementById('interestedIn');
  if (!select) return;

  intentButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const intent = btn.getAttribute('data-intent');
      if (intent) {
        select.value = intent;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Contact / Enquiry Form Validation & Frontend Demo Submission
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('enquiryForm');
  const feedback = document.getElementById('formFeedback');
  if (!form || !feedback) return;

  const fields = {
    fullName: {
      input: document.getElementById('fullName'),
      error: document.getElementById('fullNameError'),
      validate: (val) => (val.trim().length >= 2 ? '' : 'Please enter your full name (at least 2 characters).'),
    },
    phoneNumber: {
      input: document.getElementById('phoneNumber'),
      error: document.getElementById('phoneNumberError'),
      validate: (val) => {
        const digits = val.replace(/\D/g, '');
        return digits.length >= 10 && digits.length <= 13
          ? ''
          : 'Please enter a valid 10-digit phone number.';
      },
    },
    emailAddress: {
      input: document.getElementById('emailAddress'),
      error: document.getElementById('emailAddressError'),
      validate: (val) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) ? '' : 'Please enter a valid email address.',
    },
    interestedIn: {
      input: document.getElementById('interestedIn'),
      error: document.getElementById('interestedInError'),
      validate: (val) => (val.trim() ? '' : 'Please choose what you are interested in.'),
    },
    enquiryMessage: {
      input: document.getElementById('enquiryMessage'),
      error: document.getElementById('enquiryMessageError'),
      validate: (val) => (val.trim().length >= 10 ? '' : 'Please enter a short message (at least 10 characters).'),
    },
  };

  function validateField(fieldKey) {
    const { input, error, validate } = fields[fieldKey];
    const message = validate(input.value);
    const wrapper = input.closest('.form-field');
    if (wrapper) wrapper.classList.toggle('has-error', Boolean(message));
    error.textContent = message;
    return !message;
  }

  Object.keys(fields).forEach((key) => {
    const { input } = fields[key];
    input.addEventListener('blur', () => validateField(key));
    input.addEventListener('input', () => {
      if (input.closest('.form-field')?.classList.contains('has-error')) {
        validateField(key);
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const allValid = Object.keys(fields).map(validateField).every(Boolean);

    if (!allValid) {
      feedback.hidden = false;
      feedback.className = 'form-feedback is-error';
      feedback.textContent = 'Please check the highlighted fields before submitting your enquiry.';
      const firstInvalid = form.querySelector('.has-error input, .has-error select, .has-error textarea');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const name = fields.fullName.input.value.trim();
    const phone = fields.phoneNumber.input.value.trim();
    const email = fields.emailAddress.input.value.trim();
    const interest = fields.interestedIn.input.value.trim();
    const message = fields.enquiryMessage.input.value.trim();

    const whatsappText = encodeURIComponent(
      `Hi Altis Fitness Club, I am ${name} (${phone}, ${email}). Interested in: ${interest}. Message: ${message}`
    );

    feedback.hidden = false;
    feedback.className = 'form-feedback is-success';
    feedback.innerHTML = `
      <strong>Enquiry validated (${interest}).</strong>
      <p style="margin: 0.35rem 0 0; color: var(--text-muted);">
        This website does not currently submit to a backend server. Click below to send your enquiry straight to Altis
        Fitness Club on WhatsApp or call directly.
      </p>
      <div class="form-feedback-actions">
        <a
          href="https://wa.me/918308366291?text=${whatsappText}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-sm"
        >
          Send via WhatsApp
        </a>
        <a href="tel:+918308366291" class="btn btn-outline btn-sm">Call 083083 66291</a>
      </div>
    `;

    form.reset();
  });
}

/* --------------------------------------------------------------------------
   Scroll-To-Top Button
   -------------------------------------------------------------------------- */
function initScrollToTop() {
  const btn = document.getElementById('scrollToTopBtn');
  if (!btn) return;

  function toggleVisibility() {
    btn.hidden = window.scrollY < 480;
  }

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  });

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();
}

/* --------------------------------------------------------------------------
   Dynamic Copyright Year
   -------------------------------------------------------------------------- */
function setCopyrightYear() {
  const el = document.getElementById('copyrightYear');
  if (el) {
    el.textContent = String(new Date().getFullYear());
  }
}
