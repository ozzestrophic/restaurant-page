function createRecipes() {
  const home = document.createElement("div");
  home.innerHTML = "this is recipes";

  const mid = document.querySelector("#mid");
  mid.innerHTML = home.innerHTML;
}

export { createRecipes };
