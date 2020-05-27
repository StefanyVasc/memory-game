const submitForm = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .submit-form{
        width: 302px;
        height: 48px;
        border-radius: 24px;
        background-color: #f25a70;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.34px;
        line-height: 15px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
      }
      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createSubmit = (content) => {
    module._style();

    return `
      <input type="submit" class="submit-form" value= " ${content}"> </input>
    `;
  };

  return {
    render: module.createSubmit,
  };
})();
