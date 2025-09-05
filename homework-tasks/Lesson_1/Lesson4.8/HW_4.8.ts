type TypeArray = number | string | boolean

function list (array: TypeArray[]): void {
  document.write(`<ul>`)
  for (let item of array)  {
    document.write(`<li>${item}</li>`)
  }
  document.write(`</ul>`)

}

list([123, 'asdasda', true])

