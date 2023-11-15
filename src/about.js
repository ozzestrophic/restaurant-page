function createAbout() {
  const home = document.createElement("div");
  home.innerHTML = "this is About";

  const mid = document.querySelector("#mid");
  mid.innerHTML = home.innerHTML;
}

export { createAbout };
