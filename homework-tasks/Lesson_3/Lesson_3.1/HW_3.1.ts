async function foobar<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data: T = await response.json();
  return data;
}

type User = {
  id: number;
  name: string;
  email: string;
};

foobar<User>('https://jsonplaceholder.typicode.com/users/2')
  .then(user => {
    console.log(user);
  })
  .catch(error => {
    console.error('Error fetching user:', error);
  });
