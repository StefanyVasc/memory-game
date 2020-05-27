const flatButton = (function () {
  const module = {};

  module._id = 0;

  module._style = (active) => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `

      .flat-button-${module._id}{
        background-color: ${active ? "#f25a70" : "#eae6da"};
        width: 50%;
        height: 176px;
        font-size: 24px;
        font-weight: bold;
        color: ${active ? "#fff" : "#fffcee"};
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        display: inline-flex;
        float: left;
        padding-top:60px;
        box-sizing: border-box;
        justify-content: center;

      }

    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createFlat = (content = "", active = false) => {
    module._id++;
    module._style(active);

    return `
      <button class="flat-button-${module._id}"> ${content} </button>
    `;
  };

  return {
    render: module.createFlat,
  };
})();
