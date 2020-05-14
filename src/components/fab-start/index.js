const fabStart = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .fab {
        width: 100px;
        height: 100px;
        background-color: #ffdbd9;
        border-radius: 50%;
        border: 2px solid #3a4042;
        outline: none;
        color: #3a4042 ;
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

      
    `;
    $head.insertBefore($style, null);
  };

  module.createFab = () => {
    module._style();
    return `
      <button class="fab">Start</button>

    `;
  };

  return {
    createNewFabStart: module.createFab,
  };
})();
