[中文](README.zh.md) | [日本語](README.ja.md) | **Português** | [Tiếng Việt](README.vi.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Bahasa Indonesia](README.id.md) | [Malay](README.my.md) | [English](README.md)

---

# World Monitor

**Painel de inteligência global em tempo real** — agregação de notícias com IA, monitoramento geopolítico e rastreamento de infraestrutura em uma interface unificada de consciência situacional.

[![GitHub stars](https://img.shields.io/github/stars/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/network/members)
[![Discord](https://img.shields.io/badge/Discord-Entrar-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/re63kWKxaz)
[![License: AGPL v3](https://img.shields.io/badge/Licença-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Last commit](https://img.shields.io/github/last-commit/koala73/worldmonitor)](https://github.com/koala73/worldmonitor/commits/main)
[![Latest release](https://img.shields.io/github/v/release/koala73/worldmonitor?style=flat)](https://github.com/koala73/worldmonitor/releases/latest)

<p align="center">
  <a href="https://worldmonitor.app"><img src="https://img.shields.io/badge/Web_App-worldmonitor.app-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Web App"></a>&nbsp;
  <a href="https://tech.worldmonitor.app"><img src="https://img.shields.io/badge/Variante_Tech-tech.worldmonitor.app-0891b2?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Variante Tech"></a>&nbsp;
  <a href="https://finance.worldmonitor.app"><img src="https://img.shields.io/badge/Variante_Finance-finance.worldmonitor.app-059669?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Variante Finance"></a>&nbsp;
  <a href="https://commodity.worldmonitor.app"><img src="https://img.shields.io/badge/Variante_Commodity-commodity.worldmonitor.app-b45309?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Variante Commodity"></a>&nbsp;
  <a href="https://happy.worldmonitor.app"><img src="https://img.shields.io/badge/Variante_Happy-happy.worldmonitor.app-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Variante Happy"></a>
</p>

<p align="center">
  <a href="https://worldmonitor.app/api/download?platform=windows-exe"><img src="https://img.shields.io/badge/Download-Windows_(.exe)-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Download Windows"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=macos-arm64"><img src="https://img.shields.io/badge/Download-macOS_Apple_Silicon-000000?style=for-the-badge&logo=apple&logoColor=white" alt="Download macOS ARM"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=macos-x64"><img src="https://img.shields.io/badge/Download-macOS_Intel-555555?style=for-the-badge&logo=apple&logoColor=white" alt="Download macOS Intel"></a>&nbsp;
  <a href="https://worldmonitor.app/api/download?platform=linux-appimage"><img src="https://img.shields.io/badge/Download-Linux_(.AppImage)-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Download Linux"></a>
</p>

<p align="center">
  <a href="https://docs.worldmonitor.app"><strong>Documentação</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/koala73/worldmonitor/releases/latest"><strong>Versões</strong></a> &nbsp;·&nbsp;
  <a href="https://docs.worldmonitor.app/contributing"><strong>Contribuir</strong></a>
</p>

![World Monitor Dashboard](docs/images/worldmonitor-7-mar-2026.jpg)

---

## O que faz

- **435+ feeds de notícias** curados em 15 categorias, sintetizados por IA em briefings
- **Motor de mapas duplo** — globo 3D (globe.gl) e mapa plano WebGL (deck.gl) com 45 camadas de dados
- **Correlação entre fluxos** — convergência de sinais militares, econômicos, de desastres e de escalada
- **Índice de Inteligência por País** — pontuação de risco composta por 12 categorias de sinais
- **Radar financeiro** — 92 bolsas de valores, commodities, cripto e composto de mercado com 7 sinais
- **IA local** — execute tudo com Ollama, sem necessidade de chaves de API
- **5 variantes do site** a partir de um único código-fonte (world, tech, finance, commodity, happy)
- **App desktop nativo** (Tauri 2) para macOS, Windows e Linux
- **21 idiomas** com feeds em língua nativa e suporte a RTL

Para a lista completa de funcionalidades, arquitetura, fontes de dados e algoritmos, consulte a **[documentação](https://docs.worldmonitor.app)**.

---

## Início Rápido

```bash
git clone https://github.com/koala73/worldmonitor.git
cd worldmonitor
npm install
npm run dev
```

Acesse [localhost:5173](http://localhost:5173). Nenhuma variável de ambiente é necessária para operação básica.

Para desenvolvimento por variante:

```bash
npm run dev:tech       # tech.worldmonitor.app
npm run dev:finance    # finance.worldmonitor.app
npm run dev:commodity  # commodity.worldmonitor.app
npm run dev:happy      # happy.worldmonitor.app
```

Consulte o **[guia de self-hosting](https://docs.worldmonitor.app/getting-started)** para opções de implantação (Vercel, Docker, estático).

---

## Stack Tecnológica

| Categoria | Tecnologias |
|----------|-------------|
| **Frontend** | Vanilla TypeScript, Vite, globe.gl + Three.js, deck.gl + MapLibre GL |
| **Desktop** | Tauri 2 (Rust) com sidecar Node.js |
| **IA/ML** | Ollama / Groq / OpenRouter, Transformers.js (browser-side) |
| **Contratos de API** | Protocol Buffers (92 protos, 22 serviços), anotações HTTP sebuf |
| **Deploy** | Vercel Edge Functions (60+), Railway relay, Tauri, PWA |
| **Cache** | Redis (Upstash), cache 3 camadas, CDN, service worker |

Detalhes completos da stack na **[documentação de arquitetura](https://docs.worldmonitor.app/architecture)**.

---

## Dados de Voo

Dados de voo fornecidos pelo [Wingbits](https://wingbits.com?utm_source=worldmonitor&utm_medium=referral&utm_campaign=worldmonitor), a solução de dados de voo ADS-B mais avançada.

---

## Fontes de Dados

O WorldMonitor agrega 65+ fontes de dados externas em geopolítica, finanças, energia, clima, aviação, segurança cibernética, militar, infraestrutura e inteligência de notícias. Veja o [catálogo completo de fontes](./docs/data-sources.mdx) para provedores, camadas de feed e métodos de coleta.

---

## Contribuindo

Contribuições são bem-vindas! Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para as diretrizes.

```bash
npm run typecheck        # Verificação de tipos
npm run build:full       # Build de produção
```

---

## Licença

**AGPL-3.0** para uso não comercial. **Licença comercial** obrigatória para qualquer uso comercial.

| Caso de Uso | Permitido? |
|----------|----------|
| Pessoal / pesquisa / educacional | Sim |
| Self-hosted (não comercial) | Sim, com atribuição |
| Fork e modificação (não comercial) | Sim, compartilhe o código sob AGPL-3.0 |
| Uso comercial / SaaS / rebranding | Requer licença comercial |

Veja [LICENSE](LICENSE) para os termos completos. Para licenciamento comercial, entre em contato com o mantenedor.

Copyright (C) 2024-2026 Elie Habib. Todos os direitos reservados.

---

## Autor

**Elie Habib** — [GitHub](https://github.com/koala73)

## Contribuidores

<a href="https://github.com/koala73/worldmonitor/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=koala73/worldmonitor" />
</a>

## Reconhecimentos de Segurança

Agradecemos aos seguintes pesquisadores por divulgarem responsavelmente problemas de segurança:

- **Cody Richard** — Divulgou três descobertas de segurança cobrindo exposição de comandos IPC, análise de fronteira de confiança renderer-to-sidecar e arquitetura de injeção de credenciais via fetch patch (2026)

Consulte nossa [Política de Segurança](./SECURITY.md) para diretrizes de divulgação responsável.

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
