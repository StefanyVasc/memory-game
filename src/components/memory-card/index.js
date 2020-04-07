const memoryCard = () => {
  const $head = document.querySelector("head");
  const $styleCard = document.createElement("style");

  $styleCard.textContent = `

    .memory-card { 
      width: 155px;
      height: 155px;
      position: relative;
    }
    .memory-card .card {
      width: 155px;
      height: 155px;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      cursor: pointer;
      position: absolute;

    }


    .memory-card.-active .card,
    .memory-card.-score .card{
      display: none;
    }

    .memory-card.-active .card.-front,
    .memory-card.-score .card.-front{
      display: flex;
    }
    
    .memory-card .card.-front {
      background-color: #ffffff;

    }
    
    
    .memory-card .card.-front::before {
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }
    
    .memory-card .card > .icon {
      width: 100px;
      height: 100px;
    }
    
    .memory-card .card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    
    }
  `;

  $head.insertBefore($styleCard, null);

  return ({ src, alt }) => `
      <div class="memory-card" onClick='handleClick(this)'>
        <article class= "card -front">
          <img        
            src='${src}' 
            alt='${alt}'
            class='icon'
            
          />      
        </article>

        <article class= "card">
          <img        
            src='img/icon-collabcode.png' 
            alt='O mascote da collabCode'
            class='icon'
          />
        </article>
      </div>
    `;
};

const flipCard = ($card) => {
  if (qtdActiveMemoryCard < 2) {
    $card.classList.toggle("-active");
  }
};

const activeFlip = () => {
  const $memoryCards = document.querySelectorAll(".memory-card.-active");

  if (qtdActiveMemoryCard === 1) {
    const firstCard = $memoryCards[0]
      .querySelector(".-front .icon")
      .getAttribute("src");
    const secondCard = $memoryCards[1]
      .querySelector(".-front .icon")
      .getAttribute("src");

    if (firstCard === secondCard) {
      score++;
      console.log("Score:", score);

      $memoryCards.forEach(($memoryCard) => {
        $memoryCard.classList.add("-score");
        $memoryCard.classList.remove("-active");
      });
    } else {
      console.log("Score:", score);
      setTimeout(() => {
        $memoryCards.forEach(($memoryCard) => {
          $memoryCard.classList.remove("-active");
        });

        qtdActiveMemoryCard = 0;
      }, 1200);
    }
  }
};

const handleClick = ($card) => {
  if (!$card.classList.contains("-active")) {
    flipCard($card);
    activeFlip();
  }
};
