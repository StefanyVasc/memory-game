(function () {
  const $root = document.querySelector("#root");
  const $flatButtonLogin = flatButton.createNewFlatBtn({
    content: "login",
  });
  const $flatButtonSignUp = flatButton.createNewFlatBtn({
    content: "sing up",
    variationClass: "-active",
  });

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);
})();
