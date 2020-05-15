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

      .fab.-inative {
        display: none;
        transition: display 2s ease-in-out;
        
      }

      
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = () => {
    const $fab = document.querySelector(".fab");
    const $layerFab = document.querySelector(".layer-start");

    $fab.classList.add("-inative");
    setInterval(() => {
      $layerFab.classList.add("-inative");
    }, 1200);
  };
  module.createFab = () => {
    module._style();

    return `
      <button class="fab" onClick="fabStart.fabHandleClick()">Start</button>
      

    `;
  };

  return {
    createNewFabStart: module.createFab,
    fabHandleClick: module.handleClick,
  };
})();
