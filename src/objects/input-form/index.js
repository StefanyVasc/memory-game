const inputForm = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-form{
        display: block;
        width: 100%;
        font-size: 18px;
        font-weight: bold;
        background-color: #fff;
        border-bottom: solid 2px rgba(58, 64, 66, 0.5);
        padding-bottom: 12px;
        padding-top: 12px

      }

      .input-form + .label-form{
        margin-top: 30px;
      }

      
      .input-form::placeholder {
        font-weight: normal;
        color: #f25a70;
        opacity: 0.5;
      }

      .input-form + .forget-password{
        margin-top: 43px;
      }
      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createInput = ({ placeholder, type }) => {
    module._style();

    return `
      <input class="input-form" type="${type || "text"}" id="" placeholder="${
      placeholder || ""
    }" required=""></input> 
    `;
  };

  return {
    render: module.createInput,
  };
})();
