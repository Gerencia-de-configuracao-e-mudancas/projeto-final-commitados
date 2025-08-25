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
      imagem: "https://www.motiveacaopalestras.com.br/assets/images/palestrantes/073de6c9f7a2ed036747e202c539f495.jpg"
    },
    dudu: {
      historia: "Dudu é atacante habilidoso e decisivo, destaque recente do Palmeiras.",
      imagem: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/10/Dudu-participou-da-ultima-vitoria-do-Palmeiras-sobre-o-Galo.png?w=1200&h=675&crop=1"
    },
    ademirDaGuia: {
      historia: "Ademir da Guia, conhecido como 'Divino', é ídolo histórico do Palmeiras, referência de técnica e liderança.",
      imagem: "https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2019/05/Ademir_rosto-227x340.jpg"
    }
  },

  saoPaulo: {
    rogerioCeni: {
      historia: "Rogério Ceni é ídolo máximo do São Paulo FC, recordista em gols como goleiro e líder em conquistas do clube.",
      imagem: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/01/rogerio-ceni-sao-paulo-gol-100-e1737140595839.jpg?w=1200&h=1200&crop=1"
    },
    rai: {
      historia: "Raí, meia habilidoso e líder, brilhou no São Paulo FC nos anos 90, conquistando Libertadores, Mundial e Brasileirão.",
      imagem: "https://s2-valor-investe.glbimg.com/_yQWCsRqT3KzjcX7HI2ec8JXSQY=/0x0:697x1024/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_f035dd6fd91c438fa04ab718d608bbaa/internal_photos/bs/2019/9/Z/xtUiOcSMOGsb9PhWt7vQ/rai-1984-06-botafogo-rp.jpg"
    },
    kaka: {
      historia: "Kaká iniciou sua carreira no São Paulo FC e encantou o mundo com sua técnica, visão de jogo e conquistas nacionais e internacionais.",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQth2UDQC5sOhms2YUp4CLpExhTXFDN1I17Vg&s"
    }
  },

  corinthians: {
    socrates: {
      historia: "Sócrates, símbolo do Corinthians, líder dentro e fora de campo, com grande habilidade e visão de jogo.",
      imagem: "https://veja.abril.com.br/wp-content/uploads/2016/06/socrates-corinthians-1985-original1.jpeg?quality=70&strip=info&w=383&w=636"
    },
    ronaldoFenomeno: {
      historia: "Ronaldo Fenômeno jogou no Corinthians após sua consagração mundial, deixando sua marca com gols e talento.",
      imagem: "https://media.gazetadopovo.com.br/2009/01/7ef38542538932fc8b35ab3420e885b7-gpLarge.jpg"
    },
    cassio: {
      historia: "Cássio, goleiro histórico do Corinthians, é referência em títulos e defesa de pênaltis.",
      imagem: "https://fielmanchete.com/storage/media-items/images/2025/02/cassio-corinthians-rodrigo-coca-agencia-corinthians_20250203055333.webp"
    }
  },

  cruzeiro: {
    tostao: {
      historia: "Tostão, atacante histórico, foi ídolo do Cruzeiro nos anos 60 e 70, campeão e artilheiro.",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1G5thZj74E0NSqxbpFs8tdkgjAyyRR3KDA&s"
    },
    dirceuLopes: {
      historia: "Dirceu Lopes, meio-campo clássico, ídolo do Cruzeiro, conhecido pela técnica e visão de jogo.",
      imagem: "https://www.diarioceleste.com.br/wp-content/uploads/2023/05/DIRCEU-LOPES-CRUZEIRO.jpg"
    },
    alex: {
      historia: "Alex, maestro moderno do Cruzeiro, com passes precisos e gols decisivos.",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQriG9_eYFcO_CUsvMkS8aabxQJggWMAM7xHfw9XVc9IAoqlpmMUpAdvaTLMdJc_wl8kf0&usqp=CAU"
    }
  },

  fluminense: {
    fred: {
      historia: "Fred, atacante artilheiro, é referência histórica do Fluminense com gols e títulos importantes.",
      imagem: "https://wikiflu.netflu.com.br/images/thumb/f/fa/Fred_divulga%C3%A7%C3%A3o_Fluminense.png/300px-Fred_divulga%C3%A7%C3%A3o_Fluminense.png"
    },
    thiagoSilva: {
      historia: "Thiago Silva, defensor moderno, começou sua carreira no Fluminense e se tornou ídolo mundial.",
      imagem: "https://odia.ig.com.br/_midias/jpg/2024/05/07/398x470/1_gnadh7nxiaapntb-32783975.jpeg"
    },
    gerson: {
      historia: "Gérson, meia clássico, destacou-se no Fluminense antes de brilhar no futebol brasileiro e internacional.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Gerson_Santos_da_Silva_2016.jpg/250px-Gerson_Santos_da_Silva_2016.jpg"
    }
  },

  gremio: {
    renatoGaucho: {
      historia: "Renato Gaúcho, ídolo do Grêmio, atacante e técnico vitorioso, referência histórica do clube.",
      imagem: "https://s2-autoesporte.glbimg.com/y1XgqSXZ6_KhycOSjezOWne1PAs=/0x0:300x300/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/M/q/7CmpsQQr6OT48cJ1CVlA/2014-01-10-renato-gaucho.jpg"
    },
    andreCatimba: {
      historia: "André Catimba marcou época no Grêmio com gols importantes e vitórias históricas.",
      imagem: "https://gremiopedia.com/images/thumb/f/fd/Carlos_Andr%C3%A9_Avelino_de_Lima.png/260px-Carlos_Andr%C3%A9_Avelino_de_Lima.png"
    },
    luisSuarez: {
      historia: "Luís Suárez, atacante uruguaio, teve destaque marcante no Grêmio durante sua passagem.",
      imagem: "https://assets.goal.com/images/v3/blta9903fcf0514c8c8/suarez_gremio.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    }
  },

  botafogo: {
    garrincha: {
      historia: "Garrincha, ponta habilidoso, é ídolo eterno do Botafogo, conhecido por dribles mágicos.",
      imagem: "https://i.pinimg.com/736x/e7/96/31/e7963106b4254c7a93bc07ffd9921cb8.jpg"
    },
    tulioMaravilha: {
      historia: "Túlio Maravilha, atacante goleador, marcou época no Botafogo com gols decisivos.",
      imagem: "https://extra.globo.com/incoming/23509589-0a3-d7b/w976h550-PROP/32810894_sao-paulo-sp17-12-1995futebolbrasilcampeonato-brasileiro1995final2.jpg"
    },
    didi: {
      historia: "Didi, maestro histórico, jogou no Botafogo e se destacou por sua técnica e inteligência.",
      imagem: "https://static.botafogo.com.br/upload/idolos/d3bc75b6652e4aefa0d5714ac9efcaee.jpg"
    }
  },

  vasco: {
    edmundo: {
      historia: "Edmundo, atacante habilidoso e polêmico, marcou época no Vasco com sua técnica e personalidade.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/7/74/EdmundoVasco2008_%28cropped_2%29.jpg"
    },
    romario: {
      historia: "Romário, atacante consagrado, brilhou no Vasco da Gama com gols e títulos nacionais e internacionais.",
      imagem: "https://pbs.twimg.com/media/FFEMPS6XsAgX5px?format=jpg&name=large"
    },
    juninhoPernambucano: {
      historia: "Juninho Pernambucano, ídolo vascaíno, famoso por suas cobranças de falta precisas e decisivas.",
      imagem:"https://lncimg.lance.com.br/cdn-cgi/image/width=1280,height=720,quality=75,fit=pad/uploads/2017/08/07/5988eb76b0800.jpeg"
    }
  },

  internacional: {
    fachetti: {
      historia: "Fachetti, atacante lendário, marcou época no Internacional nos anos 70.",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkf4JxTr6FS_SPwWlY1XgrUdtRE9yaZ3eIKg&s"
    },
    figueroa: {
      historia: "Figueroa, defensor histórico, destacou-se no Internacional com sua liderança e técnica.",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQZTpNDhxOZa8N4WAhQspuC-EjTWOG66gTf93lqPfp0i6q9tfa1ZQpcJ8RHiSlpmMplM&usqp=CAU"
    },
    dAlessandro: {
      historia: "Andrés D'Alessandro, meio-campo talentoso, ídolo moderno do Internacional.",
      imagem: "https://conteudo.imguol.com.br/c/esporte/01/2022/01/29/dalessandro-comemora-seu-96-gol-com-a-camisa-do-inter-1643501666259_v2_1x1.jpg"
    }
  },

  atleticoMG: {
    hulk: {
      historia: "Hulk, atacante poderoso, ídolo recente do Atlético-MG, fundamental em títulos e gols decisivos.",
      imagem: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/02/hulk-atletico-e1738723386273.jpg?w=1200&h=1200&crop=1"
    },
    reinaldo: {
      historia: "Reinaldo, histórico atacante, marcou época no Atlético-MG com gols e liderança.",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-Euu9eG9Mj8kcCOODSwMidyjFJt0iopA8-Ht_p9UR_xQRAVygT8jMAeawBTV4IZS3YY&usqp=CAU"
    },
    ronaldinhoGaucho: {
      historia: "Ronaldinho Gaúcho, ídolo mundial, brilhou no Atlético-MG com habilidade, gols e títulos importantes.",
      imagem: "https://conteudo.imguol.com.br/c/esporte/d1/2018/02/23/ronaldinho-gaucho-no-atletico-mg-1519398291316_v2_4x3.jpg"
    }
  },
  santos: {
    pele: {
      historia: "Pelé, o 'Rei do Futebol', é ídolo mundial e símbolo do Santos, com inúmeros gols e títulos.",
      imagem: "https://pbs.twimg.com/media/FktfCfrWYAAs2M7.jpg:large"
    },
    neymar: {
      historia: "Neymar começou no Santos, encantou o mundo com dribles, gols e conquistou a Libertadores em 2011.",
      imagem: "https://lncimg.lance.com.br/uploads/2025/01/Neymar-Santos-2-scaled-aspect-ratio-512-320.jpg"
    },
    robinho: {
      historia: "Robinho, atacante habilidoso, brilhou no Santos antes de seguir carreira internacional.",
      imagem: "https://s2.glbimg.com/56QGe8RXpxuV6q4F9OSa7UOd2Sg=/328x0:1294x959/400x397/s.glbimg.com/es/ge/f/original/2015/04/29/16682564274_3e05a0007a_o.jpg"
    }
  },
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
