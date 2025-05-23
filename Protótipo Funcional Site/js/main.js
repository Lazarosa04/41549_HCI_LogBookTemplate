window.addEventListener('DOMContentLoaded', () => {
    // Carousel
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track?.children || []);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

    if (slides.length > 0) {
        const slideWidth = slides[0].getBoundingClientRect().width;

        slides.forEach((slide, index) => {
            slide.style.position = 'absolute';
            slide.style.top = 0;
            slide.style.left = `${slideWidth * index}px`;
        });

        track.style.position = 'relative';
        track.style.transition = 'transform 0.5s ease-in-out';

        const moveToSlide = (track, currentSlide, targetSlide) => {
            const amountToMove = targetSlide.style.left;
            track.style.transform = `translateX(-${amountToMove})`;
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        };

        const moveNext = () => {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide?.nextElementSibling || slides[0];
            moveToSlide(track, currentSlide, nextSlide);
        };

        const movePrev = () => {
            const currentSlide = track.querySelector('.current-slide');
            const prevSlide = currentSlide?.previousElementSibling || slides[slides.length - 1];
            moveToSlide(track, currentSlide, prevSlide);
        };

        let slideInterval = setInterval(moveNext, 10000);

        const resetInterval = () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(moveNext, 10000);
        };

        nextButton?.addEventListener('click', () => {
            moveNext();
            resetInterval();
        });

        prevButton?.addEventListener('click', () => {
            movePrev();
            resetInterval();
        });
    }

    // Perfil
    const savedProfile = localStorage.getItem('profileData');
    if (savedProfile) {
        const profile = JSON.parse(savedProfile);

        document.getElementById('profileName').value = profile.name || '';
        document.getElementById('profileBio').value = profile.bio || '';

        const genresList = document.getElementById('genresList');
        if (genresList && profile.genres?.length > 0) {
            genresList.innerHTML = '';
            profile.genres.forEach(genre => {
                const genreTag = document.createElement('div');
                genreTag.className = 'genre-tag';
                genreTag.innerText = genre;
                genreTag.style.backgroundColor = getRandomColor();

                genreTag.addEventListener('click', () => {
                    genresList.removeChild(genreTag);
                });

                genresList.appendChild(genreTag);
            });
        }

        // Mostrar botão de recomendações se houver géneros
        const recButton = document.getElementById('recommendation-btn');
        if (profile.genres?.length > 0 && recButton) {
            recButton.classList.remove('hidden');
        }
    }
});




const profileIcon = document.querySelector('.profile');
const sidebar = document.getElementById('profileSidebar');
const profilePicInput = document.getElementById('profilePicInput');
const profilePicture = document.getElementById('profilePicture');
const genreSelector = document.getElementById('genreSelector');
const genresList = document.getElementById('genresList');

profileIcon.addEventListener('click', () => {
    sidebar.classList.add('open');
});

function closeSidebar() {
    sidebar.classList.remove('open');
    genreSelector.classList.add('hidden');
    resetProfileForm(); // <-- nova função que vamos fazer
}

function resetProfileForm() {
    const savedProfile = localStorage.getItem('profileData');
    if (savedProfile) {
        const profile = JSON.parse(savedProfile);

        document.getElementById('profileName').value = profile.name || '';
        document.getElementById('profileBio').value = profile.bio || '';

        genresList.innerHTML = '';
        if (profile.genres && profile.genres.length > 0) {
            // Dentro do forEach onde recrias os géneros
            profile.genres.forEach(genre => {
                const genreTag = document.createElement('div');
                genreTag.className = 'genre-tag';
                genreTag.innerText = genre;

                // Adicionar o event listener para poder remover
                genreTag.addEventListener('click', () => {
                    genresList.removeChild(genreTag);
                });

                // Dar uma nova cor aleatória ao carregar
                genreTag.style.backgroundColor = getRandomColor();

                genresList.appendChild(genreTag);
            });

        }
    } else {
        document.getElementById('profileName').value = '';
        document.getElementById('profileBio').value = '';
        genresList.innerHTML = '';
    }
}



profilePicture.addEventListener('click', () => {
    profilePicInput.click();
});

profilePicInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if(file) {
        profilePicture.src = URL.createObjectURL(file);
    }
});

function showGenreOptions() {
    genreSelector.classList.toggle('hidden');
}

function toggleGenreSelection(element) {
    element.classList.toggle('selected');
}

function confirmGenreSelection() {
    const selected = document.querySelectorAll('#genreSelector .genre-option.selected');
    selected.forEach(el => {
        const genre = el.innerText;
        const existingGenres = Array.from(genresList.children).map(g => g.innerText);
        if (!existingGenres.includes(genre)) {
            const genreTag = document.createElement('div');
            genreTag.className = 'genre-tag';
            genreTag.innerText = genre;

            // Cor aleatória
            genreTag.style.backgroundColor = getRandomColor();

            genreTag.addEventListener('click', () => {
                genresList.removeChild(genreTag);
            });

            genresList.appendChild(genreTag);
        }
        // Desmarca após adicionar
        el.classList.remove('selected');
    });

    genreSelector.classList.add('hidden');
}



