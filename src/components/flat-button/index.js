const flatButton = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `

      .flat-button{
        width: 186px;
        height: 176px;
        background-color: #eae6da;
        color: #fffcee; 
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 0.58px; 
        border: none;
        text-transform: uppercase;
        
      }
    
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createFlat = () => {
    module._style();
    return `
      <button class="flat-button">Log in</button>
    `;
  };

  return {
    createNewFlatBtn: module.createFlat,
  };
})();
