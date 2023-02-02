function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.getElementById("controls").firstElementChild,
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxes: document.getElementById('boxes'),
}

let number = 0;
let size = 30;

refs.input.addEventListener("input", (event) => {number = event.currentTarget.value;});
refs.btnCreate.addEventListener("click", () => {createBoxes(number)});
refs.btnDestroy.addEventListener("click", () => {
  refs.boxes.innerHTML = '';
  size = 30;
})

function createBoxes(amount) {
  const aelAll = [];

  for (let i = 0; i < amount; i += 1) {
    const el = document.createElement("div");
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.backgroundColor = getRandomHexColor();
    aelAll.push(el);

    size += 10;
  }
  
  refs.boxes.append(...aelAll)
};
