"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const button = document.getElementById('btn');
const input = document.getElementById('age');
button.addEventListener('click', function () {
    const ageInput = parseInt(input.value);
    if (isNaN(ageInput)) {
        alert('Enter your age again');
    }
    else if (ageInput < 18) {
        alert('Access denied');
    }
    else {
        alert(`Your age ${ageInput}, welcome`);
    }
});
//# sourceMappingURL=HW_10.2.js.map