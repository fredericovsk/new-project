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

generateRadioQuestion(
  "Você integra algum coletivo ou iniciativa relacionada à área da cultura?",
  ["Sim", "Não"],
  "meuform"
);

// Limitar à 20 letras
generateTextInputQuestion(
  "Qual a primeira palavra que vem a cabeça ao pensar em cultura e cidade?",
  "meuform"
);

generateCheckboxQuestion(
  "Ao pensar em Cultura Popular Urbana, com o que mais você a relaciona?",
  [
    "Bailes funks",
    "Festas juninas",
    "Shows gratuitos em praças",
    "Grupos culturais urbanos como grafites, danças urbanas",
    "Festivais de alimentos e bebidas",
    "Festas religiosas",
    "outros",
  ],
  "meuform"
);

generateRadioQuestion(
  "Voce já ouviu falar no termo reforma Urbana, o que vc imagina que seja isso?",
  ["Sim", "Não"],
  "meuform"
  // ADICIONAR UM INPUT PARA ESCREVER O QUE A PESSOA ACHA
);

generateTextInputQuestion(
  "Sobre o tema de cidade e cultura, que tipo de diretriz deveria ser estabelecida para ser incorporda num futuro plano nacional de cultura?",
  "meuform"
);

generateTextInputQuestion(
  "Sobre o tema de valorizaçao das culturas periféricas, que tipo de diretriz deveria ser estabelecida para ser incorporda num futuro plano nacional de cultura?",
  "meuform"
);

generateTextInputQuestion(
  "Sobre o tema de apoio à conservação e e memória dos centros históricos, que diretriz deveria ser estabelecida para ser incorporda num futuro plano nacional de cultura?",
  "meuform"
);

generateTextInputQuestion(
  "Sobre resolver problema da ausencia de mobilidade adequada para acessar equipamentos culturais, como a cultura pode auxiliar nisso?",
  "meuform"
);

generateTextInputQuestion(
  "Como a questão da segurança alimentar se relaciona com a cultura?",
  "meuform"
);

generateTextInputQuestion(
  "A rua ocupada e cheia de atividades culturais traz mais segurança para as pessoas?",
  "meuform"
);

