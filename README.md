# Academia Princesa Fitness — site

Site one-page da Academia Princesa Fitness (Princesa Isabel - PB), feito com **Astro**, **GSAP**
(ScrollTrigger + SplitText) e **Lenis**. Identidade visual em [BRAND.md](BRAND.md); tudo que falta
confirmar com a academia está em [PENDENCIAS.md](PENDENCIAS.md).

## Rodar localmente

Requer Node.js 22.12 ou mais novo.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera o site estático em dist/
npm run preview    # serve o dist/ localmente
npm run check      # checagem de tipos
```

## Onde mudar cada coisa

| O quê | Onde |
|---|---|
| Textos, planos, preços, horários, aulas, FAQ, WhatsApp, endereço | `src/data/site.ts` |
| Número do WhatsApp (mensagens pré-preenchidas passam a funcionar) | `SITE.whatsapp.number` em `src/data/site.ts` |
| Cores, fontes, botões, utilitários | `src/styles/global.css` |
| Cada seção da página | `src/components/sections/*.astro` |
| Header, rodapé, preloader, WhatsApp flutuante, cursor | `src/components/global/` |
| Animações (GSAP) | `src/scripts/motion/` |
| Comportamentos (menu, lightbox, FAQ, abas, planos, "aberto agora") | `src/scripts/ui/` |
| SEO (title, description, Open Graph, JSON-LD) | `src/layouts/Base.astro` |
| Domínio do site (canonical, sitemap) | variável `SITE_URL` ou `astro.config.mjs` |

### Trocar as fotos

Cada imagem do site tem um nome fixo (um "slot"). Basta salvar o arquivo em
`src/assets/img/site/` com esse nome que o site passa a usá-lo; enquanto ele não existir, aparece
a imagem provisória (recorte das artes do Instagram) ou, nas aulas, o card gráfico vermelho.

- Depois de colocar imagens novas, rode **`npm run otimizar`**: converte para WebP (máx. 2400 px)
  e move os originais pesados para `source-assets/imagens-originais/` (fora do site e do git).
- Lista de nomes e tamanhos: `src/assets/img/site/LEIA-ME.md`
- Prompts prontos para gerar cada imagem: [PROMPTS-IMAGENS.md](PROMPTS-IMAGENS.md)
- Lógica dos slots: `src/data/images.ts`
- Depois de trocar a `hero`, rode `npm run og` para refazer a imagem de compartilhamento.

O Astro converte e redimensiona tudo automaticamente (WebP, `srcset`, lazy load).
As miniaturas da seção do Instagram são posts reais e ficam em `src/assets/img/feed-*.jpg`.

### Logo

`public/images/brand/logo-princesa-fitness.svg` é uma vetorização da arte do Instagram
**[VALIDAR LOGO VETORIZADO]**. O script `npm run logo` divide esse SVG (um path branco e um
vermelho) em símbolo + texto e gera `src/data/logo-paths.ts` e `public/favicon.svg`.
O arquivo original do designer provavelmente terá outra estrutura, então ao recebê-lo
será preciso adaptar o script ou trocar os paths em `src/data/logo-paths.ts` manualmente.

## Publicar na Vercel

1. Suba a pasta para um repositório no GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório. A Vercel detecta o Astro
   sozinha (build `npm run build`, saída `dist`).
3. Em **Settings → Environment Variables**, crie `SITE_URL` com o domínio final
   (ex.: `https://academiaprincesafitness.com.br`).
4. Em **Settings → Domains**, conecte o domínio.

Ou pela linha de comando: `npm i -g vercel` e depois `vercel` (prévia) / `vercel --prod` (produção).

## Acessibilidade e movimento

- Com "reduzir movimento" ativado no sistema, o site desliga preloader, scroll suave, pin,
  parallax, marquee e entradas animadas.
- Sem JavaScript, todo o conteúdo aparece normalmente (as abas de horário mostram todos os dias).
- Navegação por teclado com foco visível, menu mobile com foco preso e Esc para fechar,
  lightbox com `<dialog>` nativo (setas ← → e Esc).

## Resultados de teste (27/10/2026, build local)

- Sem rolagem horizontal em 360, 390, 768, 1280 e 1440 px.
- Lighthouse desktop: Performance 98 · Acessibilidade 100 · Boas práticas 100 · SEO 100.
- Lighthouse mobile: Performance 94–95 (com variação para baixo nas medições desta máquina) ·
  Acessibilidade 100 · Boas práticas 100 · SEO 100.
