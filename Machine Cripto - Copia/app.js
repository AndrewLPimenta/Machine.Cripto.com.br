function scrollToDestino() {
  const destino = document.getElementById("destino");
  destino.scrollIntoView({ behavior: "smooth" });
}

function updateCryptoPrice(symbol, price, change) {
  const priceElement = document.getElementById(symbol + "-price");
  const changeElement = document.getElementById(symbol + "-change");

  if (priceElement) {
    // Aplicando a animação
    priceElement.textContent = price;
    priceElement.classList.add("fade"); // Adiciona a classe de animação
    setTimeout(() => {
      priceElement.classList.remove("fade"); // Remove a classe após a animação
    }, 300);
  }

  if (changeElement) {
    changeElement.textContent = change;

    // Se a mudança for negativa, aplica a classe 'negative'
    if (parseFloat(change) < 0) {
      changeElement.classList.add("negative");
    } else {
      changeElement.classList.remove("negative");
    }

    changeElement.classList.add("fade"); // Adiciona a animação na mudança
    setTimeout(() => {
      changeElement.classList.remove("fade"); // Remove a classe após a animação
    }, 300);
  }
}

// Função para gerar valores aleatórios para simular variações no mercado
function generateRandomPriceChange(currentPrice) {
  const randomChange = (Math.random() * 10 - 5).toFixed(2); // Gera uma mudança aleatória entre -5 e +5%
  const newPrice = (
    parseFloat(currentPrice.replace("$", "").replace(",", "")) *
    (1 + randomChange / 100)
  ).toFixed(2);
  return { newPrice: `$${newPrice}`, change: `${randomChange}%` };
}

// Inicializando valores para as 10 criptos
let btcPrice = "$89,242.01";
let ethPrice = "$4,242.15";
let bnbPrice = "$350.80";
let xrpPrice = "$1.25";
let solPrice = "$12.15";
let dotPrice = "$7.80";
let dogePrice = "$0.24";
let adaPrice = "$0.35";
let kaiaPrice = "$3.10";
let cetusPrice = "$0.58";

// Função para gerar variação de preços aleatória (subida ou descida)
function generateRandomPriceChange(currentPrice) {
  const changePercent = (Math.random() * 2 - 1) * 0.05; // Variação de -5% a +5%
  const newPrice =
    parseFloat(currentPrice.replace(/[^\d.-]/g, "")) * (1 + changePercent);
  const newPriceFormatted = `$${newPrice.toFixed(2)}`;
  const change =
    changePercent > 0
      ? `+${(changePercent * 100).toFixed(2)}%`
      : `${(changePercent * 100).toFixed(2)}%`;
  return { newPrice: newPriceFormatted, change: change, changePercent };
}

// Função para atualizar o preço da criptomoeda na página
function updateCryptoPrice(cryptoSymbol, newPrice, change, changePercent) {
  const priceElement = document.getElementById(`${cryptoSymbol}-price`);
  const changeElement = document.getElementById(`${cryptoSymbol}-change`);

  if (priceElement && changeElement) {
    priceElement.textContent = newPrice;
    changeElement.textContent = change;

    // Altera a cor dependendo do valor da variação
    if (changePercent > 0) {
      changeElement.style.color = "green"; // Para variação positiva, verde
    } else {
      changeElement.style.color = "red"; // Para variação negativa, vermelho
    }
  }
}

// Atualizando os valores continuamente a cada 1 segundo
setInterval(() => {
  const btcUpdate = generateRandomPriceChange(btcPrice);
  const ethUpdate = generateRandomPriceChange(ethPrice);
  const bnbUpdate = generateRandomPriceChange(bnbPrice);
  const xrpUpdate = generateRandomPriceChange(xrpPrice);
  const solUpdate = generateRandomPriceChange(solPrice);
  const dotUpdate = generateRandomPriceChange(dotPrice);
  const dogeUpdate = generateRandomPriceChange(dogePrice);
  const adaUpdate = generateRandomPriceChange(adaPrice);
  const kaiaUpdate = generateRandomPriceChange(kaiaPrice);
  const cetusUpdate = generateRandomPriceChange(cetusPrice);

  // Atualizando os preços na página
  updateCryptoPrice(
    "btc",
    btcUpdate.newPrice,
    btcUpdate.change,
    btcUpdate.changePercent
  );
  updateCryptoPrice(
    "eth",
    ethUpdate.newPrice,
    ethUpdate.change,
    ethUpdate.changePercent
  );
  updateCryptoPrice(
    "bnb",
    bnbUpdate.newPrice,
    bnbUpdate.change,
    bnbUpdate.changePercent
  );
  updateCryptoPrice(
    "xrp",
    xrpUpdate.newPrice,
    xrpUpdate.change,
    xrpUpdate.changePercent
  );
  updateCryptoPrice(
    "sol",
    solUpdate.newPrice,
    solUpdate.change,
    solUpdate.changePercent
  );
  updateCryptoPrice(
    "dot",
    dotUpdate.newPrice,
    dotUpdate.change,
    dotUpdate.changePercent
  );
  updateCryptoPrice(
    "doge",
    dogeUpdate.newPrice,
    dogeUpdate.change,
    dogeUpdate.changePercent
  );
  updateCryptoPrice(
    "ada",
    adaUpdate.newPrice,
    adaUpdate.change,
    adaUpdate.changePercent
  );
  updateCryptoPrice(
    "kaia",
    kaiaUpdate.newPrice,
    kaiaUpdate.change,
    kaiaUpdate.changePercent
  );
  updateCryptoPrice(
    "cetus",
    cetusUpdate.newPrice,
    cetusUpdate.change,
    cetusUpdate.changePercent
  );

  // Atualizando os preços para a próxima iteração
  btcPrice = btcUpdate.newPrice;
  ethPrice = ethUpdate.newPrice;
  bnbPrice = bnbUpdate.newPrice;
  xrpPrice = xrpUpdate.newPrice;
  solPrice = solUpdate.newPrice;
  dotPrice = dotUpdate.newPrice;
  dogePrice = dogeUpdate.newPrice;
  adaPrice = adaUpdate.newPrice;
  kaiaPrice = kaiaUpdate.newPrice;
  cetusPrice = cetusUpdate.newPrice;
}, 1000); // Atualiza a cada 1 segundo
// Função para verificar se as imagens estão visíveis na tela
function checkVisibility() {
  const imagens = document.querySelectorAll(".foto1, .foto2"); // Seleciona todas as imagens

  imagens.forEach((imagem) => {
    const rect = imagem.getBoundingClientRect(); // Obtém as coordenadas do elemento na tela
    const viewHeight =
      window.innerHeight || document.documentElement.clientHeight; // Altura da janela de visualização

    // Verifica se o elemento está visível em 80% da altura da janela
    if (rect.top <= viewHeight * 0.8 && rect.bottom >= 0) {
      imagem.classList.add("visible"); // Adiciona a classe 'visible' para animar a imagem
    } else {
      imagem.classList.remove("visible"); // Remove a classe 'visible' quando a imagem sair da área visível
    }
  });
}

