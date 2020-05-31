const formLogin = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login {
        padding: 0 35px 30px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $labelUsernameOrEmail = labelForm.render("Username ou e-mail");
    const $inputUsernameOrEmail = inputForm.render({
      type: "text",
      placeholder: "example@email.com",
    });

    const $labelPassword = labelForm.render("Password");
    const $inputPassword = inputForm.render({
      type: "password",
      placeholder: "**********",
    });

    const $submitLogin = submitForm.render("Login");

    const $linkForget = forgetPassword.render("Forget password?");

    return `
      ${$labelUsernameOrEmail + $inputUsernameOrEmail}
      ${$labelPassword + $inputPassword}
      ${$linkForget}
      ${$submitLogin}

    `;
  };
  module.createForm = () => {
    module._style();

    return `
      <form method="POST" action="" class="form-login">
        ${module._children()}
      </form> 
    `;
  };

  return {
    render: module.createForm,
  };
})();
