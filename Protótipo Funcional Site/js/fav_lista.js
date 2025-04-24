const params = new URLSearchParams(window.location.search);
const listName = params.get('listName') || "Default List";
document.querySelector('.list-name').textContent = listName;

const allFavoritos = JSON.parse(localStorage.getItem('favoritos')) || {};
const filmesDaLista = allFavoritos[listName] || [];

const container = document.getElementById("movies-container");
container.innerHTML = '';

if (filmesDaLista.length === 0) {
    container.innerHTML = '<p style="color: white; padding: 20px;">Ainda não há filmes nesta lista.</p>';
} else {
    filmesDaLista.forEach(filme => {
        if (!filme) return; // ignora undefined
        const div = document.createElement("div");
        div.className = "filme-card";
        div.innerHTML = `
            <img src="${filme.image}" alt="${filme.title}" width="100">
            <p style="color: white;">${filme.title}</p>
        `;
        container.appendChild(div);
    });
}
