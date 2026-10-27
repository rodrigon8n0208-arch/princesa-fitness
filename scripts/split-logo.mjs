// Separa o SVG vetorizado do logo em: símbolo "PF" e wordmark "PRINCESA FITNESS".
// Gera src/data/logo-paths.ts (para uso inline) + public/favicon.svg.
import { readFileSync, writeFileSync } from 'node:fs';

const svg = readFileSync('public/images/brand/logo-princesa-fitness.svg', 'utf8');
const [white, red] = [...svg.matchAll(/ d="([^"]+)"/g)].map((m) => m[1]);

// Cada subpath começa com "M". O símbolo fica à esquerda: classifica pelo ponto MAIS À ESQUERDA
// (a barra de cima do "F" avança além de x=830, mas começa bem antes do texto, que inicia em ~860).
const SPLIT_X = 830;
const points = (s) => [...s.matchAll(/(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)/g)].map((m) => [+m[1], +m[2]]);
const symbolBox = { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity };
function split(d) {
  const subs = d.split(/(?=M )/).map((s) => s.trim()).filter(Boolean);
  const symbol = [], word = [];
  for (const s of subs) {
    const pts = points(s);
    const isSymbol = Math.min(...pts.map((p) => p[0])) < SPLIT_X;
    (isSymbol ? symbol : word).push(s);
    if (isSymbol)
      for (const [x, y] of pts) {
        symbolBox.x0 = Math.min(symbolBox.x0, x);
        symbolBox.y0 = Math.min(symbolBox.y0, y);
        symbolBox.x1 = Math.max(symbolBox.x1, x);
        symbolBox.y1 = Math.max(symbolBox.y1, y);
      }
  }
  return { symbol: symbol.join(' '), word: word.join(' ') };
}
// Reduz casas decimais para diminuir o peso
const slim = (d) => d.replace(/(\d+\.\d)\d+/g, '$1');

const w = split(white), r = split(red);
const paths = {
  symbolWhite: slim(w.symbol),
  symbolRed: slim(r.symbol),
  wordWhite: slim(w.word),
  wordRed: slim(r.word),
};

// Enquadramento do símbolo = caixa real dos contornos + margem
const pad = 12;
const symbolViewBox = [
  symbolBox.x0 - pad,
  symbolBox.y0 - pad,
  symbolBox.x1 - symbolBox.x0 + pad * 2,
  symbolBox.y1 - symbolBox.y0 + pad * 2,
].map((n) => Math.round(n)).join(' ');

writeFileSync(
  'src/data/logo-paths.ts',
  `// Gerado por scripts/split-logo.mjs a partir da vetorização [VALIDAR LOGO VETORIZADO]\n` +
    `export const LOGO = {\n  viewBox: '0 0 2070 600',\n  symbolViewBox: '${symbolViewBox}',\n` +
    Object.entries(paths).map(([k, v]) => `  ${k}: '${v}',`).join('\n') +
    `\n} as const;\n`
);

// Favicon: círculo preto centrado no símbolo, com folga de 18%
const cx = Math.round((symbolBox.x0 + symbolBox.x1) / 2);
const cy = Math.round((symbolBox.y0 + symbolBox.y1) / 2);
const radius = Math.round((Math.max(symbolBox.x1 - symbolBox.x0, symbolBox.y1 - symbolBox.y0) / 2) * 1.18);
writeFileSync(
  'public/favicon.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${cx - radius} ${cy - radius} ${radius * 2} ${radius * 2}">` +
    `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="#0A0A0B"/>` +
    `<path fill="#FFFFFF" fill-rule="evenodd" d="${paths.symbolWhite}"/>` +
    `<path fill="#C41E24" fill-rule="evenodd" d="${paths.symbolRed}"/></svg>\n`
);
console.log('ok', Object.fromEntries(Object.entries(paths).map(([k, v]) => [k, v.length])));
