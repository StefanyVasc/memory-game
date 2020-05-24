(function () {
  const $root = document.querySelector("#root");

  const $flatButtonLogin = flatButton.createNewFlatBtn("log in");

  const $flatButtonSignUp = flatButton.createNewFlatBtn("sign up", true);

  const $collabLogo = collabLogo.createLogo();

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);
  $root.insertAdjacentHTML("beforeend", $collabLogo);
})();
