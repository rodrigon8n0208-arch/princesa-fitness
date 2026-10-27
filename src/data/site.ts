// Conteúdo central do site. Tudo que vem do Instagram está confirmado;
// o que está entre [COLCHETES] ou marcado como pendente está em PENDENCIAS.md.

export const SITE = {
  name: 'Academia Princesa Fitness',
  shortName: 'Princesa Fitness',
  tagline: 'Sua segunda casa é aqui.',
  description:
    'Academia Princesa Fitness em Princesa Isabel - PB: musculação, cardio e aulas de dança, step e jump. Aberta 7 dias por semana no Centro. Fale com a gente no WhatsApp.',
  city: 'Princesa Isabel',
  state: 'PB',
  address: {
    street: 'Rua Belarmino Maia, 121',
    district: 'Centro',
    city: 'Princesa Isabel',
    state: 'PB',
    postalCode: '', // [CONFIRMAR CEP]
    full: 'Rua Belarmino Maia, 121 — Centro, Princesa Isabel - PB',
  },
  instagram: {
    handle: '@academiaprincesafitness',
    url: 'https://www.instagram.com/academiaprincesafitness/',
  },
  whatsapp: {
    // [PREENCHER] número com DDI+DDD, só dígitos (ex.: '5583999999999').
    // Enquanto vazio, usa o link curto da bio (que não aceita mensagem pré-preenchida).
    number: '',
    fallbackUrl: 'https://wa.me/message/ZNTR2VL2UPVTD1',
    defaultMessage: 'Olá! Vim pelo site e quero saber mais sobre a Princesa Fitness.',
  },
};

export function whatsappUrl(message: string = SITE.whatsapp.defaultMessage) {
  if (!SITE.whatsapp.number) return SITE.whatsapp.fallbackUrl;
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

const mapsQuery = encodeURIComponent(`${SITE.address.street}, ${SITE.address.district}, ${SITE.address.city} - ${SITE.address.state}`);
export const MAPS = {
  embed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
};

export const NAV = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Planos', href: '#planos' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Contato', href: '#contato' },
];

// Horário de funcionamento (post fixado "Horários de funcionamento").
// Índice = dia da semana (0 = domingo). Horas em formato decimal.
export const HOURS: { day: string; short: string; open: number; close: number }[] = [
  { day: 'Domingo', short: 'Dom', open: 8, close: 13 },
  { day: 'Segunda', short: 'Seg', open: 5, close: 22 },
  { day: 'Terça', short: 'Ter', open: 5, close: 22 },
  { day: 'Quarta', short: 'Qua', open: 5, close: 22 },
  { day: 'Quinta', short: 'Qui', open: 5, close: 22 },
  { day: 'Sexta', short: 'Sex', open: 5, close: 22 },
  { day: 'Sábado', short: 'Sáb', open: 7, close: 17 },
];

export const HOURS_SUMMARY = [
  { label: 'Seg a Sex', value: '5h às 22h' },
  { label: 'Sábado', value: '7h às 17h' },
  { label: 'Domingo', value: '8h às 13h' },
];

export const TIMEZONE = 'America/Fortaleza'; // Paraíba: UTC-3, sem horário de verão

// Aulas coletivas (post fixado "Aulas coletivas"). Índice = dia da semana.
export const CLASS_TIMES = ['06h00', '18h40'];
export const CLASSES_BY_DAY: Record<number, string> = {
  1: 'Dança',
  2: 'Step',
  3: 'Jump',
};

