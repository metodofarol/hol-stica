const chakras = [
  {
    id: "coronario",
    name: "Coronário",
    color: "#8f62c7",
    top: "8%",
    represents: "Conexão espiritual, propósito, fé, sentido de vida e integração com o sutil.",
    associations:
      "Pode se associar a desconexão, falta de sentido, isolamento, confusão espiritual, exaustão mental, enxaquecas e alterações do sono.",
    lifeAreas: "Trabalho: propósito. Estudo: visão ampla. Amor/relações: conexão. Saúde geral: equilíbrio espiritual e mental.",
  },
  {
    id: "terceiro-olho",
    name: "Terceiro Olho",
    color: "#4057b8",
    top: "18%",
    represents: "Intuição, percepção, clareza mental, imaginação, discernimento e visão interior.",
    associations:
      "Pode se associar a excesso de pensamentos, dificuldade de foco, ansiedade mental, dores de cabeça, tensão ocular e confusão psíquica.",
    lifeAreas: "Trabalho: estratégia. Estudo: concentração. Amor/relações: percepção clara. Saúde geral: mente e sistema nervoso.",
  },
  {
    id: "laringeo",
    name: "Laríngeo",
    color: "#2c9ec7",
    top: "30%",
    represents: "Comunicação, expressão, verdade pessoal, escuta e capacidade de manifestar ideias.",
    associations:
      "Pode se associar a bloqueio de fala, medo de se posicionar, timidez, rigidez na comunicação, garganta, tireoide e região cervical.",
    lifeAreas: "Trabalho: expressão profissional. Estudo: comunicação. Amor/relações: diálogo. Saúde geral: garganta e pescoço.",
  },
  {
    id: "cardiaco",
    name: "Cardíaco",
    color: "#3ca96d",
    top: "42%",
    represents: "Amor, vínculo, compaixão, perdão, pertencimento e equilíbrio entre dar e receber.",
    associations:
      "Pode se associar a mágoas, tristeza, fechamento afetivo, dependência, solidão, peito, pulmões, circulação e imunidade.",
    lifeAreas: "Trabalho: cooperação. Estudo: motivação afetiva. Amor/relações: vínculos. Saúde geral: coração, respiração e imunidade.",
  },
  {
    id: "plexo-solar",
    name: "Plexo Solar",
    color: "#d7a61e",
    top: "54%",
    represents: "Autonomia, autoestima, poder pessoal, ação, decisão e digestão das experiências.",
    associations:
      "Pode se associar a insegurança, controle, raiva contida, baixa autoestima, estômago, fígado, pâncreas e sistema digestivo.",
    lifeAreas: "Trabalho: liderança. Estudo: disciplina. Amor/relações: limites pessoais. Saúde geral: digestão e energia de ação.",
  },
  {
    id: "sacral",
    name: "Sacral",
    color: "#db7b2d",
    top: "67%",
    represents: "Prazer, criatividade, sexualidade, fluidez emocional, fertilidade e movimento da vida.",
    associations:
      "Pode se associar a culpa, bloqueios afetivos, dependência emocional, compulsões, região pélvica, rins, bexiga e sistema reprodutor.",
    lifeAreas: "Trabalho: criatividade. Estudo: prazer em aprender. Amor/relações: intimidade. Saúde geral: vitalidade pélvica.",
  },
  {
    id: "basico",
    name: "Básico",
    color: "#b6403a",
    top: "80%",
    represents: "Segurança, presença, aterramento, sobrevivência, corpo físico, estabilidade e recursos materiais.",
    associations:
      "Pode se associar a medo, instabilidade, insegurança financeira, apatia, pernas, coluna, ossos, intestino e vitalidade física.",
    lifeAreas: "Trabalho: estabilidade. Estudo: constância. Amor/relações: segurança. Saúde geral: estrutura corporal e energia vital.",
  },
];

const fields = [
  { id: "emocional", label: "Emocional" },
  { id: "mental", label: "Mental" },
];

const limitTypes = [
  { id: "rigido", label: "Rígido" },
  { id: "solto", label: "Solto" },
];

const fieldInterpretations = {
  emocional:
    "O campo emocional organiza vínculos, afetos, sensação de acolhimento, resposta a perdas, abertura para intimidade e capacidade de reconhecer o que se sente sem se perder no outro.",
  mental:
    "O campo mental organiza crenças, padrões de pensamento, decisões, limites cognitivos, autonomia, clareza de identidade e a forma como a pessoa interpreta segurança, controle e pertencimento.",
};

const limitInterpretations = {
  rigido:
    "O limite rígido tende a aparecer como proteção excessiva: fechamento, controle, resistência à vulnerabilidade, defesa contra invasões e dificuldade de receber apoio ou flexibilizar posições.",
  solto:
    "O limite solto tende a aparecer como permeabilidade excessiva: dificuldade de dizer não, adaptação ao outro, absorção de estímulos, perda de referência própria e abertura maior do que o campo consegue sustentar.",
};

