type Author = {name: string, age:number}

type TypeBook = {
  title: string,
  pageCount: number,
  genre: string,
  authors: Author[]
}


let book1:TypeBook = {
  title: 'HTML',
  pageCount: 480,
  genre: 'programing',
  authors: [
    {
      name: 'Micky',
      age: 34
    },
    {
      name: 'Jone',
      age: 32
    }
  ]
};
let book2:TypeBook = {
  title: 'Canada',
  pageCount: 250,
  genre: 'travel',
  authors: [
    {
      name: 'Anna',
      age: 25
    },
    {
      name: 'Olga',
      age: 27
    }
  ]
};
let book3:TypeBook = {
  title: 'Love, Death, Robots',
  pageCount: 832,
  genre: 'comedy',
  authors: [
    {
      name: 'Robert',
      age: 30
    },
    {
      name: 'Dasha',
      age: 27
    }
  ]
};