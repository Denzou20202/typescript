type CourseType = {
  title:string
  monthDuration: number
}

const coursesAndDurationArray:CourseType[] = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
]

for (const coursesElement of coursesAndDurationArray) {
  const div:HTMLDivElement = document.createElement('div')
  div.innerText = `${coursesElement.title} - ${coursesElement.monthDuration}`
  document.body.appendChild(div)
}