const C = window.GOODMOMENT_CONTENT;

function bindContent() {
  document.querySelectorAll('[data-content]').forEach(el => {
    const path = el.dataset.content.split('.');
    let value = C;
    path.forEach(k => value = value?.[k]);
    if (value == null) return;

    if (el.tagName === 'IMG') el.src = value;
    else if (el.tagName === 'A' && /Link$/.test(path[path.length - 1])) el.href = value;
    else el.innerHTML = String(value).replace(/\n/g, '<br>');
  });

  const primary = document.querySelector('[data-content="featured.primaryCta"]');
  const secondary = document.querySelector('[data-content="featured.secondaryCta"]');
  if (primary) primary.href = C.featured.primaryLink || '#';
  if (secondary) secondary.href = C.featured.secondaryLink || '#';
}

function renderMoments() {
  document.querySelector('#momentGrid').innerHTML = C.moments.map(m => `
    <a class="moment-card" href="${m.link || '#'}">
      <div class="image-frame"><img src="${m.image}" alt="${m.title}"></div>
      <h3>${m.title}</h3>
      <p>${m.subtitle}</p>
      <span>Explore →</span>
    </a>
  `).join('');
}

function renderFeaturedProducts() {
  document.querySelector('#featuredProducts').innerHTML = C.featured.products.map((p, i) => `
    <div class="product-row"><span><b>${String(i+1).padStart(2,'0')}</b> ${p.name}</span><span>${p.price}</span></div>
  `).join('');
}

function renderJournal() {
  document.querySelector('#journalGrid').innerHTML = C.journal.map(j => `
    <article class="journal-card">
      <a href="${j.link || '#'}"><div class="image-frame"><img src="${j.image}" alt="${j.title}"></div></a>
      <p class="eyebrow">Journal</p>
      <h3><a href="${j.link || '#'}">${j.title}</a></h3>
      <p>${j.excerpt}</p>
      <a class="text-link" href="${j.link || '#'}">Read story →</a>
    </article>
  `).join('');
}

function renderFinds() {
  document.querySelector('#findsGrid').innerHTML = C.finds.map(f => `
    <article class="find-card">
      <div class="image-frame"><img src="${f.image}" alt="${f.name}"></div>
      <div class="find-meta"><h3>${f.name}</h3><span>${f.price}</span></div>
      <p>${f.note}</p>
      <a class="text-link" href="#">Why it's here →</a>
    </article>
  `).join('');
}

function renderSocial() {
  document.querySelector('#socialGrid').innerHTML = C.social.map((src, i) => `
    <a href="#" aria-label="Good Moment social image ${i+1}"><img src="${src}" alt="Good Moment moment ${i+1}"></a>
  `).join('');
}

function setupMenu() {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-primary');
  btn.addEventListener('click', () => nav.classList.toggle('open'));
}

bindContent();
renderMoments();
renderFeaturedProducts();
renderJournal();
renderFinds();
renderSocial();
setupMenu();
