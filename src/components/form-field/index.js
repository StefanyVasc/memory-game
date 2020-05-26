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

  module.createField = ({ content, placeholder, type }) => {
    module._style(type);
    return `
      <label for="${module._id}">${content}</label>
      <input type="${type}" id="${module._id}" placeholder="${placeholder}" required=""></input> 
    `;
  };

  return {
    render: module.createField,
  };
})();
