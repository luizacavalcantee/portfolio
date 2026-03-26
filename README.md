# Portfolio — Next.js + Tailwind CSS

Design fiel ao Figma com tema escuro, tipografia editorial e efeitos de smoke.

## Stack
- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- **Fontes:** Cormorant Garamond + DM Sans (Google Fonts)

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`

## Estrutura

```
app/
  layout.tsx       — Root layout com fonts e metadata
  page.tsx         — Página principal (monta todos os componentes)
  globals.css      — Estilos globais, animações, CSS variables

components/
  Navbar.tsx       — Navbar fixa com scroll effect
  Hero.tsx         — Hero com smoke blobs e headline grande
  Gallery.tsx      — Grid 3x3 de projetos
  About.tsx        — Seção "Meet Me" com foto + bio
  RecentWork.tsx   — Strip horizontal + lista de trabalhos
  Process.tsx      — 3 passos do processo
  Services.tsx     — Grid de serviços 2x2
  Reviews.tsx      — Cards de depoimentos
  Stats.tsx        — Números em destaque
  FAQ.tsx          — Accordion de perguntas frequentes
  CTA.tsx          — Seção final de call to action
  Footer.tsx       — Footer com links sociais
```

## Substituindo as imagens

Coloque suas imagens na pasta `public/images/` e substitua os placeholders nos componentes:

```tsx
// Descomente e ajuste o src:
<Image src="/images/gallery-1.jpg" alt="..." fill className="object-cover" />
```

As divs com fundo `bg-zinc-900` são os placeholders atuais.

## Personalizando

- **Cores:** edite as CSS variables em `globals.css` (`--accent`, `--accent-warm`)
- **Fontes:** substitua as imports no `globals.css` e `tailwind.config.ts`
- **Textos:** todos os textos estão inline nos componentes para fácil edição