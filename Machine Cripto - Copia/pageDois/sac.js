document.addEventListener("DOMContentLoaded", () => {
  // Cria a primeira mensagem de boas-vindas
  const welcomeMessageContainer = document.createElement("div");
  welcomeMessageContainer.classList.add(
    "chat-message",
    "bot-message",
    "bounce"
  );
  welcomeMessageContainer.innerHTML = `<span class="message-text">Olá, bem-vindo!</span>`;
  document.getElementById("chat-box").appendChild(welcomeMessageContainer);

  // Adiciona as opções de menu com um pequeno atraso
  setTimeout(() => {
    const optionsMessageContainer = document.createElement("div");
    optionsMessageContainer.classList.add(
      "chat-message",
      "bot-message",
      "fadeUp"
    );
    optionsMessageContainer.innerHTML = `<span class="message-text">Qual informação você procura? <br> 1 - Como consigo abrir minha conta? <br> 2 - Como funcionam os pagamentos com criptomoedas? <br> 3 - Como funcionam os recebimentos por criptomoedas? <br> 4 - Não estou conseguindo solicitar minha conta <br> 5 - Mais opções</span>`;
    document.getElementById("chat-box").appendChild(optionsMessageContainer);
    scrollToBottom(); // Garante que o chat role para o final
  }, 1000); // Delay para a segunda mensagem
});

document.getElementById("send-button").addEventListener("click", function () {
  const userMessage = document.getElementById("message-input").value;
  if (userMessage.trim() !== "") {
    addUserMessage(userMessage); // Envia a mensagem do usuário
    document.getElementById("message-input").value = ""; // Limpa o campo de input
    handleBotResponse(userMessage); // Envia a resposta do bot
  }
});

function addUserMessage(message) {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("chat-message", "user-message");

  // Adiciona a imagem do usuário ao lado direito da mensagem
  messageContainer.innerHTML = `
    <span class="message-text">${message}</span>
    <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" alt="User" class="user-avatar fadeIn">
  `;
  scrollToBottom();

  document.getElementById("chat-box").appendChild(messageContainer);
  messageContainer.classList.add("fadeIn"); // Anima a mensagem do usuário
}

