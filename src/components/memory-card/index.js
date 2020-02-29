/* component burro = component stateless
ele não tem informações de estado, não guarda dados, 
só guarda estrutura layout e comportamento.
é escalável*/
const createMemoryCard = card => `
  <article class= "memory-card ${card.nameClass}">
    <img 
      class='icon' 
      src='${card.src}' 
      alt='${card.alt}'
      onClick= 'handleClick()'  
    />
  </article>
`;

const handleClick = () => console.log("card clicado");
