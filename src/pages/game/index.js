const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();
/* createMemoryCard é o return da arrow function do memoryCard */

const $memoryCardBack = createMemoryCard({
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
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
