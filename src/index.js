/* pegando a root */

const $root = document.querySelector("#root");

/* criando o article */
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");

/* outra forma de adicionar elementos diretamente */

const $iconCollab = `
  <img 
    class='icon' 
    src='img/icon-collabcode.png' 
    alt='Gueio mascote da CollabCode'
  />
`;

const $iconFront = `
    <img class="icon" 
    src="img/icon-c.png" 
    alt="icone de um livro da linguagem C++" 
  />
`;

/* adicionando a classe para poder ganhar o estilo do css */
$memoryCard.classList.add("memory-card");
$memoryCardFront.classList.add("memory-card", "-front");

/* colocando o elemento article dentro do root
insertBefore(elemento que quero adicionar, antes de qual elemento) */
$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);

$root.insertBefore($memoryCardFront, $memoryCard);
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconFront);
