const diagnosticGrid = document.querySelector("#diagnosticGrid");
const chakraList = document.querySelector("#chakraList");
const report = document.querySelector("#report");
const infoDialog = document.querySelector("#infoDialog");
const dialogType = document.querySelector("#dialogType");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogText = document.querySelector("#dialogText");
const closeDialog = document.querySelector("#closeDialog");
const copyReport = document.querySelector("#copyReport");

const state = {
  readings: {},
  chakras: {},
};

const fields = [
  {
    id: "fisico",
    name: "Campo fisico",
    description:
      "Na leitura radiestesica, o campo fisico expressa a vitalidade do corpo denso e sua capacidade de sustentar energia no cotidiano. Ele pode revelar sinais sutis de desgaste, sobrecarga, drenagem ou recuperacao energetica. Quando harmonizado, favorece presenca, disposicao e maior estabilidade para agir no mundo material.",
  },
  {
    id: "mental",
    name: "Campo mental",
    description:
      "O campo mental e associado ao padrao dos pensamentos, crenças, foco e clareza interna. Pela tradicao esoterica, interferencias nesse campo podem indicar excesso de preocupacao, rigidez, confusao ou repeticao de formas-pensamento. Em equilibrio, apoia discernimento, organizacao e capacidade de escolher com consciencia.",
  },
  {
    id: "emocional",
    name: "Campo emocional",
    description:
      "O campo emocional reflete a circulacao dos sentimentos e a maneira como a pessoa processa vinculos, memorias e afetos. Na radiestesia, pode apontar acumulacao de cargas, oscilacoes, bloqueios ou sensibilidades abertas. Sua harmonizacao favorece acolhimento, fluidez, seguranca interna e expressao mais autentica.",
  },
  {
    id: "espiritual",
    name: "Campo espiritual",
    description:
      "O campo espiritual representa a conexao com proposito, intuicao, ancestralidade e planos sutis de consciencia. Em leituras esotericas, desequilibrios podem sugerir afastamento da propria direcao, fragilidade de protecao ou desconexao simbolica. Quando fortalecido, amplia sentido, confianca e alinhamento com a jornada pessoal.",
  },
];

const vitalityLabels = {
  vitalidadeGeral: "Vitalidade geral",
  ambientePessoal: "Vitalidade do ambiente pessoal",
  ambienteProfissional: "Vitalidade do ambiente profissional",
};

const bovisScale = [
  {
    min: 0,
    max: 3000,
    zone: "Zona critica e de desgaste",
    range: "0 a 3.000",
    title: "Energia extremamente baixa",
    description:
      "Indica forte desequilibrio, doenca cronica ou ambientes altamente nocivos.",
  },
  {
    min: 3001,
    max: 5999,
    zone: "Zona critica e de desgaste",
    range: "3.001 a 5.999",
    title: "Energia debilitada",
    description:
      "Mostra cansaco, sistema imunologico fragil ou alimentos de baixa qualidade energetica.",
  },
  {
    min: 6000,
    max: 7000,
    zone: "Zona saudavel e de equilibrio",
    range: "6.000 a 7.000",
    title: "Nivel saudavel basico",
    description:
      "Indica vitalidade normal, corpo em equilibrio e bom funcionamento do organismo.",
  },
  {
    min: 7001,
    max: 8000,
    zone: "Zona saudavel e de equilibrio",
    range: "7.001 a 8.000",
    title: "Vitalidade ideal",
    description:
      "Mostra energia fisica excelente, boa resistencia e bem-estar geral.",
  },
  {
    min: 8001,
    max: 10000,
    zone: "Zona de alta vibracao e expansao",
    range: "8.001 a 10.000",
    title: "Energia elevada",
    description:
      "Comum em locais com natureza preservada, alimentos organicos frescos ou pessoas em estado de meditacao.",
  },
  {
    min: 10001,
    max: Infinity,
    zone: "Zona de alta vibracao e expansao",
    range: "Acima de 10.000",
    title: "Vibracao espiritual superior",
    description:
      "Indica locais sagrados, objetos altamente magnetizados ou forte conexao mental.",
  },
];

