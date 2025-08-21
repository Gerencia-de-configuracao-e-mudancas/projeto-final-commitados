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
    nome: 'Santos',
    pagina: 'santos.html'
  },
  {
    nome: 'Vasco da Gama',
    pagina: 'vasco.html'
  },
  {
    nome: 'Fluminense',
    pagina: 'fluminense.html'
  },
  {
    nome: 'Botafogo',
    pagina: 'botafogo.html'
  },
  {
    nome: 'Grêmio',
    pagina: 'gremio.html'
  },
  {
    nome: 'Internacional',
    pagina: 'internacional.html'
  },
  {
    nome: 'Cruzeiro',
    pagina: 'cruzeiro.html'
  },
  {
    nome: 'Atlético Mineiro',
    pagina: 'atletico_mg.html'
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
