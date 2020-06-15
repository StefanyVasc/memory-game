const page404 = function () {
  const $root = document.querySelector("#root");

  const $status = statusPage.render("error 404 - page not found");

  $root.insertAdjacentHTML("beforeend", $status);
};
