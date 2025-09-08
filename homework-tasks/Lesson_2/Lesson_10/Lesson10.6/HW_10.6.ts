let killogram = document.getElementById('convert') as HTMLInputElement
const resultDiv = document.getElementById('result') as HTMLDivElement

killogram.addEventListener('input', function () {
  resultDiv.innerText = String(Number(this.value) * 2.2)
})
