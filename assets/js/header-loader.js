const headerPlaceholder = document.getElementById('site-header');

if (headerPlaceholder) {
    fetch('/pages/header.html')
        .then(response => response.text())
        .then(html => {
            headerPlaceholder.innerHTML = html;
        })
        .catch(() => {
            headerPlaceholder.innerHTML = '<div class="header-error">Erro ao carregar o cabeçalho.</div>';
        });
}
