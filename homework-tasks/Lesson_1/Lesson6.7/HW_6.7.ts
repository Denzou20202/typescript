let nums: number[] = [11,21,3];

function sortNums(arrayOfNums:number[],direction:string):number[] {
  if (direction === 'ascending') return arrayOfNums.sort((a, b) => a-b);
  if (direction === 'descending') return arrayOfNums.sort((a, b) => b-a)

  return arrayOfNums
}

console.log(sortNums(nums,'ascending'))
console.log(sortNums(nums,'descending'))