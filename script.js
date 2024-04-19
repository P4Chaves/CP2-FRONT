// DROPDOWN
// Primeiro, selecione o menu suspenso e o botão que o abre no DOM
let dropdownMenu = document.querySelector('#dropdown-menu');
let botaoMenu = document.querySelector('.cabecalho__usuario');

// Adicione um ouvinte de eventos 'click' ao botão do menu
botaoMenu.addEventListener('click', function (event) {
    // Isso impede que o evento de clique se propague para o document
    event.stopPropagation();

    // Alterna a classe 'active' do menu suspenso
    dropdownMenu.classList.toggle('active');
});

// Adicione um ouvinte de eventos 'click' ao menu suspenso
dropdownMenu.addEventListener('click', function (event) {
    // Isso impede que o evento de clique se propague para o document
    event.stopPropagation();
});

// Adicione um ouvinte de eventos 'click' ao document
document.addEventListener('click', function () {
    // Se o document é clicado, remove a classe 'active' do menu suspenso
    dropdownMenu.classList.remove('active');
});

// calendario 

// Seleciona a barra de navegação, a div de detalhes de imóveis e a div 'limpar_datas'
const navbar = document.querySelector('.navbar');
const imoveisDetalhes = document.querySelector('.pequenos-detalhes');
const limparDatas = document.querySelector('.limpar_datas');
const botaoConferirData = document.querySelector('.botao_conferir_data');

// Remove a classe 'hidden' da barra de navegação
navbar.classList.remove('hidden');

// Adiciona um listener para o evento de scroll na janela
window.addEventListener('scroll', function() {
    // Verifica se a parte superior da div de detalhes de imóveis e 'limpar_datas' estão visíveis na tela
    const detalhesTop = imoveisDetalhes.getBoundingClientRect().top;
    const limparDatasTop = limparDatas.getBoundingClientRect().top;
    
    // Se a parte superior da div de detalhes de imóveis estiver acima ou no topo da janela
    if (detalhesTop <= 0) {
        // Adiciona a classe 'navbar-fixed' à barra de navegação
        navbar.classList.add('navbar-fixed');
    } else {
        // Remove a classe 'navbar-fixed' da barra de navegação
        navbar.classList.remove('navbar-fixed');
    }

    // Se a parte superior da div 'limpar_datas' estiver acima ou no topo da janela
    if (limparDatasTop <= 0) {
        // Adiciona a classe 'visible' à div 'botao_conferir_data'
        botaoConferirData.classList.add('visible');
    } else {
        // Remove a classe 'visible' da div 'botao_conferir_data'
        botaoConferirData.classList.remove('visible');
    }
});

// navbar embaixo











