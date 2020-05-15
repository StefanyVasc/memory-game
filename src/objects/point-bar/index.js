const pointBar = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .point-bar{
        height: 40px;
        background-color: #3a4042;
        text-align: center;
        font-family: 'Balsamiq Sans', sans-sarif;
      }

      .point-bar > .counter{
        color: #FFF;
        line-height: 40px;
        font-weight: bold;

      }
    `;

    $head.insertBefore($style, null);
  };

  module.scoreBarCount = () => {
    const $counter = document.querySelector(".point-bar > .counter");
    $counter.textContent = store.score;
  };

  module.createBar = () => {
    module._style();
    return `
      <header class="point-bar">
        <span class="counter">0</span>
      </header>
    `;
  };

  return {
    createNewBar: module.createBar,
    scoreBar: module.scoreBarCount,
  };
})();
