
function openFavPopup() {
    document.getElementById('fav-popup').style.display = 'block';
    loadDropdownLists();
}

function closeFavPopup() {
    document.getElementById('fav-popup').style.display = 'none';
}

function loadDropdownLists() {
    const dropdown = document.getElementById('listDropdown');
    dropdown.innerHTML = ""; // Limpa
    const myLists = JSON.parse(localStorage.getItem('myLists')) || [];

    myLists.forEach(list => {
        const option = document.createElement('option');
        option.value = list.name;
        option.textContent = list.name;
        dropdown.appendChild(option);
    });
}

function addMovieToList() {
    const selectedList = document.getElementById('listDropdown').value;
    if (!selectedList) {
        alert('Escolhe uma lista.');
        return;
    }

    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || {};
    if (!favoritos[selectedList]) {
        favoritos[selectedList] = [];
    }

    // Aqui metes o objeto do filme atual
    const filme = {
        title: "O Grande Mistério", // poderias dinamizar
        image: "../imgs/random_img.png",
        id: 99 // gera ou atribui o id correto
    };

    favoritos[selectedList].push(filme);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));

    alert('Adicionado com sucesso!');
    closeFavPopup();
}

function showCreateListInput() {
    document.getElementById('newListInputContainer').style.display = 'block';
}

function createNewList() {
    const listName = document.getElementById('newListName').value.trim();
    if (listName === "") {
        alert('Nome da lista não pode ser vazio.');
        return;
    }

    let myLists = JSON.parse(localStorage.getItem('myLists')) || [];
    myLists.push({
        name: listName,
        image: "../imgs/random_img.png",
        link: "fav_lista.html?listName=" + encodeURIComponent(listName)
    });

    localStorage.setItem('myLists', JSON.stringify(myLists));

    loadDropdownLists(); // atualiza dropdown
    document.getElementById('newListName').value = "";
    document.getElementById('newListInputContainer').style.display = 'none';
}

const episodesData = {
    1: ["Episódio 1: Diagnóstico", "Episódio 2: Mistério", "Episódio 3: O Dilema"],
    2: ["Episódio 1: Retorno", "Episódio 2: Crise", "Episódio 3: Revelação", "Episódio 4: Decisão"],
    3: ["Episódio 1: Colapso", "Episódio 2: Esperança", "Episódio 3: O Fim"]
  };
  
  function loadEpisodes(season) {
    const episodesBox = document.getElementById('episodesBox');
    episodesBox.innerHTML = ""; // Limpa os anteriores

    const episodes = episodesData[season] || [];
    episodes.forEach((ep, index) => {  // Adicionamos o 'index' aqui
        const button = document.createElement('button');
        button.className = 'episode-item';
        button.textContent = ep;
        button.onclick = () => {
            // Redireciona para o player.html com os parâmetros corretos
            window.location.href = `player.html?season=${season}&episode=${index + 1}`; // Usamos o index aqui
        };
        episodesBox.appendChild(button);
    });
}

  
  // Carregar temporada 1 ao iniciar
  window.addEventListener('DOMContentLoaded', () => {
    loadEpisodes('1');
  });
  