// Função para adicionar a classe 'visible' quando o texto entra na área visível
function checkOverlayVisibility() {
  const overlays = document.querySelectorAll(".overlay"); // Seleciona todos os elementos com a classe .overlay

  overlays.forEach((overlay) => {
    const rect = overlay.getBoundingClientRect(); // Obtém as coordenadas do elemento na tela
    const viewHeight =
      window.innerHeight || document.documentElement.clientHeight; // Altura da janela de visualização

    // Verifica se o elemento está visível (80% da altura da janela)
    if (rect.top <= viewHeight * 0.8 && rect.bottom >= 0) {
      overlay.classList.add("visible"); // Adiciona a classe 'visible' para animar o texto
    } else {
      overlay.classList.remove("visible"); // Remove a classe 'visible' quando o texto sair da área visível
    }
  });
}

// Verifica a visibilidade sempre que o usuário rolar a página
window.addEventListener("scroll", checkOverlayVisibility);

// Também é uma boa prática verificar a visibilidade ao carregar a página, para o caso de o texto já estar visível no início
window.addEventListener("load", checkOverlayVisibility);

// Verifica a visibilidade sempre que o usuário rolar a página
window.addEventListener("scroll", checkVisibility);

// Também é uma boa prática verificar a visibilidade ao carregar a página, para o caso de a imagem já estar visível no início
window.addEventListener("load", checkVisibility);

// Verifica a visibilidade sempre que o usuário rolar a página
window.addEventListener("scroll", checkVisibility);

// Também é uma boa prática verificar a visibilidade ao carregar a página, para o caso de a imagem já estar visível no início
window.addEventListener("load", checkVisibility);

// Executa a função em cada evento de rolagem e ao carregar a página
window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);

// Código do botão para alternar entre as listas
const toggleButton = document.getElementById("toggle-button");
const cryptoList1 = document.getElementById("crypto-list-1");
const cryptoList2 = document.getElementById("crypto-list-2");

toggleButton.addEventListener("click", () => {
  if (cryptoList1.style.display === "none") {
    cryptoList1.style.display = "flex"; // Usa "flex" para manter a estrutura de lista
    cryptoList2.style.display = "none";
    toggleButton.textContent = "Mostrar mais promissoras";
  } else {
    cryptoList1.style.display = "none";
    cryptoList2.style.display = "flex";
    toggleButton.textContent = "Mostrar mais valiosas";
  }
});

function toggleAcordeao(colapsoId, itemId) {
  const colapsoElemento = document.getElementById(colapsoId);
  const itemElemento = document.getElementById(itemId);
  const corpo = colapsoElemento.querySelector(".acordeao-corpo");
  const estaMostrando = colapsoElemento.classList.contains("mostrar");

  document.querySelectorAll(".acordeao-colapso").forEach((el) => {
    el.classList.remove("mostrar");
    el.querySelector(".acordeao-corpo").style.maxHeight = null;
  });

  if (!estaMostrando) {
    colapsoElemento.classList.add("mostrar");
    corpo.style.maxHeight = corpo.scrollHeight + "px";
  }
}

function toggleSeta(id) {
  var elemento = document.getElementById(id);
  var seta = elemento.querySelector(".seta");
  var estaMostrando = elemento.classList.contains("mostrar");

  if (!estaMostrando) {
    seta.textContent = "expand_less";
  } else {
    seta.textContent = "expand_more";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-links-large .nav-link");

  navLinks.forEach((link) => {
    link.classList.add("visible");
  });
});

const button = document.getElementById("animatedButton");

const animateButton = () => {
  button.classList.add("hover");

  setTimeout(() => {
    button.classList.remove("hover");
  }, 3000);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateButton();
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(button);
