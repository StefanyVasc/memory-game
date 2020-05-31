const forgetPassword = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .forget-password {
        display: block;
        text-decoration: none; 
        font-size: 14px;
        color: #3a4042;
        opacity: 0.7;
        text-align: right;
        line-height: 1.71;

      }
      .forget-password + .submit-form { 
        margin-top: 113px;
      }

    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createForgetPassword = (content) => {
    module._style();
    return `
      <a href="#" class="forget-password">${content} </a>
    `;
  };

  return {
    render: module.createForgetPassword,
  };
})();
