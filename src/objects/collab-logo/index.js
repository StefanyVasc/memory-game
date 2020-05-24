const collabLogo = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      width: 171px;
      height: 175px;
      background-color: #ffffff;

    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createLogo = () => {
    module._style();

    return `
      <img src="img/icon-collabcode.png"
        alt='O mascote da collabCode'
        class='collabLogo'
      />
      
    `;
  };
  return {
    createLogo: module.createLogo,
  };
})();
