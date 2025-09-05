const exchange = (sumUAH:number, currencyValues:{currency:string,value:number }[], exchangeCurrency:string) => {
  const currencyItem = currencyValues.find(
    item => item.currency === exchangeCurrency
  );
  if (currencyItem) {

    return sumUAH / currencyItem.value;

  }
};
console.log(exchange(15000,
  [
    {currency:'USD',value:42},
    {currency:'EUR',value:45}],
'USD'))