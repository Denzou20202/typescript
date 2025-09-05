let str:string = 'Ревуть воли як ясла повні’'

function stringToArray (str:string):string[] {
  if (str) {
    const split:string[] = str.split(' ');

    return split
  }

  return ['']
}

console.log(stringToArray(str))