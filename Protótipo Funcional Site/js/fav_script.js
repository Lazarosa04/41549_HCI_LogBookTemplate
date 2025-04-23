function create() {
    const input = document.getElementById('createListInput');
    const listName = input.value.trim();

    if (listName === "") {
        alert("Please enter a list name.");
        return;
    }

    const container = document.createElement("div");
    container.className = "create-list-container";
    container.style.display = "inline-block";
    container.style.maxWidth = "fit-content";

    container.innerHTML = `
        <div class="list-item">
            <div class="list-header">
                <p>${listName}</p>
                <div class="icons">
                    <button class="icon-button">✏️</button>
                    <button class="icon-button">🗑️</button>
                </div>
            </div>

            <hr>

            <div class="list-body">
                <a href="outra-pagina.html">
                    <img src="../imgs/random_img.png" alt="Imagem da lista" width="100">
                </a>
                <button class="plus-button" onclick="abrirPopup()">+</button>
            </div>
        </div>
    `;

    // Inserir no container específico
    document.getElementById("list-container").appendChild(container);

    input.value = "";
}