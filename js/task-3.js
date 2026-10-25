const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")
const change = input.addEventListener(`input`, element => {
    let name
    if (element.target.value.trim() === ``) {
        name = `Anonymous`
    }
    else {
        name = element.target.value.trim()
    }
   output.textContent = name
})