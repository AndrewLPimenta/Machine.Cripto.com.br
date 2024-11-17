function togglePasswordVisibility(inputId, iconId) {
  const passwordField = document.getElementById(inputId);
  const icon = document.getElementById(iconId);

  if (passwordField.type === "password") {
    passwordField.type = "text"; // Exibe a senha
    icon.textContent = "visibility"; // Muda o ícone para "olho aberto"
  } else {
    passwordField.type = "password"; // Oculta a senha
    icon.textContent = "visibility_off"; // Muda o ícone para "olho fechado"
  }
}

// Função para simular o envio de dados ao banco de dados
function submitForm(event) {
  event.preventDefault(); // Previne o envio do formulário para não recarregar a página

  const name = document.getElementById("Name").value;
  const phone = document.getElementById("phone").value;
  const cep = document.getElementById("cep").value;
  const renda = document.getElementById("renda").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const cripto = document.querySelector('input[name="cripto"]:checked')?.value;
  const criptoInvestimento =
    document.getElementById("criptoInvestimento").value;

  // Verificar se a senha e a confirmação de senha são iguais
  if (password !== confirmPassword) {
    alert("As senhas não coincidem!");
    return;
  }

  // Simula o envio dos dados ao banco de dados
  console.log("Enviando dados para o banco de dados...");
  console.log("Nome:", name);
  console.log("Telefone:", phone);
  console.log("CEP:", cep);
  console.log("Renda:", renda);
  console.log("Email:", email);
  console.log("Senha:", password);
  console.log("Criptoativos:", cripto);
  console.log("Investimento em Criptomoedas:", criptoInvestimento);

  // Exibe o alert personalizado
  alert("Sua solicitação foi enviada com sucesso!");
}

function gerarSenhaForte(tamanho = 12) {
  // Definindo os caracteres possíveis
  const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const especiais = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

  // Garantindo pelo menos 1 caractere de cada tipo
  const senha = [
    maiusculas[Math.floor(Math.random() * maiusculas.length)], // 1 maiúscula
    minusculas[Math.floor(Math.random() * minusculas.length)], // 1 minúscula
    numeros[Math.floor(Math.random() * numeros.length)], // 1 número
    especiais[Math.floor(Math.random() * especiais.length)], // 1 caractere especial
  ];

  // Preenchendo o restante da senha com caracteres aleatórios
  const caracteres = maiusculas + minusculas + numeros + especiais;
  for (let i = senha.length; i < tamanho; i++) {
    senha.push(caracteres[Math.floor(Math.random() * caracteres.length)]);
  }

  // Embaralhando os caracteres da senha
  for (let i = senha.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [senha[i], senha[j]] = [senha[j], senha[i]]; // Troca de lugar entre os caracteres
  }

  // Convertendo o array de caracteres para string
  return senha.join("");
}

function togglePasswordVisibility(inputId, iconId) {
  const passwordField = document.getElementById(inputId);
  const icon = document.getElementById(iconId);

  if (passwordField.type === "password") {
    passwordField.type = "text"; // Exibe a senha
    icon.textContent = "visibility"; // Muda o ícone para "olho aberto"
  } else {
    passwordField.type = "password"; // Oculta a senha
    icon.textContent = "visibility_off"; // Muda o ícone para "olho fechado"
  }
}

function checkVisibility() {
  // Verificar a visibilidade de imagens, textos e tabelas
  const imagens = document.querySelectorAll(
    ".imagem12, .imagem122, .titulos, .texto-overlay"
  );
  const tabelas = document.querySelectorAll(".tabela");

  // Verificação de visibilidade para imagens e textos
  imagens.forEach((imagem) => {
    const rect = imagem.getBoundingClientRect();
    const viewHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= viewHeight * 0.8 && rect.bottom >= 0) {
      imagem.classList.add("visible");
    } else {
      imagem.classList.remove("visible");
    }
  });

  // Verificação de visibilidade para tabelas
  tabelas.forEach((tabela) => {
    const rect = tabela.getBoundingClientRect();
    const viewHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= viewHeight * 0.8 && rect.bottom >= 0) {
      tabela.classList.add("visible");
    } else {
      tabela.classList.remove("visible");
    }
  });
}

