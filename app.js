const bovisRuler = document.querySelector("#bovisRuler");
const readingGrid = document.querySelector("#readingGrid");
const chakraList = document.querySelector("#chakraList");
const report = document.querySelector("#report");
const infoDialog = document.querySelector("#infoDialog");
const dialogType = document.querySelector("#dialogType");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogText = document.querySelector("#dialogText");
const closeDialog = document.querySelector("#closeDialog");
const copyReport = document.querySelector("#copyReport");
const downloadPdf = document.querySelector("#downloadPdf");

const state = {
  readings: {},
  chakras: {},
};

const readings = [
  {
    id: "fisico",
    label: "Campo físico",
    description:
      "Na leitura radiestésica, o campo físico expressa a vitalidade do corpo denso e sua capacidade de sustentar energia no cotidiano. Pode revelar desgaste, sobrecarga, drenagem ou recuperação energética. Quando harmonizado, favorece presença, disposição e estabilidade no mundo material.",
  },
  {
    id: "mental",
    label: "Campo mental",
    description:
      "O campo mental está associado ao padrão dos pensamentos, crenças, foco e clareza interna. Pela tradição esotérica, interferências nesse campo podem indicar preocupação excessiva, rigidez, confusão ou repetição de formas-pensamento. Em equilíbrio, apoia discernimento e escolhas conscientes.",
  },
  {
    id: "emocional",
    label: "Campo emocional",
    description:
      "O campo emocional reflete a circulação dos sentimentos e a forma como a pessoa processa vínculos, memórias e afetos. Na radiestesia, pode apontar cargas acumuladas, oscilações, bloqueios ou sensibilidades abertas. Harmonizado, favorece acolhimento, fluidez e expressão autêntica.",
  },
  {
    id: "espiritual",
    label: "Campo espiritual",
    description:
      "O campo espiritual representa a conexão com propósito, intuição, ancestralidade e planos sutis de consciência. Em leituras esotéricas, desequilíbrios podem sugerir afastamento da própria direção ou fragilidade de proteção. Quando fortalecido, amplia sentido, confiança e alinhamento interior.",
  },
  {
    id: "vitalidadeGeral",
    label: "Vitalidade geral",
    description:
      "Síntese da força vital percebida no momento do atendimento.",
  },
  {
    id: "ambientePessoal",
    label: "Vitalidade do ambiente pessoal",
    description:
      "Leitura energética do ambiente íntimo, familiar ou residencial.",
  },
  {
    id: "ambienteProfissional",
    label: "Vitalidade do ambiente profissional",
    description:
      "Leitura energética do ambiente de trabalho, trocas profissionais e rotina produtiva.",
  },
];

const bovisScale = [
  {
    min: 0,
    max: 3000,
    range: "0 a 3.000",
    zone: "Zona crítica e de desgaste",
    title: "Energia extremamente baixa",
    description:
      "Indica forte desequilíbrio, doença crônica ou ambientes altamente nocivos.",
  },
  {
    min: 3001,
    max: 5999,
    range: "3.001 a 5.999",
    zone: "Zona crítica e de desgaste",
    title: "Energia debilitada",
    description:
      "Mostra cansaço, sistema imunológico frágil ou alimentos de baixa qualidade energética.",
  },
  {
    min: 6000,
    max: 7000,
    range: "6.000 a 7.000",
    zone: "Zona saudável e de equilíbrio",
    title: "Nível saudável básico",
    description:
      "Indica vitalidade normal, corpo em equilíbrio e bom funcionamento do organismo.",
  },
  {
    min: 7001,
    max: 8000,
    range: "7.001 a 8.000",
    zone: "Zona saudável e de equilíbrio",
    title: "Vitalidade ideal",
    description:
      "Mostra energia física excelente, boa resistência e bem-estar geral.",
  },
  {
    min: 8001,
    max: 10000,
    range: "8.001 a 10.000",
    zone: "Zona de alta vibração e expansão",
    title: "Energia elevada",
    description:
      "Comum em locais com natureza preservada, alimentos orgânicos frescos ou pessoas em estado de meditação.",
  },
  {
    min: 10001,
    max: Infinity,
    range: "Acima de 10.000",
    zone: "Zona de alta vibração e expansão",
    title: "Vibração espiritual superior",
    description:
      "Indica locais sagrados, objetos altamente magnetizados ou forte conexão mental.",
  },
];

