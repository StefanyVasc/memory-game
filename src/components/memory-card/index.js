/* component burro = component stateless
ele não tem informações de estado, não guarda dados, 
só guarda estrutura layout e comportamento.
é escalável*/
const createMemoryCard = ({ nameClass, src, alt }) => {
  cardStyle();
  return `
    <article class= "memory-card ${nameClass}">
      <img 
        class='icon' 
        src='${src}' 
        alt='${alt}'
        onClick= 'handleClick()'  
      />
    </article>
  `;
};

const cardStyle = () => {
  const $head = document.querySelector("head");
  const $styleCard = document.createElement("style");

  $styleCard.textContent = `
    .memory-card {
      width: 155px;
      height: 155px;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
    }
    
    .memory-card.-front {
      background-color: #ffffff;
    }
    
    
    .memory-card.-front::before {
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }
    
    .memory-card > .icon {
      width: 100px;
      height: 100px;
    }
    
    .memory-card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    
    }
  `;
  $head.insertBefore($styleCard, null);
};

const handleClick = () => console.log("card clicado");
