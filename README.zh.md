**中文** | [日本語](README.ja.md) | [Português](README.pt-br.md) | [Tiếng Việt](README.vi.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Bahasa Indonesia](README.id.md) | [Malay](README.my.md) | [English](README.md)

---

# World Monitor

**实时全球情报仪表盘 — 由AI驱动的新闻聚合、地缘政治监控和基础设施追踪，集成于统一态势感知界面。**

[![GitHub stars](https://img.shields.io/github/stars/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/network/members)
[![Discord](https://img.shields.io/badge/Discord-加入-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/re63kWKxaz)
[![License: AGPL v3](https://img.shields.io/badge/许可证-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Last commit](https://img.shields.io/github/last-commit/koala73/worldmonitor)](https://github.com/koala73/worldmonitor/commits/main)
[![Latest release](https://img.shields.io/github/v/release/koala73/worldmonitor?style=flat)](https://github.com/koala73/worldmonitor/releases/latest)

<p align="center">
  <a href="https://worldmonitor.app"><img src="https://img.shields.io/badge/Web_App-worldmonitor.app-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Web应用"></a>&nbsp;
  <a href="https://tech.worldmonitor.app"><img src="https://img.shields.io/badge/Tech-tech.worldmonitor.app-0891b2?style=for-the-badge&logo=googlechrome&logoColor=white" alt="科技版"></a>&nbsp;
  <a href="https://finance.worldmonitor.app"><img src="https://img.shields.io/badge/Finance-finance.worldmonitor.app-059669?style=for-the-badge&logo=googlechrome&logoColor=white" alt="金融版"></a>&nbsp;
  <a href="https://commodity.worldmonitor.app"><img src="https://img.shields.io/badge/Commodity-commodity.worldmonitor.app-b45309?style=for-the-badge&logo=googlechrome&logoColor=white" alt="大宗商品版"></a>&nbsp;
  <a href="https://happy.worldmonitor.app"><img src="https://img.shields.io/badge/Happy-happy.worldmonitor.app-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white" alt="快乐版"></a>
</p>

<p align="center">
  <a href="https://worldmonitor.app/api/download?platform=windows-exe"><img src="https://img.shields.io/badge/Download-Windows_(.exe)-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Windows (.exe)"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=macos-arm64"><img src="https://img.shields.io/badge/Download-macOS_Apple_Silicon-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Apple Silicon"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=macos-x64"><img src="https://img.shields.io/badge/Download-macOS_Intel-555555?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=linux-appimage"><img src="https://img.shields.io/badge/Download-Linux_(.AppImage)-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux (.AppImage)"></a>
</p>

<p align="center">
  <a href="https://docs.worldmonitor.app"><strong>文档</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/koala73/worldmonitor/releases/latest"><strong>版本发布</strong></a> &nbsp;·&nbsp;
  <a href="https://docs.worldmonitor.app/contributing"><strong>贡献指南</strong></a>
</p>

![World Monitor Dashboard](docs/images/worldmonitor-7-mar-2026.jpg)

---

## 功能介绍

- **435+** 精选新闻源，覆盖15个类别，由AI合成为简报
- **双地图引擎** — 3D球体（globe.gl）和WebGL平面地图（deck.gl），含45个数据图层
- **跨流关联** — 军事、经济、灾难及局势升级信号汇聚分析
- **国家情报指数** — 跨12个信号类别的综合风险评分
- **金融雷达** — 92个证券交易所、大宗商品、加密货币及7信号市场综合指数
- **本地AI** — 使用Ollama在本地运行，无需API密钥
- **5个站点变体** 来自同一代码库（world、tech、finance、commodity、happy）
- **原生桌面应用**（Tauri 2）支持 macOS、Windows 和 Linux
- **21种语言**，含原生语言信息源和RTL支持

完整功能列表、架构说明、数据源及算法详见**[文档](https://docs.worldmonitor.app)**。

---

## 快速开始

```bash
git clone https://github.com/koala73/worldmonitor.git
cd worldmonitor
npm install
npm run dev
```

访问 [localhost:5173](http://localhost:5173)。基本操作无需环境变量。

按变体开发：

```bash
npm run dev:tech       # tech.worldmonitor.app
npm run dev:finance    # finance.worldmonitor.app
npm run dev:commodity  # commodity.worldmonitor.app
npm run dev:happy      # happy.worldmonitor.app
```

部署选项（Vercel、Docker、静态）请参阅**[自托管指南](https://docs.worldmonitor.app/getting-started)**。

---

## 技术栈

| 类别 | 技术 |
|----------|-------------|
| **前端** | Vanilla TypeScript、Vite、globe.gl + Three.js、deck.gl + MapLibre GL |
| **桌面端** | Tauri 2（Rust）+ Node.js sidecar |
| **AI/ML** | Ollama / Groq / OpenRouter，Transformers.js（浏览器端） |
| **API契约** | Protocol Buffers（92个proto，22个服务），sebuf HTTP注解 |
| **部署** | Vercel Edge Functions（60+）、Railway relay、Tauri、PWA |
| **缓存** | Redis（Upstash）、三级缓存、CDN、Service Worker |

完整技术栈详见**[架构文档](https://docs.worldmonitor.app/architecture)**。

---

## 飞行数据

飞行数据由 [Wingbits](https://wingbits.com?utm_source=worldmonitor&utm_medium=referral&utm_campaign=worldmonitor) 慷慨提供，这是最先进的ADS-B飞行数据解决方案。

---

## 数据来源

WorldMonitor 汇聚65+个外部数据源，涵盖地缘政治、金融、能源、气候、航空、网络安全、军事、基础设施和新闻情报。完整数据源目录请见[数据源目录](./docs/data-sources.mdx)。

---

## 贡献

欢迎贡献！请参阅 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解贡献规范。

```bash
npm run typecheck        # Type checking
npm run build:full       # Production build
```

---

## 许可证

**AGPL-3.0** 非商业用途。**商业许可证**适用于任何商业用途。

| 使用场景 | 是否允许 |
|----------|----------|
| 个人 / 研究 / 教育 | 允许 |
| 自托管（非商业） | 允许，需注明来源 |
| Fork并修改（非商业） | 允许，须以AGPL-3.0共享源码 |
| 商业使用 / SaaS / 品牌重塑 | 需要商业许可证 |

完整条款见 [LICENSE](LICENSE)。商业授权请联系维护者。

Copyright (C) 2024-2026 Elie Habib. 保留所有权利。

---

## 作者

**Elie Habib** — [GitHub](https://github.com/koala73)

## 贡献者

<a href="https://github.com/koala73/worldmonitor/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=koala73/worldmonitor" />
</a>

## 安全致谢

感谢以下研究人员负责任地披露安全问题：

- **Cody Richard** — 披露了三项安全发现，涵盖IPC命令暴露、渲染器到sidecar信任边界分析及fetch patch凭证注入架构（2026年）

负责任披露指南请参阅[安全政策](./SECURITY.md)。

---

<p align="center">
  <a href="https://worldmonitor.app">worldmonitor.app</a> &nbsp;·&nbsp;
  <a href="https://docs.worldmonitor.app">docs.worldmonitor.app</a> &nbsp;·&nbsp;
  <a href="https://finance.worldmonitor.app">finance.worldmonitor.app</a> &nbsp;·&nbsp;
  <a href="https://commodity.worldmonitor.app">commodity.worldmonitor.app</a>
</p>

## Star 历史

<a href="https://api.star-history.com/svg?repos=koala73/worldmonitor&type=Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=koala73/worldmonitor&type=Date&type=Date&theme=dark" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=koala73/worldmonitor&type=Date&type=Date" />
 </picture>
</a>