const causes = [
  {
    id: "emocional-rigido-medo-intimidade",
    field: "emocional",
    limit: "rigido",
    name: "Medo de intimidade",
    description:
      "A intimidade é percebida como ameaça, levando a pessoa a se proteger de vínculos profundos. Essa defesa pode nascer de experiências de invasão, julgamento ou exposição excessiva, bloqueando a troca emocional genuína.",
  },
  {
    id: "emocional-rigido-controle-emocional",
    field: "emocional",
    limit: "rigido",
    name: "Necessidade de manter o controle emocional",
    description:
      "A tentativa constante de não se desestabilizar gera contenção emocional. Sentir ou demonstrar emoções passa a parecer perigoso, o que favorece repressão, endurecimento e dificuldade de expressão afetiva.",
  },
  {
    id: "emocional-rigido-rejeicao-abandono",
    field: "emocional",
    limit: "rigido",
    name: "Rejeição ou abandono",
    description:
      "Experiências de rejeição ou abandono podem criar defesas contra a possibilidade de ser novamente descartado. O padrão aparece como desconfiança, resistência ao afeto e dificuldade de vínculo profundo.",
  },
  {
    id: "emocional-rigido-ressentimento",
    field: "emocional",
    limit: "rigido",
    name: "Ressentimento ou mágoas não liberadas",
    description:
      "Mágoas mantidas ativas deixam o campo emocional em alerta. Dores antigas podem ser projetadas em relações atuais, sustentando feridas não integradas e limitando a entrega emocional.",
  },
  {
    id: "emocional-rigido-traumas",
    field: "emocional",
    limit: "rigido",
    name: "Traumas de abuso, controle ou manipulação",
    description:
      "Violações anteriores de limites podem gerar blindagem emocional. A pessoa pode se isolar, permanecer hiperalerta ou parecer fria para evitar situações associadas à dor original.",
  },
  {
    id: "emocional-solto-carencia",
    field: "emocional",
    limit: "solto",
    name: "Carência afetiva",
    description:
      "A busca por afeto pode levar a aproximação rápida, entrega excessiva e baixa avaliação do vínculo. A pessoa espera que o outro sustente aquilo que ainda não consegue fortalecer internamente.",
  },
  {
    id: "emocional-solto-rejeicao-abandono",
    field: "emocional",
    limit: "solto",
    name: "Rejeição ou abandono",
    description:
      "Neste limite solto, a ferida conduz à abertura excessiva. Para evitar nova rejeição, a pessoa pode adaptar-se demais, tolerar relações prejudiciais e ignorar seus próprios limites.",
  },
  {
    id: "emocional-solto-dependencia",
    field: "emocional",
    limit: "solto",
    name: "Dependência emocional",
    description:
      "O equilíbrio, a autoestima ou a direção pessoal passam a depender fortemente do vínculo. Necessidades próprias ficam pouco reconhecidas enquanto o outro ganha centralidade.",
  },
  {
    id: "emocional-solto-autorregulacao",
    field: "emocional",
    limit: "solto",
    name: "Falta de autorregulação",
    description:
      "O campo emocional fica instável e permeável aos estímulos. A pessoa pode absorver intensamente o ambiente e ter dificuldade de distinguir emoções próprias das externas.",
  },
  {
    id: "emocional-solto-vinculos",
    field: "emocional",
    limit: "solto",
    name: "Vínculos abertos",
    description:
      "Relações antigas não encerradas mantêm conexão emocional com o passado. Memórias, padrões e afetos continuam influenciando o presente, mesmo quando a relação terminou.",
  },
  {
    id: "emocional-solto-culpa",
    field: "emocional",
    limit: "solto",
    name: "Culpa",
    description:
      "A culpa sustenta permissividade excessiva e sensação de dívida. A pessoa pode tolerar cobranças, relações ou ambientes prejudiciais, dificultando dizer não e proteger-se.",
  },
  {
    id: "mental-rigido-autossuficiencia",
    field: "mental",
    limit: "rigido",
    name: "Autossuficiência",
    description:
      "A crença de que precisa dar conta de tudo sozinha funciona como defesa contra troca, apoio e abertura. A autonomia aparente pode produzir isolamento e endurecimento nas relações.",
  },
  {
    id: "mental-rigido-controle-seguro",
    field: "mental",
    limit: "rigido",
    name: "Controle seguro",
    description:
      "A mente associa controle à proteção. Dominar, antecipar ou racionalizar situações parece evitar dor, rejeição ou caos, fazendo a segurança depender do controle em vez da confiança.",
  },
  {
    id: "mental-rigido-rigidez",
    field: "mental",
    limit: "rigido",
    name: "Rigidez",
    description:
      "Há dificuldade de flexibilizar ideias, considerar perspectivas diferentes ou mudar rotas. Crenças absolutas e padrões cristalizados transformam proteção em obstáculo à transformação.",
  },
  {
    id: "mental-rigido-perfeccionismo",
    field: "mental",
    limit: "rigido",
    name: "Perfeccionismo e autoexigência",
    description:
      "A mente estabelece padrões difíceis de alcançar para comportamento, desempenho e controle emocional. O erro vira ameaça à identidade, reduzindo descanso, flexibilidade e acolhimento.",
  },
  {
    id: "mental-rigido-forte-racional",
    field: "mental",
    limit: "rigido",
    name: "Forte e racional",
    description:
      "A identidade se organiza em torno de ser forte e não demonstrar fragilidade. Dores e afetos são processados pela lógica, criando distanciamento do sentir e da abertura emocional.",
  },
  {
    id: "mental-solto-agradadora",
    field: "mental",
    limit: "solto",
    name: "Agradadora",
    description:
      "A busca por aceitação sustenta a crença de que é preciso agradar para ser amada ou validada. Decisões passam a ser moldadas pelo outro e dizer não parece risco de rejeição.",
  },
  {
    id: "mental-solto-sem-identidade",
    field: "mental",
    limit: "solto",
    name: "Sem identidade",
    description:
      "Há dificuldade para reconhecer os próprios limites mentais. Ideias, desejos e opiniões se misturam aos do outro, reduzindo clareza sobre quem se é, o que se quer e o que se pensa.",
  },
  {
    id: "mental-solto-anulacao",
    field: "mental",
    limit: "solto",
    name: "Anulação",
    description:
      "A ausência de posicionamento pode ser justificada como empatia ou busca de paz. A pessoa silencia vontades, aceita o que não corresponde a si e perde força, autonomia e espaço próprio.",
  },
  {
    id: "mental-solto-submissao",
    field: "mental",
    limit: "solto",
    name: "Submissão",
    description:
      "Crenças sobre autoridade, hierarquia ou merecimento sustentam a ideia de obedecer, aceitar ou silenciar. O padrão dificulta impor limites diante de ordens e imposições.",
  },
  {
    id: "mental-solto-salvadora",
    field: "mental",
    limit: "solto",
    name: "Salvadora",
    description:
      "A pessoa assume responsabilidade por resolver ou consertar a vida dos outros. Cuidado e invasão dos próprios limites se confundem, enquanto necessidades pessoais são negligenciadas.",
  },
];

const graphGroups = [
  {
    name: "Harmonia",
    items: [
      "Desembaraçador",
      "Desembaraçador de Relacionamentos",
      "Desembaraçador Material",
      "Justiça Divina",
      "Vesica Piscis",
    ],
  },
  {
    name: "Limpeza",
    items: [
      "Corte Energético",
      "Cruz Ansata",
      "Guedes II",
      "Keiti",
      "Limpeza e Recarga",
      "SCAP",
      "Yoshua",
      "NENAS",
    ],
  },
  {
    name: "Proteção",
    items: ["9 Círculos", "Iavé", "Psicoprotetor", "Tetragrammaton"],
  },
  {
    name: "Psicoemocional",
    items: [
      "Abertura",
      "Aceitar e Soltar",
      "Amor ao Próximo",
      "Amor Universal",
      "Ativação da Vontade",
      "Confiar com Alegria",
      "Coragem",
      "Dependência e Vícios",
      "Mundo Interior",
      "Nervos",
      "Positividade",
      "Pureza Interior",
      "Desilusão Amorosa",
    ],
  },
  {
    name: "Vitalidade",
    items: [
      "ARCHINE",
      "Captador de Energia Solar",
      "Cruz de São Mauro",
      "Forças Universais",
      "Magnetismo Vital e Curativo",
      "Relaxar",
    ],
  },
];

