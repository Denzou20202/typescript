type TypeCourse = {
  id?: number
  title: string
  monthDuration: number
}

type TypeId = { id: number } & TypeCourse

let coursesAndDurationArray: TypeCourse[] = [

  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}

];

console.log(coursesAndDurationArray.map<TypeId>((course:TypeCourse, index) => ({id: index +1, ...course})));