/* tudo que está dentro do page não pode ser acessado do lado de fora... 
o page que consome os outros arquivos */
(function () {
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();
  const createMemoryCard = memoryCard.createNewCard();
  /* createMemoryCard é o return da IIFE do memoryCard */

  const $pointBar = pointBar.createNewBar();

  const $fabStart = fabStart.createNewFabStart();

  const $memoryCardFrontC = createMemoryCard({
    src: "img/icon-c.png",
    alt: "Icone de um livro da linguagem C++",
  });

  const $memoryCardFrontPHP = createMemoryCard({
    src: "img/icon-php.png",
    alt: "Icone de um livro da linguagem PHP",
  });

  const $memoryCardFrontJava = createMemoryCard({
    src: "img/icon-java.png",
    alt: "Icone de um livro da linguagem Java",
  });

  const $memoryCardFrontJs = createMemoryCard({
    src: "img/icon-js.png",
    alt: "Icone de um livro da linguagem JavaScript",
  });

  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPHP);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPHP);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);

  $root.insertAdjacentHTML("afterbegin", $pointBar);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);
  $root.insertAdjacentHTML("beforeend", $fabStart);
})();
