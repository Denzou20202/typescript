function cylinderArea (r:number, h:number): number {
  return 2 * Math.PI * r * h + 2 * Math.PI * r ** 2
}

console.log(cylinderArea(3, 15))