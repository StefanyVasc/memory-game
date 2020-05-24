const collabLogo = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `

      .container-logo {
        width: 252px;
        height: 252px;
        background-color: #ffffff;
        position: absolute;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 102px;
        right: 60px;
        
        
      }

      .collabLogo {
        width: 171px;
        height: 175px;
        background-color: #ffffff;
      }
      

    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createLogo = () => {
    module._style();

    return `
      <div class="container-logo">
        <img src="img/icon-collabcode.png"
          alt='O mascote da collabCode'
          class='collabLogo'
        />
      </div>
      
    `;
  };
  return {
    createLogo: module.createLogo,
  };
})();
