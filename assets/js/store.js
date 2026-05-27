// ── OURS PEPTIDES — store helpers ────────────────────────────
// Shared rendering for product cards, the placeholder vial graphic,
// and the trust marquee. Used by index.html and shop.html.

function escAttr(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/"/g, '&quot;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function catLabel(categories, id) {
  if (!categories) return '';
  const c = categories.find(c => c.id === id);
  return c ? c.label : id;
}

// Clean placeholder graphic — a lab vial on the molecular grid.
// Swap this for a real product photo by setting `image` on the product.
function vialSVG() {
  return `<svg class="vial" width="86" height="116" viewBox="0 0 86 116" fill="none"
      stroke="rgba(255,255,255,0.82)" stroke-width="2" stroke-linejoin="round">
    <rect x="29" y="6" width="28" height="11" rx="2.5" fill="rgba(42,125,225,0.55)" stroke="none"/>
    <rect x="32" y="17" width="22" height="6" fill="rgba(255,255,255,0.22)" stroke="none"/>
    <path d="M27 23 h32 v74 a13 13 0 0 1 -13 13 h-6 a13 13 0 0 1 -13 -13 z"/>
    <path d="M27 64 h32 v33 a13 13 0 0 1 -13 13 h-6 a13 13 0 0 1 -13 -13 z" fill="rgba(42,125,225,0.30)" stroke="none"/>
    <circle cx="43" cy="46" r="2.5" fill="#2a7de1" stroke="none"/>
    <circle cx="38" cy="78" r="2" fill="rgba(255,255,255,0.5)" stroke="none"/>
    <circle cx="50" cy="90" r="2.5" fill="rgba(255,255,255,0.5)" stroke="none"/>
  </svg>`;
}

// One product card. `categories` is optional (used for the category chip label).
function productCardHTML(p, categories) {
  const label = catLabel(categories, p.category);
  const visual = p.image
    ? `<img src="${escAttr(p.image)}" alt="${escAttr(p.name)}" loading="lazy" />`
    : vialSVG();
  return `
    <div class="prod-card" data-cat="${escAttr(p.category)}">
      <div class="prod-visual">
        ${label ? `<span class="tag prod-cat-chip">${escAttr(label)}</span>` : ''}
        ${visual}
      </div>
      <div class="prod-body">
        <h3>${escAttr(p.name)}</h3>
        <p>${escAttr(p.description || '')}</p>
        <div class="prod-foot">
          <span class="prod-price">$${escAttr(p.price)}<small>per vial</small></span>
          <button class="snipcart-add-item btn btn-primary btn-add"
            data-item-id="${escAttr(p.id)}"
            data-item-name="${escAttr(p.name)}"
            data-item-price="${escAttr(p.price)}"
            data-item-url="/shop.html"
            data-item-description="${escAttr(p.description || '')}"
            data-item-categories="${escAttr(label)}">Add to cart</button>
        </div>
      </div>
    </div>`;
}

// Scrolling band of trust statements (replaces the old logo marquee).
function renderTrustMarquee(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  const check = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;
  const items = [
    '≥99% HPLC Purity', 'COA With Every Order', 'Third-Party Lab Tested',
    'US-Based Fulfillment', 'Free Shipping Over $150', 'Secure & Discreet'
  ];
  const run = items.map(t => `<span class="pill">${check}${t}</span><span class="sep"></span>`).join('');
  el.innerHTML = run + run; // duplicated for a seamless -50% loop
}
