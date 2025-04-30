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

// Alternar tema claro/escuro
function alternarTema() {
    document.body.classList.toggle('dark-mode');
    const botao = document.querySelector('.tema-switch i');
    botao.classList.toggle('fa-moon');
    botao.classList.toggle('fa-sun');
}

// Enviar mensagem do formulário
function enviarMensagem(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Simulação de envio
    alert('Mensagem enviada com sucesso!');
    form.reset();
    return false;
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
