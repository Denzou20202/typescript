function exchange (sumUAH:number,currencyValues:{currency:string, value:number}[],exchangeCurrency:string): number{
  let currencyItem

  for (let i = 0; i < currencyValues.length; i++) {
    if (currencyValues[i].currency === exchangeCurrency) {
      currencyItem = currencyValues[i]
    }
  }
  if (currencyItem) {
    return sumUAH / currencyItem.value
  }
  return -1
}
console.log(exchange(15000,
  [
    {currency:'USD',value:42},
    {currency:'EUR',value:45}],
'USD'))