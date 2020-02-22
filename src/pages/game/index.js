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
const $memoryCardFrontC = createMemoryCard(
  "img/icon-c.png",
  "Icone de um livro da linguagem C++",
  "-front"
);
const $memoryCardFrontPHP = createMemoryCard(
  "img/icon-php.png",
  "Icone de um livro da linguagem PHP",
  "-front"
);

const $memoryCardFrontJava = createMemoryCard(
  "img/icon-java.png",
  "Icone de um livro da linguagem Java",
  "-front"
);

const $memoryCardFrontJs = createMemoryCard(
  "img/icon-js.png",
  "Icone de um livro da linguagem JavaScript",
  "-front"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);

$root.insertAdjacentElement("beforeend", $cardsWrapper); //com isso ele deve aparecer dentro da div
