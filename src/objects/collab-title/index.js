const collabTitle = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `

      .collabTitle{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        font-family: inherit;
        font-size: 24px;
        font-weight: bold;
        line-height: 1.13;
        letter-spacing: 0.58px;
        text-align: center;
        color: #f25a70;
        width: 146px;
        height: 27px;
        text-transform: uppercase;
        
      }
      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createTitle = (content) => {
    module._style();

    return `
      <h1 class="collabTitle"> ${content}</h1>
    `;
  };

  return {
    createTitle: module.createTitle,
  };
})();
