// Dados fictícios da série
const serieInfo = {
  titulo: "Nome da Série",
  ano: "2025",
  temporadas: 3,
  classificacao: "16+",
  generos: ["Drama", "Aventura", "Ficção Científica"],
  sinopse: "Sinopse da série. Aqui é onde se descreve brevemente a história e o contexto da série para atrair o público.",
  elenco: ["Ator 1", "Ator 2", "Ator 3", "Atriz 1"],
  episodios: [
    "Episódio 1 - O Começo",
    "Episódio 2 - A Jornada",
    "Episódio 3 - O Confronto",
    "Episódio 4 - Revelações",
    "Episódio 5 - O Final"
  ],
  imagem: "../imgs/serie_exemplo.png", // adiciona imagem da série
  id: 1001 // podes depois gerar dinamicamente se quiseres
};

// Função para preencher a página
function carregarSerie() {
  // Preencher informações básicas
  document.querySelector('h1').textContent = serieInfo.titulo;
  document.querySelector('.details').textContent = `${serieInfo.ano} | ${serieInfo.temporadas} Temporadas | ${serieInfo.classificacao}`;

  // Preencher géneros
  const genresContainer = document.querySelector('.genres');
  genresContainer.innerHTML = "";
  serieInfo.generos.forEach(genero => {
      const span = document.createElement('span');
      span.className = "genre";
      span.textContent = genero;
      genresContainer.appendChild(span);
  });

  // Preencher sinopse
  document.querySelector('.summary-box p').textContent = serieInfo.sinopse;

  // Preencher elenco
  document.querySelector('.cast').textContent = serieInfo.elenco.join(", ");

  // Preencher episódios
  const episodiosContainer = document.querySelectorAll('.summary-box')[1];
  episodiosContainer.innerHTML = "<ul></ul>";
  const ul = episodiosContainer.querySelector('ul');
  serieInfo.episodios.forEach(ep => {
      const li = document.createElement('li');
      li.textContent = ep;
      ul.appendChild(li);
  });
}

// Função para abrir o popup de favoritos
function openFavPopup() {
  document.getElementById('favPopup').style.display = 'flex';
  loadDropdownLists();
}

// Função para fechar o popup
function closeFavPopup() {
  document.getElementById('favPopup').style.display = 'none';
}

// Carrega listas existentes no dropdown
function loadDropdownLists() {
  const dropdown = document.getElementById('listDropdown');
  dropdown.innerHTML = ""; // Limpa antes

  const myLists = JSON.parse(localStorage.getItem('myLists')) || [];

  myLists.forEach(list => {
      const option = document.createElement('option');
      option.value = list.name;
      option.textContent = list.name;
      dropdown.appendChild(option);
  });
}

// Adiciona a série à lista escolhida
function addSerieToList() {
  const selectedList = document.getElementById('listDropdown').value;
  if (!selectedList) {
      alert('Escolhe uma lista.');
      return;
  }

  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || {};

  if (!favoritos[selectedList]) {
      favoritos[selectedList] = [];
  }

  const serie = {
      title: serieInfo.titulo,
      image: serieInfo.imagem,
      id: serieInfo.id
  };

  favoritos[selectedList].push(serie);
  localStorage.setItem('favoritos', JSON.stringify(favoritos));

  alert('Adicionado com sucesso!');
  closeFavPopup();
}

// Mostra input para criar nova lista
function showCreateListInput() {
  document.getElementById('newListInputContainer').style.display = 'block';
}

// Cria uma nova lista
function createNewList() {
  const listName = document.getElementById('newListName').value.trim();
  if (listName === "") {
      alert('Nome da lista não pode ser vazio.');
      return;
  }

  let myLists = JSON.parse(localStorage.getItem('myLists')) || [];
  myLists.push({
      name: listName,
      image: "../imgs/serie_exemplo.png", // imagem placeholder para nova lista
      link: "fav_lista.html?listName=" + encodeURIComponent(listName)
  });

  localStorage.setItem('myLists', JSON.stringify(myLists));

  loadDropdownLists();
  document.getElementById('newListName').value = "";
  document.getElementById('newListInputContainer').style.display = 'none';
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  carregarSerie();

  const favButton = document.querySelector('.favorite');
  if (favButton) {
      favButton.addEventListener('click', openFavPopup);
  }

  // Botões do popup
  document.getElementById('addToListButton').addEventListener('click', addSerieToList);
  document.getElementById('showCreateListButton').addEventListener('click', showCreateListInput);
  document.getElementById('createListButton').addEventListener('click', createNewList);
});
