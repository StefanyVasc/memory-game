(function () {
  const { hash } = window.location;
  const paths = [];
  paths[""] = login;
  paths["#/login"] = login;
  paths["#/signup"] = signup;
  paths["#/game"] = game;
  paths["#/error"] = page404;

  paths[hash] ? paths[hash]() : paths["#/error"]();

  paths[hash]();
})();
