// Alternar tema
function alternarTema() {
  document.body.classList.toggle("dark-mode");
  const botao = document.querySelector(".tema-switch i");

  // Alterna o icone entre lua e sol
  botao.classList.toggle("fa-moon");
  botao.classList.toggle("fa-sun");
}
// Menu mobile ( Menu de Hamburguer - ideia de um feedback que recebi)
function configurarMenuMobile() {
  const menu = document.querySelector(".menu-lista");

  if (!menu) return;

  const botaoMenu = document.createElement("button");

  botaoMenu.classList.add("botao-menu");

  botaoMenu.innerHTML = "☰";

  botaoMenu.setAttribute("aria-label", "Abrir menu");

  document.querySelector(".menu").prepend(botaoMenu);

  botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("menu-aberto");

    const menuAberto = menu.classList.contains("menu-aberto");

    botaoMenu.innerHTML = menuAberto ? "✕" : "☰";

    botaoMenu.setAttribute(
      "aria-label",
      menuAberto ? "Fechar menu" : "Abrir menu",
    );
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      menu.classList.remove("menu-aberto");

      botaoMenu.innerHTML = "☰";

      botaoMenu.setAttribute("aria-label", "Abrir menu");
    });
  });
}

// Menu suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Inicialização
configurarMenuMobile();
