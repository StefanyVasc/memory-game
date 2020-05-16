const transparencyLayer = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .layer-start {
        position: absolute;
        top: 0; 
        background-color: rgba(58,64,66, 0.5); 
        width: 100vw;
        height: 100vh;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.createLayer = () => {
    module._style();
    return `
      <div class="layer-start"></div>
    `;
  };

  return {
    createNewTransparencyLayer: module.createLayer,
  };
})();