const chakras = [
  {
    id: "coroa",
    name: "Chakra coronario",
    color: "#8e5ab8",
    description:
      "Relacionado a espiritualidade, fe, sentido de vida e abertura para planos superiores de consciencia. Em desequilibrio, pode sugerir desconexao, falta de proposito ou excesso de abstracao.",
  },
  {
    id: "frontal",
    name: "Chakra frontal",
    color: "#344c9c",
    description:
      "Associado a intuicao, percepcao sutil, visao interior e clareza simbolica. Quando desalinhado, pode indicar confusao, dificuldade de confiar na propria percepcao ou excesso de controle mental.",
  },
  {
    id: "laringeo",
    name: "Chakra laringeo",
    color: "#3f9fc2",
    description:
      "Liga-se a comunicacao, verdade pessoal, escuta e expressao criativa. Em desequilibrio, pode aparecer como silencio excessivo, fala impulsiva ou dificuldade de manifestar necessidades.",
  },
  {
    id: "cardiaco",
    name: "Chakra cardiaco",
    color: "#5aa85c",
    description:
      "Representa amor, compaixao, vinculos, perdao e capacidade de troca afetiva. Desequilibrios podem apontar fechamento, carencia, magoas retidas ou dificuldade de receber.",
  },
  {
    id: "plexoSolar",
    name: "Chakra do plexo solar",
    color: "#d7ad36",
    description:
      "Relaciona-se a vontade, autoestima, poder pessoal e digestao energetica das experiencias. Quando instavel, pode indicar inseguranca, controle, raiva contida ou perda de direcao.",
  },
  {
    id: "sacro",
    name: "Chakra sacro",
    color: "#d97835",
    description:
      "Associado ao prazer, criatividade, sexualidade, sensibilidade e fluxo da vida. Em desequilibrio, pode sugerir culpa, bloqueio criativo, dependencia afetiva ou dificuldade de permitir prazer.",
  },
  {
    id: "basico",
    name: "Chakra basico",
    color: "#b93e3e",
    description:
      "Conecta-se a seguranca, enraizamento, sobrevivencia, corpo e pertencimento. Desequilibrios podem indicar medo, instabilidade, falta de presenca ou sensacao de nao estar sustentada.",
  },
];

function showInfo(type, title, text) {
  dialogType.textContent = type;
  dialogTitle.textContent = title;
  dialogText.textContent = text;
  infoDialog.showModal();
}

function getReadingLabel(value) {
  const scale = getBovisScaleInfo(value);

  return scale ? scale.title : "nao informado";
}

function getBovisScaleInfo(value) {
  const number = Number(value);

  if (!number) return null;

  return bovisScale.find((item) => number >= item.min && number <= item.max);
}

function formatBovisScaleText(value) {
  const scale = getBovisScaleInfo(value);

  if (!scale) return "Informe um numero para ver a leitura da escala Bovis.";

  return `${scale.zone} | ${scale.range}: ${scale.title}. ${scale.description}`;
}

function getBovisScaleGuide() {
  return bovisScale
    .map(
      (item) =>
        `${item.zone} - ${item.range}: ${item.title}. ${item.description}`,
    )
    .join("\n");
}

function getAngle(value) {
  const number = Math.max(0, Math.min(Number(value) || 0, 30000));
  return -82 + (number / 30000) * 164;
}

function renderDiagnosticCards() {
  diagnosticGrid.innerHTML = "";

  fields.forEach((field) => {
    const card = document.createElement("article");
    card.className = "field-card";
    card.innerHTML = `
      <div class="field-header">
        <div>
          <p class="eyebrow">Corpo energetico</p>
          <h3>${field.name}</h3>
          <p class="field-description">${field.description}</p>
        </div>
        <button class="info-button" type="button" aria-label="Ver explicacao sobre ${field.name}">?</button>
      </div>
      <div class="bovis-meter" data-meter="${field.id}">
        <div class="meter-labels">
          <span>0</span>
          <span>15.000</span>
          <span>30.000</span>
        </div>
        <span class="meter-arc"></span>
        <span class="meter-needle"></span>
        <span class="meter-center"></span>
        <span class="meter-value">Nao informado</span>
      </div>
      <label>
        Numero medido no Biometro de Bovis
        <input class="reading-input" data-reading="${field.id}" type="number" min="0" max="30000" step="50" placeholder="Ex: 8500" />
      </label>
      <p class="scale-feedback" data-scale-feedback="${field.id}">Informe um numero para ver a leitura da escala Bovis.</p>
    `;

    card.querySelector(".info-button").addEventListener("click", () => {
      showInfo("Diagnostico radiestesico", field.name, field.description);
    });

    diagnosticGrid.append(card);
  });
}

