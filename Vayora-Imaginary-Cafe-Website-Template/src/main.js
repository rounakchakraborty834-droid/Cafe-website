(() => {
  'use strict';
  const config = window.CAFE_CONFIG;
  if (!config) {
    console.error('Daybook config is missing. Load src/config.js before src/main.js.');
    return;
  }
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const money = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value).replace('₹', '₹');

  function text(node, value) { if (node && value !== undefined && value !== null) node.textContent = value; }
  function create(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined && content !== null) node.textContent = content;
    return node;
  }
  function makeImage(src, alt, loading = 'lazy') {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    img.loading = loading;
    img.decoding = 'async';
    img.addEventListener('error', () => img.classList.add('image-failed'), { once: true });
    return img;
  }
  function setLink(link, url) {
    if (!link) return;
    if (url) {
      link.href = url;
      link.classList.remove('is-hidden');
      link.hidden = false;
    } else {
      link.removeAttribute('href');
      link.classList.add('is-hidden');
      link.hidden = true;
    }
  }

  // Apply the configuration to all repeated brand/business details.
  $$('[data-brand-name]').forEach((node) => text(node, config.brand.name));
  text($('#heroLocation'), config.hero.locationLabel || `${config.brand.city} · fictional concept`);
  text($('#heroHours'), config.hero.hoursLabel || 'Made for mornings, open all day');
  text($('#heroLede'), config.hero.supportingText || config.brand.tagline);
  text($('.signature-intro > p:not(.eyebrow)'), config.signature.description);
  const ctaLabels = config.ctaLabels || {};
  const setLeadingLabel = (selector, value) => { const node = $(selector); if (!node || !value) return; const textNode = Array.from(node.childNodes).find((child) => child.nodeType === Node.TEXT_NODE && child.textContent.trim()); if (textNode) textNode.textContent = ` ${value} `; };
  setLeadingLabel('.hero-actions .button-dark', ctaLabels.heroPrimary);
  setLeadingLabel('.hero-actions .text-link', ctaLabels.heroSecondary);
  setLeadingLabel('.primary-nav .nav-cta', ctaLabels.navPrimary);
  setLeadingLabel('.signature-intro .button', ctaLabels.signaturePrimary);
  setLeadingLabel('#inquiryForm button[type=submit]', ctaLabels.inquirySubmit);
  setLeadingLabel('.journal-head .text-link', ctaLabels.journalPrimary);
  const heroTitle = $('#heroTitle');
  if (heroTitle && config.hero.headlineBefore && config.hero.headlineEmphasis) {
    const emphasis = create('em', '', config.hero.headlineEmphasis);
    heroTitle.replaceChildren(document.createTextNode(config.hero.headlineBefore), document.createElement('br'), emphasis);
  }
  const storyTitle = $('#storyTitle');
  if (storyTitle && config.about) {
    const emphasis = create('em', '', config.about.headingEmphasis);
    storyTitle.replaceChildren(document.createTextNode(`${config.about.headingBefore} `), emphasis, document.createTextNode(` ${config.about.headingAfter}`));
    text($('#storyBodyOne'), config.about.paragraphOne);
    text($('#storyBodyTwo'), config.about.paragraphTwo);
  }
  const signatureTitle = $('#signatureTitle');
  if (signatureTitle && config.signature.headingBefore) {
    signatureTitle.replaceChildren(document.createTextNode(`${config.signature.headingBefore} `), create('em', '', config.signature.headingEmphasis), document.createElement('br'), document.createTextNode(config.signature.headingAfter));
  }
  text($('#announcementText'), config.announcement.text);
  text($('#currentYear'), new Date().getFullYear());
  text($('#feature-price'), money(config.signature.price));
  text($('[data-feature-price]'), money(config.signature.price));
  text($('#addressText'), (config.contact.addressLines || ['Your address goes here']).join('\n'));
  text($('#hoursText'), `${(config.contact.hours || []).map((item) => `${item.days} · ${item.time}`).join('\n') || 'Hours to be confirmed'}\nSample hours for this concept`);
  text($('#footerAddress'), (config.contact.addressLines || ['Address to be configured']).join(' · '));
  const footerPhone = $('#footerPhone');
  if (footerPhone && config.contact.phone && /^\+?[0-9 ()-]{8,20}$/.test(config.contact.phone)) {
    footerPhone.textContent = config.contact.phone;
    setLink(footerPhone, `tel:${config.contact.phone.replace(/[^+0-9]/g, '')}`);
  } else if (footerPhone) { footerPhone.classList.add('is-hidden'); footerPhone.hidden = true; }
  if (!config.announcement.enabled) $('#announcement')?.classList.add('is-hidden');
  if (!config.demoMode.enabled || !config.demoMode.showBanner) $('#demoRibbon')?.classList.add('is-hidden');
  if (!config.demoMode.enabled) $('#footerDemoNote')?.classList.add('is-hidden');
  if (!config.demoMode.enabled || !config.demoMode.showVayoraCredit) $('#vayoraCredit')?.classList.add('is-hidden');
  const creditName = $('#vayoraName');
  if (creditName && config.agency.url && /^https?:\/\//i.test(config.agency.url)) {
    const agencyLink = create('a', '', config.agency.name || 'Vayora');
    agencyLink.href = config.agency.url; agencyLink.target = '_blank'; agencyLink.rel = 'noopener noreferrer';
    creditName.replaceWith(agencyLink);
  } else if (creditName) { text(creditName, config.agency.name || 'Vayora'); }
  if (config.contact.email && !/\.example$/i.test(config.contact.email)) {
    const footerEmail = create('a', '', config.contact.email);
    footerEmail.href = `mailto:${config.contact.email}`;
    footerEmail.setAttribute('aria-label', `Email ${config.contact.email}`);
    $('#footerPhone')?.after(footerEmail);
  }
  const socialHost = $('#footerSocials');
  const configuredSocials = (config.socialLinks || []).filter((social) => /^https?:\/\//i.test(social.url || ''));
  if (socialHost && configuredSocials.length) {
    socialHost.replaceChildren();
    configuredSocials.forEach((social) => { const link = create('a', '', social.label); link.href = social.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; socialHost.append(link); });
  } else { socialHost?.classList.add('is-hidden'); }
  setLink($('#directionsLink'), config.contact.mapsUrl);

  // Expose the chosen palette through CSS variables; one place to rebrand.
  const root = document.documentElement;
  const cssColorMap = { paper: '--paper', ink: '--ink', green: '--green', olive: '--olive', clay: '--clay', yellow: '--yellow' };
  Object.entries(config.brand.colors || {}).forEach(([key, value]) => {
    if (cssColorMap[key] && /^#[0-9a-f]{3,8}$/i.test(value)) root.style.setProperty(cssColorMap[key], value);
  });
  if (config.brand.fonts?.display && /^[a-z0-9 ,'-]+$/i.test(config.brand.fonts.display)) root.style.setProperty('--display', `\"${config.brand.fonts.display}\", Georgia, serif`);
  if (config.brand.fonts?.body && /^[a-z0-9 ,'-]+$/i.test(config.brand.fonts.body)) root.style.setProperty('--body', `\"${config.brand.fonts.body}\", Arial, sans-serif`);
  if (config.brand.logoPath) {
    $$('.wordmark-symbol').forEach((symbol) => { const image = create('img', 'brand-logo-image'); image.src = config.brand.logoPath; image.alt = ''; image.loading = 'eager'; symbol.replaceChildren(image); });
  }

  // Menu explorer: filters are real, and unavailable items remain clearly labelled.
  let activeCategory = 'All';
  const filterHost = $('#menuFilters');
  const menuHost = $('#menuGrid');
  const menuCount = $('#menuCount');
  function renderFilters() {
    if (!filterHost) return;
    filterHost.replaceChildren();
    (config.menuCategories || ['All']).forEach((category) => {
      const button = create('button', 'filter-button', category);
      button.type = 'button';
      button.setAttribute('aria-pressed', String(category === activeCategory));
      button.addEventListener('click', () => {
        if (activeCategory === category) return;
        activeCategory = category;
        $$('.filter-button', filterHost).forEach((item) => item.setAttribute('aria-pressed', String(item.textContent === category)));
        renderMenu();
      });
      filterHost.append(button);
    });
  }
  function renderMenu() {
    if (!menuHost) return;
    const items = (config.menuItems || []).filter((item) => activeCategory === 'All' || item.category === activeCategory);
    menuHost.replaceChildren();
    if (!items.length) {
      const empty = create('p', 'menu-empty', 'Nothing in this category just now. Try another part of the menu.');
      menuHost.append(empty);
    }
    items.forEach((item, index) => {
      const card = create('article', `menu-card${item.available === false ? ' unavailable' : ''}`);
      card.style.animationDelay = `${Math.min(index * 45, 240)}ms`;
      const media = create('div', 'menu-card-image');
      media.append(makeImage(item.image, `${item.name} sample menu photography`));
      if (item.tags && item.tags.length) media.append(create('span', 'menu-card-tag', item.tags[0]));
      if (item.available === false) media.append(create('span', 'sold-out', 'Not configured / unavailable'));
      const info = create('div', 'menu-card-info');
      const top = create('div', 'menu-card-top');
      top.append(create('h3', '', item.name), create('span', 'menu-price', money(item.price)));
      info.append(top, create('div', 'menu-card-note', item.note || item.category), create('p', 'menu-card-desc', item.description || 'A sample item description.'));
      card.append(media, info);
      menuHost.append(card);
    });
    text(menuCount, `${items.length} ${items.length === 1 ? 'item' : 'items'}${activeCategory === 'All' ? ' on the sample menu' : ` in ${activeCategory}`}`);
    // When available, FLIP-style opacity/position transitions keep filtering tactile.
    if (window.gsap && !reducedMotion) {
      window.gsap.fromTo($$('.menu-card', menuHost), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .32, stagger: .035, ease: 'power2.out', clearProps: 'all' });
    }
  }
  renderFilters();
  renderMenu();

  // Signature feature and seasonal toggle are configured centrally.
  const seasonal = config.seasonal || {};
  const seasonalVisible = seasonal.enabled !== false && (!config.demoMode.enabled || config.demoMode.showSeasonalFeature !== false);
  if (!seasonalVisible) $('#seasonal')?.classList.add('is-hidden');
  else {
    text($('#seasonalItemName'), seasonal.name);
    text($('#seasonalItemPrice'), money(seasonal.price));
    text($('#seasonalDescription'), seasonal.description);
    const seasonalTitle = $('#seasonalTitle');
    if (seasonalTitle && seasonal.headingBefore) { seasonalTitle.replaceChildren(document.createTextNode(seasonal.headingBefore), document.createElement('br'), create('em', '', seasonal.headingEmphasis), document.createElement('br'), document.createTextNode(seasonal.headingAfter)); }
    const seasonalImage = $('#seasonal .seasonal-image img');
    if (seasonalImage && seasonal.image) seasonalImage.src = seasonal.image;
  }

  // Sample reviews are visually clear as fictional and can be disabled for a real brand.
  const reviewSection = $('#voices');
  const showReviews = config.demoMode.enabled ? config.demoMode.showSampleReviews && (config.reviews || []).length > 0 : (config.reviews || []).length > 0;
  if (!showReviews) reviewSection?.classList.add('is-hidden');
  const reviewHost = $('#reviewGrid');
  if (reviewHost && showReviews) {
    reviewHost.replaceChildren();
    (config.reviews || []).forEach((review) => {
      const card = create('article', 'review-card');
      card.append(create('span', 'review-quote-mark', '“'));
      const quote = create('blockquote', '', review.quote);
      const foot = create('footer');
      foot.append(create('strong', '', review.author || 'Guest'), create('span', '', review.detail || (config.demoMode.enabled ? 'Sample content · replace before launch' : '')));
      card.append(quote, foot);
      reviewHost.append(card);
    });
  }

  // Journal cards and detail pages both read from the same data.
  const journalHost = $('#journalGrid');
  if (journalHost) {
    journalHost.replaceChildren();
    (config.articles || []).forEach((article) => {
      const card = create('article', 'journal-card');
      const link = create('a', 'journal-card-image');
      link.href = `journal.html?article=${encodeURIComponent(article.id)}`;
      link.setAttribute('aria-label', `Read: ${article.title}`);
      link.append(makeImage(article.image, article.title));
      const body = create('div', 'journal-card-body');
      const meta = create('div', 'journal-card-meta');
      meta.append(create('span', '', article.category), create('span', '', article.readTime));
      const title = create('h3');
      const titleLink = create('a', '', article.title);
      titleLink.href = `journal.html?article=${encodeURIComponent(article.id)}`;
      title.append(titleLink);
      body.append(meta, title, create('p', '', article.excerpt));
      const read = create('a', 'text-link', 'Read the note ↗');
      read.href = `journal.html?article=${encodeURIComponent(article.id)}`;
      body.append(read);
      card.append(link, body);
      journalHost.append(card);
    });
  }

  // Responsive photo gallery with keyboard- and touch-friendly lightbox controls.
  const galleryHost = $('#galleryGrid');
  const galleryItems = config.gallery || [];
  const lightbox = $('#lightbox');
  const lightboxImage = $('#lightboxImage');
  const lightboxCaption = $('#lightboxCaption');
  let lightboxIndex = 0;
  let previousFocus = null;
  let touchStartX = 0;
  function updateLightbox(index) {
    if (!galleryItems.length || !lightboxImage) return;
    lightboxIndex = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[lightboxIndex];
    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt || '';
    text(lightboxCaption, item.caption || 'Daybook Café');
  }
  function openLightbox(index, trigger) {
    if (!lightbox) return;
    previousFocus = trigger || document.activeElement;
    updateLightbox(index);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    $('#lightboxClose')?.focus();
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
  }
  if (galleryHost) {
    galleryHost.replaceChildren();
    galleryItems.forEach((item, index) => {
      const button = create('button', 'gallery-item');
      button.type = 'button';
      button.setAttribute('aria-label', `Open photo: ${item.caption || item.alt}`);
      button.append(makeImage(item.src, item.alt));
      button.append(create('span', '', item.caption || 'A closer look'));
      button.addEventListener('click', () => openLightbox(index, button));
      galleryHost.append(button);
    });
  }
  $('#lightboxClose')?.addEventListener('click', closeLightbox);
  $('#lightboxPrev')?.addEventListener('click', () => updateLightbox(lightboxIndex - 1));
  $('#lightboxNext')?.addEventListener('click', () => updateLightbox(lightboxIndex + 1));
  lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
  lightbox?.addEventListener('touchstart', (event) => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
  lightbox?.addEventListener('touchend', (event) => {
    const delta = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(delta) > 55) updateLightbox(lightboxIndex + (delta < 0 ? 1 : -1));
  }, { passive: true });
  document.addEventListener('keydown', (event) => {
    if (!lightbox?.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') updateLightbox(lightboxIndex - 1);
    if (event.key === 'ArrowRight') updateLightbox(lightboxIndex + 1);
    if (event.key === 'Tab') {
      const focusables = $$('button', lightbox).filter((el) => !el.disabled);
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  // Mobile navigation: supports touch, keyboard and Escape without trapping normal scroll.
  const menuToggle = $('#menuToggle');
  const header = $('#siteHeader');
  const primaryNav = $('#primaryNav');
  function setMobileMenu(open) {
    header?.classList.toggle('mobile-open', open);
    document.body.classList.toggle('menu-open', open);
    menuToggle?.setAttribute('aria-expanded', String(open));
    menuToggle?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (open) primaryNav?.querySelector('a')?.focus({ preventScroll: true });
  }
  menuToggle?.addEventListener('click', () => setMobileMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  $$('.primary-nav a').forEach((link) => link.addEventListener('click', () => setMobileMenu(false)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && header?.classList.contains('mobile-open')) { setMobileMenu(false); menuToggle?.focus(); } });
  document.addEventListener('click', (event) => {
    if (header?.classList.contains('mobile-open') && !header.contains(event.target) && !primaryNav?.contains(event.target)) setMobileMenu(false);
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 820) setMobileMenu(false); });

  // Inquiry form: no fake server submission. Build an encoded WhatsApp or email draft.
  const form = $('#inquiryForm');
  const formError = $('#formError');
  const formStatus = $('#formStatus');
  const dateInput = $('#visitDate');
  if (dateInput) {
    const today = new Date();
    dateInput.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  }
  function validWhatsAppNumber(number) { return /^\d{8,15}$/.test(String(number || '').replace(/\D/g, '')); }
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) {
      text(formError, 'Please check the required details above.');
      if (formError) formError.hidden = false;
      return;
    }
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    const lines = [
      `Hello ${config.brand.fullName || config.brand.name},`,
      '',
      `My name is ${values.name}.`,
      `Reply to: ${values.contact}`,
      `Inquiry: ${values.type}`,
      `Group size: ${values.party}`,
      `Preferred date: ${values.date || 'Flexible'}`,
      `Preferred time: ${values.time}`,
      values.message ? `A little more detail: ${values.message}` : '',
      '',
      'I understand this is an inquiry only and does not confirm availability.'
    ].filter(Boolean);
    const message = lines.join('\n');
    if (formError) formError.hidden = true;
    if (formStatus) {
      formStatus.replaceChildren();
      text(formStatus, 'Your message draft is ready. Nothing has been sent and no reservation has been made.');
    }
    const whatsApp = String(config.contact.whatsapp || '').replace(/\D/g, '');
    if (validWhatsAppNumber(whatsApp)) {
      const link = `https://wa.me/${whatsApp}?text=${encodeURIComponent(message)}`;
      const anchor = create('a', '', 'Open WhatsApp draft');
      anchor.href = link;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.addEventListener('click', () => { if (formStatus) text(formStatus, 'WhatsApp is opening with a prefilled draft. Choose whether to send it in WhatsApp.'); });
      formStatus?.append(document.createTextNode(' '), anchor);
      window.open(link, '_blank', 'noopener,noreferrer');
    } else if (config.contact.email && !/\.example$/i.test(config.contact.email)) {
      const subject = encodeURIComponent(`${config.brand.fullName || config.brand.name} — ${values.type}`);
      const body = encodeURIComponent(message);
      window.location.href = `mailto:${config.contact.email}?subject=${subject}&body=${body}`;
      const anchor = create('a', '', 'Open email draft');
      anchor.href = `mailto:${config.contact.email}?subject=${subject}&body=${body}`;
      formStatus?.append(document.createTextNode(' '), anchor);
    } else {
      if (formStatus) text(formStatus, 'The form is working, but no real contact channel is configured. Add a verified email or WhatsApp number in src/config.js to enable the message action.');
    }
  });

  // Signature scroll experience: image crossfades are scroll-scrubbed on desktop.
  const scenes = $$('.journey-scene');
  const stepLabel = $('#journeyStep');
  const sceneButtons = $$('.journey-mobile-controls button');
  function setScene(index) {
    scenes.forEach((scene, i) => scene.classList.toggle('is-active', i === index));
    sceneButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    text(stepLabel, String(index + 1).padStart(2, '0'));
  }
  sceneButtons.forEach((button) => button.addEventListener('click', () => setScene(Number(button.dataset.scene) || 0)));

  // Utility behavior for sticky header and back-to-top.
  const backToTop = $('#backToTop');
  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    header?.classList.toggle('is-scrolled', y > 24);
    backToTop?.classList.toggle('is-visible', y > 650);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }));

  // Intersection-based nav state remains useful if GSAP is unavailable.
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        $$('.primary-nav a[href^="#"]').forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    $$('main section[id]').forEach((section) => sectionObserver.observe(section));
  }

  // GSAP uses ScrollTrigger for actual scroll-linked behavior; content remains visible if unavailable.
  function initMotion() {
    if (!window.gsap || !window.ScrollTrigger || reducedMotion) {
      document.documentElement.dataset.motion = reducedMotion ? 'reduced' : 'fallback';
      return;
    }
    try {
      const gsap = window.gsap;
      gsap.registerPlugin(window.ScrollTrigger);
      document.documentElement.classList.add('js-motion');
      document.documentElement.dataset.motion = 'gsap-scrolltrigger';
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl.from('.hero-eyebrow', { y: 13, opacity: 0, duration: .5 })
        .from('.hero h1', { y: 35, opacity: 0, duration: .85 }, '-=.25')
        .from('.hero-lede', { y: 17, opacity: 0, duration: .55 }, '-=.45')
        .from('.hero-actions > *', { y: 12, opacity: 0, duration: .45, stagger: .09 }, '-=.3')
        .from('.hero-bottomline', { opacity: 0, duration: .5 }, '-=.2')
        .from('.hero-photo', { scale: 1.08, duration: 1.25, ease: 'power2.out' }, 0);

      $$('.story-copy h2, .craft h2, .occasions h2, .seasonal h2, .voices h2, .inquiry h2, .journal h2').forEach((heading) => {
        gsap.from(heading, { y: 28, opacity: 0, duration: .75, ease: 'power2.out', scrollTrigger: { trigger: heading, start: 'top 84%', once: true } });
      });
      $$('.section-meta, .eyebrow, .story-copy .body-copy, .story-signoff, .occasion-list > a, .review-card, .journal-card').forEach((element) => {
        gsap.from(element, { y: 18, opacity: 0, duration: .6, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 92%', once: true } });
      });
      $$('.reveal-mask img').forEach((image) => {
        gsap.fromTo(image, { scale: 1.09 }, { scale: 1, duration: 1.2, ease: 'power2.out', scrollTrigger: { trigger: image.parentElement, start: 'top 85%', once: true } });
      });
      $$('[data-parallax]').forEach((container) => {
        const img = $('img', container);
        if (!img) return;
        const amount = Number(container.dataset.parallax) || .08;
        gsap.fromTo(img, { yPercent: -amount * 100 }, { yPercent: amount * 100, ease: 'none', scrollTrigger: { trigger: container, start: 'top bottom', end: 'bottom top', scrub: .6 } });
      });
      gsap.from('.menu-card', { y: 24, opacity: 0, duration: .55, stagger: .08, ease: 'power2.out', scrollTrigger: { trigger: '.menu-grid', start: 'top 85%', once: true } });
      gsap.from('.signature-image-main', { clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'power2.inOut', scrollTrigger: { trigger: '.signature-image-area', start: 'top 82%', once: true } });
      gsap.from('.visit-visual', { x: 25, opacity: 0, duration: .8, ease: 'power2.out', scrollTrigger: { trigger: '.visit', start: 'top 75%', once: true } });
      gsap.from('.inquiry-form > *', { y: 17, opacity: 0, duration: .55, stagger: .05, ease: 'power2.out', scrollTrigger: { trigger: '.inquiry-form', start: 'top 84%', once: true } });

      const journey = $('.journey');
      if (journey && scenes.length === 3 && window.innerWidth > 820) {
        // The section's sticky composition is the visual stage; this timeline maps scroll progress to scene changes.
        const journeyTl = gsap.timeline({ scrollTrigger: { trigger: journey, start: 'top top', end: 'bottom bottom', scrub: .7, invalidateOnRefresh: true } });
        gsap.set(scenes, { autoAlpha: 0, scale: 1.06 });
        gsap.set(scenes[0], { autoAlpha: 1, scale: 1 });
        journeyTl.to(scenes[0], { autoAlpha: 0, scale: .98, duration: .3 }, .31)
          .to(scenes[1], { autoAlpha: 1, scale: 1, duration: .3 }, .33)
          .to(scenes[1], { autoAlpha: 0, scale: .98, duration: .3 }, .64)
          .to(scenes[2], { autoAlpha: 1, scale: 1, duration: .3 }, .66)
          .eventCallback('onUpdate', () => {
            const progress = journeyTl.progress();
            const index = progress < .33 ? 0 : progress < .66 ? 1 : 2;
            text(stepLabel, String(index + 1).padStart(2, '0'));
            sceneButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
          });
      }
      // Refresh after fonts and image layout settle, but never block interaction waiting for them.
      window.addEventListener('load', () => window.ScrollTrigger.refresh(), { once: true });
    } catch (error) {
      document.documentElement.classList.remove('js-motion');
      document.documentElement.dataset.motion = 'fallback-error';
      console.warn('Motion enhancement failed; base content remains available.', error);
    }
  }
  initMotion();
})();
