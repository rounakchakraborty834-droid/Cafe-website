(() => {
  'use strict';
  const config = window.CAFE_CONFIG;
  if (!config) return;
  const $ = (s) => document.querySelector(s);
  const articleId = new URLSearchParams(window.location.search).get('article') || (config.articles[0] && config.articles[0].id);
  const article = (config.articles || []).find((item) => item.id === articleId) || (config.articles || [])[0];
  if (!article) {
    const heading = $('#articleTitle');
    if (heading) heading.textContent = 'A little note is on its way.';
    return;
  }
  const set = (selector, value) => { const node = $(selector); if (node && value != null) node.textContent = value; };
  document.title = `${article.title} — ${config.brand.fullName || config.brand.name} Journal`;
  set('#articleCategory', article.category);
  set('#articleTitle', article.title);
  set('#articleExcerpt', article.excerpt);
  set('#articleReadTime', article.readTime);
  set('#currentYear', new Date().getFullYear());
  document.querySelectorAll('[data-brand-name]').forEach((node) => { node.textContent = config.brand.name; });
  const agencyName = document.querySelector('#articleVayoraName');
  if (agencyName && config.agency.url && /^https?:\/\//i.test(config.agency.url)) {
    const link = document.createElement('a'); link.href = config.agency.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = config.agency.name || 'Vayora'; agencyName.replaceWith(link);
  } else if (agencyName) agencyName.textContent = config.agency.name || 'Vayora';
  if (!config.demoMode.enabled || !config.demoMode.showBanner) $('#articleDemoRibbon')?.classList.add('is-hidden');
  const image = $('#articleImage');
  if (image) {
    image.src = article.image;
    image.alt = article.title;
    image.addEventListener('error', () => image.classList.add('image-failed'), { once: true });
  }
  set('#articleImageCaption', `${article.category.toLowerCase()} · sample photography`);
  const body = $('#articleBody');
  if (body) {
    body.replaceChildren();
    (article.body || []).forEach((paragraph) => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      body.append(p);
    });
  }
})();