const chakras = [
  {
    id: "coroa",
    name: "Coronário",
    color: "#8e5ab8",
    description:
      "Relacionado à espiritualidade, fé, sentido de vida e abertura para planos superiores de consciência. Em desequilíbrio, pode sugerir desconexão, falta de propósito ou excesso de abstração.",
  },
  {
    id: "frontal",
    name: "Frontal",
    color: "#344c9c",
    description:
      "Associado à intuição, percepção sutil, visão interior e clareza simbólica. Quando desalinhado, pode indicar confusão, dificuldade de confiar na própria percepção ou excesso de controle mental.",
  },
  {
    id: "laringeo",
    name: "Laríngeo",
    color: "#3f9fc2",
    description:
      "Liga-se à comunicação, verdade pessoal, escuta e expressão criativa. Em desequilíbrio, pode aparecer como silêncio excessivo, fala impulsiva ou dificuldade de manifestar necessidades.",
  },
  {
    id: "cardiaco",
    name: "Cardíaco",
    color: "#5aa85c",
    description:
      "Representa amor, compaixão, vínculos, perdão e capacidade de troca afetiva. Desequilíbrios podem apontar fechamento, carência, mágoas retidas ou dificuldade de receber.",
  },
  {
    id: "plexoSolar",
    name: "Plexo solar",
    color: "#d7ad36",
    description:
      "Relaciona-se à vontade, autoestima, poder pessoal e digestão energética das experiências. Quando instável, pode indicar insegurança, controle, raiva contida ou perda de direção.",
  },
  {
    id: "umbilical",
    name: "Umbilical",
    color: "#d97835",
    description:
      "Associado ao prazer, criatividade, sexualidade, sensibilidade e fluxo da vida. Em desequilíbrio, pode sugerir culpa, bloqueio criativo, dependência afetiva ou dificuldade de permitir prazer.",
  },
  {
    id: "basico",
    name: "Básico / raiz",
    color: "#b93e3e",
    description:
      "Conecta-se à segurança, enraizamento, sobrevivência, corpo e pertencimento. Desequilíbrios podem indicar medo, instabilidade, falta de presença ou sensação de não estar sustentada.",
  },
];

function showInfo(type, title, text) {
  dialogType.textContent = type;
  dialogTitle.textContent = title;
  dialogText.textContent = text;
  infoDialog.showModal();
}

function getBovisScaleInfo(value) {
  const number = Number(value);

  if (!number) return null;

  return bovisScale.find((item) => number >= item.min && number <= item.max);
}

function formatBovisScaleText(value) {
  const scale = getBovisScaleInfo(value);

  if (!scale) return "Informe um número para ver a leitura da escala Bovis.";

  return `${scale.zone} | ${scale.range}: ${scale.title}. ${scale.description}`;
}

function renderBovisRuler() {
  const majorTicks = Array.from({ length: 13 }, (_, index) => index * 1000);
  const minorTicks = Array.from({ length: 49 }, (_, index) => index * 250);

  bovisRuler.innerHTML = `
    <div class="ruler-title">BIÔMETRO DE BOVIS</div>
    <div class="ruler-track">
      ${minorTicks
        .map(
          (value) =>
            `<span class="minor-tick" style="left:${(value / 12000) * 100}%"></span>`,
        )
        .join("")}
      ${majorTicks
        .map(
          (value) => `
            <button
              class="major-tick"
              style="left:${(value / 12000) * 100}%"
              type="button"
              data-bovis-value="${value || 1}"
              title="Clique para ver a descrição"
            >
              <span>${value.toLocaleString("pt-BR")}</span>
            </button>
          `,
        )
        .join("")}
    </div>
    <div class="ruler-zones">
      ${bovisScale
        .map(
          (item) => `
            <button class="zone-pill" type="button" data-zone-value="${item.min || 1}">
              <strong>${item.range}</strong>
              <span>${item.title}</span>
            </button>
          `,
        )
        .join("")}
    </div>
  `;

  bovisRuler.querySelectorAll("[data-bovis-value]").forEach((button) => {
    button.addEventListener("click", () => {
      const scale = getBovisScaleInfo(button.dataset.bovisValue);
      showInfo("Escala de Bovis", `${scale.range} - ${scale.title}`, scale.description);
    });
  });

  bovisRuler.querySelectorAll("[data-zone-value]").forEach((button) => {
    button.addEventListener("click", () => {
      const scale = getBovisScaleInfo(button.dataset.zoneValue);
      showInfo("Escala de Bovis", `${scale.range} - ${scale.title}`, scale.description);
    });
  });
}

