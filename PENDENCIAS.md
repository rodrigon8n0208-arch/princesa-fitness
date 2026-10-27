# PENDÊNCIAS — Academia Princesa Fitness

Versão atual montada **só com informações públicas do Instagram** (27/10/2026), antes do contato
com a academia. Tudo abaixo deve ser confirmado/enviado pelo cliente. Onde mexer: ver README.

## 1. Bloqueantes para publicar
- [ ] **Número do WhatsApp** (DDI+DDD+número). Hoje os botões usam o link curto da bio
      (`wa.me/message/ZNTR2VL2UPVTD1`), que **ignora a mensagem pré-preenchida** (nome do plano,
      modalidade etc.). Com o número em `SITE.whatsapp.number`, as mensagens passam a funcionar.
- [ ] **Domínio** do site (`SITE_URL`). Hoje está como `academiaprincesafitness.com.br` (provisório).
- [ ] **Autorização** do cliente para usar as artes/fotos do Instagram no site.

## 2. Material para melhorar o visual
- [ ] **Logo original vetorial** (.AI/.SVG/.PDF/.EPS). O site usa uma vetorização própria
      [VALIDAR LOGO VETORIZADO] — borda do "F" vermelho levemente irregular.
- [x] **13 imagens do site** geradas e otimizadas (37,4 MB → 2,7 MB em WebP).
- [ ] **`modalidade-cardio`**: o arquivo enviado estava incompleto (download cortado). Hoje o card usa
      um recorte provisório da `galeria-04-cardio`. Salvar de novo e rodar `npm run otimizar`.
- [ ] **Imagens geradas por IA são provisórias**: ao fechar com a academia, o ideal é trocar por fotos
      reais da estrutura e das aulas (com os mesmos nomes de arquivo), para o site não mostrar um
      ambiente que não é o deles.
- [ ] (Opcional) Vídeo curto da academia (5–10 s) para o fundo do hero.

## 3. Conteúdo a confirmar
- [ ] **Planos e preços** (arte de 11/08/2026) ainda valem? Trimestral/semestral/anual são o total do
      período? (o site calcula "equivale a R$ X/mês" a partir disso)
- [ ] Benefícios listados nos cards foram **deduzidos** (ex.: "Musculação e cardio", "Acesso 7 dias por
      semana" nos planos Individual e Família). Confirmar o que cada plano inclui de fato.
- [ ] Selo do card Premium: usei **"Mais completo"** (fato: inclui aulas + avaliação). Se houver um
      "mais vendido" real, trocar.
- [ ] **Aulas coletivas**: só Dança (seg), Step (ter) e Jump (qua), às 06h00 e 18h40? Há outras?
- [ ] **CEP**: o Google Maps mostra 58755-000 (CEP geral da cidade). Confirmar e preencher em
      `SITE.address.postalCode` (entra no JSON-LD).
- [ ] Parceria **Wellhub/Gympass** e/ou **TotalPass**? (destaque "Parceiros" exige login no Instagram)
- [ ] **Avaliação no Google** (nota e nº de avaliações). Sem confirmação, **o selo "5 estrelas" foi
      removido** do hero e não há `aggregateRating` no JSON-LD.
- [ ] **Aula experimental grátis** existe? Se sim, voltar os CTAs "Agendar aula experimental" e o
      título final "Sua primeira aula é por nossa conta". Hoje: "Quero treinar aqui" / "Agendar visita".
- [ ] Destaque **"Construção"** no Instagram: obra/ampliação/nova unidade? Vale mencionar?

## 4. Seções removidas por falta de dados (voltam quando houver conteúdo)
- [ ] **Professores/equipe**: nomes, especialidades, CREF e fotos autorizadas. Nas legendas aparecem
      Alan Emerson (Educação Física), Dra. Anatany Henriques (endocrinologista, parceira) e
      Eng. Fernanda Raquel (segurança do trabalho).
- [ ] **Depoimentos**: 3–4 depoimentos reais (Google/Instagram) com permissão.
- [ ] **Números reais** (alunos, equipamentos, anos de academia). Hoje a seção usa só fatos
      confirmados: 7 dias/semana, 17 h/dia (seg–sex), 3 aulas coletivas, 4 planos.
- [ ] **FAQ** — perguntas que ficaram de fora por falta de resposta: precisa de exame médico?
      tem estacionamento? aceita Wellhub/TotalPass? tem aula experimental?

## 5. Imagens com pessoas — validar autorização
Usadas **no site** (feed do Instagram, como miniaturas dos posts reais):
| Arquivo | Pessoas |
|---|---|
| `feed-planos.jpg` | 1 mulher, rosto em destaque |
| `feed-premium.jpg` | 1 homem (equipe?), rosto em destaque |
| `feed-elevacao-lateral.jpg` | 1 homem (professor) |

Baixadas mas **não usadas** (`source-assets/instagram/`, fora do build): `arte-aulas-coletivas-turma.jpg` (~15 alunas),
`estrutura-musculacao-painel-led-equipe.jpg`, `estrutura-musculacao-teto-led-equipe.jpg`,
`estrutura-corredor-painel-led-equipe.jpg`, `estrutura-maquina-peitoral-aluna.jpg`,
`ambiente-logo-3d-parede-professor.jpg`, `ambiente-recepcao-escada.jpg`,
`treino-elevacao-lateral-professor.jpg`, `destaque-parceiros-fachada.jpg`.
Os recortes de estrutura usados na galeria foram feitos **sem as pessoas**.

