/* responsável por criar as páginas e adicionar elementos na tela */
/* A PAGE É QUEM PASSA INFORMAÇÃO PRO COMPONENT E NÃO O CONTRÁRIO */

/* inserindo primeiro o wrapper 
  - 1ª sempre pegar o #root
  - 2ª inserir o card wrapper dentro
  - 3ª pegar os cards e colocar dentro do card wrapper
  - 4ª injetar na tela esses comportamentos

 */
const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(
  "img/icon-collabcode.png",
  "Gueio mascote da collabCode"
);
const $memoryCardFront = createMemoryCard(
  "img/icon-c.png",
  "Icone de um livro da linguagem C++",
  "-front"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);

$root.insertAdjacentElement("beforeend", $cardsWrapper); //com isso ele deve aparecer dentro da div