export const MODALIDADES = [
  {
    id: 'musculacao',
    name: 'Musculação',
    kicker: 'Todos os dias',
    text: 'Máquinas de qualidade e pesos livres para ganhar força, disposição e autonomia, com um treino pensado para o seu objetivo.',
    // slot = nome do arquivo novo em src/assets/img/site/; fallback = imagem provisória
    slot: 'modalidade-musculacao',
    fallback: 'estrutura-halteres',
    alt: 'Pessoa treinando musculação com halteres na Princesa Fitness',
    fallbackAlt: 'Halteres com o logo PF enfileirados no suporte',
    premium: false,
  },
  {
    id: 'cardio',
    name: 'Cardio',
    kicker: 'Todos os dias',
    text: 'Esteiras e simuladores de escada para melhorar o condicionamento e a resistência, inclusive para quem corre.',
    slot: 'modalidade-cardio',
    fallback: 'estrutura-cardio',
    alt: 'Fileira de esteiras na área de cardio da Princesa Fitness',
    fallbackAlt: 'Esteiras e simuladores de escada sob o teto com fitas de LED',
    premium: false,
  },
  {
    id: 'danca',
    name: 'Dança',
    kicker: 'Segundas · 06h00 e 18h40',
    text: 'Energia, diversão e movimento. Saia da rotina e treine no ritmo da música.',
    slot: 'modalidade-danca',
    fallback: undefined,
    alt: 'Aula de dança em grupo na Princesa Fitness',
    fallbackAlt: '',
    premium: true,
  },
  {
    id: 'step',
    name: 'Step',
    kicker: 'Terças · 06h00 e 18h40',
    text: 'Aula aeróbica na plataforma para trabalhar condicionamento, ritmo e coordenação.',
    slot: 'modalidade-step',
    fallback: undefined,
    alt: 'Aula de step com plataformas na Princesa Fitness',
    fallbackAlt: '',
    premium: true,
  },
  {
    id: 'jump',
    name: 'Jump',
    kicker: 'Quartas · 06h00 e 18h40',
    text: 'Treino no mini trampolim, cheio de energia, para acelerar o coração e se divertir.',
    slot: 'modalidade-jump',
    fallback: undefined,
    alt: 'Aula de jump com mini trampolins na Princesa Fitness',
    fallbackAlt: '',
    premium: true,
  },
] as const;

export type Period = 'mensal' | 'trimestral' | 'semestral' | 'anual';
export const PERIODS: { id: Period; label: string; months: number; suffix: string }[] = [
  { id: 'mensal', label: 'Mensal', months: 1, suffix: '/mês' },
  { id: 'trimestral', label: 'Trimestral', months: 3, suffix: '/trimestre' },
  { id: 'semestral', label: 'Semestral', months: 6, suffix: '/semestre' },
  { id: 'anual', label: 'Anual', months: 12, suffix: '/ano' },
];

// Planos (arte de 11/08/2026). [CONFIRMAR] se os valores seguem válidos.
export const PLANS = [
  {
    id: 'individual',
    name: 'Individual',
    people: '1 pessoa',
    text: 'Musculação e cardio para você treinar no seu ritmo, todos os dias da semana.',
    benefits: ['Musculação', 'Cardio', 'Acesso 7 dias por semana'],
    prices: { mensal: 129.9, trimestral: 359.9, semestral: 659.9, anual: 1198.9 },
    featured: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    people: '1 pessoa',
    text: 'O plano mais completo: musculação, todas as aulas coletivas e avaliação.',
    benefits: ['Musculação e cardio', 'Aulas de Dança, Step e Jump', 'Avaliação'],
    prices: { mensal: 189.9, trimestral: 399.9, semestral: 699.9, anual: 1249.9 },
    featured: true,
  },
  {
    id: 'familia-casal',
    name: 'Família Casal',
    people: '2 pessoas',
    text: 'Ideal para disciplina, foco e resultados. Treinar junto é mais fácil.',
    benefits: ['Musculação e cardio', 'Para 2 pessoas', 'Acesso 7 dias por semana'],
    prices: { mensal: 249.9, trimestral: 699.9, semestral: 1289.9, anual: 2250.9 },
    featured: false,
  },
  {
    id: 'familia-casal-filho',
    name: 'Família Casal + 1 filho',
    people: '3 pessoas',
    text: 'Ideal para disciplina, foco e resultados. A família toda cuidando da saúde.',
    benefits: ['Musculação e cardio', 'Para 3 pessoas', 'Acesso 7 dias por semana'],
    prices: { mensal: 359.9, trimestral: 1029.9, semestral: 1919.9, anual: 3319.9 },
    featured: false,
  },
] as const;

