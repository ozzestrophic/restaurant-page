import { createBtnsDiv } from "./buttons";

function createContent() {
  const content = document.querySelector("#content");

  content.classList.add(`grid`, `grid-rows-[30vh_minmax(65vh,1fr)_5vh]`);

  content.appendChild(createHeader());
  content.appendChild(createMidContent());
  content.appendChild(createFooter());
}

function createHeader() {
  const header = document.createElement("header");
  header.classList.add(
    `text-white`,
    `text-center`,
    `gap-2`,
    `bg-[url('../src/falafel.jpg')]`,
    `bg-cover`,
    `bg-center`
  );

  const headingsDiv = document.createElement("div");
  headingsDiv.classList.add(
    `flex`,
    `flex-col`,
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
  headingsDiv.appendChild(createBtnsDiv());

  header.appendChild(headingsDiv);

  return header;
}

function createMidContent() {
  const midContent = document.createElement("div");
  midContent.innerHTML = "This is inner";

  return midContent;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add(`text-center`);
  footer.innerText = "Created by Osama";

  return footer;
}

export { createContent };