function renderChakras() {
  chakraList.innerHTML = "";

  chakras.forEach((chakra) => {
    const item = document.createElement("label");
    item.className = "chakra-item";
    item.innerHTML = `
      <input type="checkbox" data-chakra-check="${chakra.id}" />
      <span class="chakra-dot" style="background:${chakra.color}"></span>
      <span class="chakra-name">${chakra.name}</span>
      <button class="info-button" type="button" aria-label="Ver explicacao sobre ${chakra.name}">?</button>
    `;

    item.querySelector("input").addEventListener("change", (event) => {
      state.chakras[chakra.id] = event.target.checked;
      document
        .querySelector(`[data-chakra="${chakra.id}"]`)
        .classList.toggle("selected", event.target.checked);
      updateReport();
    });

    item.querySelector(".info-button").addEventListener("click", (event) => {
      event.preventDefault();
      showInfo("Chakra", chakra.name, chakra.description);
    });

    chakraList.append(item);
  });

  document.querySelectorAll("[data-chakra]").forEach((button) => {
    const chakra = chakras.find((item) => item.id === button.dataset.chakra);
    button.setAttribute("aria-label", chakra.name);
    button.addEventListener("click", () => {
      const checkbox = document.querySelector(`[data-chakra-check="${chakra.id}"]`);
      checkbox.checked = !checkbox.checked;
      checkbox.dispatchEvent(new Event("change"));
      showInfo("Chakra", chakra.name, chakra.description);
    });
  });
}

function updateMeters() {
  document.querySelectorAll("[data-meter]").forEach((meter) => {
    const id = meter.dataset.meter;
    const value = state.readings[id];
    meter.style.setProperty("--angle", `${getAngle(value)}deg`);
    meter.querySelector(".meter-value").textContent = value
      ? `${Number(value).toLocaleString("pt-BR")} Bovis`
      : "Nao informado";
  });

  document.querySelectorAll("[data-scale-feedback]").forEach((feedback) => {
    feedback.textContent = formatBovisScaleText(
      state.readings[feedback.dataset.scaleFeedback],
    );
  });
}

function getFieldLine(field) {
  const value = state.readings[field.id];
  const valueText = value ? `${Number(value).toLocaleString("pt-BR")} Bovis` : "nao informado";
  return `${field.name}: ${valueText} - ${formatBovisScaleText(value)}`;
}

function updateReport() {
  const name = document.querySelector("#clientName").value || "Cliente";
  const date = document.querySelector("#sessionDate").value || "data nao informada";
  const theme = document.querySelector("#sessionTheme").value || "tema nao informado";
  const notes = document.querySelector("#notes").value.trim();
  const selectedChakras = chakras.filter((chakra) => state.chakras[chakra.id]);

  const vitalityLines = Object.entries(vitalityLabels).map(([id, label]) => {
    const value = state.readings[id];
    const valueText = value ? `${Number(value).toLocaleString("pt-BR")} Bovis` : "nao informado";
    return `${label}: ${valueText} - ${formatBovisScaleText(value)}`;
  });

  report.textContent = `RELATORIO DE ATENDIMENTO INTEGRATIVO

Cliente: ${name}
Data: ${date}
Tema principal: ${theme}

1. Diagnostico radiestesico
${fields.map(getFieldLine).join("\n")}

2. Vitalidade e ambientes
${vitalityLines.join("\n")}

3. Nova escala baseada em Bovis
${getBovisScaleGuide()}

4. Chakras em desequilibrio
${
  selectedChakras.length
    ? selectedChakras.map((chakra) => `- ${chakra.name}: ${chakra.description}`).join("\n")
    : "Nenhum chakra marcado como desequilibrado."
}

5. Observacoes terapeuticas
${notes || "Sem observacoes adicionais."}

Nota: este relatorio e uma ferramenta simbolica e integrativa de apoio ao atendimento. Nao substitui avaliacao medica, psicologica ou outro cuidado profissional necessario.`;
}

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-reading]")) {
    state.readings[event.target.dataset.reading] = event.target.value;
    updateMeters();
  }

  updateReport();
});

closeDialog.addEventListener("click", () => infoDialog.close());

copyReport.addEventListener("click", async () => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(report.textContent);
  } else {
    const temporaryText = document.createElement("textarea");
    temporaryText.value = report.textContent;
    document.body.append(temporaryText);
    temporaryText.select();
    document.execCommand("copy");
    temporaryText.remove();
  }

  copyReport.textContent = "Relatorio copiado";
  setTimeout(() => {
    copyReport.textContent = "Copiar relatorio";
  }, 1800);
});

renderDiagnosticCards();
renderChakras();
updateMeters();
updateReport();
