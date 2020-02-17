function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `
    <img 
      src='img/icon-collabcode.png' 
      alt='Gueio mascote da CollabCode' 
      class='icon' 
    />
  `;

  $memoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($memoryCard, null);

  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);

  $memoryCard.addEventListener("click", x => {
    console.log("clicou no Card frente");
    event.stopPropagation();
  });
}

function createMemoryCardFront() {
  const $memoryCardFront = document.createElement("article");

  const $iconFront = `
  <img 
    class='icon' 
    src='img/icon-c.png' 
    alt='icone de um livro da linguagem C++' 
  />
`;

  $memoryCardFront.classList.add("memory-card", "-front");

  $wrapCards.insertBefore($memoryCardFront, null);

  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconFront);

  $memoryCardFront.addEventListener("click", x => {
    console.log("clicou no Card verso");
    event.stopPropagation();
  });
}
