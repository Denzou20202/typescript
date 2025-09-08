"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userForm = document.getElementById('userForm');
const button = document.getElementById('btn');
const targetDiv = document.getElementById('target');
button.addEventListener('click', (evt) => {
    evt.preventDefault();
    const nameInput = userForm.elements.namedItem('name');
    const surnameInput = userForm.elements.namedItem('surname');
    const ageInput = userForm.elements.namedItem('age');
    const nameValue = nameInput.value;
    const surnameValue = surnameInput.value;
    const ageValue = parseInt(ageInput.value);
    const obj = { name: nameValue, surname: surnameValue, age: ageValue };
    targetDiv.innerText = `${obj.name} ${obj.surname} ${obj.age}`;
    console.log(obj);
});
//# sourceMappingURL=HW_10.3.js.map