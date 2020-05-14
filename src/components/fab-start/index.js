const fabStart = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .fab {
        background: #3a4042;
        width: 70px;
        height: 70px;
        background-color: #3a4042;
        border-radius: 100%;
        border: none;
        outline: none;
        color: #FFF;
        font-family: 'Balsamiq Sans', sans-sarif;
        font-size: 16px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        transition:.3s;
        z-index: 2;
        position: fixed;
        right: 140px;
        bottom: 20px;

      }

      .fab:focus {
        transform:scale(1.1);
        transform:rotate(45deg);
      }

      .fab:hover{
        box-shadow: 0 6px 14px 0 #666;
        transform: scale(1.05);
      }
    `;
    $head.insertBefore($style, null);
  };

  module.createFab = () => {
    module._style();
    return `
      <button class="fab"> Start</button>

    `;
  };

  return {
    createNewFabStart: module.createFab,
  };
})();
