const labelForm = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .label-form{
        font-size: 16px;
        color: #3a4042;
        opacity:0.5;
        
        
      }
    
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createLabel = (content) => {
    module._style();
    return `
      <label class="label-form">${content}</label>
    `;
  };

  return {
    render: module.createLabel,
  };
})();
