(function () {
  const $root = document.querySelector("#root");

  const $flatButtonLogin = flatButton.render("log in", false);
  const $flatButtonSignUp = flatButton.render("sign up", true);
  const $avatarWrapper = avatarWrapper.render("welcome!");

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);
  $root.insertAdjacentHTML("beforeend", $avatarWrapper);
})();
