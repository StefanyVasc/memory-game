(function () {
  const $root = document.querySelector("#root");

  const $flatButtonLogin = flatButton.render("log in", false);
  const $flatButtonSignUp = flatButton.render("sign up", true);

  const $collabLogo = collabLogo.render();
  const $collabTitle = collabTitle.render("welcome!");

  const $logoWrapper = logoWrapper.render($collabLogo, $collabTitle);

  const $fieldSignUp = formField.render({
    content: "Username",
    placeholder: "Name-example",
    type: "text",
  });

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);

  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $fieldSignUp);
})();
