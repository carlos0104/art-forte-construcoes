# TH BASFORT — Landing Page

Landing page institucional/portfólio construída em **Next.js 14 (App Router) + React + TypeScript + Tailwind CSS**.

## Conceito visual

- **Direção**: estética de "blueprint" / desenho técnico aplicada a uma marca de engenharia digital — grid sutil, marcas de registro nos cantos (`reg-marks`) e uma linha "desenhada" no hero, remetendo a precisão e projeto.
- **Paleta**:
  - `ink` `#0B0C0E` — fundo principal (escuro)
  - `surface` `#15171B` — painéis/seções alternadas
  - `paper` `#F4F1EA` — off-white, texto principal sobre fundo escuro
  - `line` `#2A2D33` — hairlines, divisores, grid
  - `muted` `#8B8F98` — texto secundário
  - `brass` `#C9A35A` — cor de destaque premium (links, tags, CTA)
- **Tipografia**:
  - Display: **Space Grotesk** (títulos)
  - Texto: **Inter** (corpo)
  - Mono: **JetBrains Mono** (tags de seção, rótulos técnicos — ex: "TH—01")

## Estrutura de pastas

```
th-basfort/
├── app/
│   ├── layout.tsx     # fontes, metadata/SEO
│   ├── page.tsx       # monta todas as seções
│   └── globals.css    # grid de fundo, marcas de registro, animações
├── components/
│   ├── Header.tsx        # menu fixo + CTA WhatsApp
│   ├── Hero.tsx           # seção inicial de impacto
│   ├── About.tsx          # "Sobre" + "O que fazemos"
│   ├── Services.tsx       # grade de serviços
│   ├── Portfolio.tsx      # clientes (Vega Incorporadora + placeholders)
│   ├── Differentials.tsx  # diferenciais
│   ├── Process.tsx        # processo de trabalho (5 etapas)
│   ├── CTA.tsx             # chamada final
│   ├── Footer.tsx          # contato
│   └── Reveal.tsx           # wrapper de animação ao rolar a página
├── tailwind.config.ts
└── package.json
```

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para gerar a versão de produção:

```bash
npm run build
npm start
```

> Obs.: o build precisa de acesso à internet na primeira vez (Next.js baixa as fontes do Google Fonts).

## Onde editar

| O que trocar | Onde |
|---|---|
| Número/link do WhatsApp | `WHATSAPP_LINK` em `Header.tsx`, `CTA.tsx` e `Footer.tsx` |
| E-mail e localização | `Footer.tsx` |
| Textos do Hero | `Hero.tsx` |
| Lista de serviços | array `SERVICES` em `Services.tsx` |
| Clientes do portfólio | array `CLIENTS` em `Portfolio.tsx` (já inclui Vega Incorporadora; substitua os cards `[ Nome do cliente ]` pelos próximos cases) |
| Diferenciais | array `ITEMS` em `Differentials.tsx` |
| Etapas do processo | array `STEPS` em `Process.tsx` |
| Logo/nome da marca | trecho `TH·BASFORT` em `Header.tsx` e `Footer.tsx` (substitua por `<Image>` se for usar um logo em arquivo) |
| Cores e fontes | `tailwind.config.ts` |

## Notas técnicas

- Todas as seções usam tags semânticas (`section`, `header`, `footer`) e âncoras (`#sobre`, `#servicos`, etc.) para navegação suave.
- Animações respeitam `prefers-reduced-motion`.
- Foco visível (`:focus-visible`) configurado para acessibilidade de teclado.
- O componente `Reveal` usa `IntersectionObserver` para revelar seções ao rolar a página, sem dependências externas.
