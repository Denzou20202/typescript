let currentNumber:number = Number(localStorage.getItem('number'))

currentNumber += 1

localStorage.setItem('number', currentNumber.toString())

const div = document.getElementById('target') as HTMLDivElement
  div.innerText = currentNumber.toString()

