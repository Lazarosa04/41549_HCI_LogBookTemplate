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
        image: "../imgs/random_img.png", // aqui podes usar outra imagem mais tarde
        link: "fav_lista.html"       // ou tornar isso dinâmico também
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
