function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color")

btnChangeColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  textColor.textContent = randomColor
  document.body.style.backgroundColor = randomColor;
  // console.log(randomColor)
})