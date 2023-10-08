const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const initialSize = 30;
  const step = 10;
  boxes.innerHTML = ''; 

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const size = initialSize + i * step;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(div);
  }
}

function destroyBoxes() {
  boxes.innerHTML = ''; 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createButton.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
