const eyePassword = (function () {
  const module = {};

  module.handleClick = ($component) => {
    const $tipo = document.querySelector("input[type='password'");

    $component.addEventListener("mouseup", function () {
      $tipo.type = "password";
    });

    $component.addEventListener("mousedown", function () {
      $tipo.type = "text";
    });
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-password {
        display: block;
        position: relative;
        width: 23px;
        height: 14.3px;
        object-fit: contain;
        opacity: 0.7;
        cursor: pointer;
      }

      
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createEyePassword = () => {
    module._style();
    return `
      <img src="img/hidden.png" class="eye-password" onClick="eyePassword.handleClick(this)" />
    `;
  };
  return {
    render: module.createEyePassword,
    handleClick: module.handleClick,
  };
})();
