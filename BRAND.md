# BRAND.md — Academia Princesa Fitness

> Levantamento feito em 27/10/2026 a partir do perfil público
> [@academiaprincesafitness](https://www.instagram.com/academiaprincesafitness/):
> bio, 12 posts públicos mais recentes (incluindo os 3 fixados) e suas legendas.
> Os **destaques (stories fixados) exigem login** e não foram acessados.

---

## 1. Dados confirmados no Instagram

| Item | Valor | Fonte |
|---|---|---|
| Nome | Academia Princesa Fitness ("Princesa Fitness" nas artes) | bio |
| Endereço | **Rua Belarmino Maia, 121 — Centro, Princesa Isabel – PB** | artes de planos e horários + legenda |
| CEP | [CONFIRMAR] | — |
| WhatsApp | link `wa.me/message/ZNTR2VL2UPVTD1` (número em si não aparece) | bio |
| Horário | Seg a Sex 5h–22h · Sábado 7h–17h · Domingo 8h–13h | post fixado "Horários de funcionamento" |
| Aulas coletivas | Seg: **Dança** · Ter: **Step** · Qua: **Jump**, nos horários **06h00 e 18h40** | post fixado "Aulas coletivas" |
| Planos | Individual, Família (Casal / Casal + 1 filho) e Premium, com preços (ver §8) | post fixado "Planos" (carrossel de 2 artes) |
| Bio | "💪🏼 Transformando vidas através do treino. 🏋🏻‍♀️ Saúde, força e evolução todos os dias. 📍Princesa Isabel-PB \| Venha fazer parte do nosso time 👇🏻" | bio |
| Destaques | "Parceiros", "Localização", "Construção" | perfil (conteúdo não acessível sem login) |

⚠️ **Divergências com o briefing:**
- O briefing citava "Rua João Batista dos Santos, 288". O Instagram mostra **Rua Belarmino Maia, 121, Centro**. Vou usar o do Instagram, salvo orientação contrária.
- **Wellhub/Gympass, TotalPass e "5 estrelas"** não aparecem em nenhum post público. Podem estar no destaque "Parceiros", mas só consigo ver com login. Ficam como [CONFIRMAR] e **o selo "★ 5 estrelas" do hero fica desligado até confirmação**.

---

## 2. Logo

**Desenho:** monograma **"PF"** em itálico agressivo (inclinação ≈ 12–14°). O "P" é branco e grosso, com o pé cortado em diagonal. O "F" é vermelho, entrelaçado sob o P, com as barras cortadas em paralelogramo, como "riscos de velocidade". À direita, o wordmark em duas linhas: **PRINCESA** (branco) e **FITNESS** (vermelho), numa fonte techno/quadrada itálica com cantos arredondados. É um desenho próprio, não é fonte do Google.

**Versões encontradas:**
- Horizontal (símbolo + wordmark): versão principal, sempre sobre fundo escuro.
- Empilhada (símbolo em cima, wordmark embaixo): foto de perfil, em círculo preto.
- Símbolo "PF" sozinho: letreiro 3D iluminado na parede da academia e camisetas da equipe.

**Arquivos:**

| Arquivo | O que é |
|---|---|
| `source-assets/instagram/logo-perfil-original-150px.jpg` | foto de perfil original (só 150 px, insuficiente para web) |
| `public/images/brand/logo-princesa-fitness.svg` | **vetorização** da versão horizontal, para fundo escuro (P e "PRINCESA" brancos) |
| `public/images/brand/logo-princesa-fitness-dark.svg` | mesma vetorização, para fundo claro (P e "PRINCESA" em `#0A0A0B`) |

**Precisa ser vetorizado?** Sim. Não existe versão vetorial pública e o maior logo disponível tem ~330 px de largura (recortado da arte do Plano Premium). Fiz a vetorização por traçado automático (potrace a 6x), **sem redesenhar**.

**[VALIDAR LOGO VETORIZADO]** — o resultado está fiel no geral, mas:
- a borda esquerda/inferior da haste do **"F" vermelho** saiu levemente irregular (o fundo vermelho da arte vazou no recorte);
- os cantos do wordmark estão um pouco mais "moles" que o original.

👉 **O ideal é pedir ao designer o arquivo original (.AI, .SVG, .PDF ou .EPS).** Se não houver, eu limpo o "F" à mão com base nas proporções do letreiro 3D.

---

## 3. Paleta

Cores medidas pela mediana dos pixels das artes oficiais (logo, faixas e cards). As marcadas com *derivada* são variações que criei a partir das medidas.

| Token | Hex | Papel | Origem |
|---|---|---|---|
| `--pf-red` | **`#C41E24`** | **Principal.** Logo "FITNESS"/"F", faixas atrás de palavras, botões, CTA | medido (logo e faixas: `#BB1C1E`–`#C42126`) |
| `--pf-red-hot` | `#E3262B` | Destaque: hover, brilho do gradiente, barra de progresso | *derivada* (topo iluminado dos cards vermelhos) |
| `--pf-red-deep` | `#7A0B0B` | Fim de gradiente, sombras vermelhas, vinheta | medido (`#690505`–`#B60D06` nos cards) |
| `--pf-black` | **`#0A0A0B`** | **Fundo principal** do site | medido (`#010101`–`#050304`), levemente erguido |
| `--pf-surface` | `#141416` | Fundo de seções alternadas | *derivada* |
| `--pf-card` | `#1D1D20` | Cards escuros (planos Família, pílulas de horário) | medido nas pílulas |
| `--pf-line` | `#2C2C30` | Bordas e divisórias | *derivada* |
| `--pf-white` | `#FFFFFF` | Texto principal, "P" e "PRINCESA" do logo | medido |
| `--pf-muted` | `#A8A8AF` | Texto secundário | *derivada* |
| `--pf-gold` | `#F2B33D` | Uso **mínimo**: a fita de LED âmbar do teto da academia e o 👑 das legendas. Detalhes, nunca cor de marca | *derivada* das fotos |

**Contraste (AA):**
- Branco sobre `#C41E24` → **5,9:1** ✅ (botões e faixas com texto branco OK)
- `#C41E24` sobre `#0A0A0B` → ~3,4:1. Serve só para **texto grande** (≥ 24 px ou ≥ 19 px bold) e elementos gráficos.
- `#E3262B` sobre `#0A0A0B` → ~4,3:1, também só para texto grande. **Texto pequeno nunca vai em vermelho sobre preto**: fica branco, com o vermelho na faixa, no ícone ou no sublinhado.
- `#A8A8AF` sobre `#0A0A0B` → ~8,4:1 ✅

**Proporção visual:** ~70% preto/cinza-escuro, ~20% branco, ~10% vermelho, com o vermelho concentrado em pontos de ação.

---

## 4. Tipografia

As artes usam uma **sans geométrica estendida (larga)** em CAIXA ALTA, sempre com **contraste de peso na mesma frase**: "HORÁRIOS DE" fino + "**FUNCIONAMENTO**" pesado; "NOSSO PLANO" fino + "**PREMIUM**" pesado. Os textos de apoio usam uma sans regular, e o endereço aparece numa sans larga e espaçada.

Proposta (Google Fonts):

| Uso | Fonte | Por quê |
|---|---|---|
| **Títulos / display** | **Archivo**, eixo de largura em **125 (Expanded)**, pesos 300 e 800/900 | Reproduz o par "fino largo + pesado largo" das artes com um único arquivo variável |
| Texto corrido | **Archivo** em largura normal (100), pesos 400/500/600 | Mesma família, leitura confortável no celular |
| Rótulos pequenos (endereço, "SEG À SEX", preço) | Archivo Expanded 500, `letter-spacing: .12em` | Ecoa o "C O N T R A T A R" espaçado dos botões |

O wordmark do logo **não** vai ser imitado com fonte: ele entra sempre como SVG.

---

## 5. Tom de voz

Pelas legendas: **acolhedor + motivacional, com foco em saúde e longevidade** (não só estética). Energia sem agressividade.

- Fala de pessoa para pessoa ("você", "a gente"), frases curtas, uma ideia por frase.
- Valoriza **acolhimento e acompanhamento**: *"Todo mundo já foi iniciante… aqui você é acolhido, acompanhado e incentivado."*
- Treino como **saúde, autonomia e qualidade de vida**: *"Treinar não é apenas sobre como você quer se ver hoje, mas sobre como você quer viver amanhã."*
- Treino **individualizado**: *"Seu treino não é igual ao de todo mundo."*
- Bordões da marca: **"Sua segunda casa é aqui!"**, **"Muito além da musculação"**, **"Transformando vidas através do treino"**, **"Saúde, força e evolução todos os dias"**.
- Emojis recorrentes: ♥️ 👑 💪🏼. A **coroa** é o símbolo afetivo do nome "Princesa" (que vem da cidade, Princesa Isabel).
- Público **misto**: equipe com professores homens e mulheres, alunas e alunos.

⚠️ Por isso **não recomendo** títulos como *"Treine como uma princesa"*: soam só femininos e o nome vem da cidade. A coroa pode aparecer como detalhe gráfico discreto.

### 3 opções de título para o hero

1. **"SUA SEGUNDA CASA É AQUI."**
   Sub: *Musculação, aulas coletivas e acompanhamento de verdade no Centro de Princesa Isabel. Saúde, força e evolução todos os dias.*
   → usa o bordão que a marca já assina nas legendas. **(Minha recomendação)**
2. **"MUITO ALÉM DA MUSCULAÇÃO."**
   Sub: *Estrutura completa, dança, step e jump, e um treino pensado para o seu objetivo.*
   → frase de post fixado; destaca o diferencial das aulas.
3. **"TREINE HOJE. VIVA MELHOR AMANHÃ."**
   Sub: *Na Princesa Fitness seu treino não é igual ao de todo mundo. É pensado para você.*
   → adaptação da legenda sobre longevidade; mais aspiracional.

Seguindo o padrão das artes, a palavra de impacto vai em peso 900 e o resto em 300, com a palavra-chave dentro de uma **faixa vermelha** (ex.: SUA SEGUNDA **[CASA]** É AQUI).

---

## 6. Estilo visual das artes (o que vou levar para o site)

1. **Fundo preto profundo** com **luz vermelha vindo de um canto** (gradiente radial `#C41E24 → transparente`, geralmente no topo-esquerdo ou na base).
2. **Faixa vermelha atrás de palavras-chave** ("**FUNCIONAMENTO**", "**AULAS** COLETIVAS", "**TREINO**"): retângulo vermelho sólido, texto branco pesado. É a assinatura gráfica mais forte da marca e vai virar componente (`<Highlight>`), animado com a faixa "varrendo" da esquerda para a direita.
3. **Palavra gigante "fantasma" ao fundo**: "PLANOS"/"PLANO" enorme, vermelho escuro com baixa opacidade, atrás da foto. Vou usar como texto de fundo com parallax em cada seção.
4. **Contraste fino/pesado** na mesma linha de título.
5. **Fotos escuras com vinheta e leve tom vermelho**, pessoas recortadas em primeiro plano.
6. **Cards arredondados** (raio ~24 px): o destaque em vermelho sólido, os secundários em grafite translúcido, botão preto **"C O N T R A T A R"** com letras espaçadas.
7. **Pílulas** grafite para horários ("Seg à Sex | 5h às 22h") com divisória vertical.
8. **Ícone de check vermelho** em listas e **pin vermelho** antes do endereço, no rodapé de cada arte.
9. **Diagonais e velocidade**: o itálico do logo (~13°) e os cortes em paralelogramo do "F". Vou reutilizar esse ângulo em faixas, no marquee inclinado, nas transições de cortina e nos separadores de seção.
10. **A própria academia**: teto preto com **fitas de LED lineares** (brancas e âmbar), **painéis de luz vermelhos verticais** nas paredes, piso emborrachado preto com faixas vermelhas, máquinas Movement/Aria pretas. Isso inspira linhas de luz animadas (traços finos percorrendo seções) como motivo de movimento.

**Animação, coerente com o tom:** rápida e firme (`power3`/`expo`), cortes diagonais, faixas vermelhas varrendo. Nada de bounce ou elástico. O acolhimento aparece na copy, não em animação "fofa".

---

## 7. Imagens baixadas (`source-assets/instagram/`, fora do build para não publicar fotos sem autorização)

| Arquivo | Resolução | Tem pessoas? | Uso sugerido |
|---|---|---|---|
| `arte-horarios-funcionamento-halteres.jpg` | 1088×1344 | Não | Recortar a parte de cima (halteres PF), útil como foto de estrutura |
| `estrutura-cardio-esteiras-com-texto.jpg` | 1080×1350 | Não | Melhor foto de estrutura, **mas tem texto sobreposto** no centro |
| `arte-planos-individual-familia.jpg` | 1080×1350 | Sim (rosto em destaque) | Referência de preços, não usar no site |
| `arte-plano-premium.jpg` | 1080×1350 | Sim (rosto em destaque) | Referência de preços / fonte do logo |
| `arte-aulas-coletivas-turma.jpg` | 1088×1344 | Sim (turma, ~15 rostos) | Modalidades, **pendente de autorização** |
| `arte-dica-treino.jpg` | 1088×1344 | Parcial (braço) | Fundo/textura |
| `estrutura-musculacao-painel-led-equipe.jpg` | 360×640 ⚠️ | Sim (2 da equipe) | Mostra painéis LED vermelhos e logo na parede |
| `estrutura-musculacao-teto-led-equipe.jpg` | 360×640 ⚠️ | Sim (2) | Teto com LED |
| `estrutura-corredor-painel-led-equipe.jpg` | 360×640 ⚠️ | Sim (2) | Corredor com faixas vermelhas no piso |
| `estrutura-maquina-peitoral-aluna.jpg` | 360×640 ⚠️ | Sim (1) | Máquina + mezanino |
| `ambiente-logo-3d-parede-professor.jpg` | 360×640 ⚠️ | Sim (1) | Letreiro 3D do logo |
| `ambiente-recepcao-escada.jpg` | 360×640 ⚠️ | Sim (1) | Recepção com escada e luminárias de corda |
| `treino-elevacao-lateral-professor.jpg` | 360×640 ⚠️ | Sim (1) | Equipe/treino |
| `destaque-parceiros-fachada.jpg` | 150×150 ⚠️ | Sim | Só referência |
| `logo-perfil-original-150px.jpg` | 150×150 | — | Referência do logo |

As originais ficam em `source-assets/instagram-raw/`. Os recortes usados no site são gerados em `src/assets/img/` por `npm run images`.

### ⚠️ Problema principal: faltam fotos de estrutura limpas
Quase todas as imagens públicas têm **pessoas em destaque** ou **texto sobreposto**, e as dos Reels são capas de 360×640 (baixa resolução). Para um hero e uma galeria premium, preciso de **8–15 fotos da estrutura sem pessoas (ou de costas), sem texto, em alta resolução**: sala de musculação com os painéis LED vermelhos, área de cardio, letreiro 3D do logo, recepção, sala de aulas, halteres, fachada. Um vídeo curto da academia vazia (5–10 s, horizontal) seria ideal para o fundo do hero.

Enquanto isso, construo com **placeholders escuros no estilo da marca** e com as 2 imagens sem pessoas.

---

## 8. Planos (conforme a arte de 11/08/2026)

| Plano | Mensal | Trimestral | Semestral | Anual |
|---|---|---|---|---|
| **Individual** (destaque na arte) | R$ 129,90 | R$ 359,90 | R$ 659,90 | R$ 1.198,90 |
| **Família — Casal** | R$ 249,90 | R$ 699,90 | R$ 1.289,90 | R$ 2.250,90 |
| **Família — Casal + 1 filho** | R$ 359,90 | R$ 1.029,90 | R$ 1.919,90 | R$ 3.319,90 |
| **Premium** (mensalidade + step + dança e jump + avaliação) | R$ 189,90 | R$ 399,90 | R$ 699,90 | R$ 1.249,90 |

[CONFIRMAR] se os valores continuam válidos e se trimestral/semestral/anual são o **valor total do período** (parece que sim).

