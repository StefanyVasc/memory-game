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

const $memoryCard = createMemoryCard({
  src: "img/icon-collabcode.png",
  alt: "Gueio mascote da collabCode"
});

const $memoryCardFrontC = createMemoryCard({
  src: "img/icon-c.png",
  alt: "Icone de um livro da linguagem C++",
  nameClass: "-front"
});

const $memoryCardFrontPHP = createMemoryCard({
  src: "img/icon-php.png",
  alt: "Icone de um livro da linguagem PHP",
  nameClass: "-front"
});

const $memoryCardFrontJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "Icone de um livro da linguagem Java",
  nameClass: "-front"
});

const $memoryCardFrontJs = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Icone de um livro da linguagem JavaScript",
  nameClass: "-front"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);

$root.insertAdjacentElement("beforeend", $cardsWrapper); //com isso ele deve aparecer dentro da div
