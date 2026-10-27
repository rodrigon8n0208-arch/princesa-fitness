// Imagens do site por "slot". Para trocar uma imagem, coloque o arquivo em
// src/assets/img/site/ com o nome do slot (ex.: hero.jpg, modalidade-danca.png).
// Extensões aceitas: jpg, jpeg, png, webp, avif. Prompts de cada slot: PROMPTS-IMAGENS.md
// Enquanto o arquivo não existir, o site usa a imagem provisória (recorte do Instagram)
// ou, nas aulas, o card gráfico vermelho.
import type { ImageMetadata } from 'astro';

type Mod = { default: ImageMetadata };

const custom = import.meta.glob<Mod>('../assets/img/site/*.{jpg,jpeg,png,webp,avif}', { eager: true });
const provisional = import.meta.glob<Mod>('../assets/img/*.jpg', { eager: true });

const basename = (path: string) => path.split('/').pop()!.replace(/\.[^.]+$/, '');

export type Slot = {
  image: ImageMetadata | null;
  /** true quando é a imagem nova enviada para o slot */
  isCustom: boolean;
};

/** Larguras do srcset limitadas ao tamanho real da imagem (nunca amplia). */
export function fitWidths(widths: number[], image: ImageMetadata) {
  const fit = widths.filter((w) => w <= image.width);
  return fit.length ? fit : [image.width];
}

export function slot(name: string, fallback?: string): Slot {
  const hit = Object.entries(custom).find(([path]) => basename(path) === name);
  if (hit) return { image: hit[1].default, isCustom: true };
  const prov = fallback ? provisional[`../assets/img/${fallback}.jpg`]?.default : undefined;
  return { image: prov ?? null, isCustom: false };
}
