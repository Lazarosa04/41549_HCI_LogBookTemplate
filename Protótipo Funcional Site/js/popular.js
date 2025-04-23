function toggleCheck(button) {
    if (button.classList.contains('checked')) {
        button.innerText = '+';
        button.classList.remove('checked');
    } else {
        button.innerText = '✔️';
        button.classList.add('checked');
    }
}
window.addEventListener('DOMContentLoaded', () => {
    const followed = JSON.parse(localStorage.getItem('followedCategories')) || [];
    const followedCategories = followed.map(item => item.category);

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
    const header = button.parentElement;
    const category = header.querySelector('.category-title').innerText;
    const movieImgs = header.nextElementSibling.querySelectorAll('img');

    let followed = JSON.parse(localStorage.getItem('followedCategories')) || [];

    if (button.classList.contains('checked')) {
        button.innerText = '+';
        button.classList.remove('checked');
        followed = followed.filter(item => item.category !== category);
    } else {
        button.innerText = '✔️';
        button.classList.add('checked');
        const movies = Array.from(movieImgs).map(img => img.src);
        followed.push({ category, movies });
    }

    localStorage.setItem('followedCategories', JSON.stringify(followed));
}