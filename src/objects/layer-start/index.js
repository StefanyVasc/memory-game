const layerStart = (function () {
  const module = {};

  module.handleClick = ($component) => {
    $component.remove();
  };

  module.createLayer = (content) => {
    const $transparencyLayerStart = transparencyLayer.createNewTransparencyLayer();
    const $fabStart = fab.createNewFab(content);
    return `
      <div class="layer-start" onClick="layerStart.handleClick(this)">
        ${$transparencyLayerStart}
        ${$fabStart}
      </div>
    `;
  };

  return {
    createLayerStart: module.createLayer,
    handleClick: module.handleClick,
  };
})();
