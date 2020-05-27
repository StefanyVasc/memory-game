(function () {
  const $root = document.querySelector("#root");

  const $flatButtonLogin = flatButton.render("log in", false);
  const $flatButtonSignUp = flatButton.render("sign up", true);

  const $collabLogo = collabLogo.render();
  const $collabTitle = collabTitle.render("welcome!");

  const $logoWrapper = logoWrapper.render($collabLogo, $collabTitle);

  const $labelUsername = labelForm.render("Username");
  const $inputUsername = inputForm.render("Name-Example");

  const $labelEmail = labelForm.render("Email");
  const $inputEmail = inputForm.render("example@email.com");

  const $labelPassword = labelForm.render("Password");
  const $inputPassword = inputForm.render("***********");

  const $labelConfirmPassword = labelForm.render("Confirm password");
  const $inputConfirmPassword = inputForm.render("***********");

  const $submitSignUp = submitForm.render("submit");

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);

  $root.insertAdjacentHTML("beforeend", $logoWrapper);

  $root.insertAdjacentHTML("beforeend", $labelUsername);
  $root.insertAdjacentHTML("beforeend", $inputUsername);

  $root.insertAdjacentHTML("beforeend", $labelEmail);
  $root.insertAdjacentHTML("beforeend", $inputEmail);

  $root.insertAdjacentHTML("beforeend", $labelPassword);
  $root.insertAdjacentHTML("beforeend", $inputPassword);

  $root.insertAdjacentHTML("beforeend", $labelConfirmPassword);
  $root.insertAdjacentHTML("beforeend", $inputConfirmPassword);
  3;
  $root.insertAdjacentHTML("beforeend", $submitSignUp);
})();
