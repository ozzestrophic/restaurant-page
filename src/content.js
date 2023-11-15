import { createBtnsDiv } from "./buttons";
import { createHome } from "./home";

function createContent() {
  const content = document.querySelector("#content");

  content.classList.add(
    `bg-[url('../src/falafel.jpg')]`,
    `bg-cover`,
    `bg-center`
  );

  content.appendChild(createHeader());
  content.appendChild(createMidContent());
  createHome();
  content.appendChild(createFooter());
}

function createHeader() {
  const header = document.createElement("header");

  header.appendChild(createBtnsDiv());

  return header;
}

function createMidContent() {
  const midContent = document.createElement("div");
  midContent.id = "mid";

  return midContent;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add(`text-center`);
  footer.innerText = "Created by Osama";

  return footer;
}

export { createContent };