// Adiciona eventos para verificar a visibilidade ao rolar e carregar a página
window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);

// Verifica a visibilidade imediatamente após o carregamento
checkVisibility();

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-links-large .nav-link");

  navLinks.forEach((link) => {
    link.classList.add("visible");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-links .link-item");

  navLinks.forEach((link) => {
    link.classList.add("visible");
  });
});

const selectBox = document.querySelector(".select-box");
const optionsList = document.querySelector(".options-list");

if (selectBox && optionsList) {
  selectBox.addEventListener("click", () => {
    optionsList.classList.toggle("show"); // Alterna a classe 'show'
  });
} else {
  console.log("Elementos selectBox ou optionsList não encontrados.");
}

// Set the selected option
optionItems.forEach((item) => {
  item.addEventListener("click", () => {
    selectBox.textContent = item.textContent;
    optionItems.forEach((i) => i.classList.remove("selected"));
    item.classList.add("selected");
    optionsList.style.display = "none";
  });
});

// Close options if clicked outside
document.addEventListener("click", (e) => {
  if (!selectBox.contains(e.target)) {
    optionsList.style.display = "none";
  }
});

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the animation class when the element is in view
      entry.target.classList.add("animate__fadeInUp");
    } else {
      // Optionally remove the animation class when it's out of view
      entry.target.classList.remove("animate__fadeInUp");
    }
  });
}, options);

// Função para atualizar o preço (subir ou descer)
// Função correta para atualizar preço
function atualizarPreco(elemento, aumento) {
  let valorAtual = parseFloat(
    elemento.textContent.replace("R$", "").replace(",", "").trim()
  ); // Obtém o valor atual
  const variacao = (Math.random() * 1000).toFixed(2); // Gera um valor aleatório para variação

  if (aumento) {
    valorAtual += parseFloat(variacao); // Aumenta o valor
    elemento.classList.remove("baixa");
    elemento.classList.add("alta");
  } else {
    valorAtual -= parseFloat(variacao); // Diminui o valor
    elemento.classList.remove("alta");
    elemento.classList.add("baixa");
  }

  // Atualiza o texto com o novo valor
  elemento.textContent = `R$ ${valorAtual.toFixed(2).replace(".", ",")}`;
}

// Função para ativar animação
function ativarAnimacao() {
  colunas.forEach((coluna) => {
    coluna.classList.add("animar"); // Adiciona a classe que ativa a animação
  });
}

// Função para parar a animação
function pararAnimacao() {
  colunas.forEach((coluna) => {
    coluna.classList.remove("animar"); // Remove a classe que pausa a animação
  });
}

// Função para atualizar o preço
function atualizarPreco(elemento, aumento) {
  // Obtém o valor atual do preço e converte de string para número
  let valorAtual = parseFloat(
    elemento.textContent.replace("R$", "").replace(",", "").trim()
  );

  // Gera uma variação aleatória para o preço
  const variacao = (Math.random() * 1000).toFixed(2); // Limita a 2 casas decimais

  // Atualiza o valor dependendo se deve aumentar ou diminuir
  if (aumento) {
    valorAtual += parseFloat(variacao); // Aumenta o valor
    elemento.classList.remove("baixa");
    elemento.classList.add("alta");
  } else {
    valorAtual -= parseFloat(variacao); // Diminui o valor
    elemento.classList.remove("valor.alta");
    elemento.classList.add("valor.baixa");
  }

  // Atualiza o texto com o novo valor, formatando para o padrão brasileiro (R$ 1.000,00)
  elemento.textContent = `R$ ${valorAtual.toFixed(2).replace(".", ",")}`;
}

// Exemplo de uso - Atualiza o preço de um elemento com a classe "valor"
const valorElement = document.querySelector(".valor");
if (valorElement) {
  atualizarPreco(valorElement, true); // Passando 'true' para aumento de preço
}
