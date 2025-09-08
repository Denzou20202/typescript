const button = document.getElementById('btn') as HTMLButtonElement
const input = document.getElementById('age') as HTMLInputElement

  button.addEventListener('click', function () {
  const ageInput:number = parseInt(input.value)

  if (isNaN(ageInput)) {
    alert ('Enter your age again')
  } else if (ageInput < 18) {
    alert ('Access denied')
  } else {
    alert(`Your age ${ageInput}, welcome`)
  }
}
)




