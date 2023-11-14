console.log("this is working!");

function createContent() {
  const content = document.querySelector("#content");

  content.classList.add(`grid`, `grid-rows-[30vh_minmax(65vh,1fr)_5vh]`);

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

    header.innerText = "this is auto generated";

    return header;
  }

  content.appendChild(createHeader());
}

createContent();
