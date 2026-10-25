function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const chcolor = document.querySelector(".change-color")
const span = document.querySelector(`span.color`)
const body = document.body

chcolor.addEventListener(`click`, btn => {
const random = getRandomHexColor()
body.style.backgroundColor = random
span.textContent = random
})