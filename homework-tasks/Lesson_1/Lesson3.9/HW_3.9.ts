type Users = {
  id: number,
  name: string,
  age: number,
  status: boolean
  address?:{}
}

type Cities = {
  user_id: number,
  country: string,
  city: string
}


let usersWithId:Users[] = [
  {id: 1, name: 'vasya', age: 31, status: false},
  {id: 2, name: 'petya', age: 30, status: true},
  {id: 3, name: 'kolya', age: 29, status: true},
  {id: 4, name: 'olya', age: 28, status: false}

];

let citiesWithId:Cities[] = [
  {user_id: 3, country: 'USA', city: 'Portland'},
  {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
  {user_id: 2, country: 'Poland', city: 'Krakow'},
  {user_id: 4, country: 'USA', city: 'Miami'}

];

for (let i = 0; i < usersWithId.length; i++) {
  let user:Users = usersWithId[i];

  for (let j = 0; j < citiesWithId.length; j++) {
    let city:Cities = citiesWithId[j];

    if (user.id === city.user_id) {
      user.address = {
        user_id: city.user_id,
        country: city.country,
        city: city.city
      };
    }
  }
}

console.log(usersWithId);