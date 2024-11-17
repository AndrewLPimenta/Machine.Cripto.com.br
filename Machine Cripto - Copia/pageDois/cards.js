document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-links-large .nav-link");

  navLinks.forEach((link) => {
    link.classList.add("visible");
  });
});

const flipCard = document.querySelector(".flip-card-inner");

// Função para acionar o flip quando o primeiro cartão entra na tela
const activateFlip1 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "rotateY(180deg)";
      // Depois de 1 segundo, voltar ao estado original
      setTimeout(() => {
        entry.target.style.transform = "rotateY(0deg)";
      }, 1000);
    }
  });
};

// Criando o observer para o primeiro cartão
const observer1 = new IntersectionObserver(activateFlip1, {
  threshold: 0.5, // Ativa quando 50% do cartão é visível
});
observer1.observe(flipCard);

const flipCard2 = document.querySelector(".flip-card-inner2");
const flipCard3 = document.querySelector(".flip-card-inner3");

// Função para acionar o flip quando o segundo e terceiro cartão entram na tela
const activateFlip2 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "rotateY(180deg)";
      // Depois de 2 segundos, voltar ao estado original
      setTimeout(() => {
        entry.target.style.transform = "rotateY(0deg)";
      }, 1000);
    }
  });
};

// Criando o observer para os dois cartões
const observer2 = new IntersectionObserver(activateFlip2, {
  threshold: 0.5, // Ativa quando 50% do cartão é visível
});
const observer3 = new IntersectionObserver(activateFlip2, {
  threshold: 0.5, // Ativa quando 50% do cartão é visível
});

observer2.observe(flipCard2);
observer3.observe(flipCard3);
