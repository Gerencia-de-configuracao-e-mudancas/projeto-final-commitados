const jogadores = {
  flamengo: {
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
  },

  palmeiras: {
    marcos: {
      historia: "Marcos, goleiro lendário, é ídolo do Palmeiras por sua segurança e títulos conquistados.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Marcos_2007.jpg"
    },
    dudu: {
      historia: "Dudu é atacante habilidoso e decisivo, destaque recente do Palmeiras.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Dudu_Palmeiras.jpg"
    },
    ademirDaGuia: {
      historia: "Ademir da Guia, conhecido como 'Divino', é ídolo histórico do Palmeiras, referência de técnica e liderança.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Ademir_da_Guia.jpg"
    }
  },

  saoPaulo: {
    rogerioCeni: {
      historia: "Rogério Ceni é ídolo máximo do São Paulo FC, recordista em gols como goleiro e líder em conquistas do clube.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/4/41/Rog%C3%A9rio_Ceni_2010.jpg"
    },
    rai: {
      historia: "Raí, meia habilidoso e líder, brilhou no São Paulo FC nos anos 90, conquistando Libertadores, Mundial e Brasileirão.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Rai_SaoPaulo.jpg"
    },
    kaka: {
      historia: "Kaká iniciou sua carreira no São Paulo FC e encantou o mundo com sua técnica, visão de jogo e conquistas nacionais e internacionais.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/2/28/Kak%C3%A1_2012.jpg"
    }
  },

  corinthians: {
    socrates: {
      historia: "Sócrates, símbolo do Corinthians, líder dentro e fora de campo, com grande habilidade e visão de jogo.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/8/86/Socrates_1983.jpg"
    },
    ronaldoFenomeno: {
      historia: "Ronaldo Fenômeno jogou no Corinthians após sua consagração mundial, deixando sua marca com gols e talento.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Ronaldo_2007.jpg"
    },
    cassio: {
      historia: "Cássio, goleiro histórico do Corinthians, é referência em títulos e defesa de pênaltis.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/9/99/Cassio_Corinthians_2021.jpg"
    }
  },

  cruzeiro: {
    tostao: {
      historia: "Tostão, atacante histórico, foi ídolo do Cruzeiro nos anos 60 e 70, campeão e artilheiro.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Tost%C3%A3o.jpg"
    },
    dirceuLopes: {
      historia: "Dirceu Lopes, meio-campo clássico, ídolo do Cruzeiro, conhecido pela técnica e visão de jogo.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/8/86/Dirceu_Lopes.jpg"
    },
    alex: {
      historia: "Alex, maestro moderno do Cruzeiro, com passes precisos e gols decisivos.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Alex_Cruzeiro.jpg"
    }
  },

  fluminense: {
    fred: {
      historia: "Fred, atacante artilheiro, é referência histórica do Fluminense com gols e títulos importantes.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/0/00/Fred_Fluminense.jpg"
    },
    thiagoSilva: {
      historia: "Thiago Silva, defensor moderno, começou sua carreira no Fluminense e se tornou ídolo mundial.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/6/68/Thiago_Silva_2021.jpg"
    },
    gerson: {
      historia: "Gérson, meia clássico, destacou-se no Fluminense antes de brilhar no futebol brasileiro e internacional.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Gerson_Fluminense.jpg"
    }
  },

  gremio: {
    renatoGaucho: {
      historia: "Renato Gaúcho, ídolo do Grêmio, atacante e técnico vitorioso, referência histórica do clube.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Renato_Gaucho.jpg"
    },
    andreCatimba: {
      historia: "André Catimba marcou época no Grêmio com gols importantes e vitórias históricas.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Andre_Catimba.jpg"
    },
    luisSuarez: {
      historia: "Luís Suárez, atacante uruguaio, teve destaque marcante no Grêmio durante sua passagem.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/4/44/Luis_Suarez.jpg"
    }
  },

  botafogo: {
    garrincha: {
      historia: "Garrincha, ponta habilidoso, é ídolo eterno do Botafogo, conhecido por dribles mágicos.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/2/22/Garrincha_1960.jpg"
    },
    tulioMaravilha: {
      historia: "Túlio Maravilha, atacante goleador, marcou época no Botafogo com gols decisivos.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tulio_Maravilha.jpg"
    },
    didi: {
      historia: "Didi, maestro histórico, jogou no Botafogo e se destacou por sua técnica e inteligência.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Didi_Botafogo.jpg"
    }
  },

  vasco: {
    edmundo: {
      historia: "Edmundo, atacante habilidoso e polêmico, marcou época no Vasco com sua técnica e personalidade.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/6/68/Edmundo_1997.jpg"
    },
    romario: {
      historia: "Romário, atacante consagrado, brilhou no Vasco da Gama com gols e títulos nacionais e internacionais.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/9/96/Romario_2007.jpg"
    },
    juninhoPernambucano: {
      historia: "Juninho Pernambucano, ídolo vascaíno, famoso por suas cobranças de falta precisas e decisivas.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Juninho_Pernambucano_2010.jpg"
    }
  },

  internacional: {
    fachetti: {
      historia: "Fachetti, atacante lendário, marcou época no Internacional nos anos 70.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Fachetti.jpg"
    },
    figueroa: {
      historia: "Figueroa, defensor histórico, destacou-se no Internacional com sua liderança e técnica.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Figueroa_Internacional.jpg"
    },
    dAlessandro: {
      historia: "Andrés D'Alessandro, meio-campo talentoso, ídolo moderno do Internacional.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/4/41/DAlessandro_Internacional.jpg"
    }
  },

  atleticoMG: {
    hulk: {
      historia: "Hulk, atacante poderoso, ídolo recente do Atlético-MG, fundamental em títulos e gols decisivos.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/0/08/Hulk_2022.jpg"
    },
    reinaldo: {
      historia: "Reinaldo, histórico atacante, marcou época no Atlético-MG com gols e liderança.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/5/51/Reinaldo_AtleticoMG.jpg"
    },
    ronaldinhoGaucho: {
      historia: "Ronaldinho Gaúcho, ídolo mundial, brilhou no Atlético-MG com habilidade, gols e títulos importantes.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/2/23/Ronaldinho_2006.jpg"
    }
  }
};


const card = document.getElementById("card-jogador");

// Pegue o clube da página, definindo a classe do body, por exemplo: <body class="theme-flamengo">
const clube = document.body.getAttribute("class").replace("theme-", "");

document.querySelectorAll(".jogador").forEach(jogador => {
  jogador.addEventListener("mouseover", function () {
    const id = this.getAttribute("data-id"); // id do jogador dentro do clube
    const info = jogadores[clube][id]; // acessa o jogador correto no objeto aninhado

    if (!info) return; // se não existir, não faz nada

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
