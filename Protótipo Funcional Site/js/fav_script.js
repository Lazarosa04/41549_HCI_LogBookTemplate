function create() {
    /** obtem o nome da lista */
    const input = document.getElementById('createListInput');
    const listName = input.value.trim();

    /** verifica se nome não é vazio */
    if (listName === "") {
        alert("Please enter a list name.");
        return;
    }

    // Pega listas existentes (ou cria nova array se não existir)
    let myLists = JSON.parse(localStorage.getItem('myLists')) || [];

    // Cria nova lista
    const newList = {
        name: listName,
        image: "../imgs/random_img.png",
        link: "fav_lista.html?listName=" + encodeURIComponent(listName)
    };    

    // Adiciona e guarda no localStorage
    myLists.push(newList);
    localStorage.setItem('myLists', JSON.stringify(myLists));

    // Atualiza interface
    renderList(newList);

    input.value = "";
}

function renderList({ name, image, link }) {
    const container = document.createElement("div");
    container.className = "create-list-container";
    container.style.display = "inline-block";
    container.style.maxWidth = "fit-content";

    container.innerHTML = `
        <div class="list-item">
            <div class="list-header">
                <p>${name}</p>
                <div class="icons">
                    <button class="icon-button">✏️</button>
                    <button class="icon-button">🗑️</button>
                </div>
            </div>

            <hr>

            <div class="list-body">
                <a href="${link}">
                    <img src="${image}" alt="Imagem da lista" width="100">
                </a>
                <button class="plus-button" onclick="abrirPopup()">+</button>
            </div>
        </div>
    `;

    document.getElementById("list-container").appendChild(container);
}

window.addEventListener('DOMContentLoaded', () => {
    const myLists = JSON.parse(localStorage.getItem('myLists')) || [];
    myLists.forEach(renderList);
});

function clearLists() {
    localStorage.removeItem('myLists');  // Remove o item específico 'myLists'
    document.getElementById("list-container").innerHTML = ''; // Limpa a interface
    alert("Todas as listas foram removidas.");
}

// Função para abrir o pop-up
function abrirPopup() {
    document.getElementById("movie-popup").style.display = "flex";
    carregarFilmes();  // Carrega a lista de filmes ao abrir o pop-up
}

// Função para fechar o pop-up
function fecharPopup() {
    document.getElementById("movie-popup").style.display = "none";
}

let filmes = [
    { title: "O Senhor dos Anéis", image: "../imgs/random_img.png", id: 1 },
    { title: "Matrix", image: "https://via.placeholder.com/100x150?text=2", id: 2 },
    { title: "Star Wars", image: "https://via.placeholder.com/100x150?text=3", id: 3 },
    { title: "Avatar", image: "https://via.placeholder.com/100x150?text=4", id: 4 },
    { title: "Vingadores", image: "https://via.placeholder.com/100x150?text=5", id: 5 },
    { title: "Jurassic Park", image: "https://via.placeholder.com/100x150?text=6", id: 6 }
];


// Função para carregar filmes
let filmesFavoritos = JSON.parse(localStorage.getItem('favoritos')) || []; // Recupera os favoritos salvos no localStorage

// Função para carregar filmes
function carregarFilmes() {
    const movieList = document.getElementById("movie-list");

    // Limpa a lista de filmes antes de adicionar novos
    movieList.innerHTML = '';

    filmes.forEach(filme => {
        const movieItem = document.createElement("div");
        movieItem.className = "movie-item";
        movieItem.innerHTML = `
            <img src="${filme.image}" alt="${filme.title}" />
            <p>${filme.title}</p>
            <div class="favorite-btn ${isFavorito(filme.id) ? 'active' : ''}" onclick="toggleFavorito(${filme.id})"></div>
        `;
        movieList.appendChild(movieItem);
    });
}


// Verifica se o filme está nos favoritos
function isFavorito(filmeId) {
    return filmesFavoritos.some(filme => filme.id === filmeId);
}


// Função para adicionar ou remover o filme dos favoritos
function toggleFavorito(filmeId) {
    const filme = filmes.find(f => f.id === filmeId); // Obtém o filme correspondente

    if (isFavorito(filmeId)) {
        // Remove o filme dos favoritos
        filmesFavoritos = filmesFavoritos.filter(f => f.id !== filmeId);
    } else {
        // Adiciona o filme aos favoritos
        filmesFavoritos.push(filme);
    }

    // Salva os favoritos no localStorage
    localStorage.setItem('favoritos', JSON.stringify(filmesFavoritos));

    // Atualiza a interface para refletir a mudança
    carregarFilmes();
}



function filtrarFilmes() {
    const pesquisa = document.getElementById("movie-search").value.toLowerCase();
    const filmeItems = document.querySelectorAll(".movie-item");

    filmeItems.forEach(item => {
        const titulo = item.querySelector("p").textContent.toLowerCase();
        if (titulo.includes(pesquisa)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}