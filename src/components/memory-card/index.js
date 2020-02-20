const createMemoryCard = () => {
  /* as linhas abaixo simplificam a criação do article, 
  inclusão da classe do article e criação icone */
  const $memoryCard = `
    <article class= "memory-card">
      <img 
        src='img/icon-collabcode.png' 
        alt='Gueio mascote da CollabCode' 
        class='icon'
        onClick= 'handleClick()' 
      />
    </article>
  `;

  return $memoryCard;

  /* $memoryCard.addEventListener("click", x => {
    console.log("clicou no Card frente");
    event.stopPropagation();
  }); */
};

const createMemoryCardFront = () => {
  const $memoryCard = `
    <article class= "memory-card -front">
      <img 
        class='icon' 
        src='img/icon-c.png' 
        alt='icone de um livro da linguagem C++'
        onClick= 'handleClick()'  
      />
    </article>
  `;
  return $memoryCard;
  /* $memoryCardFront.addEventListener("click", x => {
    console.log("clicou no Card verso");
    event.stopPropagation();
  }); */
};

function handleClick() {
  console.log("card clicado");
}