const awakeningItems = [
  "Antahkarana",
  "Cosmos 2000",
  "Cruz Atlante",
  "Energia Divina",
  "Fiat Lux",
  "Gráfico dos Mestres",
  "Cubo de Metatron",
  "Prosperador",
  "Prosperidade Divina",
  "Selo Misterioso do Sol",
  "Sorte e Sucesso",
  "Vórtex",
];

const holisticTreatments = [
  "Aromaterapia",
  "Cromoterapia",
  "Fitoterapia",
  "Florais",
  "Litoterapia",
  "Mantras e orações",
  "Meditação budista (zazen ou daimoku)",
  "Reiki",
  "Tarô",
];

const graphImageBank = {
  unblocking:
    "https://http2.mlstatic.com/D_NQ_NP_902643-MLB89403331993_082025-O-grafico-radiestesia-32x32cm-c2mm-desembaracador-material.webp",
  relationship:
    "https://cdn.awsli.com.br/800x800/1382/1382320/produto/105605481/r12---desembara-ador-de-relacionamentos-7uf1hvbj6o.jpg",
  justice:
    "https://cdn.lojasonlinectt.pt/usercontent/portaldoequilibrio/media/images/38cdfad-173103-10fd313-194801-justica-divina.jpeg",
  vesica:
    "https://acdn-us.mitiendanube.com/stores/364/436/products/transparent-photoroom-2026-04-06t181847-326-b104a9b341580dab8517755103613770-640-0.webp",
  ansata:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Cruz_Ansata_PN_Tilguti_PVC_I.jpg?v=1733870069",
  scap: "https://http2.mlstatic.com/D_NQ_NP_808662-MLB72943461385_112023-O.webp",
  yoshua:
    "https://cdn.lojasonlinectt.pt/usercontent/portaldoequilibrio/media/images/01e02fc-172102-499b6f3-194803-yoshua.jpeg",
  nineCircles:
    "https://images.tcdn.com.br/img/img_prod/600231/grafico_9_circulos_695_1_55dd87a0fdc8ba1a9f34759bd336561a_20250701115053.jpg",
  iave:
    "https://cdn.lojasonlinectt.pt/usercontent/portaldoequilibrio/media/images/b5ab6ec-173102-1bdc65c-093454-iave.jpeg",
  psicoprotetor:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Psicoprotetor_I_Tilguti_PVC_I.jpg?v=1734084674",
  tetragrammaton:
    "https://http2.mlstatic.com/D_NQ_NP_763710-MLB74020309322_012024-O-grafico-radiestesia-24x24cm-c2mm-r40-tetragrammaton.webp",
  limpezaRecarga:
    "https://www.tilguti.com/cdn/shop/files/grafico-radiestesico-limpeza-e-recarga-iniciante-pvc-tilguti.jpg?v=1764591777&width=1445",
  keiti:
    "https://images.tcdn.com.br/img/img_prod/600231/grafico_keiti_959_1_a5ba388ada000cff9b3a60d76c17093f.jpg",
  saoMauro:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Cruz_de_Sao_Mauro_P_Tilguti_PVC_I.jpg?v=1734655665&width=600",
  magnetismo:
    "https://cdn.awsli.com.br/800x800/1382/1382320/produto/271505073/r155---magnetismo-vital-e-curativo-k89bn3o2om.jpg",
  antahkarana:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Antahkaran_P_Tilguti_PVC_I.jpg?v=1734651496&width=823",
  metatron:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Cubo_de_Metatron_I_Tilguti_PVC_I.jpg?v=1733615053&width=1445",
};

