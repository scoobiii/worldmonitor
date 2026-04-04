[中文](README.zh.md) | [日本語](README.ja.md) | [Português](README.pt-br.md) | [Tiếng Việt](README.vi.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Bahasa Indonesia](README.id.md) | **Malay** | [English](README.md)

---

# World Monitor

**Papan pemuka risikan global masa nyata — pengagregatan berita berkuasa AI, pemantauan geopolitik, dan penjejakan infrastruktur dalam antara muka kesedaran situasi yang bersepadu.**

[![GitHub stars](https://img.shields.io/github/stars/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/network/members)
[![Discord](https://img.shields.io/badge/Discord-Sertai-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/re63kWKxaz)
[![License: AGPL v3](https://img.shields.io/badge/Lesen-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Last commit](https://img.shields.io/github/last-commit/koala73/worldmonitor)](https://github.com/koala73/worldmonitor/commits/main)
[![Latest release](https://img.shields.io/github/v/release/koala73/worldmonitor?style=flat)](https://github.com/koala73/worldmonitor/releases/latest)

<p align="center">
  <a href="https://worldmonitor.app"><img src="https://img.shields.io/badge/Web_App-worldmonitor.app-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Aplikasi Web"></a>&nbsp;
  <a href="https://tech.worldmonitor.app"><img src="https://img.shields.io/badge/Tech-tech.worldmonitor.app-0891b2?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Varian Tech"></a>&nbsp;
  <a href="https://finance.worldmonitor.app"><img src="https://img.shields.io/badge/Finance-finance.worldmonitor.app-059669?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Varian Finance"></a>&nbsp;
  <a href="https://commodity.worldmonitor.app"><img src="https://img.shields.io/badge/Commodity-commodity.worldmonitor.app-b45309?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Varian Commodity"></a>&nbsp;
  <a href="https://happy.worldmonitor.app"><img src="https://img.shields.io/badge/Happy-happy.worldmonitor.app-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Varian Happy"></a>
</p>

<p align="center">
  <a href="https://worldmonitor.app/api/download?platform=windows-exe"><img src="https://img.shields.io/badge/Download-Windows_(.exe)-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Windows (.exe)"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=macos-arm64"><img src="https://img.shields.io/badge/Download-macOS_Apple_Silicon-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Apple Silicon"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=macos-x64"><img src="https://img.shields.io/badge/Download-macOS_Intel-555555?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=linux-appimage"><img src="https://img.shields.io/badge/Download-Linux_(.AppImage)-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux (.AppImage)"></a>
</p>

<p align="center">
  <a href="https://docs.worldmonitor.app"><strong>Dokumentasi</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/koala73/worldmonitor/releases/latest"><strong>Keluaran</strong></a> &nbsp;·&nbsp;
  <a href="https://docs.worldmonitor.app/contributing"><strong>Sumbangan</strong></a>
</p>

![World Monitor Dashboard](docs/images/worldmonitor-7-mar-2026.jpg)

---

## Ciri-ciri

- **435+** suapan berita terkurasi dalam 15 kategori, disintesis oleh AI menjadi taklimat
- **Enjin peta dua** — glob 3D (globe.gl) dan peta rata WebGL (deck.gl) dengan 45 lapisan data
- **Korelasi rentas aliran** — pemusatan isyarat tentera, ekonomi, bencana, dan peningkatan
- **Indeks Risikan Negara** — skor risiko komposit merentas 12 kategori isyarat
- **Radar kewangan** — 92 bursa saham, komoditi, kripto, dan komposit pasaran 7 isyarat
- **AI tempatan** — jalankan semua dengan Ollama, tiada kunci API diperlukan
- **5 varian laman web** daripada satu pangkalan kod (world, tech, finance, commodity, happy)
- **Aplikasi desktop natif** (Tauri 2) untuk macOS, Windows, dan Linux
- **21 bahasa** dengan suapan bahasa natif dan sokongan RTL

Untuk senarai ciri penuh, seni bina, sumber data, dan algoritma, lihat **[dokumentasi](https://docs.worldmonitor.app)**.

---

## Mula Pantas

```bash
git clone https://github.com/koala73/worldmonitor.git
cd worldmonitor
npm install
npm run dev
```

Buka [localhost:5173](http://localhost:5173). Tiada pemboleh ubah persekitaran diperlukan untuk operasi asas.

Pembangunan khusus varian:

```bash
npm run dev:tech       # tech.worldmonitor.app
npm run dev:finance    # finance.worldmonitor.app
npm run dev:commodity  # commodity.worldmonitor.app
npm run dev:happy      # happy.worldmonitor.app
```

Lihat **[panduan self-hosting](https://docs.worldmonitor.app/getting-started)** untuk pilihan penggunaan (Vercel, Docker, statik).

---

## Tumpukan Teknologi

| Kategori | Teknologi |
|----------|-------------|
| **Frontend** | Vanilla TypeScript, Vite, globe.gl + Three.js, deck.gl + MapLibre GL |
| **Desktop** | Tauri 2 (Rust) dengan sidecar Node.js |
| **AI/ML** | Ollama / Groq / OpenRouter, Transformers.js (sisi pelayar) |
| **Kontrak API** | Protocol Buffers (92 proto, 22 perkhidmatan), anotasi HTTP sebuf |
| **Penggunaan** | Vercel Edge Functions (60+), Railway relay, Tauri, PWA |
| **Cache** | Redis (Upstash), cache 3 peringkat, CDN, service worker |

Butiran penuh dalam **[dokumentasi seni bina](https://docs.worldmonitor.app/architecture)**.

---

## Data Penerbangan

Data penerbangan disediakan dengan murah hati oleh [Wingbits](https://wingbits.com?utm_source=worldmonitor&utm_medium=referral&utm_campaign=worldmonitor), penyelesaian data penerbangan ADS-B paling canggih.

---

## Sumber Data

WorldMonitor mengagregat 65+ sumber data luaran merangkumi geopolitik, kewangan, tenaga, iklim, penerbangan, keselamatan siber, tentera, infrastruktur, dan risikan berita. Lihat [katalog sumber data penuh](./docs/data-sources.mdx).

---

## Menyumbang

Sumbangan dialu-alukan! Lihat [CONTRIBUTING.md](./CONTRIBUTING.md) untuk panduan.

```bash
npm run typecheck        # Type checking
npm run build:full       # Production build
```

---

## Lesen

**AGPL-3.0** untuk kegunaan bukan komersial. **Lesen komersial** diperlukan untuk sebarang kegunaan komersial.

| Kes Penggunaan | Dibenarkan? |
|----------|----------|
| Peribadi / penyelidikan / pendidikan | Ya |
| Self-hosted (bukan komersial) | Ya, dengan atribusi |
| Fork dan ubahsuai (bukan komersial) | Ya, kongsi sumber di bawah AGPL-3.0 |
| Kegunaan komersial / SaaS / rebranding | Memerlukan lesen komersial |

Lihat [LICENSE](LICENSE) untuk terma penuh. Untuk pelesenan komersial, hubungi penyelenggara.

Copyright (C) 2024-2026 Elie Habib. Hak cipta terpelihara.

---

## Pengarang

**Elie Habib** — [GitHub](https://github.com/koala73)

## Penyumbang

<a href="https://github.com/koala73/worldmonitor/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=koala73/worldmonitor" />
</a>

## Pengiktirafan Keselamatan

Kami mengucapkan terima kasih kepada penyelidik berikut kerana mendedahkan isu keselamatan secara bertanggungjawab:

- **Cody Richard** — Mendedahkan tiga penemuan keselamatan meliputi pendedahan arahan IPC, analisis sempadan kepercayaan renderer-to-sidecar, dan seni bina suntikan kelayakan fetch patch (2026)

Lihat [Dasar Keselamatan](./SECURITY.md) kami untuk panduan pendedahan bertanggungjawab.

---

<p align="center">
  <a href="https://worldmonitor.app">worldmonitor.app</a> &nbsp;·&nbsp;
  <a href="https://docs.worldmonitor.app">docs.worldmonitor.app</a> &nbsp;·&nbsp;
  <a href="https://finance.worldmonitor.app">finance.worldmonitor.app</a> &nbsp;·&nbsp;
  <a href="https://commodity.worldmonitor.app">commodity.worldmonitor.app</a>
</p>

## Star History

<a href="https://api.star-history.com/svg?repos=koala73/worldmonitor&type=Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=koala73/worldmonitor&type=Date&type=Date&theme=dark" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=koala73/worldmonitor&type=Date&type=Date" />
 </picture>
</a>
