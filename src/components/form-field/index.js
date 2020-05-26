const formField = (function () {
  const module = {};

  module._id = 0;

  module._style = (type) => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      label{
        font-size: 16px;
        opacity:0.5;
        text-align: left;
        color: #3a4042;
        line-height: 1.13;
        

      }

      input[type=${type}] {
        font-size: 18px;
        width: 370px;
        background-color: #fff;
        border-bottom: solid 1px #3a4042;
        padding-top: 22px;
      }
    
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.isValid = (input) => {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(regex.test(input.value));

    return regex.test(input.value)
      ? console.log("válido")
      : console.log("inválido");
  };

  module.createField = ({ content, placeholder, type }) => {
    module._id++;
    module._style(type);

    return `
      <label for="${module._id}">${content}</label>
      <input type="${type}" id="${module._id}" placeholder="${placeholder}" required=""  onkeyup="formField.isValid(this)"></input> 
      
      
    `;
  };

  return {
    render: module.createField,
    isValid: module.isValid,
  };
})();
