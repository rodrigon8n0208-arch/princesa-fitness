// Gera recortes "sem pessoas / sem texto" das imagens públicas do Instagram
// para uso no site. Fonte: source-assets/instagram-raw  →  src/assets/img
// Quando o cliente enviar fotos reais, basta colocá-las em src/assets/img
// com os mesmos nomes (ou trocar os imports em src/data/site.ts).
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const RAW = 'source-assets/instagram-raw';
const OUT = 'src/assets/img';
mkdirSync(OUT, { recursive: true });

const crops = [
  // [arquivo de origem, saída, { left, top, width, height }]
  ['p-DewuL8SJXpS-1-hd.jpg', 'estrutura-halteres.jpg', { left: 0, top: 0, width: 1088, height: 500 }],
  ['p-DdpNDPNHy-T-1-hd.jpg', 'estrutura-cardio.jpg', { left: 0, top: 0, width: 1080, height: 500 }],
  ['reel-DecBTfnN94x.jpg', 'estrutura-teto-led.jpg', { left: 0, top: 0, width: 360, height: 190 }],
  ['reel-DeCX2UiBmsH.jpg', 'estrutura-logo-3d.jpg', { left: 0, top: 0, width: 360, height: 165 }],
  ['reel-DeUVeu9RPaA.jpg', 'estrutura-painel-led.jpg', { left: 190, top: 60, width: 170, height: 165 }],
  ['reel-DeuANX2PkTQ.jpg', 'estrutura-parede-logo.jpg', { left: 190, top: 70, width: 170, height: 160 }],
];

for (const [src, out, region] of crops) {
  await sharp(join(RAW, src)).extract(region).jpeg({ quality: 92 }).toFile(join(OUT, out));
  console.log('✓', out);
}

// Artes oficiais usadas no "feed do Instagram"
const feed = [
  ['p-DewuL8SJXpS-1-hd.jpg', 'feed-horarios.jpg'],
  ['p-Db6-730HCAU-1-hd.jpg', 'feed-planos.jpg'],
  ['p-Db6-730HCAU-2-hd.jpg', 'feed-premium.jpg'],
  ['p-Dd2T3KcNZNn-1-hd.jpg', 'feed-dica-treino.jpg'],
  ['p-DdpNDPNHy-T-1-hd.jpg', 'feed-cardio.jpg'],
  ['reel-Ddl62EjB6JY.jpg', 'feed-elevacao-lateral.jpg'],
];
for (const [src, out] of feed) {
  await sharp(join(RAW, src)).resize({ width: 720, withoutEnlargement: true }).jpeg({ quality: 90 }).toFile(join(OUT, out));
  console.log('✓', out);
}
