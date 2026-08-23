const chakras = [
  "Básico",
  "Sacral",
  "Plexo Solar",
  "Cardíaco",
  "Laríngeo",
  "Terceiro Olho",
  "Coronário",
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

const selected = {
  field: "",
  limit: "",
};

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

function renderBasicLists() {
  const chakraList = byId("chakraList");
  chakras.forEach((chakra) => {
    chakraList.appendChild(makeCheckbox("chakra", chakra, chakra));
  });

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
      button.addEventListener("click", () => openModal(cause));
      list.appendChild(makeCheckbox("causa", cause.name, cause.name, button));
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
      items.appendChild(makeCheckbox(`grafico_${slug(group.name)}`, item, item));
    });

    section.append(title, typeChoice, items);
    container.appendChild(section);
  });
}

function renderAwakening() {
  const container = byId("awakeningList");
  awakeningItems.forEach((item) => {
    container.appendChild(makeCheckbox("despertar", item, item));
  });
}

function openModal(cause) {
  byId("modalKicker").textContent = `${getLabel(fields, cause.field)} - Limite ${getLabel(limitTypes, cause.limit)}`;
  byId("modalTitle").textContent = cause.name;
  byId("modalDescription").textContent = cause.description;
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

function clearForm() {
  const confirmed = window.confirm("Limpar todos os campos preenchidos?");
  if (!confirmed) return;

  byId("sessionForm").reset();
  selected.field = "";
  selected.limit = "";
  renderCauses();
}

function bindActions() {
  byId("clearForm").addEventListener("click", clearForm);
  byId("clearFormBottom").addEventListener("click", clearForm);
  byId("printForm").addEventListener("click", () => window.print());
  byId("printFormBottom").addEventListener("click", () => window.print());
  byId("closeModal").addEventListener("click", closeModal);
  byId("infoModal").addEventListener("click", (event) => {
    if (event.target === byId("infoModal")) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

renderBasicLists();
renderCauses();
renderGraphs();
renderAwakening();
bindActions();
