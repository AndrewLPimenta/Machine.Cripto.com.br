document.querySelector(".form").addEventListener("submit", async function (e) {
  e.preventDefault(); // Evita o envio tradicional do formulário

  // Coletando os dados do formulário
  const nome = document.getElementById("Name").value;
  const telefone = document.getElementById("phone").value;
  const cep = document.getElementById("cep").value;
  const renda = document.getElementById("renda").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const cripto =
    document.querySelector('input[name="cripto"]:checked')?.value || "nao"; // 'sim' ou 'nao'
  const criptoInvestimento =
    document.getElementById("criptoInvestimento").value;

  // Validação de campos obrigatórios
  if (
    !nome ||
    !telefone ||
    !cep ||
    !renda ||
    !email ||
    !password ||
    !confirmPassword ||
    !criptoInvestimento
  ) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return; // Interrompe a execução se algum campo não estiver preenchido
  }

  // Verificando se as senhas coincidem
  if (password !== confirmPassword) {
    alert("As senhas não coincidem");
    return; // Interrompe a execução se as senhas não coincidirem
  }

  // Montando o objeto com os dados
  const dados = {
    nome,
    telefone,
    cep,
    renda,
    email,
    password,
    cripto,
    criptoInvestimento,
  };

  try {
    // Enviando os dados para o back-end
    const resposta = await fetch("http://localhost:5000/api/usuarios", {
      method: "POST", // Enviando dados via POST
      headers: {
        "Content-Type": "application/json", // Definindo o tipo de conteúdo como JSON
      },
      body: JSON.stringify(dados), // Enviando os dados como JSON
    });

    // Processando a resposta
    const resultado = await resposta.json(); // Convertendo a resposta para JSON

    // Verificando se o envio foi bem-sucedido
    if (resposta.ok) {
      alert("Dados enviados com sucesso!"); // Exibe sucesso somente quando tudo estiver correto
    } else {
      alert("Erro ao enviar os dados: " + resultado.message); // Caso contrário, exibe erro
    }
  } catch (erro) {
    alert("Erro de comunicação com o servidor: " + erro.message); // Erro de comunicação com o servidor
  }
});

// Função para gerar senha forte
function gerarSenhaForte(tamanho = 12) {
  // Definindo os caracteres possíveis
  const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const especiais = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?!";

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

// Exemplo de uso:
const senhaForte = gerarSenhaForte(12);
console.log(senhaForte);

// Função para mostrar ou ocultar a senha
function togglePasswordVisibility(inputId, iconClass) {
  const passwordField = document.getElementById(inputId);
  const icon = document.querySelector(`.${iconClass} i`);

  if (passwordField.type === "password") {
    passwordField.type = "text"; // Exibe a senha
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye"); // Muda o ícone para "olho aberto"
  } else {
    passwordField.type = "password"; // Oculta a senha
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash"); // Muda o ícone para "olho fechado"
  }
}