export function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export const DIFERENCIAIS = [
  {
    title: 'Você é acolhido',
    text: 'Todo mundo já foi iniciante. Aqui você é acolhido, acompanhado e incentivado, e isso muda tudo.',
  },
  {
    title: 'Treino pensado para você',
    text: 'Seu treino não é igual ao de todo mundo: ele respeita suas necessidades, seus objetivos e o seu momento.',
  },
  {
    title: 'Estrutura de qualidade',
    text: 'Máquinas que oferecem mais conforto, segurança e eficiência, e uma equipe preparada para cuidar de você.',
  },
];

export const DESTAQUES = [
  { value: 7, suffix: '', label: 'dias por semana de portas abertas' },
  { value: 17, suffix: 'h', label: 'de funcionamento por dia, de segunda a sexta' },
  { value: 3, suffix: '', label: 'aulas coletivas: dança, step e jump' },
  { value: 4, suffix: '', label: 'opções de plano, inclusive para a família' },
];

export const FAQ = [
  {
    q: 'Quais são os horários de funcionamento?',
    a: 'De segunda a sexta, das 5h às 22h. Aos sábados, das 7h às 17h, e aos domingos, das 8h às 13h.',
  },
  {
    q: 'Quais aulas coletivas vocês oferecem?',
    a: 'Dança às segundas, Step às terças e Jump às quartas, sempre às 06h00 e às 18h40. As aulas estão incluídas no Plano Premium.',
  },
  {
    q: 'Sou iniciante. Vou conseguir acompanhar?',
    a: 'Vai, sim. Todo mundo já foi iniciante: aqui você conta com suporte e orientação para treinar de acordo com o seu objetivo e o seu momento.',
  },
  {
    q: 'Tem plano para casal ou família?',
    a: 'Tem. O Plano Família Casal atende 2 pessoas e o Plano Família Casal + 1 filho atende 3 pessoas, nas versões mensal, trimestral, semestral e anual.',
  },
  {
    q: 'Onde fica a academia?',
    a: 'Na Rua Belarmino Maia, 121, no Centro de Princesa Isabel - PB.',
  },
  {
    q: 'Como faço minha matrícula?',
    a: 'É só chamar a gente no WhatsApp. A equipe tira suas dúvidas e te ajuda a escolher o melhor plano.',
  },
];

// Posts reais do Instagram usados no "feed" (imagens em src/assets/img/feed-*.jpg)
export const FEED = [
  { image: 'feed-horarios', url: 'https://www.instagram.com/academiaprincesafitness/p/DewuL8SJXpS/', alt: 'Arte com os horários de funcionamento da Princesa Fitness sobre foto de halteres' },
  { image: 'feed-planos', url: 'https://www.instagram.com/academiaprincesafitness/p/Db6-730HCAU/', alt: 'Arte com os planos Individual e Família da Princesa Fitness' },
  { image: 'feed-premium', url: 'https://www.instagram.com/academiaprincesafitness/p/Db6-730HCAU/', alt: 'Arte do Plano Premium da Princesa Fitness' },
  { image: 'feed-dica-treino', url: 'https://www.instagram.com/academiaprincesafitness/p/Dd2T3KcNZNn/', alt: 'Post com dicas: coisas que atrapalham seu treino' },
  { image: 'feed-cardio', url: 'https://www.instagram.com/academiaprincesafitness/p/DdpNDPNHy-T/', alt: 'Área de cardio com esteiras e iluminação de LED no teto' },
  { image: 'feed-elevacao-lateral', url: 'https://www.instagram.com/academiaprincesafitness/reel/Ddl62EjB6JY/', alt: 'Vídeo com dica de execução da elevação lateral' },
];

export const MARQUEE_WORDS = ['Força', 'Foco', 'Disciplina', 'Saúde', 'Evolução', 'Resultado'];
