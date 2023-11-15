import { createHome } from "./home";
import { createAbout } from "./about";
import { createRecipes } from "./recipes";

function createBtnsDiv() {
  const btnsDiv = document.createElement("div");
  btnsDiv.classList.add(`flex`, `justify-center`, `gap`, `gap-4`, `mt-6`);

  btnsDiv.appendChild(createBtns("home", "Home", createHome));
  btnsDiv.appendChild(createBtns("recipes", "Recipes", createRecipes));
  btnsDiv.appendChild(createBtns("about", "About", createAbout));

  return btnsDiv;
}

function createBtns(id, text, func) {
  const btn = document.createElement("button");
  btn.classList.add(
    `border-white`,
    `border`,
    `rounded-md`,
    `p-4`,
    `hover:bg-slate-200`,
    `hover:text-gray-800`
  );

  btn.id = id;
  btn.innerText = text;
  btn.addEventListener("click", func);

  return btn;
}

function addEventToButton(btn, func) {
  btn.addEventListener("click", func);
}

export { createBtnsDiv };
