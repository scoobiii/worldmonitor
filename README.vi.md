[中文](README.zh.md) | [日本語](README.ja.md) | [Português](README.pt-br.md) | **Tiếng Việt** | [Français](README.fr.md) | [Italiano](README.it.md) | [Bahasa Indonesia](README.id.md) | [Malay](README.my.md) | [English](README.md)

---

# World Monitor

**Bảng điều khiển tình báo toàn cầu thời gian thực — tổng hợp tin tức bằng AI, giám sát địa chính trị và theo dõi cơ sở hạ tầng trong giao diện nhận thức tình huống thống nhất.**

[![GitHub stars](https://img.shields.io/github/stars/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/network/members)
[![Discord](https://img.shields.io/badge/Discord-Tham gia-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/re63kWKxaz)
[![License: AGPL v3](https://img.shields.io/badge/Giấy phép-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Last commit](https://img.shields.io/github/last-commit/koala73/worldmonitor)](https://github.com/koala73/worldmonitor/commits/main)
[![Latest release](https://img.shields.io/github/v/release/koala73/worldmonitor?style=flat)](https://github.com/koala73/worldmonitor/releases/latest)

<p align="center">
  <a href="https://worldmonitor.app"><img src="https://img.shields.io/badge/Web_App-worldmonitor.app-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Ứng dụng Web"></a>&nbsp;
  <a href="https://tech.worldmonitor.app"><img src="https://img.shields.io/badge/Tech-tech.worldmonitor.app-0891b2?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Biến thể Tech"></a>&nbsp;
  <a href="https://finance.worldmonitor.app"><img src="https://img.shields.io/badge/Finance-finance.worldmonitor.app-059669?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Biến thể Finance"></a>&nbsp;
  <a href="https://commodity.worldmonitor.app"><img src="https://img.shields.io/badge/Commodity-commodity.worldmonitor.app-b45309?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Biến thể Commodity"></a>&nbsp;
  <a href="https://happy.worldmonitor.app"><img src="https://img.shields.io/badge/Happy-happy.worldmonitor.app-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Biến thể Happy"></a>
</p>

<p align="center">
  <a href="https://worldmonitor.app/api/download?platform=windows-exe"><img src="https://img.shields.io/badge/Download-Windows_(.exe)-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Windows (.exe)"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=macos-arm64"><img src="https://img.shields.io/badge/Download-macOS_Apple_Silicon-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Apple Silicon"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=macos-x64"><img src="https://img.shields.io/badge/Download-macOS_Intel-555555?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=linux-appimage"><img src="https://img.shields.io/badge/Download-Linux_(.AppImage)-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux (.AppImage)"></a>
</p>

<p align="center">
  <a href="https://docs.worldmonitor.app"><strong>Tài liệu</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/koala73/worldmonitor/releases/latest"><strong>Phiên bản</strong></a> &nbsp;·&nbsp;
  <a href="https://docs.worldmonitor.app/contributing"><strong>Đóng góp</strong></a>
</p>

![World Monitor Dashboard](docs/images/worldmonitor-7-mar-2026.jpg)

---

## Tính năng

- **435+** nguồn tin tức được tuyển chọn trong 15 danh mục, được AI tổng hợp thành các bản tóm tắt
- **Động cơ bản đồ kép** — quả cầu 3D (globe.gl) và bản đồ phẳng WebGL (deck.gl) với 45 lớp dữ liệu
- **Tương quan đa luồng** — hội tụ tín hiệu quân sự, kinh tế, thảm họa và leo thang
- **Chỉ số Tình báo Quốc gia** — điểm rủi ro tổng hợp trên 12 danh mục tín hiệu
- **Radar tài chính** — 92 sàn giao dịch chứng khoán, hàng hóa, tiền điện tử và chỉ số thị trường 7 tín hiệu
- **AI cục bộ** — chạy mọi thứ với Ollama, không cần khóa API
- **5 biến thể trang web** từ một cơ sở mã duy nhất (world, tech, finance, commodity, happy)
- **Ứng dụng desktop gốc** (Tauri 2) cho macOS, Windows và Linux
- **21 ngôn ngữ** với nguồn tin tức ngôn ngữ gốc và hỗ trợ RTL

Danh sách đầy đủ tính năng, kiến trúc, nguồn dữ liệu và thuật toán xem tại **[tài liệu](https://docs.worldmonitor.app)**.

---

## Bắt đầu nhanh

```bash
git clone https://github.com/koala73/worldmonitor.git
cd worldmonitor
npm install
npm run dev
```

Mở [localhost:5173](http://localhost:5173). Không cần biến môi trường cho hoạt động cơ bản.

Phát triển theo biến thể:

```bash
npm run dev:tech       # tech.worldmonitor.app
npm run dev:finance    # finance.worldmonitor.app
npm run dev:commodity  # commodity.worldmonitor.app
npm run dev:happy      # happy.worldmonitor.app
```

Xem **[hướng dẫn tự lưu trữ](https://docs.worldmonitor.app/getting-started)** để biết các tùy chọn triển khai (Vercel, Docker, tĩnh).

---

## Công nghệ sử dụng

| Danh mục | Công nghệ |
|----------|-------------|
| **Frontend** | Vanilla TypeScript, Vite, globe.gl + Three.js, deck.gl + MapLibre GL |
| **Desktop** | Tauri 2 (Rust) với Node.js sidecar |
| **AI/ML** | Ollama / Groq / OpenRouter, Transformers.js (phía trình duyệt) |
| **Hợp đồng API** | Protocol Buffers (92 proto, 22 dịch vụ), chú thích HTTP sebuf |
| **Triển khai** | Vercel Edge Functions (60+), Railway relay, Tauri, PWA |
| **Bộ nhớ đệm** | Redis (Upstash), cache 3 lớp, CDN, service worker |

Chi tiết đầy đủ trong **[tài liệu kiến trúc](https://docs.worldmonitor.app/architecture)**.

---

## Dữ liệu bay

Dữ liệu bay được cung cấp bởi [Wingbits](https://wingbits.com?utm_source=worldmonitor&utm_medium=referral&utm_campaign=worldmonitor), giải pháp dữ liệu bay ADS-B tiên tiến nhất.

---

## Nguồn dữ liệu

WorldMonitor tổng hợp 65+ nguồn dữ liệu bên ngoài về địa chính trị, tài chính, năng lượng, khí hậu, hàng không, an ninh mạng, quân sự, cơ sở hạ tầng và tình báo tin tức. Xem [danh mục nguồn dữ liệu đầy đủ](./docs/data-sources.mdx).

---

## Đóng góp

Chào mừng mọi đóng góp! Xem [CONTRIBUTING.md](./CONTRIBUTING.md) để biết hướng dẫn.

```bash
npm run typecheck        # Type checking
npm run build:full       # Production build
```

---

## Giấy phép

**AGPL-3.0** cho sử dụng phi thương mại. **Giấy phép thương mại** bắt buộc cho mọi sử dụng thương mại.

| Trường hợp sử dụng | Được phép? |
|----------|----------|
| Cá nhân / nghiên cứu / giáo dục | Có |
| Tự lưu trữ (phi thương mại) | Có, kèm ghi nhận |
| Fork và chỉnh sửa (phi thương mại) | Có, chia sẻ mã nguồn theo AGPL-3.0 |
| Sử dụng thương mại / SaaS / rebranding | Yêu cầu giấy phép thương mại |

Xem [LICENSE](LICENSE) để biết điều khoản đầy đủ. Liên hệ người duy trì để cấp phép thương mại.

Copyright (C) 2024-2026 Elie Habib. Bảo lưu mọi quyền.

---

## Tác giả

**Elie Habib** — [GitHub](https://github.com/koala73)

## Người đóng góp

<a href="https://github.com/koala73/worldmonitor/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=koala73/worldmonitor" />
</a>

## Ghi nhận bảo mật

Chúng tôi cảm ơn các nhà nghiên cứu sau đây đã tiết lộ có trách nhiệm các vấn đề bảo mật:

- **Cody Richard** — Đã tiết lộ ba phát hiện bảo mật bao gồm lộ lệnh IPC, phân tích ranh giới tin cậy renderer-to-sidecar và kiến trúc tiêm thông tin xác thực qua fetch patch (2026)

Xem [Chính sách bảo mật](./SECURITY.md) để biết hướng dẫn tiết lộ có trách nhiệm.

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
