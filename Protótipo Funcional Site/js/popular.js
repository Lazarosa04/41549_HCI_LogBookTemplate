/** quando a página é carregada */
window.addEventListener('DOMContentLoaded', () => {
    /** recupera categorias do LocalStorage se existir senao cria array vazia */
    const followed = JSON.parse(localStorage.getItem('followedCategories')) || [];
    /** vai buscar as categorias (Disney, Marvel, ...) */
    const followedCategories = followed.map(item => item.category);

    /** para cada titulo vai ver se está no following se tiver mete certinho */
    document.querySelectorAll('.category-section').forEach(section => {
        const title = section.querySelector('.category-title').innerText;
        const button = section.querySelector('.popular_plus-button');

        if (followedCategories.includes(title)) {
            button.innerText = '✔️';
            button.classList.add('checked');
        }
    });
});

function toggleCheck(button) {
    /** obtem category-header */
    const header = button.parentElement;
    /** obtem nome da categoria */
    const category = header.querySelector('.category-title').innerText;
    /** irmao mais proximo é o movie-row */
    const movieImgs = header.nextElementSibling.querySelectorAll('img');

    let followed = JSON.parse(localStorage.getItem('followedCategories')) || [];

    /** se carregar no quando ta certo passa a + */
    if (button.classList.contains('checked')) {
        button.innerText = '+';
        button.classList.remove('checked');
        /** remove -> followed fica só os q são != do removido*/
        followed = followed.filter(item => item.category !== category);
    } else {
        /** faz o contrario */
        button.innerText = '✔️';
        button.classList.add('checked');
        /** cria array com as imagens */
        /** dicionario categoria, array movies */
        const movieItems = header.nextElementSibling.querySelectorAll('.movie-item');

        const movies = Array.from(movieItems).map(item => {
            return {
                src: item.querySelector('img').src,
                title: item.querySelector('.movie-title').innerText
            };
        });

        followed.push({ category, movies });

    }

    /** atualiza LocalStorage */
    localStorage.setItem('followedCategories', JSON.stringify(followed));
}