// Gera public/og-image.jpg (1200×630): foto dos halteres escurecida + brilho vermelho + logo + slogan.
// Rode de novo quando houver fotos melhores: npm run og
import sharp from 'sharp';
import { readFileSync, readdirSync } from 'node:fs';

const W = 1200;
const H = 630;

// Usa a imagem nova do hero (src/assets/img/site/hero.*) se existir; senão, a provisória.
const custom = readdirSync('src/assets/img/site').find((f) => /^hero\.(jpe?g|png|webp|avif)$/i.test(f));
const source = custom ? `src/assets/img/site/${custom}` : 'src/assets/img/estrutura-halteres.jpg';
console.log('fonte:', source);

const photo = await sharp(source)
  .resize(W, H, { fit: 'cover', position: custom ? 'centre' : 'right' })
  .modulate({ brightness: 0.75 })
  .toBuffer();

const overlay = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="fade" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#0A0A0B" stop-opacity="0.96"/>
      <stop offset="0.55" stop-color="#0A0A0B" stop-opacity="0.78"/>
      <stop offset="1" stop-color="#0A0A0B" stop-opacity="0.2"/>
    </linearGradient>
    <radialGradient id="glow" cx="0" cy="0" r="0.9">
      <stop offset="0" stop-color="#C41E24" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#C41E24" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#fade)"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <g font-family="Arial Black, Arial, sans-serif" fill="#FFFFFF">
    <text x="80" y="380" font-size="52" font-weight="300" letter-spacing="2">SUA SEGUNDA</text>
    <rect x="72" y="400" width="212" height="72" fill="#C41E24"/>
    <text x="84" y="458" font-size="60" font-weight="900">CASA</text>
    <text x="320" y="458" font-size="60" font-weight="900">É AQUI.</text>
    <text x="80" y="540" font-size="24" fill="#D8D8DC" letter-spacing="1.5">Centro · Princesa Isabel - PB</text>
  </g>
</svg>`);

const logoSvg = readFileSync('public/images/brand/logo-princesa-fitness.svg');
const logo = await sharp(logoSvg, { density: 300 }).resize({ width: 520 }).png().toBuffer();

await sharp(photo)
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logo, top: 70, left: 72 },
  ])
  .jpeg({ quality: 86 })
  .toFile('public/og-image.jpg');

console.log('✓ public/og-image.jpg');
