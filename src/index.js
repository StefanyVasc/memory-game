/* pegando a root */

const $root = document.querySelector("#root");

/* criando o article */

const $memoryCardFront = document.createElement("article");

/* const $memoryCard2 = document.createElement("article");
const $memoryCard3 = document.createElement("article");
const $memoryCard4 = document.createElement("article");
const $memoryCard5 = document.createElement("article");
const $memoryCard6 = document.createElement("article");
const $memoryCard7 = document.createElement("article");
const $memoryCard8 = document.createElement("article");
const $memoryCard9 = document.createElement("article");
const $memoryCard10 = document.createElement("article");
const $memoryCard11 = document.createElement("article"); */
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

for (let contador = 0; contador < 10; contador++) {
  const $memoryCard = document.createElement("article");
  $memoryCard.classList.add("memory-card");
  $root.insertBefore($memoryCard, null);
  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

/* adicionando a classe para poder ganhar o estilo do css */

$memoryCardFront.classList.add("memory-card", "-front");

/* colocando o elemento article dentro do root
insertBefore(elemento que quero adicionar, antes de qual elemento) */

$root.insertAdjacentElement("afterbegin", $memoryCardFront);
/* $root.insertBefore($memoryCardFront, $memoryCard); */
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconFront);
