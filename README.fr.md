[中文](README.zh.md) | [日本語](README.ja.md) | [Português](README.pt-br.md) | [Tiếng Việt](README.vi.md) | **Français** | [Italiano](README.it.md) | [Bahasa Indonesia](README.id.md) | [Malay](README.my.md) | [English](README.md)

---

# World Monitor

**Tableau de bord d'intelligence mondiale en temps réel — agrégation de nouvelles par IA, surveillance géopolitique et suivi d'infrastructures dans une interface unifiée de conscience situationnelle.**

[![GitHub stars](https://img.shields.io/github/stars/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/network/members)
[![Discord](https://img.shields.io/badge/Discord-Rejoindre-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/re63kWKxaz)
[![License: AGPL v3](https://img.shields.io/badge/Licence-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Last commit](https://img.shields.io/github/last-commit/koala73/worldmonitor)](https://github.com/koala73/worldmonitor/commits/main)
[![Latest release](https://img.shields.io/github/v/release/koala73/worldmonitor?style=flat)](https://github.com/koala73/worldmonitor/releases/latest)

<p align="center">
  <a href="https://worldmonitor.app"><img src="https://img.shields.io/badge/Web_App-worldmonitor.app-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Application Web"></a>&nbsp;
  <a href="https://tech.worldmonitor.app"><img src="https://img.shields.io/badge/Tech-tech.worldmonitor.app-0891b2?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Variante Tech"></a>&nbsp;
  <a href="https://finance.worldmonitor.app"><img src="https://img.shields.io/badge/Finance-finance.worldmonitor.app-059669?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Variante Finance"></a>&nbsp;
  <a href="https://commodity.worldmonitor.app"><img src="https://img.shields.io/badge/Commodity-commodity.worldmonitor.app-b45309?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Variante Commodity"></a>&nbsp;
  <a href="https://happy.worldmonitor.app"><img src="https://img.shields.io/badge/Happy-happy.worldmonitor.app-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Variante Happy"></a>
</p>

<p align="center">
  <a href="https://worldmonitor.app/api/download?platform=windows-exe"><img src="https://img.shields.io/badge/Download-Windows_(.exe)-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Windows (.exe)"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=macos-arm64"><img src="https://img.shields.io/badge/Download-macOS_Apple_Silicon-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Apple Silicon"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=macos-x64"><img src="https://img.shields.io/badge/Download-macOS_Intel-555555?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=linux-appimage"><img src="https://img.shields.io/badge/Download-Linux_(.AppImage)-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux (.AppImage)"></a>
</p>

<p align="center">
  <a href="https://docs.worldmonitor.app"><strong>Documentation</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/koala73/worldmonitor/releases/latest"><strong>Versions</strong></a> &nbsp;·&nbsp;
  <a href="https://docs.worldmonitor.app/contributing"><strong>Contribuer</strong></a>
</p>

![World Monitor Dashboard](docs/images/worldmonitor-7-mar-2026.jpg)

---

## Fonctionnalités

- **435+** flux d'actualités sélectionnés dans 15 catégories, synthétisés par IA en briefings
- **Double moteur cartographique** — globe 3D (globe.gl) et carte plate WebGL (deck.gl) avec 45 couches de données
- **Corrélation inter-flux** — convergence des signaux militaires, économiques, catastrophes et escalade
- **Indice d'intelligence par pays** — score de risque composite sur 12 catégories de signaux
- **Radar financier** — 92 bourses, matières premières, crypto et composite de marché à 7 signaux
- **IA locale** — fonctionne entièrement avec Ollama, aucune clé API requise
- **5 variantes du site** depuis un seul code source (world, tech, finance, commodity, happy)
- **Application bureau native** (Tauri 2) pour macOS, Windows et Linux
- **21 langues** avec flux en langue native et support RTL

Pour la liste complète des fonctionnalités, l'architecture, les sources de données et les algorithmes, consultez la **[documentation](https://docs.worldmonitor.app)**.

---

## Démarrage rapide

```bash
git clone https://github.com/koala73/worldmonitor.git
cd worldmonitor
npm install
npm run dev
```

Ouvrez [localhost:5173](http://localhost:5173). Aucune variable d'environnement requise pour le fonctionnement de base.

Développement par variante :

```bash
npm run dev:tech       # tech.worldmonitor.app
npm run dev:finance    # finance.worldmonitor.app
npm run dev:commodity  # commodity.worldmonitor.app
npm run dev:happy      # happy.worldmonitor.app
```

Consultez le **[guide d'auto-hébergement](https://docs.worldmonitor.app/getting-started)** pour les options de déploiement (Vercel, Docker, statique).

---

## Stack Technique

| Catégorie | Technologies |
|----------|-------------|
| **Frontend** | Vanilla TypeScript, Vite, globe.gl + Three.js, deck.gl + MapLibre GL |
| **Bureau** | Tauri 2 (Rust) avec sidecar Node.js |
| **IA/ML** | Ollama / Groq / OpenRouter, Transformers.js (côté navigateur) |
| **Contrats API** | Protocol Buffers (92 protos, 22 services), annotations HTTP sebuf |
| **Déploiement** | Vercel Edge Functions (60+), Railway relay, Tauri, PWA |
| **Cache** | Redis (Upstash), cache 3 niveaux, CDN, service worker |

Détails complets dans la **[documentation d'architecture](https://docs.worldmonitor.app/architecture)**.

---

## Données de vol

Données de vol gracieusement fournies par [Wingbits](https://wingbits.com?utm_source=worldmonitor&utm_medium=referral&utm_campaign=worldmonitor), la solution de données de vol ADS-B la plus avancée.

---

## Sources de données

WorldMonitor agrège 65+ sources de données externes couvrant la géopolitique, la finance, l'énergie, le climat, l'aviation, la cybersécurité, le militaire, les infrastructures et l'intelligence d'actualité. Consultez le [catalogue complet des sources](./docs/data-sources.mdx).

---

## Contribuer

Les contributions sont les bienvenues ! Consultez [CONTRIBUTING.md](./CONTRIBUTING.md) pour les directives.

```bash
npm run typecheck        # Type checking
npm run build:full       # Production build
```

---

## Licence

**AGPL-3.0** pour usage non commercial. **Licence commerciale** requise pour tout usage commercial.

| Cas d'usage | Autorisé ? |
|----------|----------|
| Personnel / recherche / éducation | Oui |
| Auto-hébergement (non commercial) | Oui, avec attribution |
| Fork et modification (non commercial) | Oui, partager le source sous AGPL-3.0 |
| Usage commercial / SaaS / rebranding | Licence commerciale requise |

Voir [LICENSE](LICENSE) pour les termes complets. Pour les licences commerciales, contactez le mainteneur.

Copyright (C) 2024-2026 Elie Habib. Tous droits réservés.

---

## Auteur

**Elie Habib** — [GitHub](https://github.com/koala73)

## Contributeurs

<a href="https://github.com/koala73/worldmonitor/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=koala73/worldmonitor" />
</a>

## Remerciements sécurité

Nous remercions les chercheurs suivants pour avoir divulgué de manière responsable des problèmes de sécurité :

- **Cody Richard** — A divulgué trois découvertes de sécurité couvrant l'exposition des commandes IPC, l'analyse de la frontière de confiance renderer-to-sidecar et l'architecture d'injection de credentials via fetch patch (2026)

Consultez notre [Politique de sécurité](./SECURITY.md) pour les directives de divulgation responsable.

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
