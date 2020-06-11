const submitForm = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .submit-form{
        width: 100%;
        height: 48px;
        border-radius: 24px;
        background-color: #f25a70;
        font-size: 14px;
        text-transform: uppercase;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
      }
      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = (event, path) => {
    event.preventDefault();
    window.location.hash = `#/${path}`;
  };

  module.createSubmit = ({ content = "", path = "" }) => {
    module._style();

    return `
      <input type="submit" class="submit-form" value= "${content}" onClick="submitForm.handleClick(event, '${path}')">
    `;
  };

  return {
    render: module.createSubmit,
    handleClick: module.handleClick,
  };
})();
