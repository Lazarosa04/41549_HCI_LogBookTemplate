

    const allContent = [
        { title: "Avengers", genres: ["Action", "Sci-Fi"] },
        { title: "The Notebook", genres: ["Drama", "Romance"] },
        { title: "Superbad", genres: ["Comedy"] },
        { title: "Insidious", genres: ["Horror", "Thriller"] },
        { title: "Interstellar", genres: ["Sci-Fi", "Drama"] },
        { title: "Tenet", genres: ["Sci-Fi", "Action"] },
        { title: "Parasite", genres: ["Drama", "Thriller"] },
        { title: "Toy Story", genres: ["Comedy", "Family"] },
        { title: "Joker", genres: ["Drama", "Crime"] },
        { title: "Frozen", genres: ["Family", "Musical"] },
        { title: "The Conjuring", genres: ["Horror", "Mystery"] },
        { title: "Shrek", genres: ["Comedy", "Fantasy"] },
        { title: "John Wick", genres: ["Action", "Thriller"] },
        { title: "La La Land", genres: ["Musical", "Romance"] },
        { title: "Inception", genres: ["Sci-Fi", "Thriller"] },
        { title: "Coco", genres: ["Family", "Musical"] },
        { title: "Get Out", genres: ["Horror", "Thriller"] },
        { title: "Deadpool", genres: ["Action", "Comedy"] },
        { title: "The Matrix", genres: ["Action", "Sci-Fi"] },
        { title: "Soul", genres: ["Family", "Fantasy"] },
        { title: "The Lion King", genres: ["Family", "Adventure"] },
        { title: "A Quiet Place", genres: ["Horror", "Sci-Fi"] },
        { title: "Titanic", genres: ["Drama", "Romance"] },
        { title: "Guardians of the Galaxy", genres: ["Action", "Comedy"] },
        { title: "The Revenant", genres: ["Drama", "Adventure"] },
        { title: "Luca", genres: ["Family", "Adventure"] },
        { title: "Black Panther", genres: ["Action", "Drama"] },
        { title: "Encanto", genres: ["Family", "Musical"] },
        { title: "Whiplash", genres: ["Drama", "Music"] },
        { title: "The Batman", genres: ["Action", "Crime"] },
        { title: "Finding Nemo", genres: ["Family", "Adventure"] },
        { title: "Dune", genres: ["Sci-Fi", "Adventure"] },
        { title: "Zootopia", genres: ["Family", "Comedy"] },
        { title: "The Social Network", genres: ["Drama", "Biography"] },
        { title: "Spider-Man: No Way Home", genres: ["Action", "Adventure"] },
        { title: "The Grand Budapest Hotel", genres: ["Comedy", "Drama"] },
        { title: "Her", genres: ["Drama", "Sci-Fi"] },
        { title: "The Irishman", genres: ["Drama", "Crime"] },
        { title: "Inside Out", genres: ["Family", "Adventure"] },
        { title: "Doctor Strange", genres: ["Action", "Fantasy"] },
        { title: "Midsommar", genres: ["Horror", "Drama"] },
        { title: "Knives Out", genres: ["Mystery", "Comedy"] },
        { title: "1917", genres: ["Drama", "War"] },
        { title: "Moana", genres: ["Family", "Adventure"] },
        { title: "The Flash", genres: ["Action", "Sci-Fi"] },
        { title: "The Witch", genres: ["Horror", "Drama"] },
        { title: "Soul Surfer", genres: ["Drama", "Sport"] },
        { title: "The Truman Show", genres: ["Drama", "Sci-Fi"] },
        { title: "Cars", genres: ["Family", "Comedy"] }
    ];

    function loadRecommendations() {
        const genreDisplay = document.getElementById('selectedGenres');
        const container = document.getElementById('recommendationsContainer');
        container.innerHTML = ''; // limpa recomendações anteriores
    
        const profile = JSON.parse(localStorage.getItem('profileData'));
    
        if (profile && profile.genres && profile.genres.length > 0) {
            genreDisplay.textContent = `(${profile.genres.join(', ')})`;
            const recommended = allContent.filter(item =>
                item.genres.some(genre => profile.genres.includes(genre))
            );
    
            if (recommended.length > 0) {
                recommended.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'recommendation-card';
                    card.innerHTML = `
                        <img src="../imgs/random_img.png" alt="Imagem do Filme">
                        <div class="card-info">
                            <h3>${item.title}</h3>
                            <div class="genre-tags">${item.genres.join(', ')}</div>
                        </div>
                    `;
                    container.appendChild(card);
                });
            } else {
                container.innerText = "Nenhum filme encontrado com base nos teus gostos.";
            }
        } else {
            container.innerHTML = `
                <div class="no-recommendations">
                    <p>Não encontrámos recomendações porque ainda não definiste os teus géneros favoritos.</p>
                    <p>Vai ao <strong>perfil</strong> e escolhe os géneros de que gostas para receber sugestões personalizadas!</p>
                </div>
            `;
            genreDisplay.textContent = '';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        loadRecommendations(); // isto agora funciona porque a função existe antes
    });
