type TypeFunction = {functionClone: Function, key: string}

function cloner<T> (obj: T):T {
   if (obj) {
    const functions: Array<TypeFunction> = []
    for (const key in obj) {
      if (typeof obj[key] === 'function') {
        const functionClone = (obj[key] as Function).bind({})
        functions.push({functionClone, key})
      }
    }
    const cloneObj: T = JSON.parse(JSON.stringify(obj))
    for (const func of functions) {
      (cloneObj as any)[func.key] = func.functionClone
    }
    console.log(cloneObj)
    return cloneObj
  }

  throw new Error('Error in code !!!')
}

const clone = cloner({
  id: 1,
  name: 'Step_1',
  stepUp() {
    console.log('Step Up')},
  stepDown(){
    console.log('Step Down')}
  }
)

clone.stepUp()
clone.stepDown()