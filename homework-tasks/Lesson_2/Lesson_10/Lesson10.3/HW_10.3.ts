const userForm = document.getElementById('userForm') as HTMLFormElement;
const button = document.getElementById('btn') as HTMLButtonElement;
const targetDiv = document.getElementById('target') as HTMLDivElement;

button.addEventListener('click', (evt) => {
  evt.preventDefault();

  const nameInput = userForm.elements.namedItem('name') as HTMLInputElement;
  const surnameInput = userForm.elements.namedItem('surname') as HTMLInputElement;
  const ageInput = userForm.elements.namedItem('age') as HTMLInputElement;

  const nameValue: string = nameInput.value;
  const surnameValue: string = surnameInput.value;
  const ageValue: number = parseInt(ageInput.value);

  const obj = { name: nameValue, surname: surnameValue, age: ageValue };

  targetDiv.innerText = `${obj.name} ${obj.surname} ${obj.age}`;

  console.log(obj);
});