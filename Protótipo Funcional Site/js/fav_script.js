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

    console.log("newList:", newList);

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
                <button class="plus-button" onclick="abrirPopup('${name}')">+</button>
            </div>
        </div>
    `;

    console.log("list name:", name);

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
let currentListName = "Default List"; // valor default

function abrirPopup(listName = "Default List") {
    currentListName = listName; // guarda o nome da lista atual
    document.getElementById("movie-popup").style.display = "flex";
    console.log("currentListName", currentListName);
    carregarFilmes();
}


// Função para fechar o pop-up
function fecharPopup() {
    document.getElementById("movie-popup").style.display = "none";
}

let filmes = [
    { title: "O Senhor dos Anéis", image: "../imgs/movies/FavPopUp/SenhorAneis.jpg", id: 1 },
    { title: "Matrix", image: "../imgs/movies/FavPopUp/Matrix.jpg", id: 2 },
    { title: "Star Wars", image: "../imgs/movies/Star Wars/StarWars.jpg", id: 3 },
    { title: "Avatar", image: "../imgs/movies//FavPopUp/Avatar.jpg", id: 4 },
    { title: "Vingadores", image: "../imgs/movies/Marvel/AvengersEndGame.jpg", id: 5 },
    { title: "Jurassic Park", image: "../imgs/movies//FavPopUp/JurassicPark.jpg", id: 6 },
    { title: "One Piece", image: "../imgs/movies//FavPopUp/OnePiece.jpg", id: 7 },
    { title: "The Last Of Us", image: "../imgs/movies//FavPopUp/LastOfUs.jpg", id: 8 },
    { title: "Dr House", image: "../imgs/movies//FavPopUp/DrHouse.jpg", id: 9 },
    { title: "Stranger Things", image: "../imgs/movies//FavPopUp/StrangerThings.jpg", id: 10 },
];

function toggleFavorito(filmeId) {
    const filme = filmes.find(f => f.id === filmeId);
    let favoritosPorLista = JSON.parse(localStorage.getItem('favoritos')) || {};

    console.log("currentListName:", currentListName);
    /** filme selecionado: Object { title: "O Senhor dos Anéis", image: "../imgs/random_img.png", id: 1 } */
    console.log("filme selecionado:", filme);
    /** "new list": Array [ {…} ]
​​          0: Object { title: "O Senhor dos Anéis", image: "../imgs/random_img.png", id: 1 }
​           ​length: 1 */
    console.log("Favoritos antes da alteração:", favoritosPorLista);

    // Verifica se a lista de favoritos da lista atual existe, se não, cria uma nova lista
    if (!favoritosPorLista[currentListName]) {
        favoritosPorLista[currentListName] = [];
    }

    const listaAtual = favoritosPorLista[currentListName];
    /** Array []
        0: Object { title: "O Senhor dos Anéis", image: "../imgs/random_img.png", id: 1 }
        length: 1 */
    console.log("Lista atual de favoritos:", listaAtual);

    // Verifica se o filme já está na lista de favoritos
    const jaFavorito = listaAtual.some(f => f.id === filmeId);
    console.log("Já favoritado?", jaFavorito);

    // Se o filme já está favoritado, remove ele; caso contrário, adiciona
    if (jaFavorito) {
        favoritosPorLista[currentListName] = listaAtual.filter(f => f.id !== filmeId);
    } else {
        favoritosPorLista[currentListName].push(filme);
        alert(`"${filme.title}" foi adicionado aos favoritos da lista "${currentListName}".`);
    }

    /** "new list": Array [ {…} ]
        0: Object { title: "O Senhor dos Anéis", image: "../imgs/random_img.png", id: 1 }
        length: 1 */
    console.log("Favoritos após a alteração:", favoritosPorLista);

    // Salva os favoritos no localStorage
    localStorage.setItem('favoritos', JSON.stringify(favoritosPorLista));
    /** voritos no localStorage após a alteração: ["O Senhor dos Anéis","O Senhor dos Anéis",{"title":"Jurassic Park","image":"https://via.placeholder.com/100x150?text=6","id":6},{"title":"O Senhor dos Anéis","image":"../imgs/random_img.png","id":1}] */
    console.log("Favoritos no localStorage após a alteração:", localStorage.getItem('favoritos'));
    // Atualiza a interface (carrega novamente os filmes e seus estados de favorito)
    carregarFilmes();
}


function carregarFilmes() {
    const movieList = document.getElementById("movie-list");

    // Limpa a lista de filmes antes de adicionar novos
    movieList.innerHTML = '';
    console.log("Carregando filmes...");

    filmes.forEach(filme => {
        const movieItem = document.createElement("div");
        movieItem.className = "movie-item";
        
        const isFavorite = isFavorito(filme.id);  // Verifica se o filme é favorito
        console.log("Filme:", filme.title, "Favorito?", isFavorite);

        movieItem.innerHTML = `
        <a href="MoviePage.html?id=${filme.id}" style="text-decoration: none; color: inherit;">
            <img src="${filme.image}" alt="${filme.title}" />
            <p>${filme.title}</p>
        </a>
        <div class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorito(${filme.id})"></div>
    `;

        movieList.appendChild(movieItem);
    });
}

function isFavorito(filmeId) {
    const favoritosPorLista = JSON.parse(localStorage.getItem('favoritos')) || {};
    if (!favoritosPorLista[currentListName]) {
        return false;
    }
    const listaAtual = favoritosPorLista[currentListName];

    console.log("Verificando se o filme está nos favoritos:", filmeId);
    console.log("Favoritos da lista atual:", listaAtual);

    return listaAtual.some(filme => filme.id === filmeId);
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