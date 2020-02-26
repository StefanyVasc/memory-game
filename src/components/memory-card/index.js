/* component burro = component stateless
ele não tem informações de estado, não guarda dados, 
só guarda estrutura layout e comportamento.
é escalável*/
const createMemoryCard = ({ nameClass, src, alt }) => `
  <article class= "memory-card ${nameClass}">
    <img 
      class='icon' 
      src='${src}' 
      alt='${alt}'
      onClick= 'handleClick()'  
    />
  </article>
`;

const handleClick = () => console.log("card clicado");
