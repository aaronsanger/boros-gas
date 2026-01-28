class SlidePresentation {
  constructor() {
    this.currentSlide = 1;
    this.totalSlides = slidesData.length;
    this.container = document.getElementById('slidesContainer');
    this.init();
  }

  init() {
    this.renderSlides();
    this.renderDisclaimer();
    this.renderModal();
    this.bindEvents();
    this.updateUI();
  }

  renderSlides() {
    this.container.innerHTML = slidesData.map(slide => this.createSlide(slide)).join('');
    this.showSlide(1);
  }

  createSlide(slide) {
    if (slide.type === 'title') return this.createTitleSlide(slide);
    if (slide.type === 'conclusion') return this.createConclusionSlide(slide);
    if (slide.type === 'voting') return this.createVotingSlide(slide);
    return this.createContentSlide(slide);
  }

  createTitleSlide(slide) {
    const linksHtml = slide.links ? `
      <div class="title-links">
        <button class="ext-link mamikos" onclick="presentation.openModal('mamikos')">🏠 Mamikos</button>
        <button class="ext-link maps" onclick="presentation.openModal('maps')">📍 Maps</button>
      </div>
    ` : '';

    return `
      <section class="slide" data-slide="${slide.id}">
        <div class="slide-content title-slide">
          <div class="title-badge">📊 Laporan Analisis</div>
          <h1 class="main-title">${slide.title}</h1>
          <p class="subtitle">${slide.subtitle}</p>
          <div class="title-stats">
            ${slide.stats.map(s => `<div class="stat"><span class="val">${s.value}</span><span class="lbl">${s.label}</span></div>`).join('<div class="divider"></div>')}
          </div>
          ${linksHtml}
          <div class="scroll-hint">Tekan → untuk lanjut</div>
        </div>
      </section>`;
  }

  createContentSlide(slide) {
    return `
      <section class="slide" data-slide="${slide.id}">
        <div class="slide-content">
          <div class="slide-header"><span class="slide-number">${slide.number}</span><h2>${slide.title}</h2></div>
          ${slide.content}
        </div>
      </section>`;
  }

  createConclusionSlide(slide) {
    return `
      <section class="slide" data-slide="${slide.id}">
        <div class="slide-content conclusion">
          <h2>${slide.title}</h2>
          <div class="verdict-main"><span class="icon">⚖️</span><h3>${slide.verdict}</h3></div>
          <div class="points">${slide.points.map(p => `<div class="point">${p}</div>`).join('')}</div>
          <div class="footer-stats">
            <div class="stat"><span class="lbl">Total Kontribusi</span><span class="val">${slide.footer.contribution}</span></div>
            <div class="stat"><span class="lbl">Biaya Gas Total</span><span class="val">${slide.footer.gasCost}</span></div>
          </div>
          <div class="external-links conclusion-links">
            <button class="ext-link mamikos" onclick="presentation.openModal('mamikos')">🏠 Lihat Kost di Mamikos</button>
            <button class="ext-link maps" onclick="presentation.openModal('maps')">📍 Lihat di Google Maps</button>
          </div>
        </div>
      </section>`;
  }

  createVotingSlide(slide) {
    const optionsHtml = slide.options.map(opt => `
      <button class="vote-option" data-vote="${opt.id}" onclick="submitVote('${opt.id}')">
        <span class="vote-emoji">${opt.emoji}</span>
        <span class="vote-label">${opt.label}</span>
        <span class="vote-desc">${opt.desc}</span>
      </button>
    `).join('');

    return `
      <section class="slide" data-slide="${slide.id}">
        <div class="slide-content voting">
          <h2>${slide.title}</h2>
          <p class="vote-question">${slide.question}</p>
          <div class="vote-options">${optionsHtml}</div>
          <div class="vote-result" id="voteResult" style="display: none;">
            <div class="result-icon">🎉</div>
            <div class="result-text">Terima kasih atas pendapat Anda!</div>
          </div>
          <div id="voteCountDisplay" class="vote-count-display"></div>
          <div class="vote-footer">
            <p>🔒 Voting disimpan secara anonim (maksimal 2 vote per IP)</p>
          </div>
        </div>
      </section>`;
  }

  vote(choice) {
    // Delegate to global submitVote function from supabase-voting.js
    if (typeof submitVote === 'function') {
      submitVote(choice);
    } else {
      // Fallback for old behavior
      const options = document.querySelectorAll('.vote-option');
      options.forEach(opt => {
        opt.classList.remove('selected');
        if (opt.dataset.vote === choice) {
          opt.classList.add('selected');
        }
      });

      const result = document.getElementById('voteResult');
      result.style.display = 'block';
      result.querySelector('.result-text').textContent =
        choice === 'tidak'
          ? '✅ Anda setuju: Penggunaan gas TIDAK BOROS!'
          : '🤔 Anda memilih: Penggunaan gas BOROS';
    }
  }

  renderDisclaimer() {
    const disclaimer = document.createElement('div');
    disclaimer.className = 'disclaimer-footer';
    disclaimer.innerHTML = `
      <div class="disclaimer-content">
        <div class="disclaimer-icon">🤖</div>
        <div class="disclaimer-text">
          <strong>Disclaimer:</strong> ${appConfig.disclaimer.text}
          <br><span class="disclaimer-date">Dibuat: ${appConfig.disclaimer.date}</span>
        </div>
        <span class="disclaimer-text-mobile">AI Generated</span>
        <button class="log-btn" onclick="presentation.openConversationLog()">📜 Log</button>
      </div>
    `;
    document.body.appendChild(disclaimer);
  }

  openConversationLog() {
    const newWindow = window.open('conversation-log.html', '_blank');
    if (newWindow) {
      newWindow.blur();
      window.focus();
    }
  }

  renderModal() {
    const modal = document.createElement('div');
    modal.id = 'linkModal';
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-overlay" onclick="presentation.closeModal()"></div>
      <div class="modal-content">
        <button class="modal-close" onclick="presentation.closeModal()">✕</button>
        <div class="modal-icon" id="modalIcon"></div>
        <h3 id="modalTitle"></h3>
        <p id="modalDescription"></p>
        <div class="modal-link-preview" id="modalLinkPreview"></div>
        <div class="modal-actions">
          <button class="modal-btn secondary" onclick="presentation.closeModal()">Tutup</button>
          <button class="modal-btn primary" id="modalDetailBtn">Lihat Detail →</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Render Image Modal
    this.renderImageModal();
  }

  renderImageModal() {
    const imageModal = document.createElement('div');
    imageModal.id = 'imageModal';
    imageModal.className = 'image-modal';
    imageModal.innerHTML = `
      <div class="image-modal-overlay" onclick="presentation.closeImageModal()"></div>
      <div class="image-modal-content">
        <button class="image-modal-close" onclick="presentation.closeImageModal()">✕</button>
        <div class="image-modal-container">
          <img src="" alt="" id="modalImage" class="modal-image">
        </div>
        <div class="image-modal-controls">
          <button class="zoom-btn" onclick="presentation.zoomOut()">➖</button>
          <button class="zoom-btn reset" onclick="presentation.zoomReset()">🔄</button>
          <button class="zoom-btn" onclick="presentation.zoomIn()">➕</button>
        </div>
        <div class="image-modal-caption" id="modalCaption"></div>
      </div>
    `;
    document.body.appendChild(imageModal);
    this.zoomLevel = 1;
    this.panX = 0;
    this.panY = 0;
    this.initImageDrag();
  }

  openImageModal(src, alt) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');

    modalImage.src = src;
    modalImage.alt = alt;
    modalCaption.textContent = alt;
    this.zoomLevel = 1;
    this.panX = 0;
    this.panY = 0;
    this.applyTransform();
    modalImage.style.cursor = 'default';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    this.zoomLevel = 1;
  }

  zoomIn() {
    if (this.zoomLevel < 3) {
      this.zoomLevel += 0.5;
      this.applyZoom();
    }
  }

  zoomOut() {
    if (this.zoomLevel > 0.5) {
      this.zoomLevel -= 0.5;
      this.applyZoom();
    }
  }

  zoomReset() {
    this.zoomLevel = 1;
    this.panX = 0;
    this.panY = 0;
    this.applyTransform();
  }

  applyZoom() {
    this.applyTransform();
  }

  applyTransform() {
    const modalImage = document.getElementById('modalImage');
    modalImage.style.transform = `scale(${this.zoomLevel}) translate(${this.panX}px, ${this.panY}px)`;
  }

  initImageDrag() {
    const modalImage = document.getElementById('modalImage');
    const container = document.querySelector('.image-modal-container');

    let isDragging = false;
    let startX, startY;
    let lastPanX, lastPanY;

    // Mouse events
    modalImage.addEventListener('mousedown', (e) => {
      if (this.zoomLevel > 1) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        lastPanX = this.panX;
        lastPanY = this.panY;
        modalImage.style.cursor = 'grabbing';
        e.preventDefault();
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging && this.zoomLevel > 1) {
        const dx = (e.clientX - startX) / this.zoomLevel;
        const dy = (e.clientY - startY) / this.zoomLevel;
        this.panX = lastPanX + dx;
        this.panY = lastPanY + dy;
        this.applyTransform();
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      modalImage.style.cursor = this.zoomLevel > 1 ? 'grab' : 'default';
    });

    // Touch events for mobile
    modalImage.addEventListener('touchstart', (e) => {
      if (this.zoomLevel > 1 && e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        lastPanX = this.panX;
        lastPanY = this.panY;
      }
    }, { passive: true });

    modalImage.addEventListener('touchmove', (e) => {
      if (isDragging && this.zoomLevel > 1 && e.touches.length === 1) {
        const dx = (e.touches[0].clientX - startX) / this.zoomLevel;
        const dy = (e.touches[0].clientY - startY) / this.zoomLevel;
        this.panX = lastPanX + dx;
        this.panY = lastPanY + dy;
        this.applyTransform();
      }
    }, { passive: true });

    modalImage.addEventListener('touchend', () => {
      isDragging = false;
    }, { passive: true });
  }

  openModal(type) {
    const modal = document.getElementById('linkModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalLinkPreview = document.getElementById('modalLinkPreview');
    const modalDetailBtn = document.getElementById('modalDetailBtn');

    if (type === 'mamikos') {
      modalIcon.textContent = '🏠';
      modalTitle.textContent = 'Kost Ibu Indri - Mamikos';
      modalDescription.textContent = 'Lihat detail kost termasuk fasilitas, harga, dan ulasan di Mamikos.';
      modalLinkPreview.textContent = 'mamikos.com/room/kost-ibu-indri...';
      modalDetailBtn.onclick = () => this.openInBackground(appConfig.links.mamikos);
    } else if (type === 'maps') {
      modalIcon.textContent = '📍';
      modalTitle.textContent = 'Lokasi Kost - Google Maps';
      modalDescription.textContent = 'Lihat lokasi kost di Jl. Kebon Kacang 9 No. 25, Tanah Abang, Jakarta Pusat.';
      modalLinkPreview.textContent = 'maps.app.goo.gl/tHHWPeTJRM75GG6h7';
      modalDetailBtn.onclick = () => this.openInBackground(appConfig.links.maps);
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    const modal = document.getElementById('linkModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openInBackground(url) {
    // Open link in background tab
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      newWindow.blur();
      window.focus();
    }
    this.closeModal();
  }

  bindEvents() {
    document.getElementById('prevBtn').addEventListener('click', () => this.prev());
    document.getElementById('nextBtn').addEventListener('click', () => this.next());
    document.getElementById('fullscreenBtn').addEventListener('click', () => this.toggleFullscreen());
    document.getElementById('infoBtn').addEventListener('click', () => this.toggleDisclaimer());
    document.addEventListener('keydown', (e) => this.handleKeyboard(e));

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    this.container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe(touchStartX, touchEndX);
    }, { passive: true });

    // Event delegation for ALL images in slides (zoomable)
    document.addEventListener('click', (e) => {
      const target = e.target;
      // Check if clicked element is an image inside slide content
      if (target.tagName === 'IMG' &&
        (target.classList.contains('evidence-img') ||
          target.classList.contains('facility-image') ||
          target.classList.contains('gas-indicator-image') ||
          target.closest('.slide-content'))) {
        this.openImageModal(target.src, target.alt || 'Gambar');
      }
    });

    // Close image modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const imageModal = document.getElementById('imageModal');
        if (imageModal && imageModal.classList.contains('active')) {
          this.closeImageModal();
        }
      }
    });
  }

  handleSwipe(startX, endX) {
    const threshold = 50;
    if (startX - endX > threshold) {
      this.next();
    } else if (endX - startX > threshold) {
      this.prev();
    }
  }

  handleKeyboard(e) {
    if (e.key === 'ArrowRight' || e.key === ' ') this.next();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'f' || e.key === 'F') this.toggleFullscreen();
    if (e.key === 'Escape') this.closeModal();
  }

  showSlide(n) {
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    const slide = document.querySelector(`[data-slide="${n}"]`);
    if (slide) slide.classList.add('active');
    this.currentSlide = n;
    this.updateUI();
  }

  next() {
    if (this.currentSlide < this.totalSlides) this.showSlide(this.currentSlide + 1);
  }

  prev() {
    if (this.currentSlide > 1) this.showSlide(this.currentSlide - 1);
  }

  updateUI() {
    document.getElementById('slideCounter').textContent = `${this.currentSlide} / ${this.totalSlides}`;
    document.getElementById('progressFill').style.width = `${(this.currentSlide / this.totalSlides) * 100}%`;
    document.getElementById('prevBtn').disabled = this.currentSlide === 1;
    document.getElementById('nextBtn').disabled = this.currentSlide === this.totalSlides;

    // Spotlight on next button for first page only
    const nextBtn = document.getElementById('nextBtn');
    if (this.currentSlide === 1) {
      nextBtn.classList.add('spotlight');
    } else {
      nextBtn.classList.remove('spotlight');
    }
  }

  toggleDisclaimer() {
    const disclaimer = document.querySelector('.disclaimer-footer');
    if (disclaimer) {
      disclaimer.classList.toggle('show');
    }
  }

  toggleFullscreen() {
    const elem = document.documentElement;
    const isFullscreen = document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement;

    if (!isFullscreen) {
      // Try standard first, then fallbacks
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { // Safari/iOS
        elem.webkitRequestFullscreen();
      } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
      } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { // Safari/iOS
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }
  }
}

