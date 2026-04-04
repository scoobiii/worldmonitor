[中文](README.zh.md) | [日本語](README.ja.md) | [Português](README.pt-br.md) | [Tiếng Việt](README.vi.md) | [Français](README.fr.md) | **Italiano** | [Bahasa Indonesia](README.id.md) | [Malay](README.my.md) | [English](README.md)

---

# World Monitor

**Dashboard di intelligence globale in tempo reale — aggregazione di notizie con AI, monitoraggio geopolitico e tracciamento delle infrastrutture in un'interfaccia unificata di situational awareness.**

[![GitHub stars](https://img.shields.io/github/stars/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/network/members)
[![Discord](https://img.shields.io/badge/Discord-Unisciti-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/re63kWKxaz)
[![License: AGPL v3](https://img.shields.io/badge/Licenza-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Last commit](https://img.shields.io/github/last-commit/koala73/worldmonitor)](https://github.com/koala73/worldmonitor/commits/main)
[![Latest release](https://img.shields.io/github/v/release/koala73/worldmonitor?style=flat)](https://github.com/koala73/worldmonitor/releases/latest)

<p align="center">
  <a href="https://worldmonitor.app"><img src="https://img.shields.io/badge/Web_App-worldmonitor.app-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="App Web"></a>&nbsp;
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
  <a href="https://docs.worldmonitor.app"><strong>Documentazione</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/koala73/worldmonitor/releases/latest"><strong>Versioni</strong></a> &nbsp;·&nbsp;
  <a href="https://docs.worldmonitor.app/contributing"><strong>Contribuire</strong></a>
</p>

![World Monitor Dashboard](docs/images/worldmonitor-7-mar-2026.jpg)

---

## Funzionalità

- **435+** feed di notizie curati in 15 categorie, sintetizzati da AI in briefing
- **Doppio motore cartografico** — globo 3D (globe.gl) e mappa piatta WebGL (deck.gl) con 45 livelli di dati
- **Correlazione tra flussi** — convergenza di segnali militari, economici, di disastri e di escalation
- **Indice di Intelligence per Paese** — punteggio di rischio composito su 12 categorie di segnali
- **Radar finanziario** — 92 borse valori, materie prime, crypto e composito di mercato a 7 segnali
- **AI locale** — funziona completamente con Ollama, nessuna chiave API richiesta
- **5 varianti del sito** da un unico codice sorgente (world, tech, finance, commodity, happy)
- **App desktop nativa** (Tauri 2) per macOS, Windows e Linux
- **21 lingue** con feed in lingua nativa e supporto RTL

Per la lista completa delle funzionalità, architettura, fonti di dati e algoritmi, consultare la **[documentazione](https://docs.worldmonitor.app)**.

---

## Avvio Rapido

```bash
git clone https://github.com/koala73/worldmonitor.git
cd worldmonitor
npm install
npm run dev
```

Aprire [localhost:5173](http://localhost:5173). Nessuna variabile d'ambiente richiesta per il funzionamento base.

Sviluppo per variante:

```bash
npm run dev:tech       # tech.worldmonitor.app
npm run dev:finance    # finance.worldmonitor.app
npm run dev:commodity  # commodity.worldmonitor.app
npm run dev:happy      # happy.worldmonitor.app
```

Consultare la **[guida al self-hosting](https://docs.worldmonitor.app/getting-started)** per le opzioni di deploy (Vercel, Docker, statico).

---

## Stack Tecnologico

| Categoria | Tecnologie |
|----------|-------------|
| **Frontend** | Vanilla TypeScript, Vite, globe.gl + Three.js, deck.gl + MapLibre GL |
| **Desktop** | Tauri 2 (Rust) con sidecar Node.js |
| **AI/ML** | Ollama / Groq / OpenRouter, Transformers.js (lato browser) |
| **Contratti API** | Protocol Buffers (92 proto, 22 servizi), annotazioni HTTP sebuf |
| **Deploy** | Vercel Edge Functions (60+), Railway relay, Tauri, PWA |
| **Cache** | Redis (Upstash), cache a 3 livelli, CDN, service worker |

Dettagli completi nella **[documentazione architetturale](https://docs.worldmonitor.app/architecture)**.

---

## Dati di Volo

Dati di volo forniti con gentilezza da [Wingbits](https://wingbits.com?utm_source=worldmonitor&utm_medium=referral&utm_campaign=worldmonitor), la soluzione di dati di volo ADS-B più avanzata.

---

## Fonti di Dati

WorldMonitor aggrega 65+ fonti di dati esterne su geopolitica, finanza, energia, clima, aviazione, cybersicurezza, militare, infrastrutture e intelligence di notizie. Consultare il [catalogo completo delle fonti](./docs/data-sources.mdx).

---

## Contribuire

I contributi sono benvenuti! Consultare [CONTRIBUTING.md](./CONTRIBUTING.md) per le linee guida.

```bash
npm run typecheck        # Type checking
npm run build:full       # Production build
```

---

## Licenza

**AGPL-3.0** per uso non commerciale. **Licenza commerciale** richiesta per qualsiasi uso commerciale.

| Caso d'uso | Consentito? |
|----------|----------|
| Personale / ricerca / educativo | Sì |
| Self-hosted (non commerciale) | Sì, con attribuzione |
| Fork e modifica (non commerciale) | Sì, condividere il codice sotto AGPL-3.0 |
| Uso commerciale / SaaS / rebranding | Richiede licenza commerciale |

Vedere [LICENSE](LICENSE) per i termini completi. Per licenze commerciali, contattare il maintainer.

Copyright (C) 2024-2026 Elie Habib. Tutti i diritti riservati.

---

## Autore

**Elie Habib** — [GitHub](https://github.com/koala73)

## Contributori

<a href="https://github.com/koala73/worldmonitor/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=koala73/worldmonitor" />
</a>

## Riconoscimenti Sicurezza

Ringraziamo i seguenti ricercatori per aver divulgato responsabilmente problemi di sicurezza:

- **Cody Richard** — Ha divulgato tre scoperte di sicurezza riguardanti l'esposizione dei comandi IPC, l'analisi del confine di fiducia renderer-to-sidecar e l'architettura di iniezione delle credenziali tramite fetch patch (2026)

Consultare la nostra [Politica di Sicurezza](./SECURITY.md) per le linee guida sulla divulgazione responsabile.

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