function handleBotResponse(userMessage) {
  // Exibe a mensagem de "bot digitando" após a interação do usuário
  const typingMessage = document.createElement("div");
  typingMessage.classList.add("chat-message", "bot-message", "typing");
  typingMessage.innerHTML = `<span class="message-text">...</span>`;
  document.getElementById("chat-box").appendChild(typingMessage);

  scrollToBottom();

  // Simula o tempo de digitação
  setTimeout(() => {
    // Remove a mensagem de digitação
    typingMessage.remove();

    let botMessage = "";
    let userState = ""; // Variável para rastrear o estado do usuário

    // Verifica o estado do usuário e responde de acordo
    if (userMessage === "1") {
      botMessage =
        "📄 *Abrir Conta*: <br>Para abrir sua conta no nosso banco, basta acessar nosso site ou aplicativo e preencher o formulário com suas informações. Após uma análise simples e rápida, sua conta estará ativa para que você aproveite benefícios como gestão de criptomoedas e transações rápidas!";
    } else if (userMessage === "2") {
      botMessage =
        "💳 *Pagamentos com Criptomoeda*: <br>Utilize nossos cartões vinculados à sua carteira cripto para realizar pagamentos em lojas físicas ou online. O saldo em criptomoedas é convertido automaticamente para a moeda local no momento da compra, garantindo praticidade e segurança.";
    } else if (userMessage === "3") {
      botMessage =
        "📲 *Receber Pagamentos em Cripto*: <br>Com nossas maquininhas de cartão compatíveis com criptomoedas, você pode aceitar pagamentos em cripto diretamente de seus clientes. O valor recebido pode ser automaticamente convertido para moeda fiduciária, simplificando a gestão financeira.";
    } else if (userMessage === "4") {
      botMessage =
        "❌ *Erro ao Solicitar Conta*: <br>Caso tenha dificuldades para abrir sua conta, siga estas etapas:<br> <br>1️⃣ Certifique-se de que todos os dados estão corretos.<br> <br>2️⃣ Verifique sua conexão com a internet. <br><br>3️⃣ Entre em contato com nosso suporte via chat ou telefone<br> disponível 24/7, para assistência personalizada.";
    } else if (userMessage === "5") {
      botMessage =
        "📚 *Mais Opções*: Aqui estão algumas opções adicionais: <br><br>6 - Quais os cartões ofertados? <br>7 - Quais os benefícios ofertados? <br> - O que é Machine Cripto? <br> - Como proteger minhas transações? <br>10 - Falar com um atendente humano <br>11 - Voltar para o início";
      userState = "opcao5";
    } else if (userMessage === "6" || userState === "opcao5") {
      botMessage =
        "🎴 *Cartões Ofertados*: <br>1️⃣ Cartão Gold. <br>2️⃣ Cartão Platinum <br>3️⃣ Cartão Diamound <br> Confira na <a href=./adquirir-cartao.html style='text decoration: none; color: #F88D01;'> página!<a>";
    } else if (userMessage === "7" || userState === "opcao5") {
      botMessage =
        "🌟 *Benefícios dos Nossos Serviços*: <br>✅ Aceitação global em lojas físicas e online. <br>✅ Transações rápidas e transparentes. <br>✅ Conversão instantânea de criptomoedas para moeda local. <br>✅ Cashback em compras e descontos exclusivos para clientes.";
    } else if (userMessage === "8" || userState === "opcao5") {
      botMessage =
        "🤖 *O que é Machine Cripto*: <br>Além de pagamentos, Nossa tecnologia permite transações com criptomoedas em maquininhas de cartão convencionais. Isso simplifica o uso diário de cripto, tornando-o acessível para qualquer tipo de comércio.";
    } else if (userMessage === "9" || userState === "opcao5") {
      botMessage =
        "🔒 *Proteção nas Transações*: <br>Seu dinheiro e dados estão seguros conosco. Oferecemos criptografia avançada, autenticação de dois fatores (2FA) e monitoramento 24/7 para detectar e prevenir atividades suspeitas.";
    } else if (userMessage === "10" || userState === "opcao5") {
      botMessage =
        "📞 *Falar com um Atendente*: <br>Aguarde um momento enquanto conectamos você a um atendente humano. Alternativamente, digite 'Atendente' a qualquer momento para entrar em contato diretamente.";
    } else if (userMessage === "11" || userState === "opcao5") {
      botMessage =
        "🔄 *Voltar ao Início*: Escolha uma das opções abaixo: <br><br>1 - Abrir Conta <br>2 - Pagamentos com Criptomoeda <br>3 - Receber Pagamentos em Cripto <br>4 - Erro ao Solicitar Conta <br>5 - Mais Opções";
      userState = ""; // Reseta o estado
    } else if (userMessage === "sair") {
      botMessage =
        "🚪 *Saindo*: <br>Obrigado por nos visitar! Se precisar de mais ajuda, estamos sempre aqui. Tenha um ótimo dia!";
      userState = ""; // Limpa o estado
    } else {
      botMessage =
        "❓ *Opção Inválida*: <br>Parece que houve um erro. Digite '11' para voltar ao início ou tente novamente.";
    }

    // Adiciona a resposta do bot com a foto
    addMessageWithAvatar(botMessage, "bot");
    scrollToBottom(); // Garante que o chat role para o final
  }, 1500); // Delay simula o tempo de digitação
}

function addMessageWithAvatar(message, sender) {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add(
    "chat-message",
    sender === "user" ? "user-message" : "bot-message"
  );
  messageContainer.innerHTML = `
    <img src="https://tse1.mm.bing.net/th?id=OIP.yP4zwI4ch8rYoEuRNQm59AHaJP&pid=Api&P=0&h=180" alt="Chatbot" class="bot-avatar">
    <span class="message-text">${message}</span>
  `;
  document.getElementById("chat-box").appendChild(messageContainer);

  messageContainer.classList.add("fadeIn");
}

function scrollToBottom() {
  const chatBox = document.getElementById("chat-box");
  const chatContainer = document.getElementById("chat-container");

  if (chatBox.scrollHeight > chatContainer.clientHeight) {
    chatContainer.scrollTop = chatBox.scrollHeight;
  } else {
    chatContainer.scrollTop = 0;
  }
}

const messageInput = document.getElementById("message-input");
const userInput = document.getElementById("user-input");

messageInput.addEventListener("focus", () => {
  if (window.innerWidth <= 667) {
    userInput.classList.add("fixed");
  }
});

messageInput.addEventListener("blur", () => {
  userInput.classList.remove("fixed");
  scrollToBottom();
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-links-large .nav-link");

  // Adiciona a classe 'visible' aos links assim que a página carrega
  navLinks.forEach((link) => {
    link.classList.add("visible");
  });
});

// Enviar mensagem ao pressionar Enter
messageInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Evita que a página seja recarregada ao pressionar Enter
    const userMessage = messageInput.value.trim();
    if (userMessage !== "") {
      addUserMessage(userMessage); // Envia a mensagem do usuário
      messageInput.value = ""; // Limpa o campo de input
      handleBotResponse(userMessage); // Envia a resposta do bot
    }
  }
});