const graphInfoOverrides = {
  "Desembaraçador": {
    image: graphImageBank.unblocking,
    description:
      "Gráfico voltado a desfazer nós energéticos e situações travadas. É usado como apoio para abrir caminhos quando há sensação de bloqueio, confusão ou ausência de saída imediata.",
    interpretation:
      "A seleção do Desembaraçador sugere foco em liberar emaranhamentos, remover estagnações e favorecer clareza de movimento.",
    readings: "Desobstrução energética, radiestesia aplicada a padrões de bloqueio e organização de intenção terapêutica.",
  },
  "Desembaraçador de Relacionamentos": {
    image: graphImageBank.relationship,
    description:
      "Aplicado a vínculos afetivos, familiares, profissionais ou sociais, buscando dissolver nós relacionais, ruídos de comunicação e padrões de dependência ou afastamento.",
    interpretation:
      "Indica trabalho sobre relações, comunicação, acordos emocionais e campos compartilhados entre pessoas.",
    readings: "Vínculos, limites relacionais, comunicação afetiva e harmonização de relações.",
  },
  "Desembaraçador Material": {
    image: graphImageBank.unblocking,
    description:
      "Focado em bloqueios materiais, financeiros, profissionais ou práticos. A geometria é utilizada como suporte para reorganização de fluxos concretos e abertura de possibilidades.",
    interpretation:
      "Sugere atenção a recursos, trabalho, prosperidade, decisões práticas e circulação material.",
    readings: "Prosperidade, desbloqueio material, crenças sobre recursos e planejamento prático.",
  },
  "Justiça Divina": {
    image: graphImageBank.justice,
    description:
      "Gráfico associado à harmonização de situações que pedem equilíbrio, retidão, reparação simbólica e reposicionamento energético diante de conflitos.",
    interpretation:
      "A seleção sugere busca de equilíbrio, ordenamento, clareza ética e pacificação de conflitos.",
    readings: "Justiça simbólica, equilíbrio kármico, acordos, reparação e resolução de pendências.",
  },
  "Vesica Piscis": {
    image: graphImageBank.vesica,
    description:
      "Geometria sagrada formada pela interseção de dois círculos. Simboliza união de polaridades, integração, criação e encontro entre dimensões complementares.",
    interpretation:
      "Indica processo de integração entre corpo, emoção, mente e espírito, ou harmonização entre forças opostas.",
    readings: "Geometria sagrada, integração de polaridades, criação, vínculo e reconciliação.",
  },
  "Cruz Ansata": {
    image: graphImageBank.ansata,
    description:
      "Inspirada na Ankh egípcia, é descrita em radiestesia como gráfico captador, inversor e reorganizador de frequências, usado em processos de harmonização e equilíbrio.",
    interpretation:
      "Sugere transmutação de padrões, inversão de tendências desfavoráveis e fortalecimento vital.",
    readings: "Ankh, transmutação energética, vitalidade e equilíbrio de pessoas ou ambientes.",
  },
  "Keiti": {
    image: graphImageBank.keiti,
    description:
      "Gráfico de proteção e compensação ambiental, associado à neutralização de emissões nocivas, interferências eletromagnéticas e padrões densos do espaço.",
    interpretation:
      "Indica atenção ao ambiente, à proteção do campo e à limpeza de interferências externas.",
    readings: "Geobiologia, proteção ambiental, compensação de campos e harmonização de espaços.",
  },
  "Limpeza e Recarga": {
    image: graphImageBank.limpezaRecarga,
    description:
      "Gráfico voltado a limpar impregnações energéticas e recarregar o campo sutil, unindo descarga de densidades com recomposição vibracional.",
    interpretation:
      "Sugere necessidade de purificação, recomposição e estabilização da vitalidade após desgaste.",
    readings: "Limpeza energética, recarga vital, higiene vibracional e práticas de proteção.",
  },
  "SCAP": {
    image: graphImageBank.scap,
    description:
      "Conhecido como SCAP cabalístico, é usado como escudo de proteção, compensação de ambientes e neutralização de energias desarmônicas.",
    interpretation:
      "Indica necessidade de proteção, blindagem energética e organização do campo ambiental.",
    readings: "Proteção cabalística, escudos energéticos, ambiente terapêutico e neutralização.",
  },
  "Yoshua": {
    image: graphImageBank.yoshua,
    description:
      "Gráfico com letras hebraicas e estrutura simbólica voltada à proteção, limpeza espiritual e sustentação vibracional em trabalhos de purificação.",
    interpretation:
      "Sugere suporte espiritual, limpeza de densidades e alinhamento com intenção elevada.",
    readings: "Símbolos hebraicos, proteção espiritual, purificação e oração terapêutica.",
  },
  "9 Círculos": {
    image: graphImageBank.nineCircles,
    description:
      "Estrutura de círculos concêntricos associada à proteção de pessoas, objetos, animais e ambientes contra influências externas indesejadas.",
    interpretation:
      "Indica necessidade de delimitação, defesa energética e fortalecimento do campo de proteção.",
    readings: "Proteção por círculos concêntricos, limites energéticos e campo pessoal.",
  },
  "Iavé": {
    image: graphImageBank.iave,
    description:
      "Gráfico com referência ao tetragrama hebraico, utilizado como símbolo de proteção espiritual, alinhamento e conexão com princípio divino.",
    interpretation:
      "Sugere busca de proteção superior, centramento espiritual e sustentação de fé.",
    readings: "Tetragrama, nomes sagrados, proteção espiritual e tradição simbólica.",
  },
  "Psicoprotetor": {
    image: graphImageBank.psicoprotetor,
    description:
      "Gráfico voltado à proteção psíquica, indicado quando há sensibilidade a influências externas, pensamentos invasivos ou desgaste mental-emocional.",
    interpretation:
      "Indica foco em fronteiras psíquicas, proteção mental e redução de interferências sutis.",
    readings: "Higiene mental, proteção psíquica, limites energéticos e autorregulação.",
  },
  "Tetragrammaton": {
    image: graphImageBank.tetragrammaton,
    description:
      "Símbolo protetivo tradicional que reúne pentagrama, letras hebraicas e signos esotéricos. Em radiestesia, é usado como suporte de proteção e ordenamento espiritual.",
    interpretation:
      "Sugere proteção, alinhamento espiritual e reforço do campo contra influências desarmônicas.",
    readings: "Pentagrama, tetragrama, proteção espiritual e simbologia hermética.",
  },
  "Cruz de São Mauro": {
    image: graphImageBank.saoMauro,
    description:
      "Geometria em forma de cruz entrelaçada, associada à vitalidade, força, proteção e recomposição do campo energético.",
    interpretation:
      "Indica suporte para fortalecimento, sustentação e reorganização da energia vital.",
    readings: "Cruz, vitalidade, proteção e símbolos de sustentação espiritual.",
  },
  "Magnetismo Vital e Curativo": {
    image: graphImageBank.magnetismo,
    description:
      "Gráfico ligado à emissão de magnetismo vital e intenção curativa, usado para apoiar recomposição energética e vitalização.",
    interpretation:
      "Sugere trabalho de reabastecimento, cura sutil, vitalidade e fortalecimento geral.",
    readings: "Magnetismo curativo, vitalismo, imposição de mãos e energia terapêutica.",
  },
  "Antahkarana": {
    image: graphImageBank.antahkarana,
    description:
      "Símbolo usado em práticas energéticas como ponte de conexão entre planos da consciência, alinhamento espiritual e integração interior.",
    interpretation:
      "Indica despertar de consciência, integração espiritual e fortalecimento do eixo interno.",
    readings: "Antahkarana, meditação, integração de consciência e práticas energéticas.",
  },
  "Cubo de Metatron": {
    image: graphImageBank.metatron,
    description:
      "Geometria sagrada formada por círculos e linhas que contém relações com os sólidos platônicos. É associada à estrutura, proteção e ordem universal.",
    interpretation:
      "Sugere organização profunda, geometria de proteção, clareza estrutural e alinhamento espiritual.",
    readings: "Cubo de Metatron, sólidos platônicos, geometria sagrada e proteção.",
  },
};

const bovisFields = [
  { key: "fisico", label: "Físico" },
  { key: "mental", label: "Mental" },
  { key: "emocional", label: "Emocional" },
  { key: "espiritual", label: "Espiritual" },
];

const selected = {
  field: "",
  limit: "",
  chakras: new Set(),
};

let reportManuallyEdited = false;

const byId = (id) => document.getElementById(id);

