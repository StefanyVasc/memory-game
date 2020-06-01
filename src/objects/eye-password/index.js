const eyePassword = (function () {
  const module = {};

  module.handleClick = ($component) => {
    const $tipo = document.querySelector("input[type='password'");

    $component.addEventListener("mouseup", function () {
      $tipo.type = "password";
      $component.classList.remove("-active");
    });

    $component.addEventListener("mousedown", function () {
      $tipo.type = "text";
      $component.classList.add("-active");
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
        opacity: 0.3;
        cursor: pointer;
      }

      .eye-password.-active {
        opacity: 1;
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
