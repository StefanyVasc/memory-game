/* pegando a root */

const $root = document.querySelector("#root");

/* criando o article */
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");

const $memoryCard2 = document.createElement("article");
const $memoryCard3 = document.createElement("article");
const $memoryCard4 = document.createElement("article");
const $memoryCard5 = document.createElement("article");
const $memoryCard6 = document.createElement("article");
const $memoryCard7 = document.createElement("article");
const $memoryCard8 = document.createElement("article");
const $memoryCard9 = document.createElement("article");
const $memoryCard10 = document.createElement("article");
const $memoryCard11 = document.createElement("article");
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

/* challenge basic */
$root.insertBefore($memoryCard2, $memoryCard);
$memoryCard2.classList.add("memory-card");
$memoryCard2.insertAdjacentHTML("afterbegin", $iconCollab);

/* ---------------------------------- */
$root.insertBefore($memoryCard3, null);
$memoryCard3.classList.add("memory-card");
$memoryCard3.insertAdjacentHTML("afterbegin", $iconCollab);

/* ---------------------------------- */
$root.insertBefore($memoryCard4, null);
$memoryCard4.classList.add("memory-card");
$memoryCard4.insertAdjacentHTML("afterbegin", $iconCollab);

/* ---------------------------------- */
$root.insertBefore($memoryCard5, null);
$memoryCard5.classList.add("memory-card");
$memoryCard5.insertAdjacentHTML("afterbegin", $iconCollab);

/* ---------------------------------- */
$root.insertBefore($memoryCard6, null);
$memoryCard6.classList.add("memory-card");
$memoryCard6.insertAdjacentHTML("afterbegin", $iconCollab);

/* ---------------------------------- */
$root.insertBefore($memoryCard7, null);
$memoryCard7.classList.add("memory-card");
$memoryCard7.insertAdjacentHTML("afterbegin", $iconCollab);

/* ---------------------------------- */
$root.insertBefore($memoryCard8, null);
$memoryCard8.classList.add("memory-card");
$memoryCard8.insertAdjacentHTML("afterbegin", $iconCollab);

/* ---------------------------------- */
$root.insertBefore($memoryCard9, null);
$memoryCard9.classList.add("memory-card");
$memoryCard9.insertAdjacentHTML("afterbegin", $iconCollab);

/* ---------------------------------- */
$root.insertBefore($memoryCard10, null);
$memoryCard10.classList.add("memory-card");
$memoryCard10.insertAdjacentHTML("afterbegin", $iconCollab);

/* ---------------------------------- */
$root.insertBefore($memoryCard11, null);
$memoryCard11.classList.add("memory-card");
$memoryCard11.insertAdjacentHTML("afterbegin", $iconCollab);
