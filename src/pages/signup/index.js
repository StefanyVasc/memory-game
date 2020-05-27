(function () {
  const $root = document.querySelector("#root");

  const $flatButtonLogin = flatButton.render("log in", false);
  const $flatButtonSignUp = flatButton.render("sign up", true);

  const $collabLogo = collabLogo.render();
  const $collabTitle = collabTitle.render("welcome!");

  const $logoWrapper = logoWrapper.render($collabLogo, $collabTitle);

  const $labelEmail = labelForm.render("Email");
  const $inputEmail = inputForm.render("example@email.com");

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);

  $root.insertAdjacentHTML("beforeend", $logoWrapper);

  $root.insertAdjacentHTML("beforeend", $labelEmail);
  $root.insertAdjacentHTML("beforeend", $inputEmail);
})();
