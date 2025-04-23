const followed = JSON.parse(localStorage.getItem('followedCategories')) || [];
    const container = document.createElement('div');

    followed.forEach(({ category, movies }) => {
        const section = document.createElement('div');
        section.classList.add('category-section');

        section.innerHTML = `
            <div class="category-header">
                <h2 class="category-title">${category}</h2>
                <button class="popular_plus-button checked" onclick="removeFollowed('${category}', this)">✔️</button>
            </div>
            <div class="movie-row">
                ${movies.map(src => `<img src="${src}" alt="Movie">`).join('')}
            </div>
        `;

        container.appendChild(section);
    });

    document.body.appendChild(container);

    function removeFollowed(category, button) {
        let followed = JSON.parse(localStorage.getItem('followedCategories')) || [];
        followed = followed.filter(item => item.category !== category);
        localStorage.setItem('followedCategories', JSON.stringify(followed));
        button.parentElement.parentElement.remove();
    }