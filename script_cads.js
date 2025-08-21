const jogadores = {
  zico: {
    historia: "Zico é o maior ídolo da história do Flamengo. Com mais de 500 gols pelo clube, encantou gerações com sua técnica e liderança.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw90DZQncXKkAW5eSsOkTP0udiyiAui3slUg&s"
  },
  gabigol: {
    historia: "Gabigol é o herói da Libertadores de 2019. Artilheiro nato, virou símbolo da nova era rubro-negra.",
    imagem: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/11/Gabigol-e1730668092575.jpeg?w=1200&h=675&crop=1"
  },
  arrascaeta: {
    historia: "Arrascaeta é o maestro do meio-campo. Com visão de jogo e gols decisivos, conquistou a torcida com seu talento uruguaio.",
    imagem: "https://santaportal.com.br/wp/wp-content/uploads/2025/08/arrascaeta.jpg"
  }
};

const card = document.getElementById("card-jogador");

document.querySelectorAll(".jogador").forEach(jogador => {
  jogador.addEventListener("mouseover", function () {
    const id = this.getAttribute("data-id");
    const info = jogadores[id];

    card.innerHTML = `
      <img src="${info.imagem}" alt="${id}">
      <p>${info.historia}</p>
    `;
    card.style.display = "block";
    card.style.top = `${this.getBoundingClientRect().top + window.scrollY + 30}px`;
    card.style.left = `${this.getBoundingClientRect().left + window.scrollX + 100}px`;
    card.style.opacity = "1";
  });

  jogador.addEventListener("mouseout", function () {
    card.style.opacity = "0";
    setTimeout(() => {
      card.style.display = "none";
    }, 300);
  });
});
