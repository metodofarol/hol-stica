# Registro de Sessão terapêutica

Aplicação estática em HTML, CSS e JavaScript para registrar uma sessão radiônica.

## Recursos

- Identificação com nome, terapeuta, data de nascimento e data da sessão.
- Campo de tema da sessão / questão principal, usado somente quando houver base para interpretação integrativa.
- Tabela Bovis para os campos físico, mental, emocional, espiritual, vitalidade geral, ambiente pessoal e ambiente de trabalho, com medição inicial e medição após a sessão.
- Régua descritiva Bovis com faixas de referência, considerando 6.000 Å ou mais como saudável.
- Caixas do formulário recolhíveis e expansíveis.
- Seções fechadas por padrão, para navegação mais compacta.
- Seleção de Chakra, Campo do desequilíbrio e Tipo de limite.
- Boneco dos chakras com cores correspondentes, marcação de desequilíbrio e balões explicativos.
- Lógica dinâmica Campo -> Limite -> Causa.
- Causas clicáveis com modal explicativo.
- Avisos de clique ou passagem do mouse nos itens com informação adicional.
- Textos explicativos condensados para causas dos campos emocional e mental.
- Tratamento radiônico com geometrias sagradas: Harmonia, Limpeza, Proteção, Psicoemocional e Vitalidade, com popups explicativos e imagens ilustrativas.
- Outros tratamentos holísticos identificados pela radiestesia, incluindo Tarô, com campo para detalhar a terapêutica.
- Seção Despertar.
- Registro da sessão com testemunhos, intenção, código reutilizável do comando/protocolo, observações, tempo de tratamento e nova aferição.
- Botão para gerar um código individual por consulta, facilitando reaplicação, adaptação e comparação do protocolo em contextos diferentes.
- Relatório automático - gerado com base nos dados e fontes fornecidas pelo terapeuta, editável e dividido em seções.
- Prévia visual do relatório para o cliente, com resumo integrado de chakra, campo e causa, além de imagens e descrições dos gráficos selecionados.
- Tabela Bovis compacta no relatório, com campo e valor.
- Alerta Bovis abaixo da tabela para campos com valor abaixo de 6.000.
- Card institucional ao final do relatório, apresentando radiestesia, Reiki, Tarô, escrita criativa/terapêutica e a recomendação de reconsulta/reenergização em 28 dias.
- Opção para salvar o relatório em PDF.
- Salvamento automático no navegador para evitar perda de dados.
- Opção para baixar e carregar os dados preenchidos em arquivo `.json`.
- Carregamento compatível com arquivos salvos em versões anteriores do formulário, quando os campos puderem ser reconhecidos.
- Opção para salvar o formulário completo em PDF e o relatório/resumo em PDF separado.
- Botões para limpar e imprimir/salvar em PDF.
- Layout responsivo para celular, tablet e desktop.

## Como usar

Abra o arquivo `index.html` no navegador. Para salvar em PDF, use o botão **Imprimir / salvar PDF** e escolha a opção de salvar como PDF no navegador.

## Publicação no GitHub Pages

Envie `index.html`, `styles.css`, `app.js`, `README.md`, `.gitignore` e `vercel.json` para um repositório no GitHub. Depois, ative o GitHub Pages usando a branch principal e a pasta raiz.

## Observação

Os textos explicativos foram condensados a partir do material fornecido para organização do formulário. Antes de publicar publicamente, verifique se há alguma restrição de uso do conteúdo original.
