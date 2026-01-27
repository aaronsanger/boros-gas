const slidesData = [
  {
    id: 1,
    type: 'title',
    title: 'Apakah Penggunaan Gas Benar-Benar Boros?',
    subtitle: 'Analisis Komprehensif Penggunaan Gas di Kost Ibu Indri, Tanah Abang',
    stats: [
      { value: '17 Juni 2022', label: 'Mulai Kost' },
      { value: '23 Jan 2026', label: 'Mulai Pakai Kompor' },
      { value: 'Rp 2.1 - 2.3 Juta', label: 'Biaya Kost/Bulan' }
    ],
    links: {
      maps: 'https://maps.app.goo.gl/tHHWPeTJRM75GG6h7',
      mamikos: 'https://mamikos.com/room/kost-kota-jakarta-pusat-kost-campur-eksklusif-kost-ibu-indri-tipe-vip-tanah-abang-jakarta-pusat'
    }
  },
  {
    id: 2,
    number: '01',
    title: 'Fasilitas yang Dijanjikan',
    content: `
      <div class="facility-showcase">
        <div class="facility-image-container">
          <img src="uploaded_media_1769536014319.png" alt="Fasilitas Kost" class="facility-image">
        </div>
        <div class="facility-highlight">
          <div class="highlight-card">
            <h3>🍳 Tempat Makan dan Masak</h3>
            <ul><li>✓ Kulkas</li><li class="highlight">✓ Dapur</li></ul>
          </div>
          <div class="verdict-box success">
            <strong>✅ KESIMPULAN:</strong> Memasak air termasuk dalam fasilitas "Dapur"
          </div>
          <div class="external-links">
            <a href="https://mamikos.com/room/kost-kota-jakarta-pusat-kost-campur-eksklusif-kost-ibu-indri-tipe-vip-tanah-abang-jakarta-pusat" target="_blank" class="ext-link mamikos">🏠 Lihat di Mamikos</a>
            <a href="https://maps.app.goo.gl/tHHWPeTJRM75GG6h7" target="_blank" class="ext-link maps">📍 Google Maps</a>
          </div>
        </div>
      </div>`
  },
  {
    id: 3,
    number: '02',
    title: 'Kondisi Gas Saat Ini',
    content: `
      <div class="gas-status-showcase">
        <div class="gas-indicator-container">
          <img src="gas_indicator.jpg" alt="Indikator Gas" class="gas-indicator-image">
        </div>
        <div class="gas-status-info">
          <div class="status-card">
            <h3>📸 Dokumentasi: 28 Jan 2026, 00:42</h3>
            <ul>
              <li>📍 Jalan Kebon Kacang 9 No. 25</li>
              <li>🏙️ Central Jakarta 10240, Indonesia</li>
              <li>⛽ Indikator gas masih menunjukkan tersedia</li>
            </ul>
          </div>
          <div class="verdict-box success">
            <strong>✅ BUKTI:</strong> Gas masih ada, baru dipakai 5 hari
          </div>
        </div>
      </div>`
  },
  {
    id: 4,
    number: '03',
    title: 'Pola Penggunaan Harian',
    content: `
      <div class="usage-grid">
        <div class="usage-card"><div class="usage-icon">🌙</div><h3>Waktu</h3><p class="value">Setiap Malam</p></div>
        <div class="usage-card"><div class="usage-icon">💧</div><h3>Volume</h3><p class="value">3 - 5 Liter</p></div>
        <div class="usage-card"><div class="usage-icon">🍲</div><h3>Peralatan</h3><p class="value">2 Panci (3L + 2L)</p></div>
        <div class="usage-card"><div class="usage-icon">⏱️</div><h3>Durasi</h3><p class="value">5 - 8 Menit</p></div>
      </div>
      <div class="summary-box">📝 Memasak air 1x sehari di malam hari adalah <strong>penggunaan wajar</strong></div>`
  },
  {
    id: 5,
    number: '04',
    title: 'Perhitungan Konsumsi Gas',
    content: `
      <div class="calc-container">
        <div class="calc-formula">
          <h3>🔬 Data Teknis</h3>
          <p>Konsumsi kompor standar: <strong>150-200 gram/jam</strong></p>
          <p>Rata-rata penggunaan: <strong>6.5 menit/hari = 0.108 jam</strong></p>
          <p>Konsumsi per hari: <strong>~20 gram/hari</strong></p>
        </div>
        <div class="calc-results">
          <div class="result-card"><h4>Per Bulan</h4><div class="big-num">600 gram</div><p>= 0.6 kg gas</p></div>
          <div class="result-card accent"><h4>Daya Tahan 12kg</h4><div class="big-num">20 Bulan</div><p>Jika hanya masak air</p></div>
        </div>
      </div>`
  },
  {
    id: 6,
    number: '05',
    title: 'Estimasi Biaya Gas',
    content: `
      <div class="cost-container">
        <div class="cost-with-image">
          <div class="gas-image"><img src="bright_gas.png" alt="Bright Gas 12kg"></div>
          <div class="price-section">
            <h3>💰 Harga Bright Gas 12kg (Jan 2026)</h3>
            <div class="price-range"><span>Rp 190.000</span> → <span>Rp 250.000</span></div>
            <p class="avg">Rata-rata: <strong>Rp 220.000</strong></p>
          </div>
        </div>
        <div class="calc-steps">
          <div class="step"><span class="num">1</span> Harga per kg: Rp 220.000 ÷ 12 = <strong>Rp 18.333/kg</strong></div>
          <div class="step"><span class="num">2</span> Biaya per bulan (0.6 kg): <strong>Rp 11.000/bulan</strong></div>
        </div>
        <div class="final-cost"><div class="badge">Biaya Aktual</div><div class="amount">Rp 11.000</div><div class="period">per bulan untuk memasak air</div></div>
      </div>`
  },
  {
    id: 7,
    number: '06',
    title: 'Proporsi Biaya Gas vs Kost',
    content: `
      <div class="proportion-container">
        <div class="chart-visual">
          <div class="donut-chart"><div class="center"><span class="pct">0.5%</span><span class="lbl">Proporsi Gas</span></div></div>
        </div>
        <div class="comparison-bars">
          <div class="bar-row"><span class="icon">🏠</span><span class="label">Biaya Kost</span><div class="bar"><div class="fill" style="width:100%"></div></div><span class="val">Rp 2.200.000</span></div>
          <div class="bar-row"><span class="icon">🔥</span><span class="label">Biaya Gas</span><div class="bar"><div class="fill gas" style="width:0.5%"></div></div><span class="val">Rp 11.000</span></div>
        </div>
        <div class="verdict">🤔 Biaya gas hanya <strong>0.5%</strong> dari total biaya kost. Apakah ini "BOROS"?</div>
      </div>`
  },
  {
    id: 8,
    number: '07',
    title: 'Timeline Penggunaan Gas',
    content: `
      <div class="timeline">
        <div class="timeline-item"><div class="date">23 Jan 2026</div><div class="marker start"></div><div class="info"><h4>Mulai Menggunakan Kompor</h4></div></div>
        <div class="timeline-line"></div>
        <div class="timeline-item"><div class="date">28 Jan 2026</div><div class="marker current"></div><div class="info"><h4>Hari Ini</h4><p>Total: <strong>5 hari</strong></p></div></div>
      </div>
      <div class="timeline-summary">
        <div class="sum-card"><span class="icon">📅</span><span class="val">5</span><span class="lbl">Hari</span></div>
        <div class="sum-card"><span class="icon">🔥</span><span class="val">100 gram</span><span class="lbl">Gas Terpakai</span></div>
        <div class="sum-card"><span class="icon">💵</span><span class="val">Rp 1.833</span><span class="lbl">Total Biaya</span></div>
      </div>`
  },
  {
    id: 9,
    number: '08',
    title: 'Siapa yang Dirugikan?',
    content: `
      <div class="analysis-grid">
        <div class="analysis-card tenant">
          <h3>👤 Perspektif Penghuni</h3>
          <ul><li class="pos">✓ Fasilitas dapur sudah termasuk</li><li class="pos">✓ Penggunaan wajar: masak air 1x/hari</li><li class="pos">✓ Membayar kost penuh Rp 2.1-2.3 juta/bulan</li></ul>
          <div class="verdict success">TIDAK MERUGIKAN siapapun</div>
        </div>
        <div class="vs">VS</div>
        <div class="analysis-card landlord">
          <h3>🏠 Perspektif Pemilik</h3>
          <ul><li>• Menyediakan fasilitas dapur</li><li>• Gas adalah bagian fasilitas</li><li class="quest">? Menganggap penggunaan "boros"</li></ul>
          <div class="verdict warning">Biaya gas: <strong>Rp 11.000/bulan</strong></div>
        </div>
      </div>`
  },
  {
    id: 10,
    number: '09',
    title: 'Jika Gas Harus Dibayar Terpisah',
    content: `
      <div class="scenario">
        <div class="alert">⚠️ <strong>CATATAN:</strong> Berdasarkan iklan, dapur termasuk fasilitas. Ini hanya ilustrasi.</div>
        <table class="calc-table">
          <tr><td>Biaya gas per bulan</td><td>Rp 11.000</td></tr>
          <tr><td>Total penggunaan (5 hari)</td><td>Rp 1.833</td></tr>
          <tr class="total"><td>Total yang "seharusnya" dibayar</td><td class="highlight">Rp 1.833</td></tr>
        </table>
        <div class="perspective"><div class="header">💸 Tambahan per bulan</div><div class="val">Rp 11.000</div><div class="pct">+0.5% dari biaya kost</div></div>
      </div>`
  },
  {
    id: 11,
    number: '10',
    title: 'Alternatif: Electric Kettle',
    content: `
      <div class="kettle-section">
        <div class="product"><div class="icon">⚡🫖</div><h3>Electric Kettle 500W</h3>
          <div class="specs"><span>Daya: 500W</span><span>Kapasitas: 1.5-2L</span><span>Waktu: 8-12 menit</span></div>
        </div>
        <div class="kettle-calc">
          <h4>Perhitungan Biaya Listrik</h4>
          <p>Penggunaan harian (10 menit × 2 kali): <strong>166 Wh</strong></p>
          <p>Per bulan: <strong>5 kWh</strong></p>
          <p>Biaya listrik (@ Rp 1.445/kWh): <strong class="highlight">Rp 7.225/bulan</strong></p>
        </div>
      </div>`
  },
  {
    id: 12,
    number: '11',
    title: 'Gas vs Electric Kettle',
    content: `
      <table class="compare-table">
        <thead><tr><th>Aspek</th><th>🔥 Gas</th><th>⚡ Kettle</th></tr></thead>
        <tbody>
          <tr><td>Biaya/bulan</td><td>Rp 11.000</td><td class="win">Rp 7.225 ✓</td></tr>
          <tr><td>Waktu masak</td><td class="win">5-8 menit ✓</td><td>8-12 menit</td></tr>
          <tr><td>Kapasitas</td><td class="win">5 Liter ✓</td><td>2 Liter</td></tr>
          <tr><td>Keamanan</td><td>Perlu hati-hati</td><td class="win">Auto-off ✓</td></tr>
          <tr><td>Status fasilitas</td><td class="win">Termasuk ✓</td><td>Beli sendiri</td></tr>
        </tbody>
      </table>
      <div class="recommendation">💡 Electric kettle <strong>hemat 34%</strong> dan <strong>lebih aman</strong></div>`
  },
  {
    id: 13,
    number: '12',
    title: 'Analisis Keuntungan & Kerugian',
    content: `
      <div class="profit-loss">
        <div class="section loss">
          <h3>📉 Jika Anda "Dirugikan"</h3>
          <p>Jika diminta bayar gas padahal sudah termasuk fasilitas:</p>
          <div class="amount-box loss"><span class="lbl">Kerugian Anda</span><span class="amt">Rp 11.000/bulan</span><span class="total">5 hari baru: Rp 1.833</span></div>
        </div>
        <div class="section profit">
          <h3>📈 Keuntungan Pemilik</h3>
          <p>Jika minta bayar gas terpisah dari kost:</p>
          <div class="amount-box profit"><span class="lbl">Keuntungan Tambahan</span><span class="amt">Rp 11.000/bulan</span><span class="total">5 hari baru: Rp 1.833</span></div>
        </div>
      </div>
      <div class="reality">⚖️ <strong>REALITA:</strong> Gas adalah bagian dari fasilitas. Penggunaan Anda wajar.</div>`
  },
  {
    id: 14,
    number: '13',
    title: 'Fakta Menarik',
    content: `
      <div class="facts-grid">
        <div class="fact"><span class="num">01</span><h4>3.5+ Tahun Tidak Pakai</h4><p>Kos sejak 17 Juni 2022, baru pakai kompor 23 Januari 2026. <strong>3.5 tahun</strong> tidak pakai dapur!</p></div>
        <div class="fact"><span class="num">02</span><h4>Hanya Masak Air</h4><p>Penggunaan <strong>paling minimal</strong> dari fasilitas dapur.</p></div>
        <div class="fact"><span class="num">03</span><h4>Perbandingan Nilai</h4><p>Biaya gas Rp 11.000 hanya <strong>0.5%</strong> dari kost Rp 2.2 juta.</p></div>
        <div class="fact"><span class="num">04</span><h4>Kontribusi Total</h4><p>Dalam 3+ tahun, sudah bayar sekitar <strong>Rp 79.2 juta</strong>!</p></div>
      </div>`
  },
  {
    id: 15,
    number: '14',
    title: 'Rekomendasi',
    content: `
      <div class="recommendations">
        <div class="rec primary"><span class="num">1</span><div><h4>Komunikasi dengan Pemilik</h4><p>Tunjukkan screenshot fasilitas bahwa "Dapur" termasuk dalam iklan.</p></div></div>
        <div class="rec"><span class="num">2</span><div><h4>Pertimbangkan Electric Kettle</h4><p>Lebih hemat (Rp 7.225/bulan) dan aman.</p></div></div>
        <div class="rec"><span class="num">3</span><div><h4>Dokumentasi</h4><p>Simpan semua bukti: screenshot iklan, pembayaran, perhitungan ini.</p></div></div>
        <div class="rec"><span class="num">4</span><div><h4>Negosiasi Jika Perlu</h4><p>Minta kejelasan tertulis dan negosiasi berdasarkan data faktual.</p></div></div>
      </div>`
  },
  {
    id: 16,
    type: 'conclusion',
    title: 'Kesimpulan',
    verdict: 'Penggunaan Gas Anda TIDAK BOROS',
    points: [
      '✅ Fasilitas "Dapur" termasuk dalam iklan kost',
      '✅ Biaya gas hanya Rp 11.000/bulan (0.5% dari kost)',
      '✅ Anda 3.5 tahun TIDAK menggunakan fasilitas dapur',
      '✅ Penggunaan hanya untuk masak air, bukan masak lengkap'
    ],
    footer: {
      contribution: '~Rp 79.2 Juta (3+ tahun)',
      gasCost: 'Rp 1.833 (5 hari)'
    }
  }
];

const appConfig = {
  disclaimer: {
    text: 'Presentasi ini dibuat oleh Claude Opus 4.5 (Thinking) AI, bukan ditulis oleh penghuni kost.',
    date: '28 Januari 2026, 01:00 WIB (UTC+7)',
    author: 'Claude Opus 4.5 (Thinking) - Anthropic AI'
  },
  links: {
    maps: 'https://maps.app.goo.gl/tHHWPeTJRM75GG6h7',
    mamikos: 'https://mamikos.com/room/kost-kota-jakarta-pusat-kost-campur-eksklusif-kost-ibu-indri-tipe-vip-tanah-abang-jakarta-pusat'
  }
};
