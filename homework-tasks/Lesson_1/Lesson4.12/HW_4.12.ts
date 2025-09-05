function swap (arr: number[], index1:number, index2:number):number[] | number {
  if (index1 < arr.length && index2 < arr.length) {

    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp

    return arr
  }

  return -Infinity
}
console.log(swap([12, 25, 89, 5, -123], 0, 4));
