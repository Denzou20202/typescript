const sessionsList: string[] = JSON.parse(localStorage.getItem('sessionsList') || '[}')

for (const sessionsListElement of sessionsList) {
  const div:HTMLDivElement = document.createElement('div')
  div.innerText = sessionsListElement.toString()
  document.body.appendChild(div)
}