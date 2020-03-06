const memoryCard = () => {
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
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
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

  /*   
o return da memorycard é associado a uma nova constante da page. Dai 
só é aplicado o estilo uma unica vez e sempre que ele é chamado na page
ele retorna apenas o conteudo do return. O estilo é inserido no momento
de preparação para o memory card (page)
*/

  return ({ nameClass, src, alt }) => `
      <article class= "memory-card ${nameClass}" onClick='handleClick(this)' >
        <img 
 
          class='icon' 
          src='${src}' 
          alt='${alt}'
          
           
        />
      </article>
    `;
};

const handleClick = $cardClear => {
  const $imgIcon = $cardClear.childNodes;

  $cardClear.classList.toggle("-front");

  if ($cardClear.classList.contains("-front")) {
    $imgIcon[1].setAttribute("src", "img/icon-woman.png");
    console.log($cardClear.classList);
  } else {
    $imgIcon[1].setAttribute("src", "img/icon-collabcode.png");
  }
};

/* const handleClick = $article => {
  const $img = document.getElementById("img-icon");

  console.log("card clicado", $article, $img);

  if ($article.classList.contains("-front")) {
    $article.classList.remove("-front");
    $img.src = "img/icon-collabcode.png";
  } else {
    $article.classList.add("-front");
  }

  $article.classList.toggle("-front");
  console.log($article.classList);

  const filhos = $article.childNodes;

  console.log(filhos[1]);
}; */
