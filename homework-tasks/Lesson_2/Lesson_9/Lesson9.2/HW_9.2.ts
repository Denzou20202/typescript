let arr:string[] = ['Main','Products','About us','Contacts']


const menu:HTMLUListElement = document.createElement('ul')
menu.classList.add('menu')


document.body.appendChild(menu)

for (const item of arr) {
  const liItem:HTMLLIElement =  document.createElement('li')
  liItem.innerText = item
  menu.appendChild(liItem)
}