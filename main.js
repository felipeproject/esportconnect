// Função para carregar a barra de navegação
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            initializeDropdown(); // Inicializa o dropdown após carregar a navbar
        })
        .catch(error => console.error('Erro ao carregar a barra de navegação:', error));
}

// Função para inicializar o menu dropdown do perfil
function initializeDropdown() {
    const userCircle = document.getElementById('userCircle');
    const dropdownContent = document.querySelector('.dropdown-content');
    const username = new URLSearchParams(window.location.search).get('username'); // Obtém o nome do usuário da URL

    if (!username) {
        console.error('Usuário não encontrado');
        return;
    }

    // Exibir as iniciais do usuário no círculo
    const userInitials = username.substring(0, 3).toUpperCase();
    userCircle.textContent = userInitials;

    // Exibir o status do usuário
    document.getElementById('userStatus').textContent = `Você está logado como: ${username}`;

    // Mostrar o menu dropdown ao passar o mouse sobre o círculo de usuário
    userCircle.addEventListener('mouseenter', () => {
        dropdownContent.classList.add('visible'); // Torna o dropdown visível
    });

    // Esconder o menu dropdown quando o mouse sair do círculo de usuário
    userCircle.addEventListener('mouseleave', () => {
        dropdownContent.classList.remove('visible'); // Esconde o dropdown
    });

    // Mantém o menu dropdown visível enquanto o mouse estiver sobre ele
    dropdownContent.addEventListener('mouseenter', () => {
        dropdownContent.classList.add('visible'); // Mantém o dropdown visível
    });

    // Esconde o menu quando o mouse sai do dropdown
    dropdownContent.addEventListener('mouseleave', () => {
        dropdownContent.classList.remove('visible'); // Esconde o dropdown
    });

    // Função para logout (volta para o login)
    document.getElementById('logoutBtn').addEventListener('click', function () {
        window.location.href = "login.html";
    });
}

// Função para carregar conteúdo específico de uma página
function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('dynamicContent').innerHTML = data;
        })
        .catch(error => console.error(`Erro ao carregar o conteúdo da página ${page}:`, error));
}

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    loadNavbar(); // Carregar a barra de navegação
    loadContent('home.html'); // Exemplo de carregamento de conteúdo dinâmico (pode ser alterado conforme a necessidade)
});
// Função para ativar o link clicado e desativar os outros
function setActive(clickedLink) {
    // Obtém todos os links de navegação
    const links = document.querySelectorAll('.navbar .links a');
    
    // Remove a classe "active" de todos os links
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Adiciona a classe "active" ao link clicado
    clickedLink.classList.add('active');
}

