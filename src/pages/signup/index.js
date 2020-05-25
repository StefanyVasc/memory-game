(function () {
  const $root = document.querySelector("#root");

  const $flatButtonLogin = flatButton.createNewFlatBtn("log in", false);
  const $flatButtonSignUp = flatButton.createNewFlatBtn("sign up", true);
  const $avatarWrapper = avatarWrapper.createAvatarWrapper();
  const $collabLogo = collabLogo.createLogo();
  const $collabTitle = collabTitle.createTitle("welcome!");

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);
  $root.insertAdjacentHTML("beforeend", $avatarWrapper);

  $root.insertAdjacentHTML("beforeend", $collabLogo);
  $root.insertAdjacentHTML("beforeend", $collabTitle);
})();
