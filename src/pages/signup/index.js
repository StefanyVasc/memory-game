(function () {
  const $root = document.querySelector("#root");
  const $flatButtonLogin = flatButton.createNewFlatBtn();
  const $flatButtonSignUp = flatButton.createNewFlatBtn();

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);
})();
