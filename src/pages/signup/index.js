(function () {
  const $root = document.querySelector("#root");

  const $flatButtonLogin = flatButton.createNewFlatBtn("log in");

  const $flatButtonSignUp = flatButton.createNewFlatBtn("sign up", true);

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);
})();
