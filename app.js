const chakras = [
  {
    id: "coronario",
    name: "Coronário",
    color: "#8f62c7",
    top: "8%",
    represents: "Conexão espiritual, propósito, fé, sentido de vida e integração com o sutil.",
    associations:
      "Quando em desequilíbrio, pode estar associado a desconexão, falta de sentido, isolamento, confusão espiritual, exaustão mental, enxaquecas e alterações do sono.",
    lifeAreas: "Trabalho: propósito. Estudo: visão ampla. Amor/relações: conexão. Saúde geral: equilíbrio espiritual e mental.",
  },
  {
    id: "terceiro-olho",
    name: "Terceiro Olho",
    color: "#4057b8",
    top: "18%",
    represents: "Intuição, percepção, clareza mental, imaginação, discernimento e visão interior.",
    associations:
      "Quando em desequilíbrio, pode estar associado a excesso de pensamentos, dificuldade de foco, ansiedade mental, dores de cabeça, tensão ocular e confusão psíquica.",
    lifeAreas: "Trabalho: estratégia. Estudo: concentração. Amor/relações: percepção clara. Saúde geral: mente e sistema nervoso.",
  },
  {
    id: "laringeo",
    name: "Laríngeo",
    color: "#2c9ec7",
    top: "30%",
    represents: "Comunicação, expressão, verdade pessoal, escuta e capacidade de manifestar ideias.",
    associations:
      "Quando em desequilíbrio, pode estar associado a bloqueio de fala, medo de se posicionar, timidez, rigidez na comunicação, alterações na garganta, tireoide e região cervical.",
    lifeAreas: "Trabalho: expressão profissional. Estudo: comunicação. Amor/relações: diálogo. Saúde geral: garganta e pescoço.",
  },
  {
    id: "cardiaco",
    name: "Cardíaco",
    color: "#3ca96d",
    top: "42%",
    represents: "Amor, vínculo, compaixão, perdão, pertencimento e equilíbrio entre dar e receber.",
    associations:
      "Quando em desequilíbrio, pode estar associado a mágoas, tristeza, fechamento afetivo, dependência, solidão, alterações no peito, pulmões, circulação e imunidade.",
    lifeAreas: "Trabalho: cooperação. Estudo: motivação afetiva. Amor/relações: vínculos. Saúde geral: coração, respiração e imunidade.",
  },
  {
    id: "plexo-solar",
    name: "Plexo Solar",
    color: "#d7a61e",
    top: "54%",
    represents: "Autonomia, autoestima, poder pessoal, ação, decisão e digestão das experiências.",
    associations:
      "Quando em desequilíbrio, pode estar associado a insegurança, necessidade de controle, raiva contida, baixa autoestima, alterações no estômago, fígado, pâncreas e sistema digestivo.",
    lifeAreas: "Trabalho: liderança. Estudo: disciplina. Amor/relações: limites pessoais. Saúde geral: digestão e energia de ação.",
  },
  {
    id: "sacral",
    name: "Sacral",
    color: "#db7b2d",
    top: "67%",
    represents: "Prazer, criatividade, sexualidade, fluidez emocional, fertilidade e movimento da vida.",
    associations:
      "Quando em desequilíbrio, pode estar associado a culpa, bloqueios afetivos, dependência emocional, compulsões, alterações na região pélvica, rins, bexiga e sistema reprodutor.",
    lifeAreas: "Trabalho: criatividade. Estudo: prazer em aprender. Amor/relações: intimidade. Saúde geral: vitalidade pélvica.",
  },
  {
    id: "basico",
    name: "Básico",
    color: "#b6403a",
    top: "80%",
    represents: "Segurança, presença, aterramento, sobrevivência, corpo físico, estabilidade e recursos materiais.",
    associations:
      "Quando em desequilíbrio, pode estar associado a medo, instabilidade, insegurança financeira, apatia, alterações nas pernas, coluna, ossos, intestino e vitalidade física.",
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
  { key: "vitalidade_geral", label: "Vitalidade geral" },
  { key: "ambiente_pessoal", label: "Vitalidade do ambiente pessoal" },
  { key: "ambiente_trabalho", label: "Vitalidade do/no ambiente de trabalho" },
];

const promotionalCard = {
  title: "Radiestesia, Reiki, Tarô e escrita terapêutica",
  text:
    "A radiestesia é uma prática de escuta sutil que ajuda a mapear padrões energéticos, identificar pontos de desequilíbrio e orientar caminhos de limpeza, proteção e reorganização do campo pessoal. Quando associada ao Reiki, ao Tarô terapêutico e à escrita criativa/terapêutica, amplia-se um percurso de autoconhecimento: o cliente compreende melhor seus movimentos internos, reconhece símbolos importantes da própria história e encontra recursos para cuidar de si com mais presença.",
  duration:
    "As sessões radiônicas (com geometrias sagradas, conhecidas como gráficos radiônicos) atuam nos campos sutis por aproximadamente 28 dias. Recomenda-se reconsulta e reenergização ao final desse período, ou antes, se houver necessidade percebida no acompanhamento.",
  invite:
    "Para aprofundar este processo, é possível realizar sessões complementares de Reiki, leituras terapêuticas de Tarô e práticas de escrita orientada, conforme a necessidade identificada no atendimento. Entre em contato para mais informações.",
};

const selected = {
  field: "emocional",
  limit: "rigido",
  chakras: new Set(),
};

let reportManuallyEdited = false;
let printMode = "";
const storageKey = "registro-sessao-terapeutica-dados";
const defaultDocumentTitle = document.title;

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

function makeRadio(name, item, onChange, idPrefix = name) {
  const id = `${idPrefix}-${item.id}`;
  const wrapper = document.createElement("div");
  wrapper.className = "choice";

  const input = document.createElement("input");
  input.type = "radio";
  input.name = name;
  input.value = item.id;
  input.id = id;
  const isFieldRadio = name.startsWith("campo_desequilibrio");
  const isLimitRadio = name.startsWith("tipo_limite");
  input.checked =
    (isFieldRadio && item.id === selected.field) ||
    (isLimitRadio && item.id === selected.limit);
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

  renderFieldLimitSelectors("causeFieldList", "causeLimitList", "cause", "campo_desequilibrio", "tipo_limite");
}

function renderFieldLimitSelectors(fieldContainerId, limitContainerId, idPrefix, fieldName, limitName) {
  const fieldList = byId(fieldContainerId);
  const limitList = byId(limitContainerId);
  if (!fieldList || !limitList) return;

  fields.forEach((field) => {
    fieldList.appendChild(
      makeRadio(
        fieldName,
        field,
        (event) => {
          selected.field = event.target.value;
          syncFieldLimitRadios();
          renderCauses();
          autoUpdateIntegrativeReport();
          autoSaveFormState();
        },
        `${idPrefix}-campo`
      )
    );
  });

  limitTypes.forEach((limit) => {
    limitList.appendChild(
      makeRadio(
        limitName,
        limit,
        (event) => {
          selected.limit = event.target.value;
          syncFieldLimitRadios();
          renderCauses();
          autoUpdateIntegrativeReport();
          autoSaveFormState();
        },
        `${idPrefix}-limite`
      )
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

  panel.className = "cause-panel";
  const groups =
    selected.field && selected.limit
      ? [{ field: selected.field, limit: selected.limit }]
      : fields.flatMap((field) => limitTypes.map((limit) => ({ field: field.id, limit: limit.id })));

  groups.forEach((group) => {
    const matchingCauses = causes.filter(
      (cause) => cause.field === group.field && cause.limit === group.limit
    );
    if (!matchingCauses.length) return;

    const groupBlock = document.createElement("article");
    groupBlock.className = "cause-group";

    const title = document.createElement("h3");
    title.textContent = `${getLabel(fields, group.field)} - Limite ${getLabel(limitTypes, group.limit)}`;

    const list = document.createElement("div");
    list.className = "choice-grid choice-grid-wide";

    matchingCauses.forEach((cause) => {
      const button = document.createElement("button");
      button.className = "clickable-name";
      button.type = "button";
      button.textContent = cause.name;
      button.title = `${cause.name}: ${cause.description}`;
      button.addEventListener("click", () => openModal(cause));
      list.appendChild(makeCheckbox("causa", cause.id, cause.name, button));
    });

    groupBlock.append(title, list);
    panel.appendChild(groupBlock);
  });
}

function renderGraphs() {
  const container = byId("graphGroups");

  graphGroups.forEach((group) => {
    const section = document.createElement("details");
    section.className = "graph-group";
    section.open = false;

    const summary = document.createElement("summary");
    const title = document.createElement("h3");
    const typeChoice = makeCheckbox("tipo_grafico", group.name, `Tipo: ${group.name}`);
    title.appendChild(typeChoice);
    summary.appendChild(title);

    const items = document.createElement("div");
    items.className = "choice-grid choice-grid-wide";

    group.items.forEach((item) => {
      const info = getGraphInfo(item, group.name);
      items.appendChild(makeInfoChoice("grafico", item, item, info, `grafico_${slug(group.name)}`));
    });

    section.append(summary, items);
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

  return [
    `Causa: ${cause.name}`,
    `Campo relacionado: ${fieldLabel}`,
    `Tipo de limite relacionado: ${limitLabel}`,
    `Texto-base: ${cause.description}`,
  ].join("\n");
}

function addReportSection(report, number, title, lines) {
  if (!lines.length) return;
  report.push(`${number}. ${title.toUpperCase()}`);
  report.push("-".repeat(48));
  report.push(...lines);
  report.push("");
}

function addReportBlockTitle(report, title) {
  report.push("=".repeat(56));
  report.push(title.toUpperCase());
  report.push("=".repeat(56));
  report.push("");
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
  if (number <= 300) return "Crítico";
  if (number < 4000) return "Muito baixo";
  if (number < 6000) return "Alerta";
  return "Saudável";
}

function getBovisCategory(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "";
  if (number < 4000) return "critical";
  if (number < 6000) return "medium";
  return "healthy";
}

function buildBovisRows() {
  return bovisFields
    .map((field) => {
      const initial = getFormValue(`${field.key}_inicial`);
      const final = getFormValue(`${field.key}_final`);
      if (!initial && !final) return null;

      return {
        label: field.label,
        initial,
        final,
        initialLevel: getBovisLevel(initial),
        finalLevel: getBovisLevel(final),
        current: final || initial,
        currentLevel: getBovisLevel(final || initial),
        currentCategory: getBovisCategory(final || initial),
      };
    })
    .filter(Boolean);
}

function formatBovisCell(value) {
  return value || "não informado";
}

function buildBovisAlert(rows = buildBovisRows()) {
  if (!rows.length) return [];

  const belowHealthy = rows.filter((row) => row.currentCategory && row.currentCategory !== "healthy");
  if (!belowHealthy.length) return [];

  return [
    `Alerta: ${belowHealthy.map((row) => row.label).join(", ")} merecem atenção energética por apresentarem valor abaixo de 6.000.`,
  ];
}

function buildBovisReport() {
  const rows = buildBovisRows();
  if (!rows.length) return [];

  return [
    "Campo | Valor",
    "------|------",
    ...rows.map((row) => `${row.label} | ${formatBovisCell(row.current)}`),
    "",
    ...buildBovisAlert(rows),
  ];
}

function buildIntegrativeReport() {
  const name = getFormValue("nome") || "cliente";
  const therapist = getFormValue("terapeuta");
  const birth = formatDate(getFormValue("nascimento"));
  const sessionDate = formatDate(getFormValue("sessao"));
  const sessionTheme = getFormValue("tema_sessao");
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
  const protocolCode = getFormValue("codigo_comando");
  const witnesses = getFormValue("testemunhos");
  const therapyDetail = getFormValue("detalhamento_terapeutica");
  const treatmentTime = getFormValue("tempo_tratamento");
  const nextDate = formatDate(getFormValue("nova_afericao"));

  const report = [
    "RELATÓRIO AUTOMÁTICO - GERADO COM BASE NOS DADOS E FONTES FORNECIDAS PELO TERAPEUTA",
    "PROTOCOLO DE LIMPEZA E PROTEÇÃO",
    "",
  ];

  addReportBlockTitle(report, "Resultado do formulário");

  addReportSection(report, 1, "Dados do cliente e da sessão", [
    `Cliente: ${name}`,
    therapist ? `Terapeuta: ${therapist}` : "Terapeuta: não informado",
    birth ? `Data de nascimento: ${birth}` : "Data de nascimento: não informada",
    sessionDate ? `Data da sessão: ${sessionDate}` : "Data da sessão: não informada",
    sessionTheme ? `Tema da sessão / questão principal: ${sessionTheme}` : "Tema da sessão / questão principal: não informado",
  ]);

  addReportSection(report, 2, "Avaliação - escala Bovis", bovisLines.length ? bovisLines : ["Nenhuma medição Bovis informada."]);

  if (selectedChakraData.length) {
    addReportSection(
      report,
      3,
      "Chakras em desequilíbrio",
      selectedChakraData.map(
        (chakra) =>
          `${chakra.name}\nRepresenta: ${chakra.represents}\nAssociações: ${chakra.associations}\nÁreas da vida: ${chakra.lifeAreas}`
      )
    );
  }

  if (fieldLabel || limitLabel || selectedCauseData.length) {
    const lines = [];
    if (fieldLabel) {
      lines.push(`Campo selecionado: ${fieldLabel}.`);
    }
    if (limitLabel) {
      lines.push(`Tipo de limite selecionado: ${limitLabel}.`);
    }
    selectedCauseData.forEach((cause) => {
      lines.push(getCauseReportText(cause));
    });
    addReportSection(report, 4, "Campo, tipo de limite e causas selecionadas", lines);
  }

  if (graphTypes.length || selectedGraphData.length) {
    const lines = [];
    if (graphTypes.length) lines.push(`Tipos indicados: ${graphTypes.join(", ")}.`);
    if (selectedGraphData.length) {
      selectedGraphData.forEach((graph) => {
        lines.push(`${graph.name} (${graph.groupName}): ${graph.description}`);
      });
    }
    addReportSection(report, 5, "Tratamento radiônico com geometrias sagradas", lines);
  }

  if (holistic.length || therapyDetail) {
    const lines = [];
    if (holistic.length) lines.push(`Terapias indicadas: ${holistic.join(", ")}.`);
    if (therapyDetail) lines.push(`Detalhamento terapêutico: ${therapyDetail}`);
    addReportSection(report, 6, "Outros tratamentos holísticos", lines);
  }

  if (awakening.length) {
    addReportSection(
      report,
      7,
      "Despertar",
      selectedAwakeningData.map((graph) => `${graph.name}: ${graph.description}`)
    );
  }

  if (witnesses || intention || protocolCode || notes || treatmentTime || nextDate) {
    const lines = [];
    if (witnesses) lines.push(`Testemunho(s): ${witnesses}`);
    if (intention) lines.push(`Comando / intenção: ${intention}`);
    if (protocolCode) {
      lines.push(`Código do comando / protocolo: ${protocolCode}`);
      lines.push("Uso do código: esta referência identifica o comando desta consulta individual, permitindo reaplicar, adaptar ou comparar o protocolo em outros contextos sem misturar registros.");
    }
    if (notes) lines.push(`Observações: ${notes}`);
    if (treatmentTime) lines.push(`Tempo de permanência / tratamento indicado: ${treatmentTime}`);
    if (nextDate) lines.push(`Nova aferição sugerida: ${nextDate}`);
    addReportSection(report, 8, "Registro complementar da sessão", lines);
  }

  report.push("OBSERVAÇÃO");
  report.push("-".repeat(48));
  report.push("Observação: este relatório organiza possibilidades de leitura terapêutica e energética. Ele não substitui avaliação médica, psicológica ou qualquer acompanhamento profissional necessário.");
  report.push("");
  report.push(promotionalCard.title.toUpperCase());
  report.push("-".repeat(48));
  report.push(promotionalCard.text);
  report.push("");
  report.push(promotionalCard.duration);
  report.push("");
  report.push(promotionalCard.invite);

  return report.join("\n");
}

function updateIntegrativeReport() {
  const report = byId("integrativeReport");
  const printView = byId("reportPrintView");
  if (!report) return;
  reportManuallyEdited = false;
  report.value = buildIntegrativeReport();
  if (printView) printView.textContent = report.value;
  syncReportPrintView();
}

function autoUpdateIntegrativeReport() {
  if (!reportManuallyEdited) updateIntegrativeReport();
}

function syncReportPrintView() {
  const report = byId("integrativeReport");
  const printView = byId("reportPrintView");
  const visualView = byId("reportVisualView");
  if (report && printView) printView.textContent = report.value;
  if (visualView) visualView.innerHTML = buildVisualReport();
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildVisualReport() {
  const name = getFormValue("nome") || "cliente";
  const therapist = getFormValue("terapeuta") || "não informado";
  const birth = formatDate(getFormValue("nascimento")) || "não informada";
  const sessionDate = formatDate(getFormValue("sessao")) || "não informada";
  const sessionTheme = getFormValue("tema_sessao");
  const fieldLabel = selected.field ? getLabel(fields, selected.field) : "não selecionado";
  const limitLabel = selected.limit ? getLabel(limitTypes, selected.limit) : "não selecionado";
  const selectedCauseData = causes.filter((cause) => getCheckedValues("causa").includes(cause.id));
  const selectedChakraData = [...selected.chakras]
    .map((id) => chakras.find((chakra) => chakra.id === id))
    .filter(Boolean);
  const selectedGraphData = graphGroups.flatMap((group) =>
    getCheckedValues(`grafico_${slug(group.name)}`).map((item) => getGraphInfo(item, group.name))
  );
  const selectedAwakeningData = getCheckedValues("despertar").map((item) => getGraphInfo(item, "Despertar"));
  const allGraphData = [...selectedGraphData, ...selectedAwakeningData];
  const holistic = getCheckedValues("tratamento_holistico");
  const therapyDetail = getFormValue("detalhamento_terapeutica");
  const notes = getFormValue("observacoes");
  const intention = getFormValue("comando");
  const protocolCode = getFormValue("codigo_comando");
  const bovisRows = buildBovisRows();
  const bovisAlert = buildBovisAlert(bovisRows);

  const bovisTable = bovisRows.length
    ? `
      <table class="visual-bovis-table">
        <thead>
          <tr>
            <th>Campo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          ${bovisRows
            .map(
              (row) => `
                <tr>
                  <td>${escapeHtml(row.label)}</td>
                  <td>${escapeHtml(formatBovisCell(row.current))}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `
    : `<p class="visual-muted">Nenhuma medição Bovis informada.</p>`;

  const bovisAlertHtml = bovisAlert.length
    ? `<div class="bovis-alert">${bovisAlert
        .map((line) => `<p>${escapeHtml(line)}</p>`)
        .join("")}</div>`
    : "";

  const chakraCards = selectedChakraData.length
    ? selectedChakraData
        .map(
          (chakra) => `
            <article class="visual-card chakra-summary-card" style="--chakra-color:${chakra.color}">
              <h4>${escapeHtml(chakra.name)}</h4>
              <p><strong>Representa:</strong> ${escapeHtml(chakra.represents)}</p>
              <p><strong>Associações:</strong> ${escapeHtml(chakra.associations)}</p>
              <p><strong>Áreas da vida:</strong> ${escapeHtml(chakra.lifeAreas)}</p>
            </article>
          `
        )
        .join("")
    : `<p class="visual-muted">Nenhum chakra selecionado.</p>`;

  const causeCards = selectedCauseData.length
    ? selectedCauseData
        .map(
          (cause) => `
            <article class="visual-card integrated-summary">
              <h4>${escapeHtml(cause.name)}</h4>
              <p><strong>Campo:</strong> ${escapeHtml(getLabel(fields, cause.field))}</p>
              <p><strong>Tipo de limite:</strong> ${escapeHtml(getLabel(limitTypes, cause.limit))}</p>
              <p>${escapeHtml(cause.description)}</p>
              <p><strong>Leitura orientadora:</strong> esta causa descreve um modo de organizar proteção, abertura, vínculo, autonomia e autorregulação dentro do campo e do limite selecionados.</p>
            </article>
          `
        )
        .join("")
    : `<p class="visual-muted">Nenhuma causa selecionada.</p>`;

  const graphCards = allGraphData.length
    ? allGraphData
        .map(
          (graph) => `
            <article class="graph-report-card">
              ${graph.image ? `<img src="${escapeHtml(graph.image)}" alt="${escapeHtml(graph.name)}" />` : ""}
              <div>
                <p class="visual-kicker">${escapeHtml(graph.groupName)}</p>
                <h4>${escapeHtml(graph.name)}</h4>
                <p>${escapeHtml(graph.description)}</p>
                <p><strong>Interpretação no tratamento:</strong> ${escapeHtml(graph.interpretation)}</p>
              </div>
            </article>
          `
        )
        .join("")
    : `<p class="visual-muted">Nenhum gráfico selecionado.</p>`;

  return `
    <article class="visual-report">
      <header class="visual-report-header">
        <h3>Relatório automático - gerado com base nos dados e fontes fornecidas pelo terapeuta</h3>
        <p>PROTOCOLO DE LIMPEZA E PROTEÇÃO</p>
      </header>

      <section>
        <h3>1. Dados da sessão</h3>
        <div class="visual-data-grid">
          <p><strong>Cliente:</strong> ${escapeHtml(name)}</p>
          <p><strong>Terapeuta:</strong> ${escapeHtml(therapist)}</p>
          <p><strong>Nascimento:</strong> ${escapeHtml(birth)}</p>
          <p><strong>Data da sessão:</strong> ${escapeHtml(sessionDate)}</p>
          <p><strong>Tema:</strong> ${escapeHtml(sessionTheme || "não informado")}</p>
        </div>
      </section>

      <section>
        <h3>2. Resultado do formulário</h3>
        <h4>Avaliação Bovis</h4>
        ${bovisTable}
        ${bovisAlertHtml}
        <h4>Campo e limite identificados</h4>
        <p><strong>Campo:</strong> ${escapeHtml(fieldLabel)} | <strong>Tipo de limite:</strong> ${escapeHtml(limitLabel)}</p>
        ${holistic.length ? `<h4>Outros tratamentos holísticos</h4><p>${escapeHtml(holistic.join(", "))}</p>` : ""}
        ${therapyDetail ? `<h4>Detalhamento terapêutico</h4><p>${escapeHtml(therapyDetail)}</p>` : ""}
        ${intention ? `<h4>Comando / intenção</h4><p>${escapeHtml(intention)}</p>` : ""}
        ${
          protocolCode
            ? `<h4>Código do comando / protocolo</h4><p><strong>${escapeHtml(protocolCode)}</strong></p><p class="visual-muted">Referência individual desta consulta para reaplicar, adaptar ou comparar o protocolo em outros contextos sem misturar registros.</p>`
            : ""
        }
        ${notes ? `<h4>Observações</h4><p>${escapeHtml(notes)}</p>` : ""}
      </section>

      <section>
        <h3>3. Resumo integrado: chakra, campo e causa</h3>
        <p>Esta parte organiza os pontos centrais selecionados no formulário para que o cliente compreenda o processo com clareza e autoconhecimento.</p>
        <div class="visual-card-grid">${chakraCards}</div>
        <div class="visual-card-grid">${causeCards}</div>
      </section>

      <section>
        <h3>4. Tratamento radiônico com geometrias sagradas</h3>
        <p>Os gráficos abaixo foram selecionados como parte do tratamento radiônico. Eles indicam a direção simbólica e energética do trabalho realizado.</p>
        <div class="graph-report-grid">${graphCards}</div>
      </section>

      <section class="visual-note">
        <h3>Observação</h3>
        <p>Este relatório organiza possibilidades de leitura terapêutica e energética. Ele não substitui avaliação médica, psicológica ou qualquer acompanhamento profissional necessário.</p>
      </section>

      <section class="promo-card">
        <p class="visual-kicker">Convite terapêutico</p>
        <h3>${escapeHtml(promotionalCard.title)}</h3>
        <p>${escapeHtml(promotionalCard.text)}</p>
        <p>${escapeHtml(promotionalCard.duration)}</p>
        <p>${escapeHtml(promotionalCard.invite)}</p>
      </section>
    </article>
  `;
}

function getFormState() {
  const form = byId("sessionForm");
  const fields = {};

  [...form.elements].forEach((element) => {
    if (!element.name || element.type === "file") return;

    if (element.type === "checkbox") {
      if (!fields[element.name]) fields[element.name] = [];
      if (element.checked) fields[element.name].push(element.value);
      return;
    }

    if (element.type === "radio") {
      if (element.checked) fields[element.name] = element.value;
      return;
    }

    fields[element.name] = element.value;
  });

  return {
    savedAt: new Date().toISOString(),
    selected: {
      field: selected.field,
      limit: selected.limit,
      chakras: [...selected.chakras],
    },
    reportManuallyEdited,
    fields,
  };
}

function normalizeOptionValue(value, collection, fallback = "") {
  const normalized = slug(value || "");
  const match = collection.find((item) => item.id === value || slug(item.label) === normalized);
  return match?.id || fallback;
}

function normalizeCauseValues(values = []) {
  return values
    .map((value) => {
      const normalized = slug(value || "");
      const match = causes.find((cause) => cause.id === value || slug(cause.name) === normalized);
      return match?.id || "";
    })
    .filter(Boolean);
}

function normalizeChakraValues(values = []) {
  return values
    .map((value) => {
      const normalized = slug(value || "");
      const match = chakras.find((chakra) => chakra.id === value || slug(chakra.name) === normalized);
      return match?.id || "";
    })
    .filter(Boolean);
}

function normalizeImportedState(state) {
  if (!state || typeof state !== "object") return null;

  const importedFields = state.fields && typeof state.fields === "object" ? { ...state.fields } : { ...state };
  const importedSelected = state.selected && typeof state.selected === "object" ? state.selected : {};

  const normalizedField = normalizeOptionValue(
    importedSelected.field || importedFields.campo_desequilibrio || importedFields.campo_desequilibrio_causa || importedFields.campo,
    fields,
    "emocional"
  );
  const normalizedLimit = normalizeOptionValue(
    importedSelected.limit || importedFields.tipo_limite || importedFields.tipo_limite_causa || importedFields.limite,
    limitTypes,
    "rigido"
  );

  importedFields.campo_desequilibrio = normalizedField;
  importedFields.tipo_limite = normalizedLimit;

  if (Array.isArray(importedFields.causa)) {
    importedFields.causa = normalizeCauseValues(importedFields.causa);
  }

  const chakraValues = Array.isArray(importedSelected.chakras)
    ? importedSelected.chakras
    : Array.isArray(importedFields.chakra)
      ? importedFields.chakra
      : [];

  return {
    fields: importedFields,
    selected: {
      field: normalizedField,
      limit: normalizedLimit,
      chakras: normalizeChakraValues(chakraValues),
    },
    reportManuallyEdited: Boolean(state.reportManuallyEdited),
  };
}

function applyFormState(state) {
  const normalizedState = normalizeImportedState(state);
  if (!normalizedState?.fields) return;

  const form = byId("sessionForm");
  const stateFields = normalizedState.fields;
  form.reset();

  [...form.elements].forEach((element) => {
    if (!element.name || element.type === "file") return;
    const value = stateFields[element.name];

    if (element.type === "checkbox") {
      element.checked = Array.isArray(value) && value.includes(element.value);
      return;
    }

    if (element.type === "radio") {
      element.checked = value === element.value;
      return;
    }

    element.value = value || "";
  });

  selected.field = normalizedState.selected.field;
  selected.limit = normalizedState.selected.limit;
  selected.chakras = new Set(normalizedState.selected.chakras || []);
  reportManuallyEdited = Boolean(normalizedState.reportManuallyEdited);
  syncFieldLimitRadios();

  document.querySelectorAll(".chakra-point").forEach((point) => {
    const checked = selected.chakras.has(point.dataset.chakraId);
    point.classList.toggle("is-selected", checked);
    point.setAttribute("aria-pressed", checked ? "true" : "false");
  });
  document.querySelectorAll("[data-chakra-id]").forEach((element) => {
    if (element.matches("input")) element.checked = selected.chakras.has(element.dataset.chakraId);
  });

  renderCauses();
  if (Array.isArray(stateFields.causa)) {
    document.querySelectorAll('[name="causa"]').forEach((input) => {
      input.checked = stateFields.causa.includes(input.value);
    });
  }
  renderChakraBalloons();
  syncReportPrintView();
}

function syncFieldLimitRadios() {
  document.querySelectorAll('[name="campo_desequilibrio"]').forEach((input) => {
    input.checked = input.value === selected.field;
  });
  document.querySelectorAll('[name="tipo_limite"]').forEach((input) => {
    input.checked = input.value === selected.limit;
  });
}

function autoSaveFormState() {
  localStorage.setItem(storageKey, JSON.stringify(getFormState()));
}

function loadAutosavedFormState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return;

  try {
    applyFormState(JSON.parse(raw));
  } catch (error) {
    console.warn("Não foi possível carregar o salvamento automático.", error);
  }
}

function getSuggestedFileName(suffix, extension) {
  const name = slug(getFormValue("nome") || "cliente");
  const date = getFormValue("sessao") || new Date().toISOString().slice(0, 10);
  return `registro-sessao-${name}-${date}-${suffix}.${extension}`;
}

function generateProtocolCode() {
  const sessionDate = (getFormValue("sessao") || new Date().toISOString().slice(0, 10)).replace(/-/g, "");
  const namePart = (slug(getFormValue("nome") || "cliente").slice(0, 12) || "cliente").toUpperCase();
  const contextPart = (slug(getFormValue("tema_sessao") || "consulta").slice(0, 10) || "consulta").toUpperCase();
  const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();
  const field = document.querySelector('[name="codigo_comando"]');

  if (!field) return;
  field.value = `RST-${sessionDate}-${namePart}-${contextPart}-${randomPart}`;
  autoSaveFormState();
  autoUpdateIntegrativeReport();
}

function downloadTextFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function saveDataFile(promptForName = true) {
  autoSaveFormState();
  const suggested = getSuggestedFileName("dados", "json");
  const filename = promptForName
    ? window.prompt("Nome do arquivo de dados:", suggested)
    : suggested;
  if (!filename) return false;

  const finalName = filename.toLowerCase().endsWith(".json") ? filename : `${filename}.json`;
  downloadTextFile(finalName, JSON.stringify(getFormState(), null, 2), "application/json");
  return true;
}

function loadDataFile(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      applyFormState(JSON.parse(reader.result));
      autoSaveFormState();
      window.alert("Dados carregados com sucesso.");
    } catch (error) {
      console.error("Erro ao carregar arquivo de dados.", error);
      window.alert("Não foi possível carregar este arquivo. Verifique se ele é um JSON salvo por este formulário.");
    }
  });
  reader.readAsText(file);
}

function preparePrint(filenameSuffix) {
  autoSaveFormState();
  const suggested = getSuggestedFileName(filenameSuffix, "pdf").replace(/\.pdf$/i, "");
  const filename = window.prompt("Nome sugerido para o PDF:", suggested);
  if (filename) document.title = filename;
  return Boolean(filename);
}

function saveFullFormPdf() {
  if (!preparePrint("formulario-completo")) return;
  printMode = "full";
  document.body.classList.remove("print-report-only");
  window.print();
}

function saveReportPdf() {
  if (!reportManuallyEdited) updateIntegrativeReport();
  syncReportPrintView();
  if (!preparePrint("relatorio")) return;
  printMode = "report";
  byId("reportSection").open = true;
  document.body.classList.add("print-report-only");
  window.print();
}

function saveBeforeReplacingData(actionLabel) {
  const wantsSave = window.confirm(`Antes de ${actionLabel}, deseja baixar uma cópia dos dados preenchidos?`);
  if (wantsSave) return saveDataFile(true);
  autoSaveFormState();
  return true;
}

function clearForm() {
  const confirmed = window.confirm("Limpar todos os campos preenchidos?");
  if (!confirmed) return;
  if (!saveBeforeReplacingData("limpar o formulário")) return;

  byId("sessionForm").reset();
  selected.field = "emocional";
  selected.limit = "rigido";
  syncFieldLimitRadios();
  selected.chakras.clear();
  reportManuallyEdited = false;
  document.querySelectorAll(".chakra-point").forEach((point) => {
    point.classList.remove("is-selected");
    point.setAttribute("aria-pressed", "false");
  });
  renderCauses();
  renderChakraBalloons();
  byId("integrativeReport").value = "";
  syncReportPrintView();
  autoSaveFormState();
}

function bindActions() {
  byId("clearForm").addEventListener("click", clearForm);
  byId("clearFormBottom").addEventListener("click", clearForm);
  byId("saveData").addEventListener("click", () => saveDataFile(true));
  byId("saveDataBottom").addEventListener("click", () => saveDataFile(true));
  byId("loadData").addEventListener("click", () => byId("loadDataFile").click());
  byId("loadDataFile").addEventListener("change", (event) => {
    loadDataFile(event.target.files[0]);
    event.target.value = "";
  });
  byId("printForm").addEventListener("click", saveFullFormPdf);
  byId("printFormBottom").addEventListener("click", saveFullFormPdf);
  byId("generateReport").addEventListener("click", () => {
    if (!saveBeforeReplacingData("gerar/atualizar o relatório")) return;
    updateIntegrativeReport();
    autoSaveFormState();
  });
  byId("generateProtocolCode").addEventListener("click", generateProtocolCode);
  byId("saveReportPdf").addEventListener("click", saveReportPdf);
  byId("sessionForm").addEventListener("input", (event) => {
    if (event.target.id === "integrativeReport") {
      reportManuallyEdited = true;
      syncReportPrintView();
    } else {
      autoUpdateIntegrativeReport();
    }
    autoSaveFormState();
  });
  byId("sessionForm").addEventListener("change", (event) => {
    if (event.target.id === "integrativeReport") {
      reportManuallyEdited = true;
      syncReportPrintView();
    } else {
      autoUpdateIntegrativeReport();
    }
    autoSaveFormState();
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
    document.querySelectorAll("details.bovis-scale").forEach((section) => {
      section.open = false;
    });
  });
  window.addEventListener("afterprint", () => {
    document.body.classList.remove("print-report-only");
    document.title = defaultDocumentTitle;
    printMode = "";
  });
}

renderBasicLists();
renderCauses();
renderGraphs();
renderHolisticTreatments();
renderAwakening();
bindActions();
loadAutosavedFormState();
