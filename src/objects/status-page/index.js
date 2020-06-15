const statusPage = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .status-page{
        color: #393f41;
        font-size: 40px;
        text-transform: uppercase;
      }

      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createStatus = (content) => {
    module._style();
    return `
      <h1 class="status-page">
        ${content}
      </h1>
    `;
  };

  return {
    render: module.createStatus,
  };
})();
