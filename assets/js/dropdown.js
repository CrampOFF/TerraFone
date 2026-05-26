const hamburguer = document.getElementById('hamburguer');
const menuDropdown = document.getElementById('menuDropdown');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('ativo');
    menuDropdown.classList.toggle('ativo');
});

// Fecha ao clicar em um link
menuDropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburguer.classList.remove('ativo');
        menuDropdown.classList.remove('ativo');
    });
});