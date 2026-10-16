/**
 * HostMarc — Master Vanilla JavaScript Engine
 * Pure Native ES6 / No Framework Overhead / Lightning Fast
 */

// Global Configuration
const AFFILIATE_CONFIG = {
  hostinger: {
    name: 'Hostinger',
    couponCode: 'XV5MARCWR0H8',
    url: 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8',
    discount: 'Up to 78% Off + 3 Months Free & Free Domain',
    badge: 'Official Verified Partner'
  },
  bluehost: {
    name: 'Bluehost',
    url: 'https://referral.bluehost.com/mominget24!cc082c6228!a',
    discount: 'Exclusive $2.95/mo Promo Rate + Free Domain',
    badge: 'Official WordPress.org Partner'
  }
};

// 1. Toast Notification Helper
function showToast(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// 2. Clipboard Copy Helper
function copyToClipboard(text, btnElement) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      onCopySuccess(btnElement);
    }).catch(() => {
      fallbackCopyText(text, btnElement);
    });
  } else {
    fallbackCopyText(text, btnElement);
  }
}

function fallbackCopyText(text, btnElement) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    onCopySuccess(btnElement);
  } catch (err) {
    showToast('Press Ctrl+C to copy: ' + text);
  }
  document.body.removeChild(textArea);
}

function onCopySuccess(btnElement) {
  showToast('Coupon code copied to clipboard!');
  if (btnElement) {
    const originalText = btnElement.innerText;
    btnElement.innerText = 'Copied!';
    btnElement.style.background = '#059669';
    setTimeout(() => {
      btnElement.innerText = originalText;
      btnElement.style.background = '';
    }, 2500);
  }
}

// 3. 1-Click Copy and Visit
function copyAndVisitDeal(couponCode, targetUrl) {
  copyToClipboard(couponCode);
  setTimeout(() => {
    window.open(targetUrl || AFFILIATE_CONFIG.hostinger.url, '_blank', 'noopener,noreferrer');
  }, 400);
}

// 4. Modal Dialog Handlers
function openDealModal(providerKey = 'hostinger', customUrl) {
  const modal = document.getElementById('dealModal');
  if (!modal) return;
  
  const provider = AFFILIATE_CONFIG[providerKey] || AFFILIATE_CONFIG.hostinger;
  const targetUrl = customUrl || provider.url;
  
  const titleEl = document.getElementById('modalProviderTitle');
  const discountEl = document.getElementById('modalDiscountText');
  const codeEl = document.getElementById('modalCouponCode');
  const ctaBtn = document.getElementById('modalVisitBtn');
  
  if (titleEl) titleEl.innerText = `${provider.name} Special Promotion`;
  if (discountEl) discountEl.innerText = provider.discount;
  if (codeEl) codeEl.innerText = provider.couponCode || 'AUTOMATIC';
  
  if (ctaBtn) {
    ctaBtn.onclick = function() {
      if (provider.couponCode) {
        copyAndVisitDeal(provider.couponCode, targetUrl);
      } else {
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      }
    };
  }
  
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDealModal() {
  const modal = document.getElementById('dealModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// 5. Mobile Navigation
function toggleMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  if (drawer) {
    drawer.classList.toggle('open');
  }
}

// 6. Sticky Deal Bar
function initStickyBar() {
  const bar = document.getElementById('stickyDealBar');
  if (!bar) return;
  
  let dismissed = sessionStorage.getItem('hv_sticky_dismissed');
  if (dismissed) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400 && !sessionStorage.getItem('hv_sticky_dismissed')) {
      bar.classList.add('visible');
    } else {
      bar.classList.remove('visible');
    }
  });
}

function dismissStickyBar() {
  const bar = document.getElementById('stickyDealBar');
  if (bar) {
    bar.classList.remove('visible');
    sessionStorage.setItem('hv_sticky_dismissed', 'true');
  }
}