function renderReadingFields() {
  readingGrid.innerHTML = "";

  readings.forEach((reading) => {
    const field = document.createElement("label");
    field.className = "reading-field";
    field.innerHTML = `
      <span class="reading-label">
        ${reading.label}
        <button class="inline-info" type="button" aria-label="Ver explicação sobre ${reading.label}">?</button>
      </span>
      <input class="reading-input" data-reading="${reading.id}" type="number" min="0" max="30000" step="50" placeholder="Ex: 8500" />
      <span class="scale-feedback" data-scale-feedback="${reading.id}">
        Informe um número para ver a leitura da escala Bovis.
      </span>
    `;

    field.querySelector(".inline-info").addEventListener("click", (event) => {
      event.preventDefault();
      showInfo("Diagnóstico radiestésico", reading.label, reading.description);
    });

    readingGrid.append(field);
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
    `;

    item.title = chakra.description;
    item.addEventListener("mouseenter", () => {
      document.querySelector(`[data-chakra="${chakra.id}"]`).classList.add("preview");
    });
    item.addEventListener("mouseleave", () => {
      document.querySelector(`[data-chakra="${chakra.id}"]`).classList.remove("preview");
    });

    item.querySelector("input").addEventListener("change", (event) => {
      setChakraSelection(chakra.id, event.target.checked);
    });

    chakraList.append(item);
  });

  document.querySelectorAll("[data-chakra]").forEach((button) => {
    const chakra = chakras.find((item) => item.id === button.dataset.chakra);
    button.setAttribute("aria-label", `${chakra.name}: clique para marcar desequilíbrio`);
    button.title = chakra.description;
    button.addEventListener("click", () => {
      setChakraSelection(chakra.id, !state.chakras[chakra.id]);
      showInfo("Chakra", chakra.name, chakra.description);
    });
  });
}

function setChakraSelection(id, selected) {
  state.chakras[id] = selected;
  document.querySelector(`[data-chakra-check="${id}"]`).checked = selected;
  document.querySelector(`[data-chakra="${id}"]`).classList.toggle("selected", selected);
  updateReport();
}

function updateFeedback() {
  document.querySelectorAll("[data-scale-feedback]").forEach((feedback) => {
    feedback.textContent = formatBovisScaleText(
      state.readings[feedback.dataset.scaleFeedback],
    );
  });
}

function getReadingLine(reading) {
  const value = state.readings[reading.id];
  const valueText = value ? `${Number(value).toLocaleString("pt-BR")} Bovis` : "não informado";
  return `${reading.label}: ${valueText}`;
}

function getChakraLine(chakra) {
  return `- ${chakra.name}`;
}

function getMainBovisInsights() {
  return readings
    .map((reading) => {
      const value = state.readings[reading.id];
      const scale = getBovisScaleInfo(value);

      if (!scale) return null;

      return {
        label: reading.label,
        value: Number(value).toLocaleString("pt-BR"),
        title: scale.title,
        zone: scale.zone.toLowerCase(),
        description: scale.description,
      };
    })
    .filter(Boolean);
}

function formatInsightList(items, includeTitle = false) {
  return items
    .map((item) => {
      const title = includeTitle ? `, ${item.title.toLowerCase()}` : "";
      return `${item.label} (${item.value} Bovis${title})`;
    })
    .join(", ");
}

function createSynthesis(selectedChakras) {
  const insights = getMainBovisInsights();

  if (!insights.length && !selectedChakras.length) {
    return "Ainda não há dados suficientes para uma síntese. Informe as medições de Bovis e marque os chakras em desequilíbrio para gerar uma leitura integrada.";
  }

  const critical = insights.filter((item) => item.zone.includes("crítica"));
  const balanced = insights.filter((item) => item.zone.includes("saudável"));
  const expanded = insights.filter((item) => item.zone.includes("alta vibração"));
  const chakraNames = selectedChakras.map((chakra) => chakra.name).join(", ");
  const lines = [];

  if (critical.length) {
    const singular = critical.length === 1;
    lines.push(
      singular
        ? `A leitura mais sensível aparece em ${formatInsightList(critical, true)}. Esse ponto sugere desgaste energético e pede acolhimento, limpeza, reorganização e fortalecimento gradual.`
        : `As leituras mais sensíveis aparecem em ${formatInsightList(critical, true)}. Esse conjunto sugere pontos de desgaste energético que pedem acolhimento, limpeza, reorganização e fortalecimento gradual.`,
    );
  }

  if (balanced.length) {
    const singular = balanced.length === 1;
    lines.push(
      singular
        ? `O campo em faixa saudável é ${formatInsightList(balanced)}. Ele indica uma base de equilíbrio que pode sustentar o processo terapêutico e ajudar na recuperação dos pontos mais frágeis.`
        : `Os campos em faixa saudável são ${formatInsightList(balanced)}. Eles indicam bases de equilíbrio que podem sustentar o processo terapêutico e ajudar na recuperação dos pontos mais frágeis.`,
    );
  }

  if (expanded.length) {
    const singular = expanded.length === 1;
    lines.push(
      singular
        ? `A leitura mais elevada surge em ${formatInsightList(expanded, true)}. Essa área mostra potencial de expansão, conexão e melhor resposta vibracional no momento da consulta.`
        : `As leituras mais elevadas surgem em ${formatInsightList(expanded, true)}. Essas áreas mostram potencial de expansão, conexão e melhor resposta vibracional no momento da consulta.`,
    );
  }

  if (selectedChakras.length) {
    lines.push(
      `Os chakras marcados em desequilíbrio foram: ${chakraNames}. Pela leitura integrada, esses centros podem indicar onde as informações radiestésicas estão se expressando com maior intensidade no corpo energético da cliente.`,
    );
    lines.push(
      `Síntese dos chakras selecionados: ${selectedChakras
        .map((chakra) => `${chakra.name}: ${chakra.description}`)
        .join(" ")}`,
    );
  } else {
    lines.push(
      "Nenhum chakra foi marcado em desequilíbrio. A síntese fica concentrada nas medições radiestésicas informadas e na observação terapêutica do atendimento.",
    );
  }

  return lines.join("\n\n");
}

function updateReport() {
  const name = document.querySelector("#clientName").value || "Cliente";
  const date = document.querySelector("#sessionDate").value || "data não informada";
  const theme = document.querySelector("#sessionTheme").value || "tema não informado";
  const notes = document.querySelector("#notes").value.trim();
  const selectedChakras = chakras.filter((chakra) => state.chakras[chakra.id]);

  report.textContent = `RELATÓRIO DE ATENDIMENTO INTEGRATIVO

Cliente: ${name}
Data: ${date}
Tema principal: ${theme}

1. Diagnóstico radiestésico
${readings.map(getReadingLine).join("\n")}

2. Chakras em desequilíbrio
${
  selectedChakras.length
    ? selectedChakras.map(getChakraLine).join("\n")
    : "Nenhum chakra marcado como desequilibrado."
}

3. Síntese interpretativa
${createSynthesis(selectedChakras)}

4. Observações terapêuticas
${notes || "Sem observações adicionais."}

Nota: este relatório é uma ferramenta simbólica e integrativa de apoio ao atendimento. Não substitui avaliação médica, psicológica ou outro cuidado profissional necessário.`;
}

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-reading]")) {
    state.readings[event.target.dataset.reading] = event.target.value;
    updateFeedback();
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

  copyReport.textContent = "Relatório copiado";
  setTimeout(() => {
    copyReport.textContent = "Copiar relatório";
  }, 1800);
});

downloadPdf.addEventListener("click", () => {
  document.title = "Relatório de Atendimento Integrativo";
  window.print();
});

renderBovisRuler();
renderReadingFields();
renderChakras();
updateFeedback();
updateReport();
