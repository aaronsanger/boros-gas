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
    return this.createContentSlide(slide);
  }

  createTitleSlide(slide) {
    const linksHtml = slide.links ? `
      <div class="title-links">
        <a href="${slide.links.mamikos}" target="_blank" class="ext-link mamikos">🏠 Mamikos</a>
        <a href="${slide.links.maps}" target="_blank" class="ext-link maps">📍 Maps</a>
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
            <a href="${appConfig.links.mamikos}" target="_blank" class="ext-link mamikos">🏠 Lihat Kost di Mamikos</a>
            <a href="${appConfig.links.maps}" target="_blank" class="ext-link maps">📍 Lihat di Google Maps</a>
          </div>
        </div>
      </section>`;
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
      </div>
    `;
    document.body.appendChild(disclaimer);
  }

  bindEvents() {
    document.getElementById('prevBtn').addEventListener('click', () => this.prev());
    document.getElementById('nextBtn').addEventListener('click', () => this.next());
    document.getElementById('fullscreenBtn').addEventListener('click', () => this.toggleFullscreen());
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
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => new SlidePresentation());
