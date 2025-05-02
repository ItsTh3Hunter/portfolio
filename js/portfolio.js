// Animação das barras de progresso
function animarBarrasProgresso() {
    const barras = document.querySelectorAll('.progresso');
    barras.forEach(barra => {
        const width = barra.dataset.width;
        barra.style.width = width + '%';
    });
}

// Animação de entrada dos elementos
function verificarElementosVisiveis() {
    const elementos = document.querySelectorAll('.animacao-entrada');
    elementos.forEach(elemento => {
        const posicaoTopo = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;
        
        if (posicaoTopo < alturaTela - 100) {
            elemento.classList.add('visivel');
        }
    });
}

// Alternar tema 
function alternarTema() {
    document.body.classList.toggle('dark-mode');
    const botao = document.querySelector('.tema-switch i');
    
    // Alterna o icone entre lua e sol
    botao.classList.toggle('fa-moon');
    botao.classList.toggle('fa-sun');
}

 // Menu suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicialização
window.addEventListener('load', animarBarrasProgresso);
window.addEventListener('scroll', verificarElementosVisiveis);
verificarElementosVisiveis();
