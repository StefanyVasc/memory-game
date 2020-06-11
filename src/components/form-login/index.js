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
      placeholder: "Digite aqui sua senha",
      id: "password",
    });

    const $linkForget = linkForget.render({
      content: "Forget password?",
      href: "#",
    });
    const $eyePassword = eyePassword.render({ attrFor: "password" });
    const $submitLogin = submitForm.render({ content: "Login", path: "game" });

    return `
      ${$labelUsernameOrEmail + $inputUsernameOrEmail}
      ${$labelPassword + $inputPassword + $eyePassword}
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
