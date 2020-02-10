/* pegando a root */

const $root = document.querySelector("#root");

/* criando o article */
const $memoryCard = document.createElement("article");

/* outra forma de adicionar elementos diretamente */

const $icon = `
  <img 
    class='icon' 
    src='img/icon-collabcode.png' 
    alt='Gueio mascote da CollabCode'
  />
`;

/* adicionando a classe para poder ganhar o estilo do css */
$memoryCard.classList.add("memory-card");

/* colocando o elemento article dentro do root

insertBefore(elemento que quero IntersectionObserver, antes de qual elemento) */
$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("afterbegin", $icon);
