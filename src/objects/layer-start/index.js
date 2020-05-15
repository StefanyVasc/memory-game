const layerStart = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    /* const $layer = document.querySelector("section");
    $layer.classList.add("layer-start"); */

    $style.textContent = `
      .layer-start {
        position: absolute;
        top: 0;
        opacity: 0.7; 
        background-color: #3a4042; 
        width: 100vw;
        height: 100vh;
      }

      .layer-start.-inative{
        display:none;
      }

    `;

    $head.insertBefore($style, null);
  };

  module.createLayer = () => {
    module._style();
    return `
      <section class="layer-start"></section>

    `;
  };

  return {
    createNewLayerStart: module.createLayer,
  };
})();
