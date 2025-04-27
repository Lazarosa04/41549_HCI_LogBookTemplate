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
    ]
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
  
  // Função para mostrar o popup de favoritos
  function mostrarPopupFavoritos() {
    document.getElementById('favPopup').style.display = 'flex';
  }
  
  // Evento no botão "Adicionar aos Favoritos"
  document.addEventListener('DOMContentLoaded', () => {
    carregarSerie();
  
    const favButton = document.querySelector('.favorite');
    if (favButton) {
      favButton.addEventListener('click', mostrarPopupFavoritos);
    }
  });
  