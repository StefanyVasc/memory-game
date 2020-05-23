(function () {
  const $root = document.querySelector("#root");
  const $flatButtonLogin = flatButton.createNewFlatBtn("login");
  const $flatButtonSignUp = flatButton.createNewFlatBtn("signup");

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);
})();
