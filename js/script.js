// Obtendo referências para os elementos HTML que serão usados
const btnMobile = document.getElementById("button-mobile");
const nav = document.getElementById("nav");
const menuIconOpen = document.getElementById("menu-icon-open");
const menuIconClose = document.getElementById("menu-icon-close");
const linksMenu = document.querySelectorAll(".header-menu-link");

// Função para alternar o menu (abrir/fechar)
function toggleMenu() {
  nav.classList.toggle("active");

  // Trocar entre os ícones
  if (nav.classList.contains("active")) {
    menuIconOpen.style.display = "none";
    menuIconClose.style.display = "block";
  } else {
    menuIconOpen.style.display = "block";
    menuIconClose.style.display = "none";
  }
}
// Adiciona um ouvinte de evento para detectar cliques no botão e chama a função toggleMenu()
// Função para fechar o menu quando um link é clicado
function closeMenuOnClick() {
  nav.classList.remove("active"); // Fecha o menu removendo a classe 'active'
  menuIconOpen.style.display = "block";
  menuIconClose.style.display = "none";
}

btnMobile.addEventListener("click", toggleMenu); // Adiciona o evento para abrir/fechar o menu ao clicar no botão

// Adiciona um ouvinte de evento para cada link no menu
linksMenu.forEach((link) => {
  link.addEventListener("click", closeMenuOnClick);
});

// Final menu mobile

//mudar a cor do menu quando o menu abaixar
window.addEventListener("scroll", () => {
  let menuHeader = document.querySelector(".wrapper");

  //adicionando dinamicamente essa classe
  menuHeader.classList.toggle("rolagem", window.scrollY > 0);
});

// texto do hero

const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Front-end";
  }, 0);
  setTimeout(() => {
    text.textContent = "UX Design";
  }, 4000);
  setTimeout(() => {
    text.textContent = "UI Design";
  }, 8000); //1s = 1000 milliseconds
};

 textLoad();
 setInterval(textLoad, 12000);