// Função para gerar uma cor aleatória
function getRandomColor() {
    const colors = [
        '#FFF176', // Amarelo claro
        '#81C784', // Verde claro
        '#81D4FA', // Azul claro
        '#F8BBD0', // Rosa claro
        '#CE93D8', // Roxo claro
        '#FFB74D'  // Laranja claro
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}




function saveProfile() {
    const name = document.getElementById('profileName').value;
    const bio = document.getElementById('profileBio').value;
    
    // Pega todos os géneros adicionados
    const genres = [];
    document.querySelectorAll('.genre-tag').forEach(tag => {
        genres.push(tag.innerText);
    });

    // Criar um objeto para guardar
    const profileData = {
        name: name,
        bio: bio,
        genres: genres
    };

    // Salvar no localStorage
    localStorage.setItem('profileData', JSON.stringify(profileData));

    alert('Perfil guardado!');

    if (window.location.pathname.includes("recommendation.html")) {
        if (typeof loadRecommendations === 'function') {
            loadRecommendations(); // Agora vai funcionar
        }
    }

    if (window.location.pathname.includes("index.html")) {
        const recButton = document.getElementById('recommendation-btn');
        if (genres.length > 0 && recButton) {
            recButton.classList.remove('hidden');
        } else {
            recButton.classList.add('hidden');
        }
    }

    closeSidebar();
}


// Abre o menu lateral
document.querySelector('.menu img').addEventListener('click', () => {
    document.getElementById('menuSidebar').classList.add('open');
});

// Fecha o menu lateral
function closeMenuSidebar() {
    document.getElementById('menuSidebar').classList.remove('open');
}

function toggleDropdown(event) {
    event.preventDefault();
    const toggle = event.currentTarget;
    const parent = toggle.parentElement;
    const menu = parent.querySelector(".dropdown-menu");

    menu.classList.toggle("hidden");
    parent.classList.toggle("open");
}


document.querySelector('.search').addEventListener('click', function () {
    const bar = document.getElementById('searchBar');

    const profileSidebar = document.getElementById('profileSidebar');
    const menuSidebar = document.getElementById('menuSidebar');


    // fechar menu e perfil
    const isOpen = !bar.classList.contains('hidden');

    if (isOpen) {
        bar.classList.add('hidden');
    } else {
        bar.classList.remove('hidden');
        profileSidebar.classList.remove('open');
        menuSidebar.classList.remove('open');
    }
});

document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

document.getElementById('searchButton').addEventListener('click', performSearch);

function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        // Aqui podes redirecionar para uma página ou fazer uma pesquisa
        console.log("Searching for:", query);
        // Exemplo: window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
}



document.getElementById('filterButton').addEventListener('click', function() {
    const modal = document.querySelector('.filter-modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
});

document.querySelectorAll('.genre-btn').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('selected');
    });
  });

  // Ao clicar no botão "Search"
document.getElementById("searchButton").addEventListener("click", () => {
    const searchTerm = document.getElementById("searchInput").value.trim();
    const params = new URLSearchParams();
    if (searchTerm) params.append("search", searchTerm);
    window.location.href = `search.html?${params.toString()}`;
});

// Ao clicar no botão "Filter"
document.querySelector("#filter-modal .actions button:not(#cancel-btn)").addEventListener("click", () => {
    const selects = document.querySelectorAll("#filter-modal select");
    const params = new URLSearchParams();

    // Adiciona os selects à query
    selects.forEach(select => {
        const label = select.closest("label").textContent.trim().split(":")[0].toLowerCase();
        params.append(label, select.value);
    });

    // Adiciona os géneros selecionados
    const selectedGenres = Array.from(document.querySelectorAll(".genre-btn.selected")).map(btn => btn.textContent);
    if (selectedGenres.length > 0) {
        params.append("genres", selectedGenres.join(","));
    }

    window.location.href = `search.html?${params.toString()}`;
});


const menuSidebar = document.getElementById('menuSidebar');
// Ao clicar no ícone de perfil// Ao clicar no ícone de perfil
profileIcon.addEventListener('click', () => {
    sidebar.classList.add('open');
    // Fecha o menu se estiver aberto
    menuSidebar.classList.remove('open');

    // fechar pesquisa
    const bar = document.getElementById('searchBar');
    const isOpen = bar.classList.contains('hidden');

    if (!isOpen) {
        bar.classList.add('hidden');
        menuSidebar.classList.remove('open');
    }
});


// Ao clicar no ícone do menu
document.querySelector('.menu img').addEventListener('click', () => {
    menuSidebar.classList.add('open');
    // Fecha o perfil se estiver aberto
    sidebar.classList.remove('open');

    // fechar mpesquisa
    const bar = document.getElementById('searchBar');
    const isOpen = bar.classList.contains('hidden');

    if (!isOpen) {
    bar.classList.add('hidden');
    profileSidebar.classList.remove('open');
}

});
