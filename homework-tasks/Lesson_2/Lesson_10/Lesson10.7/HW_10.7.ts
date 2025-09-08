function addToLocalStorage (arrayName:string, objToAdd:Record<string, unknown>):void {
  const listItem:string | null = localStorage.getItem(arrayName)
  if (!listItem) {
    throw new Error("It's' not Array !")
  }

  const array:Record<string, unknown>[] = JSON.parse(listItem)
  if (typeof objToAdd === 'object') {
    array.push(objToAdd)
  }
  localStorage.setItem(arrayName, JSON.stringify(array))
}

addToLocalStorage('sessionsList', {})