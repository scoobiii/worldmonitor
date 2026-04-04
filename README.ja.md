[中文](README.zh.md) | **日本語** | [Português](README.pt-br.md) | [Tiếng Việt](README.vi.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Bahasa Indonesia](README.id.md) | [Malay](README.my.md) | [English](README.md)

---

# World Monitor

**リアルタイムグローバルインテリジェンスダッシュボード — AIによるニュース集約、地政学的モニタリング、インフラ追跡を統合した状況認識インターフェース。**

[![GitHub stars](https://img.shields.io/github/stars/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/network/members)
[![Discord](https://img.shields.io/badge/Discord-参加-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/re63kWKxaz)
[![License: AGPL v3](https://img.shields.io/badge/ライセンス-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Last commit](https://img.shields.io/github/last-commit/koala73/worldmonitor)](https://github.com/koala73/worldmonitor/commits/main)
[![Latest release](https://img.shields.io/github/v/release/koala73/worldmonitor?style=flat)](https://github.com/koala73/worldmonitor/releases/latest)

<p align="center">
  <a href="https://worldmonitor.app"><img src="https://img.shields.io/badge/Web_App-worldmonitor.app-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Webアプリ"></a>&nbsp;
  <a href="https://tech.worldmonitor.app"><img src="https://img.shields.io/badge/Tech-tech.worldmonitor.app-0891b2?style=for-the-badge&logo=googlechrome&logoColor=white" alt="テック版"></a>&nbsp;
  <a href="https://finance.worldmonitor.app"><img src="https://img.shields.io/badge/Finance-finance.worldmonitor.app-059669?style=for-the-badge&logo=googlechrome&logoColor=white" alt="ファイナンス版"></a>&nbsp;
  <a href="https://commodity.worldmonitor.app"><img src="https://img.shields.io/badge/Commodity-commodity.worldmonitor.app-b45309?style=for-the-badge&logo=googlechrome&logoColor=white" alt="コモディティ版"></a>&nbsp;
  <a href="https://happy.worldmonitor.app"><img src="https://img.shields.io/badge/Happy-happy.worldmonitor.app-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white" alt="ハッピー版"></a>
</p>

<p align="center">
  <a href="https://worldmonitor.app/api/download?platform=windows-exe"><img src="https://img.shields.io/badge/Download-Windows_(.exe)-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Windows (.exe)"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=macos-arm64"><img src="https://img.shields.io/badge/Download-macOS_Apple_Silicon-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Apple Silicon"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=macos-x64"><img src="https://img.shields.io/badge/Download-macOS_Intel-555555?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=linux-appimage"><img src="https://img.shields.io/badge/Download-Linux_(.AppImage)-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux (.AppImage)"></a>
</p>

<p align="center">
  <a href="https://docs.worldmonitor.app"><strong>ドキュメント</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/koala73/worldmonitor/releases/latest"><strong>リリース</strong></a> &nbsp;·&nbsp;
  <a href="https://docs.worldmonitor.app/contributing"><strong>コントリビュート</strong></a>
</p>

![World Monitor Dashboard](docs/images/worldmonitor-7-mar-2026.jpg)

---

## 機能

- **435以上**のキュレーションされたニュースフィード（15カテゴリ）、AIによるブリーフ生成
- **デュアルマップエンジン** — 3Dグローブ（globe.gl）とWebGLフラットマップ（deck.gl）、45のデータレイヤー
- **クロスストリーム相関** — 軍事・経済・災害・エスカレーションシグナルの収束分析
- **国別インテリジェンス指数** — 12のシグナルカテゴリによる複合リスクスコアリング
- **ファイナンスレーダー** — 92の証券取引所、コモディティ、暗号資産、7シグナル市場コンポジット
- **ローカルAI** — Ollamaで完全動作、APIキー不要
- **5サイトバリアント** — 単一コードベースから（world、tech、finance、commodity、happy）
- **ネイティブデスクトップアプリ**（Tauri 2）— macOS、Windows、Linux対応
- **21言語** — ネイティブ言語フィードとRTLサポート

全機能リスト、アーキテクチャ、データソース、アルゴリズムの詳細は**[ドキュメント](https://docs.worldmonitor.app)**を参照してください。

---

## クイックスタート

```bash
git clone https://github.com/koala73/worldmonitor.git
cd worldmonitor
npm install
npm run dev
```

[localhost:5173](http://localhost:5173) を開きます。基本操作に環境変数は不要です。

バリアント別の開発：

```bash
npm run dev:tech       # tech.worldmonitor.app
npm run dev:finance    # finance.worldmonitor.app
npm run dev:commodity  # commodity.worldmonitor.app
npm run dev:happy      # happy.worldmonitor.app
```

デプロイオプション（Vercel、Docker、静的）は**[セルフホスティングガイド](https://docs.worldmonitor.app/getting-started)**を参照。

---

## 技術スタック

| カテゴリ | 技術 |
|----------|-------------|
| **フロントエンド** | Vanilla TypeScript、Vite、globe.gl + Three.js、deck.gl + MapLibre GL |
| **デスクトップ** | Tauri 2（Rust）+ Node.js sidecar |
| **AI/ML** | Ollama / Groq / OpenRouter、Transformers.js（ブラウザサイド） |
| **API契約** | Protocol Buffers（92プロト、22サービス）、sebuf HTTPアノテーション |
| **デプロイ** | Vercel Edge Functions（60+）、Railway relay、Tauri、PWA |
| **キャッシュ** | Redis（Upstash）、3層キャッシュ、CDN、Service Worker |

技術スタックの詳細は**[アーキテクチャドキュメント](https://docs.worldmonitor.app/architecture)**を参照。

---

## フライトデータ

フライトデータは最先進のADS-Bフライトデータソリューション [Wingbits](https://wingbits.com?utm_source=worldmonitor&utm_medium=referral&utm_campaign=worldmonitor) により提供されています。

---

## データソース

WorldMonitorは地政学、金融、エネルギー、気候、航空、サイバー、軍事、インフラ、ニュースインテリジェンスにわたる65以上の外部データソースを集約しています。詳細は[データソースカタログ](./docs/data-sources.mdx)をご覧ください。

---

## コントリビュート

コントリビュート歓迎です！ガイドラインは [CONTRIBUTING.md](./CONTRIBUTING.md) をご覧ください。

```bash
npm run typecheck        # Type checking
npm run build:full       # Production build
```

---

## ライセンス

**AGPL-3.0** 非商用利用。**商用ライセンス**は商用利用に必要です。

| ユースケース | 可否 |
|----------|----------|
| 個人 / 研究 / 教育 | 可 |
| セルフホスト（非商用） | 可（帰属表示あり） |
| フォーク・改変（非商用） | 可（AGPL-3.0でソース共有） |
| 商用利用 / SaaS / リブランド | 商用ライセンス必要 |

完全な条件は [LICENSE](LICENSE) を参照。商用ライセンスはメンテナーにお問い合わせください。

Copyright (C) 2024-2026 Elie Habib. All rights reserved.

---

## 作者

**Elie Habib** — [GitHub](https://github.com/koala73)

## コントリビューター

<a href="https://github.com/koala73/worldmonitor/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=koala73/worldmonitor" />
</a>

## セキュリティ謝辞

セキュリティ問題を責任を持って開示してくれた研究者に感謝します：

- **Cody Richard** — IPCコマンド露出、レンダラーからサイドカーへの信任境界分析、fetchパッチクレデンシャルインジェクションアーキテクチャに関する3件のセキュリティ発見を開示（2026年）

責任ある開示ガイドラインは[セキュリティポリシー](./SECURITY.md)をご覧ください。

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
