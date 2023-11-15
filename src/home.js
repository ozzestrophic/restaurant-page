function createHome() {
  const home = document.createElement("div");

  const headingsDiv = document.createElement("div");
  headingsDiv.classList.add(
    `flex`,
    `flex-col`,
    `text-center`,
    `text-white`,
    `place-content-center`,
    `h-full`,
    `backdrop-blur-sm`
  );

  const h1 = document.createElement("h1");
  h1.classList.add(`text-5xl`, `font-bold`, `font-serif`);
  h1.innerText = `Welcome to Flafelo's`;

  const p = document.createElement("p");
  p.innerText = "This is my new awesome restaurant";

  headingsDiv.appendChild(h1);
  headingsDiv.appendChild(p);

  home.appendChild(headingsDiv);
  const mid = document.querySelector("#mid");
  mid.innerHTML = home.innerHTML;
}

export { createHome };
