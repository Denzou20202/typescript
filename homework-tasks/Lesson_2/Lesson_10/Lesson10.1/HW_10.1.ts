const buttons:HTMLCollectionOf<Element> = document.getElementsByClassName('btn');
const button:Element = buttons[0]

button.addEventListener('click', () => {
  const text = document.getElementById('text') as HTMLElement
  if (text) {
    text.style.display = 'none'
  }
})




