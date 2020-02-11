/* pegando a root */

const $root = document.querySelector("#root");

/* criando o article */
const $memoryCard = document.createElement("article");
const $memoryCardReveal = document.createElement("article");

/* outra forma de adicionar elementos diretamente */

const $icon = `
  <img 
    class='icon' 
    src='img/icon-collabcode.png' 
    alt='Gueio mascote da CollabCode'
  />
`;

const $iconReveal = `<img class="icon -ball" src="img/icon-c.png" alt="icone c" />`;

/* adicionando a classe para poder ganhar o estilo do css */
$memoryCard.classList.add("memory-card");
$memoryCardReveal.classList.add("memory-card", "-reveal");

/* colocando o elemento article dentro do root

insertBefore(elemento que quero IntersectionObserver, antes de qual elemento) */
$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("afterbegin", $icon);

$root.insertBefore($memoryCardReveal, $memoryCard);
$memoryCardReveal.insertAdjacentHTML("afterbegin", $iconReveal);
