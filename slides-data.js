const slidesData = [
  {
    id: 1,
    type: 'title',
    title: 'Apakah Penggunaan Gas Benar-Benar Boros?',
    subtitle: 'Analisis Komprehensif Penggunaan Gas di Kost Ibu Indri, Tanah Abang',
    stats: [
      { value: '17 Juni 2022', label: 'Mulai Kost' },
      { value: '24 Jan 2026', label: 'Mulai Pakai Kompor' },
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
            <strong>✅ BUKTI:</strong> Gas masih ada, baru dipakai 4 hari
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
        <div class="usage-card"><div class="usage-icon">🍲</div><h3>Peralatan</h3><p class="value">Panci 2.3L + Teko 3L</p></div>
        <div class="usage-card"><div class="usage-icon">⏱️</div><h3>Durasi</h3><p class="value">5 - 8 Menit</p></div>
      </div>
      <div class="summary-box">📝 Memasak air 1x sehari di malam hari adalah <strong>penggunaan wajar</strong></div>`
  },
  {
    id: 5,
    number: '04',
    title: 'Detail Peralatan yang Dibeli',
    content: `
      <div class="equipment-section">
        <div class="equipment-grid">
          <div class="equipment-card">
            <div class="package-header">📦 Paket 1 - J&T JX6910509268</div>
            <div class="package-date">Diterima: 24 Jan 2026, 13:21 WIB</div>
            <div class="equipment-images">
              <img src="paket1_tracking.png" alt="J&T Tracking Paket 1" class="evidence-img">
              <img src="paket1_panci.png" alt="Maxim Neostone Pan" class="evidence-img">
            </div>
            <div class="product-detail">
              <h4>🍲 Maxim Neostone Sauce Pan 18cm</h4>
              <ul>
                <li>Diameter: 18cm | Tinggi: 9cm</li>
                <li>Bahan: Ceramic Marble</li>
                <li>Merek: Maxim</li>
              </ul>
              <div class="volume-calc">
                <strong>📐 Kalkulasi Volume:</strong><br>
                V = π × r² × h = 3.14 × 9² × 9<br>
                <span class="result">≈ 2.3 Liter</span>
              </div>
            </div>
          </div>
          <div class="equipment-card">
            <div class="package-header">📦 Paket 2 - J&T JX6916112531</div>
            <div class="package-date">Diterima: 26 Jan 2026, 23:09 WIB</div>
            <div class="equipment-images">
              <img src="paket2_tracking.png" alt="J&T Tracking Paket 2" class="evidence-img">
              <img src="paket2_teko.png" alt="Teko Stainless Steel" class="evidence-img">
            </div>
            <div class="product-detail">
              <h4>🫖 Teko Stainless Steel 3 Liter</h4>
              <ul>
                <li>Kapasitas: 3 Liter</li>
                <li>Bahan: Stainless Steel</li>
                <li>Berat: 850 gram</li>
              </ul>
              <div class="volume-calc">
                <strong>📐 Kapasitas:</strong><br>
                <span class="result">3 Liter</span>
              </div>
            </div>
          </div>
        </div>
        <div class="total-capacity">
          <span class="label">Total Kapasitas:</span>
          <span class="value">2.3L + 3L = <strong>5.3 Liter</strong></span>
        </div>
        <div class="source-ref">📚 Sumber: Detail produk dari Marketplace + Resi pengiriman J&T Express</div>
      </div>`
  },
  {
    id: 6,
    number: '05',
    title: 'Perhitungan Konsumsi Gas',
    content: `
      <div class="calc-container">
        <div class="calc-formula">
          <h3>🔬 Data Teknis</h3>
          <p>Konsumsi kompor standar: <strong>150 gram/jam</strong></p>
          <p>Rata-rata penggunaan: <strong>6.5 menit/hari = 0.108 jam</strong></p>
          <p>Konsumsi per hari: <strong>~16 gram/hari</strong></p>
          <div class="source-ref">📚 Sumber: Kementerian ESDM - Estimasi rata-rata konsumsi LPG rumah tangga</div>
        </div>
        <div class="calc-results">
          <div class="result-card"><h4>Per Bulan</h4><div class="big-num">480 gram</div><p>= 0.48 kg gas</p></div>
          <div class="result-card accent"><h4>Daya Tahan 12kg</h4><div class="big-num">25 Bulan</div><p>Jika hanya masak air</p></div>
        </div>
      </div>`
  },
  {
    id: 7,
    number: '06',
    title: 'Estimasi Biaya Gas',
    content: `
      <div class="cost-container">
        <div class="cost-with-image">
          <div class="gas-image"><img src="bright_gas.png" alt="Bright Gas 12kg"></div>
          <div class="price-section">
            <h3>💰 Harga Bright Gas 12kg (Jan 2026)</h3>
            <div class="price-range"><span>Rp 190.000</span> → <span>Rp 235.000</span></div>
            <p class="avg">Harga Agen DKI Jakarta: <strong>Rp 192.000</strong></p>
            <div class="source-ref">📚 Sumber: Pertamina Patra Niaga, Kontan.co.id, CNBC Indonesia</div>
          </div>
        </div>
        <div class="calc-steps">
          <div class="step"><span class="num">1</span> Harga per kg: Rp 192.000 ÷ 12 = <strong>Rp 16.000/kg</strong></div>
          <div class="step"><span class="num">2</span> Biaya per bulan (0.48 kg): <strong>Rp 7.680/bulan</strong></div>
        </div>
        <div class="final-cost"><div class="badge">Biaya Aktual</div><div class="amount">Rp 7.680</div><div class="period">per bulan untuk memasak air</div></div>
      </div>`
  },
  {
    id: 7,
    number: '06',
    title: 'Proporsi Biaya Gas vs Kost',
    content: `
      <div class="proportion-container">
        <div class="chart-visual">
          <div class="donut-chart"><div class="center"><span class="pct">0.35%</span><span class="lbl">Proporsi Gas</span></div></div>
        </div>
        <div class="comparison-bars">
          <div class="bar-row"><span class="icon">🏠</span><span class="label">Biaya Kost</span><div class="bar"><div class="fill" style="width:100%"></div></div><span class="val">Rp 2.200.000</span></div>
          <div class="bar-row"><span class="icon">🔥</span><span class="label">Biaya Gas</span><div class="bar"><div class="fill gas" style="width:0.35%"></div></div><span class="val">Rp 7.680</span></div>
        </div>
        <div class="verdict">🤔 Biaya gas hanya <strong>0.35%</strong> dari total biaya kost. Apakah ini "BOROS"?</div>
      </div>`
  },
  {
    id: 8,
    number: '07',
    title: 'Timeline Penggunaan Gas',
    content: `
      <div class="timeline">
        <div class="timeline-item"><div class="date">24 Jan 2026</div><div class="marker start"></div><div class="info"><h4>Mulai Menggunakan Kompor</h4></div></div>
        <div class="timeline-line"></div>
        <div class="timeline-item"><div class="date">28 Jan 2026</div><div class="marker current"></div><div class="info"><h4>Hari Ini</h4><p>Total: <strong>4 hari</strong></p></div></div>
      </div>
      <div class="timeline-summary">
        <div class="sum-card"><span class="icon">📅</span><span class="val">4</span><span class="lbl">Hari</span></div>
        <div class="sum-card"><span class="icon">🔥</span><span class="val">64 gram</span><span class="lbl">Gas Terpakai</span></div>
        <div class="sum-card"><span class="icon">💵</span><span class="val">Rp 1.024</span><span class="lbl">Total Biaya</span></div>
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
          <div class="verdict warning">Biaya gas: <strong>Rp 7.680/bulan</strong></div>
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
          <tr><td>Biaya gas per bulan</td><td>Rp 7.680</td></tr>
          <tr><td>Total penggunaan (4 hari)</td><td>Rp 1.024</td></tr>
          <tr class="total"><td>Total yang "seharusnya" dibayar</td><td class="highlight">Rp 1.280</td></tr>
        </table>
        <div class="perspective"><div class="header">💸 Tambahan per bulan</div><div class="val">Rp 7.680</div><div class="pct">+0.35% dari biaya kost</div></div>
      </div>`
  },
  {
    id: 11,
    number: '10',
    title: 'Alternatif: Ketel Listrik',
    content: `
      <div class="kettle-section">
        <div class="product-box">
          <div class="icon">⚡🫖</div>
          <h3>Ketel Listrik 500W</h3>
          <div class="specs-grid">
            <div class="spec"><span class="label">Daya</span><span class="value">500W</span></div>
            <div class="spec"><span class="label">Kapasitas</span><span class="value">2 Liter</span></div>
            <div class="spec"><span class="label">Waktu Panas</span><span class="value">4-6 menit</span></div>
            <div class="spec"><span class="label">Bahan</span><span class="value">Stainless Steel</span></div>
            <div class="spec"><span class="label">Fitur</span><span class="value">Auto-off, Anti-kering</span></div>
            <div class="spec"><span class="label">Tegangan</span><span class="value">220V/50Hz</span></div>
          </div>
        </div>
        <div class="kettle-calc">
          <h4>📊 Perhitungan Biaya Listrik</h4>
          <table class="calc-table">
            <tr><td>Daya ketel</td><td>500W = 0.5 kWh</td></tr>
            <tr><td>Waktu per pemanasan</td><td>5 menit = 0.083 jam</td></tr>
            <tr><td>Konsumsi per pakai</td><td>0.5 × 0.083 = <strong>0.042 kWh</strong></td></tr>
            <tr><td>Per hari (1× pakai)</td><td>0.042 kWh</td></tr>
            <tr><td>Per bulan (30 hari)</td><td>1.25 kWh</td></tr>
            <tr class="total"><td>Biaya/bulan (@ Rp 1.445/kWh)</td><td class="highlight">Rp 1.806</td></tr>
          </table>
          <div class="source-ref">📚 Sumber: Tarif PLN Januari 2026 - Golongan R1 1300VA</div>
        </div>
      </div>`
  },
  {
    id: 12,
    number: '11',
    title: 'Kompor Gas vs Ketel Listrik',
    content: `
      <div class="compare-section">
        <h3>⚖️ Perbandingan Biaya per Volume Air</h3>
        <div class="volume-tabs">
          <p class="note">Ketel 2L perlu beberapa kali panaskan untuk volume besar:</p>
        </div>
        <table class="compare-table volume-compare">
          <thead>
            <tr>
              <th>Volume</th>
              <th>🔥 Gas<br><small>1× masak</small></th>
              <th>⚡ Ketel 2L<br><small>berapa kali?</small></th>
              <th>Pemenang</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>2 Liter</strong></td>
              <td>Rp 27<br><small>5-8 min</small></td>
              <td>Rp 60<br><small>1× (5 min)</small></td>
              <td class="win-gas">🔥 Gas</td>
            </tr>
            <tr>
              <td><strong>3 Liter</strong></td>
              <td>Rp 40<br><small>7-10 min</small></td>
              <td>Rp 90<br><small>2× (10 min)</small></td>
              <td class="win-gas">🔥 Gas</td>
            </tr>
            <tr>
              <td><strong>5 Liter</strong><br><small>(mandi)</small></td>
              <td>Rp 80<br><small>12-15 min</small></td>
              <td>Rp 150<br><small>3× (15 min)</small></td>
              <td class="win-gas">🔥 Gas</td>
            </tr>
          </tbody>
        </table>
        <div class="compare-summary">
          <div class="summary-card gas-win">
            <span class="icon">🔥</span>
            <span class="text"><strong>Gas lebih hemat</strong> untuk volume besar karena ketel harus panaskan berulang!</span>
          </div>
          <div class="summary-note">
            💡 Di kost ini, gas sudah termasuk fasilitas. Kompor gas adalah pilihan paling efisien.
          </div>
        </div>
      </div>`
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
          <div class="amount-box loss"><span class="lbl">Kerugian Anda</span><span class="amt">Rp 7.680/bulan</span><span class="total">4 hari baru: Rp 1.024</span></div>
        </div>
        <div class="section profit">
          <h3>📈 Keuntungan Pemilik</h3>
          <p>Jika minta bayar gas terpisah dari kost:</p>
          <div class="amount-box profit"><span class="lbl">Keuntungan Tambahan</span><span class="amt">Rp 7.680/bulan</span><span class="total">5 hari baru: Rp 1.280</span></div>
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
        <div class="fact"><span class="num">03</span><h4>Perbandingan Nilai</h4><p>Biaya gas Rp 7.680 hanya <strong>0.35%</strong> dari kost Rp 2.2 juta.</p></div>
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
    number: '15',
    title: 'Kalkulasi: Air untuk Mandi',
    content: `
      <div class="bath-calculation">
        <div class="bath-header">
          <span class="bath-icon">🛁</span>
          <h3>Berapa Biaya Memasak Air untuk Mandi?</h3>
        </div>
        
        <div class="bath-data">
          <div class="data-card">
            <span class="label">📏 Data Pengukuran</span>
            <span class="value">2 Liter = 5-10 menit</span>
          </div>
          <div class="data-card">
            <span class="label">⏱️ Rata-rata</span>
            <span class="value">7.5 menit per 2L</span>
          </div>
        </div>

        <div class="bath-calc-table">
          <table>
            <thead>
              <tr><th>Volume</th><th>Waktu</th><th>Gas</th><th>Biaya</th></tr>
            </thead>
            <tbody>
              <tr><td>2 Liter</td><td>5-10 menit</td><td>~2g</td><td class="cost">Rp 32</td></tr>
              <tr><td>3 Liter</td><td>7.5-15 menit</td><td>~3g</td><td class="cost">Rp 48</td></tr>
              <tr class="total"><td>5 Liter</td><td>12.5-25 menit</td><td>~5g</td><td class="highlight">Rp 80</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bath-formula">
          <p><strong>📐 Rumus:</strong> Konsumsi = 150g/jam × waktu(jam) → Biaya = konsumsi × Rp16/g</p>
        </div>

        <div class="bath-summary">
          <div class="summary-card">
            <span class="icon">💧</span>
            <span class="val">Rp 80</span>
            <span class="lbl">Per Mandi (5L)</span>
          </div>
          <div class="summary-card">
            <span class="icon">📅</span>
            <span class="val">Rp 2.400</span>
            <span class="lbl">30 Kali Mandi/Bulan</span>
          </div>
        </div>

        <div class="bath-note">
          <strong>💡 Catatan:</strong> Biaya 5L air hangat per mandi = Rp 80. 
          Dibanding biaya kost Rp 2.1 Juta, ini hanya <strong>0.11%</strong> - sangat wajar!
        </div>
      </div>`
  },
  {
    id: 17,
    type: 'conclusion',
    title: 'Kesimpulan',
    verdict: 'Penggunaan Gas Anda TIDAK BOROS',
    points: [
      '✅ Fasilitas "Dapur" termasuk dalam iklan kost',
      '✅ Biaya gas hanya Rp 7.680/bulan (0.35% dari kost)',
      '✅ Anda 3.5 tahun TIDAK menggunakan fasilitas dapur',
      '✅ Penggunaan hanya untuk masak air, bukan masak lengkap'
    ],
    footer: {
      contribution: '~Rp 79.2 Juta (3+ tahun)',
      gasCost: 'Rp 1.024 (4 hari)'
    }
  },
  {
    id: 18,
    type: 'voting',
    title: 'Pendapat Anda?',
    question: 'Setelah melihat semua data dan analisis, menurut Anda penggunaan gas ini:',
    options: [
      { id: 'boros', emoji: '🔴', label: 'BOROS', desc: 'Penggunaan gas berlebihan' },
      { id: 'tidak', emoji: '🟢', label: 'TIDAK BOROS', desc: 'Penggunaan wajar dan hemat' }
    ]
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
