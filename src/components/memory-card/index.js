const createMemoryCard = (classModifier = "") => {
  /* as linhas abaixo simplificam a criação do article, 
  inclusão da classe do article e criação icone */

  if (classModifier == "-front") {
    const $memoryCardFront = `
      <article class= "memory-card -front">
        <img 
          class='icon' 
          src='img/icon-c.png' 
          alt='icone de um livro da linguagem C++'
          onClick= 'handleClick()'  
        />
      </article>
    `;
    return $memoryCardFront;
  } else {
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
  }
};

function handleClick() {
  console.log("card clicado");
}