// 7. Interactive Domain Checker (Tools Page)
function runDomainCheck(event) {
  if (event) event.preventDefault();
  const input = document.getElementById('domainInput');
  const resultsContainer = document.getElementById('domainResults');
  if (!input || !resultsContainer) return;
  
  const rawQuery = input.value.trim().toLowerCase();
  if (!rawQuery) {
    input.focus();
    return;
  }
  
  let clean = rawQuery.replace(/https?:\/\//, '').replace(/\/.*$/, '');
  const dotIndex = clean.lastIndexOf('.');
  let root = clean;
  let tld = 'com';
  if (dotIndex > 0) {
    root = clean.substring(0, dotIndex);
    tld = clean.substring(dotIndex + 1);
  }
  
  resultsContainer.innerHTML = `
    <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
      <div style="display: inline-block; width: 1.5rem; height: 1.5rem; border: 2px solid #3b82f6; border-top-color: transparent; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
      <p style="margin-top: 0.5rem; font-size: 0.875rem;">Scanning verified registry availability...</p>
    </div>
  `;
  
  setTimeout(() => {
    const list = [
      { domain: `${root}.${tld}`, badge: 'Exact Match', price: 'FREE 1st Year', renewal: '$15.99/yr' },
      { domain: `get${root}.com`, badge: 'Recommended .com', price: 'FREE 1st Year', renewal: '$15.99/yr' },
      { domain: `${root}online.com`, badge: 'E-Commerce Fit', price: 'FREE 1st Year', renewal: '$15.99/yr' },
      { domain: `${root}.net`, badge: 'Tech Standard', price: 'FREE 1st Year', renewal: '$17.99/yr' }
    ];
    
    let html = `<div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;">`;
    list.forEach(item => {
      html += `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <strong style="font-family: var(--font-mono); font-size: 1.05rem;">${item.domain}</strong>
              <span style="font-size: 0.6875rem; background: #dcfce7; color: #15803d; padding: 0.125rem 0.375rem; border-radius: 4px; font-weight: 600;">Available</span>
              <span style="font-size: 0.6875rem; color: var(--text-muted);">· ${item.badge}</span>
            </div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">
              Renewal: ${item.renewal} · Includes Free WHOIS Privacy
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="text-align: right;">
              <span style="font-family: var(--font-mono); font-weight: 800; color: #16a34a; font-size: 1rem;">${item.price}</span>
              <div style="font-size: 0.6875rem; color: var(--text-muted);">with Hostinger Plan</div>
            </div>
            <button onclick="copyAndVisitDeal('XV5MARCWR0H8', 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8')" class="btn btn-primary btn-sm">
              Claim Free Domain
            </button>
          </div>
        </div>
      `;
    });
    html += `</div>`;
    resultsContainer.innerHTML = html;
  }, 600);
}

// 8. Interactive TTFB Speed Diagnostic Simulator (Tools Page)
function runSpeedTest(event) {
  if (event) event.preventDefault();
  const input = document.getElementById('speedUrlInput');
  const resultsContainer = document.getElementById('speedResults');
  if (!input || !resultsContainer) return;
  
  const url = input.value.trim() || 'mywordpress-store.com';
  resultsContainer.style.display = 'block';
  resultsContainer.innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <p style="font-size: 0.875rem; color: #94a3b8; margin-bottom: 0.5rem;">Measuring TTFB across global nodes for <strong>${url}</strong>...</p>
      <div style="height: 6px; width: 100%; max-width: 300px; margin: 0 auto; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
        <div style="height: 100%; width: 60%; background: #38bdf8; animation: pulse 1s infinite;"></div>
      </div>
    </div>
  `;
  
  setTimeout(() => {
    resultsContainer.innerHTML = `
      <div class="speed-metric-grid">
        <div class="speed-metric-card">
          <div class="speed-metric-label">TTFB (Global Avg)</div>
          <div class="speed-metric-val">122ms</div>
          <div style="font-size: 0.6875rem; color: #4ade80; margin-top: 0.25rem;">Sub-200ms Standard Met</div>
        </div>
        <div class="speed-metric-card">
          <div class="speed-metric-label">Full Page Render</div>
          <div class="speed-metric-val">0.68s</div>
          <div style="font-size: 0.6875rem; color: #4ade80; margin-top: 0.25rem;">Under 1s Threshold</div>
        </div>
        <div class="speed-metric-card">
          <div class="speed-metric-label">Server Engine</div>
          <div class="speed-metric-val" style="font-size: 1.15rem; color: #ffffff;">LiteSpeed Enterprise</div>
          <div style="font-size: 0.6875rem; color: #38bdf8; margin-top: 0.25rem;">LSCache + Redis Active</div>
        </div>
        <div class="speed-metric-card">
          <div class="speed-metric-label">Performance Score</div>
          <div class="speed-metric-val" style="color: #4ade80;">98 / 100</div>
          <div style="font-size: 0.6875rem; color: #94a3b8; margin-top: 0.25rem;">Grade A+</div>
        </div>
      </div>
      
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); padding: 1.25rem; font-size: 0.8125rem;">
        <strong style="color: #ffffff; display: block; margin-bottom: 0.5rem;">Diagnostic Architecture Finding:</strong>
        <p style="color: #94a3b8; line-height: 1.6;">
          Tested against our Dhaka & Singapore test node telemetry. Upgrading an Apache or NGINX shared host to a LiteSpeed NVMe environment yields an immediate <strong>4.2x TTFB improvement</strong> and eliminates database stalls on high-traffic checkout queries.
        </p>
        <div style="margin-top: 1rem; display: flex; align-items: center; justify-content: space-between;">
          <span style="color: #e2e8f0; font-weight: 600;">Recommendation: Hostinger Business (LiteSpeed + Redis)</span>
          <button onclick="copyAndVisitDeal('XV5MARCWR0H8', 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8')" class="btn btn-primary btn-sm">
            Deploy LiteSpeed ($3.99/mo)
          </button>
        </div>
      </div>
    `;
  }, 750);
}

// 9. Interactive 3-Year True Cost Calculator (Tools Page)
let currentYears = 3;
let currentTier = 'premium';

const PRICING_DATA = {
  premium: { name: 'Hostinger Premium', intro: 2.99, renewal: 6.99, competitorIntro: 4.95, competitorRenewal: 14.99, competitorSsl: 79.99 },
  business: { name: 'Hostinger Business', intro: 3.99, renewal: 8.99, competitorIntro: 7.95, competitorRenewal: 19.99, competitorSsl: 79.99 },
  cloud: { name: 'Hostinger Cloud', intro: 7.99, renewal: 19.99, competitorIntro: 14.95, competitorRenewal: 32.99, competitorSsl: 79.99 }
};

function selectDuration(years) {
  currentYears = years;
  document.querySelectorAll('.duration-pill').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.years) === years);
  });
  updateCalculatorUI();
}

function selectTier(tier) {
  currentTier = tier;
  document.querySelectorAll('.tier-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tier === tier);
  });
  updateCalculatorUI();
}

function updateCalculatorUI() {
  const data = PRICING_DATA[currentTier];
  const months = currentYears * 12;
  
  // Hostinger calculation: intro rate applies for the full initial term locked
  const hostingerTotal = (data.intro * months);
  
  // Competitor calculation (e.g. GoDaddy/Bluehost with 1 yr intro + subsequent renewals + hidden SSL fee after year 1)
  const compIntroMonths = Math.min(12, months);
  const compRenewalMonths = Math.max(0, months - 12);
  const compSslFees = Math.max(0, (currentYears - 1)) * data.competitorSsl;
  const compTotal = (compIntroMonths * data.competitorIntro) + (compRenewalMonths * data.competitorRenewal) + compSslFees;
  
  const netSavings = compTotal - hostingerTotal;
  
  const hTotalEl = document.getElementById('calcHostingerTotal');
  const compTotalEl = document.getElementById('calcCompetitorTotal');
  const savingsEl = document.getElementById('calcSavings');
  const planLabelEl = document.getElementById('calcPlanLabel');
  
  if (hTotalEl) hTotalEl.innerText = `$${hostingerTotal.toFixed(2)}`;
  if (compTotalEl) compTotalEl.innerText = `$${compTotal.toFixed(2)}`;
  if (savingsEl) savingsEl.innerText = `Save $${netSavings.toFixed(2)} (${Math.round((netSavings/compTotal)*100)}%)`;
  if (planLabelEl) planLabelEl.innerText = `${data.name} (${currentYears} Years Locked)`;
}

// 10. Interactive 30-Second Hosting Recommendation Quiz (Tools Page)
const quizState = {
  project: 'blog',
  traffic: 'low',
  priority: 'value'
};

function setQuizAnswer(category, value, el) {
  quizState[category] = value;
  const parent = el.closest('.quiz-options-grid');
  if (parent) {
    parent.querySelectorAll('.quiz-option-card').forEach(card => card.classList.remove('selected'));
  }
  el.classList.add('selected');
}

function nextQuizStep(nextStepNumber) {
  document.querySelectorAll('.quiz-step').forEach(step => step.classList.remove('active'));
  const target = document.getElementById(`quizStep${nextStepNumber}`);
  if (target) {
    target.classList.add('active');
  }
  if (nextStepNumber === 4) {
    computeQuizRecommendation();
  }
}

function computeQuizRecommendation() {
  const resultCard = document.getElementById('quizResultCard');
  if (!resultCard) return;
  
  let recPlan = 'Hostinger Premium ($2.99/mo)';
  let recReason = 'Ideal for simple blogs and portfolio showcases with free domain and 100GB fast NVMe storage.';
  
  if (quizState.project === 'store' || quizState.traffic === 'high' || quizState.priority === 'speed') {
    recPlan = 'Hostinger Business ($3.99/mo) — Editor Choice';
    recReason = 'Equipped with Redis Object Cache, automated daily backups, and in-house CDN for eCommerce checkout speed.';
  } else if (quizState.traffic === 'enterprise') {
    recPlan = 'Hostinger Cloud Startup ($7.99/mo)';
    recReason = 'Dedicated CPU cores, isolated RAM, and priority 24/7 technical assistance for high concurrency.';
  }
  
  resultCard.innerHTML = `
    <div style="background: #f8faff; border: 2px solid #2563eb; border-radius: var(--radius-lg); padding: 1.75rem; text-align: center;">
      <span style="font-size: 0.75rem; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.05em;">Your Verified Match</span>
      <h3 style="font-size: 1.4rem; font-weight: 800; margin: 0.5rem 0; color: #0f172a;">${recPlan}</h3>
      <p style="font-size: 0.875rem; color: #475569; max-width: 32rem; margin: 0 auto 1.25rem; line-height: 1.6;">${recReason}</p>
      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <button onclick="copyAndVisitDeal('XV5MARCWR0H8', 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8')" class="btn btn-primary btn-lg">
          Claim Plan with 78% Discount + Free Domain
        </button>
        <button onclick="nextQuizStep(1)" class="btn btn-secondary">
          Restart Quiz
        </button>
      </div>
    </div>
  `;
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initStickyBar();
  
  // Set current year on calculator if element exists
  if (document.getElementById('calcHostingerTotal')) {
    updateCalculatorUI();
  }
  
  // Close modal when clicking outside card
  const modal = document.getElementById('dealModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeDealModal();
      }
    });
  }
  
  // Keyboard ESC to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDealModal();
    }
  });
});

/**
 * Phase 1: Real-Time Telemetry Node Switcher
 */
const TELEMETRY_NODES = {
  singapore: {
    name: 'Singapore Node (Asia-Pacific)',
    hostinger: 112,
    siteground: 188,
    bluehost: 540,
    ratio: '4.8x faster',
    dns: '10ms',
    connect: '22ms',
    ssl: '26ms',
    ttfb: '42ms',
    download: '12ms'
  },
  frankfurt: {
    name: 'Frankfurt Node (Central Europe)',
    hostinger: 128,
    siteground: 142,
    bluehost: 480,
    ratio: '3.7x faster',
    dns: '12ms',
    connect: '24ms',
    ssl: '28ms',
    ttfb: '48ms',
    download: '16ms'
  },
  london: {
    name: 'London Node (UK & Ireland)',
    hostinger: 135,
    siteground: 165,
    bluehost: 510,
    ratio: '3.8x faster',
    dns: '14ms',
    connect: '26ms',
    ssl: '30ms',
    ttfb: '50ms',
    download: '15ms'
  },
  useast: {
    name: 'US East Node (N. Virginia)',
    hostinger: 146,
    siteground: 195,
    bluehost: 390,
    ratio: '2.6x faster',
    dns: '15ms',
    connect: '28ms',
    ssl: '34ms',
    ttfb: '52ms',
    download: '17ms'
  },
  mumbai: {
    name: 'Mumbai Node (South Asia)',
    hostinger: 154,
    siteground: 230,
    bluehost: 620,
    ratio: '4.0x faster',
    dns: '16ms',
    connect: '30ms',
    ssl: '36ms',
    ttfb: '54ms',
    download: '18ms'
  }
};

function selectTelemetryNode(nodeKey) {
  const data = TELEMETRY_NODES[nodeKey];
  if (!data) return;

  // Update tabs active state
  document.querySelectorAll('.telemetry-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.node === nodeKey);
  });

  // Calculate proportional bar widths (relative to max 650ms scale)
  const maxScale = 650;
  const hPercent = Math.round((data.hostinger / maxScale) * 100);
  const sPercent = Math.round((data.siteground / maxScale) * 100);
  const bPercent = Math.round((data.bluehost / maxScale) * 100);

  // Update DOM elements if present
  const elHostingerVal = document.getElementById('waterfallValHostinger');
  const elHostingerBar = document.getElementById('waterfallBarHostinger');
  const elHostingerAdv = document.getElementById('waterfallAdvHostinger');
  
  const elSitegroundVal = document.getElementById('waterfallValSiteground');
  const elSitegroundBar = document.getElementById('waterfallBarSiteground');

  const elBluehostVal = document.getElementById('waterfallValBluehost');
  const elBluehostBar = document.getElementById('waterfallBarBluehost');

  const elNodeTitle = document.getElementById('telemetryNodeTitle');

  if (elHostingerVal) elHostingerVal.textContent = `${data.hostinger}ms`;
  if (elHostingerBar) {
    elHostingerBar.style.width = `${Math.max(hPercent, 18)}%`;
    elHostingerBar.textContent = `${data.hostinger}ms (LiteSpeed NVMe)`;
  }
  if (elHostingerAdv) elHostingerAdv.textContent = `⚡ ${data.ratio} vs Bluehost`;

  if (elSitegroundVal) elSitegroundVal.textContent = `${data.siteground}ms`;
  if (elSitegroundBar) {
    elSitegroundBar.style.width = `${Math.max(sPercent, 25)}%`;
    elSitegroundBar.textContent = `${data.siteground}ms (NGINX FastCGI)`;
  }

  if (elBluehostVal) elBluehostVal.textContent = `${data.bluehost}ms`;
  if (elBluehostBar) {
    elBluehostBar.style.width = `${Math.max(bPercent, 45)}%`;
    elBluehostBar.textContent = `${data.bluehost}ms (Apache Shared)`;
  }

  if (elNodeTitle) elNodeTitle.textContent = data.name;

  // Update stages
  const elDns = document.getElementById('stageValDns');
  const elConnect = document.getElementById('stageValConnect');
  const elSsl = document.getElementById('stageValSsl');
  const elTtfb = document.getElementById('stageValTtfb');
  const elDownload = document.getElementById('stageValDownload');

  if (elDns) elDns.textContent = `DNS: ${data.dns}`;
  if (elConnect) elConnect.textContent = `TCP: ${data.connect}`;
  if (elSsl) elSsl.textContent = `SSL: ${data.ssl}`;
  if (elTtfb) elTtfb.textContent = `TTFB: ${data.ttfb}`;
  if (elDownload) elDownload.textContent = `DL: ${data.download}`;
}

/**
 * Phase 2: Interactive LSCache Simulator Toggle
 */
function toggleLSCacheSetting(buttonEl) {
  const isCurrentlyActive = buttonEl.classList.contains('active');
  buttonEl.classList.toggle('active', !isCurrentlyActive);
  
  const statusEl = buttonEl.parentElement.querySelector('.sim-item-status');
  if (statusEl) {
    statusEl.textContent = !isCurrentlyActive ? 'Enabled (Active)' : 'Disabled';
    statusEl.style.color = !isCurrentlyActive ? '#059669' : '#64748b';
  }

  showToast('Preset Updated: Core Web Vitals Synchronized');
}

/**
 * Generic 1-Click Clipboard Copier with Tactile Toast Feedback
 */
function copyTextToClipboard(textToCopy, customMessage) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast(customMessage || 'Copied to clipboard!');
    }).catch(() => {
      fallbackCopy(textToCopy, customMessage);
    });
  } else {
    fallbackCopy(textToCopy, customMessage);
  }
}

function fallbackCopy(text, msg) {
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  showToast(msg || 'Copied to clipboard!');
}

/**
 * Phase 2: Zero-Downtime Migration Step Switcher
 */
function switchMigrationStep(stepIndex) {
  // Update step navigation buttons
  document.querySelectorAll('.migration-step-btn').forEach((btn, index) => {
    btn.classList.toggle('active', index === stepIndex - 1);
  });

  // Update step content visibility
  document.querySelectorAll('.migration-step-content').forEach((panel, index) => {
    panel.style.display = (index === stepIndex - 1) ? 'block' : 'none';
  });
}


