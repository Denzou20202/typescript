interface ICourse {
  title: string
  monthDuration: number
  hourDuration: number
  modules: string[]
}


let coursesArray:ICourse[] = [
  {
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
  },
  {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'git',
      'java core',
      'java advanced']
  },
  {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'python core',
      'python advanced']
  },
  {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
  },
  {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'node.js',
      'python',
      'java']
  },
  {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
  },
]


for (const course of coursesArray) {

  const div:HTMLDivElement = document.createElement('div')
  div.classList.add('courseName')


  const titleDiv:HTMLDivElement = document.createElement('div')
  titleDiv.classList.add('titleText')

    const h3:HTMLHeadingElement = document.createElement('h3')
    h3.classList.add('title')
    h3.innerText = course.title
  titleDiv.appendChild(h3)

  const infoDiv:HTMLDivElement = document.createElement('div')
  infoDiv.classList.add('textInfo')

    const p:HTMLParagraphElement = document.createElement('p')
    p.classList.add('info')
    p.innerText = `Month - ${course.monthDuration}   Hours - ${course.hourDuration}`
  infoDiv.appendChild(p)


  const listDiv:HTMLDivElement = document.createElement('div')
  listDiv.classList.add('listInfo')

    const ul:HTMLUListElement = document.createElement('ul')
    ul.classList.add('courseList')
    for (const item of course.modules) {
      const liItem:HTMLLIElement =  document.createElement('li')
      liItem.innerText = `${item}`
      ul.appendChild(liItem)
    }
  listDiv.appendChild(ul)



  div.append(titleDiv, infoDiv, listDiv)

  document.body.appendChild(div)
}