const sum = (array:number[]):number => {
  let kasa:number = 0;
  for (let item of array) {
    kasa += item;
  }
  return kasa;
};

console.log(sum([12, 25, 89, 5, -123]));
