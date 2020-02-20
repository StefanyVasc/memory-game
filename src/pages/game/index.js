/* responsável por criar as páginas e adicionar elementos na tela */

/* fazendo com que a função devolva algo pra mim, 
mas precisamos guardar o que ela devolve quando a função for executada*/
const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard();
const $memoryCardFront = createMemoryCard("-front");

/* inserindo primeiro o wrapper 
  - 1ª sempre pegar o #root
  - 2ª inserir o card wrapper dentro
  - 3ª pegar os cards e colocar dentro do card wrapper

 */

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);

$root.insertAdjacentElement("beforeend", $cardsWrapper); //com isso ele deve aparecer dentro da div
