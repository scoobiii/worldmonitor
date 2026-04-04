[中文](README.zh.md) | [日本語](README.ja.md) | [Português](README.pt-br.md) | [Tiếng Việt](README.vi.md) | [Français](README.fr.md) | [Italiano](README.it.md) | **Bahasa Indonesia** | [Malay](README.my.md) | [English](README.md)

---

# World Monitor

**Dasbor intelijen global real-time — agregasi berita bertenaga AI, pemantauan geopolitik, dan pelacakan infrastruktur dalam antarmuka kesadaran situasional yang terpadu.**

[![GitHub stars](https://img.shields.io/github/stars/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/network/members)
[![Discord](https://img.shields.io/badge/Discord-Bergabung-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/re63kWKxaz)
[![License: AGPL v3](https://img.shields.io/badge/Lisensi-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
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
  <a href="https://github.com/koala73/worldmonitor/releases/latest"><strong>Rilis</strong></a> &nbsp;·&nbsp;
  <a href="https://docs.worldmonitor.app/contributing"><strong>Kontribusi</strong></a>
</p>

![World Monitor Dashboard](docs/images/worldmonitor-7-mar-2026.jpg)

---

## Fitur

- **435+** umpan berita terkurasi dalam 15 kategori, disintesis AI menjadi briefing
- **Mesin peta ganda** — globe 3D (globe.gl) dan peta datar WebGL (deck.gl) dengan 45 lapisan data
- **Korelasi lintas aliran** — konvergensi sinyal militer, ekonomi, bencana, dan eskalasi
- **Indeks Intelijen Negara** — skor risiko komposit di 12 kategori sinyal
- **Radar keuangan** — 92 bursa saham, komoditas, kripto, dan komposit pasar 7 sinyal
- **AI lokal** — jalankan semuanya dengan Ollama, tidak perlu kunci API
- **5 varian situs** dari satu basis kode (world, tech, finance, commodity, happy)
- **Aplikasi desktop native** (Tauri 2) untuk macOS, Windows, dan Linux
- **21 bahasa** dengan umpan bahasa asli dan dukungan RTL

Untuk daftar fitur lengkap, arsitektur, sumber data, dan algoritma, lihat **[dokumentasi](https://docs.worldmonitor.app)**.

---

## Mulai Cepat

```bash
git clone https://github.com/koala73/worldmonitor.git
cd worldmonitor
npm install
npm run dev
```

Buka [localhost:5173](http://localhost:5173). Tidak ada variabel lingkungan yang diperlukan untuk operasi dasar.

Pengembangan per varian:

```bash
npm run dev:tech       # tech.worldmonitor.app
npm run dev:finance    # finance.worldmonitor.app
npm run dev:commodity  # commodity.worldmonitor.app
npm run dev:happy      # happy.worldmonitor.app
```

Lihat **[panduan self-hosting](https://docs.worldmonitor.app/getting-started)** untuk opsi deployment (Vercel, Docker, statis).

---

## Tumpukan Teknologi

| Kategori | Teknologi |
|----------|-------------|
| **Frontend** | Vanilla TypeScript, Vite, globe.gl + Three.js, deck.gl + MapLibre GL |
| **Desktop** | Tauri 2 (Rust) dengan sidecar Node.js |
| **AI/ML** | Ollama / Groq / OpenRouter, Transformers.js (sisi browser) |
| **Kontrak API** | Protocol Buffers (92 proto, 22 layanan), anotasi HTTP sebuf |
| **Deployment** | Vercel Edge Functions (60+), Railway relay, Tauri, PWA |
| **Caching** | Redis (Upstash), cache 3 lapis, CDN, service worker |

Detail lengkap tumpukan di **[dokumentasi arsitektur](https://docs.worldmonitor.app/architecture)**.

---

## Data Penerbangan

Data penerbangan disediakan dengan murah hati oleh [Wingbits](https://wingbits.com?utm_source=worldmonitor&utm_medium=referral&utm_campaign=worldmonitor), solusi data penerbangan ADS-B paling canggih.

---

## Sumber Data

WorldMonitor mengagregasi 65+ sumber data eksternal mencakup geopolitik, keuangan, energi, iklim, penerbangan, keamanan siber, militer, infrastruktur, dan intelijen berita. Lihat [katalog sumber data lengkap](./docs/data-sources.mdx).

---

## Berkontribusi

Kontribusi disambut! Lihat [CONTRIBUTING.md](./CONTRIBUTING.md) untuk panduan.

```bash
npm run typecheck        # Type checking
npm run build:full       # Production build
```

---

## Lisensi

**AGPL-3.0** untuk penggunaan non-komersial. **Lisensi komersial** diperlukan untuk penggunaan komersial apa pun.

| Kasus Penggunaan | Diizinkan? |
|----------|----------|
| Pribadi / penelitian / pendidikan | Ya |
| Self-hosted (non-komersial) | Ya, dengan atribusi |
| Fork dan modifikasi (non-komersial) | Ya, bagikan sumber di bawah AGPL-3.0 |
| Penggunaan komersial / SaaS / rebranding | Memerlukan lisensi komersial |

Lihat [LICENSE](LICENSE) untuk ketentuan lengkap. Untuk lisensi komersial, hubungi pemelihara.

Copyright (C) 2024-2026 Elie Habib. Semua hak dilindungi.

---

## Penulis

**Elie Habib** — [GitHub](https://github.com/koala73)

## Kontributor

<a href="https://github.com/koala73/worldmonitor/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=koala73/worldmonitor" />
</a>

## Pengakuan Keamanan

Kami berterima kasih kepada peneliti berikut yang telah mengungkapkan masalah keamanan secara bertanggung jawab:

- **Cody Richard** — Mengungkapkan tiga temuan keamanan yang mencakup eksposur perintah IPC, analisis batas kepercayaan renderer-to-sidecar, dan arsitektur injeksi kredensial fetch patch (2026)

Lihat [Kebijakan Keamanan](./SECURITY.md) kami untuk panduan pengungkapan yang bertanggung jawab.

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
