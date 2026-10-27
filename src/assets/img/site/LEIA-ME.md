# Imagens do site

Cada imagem tem um nome fixo (sem contar a extensão). Para trocar uma imagem:

1. Salve o arquivo aqui com o nome da tabela (.jpg, .png, .webp ou .avif — qualquer tamanho).
2. Rode **`npm run otimizar`** — converte para WebP leve (máx. 2400 px) e move o original pesado
   para `source-assets/imagens-originais/` (fora do site e do git). Arquivos corrompidos ou com
   download incompleto são recusados com aviso.
3. Rode `npm run build` (ou deixe o `npm run dev` aberto). Se trocou a `hero`, rode também `npm run og`.

Na hora do build o Astro ainda gera versões em vários tamanhos (WebP, e AVIF na hero), e cada
visitante baixa só a do tamanho da tela dele.

| Nome do arquivo | Onde aparece | Formato |
|---|---|---|
| `hero` | Topo da página (hero) e imagem de compartilhamento | Vertical 4:5 — 1600×2000 |
| `sobre` | Seção "Sobre a academia" | Horizontal 4:3 — 2000×1500 |
| `modalidade-musculacao` | Card Musculação | Horizontal 3:2 — 1800×1200 |
| `modalidade-cardio` | Card Cardio | Horizontal 3:2 — 1800×1200 |
| `modalidade-danca` | Card Dança | Horizontal 3:2 — 1800×1200 |
| `modalidade-step` | Card Step | Horizontal 3:2 — 1800×1200 |
| `modalidade-jump` | Card Jump | Horizontal 3:2 — 1800×1200 |
| `galeria-01-musculacao` | Galeria — bloco grande | Horizontal 4:3 — 2000×1500 |
| `galeria-02-iluminacao` | Galeria — bloco pequeno | Horizontal 4:3 — 1600×1200 |
| `galeria-03-halteres` | Galeria — bloco pequeno | Horizontal 4:3 — 1600×1200 |
| `galeria-04-cardio` | Galeria — bloco largo | Panorâmica 2:1 — 2400×1200 |
| `galeria-05-paineis` | Galeria — bloco pequeno | Horizontal 4:3 — 1600×1200 |
| `galeria-06-maquinas` | Galeria — bloco pequeno | Horizontal 4:3 — 1600×1200 |

> ⚠️ `modalidade-cardio.webp` atual é **provisória** (recorte da `galeria-04-cardio`), porque o
> arquivo original enviado estava incompleto. Salve a imagem de novo como `modalidade-cardio.jpg`
> e rode `npm run otimizar` — ela substitui a provisória automaticamente.
