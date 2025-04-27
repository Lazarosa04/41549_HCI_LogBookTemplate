
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
