class User  {
  constructor(private id: number, private name: string, private surname: string, private email: string, private phone: string) {

  }
}

let users:User[] = [
  new User(1, 'Denis', 'Petrov', 'petrov.d@gmail.com', '+380991234589'),
  new User(2, 'Sasha', 'Ivanov', 'ivanov.s@gmail.com', '+380991234590'),
  new User(3, 'Sveta', 'Orlova', 'orlova.s@gmail.com', '+380991234591'),
  new User(4, 'Oleg', 'Petrov', 'petrov.o@gmail.com', '+380991234592'),
  new User(5, 'Dima', 'Urlov', 'urlov.d@gmail.com', '+380991234593'),
  new User(6, 'Masha', 'Dashkevich', 'dashkevich.m@gmail.com', '+380991234594'),
  new User(7, 'Roma', 'Buganov', 'buganov.r@gmail.com', '+380991234595'),
  new User(8, 'Volodya', 'Petrov', 'petrov.v@gmail.com', '+380991234596'),
  new User(9, 'Vova', 'Sokolov', 'sokolov.v@gmail.com', '+380991234597'),
  new User(10, 'Sergei', 'Petrov', 'petrov.s@gmail.com', '+380991234598'),
]

console.log(users)