const params = new URLSearchParams(window.location.search);
    const listName = params.get('listName');

    // Atualiza o nome na interface, se houver
    if (listName) {
        document.querySelector('.list-name').textContent = listName;
    }