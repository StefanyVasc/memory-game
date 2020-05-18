const fab = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .fab {
        width: 100px;
        height: 100px;
        background-color: #f25a70;
        border-radius: 50%;
        border: 2px solid #3a4042;
        outline: none;
        color: #fff ;
        font-family: 'Balsamiq Sans', sans-sarif;
        font-size: 1.05em;
        font-weight: bold;
        text-transform: uppercase;
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        cursor: pointer;
        box-shadow: 0px 4px 8px #3c4244;
      }

      .fab.-disable { 
        opacity: 0;
        transition: opacity 200ms linear; 
      }
      
    `;

    $head.insertBefore($style, null);
  };

  module.createFab = (content) => {
    module._style();

    return `
      <button class="fab">${content}</button>
    `;
  };

  return {
    createNewFab: module.createFab,
  };
})();
