window.addEventListener("load", () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

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
        const nextSlide = currentSlide.nextElementSibling || slides[0];
        moveToSlide(track, currentSlide, nextSlide);
    };

    const movePrev = () => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
        moveToSlide(track, currentSlide, prevSlide);
    };

    let slideInterval = setInterval(moveNext, 10000);

    const resetInterval = () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(moveNext, 10000);
    };

    nextButton.addEventListener('click', () => {
        moveNext();
        resetInterval();
    });

    prevButton.addEventListener('click', () => {
        movePrev();
        resetInterval();
    });
});


window.addEventListener('DOMContentLoaded', () => {
    const savedProfile = localStorage.getItem('profileData');
    if (savedProfile) {
        const profile = JSON.parse(savedProfile);

        document.getElementById('profileName').value = profile.name || '';
        document.getElementById('profileBio').value = profile.bio || '';

        if (profile.genres && profile.genres.length > 0) {
            genresList.innerHTML = ''; // limpa géneros antigos
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

function addGenre(genre) {
    const existingGenres = Array.from(genresList.children).map(g => g.innerText);
    if (existingGenres.includes(genre)) {
        return;
    }

    const genreTag = document.createElement('div');
    genreTag.className = 'genre-tag';
    genreTag.innerText = genre;

    // Dar uma cor aleatória de fundo
    genreTag.style.backgroundColor = getRandomColor();

    // Adicionar evento para remover o género ao clicar
    genreTag.addEventListener('click', () => {
        genresList.removeChild(genreTag);
    });

    genresList.appendChild(genreTag);
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
    bar.classList.toggle('hidden');
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