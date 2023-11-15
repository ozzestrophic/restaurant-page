function createHome() {
  const home = document.createElement("div");
  home.innerHTML = "this is home";

  const mid = document.querySelector("#mid");
  mid.innerHTML = home.innerHTML;
}

export { createHome };
