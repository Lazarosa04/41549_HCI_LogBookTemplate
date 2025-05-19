window.addEventListener('DOMContentLoaded', () => {
    const followed = JSON.parse(localStorage.getItem('followedCategories')) || [];
    const container = document.getElementById('followedLists');
    container.innerHTML = ''; // limpa conteúdo anterior

    if (followed.length === 0) {
        container.innerHTML = '<p style="color:white">No followed lists.</p>';
        return;
    }

    followed.forEach(({ category, movies }) => {
        const section = document.createElement('div');
        section.classList.add('category-section');

        section.innerHTML = `
            <div class="category-header">
                <h2 class="category-title">${category}</h2>
                <button class="popular_plus-button checked" onclick="removeFollowed('${category}', this)">✔️</button>
            </div>
            <div class="movie-row">
                ${movies.map(movie => `
                    <div class="movie-item">
                        <a href="MoviePage.html">
                            <img src="${movie.src}" alt="Movie">
                            <p class="movie-title">${movie.title}</p>
                        </a>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(section);
    });
});



function removeFollowed(category, button) {
    let followed = JSON.parse(localStorage.getItem('followedCategories')) || [];
    followed = followed.filter(item => item.category !== category);
    localStorage.setItem('followedCategories', JSON.stringify(followed));
    button.parentElement.parentElement.remove();
}