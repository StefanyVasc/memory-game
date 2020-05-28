const formSignUp = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup{
        padding: 0 35px 30px;
      }
      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $labelUsername = labelForm.render("Username");
    const $inputUsername = inputForm.render("Name-Example");

    const $labelEmail = labelForm.render("Email");
    const $inputEmail = inputForm.render("example@email.com");

    const $labelPassword = labelForm.render("Password");
    const $inputPassword = inputForm.render("***********");

    const $labelConfirmPassword = labelForm.render("Confirm password");
    const $inputConfirmPassword = inputForm.render("***********");

    const $submitSignUp = submitForm.render("submit");

    return `
      ${$labelUsername + $inputUsername}
      ${$labelEmail + $inputEmail}
      ${$labelPassword + $inputPassword}
      ${$labelConfirmPassword + $inputConfirmPassword}
      ${$submitSignUp}

    `;
  };

  module.createForm = () => {
    module._style();
    return `
      <form action="" method="POST" class="form-signup">
        ${module._children()}
      </form>
    `;
  };

  return {
    render: module.createForm,
  };
})();
