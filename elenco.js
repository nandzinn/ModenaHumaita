document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');  // Botão para mostrar/ocultar o menu
    const barraLateral = document.getElementById('barraLateral');  // Barra lateral

    // Adiciona o evento de clique ao botão
    toggleButton.addEventListener('click', () => {
        // Verifica se a barra lateral está visível e alterna a classe 'show-sidebar'
        if (barraLateral.classList.contains('show-sidebar')) {
            barraLateral.classList.remove('show-sidebar');  // Esconde a barra lateral
        } else {
            barraLateral.classList.add('show-sidebar');  // Mostra a barra lateral
        }
    });
});
