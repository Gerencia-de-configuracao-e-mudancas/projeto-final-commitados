const times = [
      {
        nome: 'Flamengo',
        pagina: 'flamengo.html'
      },
      {
        nome: 'Palmeiras',
        pagina: 'palmeiras.html'
      },
      {
        nome: 'São Paulo',
        pagina: 'sao_paulo.html'
      },
      {
        nome: 'Corinthians',
        pagina: 'corinthians.html'
      },
      {
        nome:'Cruzeiro',
        pagina:'Cruzeiro.html'
      },
      {
        nome:'Bahia',
        pagina:'Bahia.html'
      },
      {
        nome:'Botafogo',
        pagina:'Botafogo.html'
      },
      {
        nome:'Mirassol',
        pagina:'Mirassol.html'
      },
      {
        nome:'Fluminense',
        pagina:'Fluminense.html'
      },
      {
        nome:'Bragantino',
        pagina:'Bragantino.html'
      },
      {
        nome:'Ceará',
        pagina:'Ceará.hmtl'
      },
      {
        nome:'Atletico-MG',
        pagina:'Atletico-MG.html'
      },
      {
        nome:'Internacional',
        pagina:'Internacional.html'
      },
      {
        nome:'Grêmio',
        pagina:'Grêmio.html'
      },
      {
        nome:'Santos',
        pagina:'Santos.html'
      },
      {
        nome:'Vasco_da_Gama',
        pagina:'Vasco_da_Gama.html'
      },
      {
        nome:'Vitória',
        pagina:'Vitória.html'
      },
      {
        nome:'Juventude',
        pagina:'Juventude.html'
      },
      {
        nome:'Fortaleza',
        pagina:'Fortaleza.html'
      },
      {
        nome:'Sport_Recife',
        pagina:'Sport_Recife'
      }
    ];

    const container = document.getElementById('card-container');

    times.forEach(time => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<p>${time.nome}</p>`;
      card.onclick = () => {
        window.location.href = time.pagina;
      };
      container.appendChild(card);
    });