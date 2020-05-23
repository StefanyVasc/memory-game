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
        text-transform: uppercase;
        
      }

      .flat-button.-active { 
        background-color: #f25a70; 
        color: #ffffff;
      }
    
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createFlat = ({ content, variationClass }) => {
    module._style();
    return `
      <button class="flat-button ${variationClass}">${content}</button>
    `;
  };

  return {
    createNewFlatBtn: module.createFlat,
  };
})();