function slug(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function makeCheckbox(name, value, label, extraContent = null) {
  const id = `${name}-${slug(value)}`;
  const wrapper = document.createElement("div");
  wrapper.className = "choice";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.name = name;
  input.value = value;
  input.id = id;

  const labelEl = document.createElement("label");
  labelEl.htmlFor = id;
  labelEl.textContent = label;

  wrapper.append(input, extraContent || labelEl);
  return wrapper;
}

function makeRadio(name, item, onChange) {
  const id = `${name}-${item.id}`;
  const wrapper = document.createElement("div");
  wrapper.className = "choice";

  const input = document.createElement("input");
  input.type = "radio";
  input.name = name;
  input.value = item.id;
  input.id = id;
  input.addEventListener("change", onChange);

  const label = document.createElement("label");
  label.htmlFor = id;
  label.textContent = item.label;

  wrapper.append(input, label);
  return wrapper;
}

function getGraphInfo(name, groupName = "Despertar") {
  if (graphInfoOverrides[name]) {
    return { name, groupName, ...graphInfoOverrides[name] };
  }

  const groupDefaults = {
    Harmonia: {
      image: graphImageBank.vesica,
      description:
        "Gráfico de harmonização voltado a reorganizar relações, ambientes, decisões ou estados internos, favorecendo coerência e pacificação.",
      interpretation: "Sugere busca de equilíbrio, reconciliação, organização suave e integração de forças em tensão.",
      readings: "Harmonia energética, coerência vibracional e pacificação de conflitos.",
    },
    Limpeza: {
      image: graphImageBank.limpezaRecarga,
      description:
        "Gráfico voltado a descarregar, limpar, cortar ou neutralizar energias densas, resíduos emocionais e impregnações do campo.",
      interpretation: "Sugere necessidade de purificação, corte de excessos, remoção de cargas e recomposição vibracional.",
      readings: "Limpeza energética, corte vibracional, defumação simbólica e proteção.",
    },
    Proteção: {
      image: graphImageBank.nineCircles,
      description:
        "Gráfico de proteção usado para fortalecer limites sutis, preservar o campo pessoal e criar uma barreira simbólica contra influências externas.",
      interpretation: "Sugere foco em segurança, delimitação, blindagem psíquica e proteção de pessoas ou ambientes.",
      readings: "Proteção energética, limites, escudos radiônicos e geobiologia.",
    },
    Psicoemocional: {
      image: graphImageBank.psicoprotetor,
      description:
        "Gráfico voltado ao campo psicoemocional, apoiando autorregulação, clareza afetiva, disposição interior e transformação de padrões emocionais.",
      interpretation: "Sugere trabalho sobre emoções, crenças, vínculos, motivação e recursos internos.",
      readings: "Autorregulação emocional, psicossomática, crenças e vínculos.",
    },
    Vitalidade: {
      image: graphImageBank.magnetismo,
      description:
        "Gráfico voltado à sustentação vital, recomposição energética, relaxamento, vigor físico e melhora do fluxo de energia no corpo.",
      interpretation: "Sugere apoio à vitalidade, descanso, magnetismo pessoal e recuperação energética.",
      readings: "Vitalidade, magnetismo curativo, descanso e equilíbrio corpo-energia.",
    },
    Despertar: {
      image: graphImageBank.antahkarana,
      description:
        "Gráfico de despertar e expansão, associado a consciência, conexão espiritual, prosperidade, clareza, luz interior e alinhamento com propósito.",
      interpretation: "Sugere abertura de consciência, fortalecimento espiritual e integração entre propósito, presença e ação.",
      readings: "Despertar espiritual, meditação, geometria sagrada, prosperidade e propósito.",
    },
  };

  return { name, groupName, ...groupDefaults[groupName] };
}

function makeInfoChoice(name, value, label, info, checkboxName) {
  const button = document.createElement("button");
  button.className = "clickable-name";
  button.type = "button";
  button.textContent = label;
  button.title = `${label}: ${info.description}`;
  button.addEventListener("click", () => openModal(info));
  return makeCheckbox(checkboxName, value, label, button);
}

function renderBasicLists() {
  const chakraList = byId("chakraList");
  chakras.forEach((chakra) => {
    const item = makeCheckbox("chakra", chakra.name, chakra.name);
    const input = item.querySelector("input");
    input.dataset.chakraId = chakra.id;
    input.addEventListener("change", () => {
      setChakraSelection(chakra.id, input.checked);
    });
    item.title = "Clique ou passe o mouse sobre o chakra no boneco para ler o resumo.";
    chakraList.appendChild(item);
  });

  renderChakraFigure();

  const fieldList = byId("fieldList");
  fields.forEach((field) => {
    fieldList.appendChild(
      makeRadio("campo_desequilibrio", field, (event) => {
        selected.field = event.target.value;
        renderCauses();
      })
    );
  });

  const limitList = byId("limitList");
  limitTypes.forEach((limit) => {
    limitList.appendChild(
      makeRadio("tipo_limite", limit, (event) => {
        selected.limit = event.target.value;
        renderCauses();
      })
    );
  });
}

function renderChakraFigure() {
  const figure = byId("chakraFigure");
  const body = document.createElement("div");
  body.className = "body-silhouette";
  body.setAttribute("aria-hidden", "true");

  chakras.forEach((chakra) => {
    const point = document.createElement("button");
    point.type = "button";
    point.className = "chakra-point";
    point.dataset.chakraId = chakra.id;
    point.style.setProperty("--chakra-color", chakra.color);
    point.style.top = chakra.top;
    point.title = `${chakra.name}: clique para marcar ou passe o mouse para ler o resumo.`;
    point.setAttribute("aria-label", `${chakra.name}. Marcar chakra em desequilíbrio.`);
    point.addEventListener("click", () => {
      setChakraSelection(chakra.id, !selected.chakras.has(chakra.id));
    });
    point.addEventListener("mouseenter", () => {
      renderChakraBalloons(chakra.id);
    });
    point.addEventListener("focus", () => {
      renderChakraBalloons(chakra.id);
    });
    body.appendChild(point);
  });

  figure.appendChild(body);
  renderChakraBalloons();
}

function setChakraSelection(id, checked) {
  if (checked) {
    selected.chakras.add(id);
  } else {
    selected.chakras.delete(id);
  }

  document.querySelectorAll(`[data-chakra-id="${id}"]`).forEach((element) => {
    if (element.matches("input")) element.checked = checked;
    element.classList.toggle("is-selected", checked);
    element.setAttribute("aria-pressed", checked ? "true" : "false");
  });

  renderChakraBalloons(id);
  autoUpdateIntegrativeReport();
}

function renderChakraBalloons(focusedId = "") {
  const container = byId("chakraBalloons");
  container.innerHTML = "";

  const selectedIds = [...selected.chakras];
  const visibleIds = selectedIds.length ? selectedIds : focusedId ? [focusedId] : [];

  if (!visibleIds.length) {
    container.className = "chakra-balloons is-empty";
    container.textContent = "Marque um chakra em desequilíbrio para exibir o balão explicativo.";
    return;
  }

  container.className = "chakra-balloons";
  visibleIds.forEach((id) => {
    const chakra = chakras.find((item) => item.id === id);
    if (!chakra) return;

    const balloon = document.createElement("article");
    balloon.className = "chakra-balloon";
    balloon.style.setProperty("--chakra-color", chakra.color);
    balloon.innerHTML = `
      <h4>${chakra.name}</h4>
      <p><strong>Representa:</strong> ${chakra.represents}</p>
      <p><strong>Associações físicas, emocionais e psíquicas:</strong> ${chakra.associations}</p>
      <p><strong>Áreas da vida:</strong> ${chakra.lifeAreas}</p>
    `;
    container.appendChild(balloon);
  });
}

function renderCauses() {
  const panel = byId("causePanel");
  panel.innerHTML = "";

  if (!selected.field || !selected.limit) {
    panel.className = "cause-panel is-empty";
    panel.textContent = "Escolha o campo do desequilíbrio e o tipo de limite para liberar as causas.";
    return;
  }

  panel.className = "cause-panel";
  const list = document.createElement("div");
  list.className = "choice-grid choice-grid-wide";

  causes
    .filter((cause) => cause.field === selected.field && cause.limit === selected.limit)
    .forEach((cause) => {
      const button = document.createElement("button");
      button.className = "clickable-name";
      button.type = "button";
      button.textContent = cause.name;
      button.title = `${cause.name}: ${cause.description}`;
      button.addEventListener("click", () => openModal(cause));
      list.appendChild(makeCheckbox("causa", cause.id, cause.name, button));
    });

  panel.appendChild(list);
}

function renderGraphs() {
  const container = byId("graphGroups");

  graphGroups.forEach((group) => {
    const section = document.createElement("article");
    section.className = "graph-group";

    const title = document.createElement("h3");
    title.textContent = group.name;

    const typeChoice = makeCheckbox("tipo_grafico", group.name, `Tipo: ${group.name}`);

    const items = document.createElement("div");
    items.className = "choice-grid choice-grid-wide";

    group.items.forEach((item) => {
      const info = getGraphInfo(item, group.name);
      items.appendChild(makeInfoChoice("grafico", item, item, info, `grafico_${slug(group.name)}`));
    });

    section.append(title, typeChoice, items);
    container.appendChild(section);
  });
}

function renderAwakening() {
  const container = byId("awakeningList");
  awakeningItems.forEach((item) => {
    const info = getGraphInfo(item, "Despertar");
    container.appendChild(makeInfoChoice("despertar", item, item, info, "despertar"));
  });
}

function renderHolisticTreatments() {
  const container = byId("holisticList");
  holisticTreatments.forEach((item) => {
    container.appendChild(makeCheckbox("tratamento_holistico", item, item));
  });
}

function openModal(cause) {
  const kicker =
    cause.groupName ||
    `${getLabel(fields, cause.field)} - Limite ${getLabel(limitTypes, cause.limit)}`;
  const image = byId("modalImage");

  byId("modalKicker").textContent = kicker;
  byId("modalTitle").textContent = cause.name;
  byId("modalDescription").textContent = cause.description;
  if (cause.image) {
    image.src = cause.image;
    image.alt = `Imagem ilustrativa de ${cause.name}`;
    image.hidden = false;
  } else {
    image.removeAttribute("src");
    image.alt = "";
    image.hidden = true;
  }
  byId("infoModal").classList.add("active");
  byId("infoModal").setAttribute("aria-hidden", "false");
  byId("closeModal").focus();
}

function closeModal() {
  byId("infoModal").classList.remove("active");
  byId("infoModal").setAttribute("aria-hidden", "true");
}

function getLabel(collection, id) {
  return collection.find((item) => item.id === id)?.label || id;
}

function getCauseReportText(cause) {
  const fieldLabel = getLabel(fields, cause.field);
  const limitLabel = getLabel(limitTypes, cause.limit);
  const fieldText = fieldInterpretations[cause.field];
  const limitText = limitInterpretations[cause.limit];

  return [
    `- Campo ${fieldLabel} + limite ${limitLabel} + causa "${cause.name}":`,
    `  Campo: ${fieldText}`,
    `  Tipo de limite: ${limitText}`,
    `  Causa: ${cause.description}`,
    `  Leitura integrada: esta combinação sugere que o tema "${cause.name.toLowerCase()}" deve ser observado dentro do campo ${fieldLabel.toLowerCase()}, especialmente na forma como o limite ${limitLabel.toLowerCase()} influencia proteção, abertura, vínculo, autonomia e autorregulação.`,
  ].join("\n");
}

function getFormValue(name) {
  return document.querySelector(`[name="${name}"]`)?.value.trim() || "";
}

function getCheckedValues(name) {
  return [...document.querySelectorAll(`[name="${name}"]:checked`)].map((input) => input.value);
}

function formatDate(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function getBovisLevel(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "";
  if (number < 3000) return "nível crítico / degenerativo, sugerindo forte desvitalização.";
  if (number < 6000) return "nível baixo / descendente, sugerindo perda de vitalidade ou desgaste.";
  if (number < 6500) return "nível de alerta / desequilíbrio, sugerindo queda ou instabilidade energética.";
  if (number === 6500) return "nível neutro / referência, próximo ao ponto básico de equilíbrio.";
  if (number <= 8500) return "nível saudável / vitalidade alta, sugerindo boa sustentação energética.";
  if (number <= 10000) return "nível elevado / espiritual, sugerindo expansão energética e conexão sutil.";
  return "nível acima da régua principal, pedindo leitura cautelosa e contextualizada.";
}

function buildBovisReport() {
  const lines = [];

  bovisFields.forEach((field) => {
    const initial = getFormValue(`${field.key}_inicial`);
    const final = getFormValue(`${field.key}_final`);
    if (!initial && !final) return;

    const initialText = initial ? `${initial} Å (${getBovisLevel(initial)})` : "não informado";
    const finalText = final ? `${final} Å (${getBovisLevel(final)})` : "não informado";
    const delta = initial && final ? Number(final) - Number(initial) : null;
    const movement =
      delta === null
        ? ""
        : delta > 0
          ? ` Houve elevação de ${delta} Å após a sessão.`
          : delta < 0
            ? ` Houve redução de ${Math.abs(delta)} Å após a sessão, recomendando nova observação.`
            : " A medição permaneceu estável após a sessão.";

    lines.push(`- ${field.label}: inicial ${initialText}; após a sessão ${finalText}.${movement}`);
  });

  return lines;
}

function buildIntegrativeReport() {
  const name = getFormValue("nome") || "cliente";
  const therapist = getFormValue("terapeuta");
  const birth = formatDate(getFormValue("nascimento"));
  const sessionDate = formatDate(getFormValue("sessao"));
  const fieldLabel = selected.field ? getLabel(fields, selected.field) : "";
  const limitLabel = selected.limit ? getLabel(limitTypes, selected.limit) : "";
  const selectedCauses = getCheckedValues("causa");
  const selectedCauseData = causes.filter((cause) => selectedCauses.includes(cause.id));
  const selectedChakraData = [...selected.chakras]
    .map((id) => chakras.find((chakra) => chakra.id === id))
    .filter(Boolean);
  const graphTypes = getCheckedValues("tipo_grafico");
  const selectedGraphData = graphGroups.flatMap((group) =>
    getCheckedValues(`grafico_${slug(group.name)}`).map((item) => getGraphInfo(item, group.name))
  );
  const holistic = getCheckedValues("tratamento_holistico");
  const awakening = getCheckedValues("despertar");
  const selectedAwakeningData = awakening.map((item) => getGraphInfo(item, "Despertar"));
  const bovisLines = buildBovisReport();
  const notes = getFormValue("observacoes");
  const intention = getFormValue("comando");
  const witnesses = getFormValue("testemunhos");
  const therapyDetail = getFormValue("detalhamento_terapeutica");
  const treatmentTime = getFormValue("tempo_tratamento");
  const nextDate = formatDate(getFormValue("nova_afericao"));

  const report = [
    "RELATÓRIO INTEGRATIVO AUTOMÁTICO",
    "",
    `Cliente: ${name}${therapist ? ` | Terapeuta: ${therapist}` : ""}${birth ? ` | Nascimento: ${birth}` : ""}${sessionDate ? ` | Sessão: ${sessionDate}` : ""}`,
    "",
    "Síntese geral:",
    `A leitura integrada desta sessão considera as medições Bovis, os chakras assinalados, o campo de desequilíbrio, o tipo de limite, as causas selecionadas e os tratamentos indicados pela radiestesia. As interpretações abaixo são possibilidades de leitura terapêutica e devem ser ajustadas pelo terapeuta conforme a escuta, o contexto e a evolução do atendimento.`,
    "",
  ];

  if (bovisLines.length) {
    report.push("Aferição Bovis:", ...bovisLines, "");
  }

  if (selectedChakraData.length) {
    report.push("Chakras em desequilíbrio:");
    selectedChakraData.forEach((chakra) => {
      report.push(`- ${chakra.name}: ${chakra.represents} Possíveis associações: ${chakra.associations} ${chakra.lifeAreas}`);
    });
    report.push("");
  }

  if (fieldLabel || limitLabel || selectedCauseData.length) {
    report.push("Campo, tipo de limite e causas selecionadas:");
    if (fieldLabel) {
      report.push(`- Campo predominante observado: ${fieldLabel}. ${fieldInterpretations[selected.field]}`);
    }
    if (limitLabel) {
      report.push(`- Tipo de limite identificado: ${limitLabel}. ${limitInterpretations[selected.limit]}`);
    }
    selectedCauseData.forEach((cause) => {
      report.push(getCauseReportText(cause));
    });
    report.push("");
  }

  if (graphTypes.length || selectedGraphData.length) {
    report.push("Tratamento radiônico com geometrias sagradas:");
    if (graphTypes.length) report.push(`- Tipos indicados: ${graphTypes.join(", ")}.`);
    if (selectedGraphData.length) {
      selectedGraphData.forEach((graph) => {
        report.push(`- ${graph.name} (${graph.groupName}): ${graph.interpretation}`);
      });
    }
    report.push("A combinação sugere uma estratégia de reorganização energética conforme os gráficos marcados, articulando harmonização, limpeza, proteção, suporte psicoemocional e vitalidade.");
    report.push("");
  }

  if (holistic.length || therapyDetail) {
    report.push("Outros tratamentos holísticos:");
    if (holistic.length) report.push(`- Terapias indicadas: ${holistic.join(", ")}.`);
    if (therapyDetail) report.push(`- Detalhamento terapêutico: ${therapyDetail}`);
    report.push("");
  }

  if (awakening.length) {
    report.push("Despertar:");
    selectedAwakeningData.forEach((graph) => {
      report.push(`- ${graph.name}: ${graph.interpretation}`);
    });
    report.push("");
  }

  if (witnesses || intention || notes || treatmentTime || nextDate) {
    report.push("Registro complementar da sessão:");
    if (witnesses) report.push(`- Testemunho(s): ${witnesses}`);
    if (intention) report.push(`- Comando / intenção: ${intention}`);
    if (notes) report.push(`- Observações: ${notes}`);
    if (treatmentTime) report.push(`- Tempo de permanência / tratamento indicado: ${treatmentTime}`);
    if (nextDate) report.push(`- Nova aferição sugerida: ${nextDate}`);
    report.push("");
  }

  report.push("Interpretação integrativa possível:");
  report.push(buildSynthesis(fieldLabel, limitLabel, selectedChakraData, selectedCauseData, holistic, bovisLines));
  report.push("");
  report.push("Leituras complementares sugeridas:");
  report.push(buildReadingSuggestions(fieldLabel, limitLabel, selectedChakraData, selectedCauseData, holistic, selectedGraphData, selectedAwakeningData));
  report.push("");
  report.push("Observação: este relatório organiza possibilidades de leitura terapêutica e energética. Ele não substitui avaliação médica, psicológica ou qualquer acompanhamento profissional necessário.");

  return report.join("\n");
}

function buildSynthesis(fieldLabel, limitLabel, selectedChakraData, selectedCauseData, holistic, bovisLines) {
  const parts = [];

  if (fieldLabel && limitLabel) {
    parts.push(`O eixo principal da sessão aparece no campo ${fieldLabel.toLowerCase()}, com limite ${limitLabel.toLowerCase()}, indicando um padrão de fronteira energética que pode influenciar a forma como a pessoa sente, pensa, se protege ou se entrega às experiências.`);
  }

  if (selectedCauseData.length) {
    const names = selectedCauseData
      .map((cause) => `${getLabel(fields, cause.field).toLowerCase()} / ${getLabel(limitTypes, cause.limit).toLowerCase()} / ${cause.name.toLowerCase()}`)
      .join("; ");
    parts.push(`As causas marcadas (${names}) apontam temas prioritários para investigação, integração emocional, ajuste de limites e reeducação energética.`);
  }

  if (selectedChakraData.length) {
    const names = selectedChakraData.map((chakra) => chakra.name).join(", ");
    parts.push(`Os chakras assinalados (${names}) sugerem pontos de atenção entre corpo, emoções, mente e áreas práticas da vida.`);
  }

  if (bovisLines.length) {
    parts.push("As medições Bovis ajudam a observar a direção da vitalidade antes e depois da intervenção, servindo como referência comparativa para acompanhamento.");
  }

  if (holistic.length) {
    parts.push(`As terapias complementares indicadas (${holistic.join(", ")}) podem apoiar o processo de integração quando usadas com critério, escuta e acompanhamento.`);
  }

  if (!parts.length) {
    return "Preencha as medições, selecione chakras, causas e tratamentos para que o relatório componha uma leitura mais completa.";
  }

  return parts.join(" ");
}

function buildReadingSuggestions(
  fieldLabel,
  limitLabel,
  selectedChakraData,
  selectedCauseData,
  holistic,
  selectedGraphData = [],
  selectedAwakeningData = []
) {
  const suggestions = new Set([
    "Escala Bovis e acompanhamento de vitalidade energética.",
    "Radiestesia terapêutica aplicada ao campo emocional, mental e espiritual.",
  ]);

  if (fieldLabel) suggestions.add(`Limites energéticos no campo ${fieldLabel.toLowerCase()}.`);
  if (limitLabel) suggestions.add(`Padrões de limite ${limitLabel.toLowerCase()} e autorregulação.`);
  if (selectedChakraData.length) suggestions.add("Chakras, psicossomática energética e relações entre corpo, emoções e áreas da vida.");
  if (selectedCauseData.some((cause) => cause.name.toLowerCase().includes("intimidade"))) suggestions.add("Vínculos, intimidade, proteção emocional e abertura afetiva.");
  if (selectedCauseData.some((cause) => cause.name.toLowerCase().includes("controle"))) suggestions.add("Controle, confiança, flexibilidade e segurança interna.");
  if (selectedCauseData.some((cause) => cause.name.toLowerCase().includes("abandono"))) suggestions.add("Feridas de rejeição ou abandono, apego, segurança emocional e pertencimento.");
  if (selectedCauseData.some((cause) => cause.name.toLowerCase().includes("culpa"))) suggestions.add("Culpa, autocondenação, permissão interna e limites saudáveis.");
  if (selectedCauseData.some((cause) => cause.name.toLowerCase().includes("dependência"))) suggestions.add("Dependência emocional, autonomia afetiva e fortalecimento de identidade.");
  if (selectedCauseData.some((cause) => cause.name.toLowerCase().includes("rigidez"))) suggestions.add("Rigidez mental, flexibilidade cognitiva e atualização de crenças.");
  if (selectedCauseData.some((cause) => cause.name.toLowerCase().includes("submissão"))) suggestions.add("Submissão, autoridade interna, merecimento e posicionamento.");
  if (holistic.includes("Tarô")) suggestions.add("Tarô terapêutico como recurso simbólico de reflexão e autoconhecimento.");
  if (holistic.includes("Florais")) suggestions.add("Florais e harmonização emocional.");
  if (holistic.includes("Reiki")) suggestions.add("Reiki e práticas de imposição de mãos para equilíbrio energético.");
  if (holistic.includes("Meditação budista (zazen ou daimoku)")) suggestions.add("Meditação budista, presença, respiração e disciplina contemplativa.");
  [...selectedGraphData, ...selectedAwakeningData].forEach((graph) => {
    suggestions.add(graph.readings);
  });

  return [...suggestions].map((item) => `- ${item}`).join("\n");
}

function updateIntegrativeReport() {
  const report = byId("integrativeReport");
  const printView = byId("reportPrintView");
  if (!report) return;
  reportManuallyEdited = false;
  report.value = buildIntegrativeReport();
  if (printView) printView.textContent = report.value;
}

function autoUpdateIntegrativeReport() {
  if (!reportManuallyEdited) updateIntegrativeReport();
}

function syncReportPrintView() {
  const report = byId("integrativeReport");
  const printView = byId("reportPrintView");
  if (report && printView) printView.textContent = report.value;
}

function saveReportPdf() {
  if (!reportManuallyEdited) updateIntegrativeReport();
  syncReportPrintView();
  byId("reportSection").open = true;
  document.body.classList.add("print-report-only");
  window.print();
}

function clearForm() {
  const confirmed = window.confirm("Limpar todos os campos preenchidos?");
  if (!confirmed) return;

  byId("sessionForm").reset();
  selected.field = "";
  selected.limit = "";
  selected.chakras.clear();
  reportManuallyEdited = false;
  document.querySelectorAll(".chakra-point").forEach((point) => {
    point.classList.remove("is-selected");
    point.setAttribute("aria-pressed", "false");
  });
  renderCauses();
  renderChakraBalloons();
  byId("integrativeReport").value = "";
}

function bindActions() {
  byId("clearForm").addEventListener("click", clearForm);
  byId("clearFormBottom").addEventListener("click", clearForm);
  byId("printForm").addEventListener("click", () => window.print());
  byId("printFormBottom").addEventListener("click", () => window.print());
  byId("generateReport").addEventListener("click", updateIntegrativeReport);
  byId("saveReportPdf").addEventListener("click", saveReportPdf);
  byId("sessionForm").addEventListener("input", (event) => {
    if (event.target.id === "integrativeReport") {
      reportManuallyEdited = true;
      syncReportPrintView();
    } else {
      autoUpdateIntegrativeReport();
    }
  });
  byId("sessionForm").addEventListener("change", (event) => {
    if (event.target.id === "integrativeReport") {
      reportManuallyEdited = true;
      syncReportPrintView();
    } else {
      autoUpdateIntegrativeReport();
    }
  });
  byId("closeModal").addEventListener("click", closeModal);
  byId("infoModal").addEventListener("click", (event) => {
    if (event.target === byId("infoModal")) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
  window.addEventListener("beforeprint", () => {
    if (!reportManuallyEdited) updateIntegrativeReport();
    syncReportPrintView();
    document.querySelectorAll("details.section").forEach((section) => {
      section.open = true;
    });
  });
  window.addEventListener("afterprint", () => {
    document.body.classList.remove("print-report-only");
  });
}

renderBasicLists();
renderCauses();
renderGraphs();
renderHolisticTreatments();
renderAwakening();
bindActions();
