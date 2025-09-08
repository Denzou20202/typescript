"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let currentNumber = Number(localStorage.getItem('number'));
currentNumber += 1;
localStorage.setItem('number', currentNumber.toString());
const div = document.getElementById('target');
div.innerText = currentNumber.toString();
//# sourceMappingURL=HW_10.4.js.map