let presentation;
document.addEventListener('DOMContentLoaded', () => {
  presentation = new SlidePresentation();
  initCalculator();
});

// Cost Calculator Functions
function initCalculator() {
  const gasInput = document.getElementById('gasPrice');
  const electricInput = document.getElementById('electricRate');

  if (gasInput && electricInput) {
    gasInput.addEventListener('input', updateCalculations);
    electricInput.addEventListener('input', updateCalculations);
    updateCalculations(); // Initial calculation
  }
}

function updateCalculations() {
  const gasPrice12kg = parseFloat(document.getElementById('gasPrice')?.value) || 235000;
  const electricRate = parseFloat(document.getElementById('electricRate')?.value) || 1699;

  // Gas calculations
  const gasPricePerKg = gasPrice12kg / 12;
  const gasPricePerGram = gasPricePerKg / 1000;

  // Update display
  const gasPricePerKgEl = document.getElementById('gasPricePerKg');
  const gasPricePerGramEl = document.getElementById('gasPricePerGram');
  if (gasPricePerKgEl) gasPricePerKgEl.textContent = `Rp ${formatNumber(gasPricePerKg)}`;
  if (gasPricePerGramEl) gasPricePerGramEl.textContent = `Rp ${gasPricePerGram.toFixed(1)}`;

  // Gas consumption per volume (grams) - based on ~150g/hour stove
  const gasGrams2L = 8;  // ~5 min at 150g/hour
  const gasGrams3L = 10; // ~7 min at 150g/hour
  const gasGrams5L = 15; // ~12 min at 150g/hour

  // Gas costs
  const gasCost2L = Math.round(gasGrams2L * gasPricePerGram);
  const gasCost3L = Math.round(gasGrams3L * gasPricePerGram);
  const gasCost5L = Math.round(gasGrams5L * gasPricePerGram);

  // Electric kettle: 500W, 5 min per 2L = 0.042 kWh
  const kwhPer2L = 0.042;
  const kettleCost2L = Math.round(kwhPer2L * electricRate);
  const kettleCost3L = Math.round(kwhPer2L * 2 * electricRate); // 2 rounds
  const kettleCost5L = Math.round(kwhPer2L * 3 * electricRate); // 3 rounds

  // Update table
  updateCell('gas2L', gasCost2L);
  updateCell('gas3L', gasCost3L);
  updateCell('gas5L', gasCost5L);

  updateKettleCell('kettle2L', kettleCost2L, '1× (5 min)');
  updateKettleCell('kettle3L', kettleCost3L, '2× (10 min)');
  updateKettleCell('kettle5L', kettleCost5L, '3× (15 min)');

  // Update winner cells
  updateWinner('winner2L', gasCost2L, kettleCost2L);
  updateWinner('winner3L', gasCost3L, kettleCost3L);
  updateWinner('winner5L', gasCost5L, kettleCost5L);

  // Monthly costs (30 days × 5L/day)
  const gasMonthly = gasCost5L * 30;
  const electricMonthly = kettleCost5L * 30;

  const gasMonthlyEl = document.getElementById('gasMonthly');
  const electricMonthlyEl = document.getElementById('electricMonthly');
  if (gasMonthlyEl) gasMonthlyEl.textContent = `Rp ${formatNumber(gasMonthly)}`;
  if (electricMonthlyEl) electricMonthlyEl.textContent = `Rp ${formatNumber(electricMonthly)}`;

  // Conclusion
  const conclusionEl = document.getElementById('calcConclusion');
  if (conclusionEl) {
    const diff = Math.abs(gasMonthly - electricMonthly);
    const percent = Math.round((diff / Math.max(gasMonthly, electricMonthly)) * 100);
    if (gasMonthly < electricMonthly) {
      conclusionEl.innerHTML = `🔥 Gas lebih hemat <strong>Rp ${formatNumber(diff)}/bulan</strong> (${percent}%)`;
      conclusionEl.className = 'calc-conclusion gas-wins';
    } else {
      conclusionEl.innerHTML = `⚡ Ketel listrik lebih hemat <strong>Rp ${formatNumber(diff)}/bulan</strong> (${percent}%)`;
      conclusionEl.className = 'calc-conclusion electric-wins';
    }
  }
}

function updateCell(id, cost) {
  const el = document.getElementById(id);
  if (el) el.textContent = `Rp ${formatNumber(cost)}`;
}

function updateKettleCell(id, cost, rounds) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = `Rp ${formatNumber(cost)}<br><small>${rounds}</small>`;
}

function updateWinner(id, gasCost, kettleCost) {
  const el = document.getElementById(id);
  if (!el) return;

  const diff = gasCost - kettleCost;
  const percent = Math.round((Math.abs(diff) / Math.max(gasCost, kettleCost)) * 100);

  if (gasCost < kettleCost) {
    el.innerHTML = `🔥 -${percent}%`;
    el.className = 'winner-cell gas-winner';
  } else {
    el.innerHTML = `⚡ -${percent}%`;
    el.className = 'winner-cell electric-winner';
  }
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
