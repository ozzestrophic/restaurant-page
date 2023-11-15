function createBtnsDiv() {
  const btnsDiv = document.createElement("div");
  btnsDiv.classList.add(`flex`, `justify-center`, `gap`, `gap-4`, `mt-6`);

  btnsDiv.appendChild(createBtns("home", "Home"));
  btnsDiv.appendChild(createBtns("recipes", "Recipes"));
  btnsDiv.appendChild(createBtns("about", "About"));

  return btnsDiv;
}

function createBtns(id, text) {
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

  return btn;
}

export { createBtnsDiv };
