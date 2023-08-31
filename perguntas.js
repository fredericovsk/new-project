// Função para gerar perguntas de input tipo texto
function generateTextInputQuestion(questionText, targetId) {
  const questionDiv = document.createElement("div");
  questionDiv.innerHTML = `<label>${questionText}</label>`;

  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.name = `question${questionCount}`;
  inputField.placeholder = "Digite aqui sua resposta";

  questionDiv.appendChild(inputField);
  document.getElementById(targetId).appendChild(questionDiv);
}

// Função para gerar perguntas tipo radio com campo obrigatório
function generateRadioQuestionWithRequired(questionText, options, targetId) {
  const questionDiv = document.createElement("div");
  questionDiv.innerHTML = `<label>${questionText}</label>`;

  const requiredLabel = document.createElement("label");
  requiredLabel.innerHTML = `
      <input type="radio" name="question${questionCount}" value="required" required>
      Obrigatório
    `;
  questionDiv.appendChild(requiredLabel);

  options.forEach((option, index) => {
    const optionLabel = document.createElement("label");
    optionLabel.innerHTML = `
        <input type="radio" name="question${questionCount}" value="${index}">
        ${option}
      `;
    questionDiv.appendChild(optionLabel);
  });

  document.getElementById(targetId).appendChild(questionDiv);
}

// Função para gerar perguntas tipo radio
function generateRadioQuestion(questionText, options, targetId) {
  const questionDiv = document.createElement("div");
  questionDiv.innerHTML = `<label>${questionText}</label>`;

  options.forEach((option, index) => {
    const optionLabel = document.createElement("label");
    optionLabel.innerHTML = `
        <input type="radio" name="question${questionCount}" value="${index}">
        ${option}
      `;
    questionDiv.appendChild(optionLabel);
  });

  document.getElementById(targetId).appendChild(questionDiv);
}

// Função para gerar perguntas tipo checkbox
function generateCheckboxQuestion(questionText, options, targetId) {
  const questionDiv = document.createElement("div");
  questionDiv.innerHTML = `<label>${questionText}</label>`;

  options.forEach((option, index) => {
    const optionLabel = document.createElement("label");
    optionLabel.innerHTML = `
        <input type="checkbox" name="question${questionCount}" value="${index}">
        ${option}
      `;
    questionDiv.appendChild(optionLabel);
  });

  document.getElementById(targetId).appendChild(questionDiv);
}

// Função para gerar perguntas com dropdown
function generateDropdownQuestion(questionText, states, targetId) {
  const questionDiv = document.createElement("div");
  questionDiv.innerHTML = `<label>${questionText}</label>`;

  const dropdown = document.createElement("select");
  dropdown.name = `question${questionCount}`;

  // Ordena os estados em ordem alfabética
  const sortedStates = states.sort();

  // Adiciona a opção para cada estado
  sortedStates.forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.text = state;
    dropdown.appendChild(option);
  });

  questionDiv.appendChild(dropdown);
  document.getElementById(targetId).appendChild(questionDiv);
}

// Exemplo de uso
const states = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

// Exemplo de uso
const questionCount = 1;

// generateRadioQuestionWithRequired(
//   "Você representa algum coletivo, grupo, associação ou organização? Obrigatório",
//   ["Sim", "Não"],
//   "meuform"
// );

generateTextInputQuestion(
  "Qual o seu nome? <span class='simples'> Obrigatório?</span>",
  "meuform"
);

generateTextInputQuestion(
  "Escreve aqui teu contato (whatsapp) pra a gente se comunicar! <span class='simples'> Obrigatório</span>",
  "meuform"
);

generateTextInputQuestion(
  "Escreve aqui teu email pra a gente se comunicar! <span class='simples'> (não obrigatório)</span>",
  "meuform"
);

generateTextInputQuestion(
  "Qual é o nome do seu coletivo ou iniciativa?  <span class='simples'> Obrigatório</span>",
  "meuform"
);

generateDropdownQuestion(
  "Em qual estado vocês atuam? <span class='simples'>Obrigatório</span>",
  states,
  "meuform"
);

generateTextInputQuestion(
  "Em qual cidade vocês atuam? <span class='simples'>Obrigatório</span>",
  "meuform"
);

// Inserir um Google maps api
generateTextInputQuestion(
  "Qual o endereço local onde vocês desenvolvem as atividades? <span class='simples'>Obrigatório</span>",
  "meuform"
);

generateTextInputQuestion(
  "Há quanto tempo seu coletivo está ativo?",
  "meuform"
);

generateCheckboxQuestion(
  "Seu coletivo/inciativa desenvolve expressões como:",
  ["Música", "Dança", "Artes Visuais", "Literatura", "Outras"],
  "meuform"
);

generateRadioQuestion(
  "Essas culturas contribuem para a identidade local e nacional?",
  ["Sim", "Não"],
  "meuform"
);

generateTextInputQuestion(
  "Seu coletivo interage com a comunidade local e outras iniciativas culturais na região?",
  "meuform"
);

generateTextInputQuestion(
  "Como você acredita que o direito à cidade pode ser promovido para garantir espaços inclusivos e acessíveis para as culturas periféricas?",
  "meuform"
);

generateTextInputQuestion(
  "Vocês já realizaram parcerias ou colaborações com outras organizações ou grupos? Se sim, quais?",
  "meuform"
);

generateTextInputQuestion(
  "As culturas periféricas impactam positivamente a sociedade e as comunidades locais? De que forma?",
  "meuform"
);

generateTextInputQuestion(
  "As atividades culturais do seu coletivo promovem a conscientização, a inclusão social e a participação cidadã?",
  "meuform"
);

generateTextInputQuestion(
  "Quais são os principais desafios que seu coletivo enfrenta ao promover suas atividades culturais?",
  "meuform"
);

generateTextInputQuestion(
  "Que tipo de apoio ou recursos seriam mais úteis para o seu coletivo superar esses desafios?",
  "meuform"
);

generateTextInputQuestion(
  "Existe algo mais que você gostaria de compartilhar sobre a interseção entre culturas periféricas, direito à cidade e políticas culturais?",
  "meuform"
);

// generateRadioQuestion(
//   "Faz quantos anos que a sua organização atua na comunidade? <span class='simples'>Obrigatório</span>",
//   ["0 - 1 ano", "1 - 2 anos", "2 - 5 anos", "5 - 10 anos", "10 - 20 anos"],
//   "meuform"
// );

// generateRadioQuestion(
//   "Essa organização/coletivo possui CNPJ? <span class='simples'>Obrigatório</span>",
//   ["Sim", "Não", "Estamos em processo"],
//   "meuform"
// );

// generateCheckboxQuestion(
//   "Sua organização já acessou recursos financeiros para desenvolver as atividades? <span class='simples'>Obrigatório</span>",
//   [
//     "Sim, já acessamos recursos publicos",
//     "Sim, já acessamos recursos de empresas/organizações privadas",
//     "Sim, já acessamos recursos de organizações sem fins lucrativos",
//     "Não, nunca acessamos recursos",
//   ],
//   "meuform"
// );
